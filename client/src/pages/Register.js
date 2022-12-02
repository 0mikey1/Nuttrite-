import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../styles/register.css";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("This field is required."),
      username: Yup.string().required("This field is required."),

      password: Yup.string().required("This field is required."),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/newUser/register",
          {
            email: values.email,
            username: values.username,
            password: values.password,
          }
        );
        console.log(res);
        console.log("Post request made.");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="register">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="col-5"></div>
            <div className="col">
              <form className="loginForm" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label
                    className="text-white fw-bold fs-6 text text-center"
                    htmlFor="userEmail"
                  >
                    {" "}
                    Email Address
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-white"> {formik.errors.email}</p>
                    ) : null}
                  </label>
                </div>
                <div className="form-group">
                  <label
                    className="text-white fw-bold fs-6 text text-center"
                    htmlFor="username"
                  >
                    {" "}
                    Username
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <p className="text-white"> {formik.errors.username}</p>
                    ) : null}
                  </label>
                </div>

                <div class="form-group">
                  <label
                    className="text-white fw-bold fs-6 text text-center"
                    htmlFor="exampleInputPassword1"
                  >
                    Password
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="text-white"> {formik.errors.password}</p>
                    ) : null}
                  </label>
                </div>
                <div className="button" align="center">
                  <button type="submit" className="btn btn-primary mt-2">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
