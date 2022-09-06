import React from "react";
import "../styles/landing.css";
import Features from "../components/features";
import Survey from "../components/survey";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="container-sm d-flex justify-content-center ">
        <div className="row d-flex align-items-center">
          <div className="col-7 ">
            <h1 className="text-white">
              Where Intelligence <br></br> Meets Nutrition.{" "}
            </h1>
            <p className="text-white">
              Calculate the nutrition your body needs, track your meals,
              <br></br> explore healthy recipes and design your own meal plans.
            </p>

            <HashLink to="/#survey">
              <button className="btn btn-primary">
                Get Started
              </button>
            </HashLink>
          </div>

          <div className="col-sm">
            <img
              className="img-fluid"
              alt="plate of food"
              src="https://cdn-icons-png.flaticon.com/512/3246/3246628.png"
            />
          </div>
        </div>
      </div>

      <Features />
      <Survey />
      <Contact />
    </div>
  );
}

export default Landing;
