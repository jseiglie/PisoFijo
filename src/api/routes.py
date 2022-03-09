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


api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()

    print("userchan", user.serialize())
    
    if user:
        access_token = create_access_token(identity=user.serialize())
        return jsonify(access_token= access_token), 200
    else :
        jsonify({"msg": "Bad username or password"}), 401

