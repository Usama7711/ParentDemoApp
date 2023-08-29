import React, { useState } from "react";
import SubHeader from "../../sharedComponents/SubHeader";
// import { Accordion, AccordionTab } from "primereact/accordion";
import Accordion from "react-bootstrap/Accordion";
import lesson_icon from "../../assets/images/lesson_icon.svg";
import topic_icon from "../../assets/images/topic_icon.svg";
import subtopic_icon from "../../assets/images/subtopic_icon.svg";
import green_check from "../../assets/images/green_check_icon.svg";
import subtopic_pending_icon from "../../assets/images/subtopic_pending_icon.svg";
import subtopic_upcoming_icon from "../../assets/images/subtopic_upcoming_icon.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ElearningSubjectTopic = () => {
  const [open, setOpen] = useState(false);
  const [openSec, setOpenSec] = useState(false);

  const percentage = 75;

  return (
    <main id="cx-main" className="Topic_main">
      <div className="cx-main-card">
        <SubHeader />
        <div className="topic-main-wrapper">
          <div className="description-box">
            <p className="db-heading">Description</p>
            <p className="db-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="topic-accordion-wrapper">
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
                            <span className="me-4">Duration</span>04:55 Hrs
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tch-right">
                    <CircularProgressbar value={60} text={`${60}%`} />
                  </div>
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

export default ElearningSubjectTopic;
