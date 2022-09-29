import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import Features from "../components/features";
import Survey from "../components/survey";
import Contact from "../components/contact";
import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div>
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6 ">
            <h1 className="text-white">
              Where Intelligence <br></br> Meets Nutrition.{" "}
            </h1>
            <p className="text-white">
              Calculate the nutrition your body needs, track your meals,
              <br></br> explore healthy recipes and design your own meal plans.
            </p>
            <div className="col text-center">
              <HashLink to="/#survey">
                <button className=" btn btn-primary" role="button ">
                  Get Started
                </button>
              </HashLink>
            </div>
          </div>

          <div className="col-xs-2 col-sm-3 col-md-4 col-lg-5 col-xl-6">
            <img
              className="img-fluid"
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
