import React, { useContext, useEffect } from "react";
import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import ic_otp_btn from "../../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../../assets/images/ic_register_btn.svg";
import { TabView, TabPanel } from "primereact/tabview";
import ic_copyright from "../../assets/images/ic_copyright.svg";
import ic_back_circle from "../../assets/images/ic_back_circle.svg";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
const ParentSignUp = () => {
  const { setSchoolName } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    setSchoolName("");
  }, []);

  return (
    <main className="auth-main" id="LoginWithOTP">
      <div className="auth-container" id="ParentSignUp">
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
                <label htmlFor="">Register As,</label>
              </div>
              <Form>
                <div
                  className="main-tab-login-with-otp"
                  id="parent-sign-app-tab"
                >
                  <Tab.Container defaultActiveKey="first">
                    <Nav variant="pills" className="">
                      <Nav.Item className="left-tab first-tab">
                        <Nav.Link eventKey="first">School App</Nav.Link>
                      </Nav.Item>

                      <Nav.Item className="right-tab second-tab">
                        <Nav.Link eventKey="second">Parent App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="right-tab third-tab">
                        <Nav.Link eventKey="third">Teacher App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="right-tab fourth-tab">
                        <Nav.Link eventKey="fourth">Student App</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="email-otp">
                          <div className="fieldSetCUST cx-mb-25">
                            <span className="legendHere">
                              School Name
                              <span className="ashhStar"> &#42;</span>
                            </span>
                            <Form.Select
                              class="form-select custFormSel"
                              // required
                              aria-label="Default select example"
                              onChange={(e) => {
                                setSchoolName(e.target.value);
                              }}
                            >
                              <option value="">Select School</option>
                              <option value="Raju Gandhi School">
                                Raju Gandhi School
                              </option>
                              <option value="Oxford School">
                                Oxford School
                              </option>
                              <option value="MGM School">MGM School</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please Select Your School.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="row auth-btns ">
                          <div>
                            <button
                              className="login-btn col-12"
                              onClick={() => navigate("/SchoolRegistration")}
                            >
                              Continue
                            </button>
                          </div>
                          <div>
                            <button
                              className="login-register-btn col-12"
                              onClick={() => navigate("/")}
                            >
                              <img
                                src={ic_back_circle}
                                alt=""
                                className="me-2"
                              />
                              Back To Login
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <div className="email-otp">
                          <div className="fieldSetCUST cx-mb-25">
                            <span className="legendHere">
                              School Name
                              <span className="ashhStar"> &#42;</span>
                            </span>
                            <Form.Select
                              class="form-select custFormSel"
                              // required
                              aria-label="Default select example"
                              onChange={(e) => {
                                setSchoolName(e.target.value);
                              }}
                            >
                              <option value="">Select School</option>
                              <option value="Raju Gandhi School">
                                Raju Gandhi School
                              </option>
                              <option value="Oxford School">
                                Oxford School
                              </option>
                              <option value="MGM School">MGM School</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please Select Your School.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="row auth-btns ">
                          <div>
                            <button
                              className="login-btn col-12"
                              onClick={() => navigate("/ParentRegistration")}
                            >
                              Continue
                            </button>
                          </div>
                          <div>
                            <button
                              className="login-register-btn col-12"
                              onClick={() => navigate("/")}
                            >
                              <img
                                src={ic_back_circle}
                                alt=""
                                className="me-2"
                              />
                              Back To Login
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="email-otp">
                          <div className="fieldSetCUST cx-mb-25">
                            <span className="legendHere">
                              School Name
                              <span className="ashhStar"> &#42;</span>
                            </span>
                            <Form.Select
                              class="form-select custFormSel"
                              // required
                              aria-label="Default select example"
                              onChange={(e) => {
                                setSchoolName(e.target.value);
                              }}
                            >
                              <option value="">Select School</option>
                              <option value="Raju Gandhi School">
                                Raju Gandhi School
                              </option>
                              <option value="Oxford School">
                                Oxford School
                              </option>
                              <option value="MGM School">MGM School</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please Select Your School.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="row auth-btns ">
                          <div>
                            <button
                              className="login-btn col-12"
                              onClick={() => navigate("/TeacherRegistration")}
                            >
                              Continue
                            </button>
                          </div>
                          <div>
                            <button
                              className="login-register-btn col-12"
                              onClick={() => navigate("/")}
                            >
                              <img
                                src={ic_back_circle}
                                alt=""
                                className="me-2"
                              />
                              Back To Login
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <div className="email-otp">
                          <div className="fieldSetCUST cx-mb-25">
                            <span className="legendHere">
                              School Name
                              <span className="ashhStar"> &#42;</span>
                            </span>
                            <Form.Select
                              class="form-select custFormSel"
                              required
                              aria-label="Default select example"
                              onChange={(e) => {
                                setSchoolName(e.target.value);
                              }}
                            >
                              <option value="">Select School</option>
                              <option value="Raju Gandhi School">
                                Raju Gandhi School
                              </option>
                              <option value="Oxford School">
                                Oxford School
                              </option>
                              <option value="MGM School">MGM School</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              Please Select Your School.
                            </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="row auth-btns ">
                          <div>
                            <button
                              className="login-btn col-12"
                              onClick={() => navigate("/StudentRegistration")}
                            >
                              Continue
                            </button>
                          </div>
                          <div>
                            <button
                              className="login-register-btn col-12"
                              onClick={() => navigate("/")}
                            >
                              <img
                                src={ic_back_circle}
                                alt=""
                                className="me-2"
                              />
                              Back To Login
                            </button>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
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

export default ParentSignUp;
