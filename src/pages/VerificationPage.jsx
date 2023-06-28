// import axios from "axios";
import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { publicRequest } from "../services/request";

const VerificationPage = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  const [code, setCode] = useState();
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState({
    display: "none",
  });
  const [disp, setDisp] = useState({
    display: "block",
  });
  const mail = localStorage.getItem("email");

  const verificationCode = Math.floor(1000 + Math.random() * 9000);

  const [submitted, setSubmitted] = useState(false);

  const verify = async () => {
    setSubmitted(true);
    try {
      const publicReq = publicRequest();

      let res = await publicReq.post("/auth/verification", {
        code: verificationCode,
        mail: mail,
      });
      setCode(verificationCode);

      console.log(res.data, verificationCode);

      setDisplay({ display: "block" });
      setDisp({ display: "none" });
    } catch (error) {
      console.log(error);
    }
    setSubmitted(false);
  };

  const submit = async () => {
    // eslint-disable-next-line
    if (code == inputRef.current.value) {
      alert("Email verified successfully");
      navigate("/login");
    } else {
      setMessage("incorrect authentication code");
    }
  };

  return (
    <>
      <h1 className="text-center my-5">VerificationPage</h1>
      {/* <h2>Hi ****</h2> */}
      <div style={disp}>
        <p>You are one step away from joining Harrears</p>
        <div className="text-center">
          <button
            onClick={verify}
            disabled={submitted}
            className="btn btn-primary px-5 py-3 my-3"
          >
            Verify your Email Address
          </button>
        </div>
      </div>
      <div className="text-center my-5" style={display}>
        {message && <div className="alert alert-danger">{message}</div>}
        <h3>Enter the verification code sent to your email address</h3>
        <input type="text" ref={inputRef} />
        <div>
          <button onClick={submit} className="btn btn-dark mt-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
