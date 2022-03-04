from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

Favorites = Table('favorites', Base.metadata,
        Column('user_id', ForeignKey('user.id')),
        Column('property_propertyCode', ForeignKey('property.propertyCode'))
    )


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(120), unique=True, nullable=False)
    firstName = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    telephone = db.Column(db.Number(12), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    children = relationship("Property",
                    secondary=Favorites)


    def __repr__(self):
        return '<User %r>' % self.userName

    def serialize(self):
        return {
            "id": self.id,
            "userName": self.userName,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "telephone": self.telephone,
            # do not serialize the password, its a security breach
        }

class Property(db.Model):
    __tablename__ = 'property'
    propertyCode = db.Column(db.Integer, primary_key=True)
    ownerId = db.Column(Integer, ForeignKey('user.id'))
    address = db.Column(db.String(120), unique=False, nullable=True)
    agency = db.Column(db.Boolean, unique=False, nullable=True)
    bathrooms = db.Column(db.Integer(2), unique=False, nullable=True)
    condition = db.Column(db.String(10), unique=False, nullable=True)
    description = db.Column(db.String(1500), unique=False, nullable=True)
    distance = db.Column(db.String(20), unique=False, nullable=True)
    district = db.Column(db.String(120), unique=False, nullable=True)
    floor = db.Column(db.String(10), unique=False, nullable=True)
    latitude = db.Column(db.Float(20), unique=False, nullable=True) #<--------------- 40.4962591
    longitude = db.Column(db.Float(20), unique=False, nullable=True) #<--------------- -3.6561735
    municipality = db.Column(db.String(20), unique=False, nullable=True)
    operation = db.Column(db.String(20), unique=False, nullable=True)
    price = db.Column(db.Integer(20), unique=False, nullable=True)
    propertyType = db.Column(db.String(20), unique=False, nullable=True)
    province = db.Column(db.String(20), unique=False, nullable=True)
    rooms = db.Column(db.Integer(2), unique=False, nullable=True)
    size = db.Column(db.Integer(5), unique=False, nullable=True)
    bathrooms = db.Column(db.Integer(2), unique=False, nullable=True)

    elevator = db.Column(db.Boolean, unique=False, nullable=True)
    bankOffer = db.Column(db.String(20), unique=False, nullable=True)
    preservation = db.Column(db.String(20), unique=False, nullable=True)

    contact_Name = db.Column(db.String(20), unique=False, nullable=True)
    contact_Phone = db.Column(db.String(20), unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.userName

    def serialize(self):
        return {
            "propertyCode": self.propertyCode,
            "ownerId": self.ownerId,
            "address": self.address,
            "agency": self.agency,
            "bathrooms": self.bathrooms,
            "condition": self.condition,
            "description": self.description,
            "distance": self.distance,
            "district": self.district,
            "floor": self.floor,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "municipality": self.municipality,
            "operation": self.operation,
            "price": self.price,
            "propertyType": self.propertyType,
            "province": self.province,
            "rooms": self.rooms,
            "size": self.size,
            "bathrooms": self.bathrooms,
            "elevator": self.elevator,
            "bankOffer": self.bankOffer,
            "preservation": self.telephone,
            "contact_Name": self.bankOffer,
            "contact_Phone": self.telephone
            # do not serialize the password, its a security breach
        }

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    userName = db.Column(db.String(120), unique=True, nullable=False)
    firstName = db.Column(db.String(120), unique=False, nullable=False)
    lastName = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    telephone = db.Column(db.Number(12), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.userName

    def serialize(self):
        return {
            "id": self.id,
            "userName": self.userName,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "email": self.email,
            "telephone": self.telephone,
            # do not serialize the password, its a security breach
        }