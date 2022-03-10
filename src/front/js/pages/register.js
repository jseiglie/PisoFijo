import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/register.css";
import ButtonOwn from "../component/Button"


const Register = () => {

  const {store, actions} = useContext(Context)
  const [registerForm, setRegisterForm] = useState({});

  // const {
  //   register,
  //   handleSubmit,
  //   getValues,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log("onsubmit triggered", data);
  //   actions.register(data);
  // };

  console.log("register en componen",registerForm)

  return (
    <div className="container signInWrap">
      <form
        // action="https://3001-programisto1011-4geekaca-185g3ypksyq.ws-eu34.gitpod.io/api/register"
        // method="POST"
        className="form-control signInForm"
        onSubmit={ e =>{ 
          e.preventDefault();
          actions.register(registerForm)
        }}
      >
        <p className="signInText">Sign In</p>
        <Row md={5}>
          <Col md={1}></Col>
          <Col md={5}>
            {/* {errors.name &&
              errors.name.type &&
              errors.email &&
              errors.email.type &&
              errors.password &&
              errors.password.type === "required" && (
                <span>Invalid e-mail or missing information</span>
              )} */}
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
        {/* <ButtonOwn
        onSubmit={(e) => {
               e.preventDefault();
                actions.register(registerForm);
            }}
            className="signInBtn"
            title="Sign In"
          /> */}
          <input type="submit"
            value="dejame en paz javier"/>
          
          {/* <ButtonOwn className="signInBtn" title="Sign In"></ButtonOwn> */}
          {/* <input value="registrate" type="submit" /> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
