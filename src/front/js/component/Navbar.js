import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Navbar.css";
import Button from "./Button";
const {store, actions} = useContext(Context);

export const Navbar = () => {
  return (
    <div className="row">
      <div className="container">
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand logo mb-0 h1">Piso Fijo</span>
          </Link>
          <div className="ml-auto">
            <Link to="/home">
              <span className="navItem">Home</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/services">
              <span className="navItem">Services</span>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/contact">
              <span className="navItem">Contact us</span>
            </Link>
          </div>
          <div className="ml-auto">
            {
              !store.token ? 
              <Link to="/login">
              <Button title="Log In"></Button>
              </Link>
              :
              <Button title="Menu"></Button> //hacer hamburguessa
            }
          </div>
        </div>
      </nav>
    </div></div>
  );
};
