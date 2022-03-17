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
        access_token = create_access_token(identity=user.serialize())
        return jsonify(access_token= access_token), 201
    except Exception as err:
        print(str(err))
        return jsonify({'message': str(err)}), 500


# @api.route("/user", methods=["GET"])
# def get_user():
#         user = {"name": "Matias", "age": 28}
#         return jsonify({'results':user}), 201

# requests={}

@api.route('/test')
def test():
    url = "https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"

    payload={}
    headers = {
    'Authorization': 'Bearer aaa'
    }

    # eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0NzQ2NjU4NiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiOGIzYjAyMWEtZjkxYS00MDM5LWJlMGYtMjdiZDcyMmRlZGE5IiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.87VHaK4d2wF681X6zh7ZHgBqZHovUCZTlb6Di459T9E
    
    response = requests.request("POST", url, headers=headers, data=payload)
    print("------------------------------------>", response.text,"<------------------------------------------")

    return response.json()

@api.route('/search')
def search():
    url = "https://api.idealista.com/3.5/es/search?"
    filtersUrl = request.json.get('url', None)
    # filters = request.json
    print("--->URL FILTROS: <----",filtersUrl)
    # filtersUrl = "operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"
    finalUrl = url + filtersUrl
    print("-------------------------->",finalUrl,"<----------------------------------------")

    payload={}
    headers = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIl0sImV4cCI6MTY0NzU2MDg0NCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QVUJMSUMiXSwianRpIjoiOGYxZDBjNGMtZWRlMC00NWU4LWI3MWMtN2I4ZmEyZmZhMWFkIiwiY2xpZW50X2lkIjoidnI5ZHR0cGd2amZtaTVpazEyZGlvcDd1dXhrMDZlYWkifQ.k0q2k8eHDlSV-32__W_9J51kNdCU4VFkUrWiKXG5fRs'
    }
    
    response = requests.request("POST", finalUrl, headers=headers, data=payload)
    print("RESPUESTA------------------------------------>", response.text,"<------------------------------------------")

    return response.json()

    # filters_url = "operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000"

# https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.430,-3.702&distance=15000