import React, { Component, ImageBackground } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'



import * as PropTypes from "prop-types";
import "../../styles/DetailsCard.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const DetailsCard = (props) => (

	<div className="DetailsCard-container">
       <div className="DetailsCard-view"style={{backgroundImage: `url(${props.urlImg}`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat' }}>
            <Row className="DetailsCard-icons-menu">  
                <Col>

                </Col>
                <Col xs={12} md={3} lg={4}className="DetailsCard-view-button-container">
                    <button className="DetailsCard-view-button"><FontAwesomeIcon icon={faEnvelope} className="icon-DetailsCard"/></button>
                    <button className="DetailsCard-view-button"><FontAwesomeIcon icon={faMapLocationDot} className="icon-DetailsCard"/></button>
                    <button className="DetailsCard-view-button"><p className="icon-DetailsCard">360º</p></button>
                </Col>
            </Row>
        </div>  
        
        <div className="DetailsCard-details">
                <Row>
                    
                    <Col>
                        <h1>Casa de campo en Madrid</h1>
                    </Col>
                </Row>
                <Row className="location-row">
                    <Col>
                        <h3> Alcala de Henares, Madrid</h3>
                    </Col>
                </Row>
                <Row className="resume-row pb-4">
                    <Col>
                        <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} baths</h6>
                    </Col>
                </Row>
                <Row className="description-row pb-4">
                    <Col>
                        <h5>Este moderno y renovado piso consta de 93 m2 muy útiles, con una habitación
                            doble con armarios donde podrá guardar y ordenar su ropa, un espacioso baño
                            con bañera. </h5>
                    </Col>
                </Row>
                <Row className="visit-buttons">
                    <Col xs={12} md={3}>
                        <Button className="DetailsCard-button">Program visit</Button>
                    </Col >
                    <Col xs={12} md={3}>
                        <Button className="DetailsCard-button">Visit tour</Button>
                    </Col>
                    <Col xs={12} md={3}>
                        <Button className="DetailsCard-button">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-DetailsCard"/></Button>
                    </Col>
                    <Col>
                        <button className="DetailsCard-heart-button">
                            <FontAwesomeIcon icon={props.fav == true ? faHeartSolid : faHeart} className="icon-DetailsCard"/></button>
                    </Col>
                </Row>         
                
        </div>    
	</div>
);

// DetailsCard.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default DetailsCard;