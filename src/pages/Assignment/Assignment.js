import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import SubHeader from "../../sharedComponents/SubHeader";
import { TabView, TabPanel } from "primereact/tabview";
import assignment_icon from "../../assets/images/assignment_icon.svg";
import arrow_sm from "../../assets/images/arrow_right_circle_fill.svg";

const Assignment = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [isView, setIsView] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <main id="cx-main" className="Assignment">
      <div className="cx-main-card">
        <SubHeader />
        {/* <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <p>Assignment</p>
          </div>
          <div className="btn-wrapper">
          </div>
        </div> */}
        <div
          className="filter-wrapper"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <div className="fw-input-fields">
            <div className="row">
              <div className="col-lg-6">
                <Calendar
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  placeholder="Select Date"
                />
              </div>
            </div>
          </div>
          <div className="fw-btn-wrapper">
            <Link to="#" onClick={handleShowBlank}>
              Submit
            </Link>
          </div>
        </div>

        <div
          className="main-assignment-wrapper"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <TabView>
            <TabPanel header="Pending">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithoutReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card red-label">
                    <Link to="/IncompleteAssignment">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithoutReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card red-label">
                    <Link to="/IncompleteAssignment">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithoutReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card red-label">
                    <Link to="/IncompleteAssignment">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithoutReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card red-label">
                    <Link to="/IncompleteAssignment">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Completed">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card green-label">
                    <Link to="/DailyAssignmentwithReview">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                        <Link to="#" className="assignment-link">
                          <img src={arrow_sm} alt="" />
                        </Link>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Upcoming">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4">
                  <div className="assignment-card">
                    <Link to="#">
                      <div className="ac-img-box">
                        <img src={assignment_icon} alt="" />
                      </div>
                      <div className="ac-heading">Assignment 01</div>
                      <div className="ac-text-box-inner">
                        <div className="ac-text-box">
                          <p className="ac-text">
                            Subject<span>English</span>
                          </p>
                          <p className="ac-text">
                            Created On<span>21-02-2023</span>
                          </p>
                          <p className="ac-text">
                            Submission Date<span>21-02-2023</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </main>
  );
};

export default Assignment;
