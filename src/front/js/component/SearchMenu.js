import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import * as PropTypes from "prop-types";
import "../../styles/SearchMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const SearchMenu = () => (
	<div className="container SearchMenu p-3">
        <Row className="containerButton m-3">
            <Col xs={6} md={2} lg="1" className="text-left">
                <Button variant="primary justify-content-left buttonSearchMenu">Buy</Button>
            </Col>
            <Col xs={6} md={2}>
                <Button variant="primary">Sell</Button>
            </Col>
        </Row>
        <Row xs={1} md={6} lg={6} className="justify-content-left m-3 rowContainer">
            <Col xs={12} md={5} lg={4} className="mt-2">
                <Form.Select aria-label="Default select example">
                    <option>Properties Type</option>
                    <option value="1">Flat</option>
                    <option value="2">Detached</option>
                </Form.Select>
            </Col>
            <Col xs={12} md="auto" lg={8} className="mt-2 mb-2">
                <InputGroup >
                    <InputGroup.Text className="inputTransparent" id="basic-addon1">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </InputGroup.Text>
                    <FormControl className="inputTransparent"
                    placeholder="Search by location"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>              
            </Col>
            <Col xs={12} md={2} lg="1" className="mt-2">
                <Button variant="primary justify-content-left buttonSearchMenu">Search</Button>
            </Col>
        </Row>
	</div>
);

// SearchMenu.propTypes = {
// 	title: PropTypes.string,
// 	uid: PropTypes.string,
// 	link: PropTypes.string,
// };

export default SearchMenu;