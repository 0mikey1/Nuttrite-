import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function Landing() {
  return (
    <div className="container-sm d-flex justify-content-center ">
      <div className="row d-flex align-items-center">
        <div className="col-7 ">
          <h1 className="text-white">
            Where Intelligence <br></br> Meets Nutrition.{" "}
          </h1>
          <p className="text-white">
            Calculate the nutrition your body needs, track your meals,<br></br>{" "}
            explore healthy recipesmd design your own meal plans.
          </p>

          <Link to="/register">
            <button className=" btn btn-primary" role="button ">
              Get Started
            </button>
          </Link>
        </div>

        <div className="col-sm">
          <img
            className="img-fluid"
            src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967391.png?token=exp=1661214635~hmac=bce4955bf4b2a24fe1da168813db7046"
          />
        </div>
      </div>
    </div>

    // <div className=" landingPage">
    //   <div className="headers">
    //     <h1>
    //       Where Intelligence <br></br> Meets Nutrition.{" "}
    //     </h1>
    //     <p>
    //       Calculate the nutrition your body needs, track your meals, explore
    //       healthy recipes, and design your own meal plans.
    //     </p>
    //     <div className="btn">
    //       <Link to="/register">
    //         <button className="getStartedbtn ">Get Started</button>
    //       </Link>
    //     </div>
    //   </div>
    //   <img src="https://cdn-icons.flaticon.com/png/512/3967/premium/3967391.png?token=exp=1661214635~hmac=bce4955bf4b2a24fe1da168813db7046" />
    // </div>
  );
}

export default Landing;
