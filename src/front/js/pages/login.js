import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/login.css";
import { useHistory } from "react-router-dom";


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {store, actions} = useContext(Context);
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);
  const token = sessionStorage.getItem('token');
  const history = useHistory();

  const handleClick = () => {
    actions.login(email, password).then(()=>{
      history.push('/')
    })
  }

  return (
    
    <Row className='text-center'>
      <div className="container loginWrap">
       
        <div className="form-control loginForm">
        
        <p className="logInP">Log In</p>
        {(token && token !="" && token != undefined) ? "You're logged in with this token" + token : 
        <div>
          <input
          className="form-control loginInput"
          id="email"
          type={"text"}
          placeholder={"Email"}
          value = {email}
          onChange={(e)=>{setEmail(e.target.value)}}
        ></input>
        <input
          className="form-control loginInput"
          id="password"
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        ></input>
        <button className='loginBtn' onClick={handleClick}>Log In</button>
        </div>
      }
          <p className="loginText">
            Not a member? <span className="spSignIn">Sign In</span>{" "}
          </p>
        </div>
      </div>
    </Row>
  );
};
