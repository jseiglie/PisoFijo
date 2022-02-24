import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/details.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import OwnCarousel from "../component/Carousel.js";
import Row from "react-bootstrap/Row";



export const Details = (props) => {

  return (
    <>
      <div className="container container-details mt-2 mb-2">
        <Row xs={12} md={12} lg={12} class="img-container-details">
          <Col xs={12} md={6} lg={6}>
            <Row>
              <OwnCarousel />
            </Row>
            <Row>
              <div className="DetailsCard-details">
                <Row>               
                  <Col>
                    <h5>{props.type} en {props.location}</h5>
                  </Col>
                  </Row>
                  <Row className="resume-row pb-2">
                    <Col>
                      <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} floor</h6>
                    </Col>
                  </Row>
                  <Row className="resume-row pb-2">
                    <Col>
                      <p>{props.description}</p>
                    </Col>
                  </Row>
                  <Row className="visit-buttons p-2 d-flex align-items-center">
                    <Col xs={5} md={5}>
                      <Button className="DetailsCard-button">Visit tour</Button>
                    </Col>
                    <Col xs={5} md={5}>
                      <Button className="DetailsCard-button">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-DetailsCard"/></Button>
                    </Col>
                    <Col xs={2} md={2}>
                      <button className="DetailsCard-heart-button ">
                        <FontAwesomeIcon icon={props.fav == true ? faHeartSolid : faHeart} className="heart-icon-DetailsCard"/>
                      </button>
                    </Col>
                  </Row>                           
              </div> 
            </Row>
          </Col>
          <Col class=".d-none .d-sm-block">
            <div>
              <Form.Group className="mb-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder="Disabled input" disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select disabled>
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" disabled />
              </Form.Group>
            </div>
          </Col>
        </Row>
           
      </div>
    </>
  );
};

export default Details;
