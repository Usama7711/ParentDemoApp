import React from "react";
import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import ic_right_circle_arrow from "../../assets/images/ic_right_circle_arrow.svg";
import ic_user1 from "../../assets/images/ic_user1.svg";

import ic_copyright from "../../assets/images/ic_copyright.svg";
import ic_lock from "../../assets/images/ic_lock.svg";

import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Lock = () => {
  const navigate = useNavigate();
  return (
    <main className="auth-main" id="Lock">
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

              <div className="lock-outer-main">
                <div className="left">
                  <img src={ic_user1} alt="" />
                </div>
                <div className="right">
                  <Form>
                    <div className="lock-head-ic">
                      <div>
                        <img src={ic_lock} alt="" className="ic_lock" />
                        <label htmlFor="">Harisfather</label>
                      </div>
                    </div>
                    <div className="email-text">
                      <label htmlFor="">Harisfather@mailnator.com</label>
                    </div>
                    <div className="fieldSetCUST ">
                      <Form.Control
                        className="formsForValid"
                        type="password"
                        placeholder="Please enter your password to Un-lock"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Type Your Name.
                      </Form.Control.Feedback>
                      <span className="legendHere">
                        Password<span className="ashhStar"> &#42;</span>{" "}
                      </span>
                      <button className="lock-btn" onClick={()=> navigate("/Dashboard")}>
                        <img src={ic_right_circle_arrow} alt="" />
                      </button>
                    </div>

                    <div className="forgot-pass">
                      <Link to="#">Not Harisfather ?</Link>
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
        </div>
      </div>
    </main>
  );
};

export default Lock;
