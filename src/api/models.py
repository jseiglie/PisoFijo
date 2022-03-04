from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import relationship

db = SQLAlchemy()

Favorites = db.Table('favorites', db.metadata,
        db.Column('user_id', db.ForeignKey('user.id')),
        db.Column('property_propertyCode', db.ForeignKey('property.propertyCode'))
    )

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(60), unique=False, nullable=False)
    lastName = db.Column(db.String(60), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    telephone = db.Column(db.Integer, unique=True, nullable=False)
    password = db.Column(db.String(16), unique=False, nullable=False)
    children = db.relationship("Property",
                    secondary=Favorites)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "telephone": self.telephone,
        }


class Property(db.Model):
    __tablename__ = 'property'
    propertyCode = db.Column(db.Integer, primary_key=True)
    thumbnail = db.Column(db.String, unique=False, nullable=True)
    numPhotos = db.Column(db.String, unique=False, nullable=True)
    floor = db.Column(db.Integer, unique=False, nullable=True)
    price = db.Column(db.Integer, unique=False, nullable=True)
    propertyType = db.Column(db.String(20), unique=False, nullable=True)
    operation = db.Column(db.String(20), unique=False, nullable=True)
    size = db.Column(db.Integer, unique=False, nullable=True)
    rooms = db.Column(db.Integer, unique=False, nullable=True)
    bathrooms = db.Column(db.Integer, unique=False, nullable=True)
    address = db.Column(db.String(120), unique=False, nullable=True)
    province = db.Column(db.String(20), unique=False, nullable=True)
    municipality = db.Column(db.String(20), unique=False, nullable=True)
    district = db.Column(db.String(120), unique=False, nullable=True)
    latitude = db.Column(db.Float(20), unique=False, nullable=True)
    longitude = db.Column(db.Float(20), unique=False, nullable=True) 
    distance = db.Column(db.String(20), unique=False, nullable=True)
    description = db.Column(db.String(1500), unique=False, nullable=True)
    status = db.Column(db.String(10), unique=False, nullable=True)
    hasLift = db.Column(db.Boolean, unique=False, nullable=True)
    agency = db.Column(db.Boolean, unique=False, nullable=True)
    bankOffer = db.Column(db.String(20), unique=False, nullable=True)
    ownerId = db.Column(db.Integer, db.ForeignKey('user.id'))
    contact_Name = db.Column(db.String(20), unique=False, nullable=True)
    contact_Phone = db.Column(db.String(20), unique=False, nullable=True)

    def __repr__(self):
        return '<Property %r>' % self.propertyCode

    def serialize(self):
        return {
            "propertyCode": self.propertyCode,
            "thumbnail": self.thumbnail,
            "numPhotos": self.numPhotos,
            "floor": self.floor,
            "price": self.price,
            "propertyType": self.propertyType,
            "operation": self.operation,
            "size": self.size,
            "rooms": self.rooms,
            "bathrooms": self.bathrooms,
            "address": self.address,
            "province": self.province,
            "municipality": self.municipality,
            "district": self.district,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "distance": self.distance,
            "description": self.description,
            "status": self.status,
            "hasLift": self.hasLift,
            "agency": self.agency,
            "bankOffer": self.bankOffer,
            "ownerId": self.ownerId,            
            "contact_Name": self.bankOffer,
            "contact_Phone": self.telephone
        }