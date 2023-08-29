import auth_bg from "../../assets/images/bread_bg.svg";
import logo from "../../assets/images/logo.svg";
import React, { useContext, useState } from "react";
import User from "../../assets/images/cameraImg.svg";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import CalendarImg from "../../assets/images/calendar.svg";
import { Calendar } from "primereact/calendar";
import SubHeader from "../../sharedComponents/SubHeader";
import img_placeholder from "../../assets/images/img_placeholder.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ic_back_circle from "../../assets/images/ic_back_circle.svg";
import { AppContext } from "../../context/AppContext";

const SchoolRegistration = ({type}) => {

  const { sidebar, setSidebar,schoolName } = useContext(AppContext);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(null);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main className="auth-main registration-main" id="LoginWithOTP">
      <div className="auth-container">
        <div className="registration-auth-wrapper">
          <div className="login-wrapper" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000">
            <div
              className="registration-card"
              
            >
              <img src={logo} alt="logo" className="brand-logo" />

              <div className="top-school-name">
                <p>{schoolName?schoolName:""}</p>
              </div>
              <div className="top-heading-section">
                <p className="registration">{type} Registration</p>
                
                <p className="details border-top">{type} Details</p>
              </div>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div
                  className="mainLandingCard cx-mb-20"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                >
                  <div className="profileCard ">
                    <div className="userCard">
                      <img src={img_placeholder} className="UserImg" alt="" />
                      <label htmlFor="imgSelect" className="imgSelector">
                        <input type="file" id="imgSelect" className="d-none" />
                        <img src={User} className="editImg" alt="" />
                      </label>
                    </div>
                  </div>

                  {/* Forms section start*/}
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <Form.Control
                          className="formsForValid"
                          required
                          type="text"
                          placeholder="Enter Your School Name..."
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Type Your School Name....
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          School Name<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                      </div>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <Form.Control
                          className="formsForValid"
                          required
                          type="text"
                          placeholder="Type School's Mail Id"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Type School's Mail Id.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          Email<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                      </div>
                    </div>
                    
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <Form.Control
                          className="formsForValid"
                          required
                          type="password"
                          placeholder="Enter Password"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Your Password.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          Password<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <Form.Control
                          className="formsForValid"
                          required
                          type="password"
                          placeholder="Confirm Password"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter Password Same as Before.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          Confirm Password
                          <span className="ashhStar"> &#42;</span>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST cx-mb-10">
                        <span className="legendHere">
                          Nationality<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                        <Form.Select
                          class="form-select custFormSel"
                          required
                          aria-label="Default select example"
                        >
                          <option value="">Select School's Nationality</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please Select School's Nationality.
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <span className="legendHere">
                          City<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                        <Form.Select
                          class="form-select"
                          required
                          aria-label="Select Your City"
                        >
                          <option value="">Select School's City</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please Select a place.
                        </Form.Control.Feedback>
                      </div>
                      </div>
                    
                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST cx-mb-10">
                        <span className="legendHere">
                          Address<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                        <Form.Control
                          required
                          className="formsForTextArea"
                          as="textarea"
                          rows={4}
                          placeholder="Enter School’s Address..."
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Type Your Address....
                        </Form.Control.Feedback>
                      </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 cx-mb-10">
                      <div className="fieldSetCUST">
                        <Form.Control
                          className="formsForValid"
                          required
                          type="text"
                          placeholder="Enter School Contact Number"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter School Contact Number.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                          Contact Number
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Forms section end*/}
                  <div className="bottom-wrapper border-top">
                    <div className="row">
                      <div className="col-md-6">
                        <p className="captcha-text">
                          Captcha ( Click image for refresh ){" "}
                          <span className="ashhStar"> &#42;</span>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <div className="mainLandingCard">
                            {/* Forms section */}
                            <div className="row">
                              <div className="col-lg-12 col-sm-12">
                                <div className="fieldSetCUST">
                                  <Form.Control
                                    className="formsForValid"
                                    required
                                    type="text"
                                    // placeholder="Type Your Name..."
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    Please Type Code Here
                                  </Form.Control.Feedback>
                                  <span className="legendHere">
                                    Verify Code
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </div>
                    </div>
                    <div className="button-wrapper">
                      <div className="left-button auth-btns">
                        <button
                          className="login-register-btn"
                          onClick={() => navigate("/")}
                        >
                          <img src={ic_back_circle} alt="" className="me-2" />
                          Back To Login
                        </button>
                      </div>
                      <div className="right-button">
                        <button className="cx-btn-2">Cancel</button>
                        <button className="cx-btn-1 cx-ml-20"  onClick={() => navigate("/Dashboard")}>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SchoolRegistration;
