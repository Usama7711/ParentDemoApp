import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import SubHeader from "../../sharedComponents/SubHeader";
import { Accordion, AccordionTab } from "primereact/accordion";
import pending_assignment_icon from "../../assets/images/pending_assignment_icon.svg";
import pending_assignment from "../../assets/images/pending_assignment.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";

const IncompleteAssignment = () => {
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
          <div className="assignment-details-wrapper red-label">
            <div className="row g-0">
              <div className="col-lg-1">
                <div className="ad-img-box">
                  <img src={pending_assignment_icon} alt=""/>
                </div>
              </div>
              <div className="col-lg-10 d-flex align-items-center">
                <div className="ad-text-box">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="ad-heading">Assignment 02</div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ad-detail-text">
                        <p className="subject">
                          Subject<span>English</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ad-detail-text">
                        <p className="CreatedOn">
                          Created On<span>09-08-2023</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ad-detail-text">
                        <p className="submissinDate">
                          Submission Date
                          <span>09-08-2023</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="ad-detail-text">
                        <p className="assignedBy">
                          Assigned By <span>Mr. John Doe</span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="ad-detail-text">
                        <p className="status">
                          Status<span>Pending</span>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
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
              <div className="col-lg-1">
                <div className="ad-img-box">
                <img src={pending_assignment} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IncompleteAssignment;
