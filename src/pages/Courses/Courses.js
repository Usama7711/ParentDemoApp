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
import study_img from "../../assets/images/study_img.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";
import cart_icon_light from "../../assets/images/cart_icon_light.svg";

const Assignment = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [isView, setIsView] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <main id="cx-main" className="Courses">
      <div className="cx-main-card">
        <SubHeader />
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
          className="main-courses-wrapper"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <TabView>
            <TabPanel header="Anna Newman Courses">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-2">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-2">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-2">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-2">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mt-4">
                  <div className="course-card">
                    <Link to="/AboutCourseDetails">
                      <div className="course-img-box">
                        <img src={study_img} alt="" />
                      </div>
                      <div className="course-heading">
                        Rutherford's Atomic Model
                      </div>
                      <p className="duration">02 Hrs 20 min left</p>
                      <div className="course-progress-box">
                        <div className="topic-list">
                          <span>Progress </span>
                        </div>
                        <div className="percentage">40%</div>
                      </div>
                      <ProgressBar now={40} />
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Explore Courses">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20 mt-1">
                  <Link to="/BuyCourseDetails">
                    <div className="sm-card-wrapper">
                      <div className="sm-top-card">
                        <div className="sm-img-box">
                          <img src={study_img} alt="" />
                        </div>
                        <div className="sm-heading">
                          <p>Rutherford's Atomic Model</p>
                        </div>
                        <div className="sm-name-rating">
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
                        <div className="sm-details-text-box">
                          <div className="sm-details">
                             2 hrs 30min
                          </div>
                          
                        </div>
                      </div>
                      <div className="sm-bottom-card">
                        <div className="rate">500$</div>
                        <div className="cart-btn">
                          <img src={cart_icon_light} alt="" />
                        </div>
                      </div>
                    </div>
                  </Link>
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
