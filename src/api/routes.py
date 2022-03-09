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
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()    
    if user:
        access_token = create_access_token(identity=user.serialize())
        return jsonify(access_token= access_token), 200
    else :
        jsonify({"msg": "Bad username or password"}), 401

@api.route("/register", methods=["POST"])
def register():
    if request.method == 'POST' and 'password' in request.form and 'email' in request.form :
        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).one_or_none()
        if user:
            print('user already exist')
    else:
        new_user = User(
            email= request.json.get("email", None)
            password = generate_pass_hash(password, method='pbkdf2:sha256', salt_length=8),
            firstName = request.json.get("firstName", None)
            lastName  = request.json.get("lastName", None)
        )