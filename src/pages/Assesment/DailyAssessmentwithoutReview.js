import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import SubHeader from "../../sharedComponents/SubHeader";
import { Accordion, AccordionTab } from "primereact/accordion";
import assignment_title_Icon from "../../assets/images/assignment_title_Icon.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";

const DailyAssessmentwithoutReview = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [isView, setIsView] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <main id="cx-main" className="Assignment">
      <div className="cx-main-card">
        <SubHeader />

        <div
          className="main-assignment-wrapper"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <div className="assignment-details-wrapper assessment-green-label-big">
            <div className="row g-0">
              <div className="col-lg-1">
                <div className="ad-img-box">
                  <img src={assignment_title_Icon} alt="" />
                </div>
              </div>
              <div className="col-lg-10 d-flex align-items-center">
                <div className="ad-text-box">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="ad-heading">Assessment 01</div>
                    </div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="subject">
                          Subject<span>Physics</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="CreatedOn">
                          Created On<span>09-08-2023</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="submissinDate">
                          Submission Date
                          <span>09-08-2023</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="assignedBy">
                          Assigned By <span>Mr. John Doe</span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="status">
                          Status<span>Submitted</span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="submittedOn">
                          Submitted On
                          <span> 09-08-2023</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="assignment-main-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="assignment-accordion-wrapper">
                  <Accordion
                    activeIndex={0}
                    // multiple
                    className="assignment-accordion red-label"
                  >
                    <AccordionTab header="Question 01">
                      <div className="subtitle">
                        <p>Multiple Choice Single Answer Question.</p>
                      </div>
                      <div className="question-wrapper">
                        <div className="question-title">
                          <p>
                            The Chairman is ill and we'll have to _______ the
                            meeting for a few days.
                          </p>
                        </div>
                        <div className="question-choices">
                          <form className="qform">
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span>put on</span>
                            </label>
                            {/* <div className="tip">
                                This styling is for exam only
                              </div> */}
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span className="false">put off</span>
                            </label>
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span className="true">put away</span>
                            </label>
                          </form>
                        </div>
                      </div>
                    </AccordionTab>
                    <AccordionTab header="Question 02">
                      <div className="subtitle">
                        <p>Multiple Choice Multiple Answer Question.</p>
                      </div>
                      <div className="question-wrapper">
                        <div className="question-title">
                          <p>
                            Choose mammals. Choose all correct answers that
                            apply
                          </p>
                        </div>
                        <div className="question-choices">
                          <form className="qform">
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span className="true">Cat</span>
                            </label>
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span className="true">Cat</span>
                            </label>
                            <label>
                            <input type="checkbox" name="radio" checked="checked"/>
                              <span className="false">Hen</span>
                            </label>
                          </form>
                        </div>
                      </div>
                    </AccordionTab>
                    <AccordionTab header="Question 03">
                      <div className="subtitle">
                        <p>Fill in the blanks</p>
                      </div>
                      <div className="question-wrapper">
                        <div className="question-title">
                          <p>
                            The Chairman is ill and we'll have to _______ the
                            meeting for a few days.
                          </p>
                        </div>
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DailyAssessmentwithoutReview;
