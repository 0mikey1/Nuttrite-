import {Link} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import YupPassword from 'yup-password';
import useAuth from "../useAuth";

YupPassword(Yup);

function Login() {
  const {login, error} = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(),
      password: Yup.string()
        .required(),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: ({username, email, password}) => login(username, email, password)
  });

  return (
    <div className="d-flex h-100">
      <div className="container my-auto" style={{maxWidth: 500}}>
        <h2 className="text-center pt-0">Log In</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-danger"> {formik.errors.username}</p>
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
          <div className="mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
        {error ? (
          <p className="text-danger mt-1">{error}</p>
        ) : null}
      </div>
    </div>
  )
}

export default Login;
