import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import Button from './Button'

export const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-light bg-light">
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
        <Button title="Log In"></Button>
          </div>
        </div>
      </nav>
    </div>
  );
};
