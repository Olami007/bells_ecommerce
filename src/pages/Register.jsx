import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const [form, setForm] = useState();
  const [Errors, setErrors] = useState();
  const [message, setMessage] = useState("");

  const [sex, setSex] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const [PassCheck, setPassCheck] = useState("d-none");
  const [CapCheck, setCapCheck] = useState("text-danger");
  const [SmallCheck, setSmallCheck] = useState("text-danger");
  const [NumCheck, setNumCheck] = useState("text-danger");
  const [SpecCheck, setSpecCheck] = useState("text-danger");
  const [LenCheck, setLenCheck] = useState("text-danger");

  let regexCap = /[A-Z]+/;
  let regexSmall = /[a-z]+/;
  let regexNum = /[0-9]+/;
  let regexSpec = /[+*!?&^%#@]+/;
  //   let regex =
  //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

  let schema = yup.object().shape({
    first_name: yup
      .string()
      .min(2, "First name should be atleast 2 characters")
      .required("First name is required"),
    last_name: yup
      .string()
      .min(2, "Last name should be atleast 2 characters")
      .required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      //   .matches(regex, "Password not strong enough")
      .min(8, "Password should be atleast 8 characters")
      .required("Password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Confirm Password is required"),
    phone: yup.string().required("Phone number is required"),
    sex: yup.string().nullable().required("Sex is required"),
    nationality: yup.string().nullable().required("Nationality is required"),
    region: yup.string().nullable().required("Region is required"),
    address: yup.string().nullable().required("Address is required"),
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "sex") {
      setSex(value);
      setForm({ ...form, [name]: value });
    } else if (name === "nationality") {
      setCountry(value);
      setForm({ ...form, [name]: value });
    } else if (name === "region") {
      setRegion(value);
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: value });
    }

    // console.log(name, value, form);
  };

  const submitToServer = async () => {
    setSubmitted(true);

    try {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      let res = await axios.post("http://127.0.0.1:4100/auth/register", form);
      console.log(res.data);
      setMessage(res.data.message);
      if (res.data.status === "ok") {
        localStorage.setItem("email", form.email);
        navigate("/verification");
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitted(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(form, { abortEarly: false });

      setErrors({});
      submitToServer();
    } catch (error) {
      let newerror = {};
      error.inner.forEach((e) => {
        newerror[e.path] = e.message;
      });
      setErrors(newerror);
      console.log(newerror);
      // setMessage(Errors);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container bg-light p-5 vw-50">
        <div className="card p-5 bg-primary">
          {message && (
            <strong className="alert alert-success">{message}</strong>
          )}

          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="">First name</label>
              <input
                onInput={handleChange}
                type="text"
                name="first_name"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.first_name && Errors.first_name}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Last name</label>
              <input
                onInput={handleChange}
                type="text"
                name="last_name"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.last_name && Errors.last_name}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                onInput={handleChange}
                type="text"
                name="email"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.email && Errors.email}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Sex</label>
              <select
                onChange={(e) => {
                  handleChange(e);
                }}
                value={sex}
                className="form-control"
                name="sex"
              >
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <small className="text-danger">{Errors?.sex && Errors.sex}</small>
            </div>
            <div className="form-group">
              <label htmlFor="">Address</label>
              <input
                onInput={handleChange}
                type="text"
                name="address"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.address && Errors.address}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Nationality</label>
              <CountryDropdown
                onChange={(value) => {
                  handleChange({ target: { name: "nationality", value } });
                }}
                value={country}
                className="form-control"
                name="nationality"
              />
              <small className="text-danger">
                {Errors?.nationality && Errors.nationality}
              </small>

              {country !== "" && (
                <>
                  <option value="">Select Region</option>

                  <RegionDropdown
                    key={country.code}
                    country={country}
                    value={region}
                    onChange={(value) => {
                      handleChange({ target: { name: "region", value } });
                    }}
                    className="form-control"
                  />
                  <small className="text-danger">
                    {Errors?.region && Errors.region}
                  </small>
                </>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="">Phone</label>
              <input
                onInput={handleChange}
                type="phone"
                name="phone"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.phone && Errors.phone}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                onInput={handleChange}
                type="password"
                name="password"
                onKeyUp={(el) => {
                  el.target.value
                    ? setPassCheck("d-block")
                    : setPassCheck("d-none");
                  regexCap.test(el.target.value)
                    ? setCapCheck("text-success")
                    : setCapCheck("text-danger");
                  regexSmall.test(el.target.value)
                    ? setSmallCheck("text-success")
                    : setSmallCheck("text-danger");
                  regexNum.test(el.target.value)
                    ? setNumCheck("text-success")
                    : setNumCheck("text-danger");
                  regexSpec.test(el.target.value)
                    ? setSpecCheck("text-success")
                    : setSpecCheck("text-danger");
                  el.target.value.length >= 8 && el.target.value.length <= 12
                    ? setLenCheck("text-success")
                    : setLenCheck("text-danger");
                }}
                className="form-control"
              />
              {/* Password check */}
              <div className={PassCheck}>
                <p className={CapCheck}>Capital case check</p>
                <p className={SmallCheck}>Small case check</p>
                <p className={NumCheck}>Number check</p>
                <p className={SpecCheck}>Specail character check</p>
                <p className={LenCheck}>Length check (8-12)</p>
              </div>
              <small className="text-danger">
                {Errors?.password && Errors.password}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="">Confirm Password</label>
              <input
                onInput={handleChange}
                type="password"
                name="confirm_password"
                className="form-control"
              />
              <small className="text-danger">
                {Errors?.confirm_password && Errors.confirm_password}
              </small>
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="btn btn-dark mt-3 mb-2"
            >
              SUBMIT
            </button>
          </form>

          <i>
            Already have an account?
            <a className="text-dark" href="/login">
              Sign In
            </a>
          </i>
        </div>
      </div>
      <Footer />;
    </>
  );
};

export default Register;
