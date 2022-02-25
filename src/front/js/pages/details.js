import React from "react";
import "../../styles/details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'

import Col from "react-bootstrap/Col";
import ContactForm from "../component/ContactForm";
import OwnCarousel from "../component/Carousel.js";
import Row from "react-bootstrap/Row";



export const Details = (props) => {

  return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">
        <Row xs={12} md={12} lg={12} className="img-container-details">
          <Col xs={12} md={7} lg={7}>
            <Row>
              <OwnCarousel fav={true}/>
            </Row>
            <Row>
              <div className="DetailsCard-details">
                <Row>               
                  <h4 className="text-center">{props.name}</h4>
                </Row>
                <Row>               
                  <h5>{props.type} en {props.location}</h5>
                </Row>
                <Row className="resume-row pb-2">
                  <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} floor</h6>
                </Row>
                <Row className="resume-row pb-2">
                  <p className="text-desciption-details">{props.description}</p>
                </Row>
                  <div className="d-md-none fixed-bottom container-buttons-details">
                    <Row className="visit-buttons p-2 d-flex align-items-center">
                      <Col xs={5} md={5}>
                        <button className="button-details">Visit tour</button>
                      </Col>
                      <Col xs={5} md={5}>
                        <button className="button-details">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-details"/></button>
                      </Col>
                      <Col xs={2} md={2}>
                        <button className="heart-button-details">
                          <FontAwesomeIcon icon={props.fav == true ? faHeartSolid : faHeart} className="heart-icon-DetailsCard"/>
                        </button>
                      </Col>
                  </Row> 
                </div>                          
              </div> 
            </Row>
          </Col>
          <Col className="d-flex justify-content-center">
            <div className="d-none d-md-block position-fixed mt-3">          
                <ContactForm />
            </div>
          </Col>
        </Row>
           
      </div>
    </>
  );
};

export default Details;
