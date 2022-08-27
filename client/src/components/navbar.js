import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Zoom from "react-reveal/Zoom";

const Navbar = () => {
  return (
    <div className="sum">
      <nav className="item">
        <ul className="ul">
          <li className="li">
            <Link to="/login">
              <button className=" btn btn-primary" role="button ">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
