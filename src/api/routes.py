# https://api.idealista.com/3/es/search?
# locale=es&maxItems=20&numPage=1&operation=sale&order=publicationDate&propertyType=garages
# &sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&locationId=0-EU-ES-28

#you must specify a center + distance or locationId in each request

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
import requests
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Property
from flask_cors import CORS
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from werkzeug.security import check_password_hash, generate_password_hash
from sqlalchemy import exc
import sys

#install: pipenv install requests

api = Blueprint('api', __name__)

# filterEntries: filters =>Object.entries(filters), 
# 			filteredArrElementsNotEmpty: arr =>{
# 				return arr.filter(el => el[1] != '' || el[1] == true)
# 			},
# 			concatenateArr: (arr)=>{
# 				return ((arr.map(el =>el.join("="))).join("&"))
# 			},
# 			UrlFilters: filtersObj =>{
# 				const url = getActions().concatenateArr(
# 							getActions().filteredArrElementsNotEmpty(
# 							getActions().filterEntries(filtersObj)));
# 				console.log("UrlFilters: ",url)
# 				return (url)
# 			},

# def filterEntries(filters) 
#     return


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).one_or_none()    
    if user:
        access_token = create_access_token(identity=user.serialize())
        # print("------------------>",user.serialize())
        # return jsonify(access_token = access_token), 200
        return jsonify({"access_token": access_token, "identity": user.serialize()}), 200 
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
        access_token = create_access_token(identity=user.serialize())
        return jsonify(access_token= access_token), 201
    except Exception as err:
        print(str(err))
        return jsonify({'message': str(err)}), 500

@api.route('/search' , methods=["POST"])
def search():
    url = "https://api.idealista.com/3.5/es/search?"
    filtersUrl = request.json.get('url', None)
    # filtersUrl = "operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"
    finalUrl = url + filtersUrl
    payload={}
    headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0NzkwNDY3MywiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiNDVhNWZlOGUtYzBiMC00MTdjLWEzZDMtNjBkY2YzYjFlNDM2IiwiY2xpZW50X2lkIjoiYWRyM2dycjgzMWFza3FtOTluYXB3Y2MwZTI5b3Y1eWYifQ.vZ_wlON1FIjmtRXchPfr6Box6IecSqWfay65dTtTOlg'
    }
    respuesta = requests.request("POST", finalUrl, headers=headers, data=payload)
    print("RESPUESTA------------------------------------>", respuesta.text,"<------------------------------------------")
    return  jsonify(respuesta.json()), 200

#Ejemplo de consulta filtrada a base de datos 
#-----------------------------------------------------------------------------------------
# @api.route('/filter-properties', method=['GET'])
# def get_filter_properties():
#     properties = Property.query.filter(and_(
#         size > 100,
#         rooms > 2,
#         propertyType == "flat"
#     ))
#     return jsonify({'results': properties.serialize()})
#-----------------------------------------------------------------------------------------
#Ejemplo de añadir nuevas entradas a la base de datos
#-----------------------------------------------------------------------------------------
@api.route('/newproperty', methods=['POST'])
def add_new_property():
    body = request.get_json()
    print(body)
    return jsonify({'response': 'ERROR'})
#-----------------------------------------------------------------------------------------
