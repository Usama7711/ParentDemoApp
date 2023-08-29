import React from "react";
import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import ic_back_circle from "../../assets/images/ic_back_circle.svg";
import ic_otp_btn from "../../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../../assets/images/ic_register_btn.svg";

import ic_copyright from "../../assets/images/ic_copyright.svg";

import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <main className="auth-main" id="ForgotPassword">
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
                <label htmlFor="">Forgot Password</label>
              </div>
              <Form>
                <div className="fieldSetCUST margin-b-input">
                  <Form.Control
                    className="formsForValid"
                    // required
                    type="email"
                    placeholder="Enter Your Email Id  to Reset Your Password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your Name.
                  </Form.Control.Feedback>
                  <span className="legendHere">
                    Email ID<span className="ashhStar"> &#42;</span>
                  </span>
                </div>

                <div className="row auth-btns ">
                  <div className="row outerbtn-main ms-0">
                    <button
                      className="login-register-btn col-12"
                      onClick={() => navigate("/")}
                    >
                      <img src={ic_back_circle} alt="" className="me-2" />
                      Back To Login
                    </button>

                    <button
                      className="login-btn col-md-6"
                      onClick={() => navigate("/Lock")}
                    >
                      Next
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

export default ForgotPassword;
