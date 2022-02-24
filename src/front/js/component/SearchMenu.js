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
import image from "../../img/Vector.png";

import * as PropTypes from "prop-types";
import "../../styles/SearchMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const SearchMenu = () => (

	<div>
        <div className="container d-flex header justify-content-center " style={{backgroundImage: `url(${image}`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' }}>
            <div className="justify-content-center text-header-search-menu pfLogo">Piso Fijo</div>
        </div>
        <div className="container SearchMenu p-3">
            <Row xs={12} md={6} lg={2} className="containerButton m-3">  
                <div className="button buttonSelect">
                    <input type="radio" id="a25" name="check-substitution-2" />
                    <label className="btn btn-default " htmlFor="a25">Buy</label>
                </div>
                <div className="button buttonSelect">
                    <input type="radio" id="a50" name="check-substitution-2" />
                    <label className="btn btn-default" htmlFor="a50">Sell</label>
                </div>
            </Row>
            <Row xs={1} md={6} lg={6} className="justify-content-left m-3 rowContainer">
                <Col xs={12} md={5} lg={2} className="mt-2">
                    <Form.Select aria-label="Default select example" className="styleSelect">
                        <option>Property Type</option>
                        <option value="1">Flat</option>
                        <option value="2">Detached</option>
                    </Form.Select>

                </Col>
                <Col xs={12} md="auto" lg={8} className="mt-2 mb-2">
                    <InputGroup >
                        <InputGroup.Text className="inputTransparent" id="basic-addon1">
                            <FontAwesomeIcon icon={ faMagnifyingGlass } className="icon-SearchMenu"/>
                        </InputGroup.Text>
                        <FormControl className="inputTransparent"
                        placeholder="Search by location"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col xs={12} md={2} lg={2} className="mt-2">
                    <Button variant="primary justify-content-left buttonSearchMenu" className="buttonSearch mb-1">Search</Button>
                </Col>
            </Row>
        </div>
	</div>
);

// SearchMenu.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default SearchMenu;