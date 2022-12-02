import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      contactUserName: "",
      contactUserEmail: "",
      contactUserMessage: "",
    },
    validationSchema: Yup.object({
      contactUserName: Yup.string().required("This field is required."),
      contactUserEmail: Yup.string().required("This field is required."),
      contactUserMessage: Yup.string()
        .required("This field is required.")
        .max(250, "Message must not exceed 250 characters."),
    }),

    onSubmit: async (values) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/contactUsInquiry/send",
          {
            name: values.contactUserName,
            email: values.contactUserEmail,
            message: values.contactUserMessage,
          }
        );
        console.log(values);
        emailjs.send(
          "service_j3w2wc4",
          "template_0jnpbhs",
          {
            name: values.contactUserName,
            email: values.contactUserEmail,
            message: values.contactUserMessage,
          },
          "BHar56MMgZRPH8-xl"
        );
        alert("Message Sent.");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="container" id="contact">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-white fs-1 text text-center">Contact Us</h1>
          <p className="text-white fs-6 text text-center">
            Do you have a question for the Nuttrite team? We're here to help!
            Simply fill out the form below and one of our dedicated staff
            members will get back to you as soon as possible. Whether you're
            looking for advice on a specific recipe, have a suggestion for our
            app, or just want to say hi, we'd love to hear from you
          </p>

          <div className="row">
            <div className="col"></div>
            <div className="col">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <label className="text-white fw-bold fs-6 text text-center">
                    Name
                    <input
                      id="contactUserName"
                      placeholder="e.g John Smith"
                      name="contactUserName"
                      className="form-control"
                      value={formik.values.contactUserName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.contactUserName &&
                    formik.errors.contactUserName ? (
                      <p className="text-danger">
                        {" "}
                        {formik.errors.contactUserName}
                      </p>
                    ) : null}
                  </label>
                </div>
                <div className="row">
                  <label className="text-white fw-bold fs-6 text text-center">
                    Email
                    <input
                      placeholder="e.g JohnSmith@gmail.com"
                      id="contactUserEmail"
                      name="contactUserEmail"
                      className="form-control"
                      type="email"
                      value={formik.values.contactUserEmail}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                    {formik.touched.contactUserEmail &&
                    formik.errors.contactUserEmail ? (
                      <p className="text-danger">
                        {" "}
                        {formik.errors.contactUserEmail}
                      </p>
                    ) : null}
                  </label>
                </div>
                <div className="row">
                  <label className="text-white fw-bold fs-6 text text-center ">
                    Message
                    <textarea
                      id="contactUserMessage"
                      placeholder="Type here..."
                      name="contactUserMessage"
                      className="form-control"
                      value={formik.values.contactUserMessage}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.contactUserMessage &&
                    formik.errors.contactUserMessage ? (
                      <p className="text-danger">
                        {" "}
                        {formik.errors.contactUserMessage}
                      </p>
                    ) : null}
                  </label>
                  <div className="row-6 pt-4" align="center">
                    <button
                      className="btn btn-primary btn-sm mb-4"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
