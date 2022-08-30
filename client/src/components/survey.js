import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Survey = () => {
  const formik = useFormik({
    initialValues: {
      userSex: "",
      userAge: "",
      userHeightFeet: "",
      userHeightRemainderInches: "",
      userWeight: "",
      userActivityLevel: "",
      userFitnessGoal: "",
    },
    validationSchema: Yup.object({
      userSex: Yup.string().required("This field is required."),
      userAge: Yup.number()
        .typeError("You must specify a number.")
        .required("This field is required."),

      userHeightFeet: Yup.string().required("This field is required."),
      userHeightRemainderInches: Yup.string().required(
        "This field is required."
      ),
      userWeight: Yup.number()
        .typeError("You must specify a number.")
        .required("This field is required."),
      userActivityLevel: Yup.string().required("This field is required."),
      userFitnessGoal: Yup.string().required("This field is required."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container ">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4  ">
          <h1 className="text-white fs-1 text text-center"> Get Started </h1>
          <p className="text-white fs-6 text text-center">
            {" "}
            In order for us to generate your nutrition profile, we need to know
            more about you. Based on the information you provide us, we
            calculate your optimal daily nutrition and the optimal
            macro-nutritional content of each of your meals.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <label className="text-white fs-6 text text-center">
                Select your sex
                <select
                  id="userSex"
                  name="userSex"
                  className="form-select"
                  value={formik.values.userSex}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {formik.touched.userSex && formik.errors.userSex ? (
                  <p className="text-danger"> {formik.errors.userSex}</p>
                ) : null}
              </label>
            </div>

            <div className="row">
              <label className="text-white fs-6 text text-center">
                Input your age
                <input
                  id="userAge"
                  name="userAge"
                  type="text"
                  className="form-control"
                  placeholder="ex: 23"
                  value={formik.values.userAge}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userAge && formik.errors.userAge ? (
                  <p className="text-danger"> {formik.errors.userAge}</p>
                ) : null}
              </label>
            </div>

            <div className="row">
              <div className="col-6" align="center">
                <label className="text-white fs-6 text text-center">
                  Height in Feet
                  <select
                    id="userHeightFeet"
                    name="userHeightFeet"
                    className="form-select"
                    value={formik.values.userHeightFeet}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option>feet</option>
                    <option value="3feet">3 ft</option>
                    <option value="4feet"> 4 ft</option>
                    <option value="5feet">5 ft</option>
                    <option value="6feet">6 ft</option>
                    <option value="7feet">7 ft</option>
                  </select>
                  {formik.touched.userHeightFeet &&
                  formik.errors.userHeightFeet ? (
                    <p className="text-danger">
                      {" "}
                      {formik.errors.userHeightFeet}
                    </p>
                  ) : null}
                </label>
              </div>
              <div className="col-6" align="center">
                <label className="text-white fs-6 text text-center">
                  Height in Inches
                  <select
                    id="userHeightRemainderInches"
                    name="userHeightRemainderInches"
                    className="form-select"
                    value={formik.values.userHeightRemainderInches}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option>inches</option>
                    <option value="1in">1 in</option>
                    <option value="2in">2 in</option>
                    <option value="3in">3 in</option>
                    <option value="4in">4 in</option>
                    <option value="5in">5 in</option>
                    <option value="6in">6 in</option>
                    <option value="7in">7 in</option>
                    <option value="8in">8 in</option>
                    <option value="9in">9 in</option>
                    <option value="10in">10 in</option>
                    <option value="11in">11 in</option>
                    <option value="12in">12 in</option>
                  </select>
                  {formik.touched.userHeightRemainderInches &&
                  formik.errors.userHeightRemainderInches ? (
                    <p className="text-danger">
                      {" "}
                      {formik.errors.userHeightRemainderInches}
                    </p>
                  ) : null}
                </label>
              </div>
            </div>
            <div className="row">
              <label className="text-white fs-6 text text-center">
                Input your weight
                <input
                  id="userWeight"
                  name="userWeight"
                  className="form-control"
                  placeholder="165"
                  value={formik.values.userWeight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.userWeight && formik.errors.userWeight ? (
                  <p className="text-danger"> {formik.errors.userWeight}</p>
                ) : null}
              </label>
            </div>

            <div className="row">
              <label className="text-white fs-6 text text-center">
                Select your activity level
                <select
                  id="userActivityLevel"
                  name="userActivityLevel"
                  className="form-select"
                  value={formik.values.userActivityLevel}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>Activity level</option>
                  <option value="sedentaryActive">
                    Sedentary (little to no exercise + work a desk job)
                  </option>
                  <option value="lightlyActive">
                    Lightly Active (light exercise 1-3 days / week)
                  </option>
                  <option value="moderatelyActive">
                    {" "}
                    Moderately Active (moderate exercise 3-5 days / week)
                  </option>
                  <option value="veryActive">
                    Very Active (heavy exercise 6-7 days / week)
                  </option>
                  <option value="ExtremelyActive">
                    Extremely Active (very heavy exercise, hard labor job,
                    training 2x / day)
                  </option>
                </select>
                {formik.touched.userActivityLevel &&
                formik.errors.userActivityLevel ? (
                  <p className="text-danger">
                    {" "}
                    {formik.errors.userActivityLevel}
                  </p>
                ) : null}
              </label>
            </div>

            <div className="row">
              <label className="text-white fs-6 text text-center">
                Select your fitness goal
                <select
                  id="userFitnessGoal"
                  name="userFitnessGoal"
                  className="form-select"
                  value={formik.values.userFitnessGoal}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>Fitness Goal</option>
                  <option value="leanOut">Lean Out</option>
                  <option value="maintain">Maintain</option>
                  <option value="bulk"> Bulk</option>
                </select>
                {formik.touched.userFitnessGoal &&
                formik.errors.userFitnessGoal ? (
                  <p className="text-danger">
                    {" "}
                    {formik.errors.userFitnessGoal}
                  </p>
                ) : null}
              </label>
            </div>
            <div className="row-6 pt-4" id="survey" align="center">
              <button className="btn btn-primary btn-sm mb-4" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Survey;
