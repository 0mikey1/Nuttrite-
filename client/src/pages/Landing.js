import React from "react";
import "../styles/landing.css";
import Features from "../components/features";
import Survey from "../components/survey";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import Footer from "../components/footer";
import AboutUs from "../components/AboutUs";
import { HashLink } from "react-router-hash-link";

function Landing() {
  return (
    <div>
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col">
            <h1 className="text-white">
              Discover The Power Of Balanced Nutrition{" "}
            </h1>
            <p className="text-white">
              At Nuttrite, our mission is to empower individuals to achieve
              their health and wellness goals through personalized nutrition
              solutions.
              <br></br> We believe that everyone deserves access to
              high-quality, balanced nutrition that supports their unique needs
              and lifestyles. We are committed to delivering innovative,
              evidence-based tools and resources that enable our users to make
              informed choices and achieve lasting results.
            </p>
            <div className="col text-center">
              <HashLink to="/#survey">
                <button className=" btn btn-primary">Get Started</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          width: "100%",
          color: "white",
          bordercolor: "white",
          border: "0",
          borderTop: "20px solid #FFFFFF",
          transform: "rotate(-4deg)",
        }}
      />
      <AboutUs />
      <hr
        style={{
          width: "100%",
          height: "3px",
          background: "black",
          border: "0",
          borderTop: "20px solid black",
          transform: "rotate(5deg)",
        }}
      />
      <Features />
      <hr
        style={{
          width: "100%",
          color: "white",
          bordercolor: "white",
          border: "0",
          borderTop: "20px solid #FFFFFF",
          transform: "rotate(-4deg)",
        }}
      />

      <Survey />

      <hr
        style={{
          width: "100%",
          height: "3px",
          background: "black",
          border: "0",
          borderTop: "20px solid black",
          transform: "rotate(5deg)",
        }}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
