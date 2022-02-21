import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import * as PropTypes from "prop-types";
import "../../styles/SearchMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3

const SearchMenu = () => (
	<div className="container SearchMenu p-3">
        <Row xs={2} md={6} lg={6} className="m-3 containerButton">
            <Col xs md="2" lg="1" className="text-left">
                <Button variant="primary justify-content-left buttonSearchMenu">Buy</Button>
            </Col>
            <Col xs md="2" lg="1">
                <Button variant="primary">Sell</Button>
            </Col>
        </Row>
        <Row xs={1} md={6} lg={6} className="justify-content-left m-3">
            <Col xs md="2" lg="3">
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Flat</option>
                    <option value="2">Detached</option>
                </Form.Select>
            </Col>
            <Col xs md="4" lg="3">
                <InputGroup >
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
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