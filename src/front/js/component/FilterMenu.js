//1- los inputs modificaran el usestate filtros
//2- en action de flux se define una solicitud que acepte como parametro la url que hemos calculado
//3- Cuando el usuario haga click en filtrar se llama a esa función

import React, {useState, useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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

    // console.log("Access token: ",store.accessToken);

    const RequestToken = () =>{
        actions.getAccessToken();
        console.log(store.accessToken)
    };

    const RequestbyFilters = () =>{
        actions.search({"url":actions.UrlFilters(store.filters)});
    };

    const arrOptions = ["flat","penthouse","duplex","studio","chalet"]

    return (
        <div className="container-FilterMenu">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {/* VICTOR - Falta implementar la función para que devuelva true para el item seleccionado y
                            transforme el resto en false */}
                            <Form.Select onChange={e=>actions.handleChangeSelected(e,arrOptions)}> 
                                <option disabled hidden>Properties type</option>
                                <option value="flat">Flat</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="duplex">Duplex</option>
                                <option value="studio">Studio</option>
                                <option value="chalet">Chalet</option>
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
                                    <Form.Control type="number"  onChange={e=>actions.handleChange(e)} name="minPrice"/>
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
                                    <Form.Control type="number" onChange={e=>actions.handleChange(e)} name="maxPrice"/>
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
                                    <Form.Control type="number" onChange={e=>actions.handleChange(e)} name="minSize"/>
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
                                    <Form.Control type="number" onChange={e=>actions.handleChange(e)} name="maxSize"/>
                                </Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formPrize">
                        <Row>
                            <Col>
                                <h5 className="text-left-FilterMenu">Nº bedrooms:</h5>
                            </Col>
                            <Col>
                                <Form.Label>
                                    <Form.Control type="number" onChange={e=>actions.handleChange(e)} name="bedrooms"/>
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
                                    <Form.Control type="number" onChange={e=>actions.handleChange(e)} name="bathrooms"/>
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
                                <Form.Check type="checkbox" id="haveElevator" label="Elevator" 
                                    onChange={e=>actions.handleChangeCheckbox(e)} name="elevator"/>
                            </Col>
                        </Row>
                    </Form.Group>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Condition:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="preservation" label="Good condition" value="good" onChange={e=>actions.handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="preservation" label="To reform" value="renew" onChange={e=>actions.handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Date of publication:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last 24 hours" value="T" onChange={e=>actions.handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last week" value="W" onChange={e=>actions.handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Last month" value="M" onChange={e=>actions.handleChangeRadio(e)}/>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-2">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="radio" aria-label="option 1" id="condition" 
                                    name="sinceDate" label="Indiferent" value="" onChange={e=>actions.handleChangeRadio(e)} defaultChecked/>
                            </Col>
                        </Row>
                        <Row>
                            <h5 className="text-left-FilterMenu underlined">Type of commercial:</h5>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" aria-label="option 1" id="condition" 
                                    name="bankOffer" label="Of bank/agency" onChange={e=>actions.handleChangeCheckbox(e)} />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center mb-4">
                            <Col xs={12} md={8} lg={8}>
                                <Form.Check type="checkbox" aria-label="option 1" id="condition"
                                    name="virtualTour" label="Virtual" onChange={e=>actions.handleChangeCheckbox(e)}/>
                            </Col>
                        </Row>
                    <Row>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="reset">
                                Reset
                            </button>
                        </Col>
                        <Col>
                            <button className="button-FilterMenu" variant="primary" type="submit" onClick={(e) => {e.preventDefault();RequestbyFilters()}}>
                                Submit
                            </button>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col>
                            <button className="button-FilterMenu" variant="primary" type="submit" onClick={(e) => {e.preventDefault();RequestToken()}}>
                                Request Token
                            </button>
                        </Col> */}
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