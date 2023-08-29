import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import User from "../../assets/images/editProfile.svg";
import { Calendar } from "primereact/calendar";
import CalendarImg from "../../assets/images/calendar.svg";
import SubHeader from "../../sharedComponents/SubHeader";
import { Navigate, useNavigate } from "react-router-dom";

const Leaves = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [validated, setValidated] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main id="cx-main" className="Apply_leave">
      
      <div className="cx-main-card">
      <SubHeader />
        <div className="form-wrapper">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div
              className="mainLandingCard"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <div className="form-title-wrapper">
                <p className="form-title">Apply Leave</p>
              </div>

              {/* Forms section */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      placeholder="21-02-2023"
                      className="dateChapter"
                    />
                    <span className="legendHere">
                    Leave From Date<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <img src={CalendarImg} className="caledarImg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <Calendar
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      placeholder="21-02-2023"
                      className="dateChapter"
                    />
                    <span className="legendHere">
                      Leave To Date<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <img src={CalendarImg} className="caledarImg" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 cx-mb-20">
                  <div className="fieldSetCUST">
                    <span className="legendHere">
                      Leave Type<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Select
                      class="form-select"
                      required
                      aria-label="Default select example"
                    >
                      <option value="">Select Leave Type...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please Select Leave Type.
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 cx-mb-20">
                  <div className="fieldSetCUST">
                    <span className="legendHere">
                      Leave Mode<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Select
                      class="form-select"
                      required
                      aria-label="Default select example"
                    >
                      <option value="">Select Leave Mode...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please Select Gender.
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="fieldSetCUST cx-mb-25">
                    <span className="legendHere">
                      Reason<span className="ashhStar"> &#42;</span>{" "}
                    </span>
                    <Form.Control
                      className="formsForTextArea"
                      as="textarea"
                      rows={4}
                      placeholder="Write reason for leave..."
                    />
                    <Form.Control.Feedback type="invalid">
                      Write reason for leave...
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="main-btn-wrapper">
                  <button className="cx-btn-2" onClick={() => navigate("/Leaves")}>Cancel</button>
                  <button className="cx-btn-1">Apply Leave</button>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Leaves;
