import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/register.css";

const Register = () => {
  return (
    <div className="container signInWrap">
      <form 
      action="https://3001-programisto1011-4geekaca-185g3ypksyq.ws-eu34.gitpod.io/api/register"
      method="POST"
      className="form-control signInForm">
        <p className="signInText">Sign In</p> 
        <Row md={5}>
          <Col md={1}></Col>
          <Col md={5}>
            <input
              className="form-control signInInput"
              id="email"
              type="text"
              placeholder="Email"
              required
            ></input>
            <input
              className="form-control signInInput"
              id="password"
              type="password"
              placeholder="Password"
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
          </Col>    
        </Row>
          <div className='text-center'>
          <ButtonOwn className="signInBtn" title="Sign In"></ButtonOwn>
          </div>        
      </form>
    </div>
  );
};

export default Register;
