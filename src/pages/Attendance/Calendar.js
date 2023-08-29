import React from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import CalendarBox from "./CalendarBox";
import SubHeader from "../../sharedComponents/SubHeader";

const Calendar = () => {
  return (
    <main id="cx-main" className="Attendance_calender">
      
      <div className="cx-main-card">
      <SubHeader />
        {/* <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <p>Calendar</p>
          </div>
          <div className="btn-wrapper">
            <Link to="#" className="green-btn-1">
              View Day Wise Attendance
            </Link>
          </div>
        </div> */}
        <div className="calendar-outer-wrapper" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900">
          <div className="calendar-inner-wrapper">
            <div className="calendar">
            <CalendarBox />
            </div>
            <div className="legends">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="holidays-wrapper">
                    <div className="hw-title">
                      <p>Holidays</p>
                    </div>
                    <div className="hw-body">
                      <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>XYZ Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>XYZ Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Mother’s Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Memorial Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Mother’s Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Memorial Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Memorial Day
                          </p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <p>
                            <span>May 4</span>Memorial Day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="categories-wrapper">
                    <div className="cw-title">
                      <p>Categories</p>
                    </div>
                    <div className="cw-body">
                      <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="purple"></span>
                          <p>Today</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="yellow"></span>
                          <p>Leave</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="green"></span>
                          <p>Present</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="gray"></span>
                          <p>Holiday</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="light-green"></span>
                          <p>Partial Present</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="blue"></span>
                          <p>Events</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="red"></span>
                          <p>Absent</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                          <span className="black"></span>
                          <p>Vacation</p>
                        </div>
                      </div>
                    </div>
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

export default Calendar;
