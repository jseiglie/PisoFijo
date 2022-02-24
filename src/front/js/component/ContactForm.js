import React, { Component, ImageBackground } from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faHeart} from '@fortawesome/free-regular-svg-icons'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import * as PropTypes from "prop-types";
import "../../styles/Carousel.css"

//Install npm install react-bootstrap bootstrap@s5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const ContactForm = (props) => (
<div className="m-2">
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Consent to the treatment of the personal data " />
      </Form.Group>
        <button className="button-details">Contact <FontAwesomeIcon icon={faEnvelope} className="icon-details"/></button>
        
        <button className="button-details">Visit tour</button>              
    </Form>
</div>
);

export default ContactForm;