import React, {useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";

const AddProperty = () => {

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    const optionsArr = ["flat", "penthouse", "duplex", "studio", "chalet", "countryHouse"]

    useEffect(()=>{
        setFavorites(store.userLogin.favorites);
    },[store.userLogin])

    let history = useHistory();

    const onSelect = item => {
      actions.getSelectedProperty(item)
      history.push('/details'); // <--- The page you want to redirect your user to.
    }

    const RequestbyFilters = () =>{
        actions.search({"url":actions.UrlFilters(store.filters)})
    };

    return (
    <>
        <div className="container container-details mt-2 mb-2 pt-2">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>
                        {/* VICTOR - Falta implementar la función para que devuelva true para el item seleccionado y
                        transforme el resto en false */}
                        <Form.Select onChange={e=>actions.handleChangeSelected(e,arrOptions, "newProperty")}> 
                            <option disabled hidden>Properties type</option>
                            <option value="flat">Flat</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="duplex">Duplex</option>
                            <option value="studio">Studio</option>
                            <option value="chalet">Chalet</option>
                        </Form.Select>
                    </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Row>
                        <Col>
                            <h5 className="text-left-FilterMenu">Address</h5>
                        </Col>
                        <Col>
                            <Form.Label>
                                <Form.Control type="text" onChange={e=>actions.handleChange(e, "newProperty")} name="maxPrice"/>
                            </Form.Label>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrize">
                    <Row>
                        <Col>
                            <h5 className="text-left-FilterMenu">Prize</h5>
                        </Col>
                        <Col>
                            <Form.Label>
                                <Form.Control type="number" onChange={e=>actions.handleChange(e, "newProperty")} name="maxPrice"/>
                            </Form.Label>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrize">
                    <Row>
                        <Col>
                            <h5 className="text-left-FilterMenu">Size:</h5>
                        </Col>
                        <Col>
                            <Form.Label>
                                <Form.Control type="number" onChange={e=>actions.handleChange(e, "newProperty")} name="size"/>
                            </Form.Label>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="formNBedrooms">
                    <Row>
                        <Col>
                            <h5 className="text-left-FilterMenu">Nº bedrooms:</h5>
                        </Col>
                        <Col>
                            <Form.Label>
                                <Form.Control type="number" onChange={e=>actions.handleChange(e, "newProperty")} name="bedrooms"/>
                            </Form.Label>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group controlId="formNBaths">
                    <Row>
                        <Col>
                            <h5 className="text-left-FilterMenu">Nº baths:</h5>
                        </Col>
                        <Col>
                            <Form.Label>
                                <Form.Control type="number" onChange={e=>actions.handleChange(e, "newProperty")} name="bathrooms"/>
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
                                onChange={e=>actions.handleChangeCheckbox(e, "newProperty")} name="elevator"/>
                        </Col>
                    </Row>
                </Form.Group>
                    <Row>
                        <h5 className="text-left-FilterMenu underlined">Condition:</h5>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="preservation" label="Good condition" value="good" onChange={e=>actions.handleChangeRadio(e, "newProperty")}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-2">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="preservation" label="To reform" value="renew" onChange={e=>actions.handleChangeRadio(e, "newProperty")}/>
                        </Col>
                    </Row>   
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="sinceDate" label="Last 24 hours" value="T" onChange={e=>actions.handleChangeRadio(e, "newProperty")}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="sinceDate" label="Last week" value="W" onChange={e=>actions.handleChangeRadio(e, "newProperty")}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="sinceDate" label="Last month" value="M" onChange={e=>actions.handleChangeRadio(e, "newProperty")}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-2">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="radio" aria-label="option 1" id="condition" 
                                name="sinceDate" label="Indiferent" value="" onChange={e=>actions.handleChangeRadio(e, "newProperty")} defaultChecked/>
                        </Col>
                    </Row>
                    <Row>
                        <h5 className="text-left-FilterMenu underlined">Type of commercial:</h5>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="checkbox" aria-label="option 1" id="condition" 
                                name="bankOffer" label="Of bank/agency" onChange={e=>actions.handleChangeCheckbox(e, "newProperty")} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs={12} md={8} lg={8}>
                            <Form.Check type="checkbox" aria-label="option 1" id="condition"
                                name="virtualTour" label="Virtual" onChange={e=>actions.handleChangeCheckbox(e, "newProperty")}/>
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
            </Form>  
      </div> 
    </>
  );
};

export default AddProperty