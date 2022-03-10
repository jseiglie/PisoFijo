# https://api.idealista.com/3/es/search?
# locale=es&maxItems=20&numPage=1&operation=sale&order=publicationDate&propertyType=garages
# &sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&locationId=0-EU-ES-28

#you must specify a center + distance or locationId in each request

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Property
from flask_cors import CORS
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from werkzeug.security import check_password_hash, generate_password_hash
from sqlalchemy import exc

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none() 

    if not user:
        return jsonify({'message': "User doesn't exist"}), 404   
    if not check_password_hash(user.password, password):
        return jsonify({'message': 'Your pass doesn"t match'}), 500    
    access_token = create_access_token(identity=user.serialize())
    return jsonify(access_token= access_token), 200
    else :
        jsonify({"msg": "Bad username or password"}), 401

@api.route("/register", methods=["POST"])
def register():
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    firstName = request.json.get('firstName', None)
    lastName = request.json.get('lastName', None)
    
    if not (firstName and lastName and email and password):
        return jsonify({'message': 'Missing data'}), 400

    hash_password = generate_password_hash(password)

    user = User(email=email, password = hash_password,  firstName=firstName, lastName = lastName )
    
    try:
        db.session.add(user)
        db.session.commit()
        token = create_access_token(identity=user.email)
        return jsonify({'token': token}), 201
    except Exception as err:
        print(str(err))
        return jsonify({'message': str(err)}), 500
