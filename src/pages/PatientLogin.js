import Input from "../components/Input";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import "./Card.css";

function PatientLogin() {
  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }

  return (
    <div className="body">
      <div className="wrapper">
        <div className="subCard"></div>
        <div className="mainCard">
          <h1>Patient Login</h1>
          <Input pholder="Aadhar Number" />
          <div className="otp">
            <OTPInput
              onChange={handleChange}
              value={OTP}
              inputStyle="inputStyle"
              numInputs={6}
              separator={<span></span>}
            />
          </div>
          <button className="btn">GET OTP</button>
        </div>
      </div>
    </div>
  );
}

export default PatientLogin;
