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

const DailyAssignmentwithReview = () => {
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
          <div className="assignment-details-wrapper green-label">
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
                      <div className="ad-heading">Assignment 01</div>
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
              <div className="col-lg-8">
                <div className="assignment-accordion-wrapper">
                  <Accordion
                    // multiple
                    activeIndex={0}
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
                        {/* 
	<div className="question-choices">
	                          <form className="qform">
	                            <label>
	                              <input type="checkbox" name="radio" />
	                              <span className="true">Cat</span>
	                            </label>
	                            <label>
	                              <input type="checkbox" name="radio" />
	                              <span className="true">Cat</span>
	                            </label>
	                            <label>
	                              <input type="checkbox" name="radio" />
	                              <span className="false">Hen</span>
	                            </label>
	                          </form>
	                        </div>
 */}
                      </div>
                    </AccordionTab>
                  </Accordion>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="review-main-wrapper">
                  <p className="review-heading">Review</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="score-card completeness">
                        <div className="score-percentile">58%</div>
                        <div className="subtitle">Completeness</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="score-card creativity">
                        <div className="score-percentile">47%</div>
                        <div className="subtitle">Creativity</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="score-card neatness">
                        <div className="score">
                          <span>08</span>/10
                        </div>
                        <div className="subtitle">Neatness</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="score-card rating">
                        <div className="score-stars">
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={blank_star} alt="" />
                        </div>
                        <div className="subtitle">Overall Rating</div>
                      </div>
                    </div>
                  </div>
                  <p className="review-sub-heading">Comments</p>
                  <div className="comment-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                    <p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                    <p>ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                  </div>
                  <div className="feedback-wrapper">
                  <p className="review-sub-heading">Feedback</p>
                  <button className="feedback">Good</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DailyAssignmentwithReview;
