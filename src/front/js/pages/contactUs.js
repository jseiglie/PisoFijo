import React from 'react'
import Avatar_programisto1011 from '../../img/Avatar_programisto1011.png';
import Avatar_JavierSeiglie from '../../img/Avatar_JavierSeiglie.png';

import Col from "react-bootstrap/Col";
import ContactForm from "../component/ContactForm";
import OwnCarousel from "../component/Carousel.js";
import Row from "react-bootstrap/Row";

import "../../styles/contactUs.css";

export const ContactUs = () => {

  return (
    <>
      <div className="container container-details mt-2 mb-2 pt-2">
        <Row className="section-margin text-center">
            <Col xs={12} md={6}>
              <div className="img_container_contacUs">
                <img src={Avatar_programisto1011} className="img_contacUs" alt="Avatar programisto"/>
              </div>
              <div className="text_container_contacUs">
                <p>
                Full Stack Programmer in development. Multi-faceted profile that has worked from sales to 
                a software development company as a structural engineer. I like challenges and to improve
                 every day. In my spare time I like to do sports: Brazilian Jiu-Jitsu and CrossFit practitioner.
                   Looking for opportunities to develop myself as a professional and as a person.{" "}
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <div className="img_container_contacUs">
                <img src={Avatar_JavierSeiglie} className="img_contacUs" alt="Avatar Javier Seiglie"/>
            </div>
              <div className="text_container_contacUs">
                <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum{" "}
                </p>
              </div>
            </Col>
        </Row>
        <Row>
            <ContactForm/>
        </Row>
            
      </div>
    </>
  );
};

export default ContactUs;
