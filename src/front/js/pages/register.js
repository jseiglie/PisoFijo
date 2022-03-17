import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/register.css";
import "../../styles/Button.css";
import { useHistory } from "react-router-dom";

const Register = () => {

  const {store, actions} = useContext(Context)
  const [registerForm, setRegisterForm] = useState({});
  const history = useHistory();

  // console.log("register en componen",registerForm)

  return (
    <div className="container signInWrap">
      <form
        className="form-control signInForm"
        onSubmit={ e =>{ 
          e.preventDefault();
          actions.register(registerForm).then(() => {
            history.push('/')})
        }}
      >
        <p className="signInText">Sign In</p>
        <Row md={5}>
          <Col md={1}></Col>
          <Col md={5}>
            <input
              className="form-control signInInput"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              className="form-control signInInput"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  [e.target.name]: e.target.value,
                });
              }}
              />
            </Col>
          <Col md={5}>
            <input
              className="form-control signInInput"
              id="name"
              name="firstName"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <input
              className="form-control signInInput"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Surname"
              onChange={(e) => {
                setRegisterForm({
                  ...registerForm,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <div className="text-center">
          <input type="submit" className="signInSubmit"
            value="Sign Up"/>
        </div>
      </form>
    </div>
  );
};

export default Register;
