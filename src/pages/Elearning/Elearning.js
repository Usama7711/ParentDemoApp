import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SubHeader from "../../sharedComponents/SubHeader";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ReactComponent as ArrowSvg } from "../../assets/images/curiculum/arrow-right-circle.svg";
// import pathImg from "../assets/images"

const Elearning = () => {
  return (
    <main id="cx-main" className="Attendance_calender">
      <div className="cx-main-card">
        <SubHeader />
        

        <div className="curiculum-card-design mb-3">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/img1.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>English</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/add-plus.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Mathematics</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/world.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Social Studies</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/test-tube.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Chemistry</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/react-logo.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Physics</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/tube.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Science</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/img2.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>History</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/green-world.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Geography</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
       <div className="breadcrumb-wrapper mb-4 mt-4">
          <div className="breadcrumb">
            <p>Additional E-Learning Material</p>
          </div>
        </div>
        <div className="curiculum-card-design">
          <Row>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/react-logo.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Physics</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/tube.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>Science</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="curiculum-inner-card">
                <Link to="/ElearningSubjectTopic">
                  <div className="curiculm-btn d-flex">
                    <img
                      src={require("../../assets/images/curiculum/img2.png")}
                      alt="icon"
                    />
                    <div className="svgarrow">
                      <ArrowSvg />
                    </div>
                  </div>
                  <h4>History</h4>
                  <div className="topic-list">
                    <span className="me-3">Topics </span> &nbsp; 01/20
                  </div>
                  <div className="topic-list">
                    <span className="me-1">Duration</span> &nbsp; 04:55 Hrs
                  </div>
                  <div className="progress-bar1">
                    <div className="topic-list">
                      <span>Progress </span>
                    </div>
                    <div className="pars">40%</div>
                  </div>
                  <ProgressBar now={25} />
                </Link>
              </div>
            </div>

          </Row>
        </div>
      </div>
    </main>
  );
};

export default Elearning;
