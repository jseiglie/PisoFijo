import React, {useContext, useEffect, useState} from 'react'
import { Context } from "../store/appContext.js";

import "../../styles/filter.css";

import MapExample from "../../img/MapExample.png";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import FilterMenu from "../component/FilterMenu.js"
import DetailsCard from '../component/DetailsCard';
import Map from "../component/Map";

const Filter = () => {

    const { store, actions } = useContext(Context);
    const arrValues = actions.stringToArr(store.filters.center, ",").map(x => { return actions.stringToFloat(x); });
    const arrKeys = ["lat","lng"];
    const center = actions.arrKeysAndValuesToObject(arrKeys, arrValues);
    const [citySearched, setCitySearched] = useState([])

    useEffect(()=>{
        setCitySearched(store.propertiesSearch)
    },[])

    return (
    <>
        <div className="container-fluid mt-2 mb-2 p-2">
            <Row>
                <Col xs={12} md={12} lg={4}>
                    <div className="container-Filter-filter">
                        <FilterMenu />
                    </div>
                </Col >
                <Col xs={12} md={12} lg={8} className="d-flex justify-content-center">
                    <div className="Map-container-filter text-center ">
                        <Map 
                            propertiesSearch={citySearched}
                            centerRequest={center} 
                            viewInfoWindow={true}
                        />
                        <div className="container-DetailsCard">
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
)};


export default Filter;
