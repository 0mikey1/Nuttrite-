import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="sum">
      <nav className="item">
        <ul className="ul">
          <li className="li">
            <Link to="/login">
              <button className="btn btn-primary mx-2">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
