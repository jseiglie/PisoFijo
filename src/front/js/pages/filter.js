import React from 'react';

import "../../styles/filter.css";

import MapExample from "../../img/MapExample.png";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import FilterMenu from "../component/FilterMenu.js"
import DetailsCard from '../component/DetailsCard';

const Filter = () => {
    return (
    <>
        <div className="container mt-2 mb-2 p-2">
            <Row>
                <Col xs={12} md={12} lg={4}>
                    <div className="container-Filter-filter">
                        <FilterMenu />
                    </div>
                </Col>
                <Col xs={12} md={12} lg={8} className="d-flex justify-content-center">
                    <div className="Map-container-filter text-center position-fixed">
                        <img src={MapExample} alt="Girl in a jacket" className="img-fluid" />
                        <div className="container-DetailsCard">
                            <DetailsCard/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
)};


export default Filter;
