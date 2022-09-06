import {Link} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import YupPassword from 'yup-password';
import useAuth from "../useAuth";

YupPassword(Yup);

function Register() {
  const {register, error} = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string()
        .typeError()
        .required(),
      password: Yup.string()
        .password()
        .minSymbols(0)
        .minUppercase(0)
        .required(),
    }),
    onSubmit: ({username, email, password}) => register(username, email, password)
  });

  return (
    <div className="d-flex h-100">
      <div className="container my-auto" style={{maxWidth: 500}}>
        <h2 className="text-center pt-0">Register</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter a username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-danger"> {formik.errors.username}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter an email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-danger"> {formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter a password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-danger"> {formik.errors.password}</p>
            ) : null}
          </div>
          <span className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </span>
          <button className="btn btn-primary w-100" type="submit">Register</button>
        </form>
        {error ? (
          <p className="text-danger mt-1">{error}</p>
        ) : null}
      </div>
    </div>
  )
}

export default Register;
