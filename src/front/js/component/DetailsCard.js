import React, { Component, ImageBackground } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'


import * as PropTypes from "prop-types";
import "../../styles/DetailsCard.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const DetailsCard = (props) => (

	<div className="container DetailsCard">
        <Row className="row DetailsCard view"style={{backgroundImage: `url(${props.urlImg}`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' }}>

                       <div> Hola </div>
        </Row>
        <div className="details header-details-row">
                <Row className="header-details-row">
                    <Col>
                        <Button><FontAwesomeIcon className="heart-icon" icon={faHeart}/></Button>
                    </Col>
                    <Col xs={8} md={8} lg={10}>
                        <h1>Casa de campo en Madrid</h1>
                    </Col>
                    <Col>
                        <Button className="CloseButton">X</Button>
                    </Col>
                </Row>
                <Row className="location-row">
                    <Col>
                        <h2> Alcala de Henares, Madrid</h2>
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
                    <Col>
                        <Button>Program visit</Button>
                    </Col>
                    <Col>
                        <Button>Visit tour</Button>
                    </Col>
                    <Col>
                        <Button>Contact<FontAwesomeIcon icon={faEnvelope} className="icon"/></Button>
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