import Input from "../components/Input";
import "./Card.css";

import React, { useState } from "react";
import OTPInput from "react-otp-input";

function PatientRegistration() {
  const [OTP, setOTP] = useState("");
  function handleChange(OTP) {
    setOTP(OTP);
  }
  return (
    <div className="body">
      <div className="wrapper">
        <div className="subCard"></div>
        <div className="mainCard">
          <h1>Patient Registration</h1>
          <Input pholder="Name" />
          <Input pholder="Aadhar Number" />
          <Input pholder="Mobile Number" />
          <Input pholder="City" />
          <Input pholder="State" />
          <Input pholder="District" />
          <Input pholder="Pincode" />
          <div className="otp">
            <OTPInput
              onChange={handleChange}
              value={OTP}
              inputStyle="inputStyle"
              numInputs={6}
              separator={<span></span>}
            />
          </div>
          <button className="btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default PatientRegistration;
