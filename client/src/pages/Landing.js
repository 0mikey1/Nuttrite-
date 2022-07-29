import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="landingPage">
      <div className="headers">
        <img src="https://cdn-icons-png.flaticon.com/512/3274/3274038.png" />
        <h1>Nuttrite</h1>
        <h2>Where Intelligence Meets Nutrition. </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="btn">
        <Link to="/register">
          <button className="getStartedbtn">Learn More!</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
