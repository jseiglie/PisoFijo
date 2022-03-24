import React, {useContext, useEffect, useState } from 'react'
import { Context } from "../store/appContext.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const AddProperty = () => {

    const { store, actions } = useContext(Context);
    const [property, setProperty] = useState([]);

    const optionsArr = ["flat", "penthouse", "duplex", "studio", "chalet", "countryHouse"]

    useEffect(()=>{
        setProperty(store.newProperty);
    },[store.newProperty])

    let history = useHistory();

    const submitForm  = (e) => {
        e.preventDefault()
        e.stopPropagation();
        actions.sendNewProperty(); 
        // history.push('/favorites'); 
    }
    console.warn("property: ", property);

    return (
    <>
        <div className="container container-details mt-2 mb-2 pt-2">
            <Form  onSubmit={submitForm}>
                <Form.Group className="mb-3">
                    <Form.Label>
                        {/* VICTOR - Falta implementar la función para que devuelva true para el item seleccionado y
                        transforme el resto en false */}
                        <Form.Select onChange={e=>actions.handleChangeSelected(e,"newProperty", optionsArr)}> 
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
                            <InputGroup>
                                <InputGroup.Text className="inputTransparent" id="basic-addon1">
                                    <FontAwesomeIcon icon={ faMagnifyingGlass } className="icon-SearchMenu"/>
                                </InputGroup.Text>
                                <FormControl className="inputTransparent"
                                placeholder="Search by name or address: -Madrid- or -Calle Alcala 12 Madrid-"
                                aria-label="address"
                                aria-describedby="basic-addon1"
                                onChange={e=>{e.preventDefault();actions.getLatLonByAddress(e.target.value, "newProperty")}} 
                                name="address"
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Text className="" id="basic-addon1">
                                </InputGroup.Text>
                                <FormControl value={property}/>
                            </InputGroup>
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
                        <button className="button-FilterMenu" variant="primary" type="submit">
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