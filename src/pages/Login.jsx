import axios from "axios";
import React, { useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { publicRequest } from "../services/request";

const Login = () => {
  let [form, setForm] = useState({});
  let [message, setMessage] = useState("");
  let [validationError, setValidationError] = useState({});
  let navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const uploadToServer = async () => {
    console.log("submit");
    try {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";

      const publicReq = publicRequest();

      let res = await publicReq.post("/auth/login", form);
      console.log(res);
      console.log(res.data);
      setMessage(res.data.message);

      if (res.data.status === "ok") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        let user = localStorage.getItem("user");
        if (user) {
          navigate("/dashboard");
          window.location.reload();
        }
      }
    } catch (error) {
      console.log(error.response.data.message);
      setMessage(error.response.data.message);
    }
  };
  const submit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(form, { abortEarly: false });

      uploadToServer();
      setValidationError({});
    } catch (error) {
      let newerror = {};
      error.inner.forEach((e) => {
        newerror[e.path] = e.message;
        setValidationError(newerror);
      });
      console.log(newerror);
    }
  };
  return (
    <>
      <Navbar />

      <div className="container-fluid bg-light p-5 vw-50">
        <div className="card p-5 bg-primary">
          {message !== "" && (
            <div className="text-center alert alert-danger">
              <strong>{message}</strong>
            </div>
          )}
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                onInput={handleChange}
                type="text"
                name="email"
                className="form-control"
              />
              {validationError && (
                <small className="text-danger">{validationError.email}</small>
              )}
            </div>
            <div className="form-group pt-3">
              <span className="d-flex justify-content-between">
                {" "}
                <label htmlFor="">Password</label>
                {/* <i>
                  <Link style={{ color: "whitesmoke" }} to="/">
                    forgot password?
                  </Link>
                </i> */}
              </span>
              <input
                onInput={handleChange}
                type="password"
                name="password"
                className="form-control"
              />
              {validationError && (
                <small className="text-danger">
                  {validationError.password}
                </small>
              )}
            </div>

            <button type="submit" className="btn btn-dark mt-4">
              SUBMIT
            </button>
          </form>

          <i className="pt-2">
            Don't have an account?
            <a className="text-light" href="/register">
              Create one
            </a>
          </i>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
