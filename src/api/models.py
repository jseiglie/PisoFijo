from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Table
from datetime import timedelta
import os
import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()
db = SQLAlchemy()

association_table = Table('association', db.Model.metadata,
    db.Column('user_id', db.String, db.ForeignKey('user.id'), primary_key=True),
    db.Column('property_id', db.String, db.ForeignKey('property.propertyCode'), primary_key=True)
)

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer(), primary_key=True)
    firstName = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    telephone = db.Column(db.Integer(), unique=True, nullable=True)
    password = db.Column(db.String(240), unique=False, nullable=False)
    children = db.relationship('Property', secondary=association_table, backref=db.backref('User'))

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "telephone": self.telephone,
            # do not serialize the password, its a security breach
        }

class Property(db.Model):
    __tablename__ = 'property'
    propertyCode = db.Column(db.Integer(), primary_key=True)
    ownerId = db.Column(db.Integer(), db.ForeignKey('user.id'))
    address = db.Column(db.String(120), unique=False, nullable=True)
    agency = db.Column(db.Boolean, unique=False, nullable=True)
    bathrooms = db.Column(db.Integer(), unique=False, nullable=True)
    condition = db.Column(db.String(10), unique=False, nullable=True)
    description = db.Column(db.String(1500), unique=False, nullable=True)
    distance = db.Column(db.String(20), unique=False, nullable=True)
    district = db.Column(db.String(120), unique=False, nullable=True)
    floor = db.Column(db.String(10), unique=False, nullable=True)
    latitude = db.Column(db.Float(20), unique=False, nullable=True) 
    longitude = db.Column(db.Float(20), unique=False, nullable=True) 
    municipality = db.Column(db.String(20), unique=False, nullable=True)
    operation = db.Column(db.String(20), unique=False, nullable=True)
    price = db.Column(db.Integer(), unique=False, nullable=True)
    propertyType = db.Column(db.String(20), unique=False, nullable=True)
    province = db.Column(db.String(20), unique=False, nullable=True)
    rooms = db.Column(db.Integer(), unique=False, nullable=True)
    size = db.Column(db.Integer(), unique=False, nullable=True)
    bathrooms = db.Column(db.Integer(), unique=False, nullable=True)
    elevator = db.Column(db.Boolean, unique=False, nullable=True)
    bankOffer = db.Column(db.String(20), unique=False, nullable=True)
    preservation = db.Column(db.String(20), unique=False, nullable=True)
    contact_Name = db.Column(db.String(20), unique=False, nullable=True)
    contact_Phone = db.Column(db.String(20), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.userName

    def serialize(self):
        return {
            #Serialize this correctly, match idealista
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "telephone": self.telephone,
            # do not serialize the password, its a security breach
        }
    # def create_member(self):
    #     db.session.add(self)
    #     db.session.commit()
    #     return self

    # def validate_password(self, password):
    #     is_valid = check_password_hash(self._password, password)
    #     return is_valid