import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/login.css";
import { useForm } from "react-hooks-useform";


export const Login = () => {
  const {handleSubmit} = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    
    <Row className='text-center'>
      <div className="container loginWrap">
       
        <form className="form-control loginForm" 
        onSubmit={handleSubmit(onSubmit, onError)}>
        <p className="logInP">Log In</p>
          <input
            className="form-control loginInput"
            id="email"
            type={"text"}
            placeholder={"Email"}
            {...register("email", { required: true })}
          ></input>
          <input
            className="form-control loginInput"
            id="password"
            type={"password"}
            placeholder={"Password"}
            {...register("password", { required: true })}
          ></input>
          <button className='loginBtn' type="submit">Log In</button>
          <p className="loginText">
            Not a member? <span className="spSignIn">Sign In</span>{" "}
          </p>
        </form>
      </div>
    </Row>
  );
};
