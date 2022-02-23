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

    <Row xs={12} md={6} lg={4}>
        <div className="container DetailsCard-container float-left">
            <div className="DetailsCard-view "style={{backgroundImage: `url(${props.urlImg}`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat' }}>
                <Row className="DetailsCard-icons-menu">  
                    <Col>

                    </Col>
                    <Col xs={12} md={12} lg={12}className="DetailsCard-view-button-container">
                        <button className="DetailsCard-view-button"><FontAwesomeIcon icon={faEnvelope} className="icon-DetailsCard"/></button>
                        <button className="DetailsCard-view-button"><FontAwesomeIcon icon={faMapLocationDot} className="icon-DetailsCard"/></button>
                        <button className="DetailsCard-view-button"><p className="icon-DetailsCard">360º</p></button>
                    </Col>
                </Row>
            </div>  
            
            <div className="DetailsCard-details">
                    <Row>               
                        <Col>
                            <h5>{props.type} en {props.location}</h5>
                        </Col>
                    </Row>
                    <Row className="resume-row pb-2">
                        <Col>
                            <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} baths</h6>
                        </Col>
                    </Row>
                    <Row className="visit-buttons p-2">
                        <Col xs={5} md={4}>
                            <Button className="DetailsCard-button">Visit tour</Button>
                        </Col>
                        <Col xs={5} md={4}>
                            <Button className="DetailsCard-button">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-DetailsCard"/></Button>
                        </Col>
                        <Col xs={2} md={4}>
                            <button className="DetailsCard-heart-button mx-auto">
                                <FontAwesomeIcon icon={props.fav == true ? faHeartSolid : faHeart} className="icon-DetailsCard"/></button>
                        </Col >
                    </Row>         
                    
            </div>    
        </div>
    </Row>
);

// DetailsCard.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default DetailsCard;