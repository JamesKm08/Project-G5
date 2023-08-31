import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h4>Home</h4>
        </Link>

        <Link to="/Login">
          <h4>Login</h4>
        </Link>

        <Link to="/Contact">
          <h4>Contact</h4>
        </Link>

        <Link to="/Cart">
          <h4>Cart</h4>
        </Link>

        <Link to="/Register">
          <h4>Register</h4>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
