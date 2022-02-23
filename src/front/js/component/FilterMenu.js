import React, { Component, ImageBackground } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import * as PropTypes from "prop-types";
import "../../styles/FilterMenu.css"

//Install npm install react-bootstrap bootstrap@5.1.3
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/react-fontawesome
// npm i --save @fortawesome/pro-solid-svg-icons

const FilterMenu = () => (
        <Col xs={12} md={8} lg={4}>
        <div className="container-fluid FilterMenu-container">  
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            <Form.Select>
                                <option selected disabled hidden>Properties type</option>
                                <option>Flat</option>
                                <option>Detached</option>
                            </Form.Select>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrize">Prize:
                        <Row>
                                <InputGroup >
                                    <Col>
                                        <InputGroup.Text className="" id="formPrize">
                                            Min.
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number"/>
                                        </Form.Label>
                                    </Col>
                                    <Col>
                                        <InputGroup.Text className="" id="formPrize">
                                            Max.
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number" min={0} />
                                        </Form.Label>
                                    </Col>
                                </InputGroup>
                           
                        </Row>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumRooms">
                        <Row>
                                <InputGroup >
                                    <Col>
                                        <InputGroup.Text className="" id="basic-addon1">
                                            Nº. rooms:
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number"/>
                                        </Form.Label>
                                    </Col>
                                </InputGroup>             
                        </Row>
                        <Row>
                                <InputGroup >
                                    <Col>
                                        <InputGroup.Text className="" id="basic-addon1">
                                            Nº. baths:
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number"/>
                                        </Form.Label>
                                    </Col>
                                </InputGroup>             
                        </Row>
                        <Row>
                                <InputGroup >
                                    <Col>
                                        <InputGroup.Text className="" id="basic-addon1">
                                            Floor:
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number" min={0}/>
                                        </Form.Label>
                                    </Col>
                                </InputGroup>             
                        </Row>
                        <InputGroup>
                            Condition:
                                    <Col>
                                        <InputGroup.Text className="" id="basic-addon1">
                                            Floor:
                                        </InputGroup.Text>
                                    </Col>
                                    <Col>
                                        <Form.Label>
                                            <Form.Control type="number" min={0}/>
                                        </Form.Label>
                                    </Col>
                        </InputGroup>     
                        
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
     
        </div>
        </Col>
);

// FilterMenu.propTypes = {
//  	type: PropTypes.string,
//  	location: PropTypes.string,
//  	value: PropTypes.number,
//     area: PropTypes.number,
//     numRooms: PropTypes.number,
//     floor: PropTypes.number,
//     fav: PropTypes.bool
//};
export default FilterMenu;