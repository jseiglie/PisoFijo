import React, { Component, ImageBackground, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
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

const FilterMenu = () => {

    const {store,actions} = useContext(Context);

    const generalFiltersObj = store.generalFilters;
	const homeFiltersObj = store.homeFilter
	
	const filterObject = Object.assign(generalFiltersObj, homeFiltersObj);
	console.log(filterObject
	const filterEntries = filterObject =>Object.entries(filterObject) // [[country, "es"], [operation,"sale"] ]
	console.log("filterEntries: ",filterEntries(filterObject)
	const resultFilterEntries = filterEntries(filterObject
	const filteredArrElementsNotEmpty = arr =>{
	return arr.filter(el => el[1] != '' || el[1] == true) 
	
	console.log("filteredArrElementsNotEmpty: ",filteredArrElementsNotEmpty(resultFilterEntries
	const resultfilteredArrElementsNotEmpty = filteredArrElementsNotEmpty(resultFilterEntries
	const concatenateArr =(arr)=>{
	return ((arr.map(el =>el.join("="))).join("&"))
	
	console.log("concatenateArr: ",concatenateArr(resultfilteredArrElementsNotEmpty)
	const UrlFilters = filterObject =>{
	return (concatenateArr(filteredArrElementsNotEmpty(filterEntries(filterObject))))
	
	console.log(UrlFilters(filterObject))

    return (
        <div className="container-FilterMenu">  
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
                    <Form.Group className="mb-3" controlId="formPrize">      
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Prize</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Min.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Max.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPrize">      
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Size:</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Min.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup.Text  id="formPrize">
                                    Max.
                                </InputGroup.Text>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPrize">      
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Nº rooms:</h5>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPrize">      
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Nº baths:</h5>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number"/>
                                </Form.Label>
                            </Col>                  
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-2">  
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Equipment:</h5>
                        </Row>    
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" id="haveElevator" name="haveElevator" label="Elevator"/>
                            </Col>
                        </Row>
                    </Form.Group>
                        
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Condition:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Good condition"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="To reform"/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Date of publication:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Last 24 hours"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Last week"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Last month"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Indiferent"/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Type of commercial:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Of bank/agency"/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-4">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" name="condition-checkbox" label="Virtual"/>
                            </Col>
                        </Row>
    
                    <Row>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="reset">
                                Reset
                            </button>
                        </Col>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="submit">
                                Submit
                            </button>
                        </Col>
                    </Row>
                    
                </Form>     
        </div>
    )
};

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