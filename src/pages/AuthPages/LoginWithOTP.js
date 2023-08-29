import React from "react";
import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import ic_otp_btn from "../../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../../assets/images/ic_register_btn.svg";
import { TabView, TabPanel } from "primereact/tabview";
import ic_copyright from "../../assets/images/ic_copyright.svg";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
const LoginWithOTP = () => {
  const navigate = useNavigate();

  return (
    <main className="auth-main" id="LoginWithOTP">
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
                
                <div
                  className="main-tab-login-with-otp"
                  id="login-with-otp-tab"
                >
                  <Tab.Container defaultActiveKey="first">
                    <Nav variant="pills" className="">
                      <Nav.Item className="left-tab">
                        <Nav.Link eventKey="first">Email OTP</Nav.Link>
                      </Nav.Item>

                      <Nav.Item className="right-tab">
                        <Nav.Link eventKey="second">Mobile Number OTP</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first" >
                        <div className="email-otp">
                          <div className="fieldSetCUST ">
                            <Form.Control
                              className="formsForValid"
                              // required
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
                          <div className="text-heading">
                            <label htmlFor="">
                              An OTP has been sent to your Email Address, Please
                              Verify it below
                            </label>
                          </div>
                          <div className="inputs-otp">
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                            <Form.Control
                              className="formsForValid"
                              type="text"
                              maxLength={1}
                            />
                          </div>
                          <div className="resend">
                            <label htmlFor="">Resend OTP 00:59s</label>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <div className="email-otp">
                      <div className="fieldSetCUST ">
                        <Form.Control
                          className="formsForValid"
                          // required
                          type="text"
                          placeholder="Enter Your Mobile Number"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Type Your Name.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          Mobile Number<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                      </div>
                      <div className="text-heading">
                        <label htmlFor="">
                          An OTP has been sent to your Mobile number, Please
                          Verify it below
                        </label>
                      </div>
                      <div className="inputs-otp">
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                        <Form.Control
                          className="formsForValid"
                          type="text"
                          maxLength={1}
                        />
                      </div>
                      <div className="resend">
                        <label htmlFor="">Resend OTP 00:59s</label>
                      </div>
                    </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
                <div className="row auth-btns g-0">
                  <button
                    className="login-btn col-12"
                    onClick={() => navigate("/Dashboard")}
                  >
                    Verfiy
                  </button>

                  <button
                    className="login-register-btn col-12"
                    onClick={() => navigate("/")}
                  >
                    <img src={ic_register_btn} alt="" className="me-1" />
                    Login Using Password
                  </button>
                  <div className="row outerbtn-main ms-0"></div>
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

export default LoginWithOTP;
