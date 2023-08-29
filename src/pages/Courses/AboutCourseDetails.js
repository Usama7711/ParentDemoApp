import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SubHeader from "../../sharedComponents/SubHeader";
import topic_details_img from "../../assets/images/topic_details_img.svg";
import subtopic_icon from "../../assets/images/subtopic_icon.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";
import cart_list_img from "../../assets/images/cart_list_img.svg";
import delete_icon_purple from "../../assets/images/delete_icon_purple.svg";
import Accordion from "react-bootstrap/Accordion";
import lesson_icon from "../../assets/images/lesson_icon.svg";
import topic_icon from "../../assets/images/topic_icon.svg";
import green_check from "../../assets/images/green_check_icon.svg";
import subtopic_pending_icon from "../../assets/images/subtopic_pending_icon.svg";
import subtopic_upcoming_icon from "../../assets/images/subtopic_upcoming_icon.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AboutCourseDetails = () => {
  return (
    <main id="cx-main" className="AboutCourseDetails">
      <div className="cx-main-card">
        <SubHeader />

        <div className="course-topic-details-wrapper mb-3">
          <div className="course-topic-details">
            <div className="row">
              <div className="col-lg-1">
                <img src={cart_list_img} alt="" />
              </div>
              <div className="col-lg-8">
                <div className="cl-text-box">
                  <div className="cl-heading">Rutherford's Atomic Model</div>
                  <div className="cl-name-rating">
                    <p>
                      Robert Close &nbsp; | &nbsp;
                      <span className="stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={blank_star} alt="" />
                      </span>
                      <span className="rating-count">(104)</span>
                    </p>
                  </div>
                  <div className="cl-duration">2hrs left</div>
                  {/* <div className="cl-rate">300$</div> */}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="ctd-right">
                  <CircularProgressbar value={60} text={`${60}%`} />
                </div>
              </div>
            </div>
          </div>
          <div className="topic-accordion-wrapper custom-body">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="tc-lesson-header">
                  <div className="tch-left">
                    <div className="row">
                      <div className="col-lg-5">
                        <img src={lesson_icon} alt="" />
                      </div>
                      <div className="col-lg-7 d-flex align-items-center">
                        <div className="topic-text-box">
                          <div className="ad-heading">Lesson 01</div>
                          <div className="topic-list">
                            <span className="me-3">Start Date </span>
                            21-02-2023
                          </div>
                          <div className="topic-list">
                            <span className="me-4">End Date</span>01-03-2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tch-right">
                    <CircularProgressbar value={60} text={`${60}%`} />
                  </div> */}
                </Accordion.Header>
                <Accordion.Body className="custom-body">
                  <div className="vertical-line"></div>
                  <Accordion alwaysOpen defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header className="custom-header">
                        <div className="tch-left">
                          <div className="row">
                            <div className="col-lg-5">
                              <img src={topic_icon} alt="" />
                            </div>
                            <div className="col-lg-7 d-flex align-items-center">
                              <div className="topic-text-box">
                                <div className="ad-heading">Topic 01</div>
                                <div className="topic-list">
                                  <span className="me-3">Start Date </span>
                                  21-02-2023
                                </div>
                                <div className="topic-list">
                                  <span className="me-4">In Progress</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="sub-topic-wrapper">
                          <div className="sub-topic-item">
                            <div className="sub-icon-box">
                              <img src={green_check} alt="" />
                            </div>

                            <div className="sub-topic">
                              <div className="tch-left">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <img
                                      src={subtopic_icon}
                                      alt=""
                                      className="me-5"
                                    />
                                  </div>
                                  <div className="col-lg-9 d-flex align-items-center">
                                    <div className="topic-text-box">
                                      <div className="ad-heading">
                                        Sub Topic 01
                                      </div>
                                      <div className="topic-list">
                                        <span className="me-2">Duration</span>
                                        04:55 Hrs
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="st-right">
                                <p>100%</p>
                              </div>
                            </div>
                          </div>

                          <div className="sub-topic-item">
                            <div className="sub-icon-box">
                              <img src={subtopic_pending_icon} alt="" />
                            </div>

                            <div className="sub-topic">
                              <div className="tch-left">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <img
                                      src={subtopic_icon}
                                      alt=""
                                      className="me-5"
                                    />
                                  </div>
                                  <div className="col-lg-9 d-flex align-items-center">
                                    <div className="topic-text-box">
                                      <div className="ad-heading">
                                        Sub Topic 01
                                      </div>
                                      <div className="topic-list">
                                        <span className="me-2">Duration</span>
                                        04:55 Hrs
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="st-right">
                                <p>50%</p>
                              </div>
                            </div>
                          </div>

                          <div className="sub-topic-item">
                            <div className="sub-icon-box">
                              <img src={subtopic_upcoming_icon} alt="" />
                            </div>

                            <div className="sub-topic">
                              <div className="tch-left">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <img
                                      src={subtopic_icon}
                                      alt=""
                                      className="me-5"
                                    />
                                  </div>
                                  <div className="col-lg-9 d-flex align-items-center">
                                    <div className="topic-text-box">
                                      <div className="ad-heading">
                                        Sub Topic 01
                                      </div>
                                      <div className="topic-list">
                                        <span className="me-2">Duration</span>
                                        04:55 Hrs
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="st-right">
                                <p>0%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className="custom-header">
                        <div className="tch-left">
                          <div className="row">
                            <div className="col-lg-5">
                              <img src={topic_icon} alt="" />
                            </div>
                            <div className="col-lg-7 d-flex align-items-center">
                              <div className="topic-text-box">
                                <div className="ad-heading">Topic 01</div>
                                <div className="topic-list">
                                  <span className="me-3">Start Date </span>
                                  21-02-2023
                                </div>
                                <div className="topic-list">
                                  <span className="me-4">In Progress</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="custom-body2">
                        <div className="sub-topic-wrapper">
                          <div className="sub-topic-item">
                            <div className="sub-icon-box">
                              <img src={green_check} alt="" />
                            </div>

                            <div className="sub-topic">
                              <div className="tch-left">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <img
                                      src={subtopic_icon}
                                      alt=""
                                      className="me-5"
                                    />
                                  </div>
                                  <div className="col-lg-9 d-flex align-items-center">
                                    <div className="topic-text-box">
                                      <div className="ad-heading">
                                        Sub Topic 01
                                      </div>
                                      <div className="topic-list">
                                        <span className="me-2">Duration</span>
                                        04:55 Hrs
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="st-right">
                                <p>100%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutCourseDetails;
