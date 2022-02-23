import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/register.css";

const Register = () => {
  return (
    <Row className='text-center'>
      <div className="container loginWrap">
        <form className="form-control loginForm">
          <input
            className="form-control loginInput"
            id="email"
            type={"text"}
            placeholder={"Email"}
            required
          ></input>
          <input
            className="form-control loginInput"
            id="password"
            type={"password"}
            placeholder={"Password"}
            required
          ></input>
          <input
            className="form-control loginInput"
            id="password"
            type={"password"}
            placeholder={"Password"}
            required
          ></input>
          <ButtonOwn className='loginBtn' title="Log In"></ButtonOwn>
          <p className="loginText">
            Not a member? <span className="spSignIn">Sign In</span>{" "}
          </p>
        </form>
      </div>
    </Row>
  );
};

export default Register;
