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


import * as PropTypes from "prop-types";
import "../../styles/DetailsCard.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const DetailsCard = (props) => (

	<div className="container DetailsCard">
        <Row class="row DetailsCard">
            <Col className="view" style={{backgroundImage: `url(${props.urlImg}`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat' }}>

                       <div> Hola </div>

            </Col>
            <Col className="details" >
                <Row class="header-details-row">
                    <Col>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1"> I have a bike</label>
                    </Col>
                    <Col>
                        <h1>Casa de campo en Madrid</h1>
                    </Col>
                    <Col>
                        <Button>X</Button>
                    </Col>
                </Row>
                <Row class="location-row">
                    <Col>
                        <h2> Alcala de Henares, Madrid</h2>
                    </Col>
                </Row>
                <Row class="resume-row">
                    <Col>
                        <h6> {props.value}|{props.area}|{props.numRooms}|{props.floor}</h6>
                    </Col>
                </Row>
                <Row class="description-row">
                    <Col>
                        <h5> Este moderno y renovado piso consta de 93 m2 muy útiles, con una habitación
                             doble con armarios donde podrá guardar y ordenar su ropa, un espacioso baño
                              con bañera, una cocina independiente totalmente equipada y con los
                               utensilios de cocina necesarios para facilitar su estadia, un amplio
                                salón de estar decorado con perfectos acabados además de una mesa que
                                 podrá usarse como comedor y como mesa de estudio. También, cuenta con
                                  una bonita y agradable terraza y una piscina para que disfrute el
                                   clima de la ciudad condal y haga que su estancia sea más placentera.
                                    La propiedad tiene ascensor y extras como un sofa cama, servicio de 
                                    internet, TV, calefacción a gas y lavadora.</h5>
                    </Col>
                </Row>
             

            </Col>

        </Row>    
	</div>
);

// DetailsCard.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default DetailsCard;