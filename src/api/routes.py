# https://api.idealista.com/3/es/search?
# locale=es&maxItems=20&numPage=1&operation=sale&order=publicationDate&propertyType=garages
# &sort=desc&apikey={api_key}&t=1&language=es&bankOffer=true&locationId=0-EU-ES-28

#you must specify a center + distance or locationId in each request

"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Property
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200