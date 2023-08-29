import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SubHeader from "../../sharedComponents/SubHeader";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ReactComponent as ArrowSvg } from "../../assets/images/curiculum/arrow-right-circle.svg";
import study_img from "../../assets/images/study_img.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";
import cart_icon_light from "../../assets/images/cart_icon_light.svg";

const StudyMaterial = () => {
  return (
    <main id="cx-main" className="Study_material">
      <div className="cx-main-card">
        <SubHeader />

        <div className="study-material-card-design mb-3">
          <div className="row">
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
              <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
           <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 cx-mb-20">
             <Link to="/StudyMaterialTopicDetails">
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
                      <span className="me-1">E-learning Material</span> &nbsp;
                      40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assignment</span> &nbsp; 40
                    </div>
                    <div className="sm-details">
                      <span className="me-1">Assessments</span> &nbsp; 10
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
        </div>
      </div>
    </main>
  );
};

export default StudyMaterial;
