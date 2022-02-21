import * as PropTypes from "prop-types";
import React, { Component } from "react";
import "../../styles/Button.css"
import "../../styles/LoginBtn.css"

const ButtonOwn = (props) => {
	return (
        <button className="pfBtn login" role='button'>
        {props.title}
        </button>
    );}

ButtonOwn.propTypes = {
    title: PropTypes.string,
    };

export default ButtonOwn;