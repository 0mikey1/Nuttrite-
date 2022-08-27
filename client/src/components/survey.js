import React from "react";
import { useState } from "react";

const Survey = () => {
  const [userSex, setUserSex] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userActivity, setUserActivity] = useState("");
  const [userFitnessGoal, setUserFitnessGoal] = useState("");

  const userSurveyDataObj = {
    userSex: userSex,
    userAge: userAge,
    userHeight: userHeight,
    userWeight: userWeight,
    userActivity: userActivity,
    userFitnessGoal: userFitnessGoal,
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(userSurveyDataObj);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-white fs-1 text"> Get Started </h1>
          <p className="text-white fs-6 text">
            {" "}
            In order for us to generate your nutrition profile, we need to know
            more about you. Based on the information you provide us, <br></br>{" "}
            we calculate your optimal daily nutrition and the optimal
            macro-nutritional content of each of your meals.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col"></div>
        <div className="col">
          <div className="row">
            <label className=" text-center text-white fs-6 text">
              Select your sex
              <select
                className="form-select"
                onChange={(ev) => setUserSex(ev.target.value)}
                value={userSex}
              >
                <option>What is your sex?</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>
          </div>
          <div className="row">
            <label className=" text-center text-white fs-6 text">
              Enter your age
              <input
                name="userAge"
                type="text"
                className="form-control"
                placeholder="How old are you? (yrs)"
                onChange={(ev) => setUserAge(ev.target.value)}
                value={userAge}
              />
            </label>
          </div>
          <div className="row ">
            <label className=" text-center text-white fs-6 text">
              Enter your height
              <input
                name="userHeight"
                type="text"
                className="form-control"
                placeholder="How tall are you? (inches)"
                onChange={(ev) => setUserHeight(ev.target.value)}
                value={userHeight}
              />
            </label>
          </div>
          <div className="row">
            <label className=" text-center text-white fs-6 text">
              Enter your weight
              <input
                name="userWeight"
                type="text"
                className="form-control"
                placeholder="How much do you weigh? (lbs)"
                onChange={(ev) => setUserWeight(ev.target.value)}
                value={userWeight}
              />
            </label>
          </div>
          <div className="row">
            <label className=" text-center text-white fs-6 text">
              Select your activity level
              <select
                className="form-select"
                onChange={(ev) => setUserActivity(ev.target.value)}
                value={userActivity}
              >
                <option value>How active are you?</option>
                <option value="notActive">Not active</option>
                <option value="lightlyActive">Lightly active</option>
                <option value="Active">Active</option>
                <option value="highlyActive">Highly active</option>
              </select>
            </label>
          </div>
          <div className="row">
            <label className="text-center text-white fs-6 text">
              Select your fitness goal
              <select
                className="form-select"
                onChange={(ev) => setUserFitnessGoal(ev.target.value)}
                value={userFitnessGoal}
              >
                <option value>What is your fitness goal?</option>
                <option value="leanOut">Lean out</option>
                <option value="maintain">Maintain</option>
                <option value="bulk">Bulk</option>
              </select>
            </label>
          </div>

          <div className="row-6 pt-4" id="survey" align="center">
            <button
              className="btn btn-primary btn-sm mb-4"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Survey;
