import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { sendotp } from "../../actions/Auth2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpState, setOtpState] = useState(false);
  var random = useSelector((state) => state.otpreducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = JSON.parse(localStorage.getItem("Login"));
  const otpValidation = (e) => {
    e.preventDefault();
    if (status.status === false) {
      if (email !== "") {
        dispatch(sendotp({ email }));
        setOtpState(true);
      } else {
        alert("Enter an mail id");
      }
    } else {
      alert("Your account was Already Verified");
      navigate("/");
    }
  };
  const otpVerification = () => {
    if (random !== "" && random !== null) {
      var random2 = random.toString();
    } else {
      alert("Something wrong With Network!....");
    }
    if (otp !== "") {
      if (otp === random2) {
        localStorage.setItem("Login", JSON.stringify({ status: true }));
        alert("Email Verification was Successfull");
        navigate("/");
      } else {
        localStorage.setItem("Login", JSON.stringify({ status: false }));
        alert("Incorrect Otp");
      }
    } else {
      alert("Enter the OTP");
    }
  };
  return (
    <div className="login-container">
      <div className="form-Container">
        <form onSubmit={otpValidation}>
          <input
            type="email"
            placeholder="Email id ..."
            onChange={(e) => setEmail(e.target.value)}
          />
          {otpState === true && (
            <input
              type="number"
              placeholder="OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          {otpState === true ? (
            ""
          ) : (
            <button type="submit" className="verify-btn">
              Send OTP
            </button>
          )}
        </form>
        {otpState === true && (
          <>
            <button className="verify-btn" onClick={otpVerification}>
              Verify
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
