import React from "react";
import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import axios from "axios";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="col-5"></div>
            <div className="col">
              <form className="loginForm">
                <div className="form-group">
                  <label for="exampleInputEmail1"> Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  ></input>
                </div>
                <div className="form-group">
                  <label for="exampleUsername1"> Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                  ></input>
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter password"
                  ></input>
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
