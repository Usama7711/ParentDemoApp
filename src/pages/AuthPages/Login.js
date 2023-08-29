import React from "react";
import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import ic_otp_btn from "../../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../../assets/images/ic_register_btn.svg";

import ic_copyright from "../../assets/images/ic_copyright.svg";

import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="auth-main">
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="login-wrapper">
            <div
              className="auth-card"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={logo} alt="logo" className="brand-logo" />

              <div className="heading">
                <label htmlFor="">Sign in to your account</label>
              </div>
              <Form>
                <div className="fieldSetCUST margin-b-input">
                  <Form.Control
                    className="formsForValid"
                    // required
                    autocomplete="nope"
                    type="email"
                    placeholder="Enter Your Email ID"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your Name.
                  </Form.Control.Feedback>
                  <span className="legendHere">
                    Email<span className="ashhStar"> &#42;</span>{" "}
                  </span>
                </div>

                <div className="fieldSetCUST">
                  <Form.Control
                    className="formsForValid"
                    autocomplete="nope"
                    // required
                    type="password"
                    placeholder="Enter Your Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your Name.
                  </Form.Control.Feedback>
                  <span className="legendHere">
                    Password<span className="ashhStar"> &#42;</span>{" "}
                  </span>
                </div>
                <div className="forgot-pass">
                  <Link to="/ForgotPassword">Forgot Password ?</Link>
                </div>

                <div className="row auth-btns m-0">
                  <button
                    className="login-btn col-12"
                    onClick={() => navigate("/Dashboard")}
                  >
                    Login
                  </button>

                  <div className="row outerbtn-main p-0 m-0">
                    <button
                      className="login-otp-btn col-md-6"
                      onClick={() => navigate("/LoginWithOTP")}
                    >
                      <img src={ic_otp_btn} alt="" className="me-1" /> Login
                      Using OTP
                    </button>

                    <button
                      className="login-register-btn col-md-6"
                      onClick={() => navigate("/ParentSignUp")}
                    >
                      <img src={ic_register_btn} alt="" className="me-1" />
                      Register
                    </button>
                  </div>
                </div>
                <div className="footer-content">
                  <label>
                    2023
                    <img src={ic_copyright} alt="" />
                    Edsys for Education
                  </label>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
