import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SubHeader from "../../sharedComponents/SubHeader";
import topic_details_img from "../../assets/images/topic_details_img.svg";
import subtopic_icon from "../../assets/images/subtopic_icon.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";

const StudyMaterialTopicDetails = () => {
  return (
    <main id="cx-main" className="Study_material_topic">
      <div className="cx-main-card">
        <SubHeader />

        <div className="study-material-topic-details mb-3">
          <div className="study-material-details-wrapper">
            <div className="row g-0">
              <div className="col-lg-1">
                <div className="ad-img-box">
                  <img src={topic_details_img} alt="" />
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-center">
                <div className="ad-text-box ms-3">
                  <div className="row g-0">
                    <div className="col-lg-12">
                      <div className="ad-heading rating-in-heading">
                        Rutherford's Atomic Model{" "}
                        <span className="stars">
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={star_icon} alt="" />
                          <img src={blank_star} alt="" />
                        </span>
                        <span className="rating-count">(104)</span>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="subject">
                          Created By
                          <span style={{ margin: "0 0 0 20px" }}>
                            Mr. John Doe
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="CreatedOn">
                          E-Learning
                          <span
                            style={{ fontWeight: "600", margin: "0 0 0 20px" }}
                          >
                            40 Topics
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="assignedBy">
                          Assignment{" "}
                          <span
                            style={{ fontWeight: "600", margin: "0 0 0 10px" }}
                          >
                            40
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3">
                      <div className="ad-detail-text">
                        <p className="status">
                          Assessment{" "}
                          <span
                            style={{ fontWeight: "600", margin: "0 0 0 10px" }}
                          >
                            40
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="smd-rate">
                      <p>1500$</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="smd-btn-wrapper">
                      <button className="cx-btn-2 cx-mb-20">Add To Cart</button>
                      <Link to="/mycart" className="cx-btn-1">
                       Buy Now 500$
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-box cx-mt-20">
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
          <div className="smt-bottom">
            <div className="smt-topic">
              <div className="smt-left">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={subtopic_icon} alt="" className="me-5" />
                  </div>
                  <div className="col-lg-9 d-flex align-items-center">
                    <div className="topic-text-box">
                      <div className="ad-heading">E-Learning</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smt-right">
                <p>100%</p>
              </div>
            </div>
            <div className="smt-topic">
              <div className="smt-left">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={subtopic_icon} alt="" className="me-5" />
                  </div>
                  <div className="col-lg-9 d-flex align-items-center">
                    <div className="topic-text-box">
                      <div className="ad-heading">Assignments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smt-right">
                <p>40</p>
              </div>
            </div>
            <div className="smt-topic">
              <div className="smt-left">
                <div className="row">
                  <div className="col-lg-3">
                    <img src={subtopic_icon} alt="" className="me-5" />
                  </div>
                  <div className="col-lg-9 d-flex align-items-center">
                    <div className="topic-text-box">
                      <div className="ad-heading">Assessments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smt-right">
                <p>40</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudyMaterialTopicDetails;
