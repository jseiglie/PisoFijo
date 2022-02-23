import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/register.css";

const Register = () => {
  return (
    <Row className="text-center">
      
        <div className="container signInWrap">
          <form className="form-control signInForm">
            <Col md={5}>
            <input
              className="form-control signInInput"
              id="email"
              type={"text"}
              placeholder={"Email"}
              required
            ></input>
            <input
              className="form-control signInInput"
              id="password"
              type={"password"}
              placeholder={"Password"}
              required
            ></input>
            <input
              className="form-control signInInput"
              id="password"
              type={"password"}
              placeholder={"Password"}
              required
            ></input>
            </Col>
            <Col md={5}>
            <input
              className="form-control signInInput"
              id="name"
              type={"text"}
              placeholder={"Name"}
              required
            ></input>
            <input
              className="form-control signInInput"
              id="surname"
              type={"text"}
              placeholder={"Surname"}
              required
            ></input>
            <ButtonOwn className="signInBtn" title="Sign In"></ButtonOwn>
            </Col> 
            
          </form>
        </div>
      
    </Row>
  );
};

export default Register;
