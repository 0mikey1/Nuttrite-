import "../styles/aboutus.css";

import React from "react";

const AboutUs = () => {
  return (
    <div class="container" id="AboutUs">
      <div className="row">
        <div className="col">
          <div className="about-us-container">
            <h1 className="about-us-title text-white">About Nuttrite</h1>
            <p className="about-us-description">
              At Nuttrite, we are dedicated to providing individuals with the
              tools and resources they need to achieve their health and wellness
              goals through personalized nutrition solutions. Our comprehensive
              app offers a vast library of healthy, macro-balanced recipes, as
              well as personalized macro nutrient calculations and support from
              a community of like-minded individuals. Whether you're looking to
              improve your overall health, lose weight, or gain muscle, Nuttrite
              has the tools and resources you need to succeed. Join the Nuttrite
              community and take the first step towards better nutrition today.
            </p>
          </div>
        </div>

        <div className="col">
          <div className="image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4671/4671164.png"
              alt="bleh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
