import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as PropTypes from "prop-types";
import "../../styles/DetailsCard.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const DetailsCard = (props) => {

    return (
        <Row xs={12} md={12} lg={12}>
            <div className="container DetailsCard-container float-left">
                <div className="DetailsCard-view "style={{backgroundImage: `url(${props.urlImg}`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat' }}>
                </div>  
                <div className="DetailsCard-details">
                        <Row>               
                            <Col>
                                <h5>{props.type} in {props.location}</h5>
                            </Col>
                        </Row>
                        <Row className="resume-row pb-2">
                            <Col>
                                <h6> {props.value} € | {props.area} m<sup>2</sup>| {props.numRooms} rooms| {props.floor} baths</h6>
                            </Col>
                        </Row>                
                </div>    
            </div>
        </Row>
    )
};

DetailsCard.propTypes = {
 	type: PropTypes.string,
 	location: PropTypes.string,
 	value: PropTypes.number,
    area: PropTypes.number,
    numRooms: PropTypes.number,
    // floor: PropTypes.number,
    fav: PropTypes.bool
};

export default DetailsCard;