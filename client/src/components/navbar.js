import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
      <Link className="logo" to="/" style={{ marginRight: "auto" }}>
        Nuttrite
      </Link>
      <HashLink to="/#AboutUs">About</HashLink>

      <HashLink to="/#features">Features</HashLink>

      <HashLink to="/#contact">Contact</HashLink>
      <Link to="/login">
        <button className=" btn btn-primary">Log In</button>
      </Link>
      <Link to="/register">
        <button className=" btn btn-primary">Register</button>
      </Link>
    </nav>
  );
}

export default Navbar;
