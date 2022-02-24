import React, { Component, ImageBackground } from "react";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import {faEnvelope, faClone} from '@fortawesome/free-regular-svg-icons'

import * as PropTypes from "prop-types";
import "../../styles/Carousel.css"

//Install npm install react-bootstrap bootstrap@s5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const OwnCarousel = (props) => (
    <div >
        <div>
            <Carousel className="bg-light text-center">
                <Carousel.Item className="">
                    <img
                    className="img-container-Carousel"
                    src="https://uploads.candelaestereo.com/1/2017/02/k2_items_src_5591f41814d4d6f47cf954c512de682f.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-container-Carousel"
                    src="https://as.com/ocio/imagenes/2016/02/20/conectados/1455967524_894772_1455998651_noticia_grande.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="img-container-Carousel"
                    src="https://i.pinimg.com/236x/2c/1a/10/2c1a10c8d099902a7036dc0f41a245e3.jpg"
                    alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="view-button-container-Carousel">
            <button className="view-button-Carousel"><FontAwesomeIcon icon={faClone} className="icon-DetailsCard"/></button>
            <button className="view-button-Carousel"><FontAwesomeIcon icon={faMapLocationDot} className="icon-DetailsCard"/></button>
            <button className="view-button-Carousel"><p className="icon-DetailsCard">360º</p></button>
        </div>
    </div>
);

export default OwnCarousel;