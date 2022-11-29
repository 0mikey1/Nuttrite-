import React from "react";
import "../styles/landing.css";
import Features from "../components/features";
import Survey from "../components/survey";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-sm-9 col-md-8 col-lg-7 col-xl-6 ">
            <h1 className="text-dark">
              Where Intelligence <br></br> Meets Nutrition.{" "}
            </h1>
            <p className="text-black">
              Calculate the nutrition your body needs, track your meals,
              <br></br> explore healthy recipes and design your own meal plans.
            </p>
            <div className="col text-center">
              <HashLink to="/#survey">
                <button className=" btn btn-primary">Get Started</button>
              </HashLink>
            </div>
          </div>

          <div className="col-xs-2 col-sm-3 col-md-4 col-lg-5 col-xl-6">
            <img
              className="img-fluid"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/685/685352.png"
            />
          </div>
        </div>
      </div>

      <Features />
      <Survey />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
