import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import green_check_icon from "../../assets/images/green_check_icon_attendance.svg";
import circle_without_green_check from "../../assets/images/circle_without_green_check.svg";
import no_record_img from "../../assets/images/no_record_img.svg";
import calendar from "../../assets/images/calendar.svg";
import DatePicker from "react-datepicker";
import SubHeader from "../../sharedComponents/SubHeader";

const ClassAttendanceData = [
  {
    time: "07:30 AM",
    attendanceStatus: "Attended",
    subject: "Physics",
    teacher: "Sarin",
  },
  {
    time: "08:30 AM",
    attendanceStatus: "Attended",
    subject: "Chemistry",
    teacher: "Irfan",
  },
  {
    time: "09:30 AM",
    attendanceStatus: "Attended",
    subject: "Mathematics",
    teacher: "Shoeb",
  },
  {
    time: "10:30 AM",
    attendanceStatus: "Attended",
    subject: "Geography",
    teacher: "AAmeer",
  },
  {
    time: "11:30 AM",
    attendanceStatus: "Attended",
    subject: "Modern Science",
    teacher: "Sagar",
  },
  {
    time: "12:30 PM",
    attendanceStatus: "Attended",
    subject: "Algebra",
    teacher: "John",
  },
  {
    time: "01:30 PM",
    attendanceStatus: "Upcoming",
    subject: "Geology",
    teacher: "Ashmer",
  },
];

const AttendanceDetails = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <main id="cx-main" className="Attendance_calender">
      <div className="cx-main-card">
        <SubHeader />
        {/* <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <p>Attendance Details</p>
          </div>
          <div className="attendance-status">
            <div className="percentage">
              <div className="color-icon bg-blue"></div>
              <div className="text-box">
                <p>
                  Attendance<span>90%</span>
                </p>
              </div>
            </div>
            <div className="days">
              <div className="color-icon bg-green"></div>
              <div className="text-box">
                <p>
                  Attendance Days<span>23</span>
                  <span>/26</span>
                </p>
              </div>
            </div>
            <div className="leavedays">
              <div className="color-icon bg-red"></div>
              <div className="text-box">
                <p>
                  Leave Days <span>0</span>
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="filter-wrapper">
          <div className="fw-input-fields">
            <div className="row">
              <div className="col-lg-6 innerSelectBox">
              <DatePicker
                selected={startDate}
                // placeholderText="Select Date"
                onChange={(date) => setStartDate(date)}
                className="form-control innerCust"
              />
              <img src={calendar} className="calendarLogo" alt="" />
              </div>
            </div>
          </div>
          <div className="fw-btn-wrapper">
            <Link to="#" onClick={handleShowBlank}>
              Submit
            </Link>
          </div>
        </div>

        {showBlank ? (
          <>
            <div
              className="activity-table-wrapper attendance-blank-table "
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
            >
              <table>
                <thead>
                  <tr className="empty-table">
                    <th className="custom-header-width">Time</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr  className="empty-table">
                    <td></td>
                    <td colSpan={4}>
                      <div className="attendance_blank">
                        <img src={no_record_img} alt="" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div
            className="activity-table-wrapper"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="900"
          >
            <table>
              <thead>
                <tr>
                  <th className="custom-padding"></th>
                  <th className="custom-width">Time</th>
                  <th>Activity</th>
                </tr>
              </thead>
              <tbody>
                {ClassAttendanceData && ClassAttendanceData?.length > 0
                  ? ClassAttendanceData?.map((iteam, index) => {
                      return (
                        <tr>
                          <td>
                            <div
                              className="img-wrapper"
                              key={"testing" + index}
                            >
                              <img
                                src={
                                  iteam.attendanceStatus === "Attended"
                                    ? green_check_icon
                                    : circle_without_green_check
                                }
                                alt=""
                              />
                            </div>
                          </td>
                          <td>{iteam.time}</td>
                          <td>
                            <span className="attendance-status-green">
                              {iteam.attendanceStatus}
                            </span>
                            classroom section Period 8, from 18:40 PM to 20:59
                            PM, subject{" "}
                            <span className="subject">{iteam.subject}</span> ,
                            taught by
                            <span className="teacher-name">
                              {iteam.teacher}
                            </span>
                            .
                          </td>
                        </tr>
                      );
                    })
                  : "data not found"}

                {/* <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={green_check_icon} alt="" />
                    </div>
                  </td>
                  <td>08:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Attended</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Chemistry</span> , taught
                    by
                    <span className="teacher-name">Irfan</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={green_check_icon} alt="" />
                    </div>
                  </td>
                  <td>09:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Attended</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Mathematics</span> ,
                    taught by
                    <span className="teacher-name">Shoeb</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={green_check_icon} alt="" />
                    </div>
                  </td>
                  <td>10:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Attended</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Geography</span> , taught
                    by
                    <span className="teacher-name">Aameer</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={green_check_icon} alt="" />
                    </div>
                  </td>
                  <td>11:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Attended</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Modern Science</span> ,
                    taught by
                    <span className="teacher-name">Sagar</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={green_check_icon} alt="" />
                    </div>
                  </td>
                  <td>12:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Attended</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Algebra</span> , taught by
                    <span className="teacher-name">John</span>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="img-wrapper">
                      <img src={circle_without_green_check} alt="" className="blank_tick" />
                    </div>
                  </td>
                  <td>01:30 AM</td>
                  <td>
                    <span className="attendance-status-green">Upcoming</span>
                    classroom section Period 8, from 18:40 PM to 20:59 PM,
                    subject <span className="subject">Geology</span> , taught by
                    <span className="teacher-name">Ashmer</span>.
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AttendanceDetails;
