import React, { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ic_attendance from "../assets/images/ic_attendance.svg";
import ic_setting from "../assets/images/ic_setting.svg";
import ic_communication from "../assets/images/ic_communication.svg";
import ic_bus_tracking from "../assets/images/ic_bus_tracking.svg";
import ic_cashless from "../assets/images/ic_cashless.svg";
import ic_administrator from "../assets/images/ic_administrator.svg";
import ic_academics from "../assets/images/ic_academics.svg";
import ic_dashboard from "../assets/images/ic_dashboard.svg";
import ic_logout from "../assets/images/ic_logout.svg";
import ic_arrow_sidebar from "../assets/images/ic_arrow_sidebar.svg";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import logo from "../assets/images/logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation().pathname;
  const [activeSidebar, setActiveSidebar] = useState("");
  const [attendance, setAttendance] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const { sidebar, setSidebar } = useContext(AppContext);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  // useEffect(() => {
  //   MobileSidebar();
  // }, [isMobile]);

  const MobileSidebar = () => (isMobile ? setSidebar(false) : setSidebar(true));
  return (
    <main className="cx-sidebar">
      <div
        className={
          sidebar
            ? "cx-sidebar-wrapper cx-active-sidebar"
            : "cx-sidebar-wrapper"
        }
      >
        <div className="brand-logo">
          <Link to="/Dashboard">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="sidebar-button">
          <button onClick={() => setSidebar(!sidebar)}>
            <img
              src={ic_arrow_sidebar}
              alt=""
              className={sidebar ? "" : "img-arrow-active"}
            />
          </button>
        </div>
        <div className="menus-wrapper">
          <Accordion>
            {/* ================== > DASHBOARD START <================== */}

            <Link
              to="/Dashboard"
              className="d-block menu-link"
              onClick={() => (isMobile ? setSidebar(true) : setSidebar(false))}
            >
              <div
                // onClick={()=>{setDashboard(true);
                //   setAttendance(false)}}
                className={
                  currentRoute === "/Dashboard"
                    ? // dashboard
                      "menu-outer-warpper activeMenu"
                    : "menu-outer-warpper"
                }
              >
                <div className="icon">
                  <img src={ic_dashboard} alt="" />
                </div>
                <div className="menu-name">Dashboard</div>
              </div>
            </Link>
            {/* ================== > DASHBOARD START <================== */}

            {/* ================== > ATTENDENCE START <================== */}

            <Accordion.Item
              onClick={() => {
                setAttendance(!attendance);
                setDashboard(false);
              }}
              eventKey="0"
              className={
                currentRoute === "/Calendar" ||
                currentRoute === "/Leaves" ||
                currentRoute === "/ApplyLeave" ||
                currentRoute === "/EditLeave" ||
                currentRoute === "/AttendanceDetails"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_attendance} alt="" />
                  </div>
                  <div className="menu-name">Attendence </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        currentRoute === "/Calendar" && "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Calendar"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Calendar
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/AttendanceDetails" &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/AttendanceDetails"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Attendance Details
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/Leaves" ||
                        currentRoute === "/ApplyLeave" ||
                        currentRoute === "/EditLeave"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Leaves"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Leaves
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > ATTENDENCE END <================== */}

            {/* ================== > Academics START <================== */}
            <Accordion.Item
              eventKey="1"
              className={
                currentRoute === "/Curriculum" ||
                currentRoute === "/Topic" ||
                currentRoute === "/Assignment" ||
                currentRoute === "/DailyAssignmentwithoutReview" ||
                currentRoute === "/DailyAssignmentwithReview" ||
                currentRoute === "/IncompleteAssignment" ||
                currentRoute === "/Assessment" ||
                currentRoute === "/DailyAssessmentwithoutReview" ||
                currentRoute === "/Assessment" ||
                currentRoute === "/DailyAssessmentwithoutReview" ||
                currentRoute === "/Elearning" ||
                currentRoute === "/ElearningSubjectTopic" ||
                currentRoute === "/StudyMaterial" ||
                currentRoute === "/StudyMaterialTopicDetails" ||
                currentRoute === "/Courses" ||
                currentRoute === "/AboutCourseDetails" ||
                currentRoute === "/BuyCourseDetails"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_academics} alt="" />
                  </div>
                  <div className="menu-name">Academics </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        currentRoute === "/Curriculum" ||
                        currentRoute === "/Topic"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Curriculum"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Curriculum
                      </Link>
                    </li>

                    <li
                      className={
                        currentRoute === "/Assignment" ||
                        currentRoute === "/DailyAssignmentwithoutReview" ||
                        currentRoute === "/DailyAssignmentwithReview" ||
                        currentRoute === "/IncompleteAssignment"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Assignment"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Assignment
                      </Link>
                    </li>

                    <li
                      className={
                        currentRoute === "/Assessment" ||
                        currentRoute === "/DailyAssessmentwithoutReview"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Assessment"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Assessment
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/Elearning" ||
                        currentRoute === "/ElearningSubjectTopic"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Elearning"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        E-Learning
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/StudyMaterial" ||
                        currentRoute === "/StudyMaterialTopicDetails"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/StudyMaterial"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Study Material
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/Courses" ||
                        currentRoute === "/AboutCourseDetails" ||
                        currentRoute === "/BuyCourseDetails"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Courses"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Courses
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > Academics END <================== */}

            {/* ================== > Administration START <================== */}
            <Accordion.Item
              eventKey="2"
              className={
                currentRoute === "/MyKids" ||
                currentRoute === "/IdCards" ||
                currentRoute === "/EditKidsDetails" ||
                currentRoute === "/EditRegistration" ||
                currentRoute === "/NewRegistration" ||
                currentRoute === "/ViewKidsDetails" ||
                currentRoute === "/ViewRegistration" ||
                currentRoute === "/Fees" ||
                currentRoute === "/document" ||
                currentRoute === "/Certificate" ||
                currentRoute === "/InvoiceFee" ||
                currentRoute === "/TransferCertificate" ||
                currentRoute === "/RequestNewTc"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_administrator} alt="" />
                  </div>
                  <div className="menu-name">Administration</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        currentRoute === "/MyKids" ||
                        currentRoute === "/NewRegistration" ||
                        currentRoute === "/ViewKidsDetails" ||
                        currentRoute === "/IdCards" ||
                        currentRoute === "/ViewRegistration" ||
                        currentRoute === "/EditRegistration" ||
                        currentRoute === "/EditKidsDetails"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/MyKids"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        My Kids
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/Fees" ||
                        currentRoute === "/InvoiceFee"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Fees"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Fees
                      </Link>
                    </li>

                    <li
                      className={
                        (currentRoute === "/TransferCertificate" || currentRoute=="/RequestNewTc") &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/TransferCertificate"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Transfer Certificate
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/document" ||
                        currentRoute === "/Certificate"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/document"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Documents
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > Administration END <================== */}

            {/* ================== > Cashless Wallet START <================== */}
            <Link to="/CashlessWallet" className="d-block menu-link">
              <div
                // onClick={()=>{setDashboard(true);
                //   setAttendance(false)}}
                className={
                  currentRoute === "/CashlessWallet" ||
                  currentRoute === "/RechargeWallet"
                    ? // dashboard
                      "menu-outer-warpper activeMenu"
                    : "menu-outer-warpper"
                }
              >
                <div className="icon">
                  <img src={ic_cashless} alt="" />
                </div>
                <div className="menu-name">Cashless Wallet</div>
              </div>
            </Link>
            {/* ================== > Cashless Wallet END <================== */}

            {/* ================== > Bus Tracking START <================== */}
            <Accordion.Item
              eventKey="3"
              className={
                currentRoute === "/BusTracking" ||
                currentRoute === "/AuthorisedPerson" ||
                currentRoute === "/ViewAuthorisedPerson" ||
                currentRoute === "/CreateAuthorisedPerson" ||
                currentRoute === "/EditAuthorisedPerson" ||
                currentRoute === "/RenewTransportation"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_bus_tracking} alt="" />
                  </div>
                  <div className="menu-name">Bus Tracking</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        currentRoute === "/BusTracking" && "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/BusTracking"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Track Bus
                      </Link>
                    </li>
                    <li className={currentRoute === "#" && "activeMenuList"}>
                      <span className="menu-circle"></span>
                      <Link
                        to="#"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Route
                      </Link>
                    </li>

                    <li
                      className={
                        (currentRoute === "/AuthorisedPerson" ||
                          currentRoute === "/CreateAuthorisedPerson" ||
                          currentRoute === "/ViewAuthorisedPerson") &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/AuthorisedPerson"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Authorized Person
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/RenewTransportation" &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/RenewTransportation"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Renew Transportation
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > Bus Tracking END <================== */}

            {/* ================== > Communication START <================== */}
            <Accordion.Item
              eventKey="4"
              className={
                currentRoute === "/Chat" ||
                currentRoute === "/ComposeMessage" ||
                currentRoute === "/NoticeBoard" ||
                currentRoute === "/NoticeDetail" ||
                currentRoute === "/VideoConference" ||
                currentRoute === "/MyDiary"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_communication} alt="" />
                  </div>
                  <div className="menu-name">Communication</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        (currentRoute === "/Chat" ||
                          currentRoute === "/ComposeMessage") &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/Chat"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Chat
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/VideoConference" && "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/VideoConference"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Video Conference
                      </Link>
                    </li>
                    <li
                      className={
                        (currentRoute === "/NoticeBoard" ||
                          currentRoute === "/NoticeDetail") &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/NoticeBoard"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Notice Board
                      </Link>
                    </li>
                    <li
                      className={
                        (currentRoute === "/MyDiary") &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/MyDiary"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                       My Diary
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > Communication END <================== */}

            {/* ================== > Settings START <================== */}
            <Accordion.Item
              eventKey="5"
              className={
                currentRoute === "/PersonalDetails" ||
                currentRoute === "/ChangePassword" ||
                currentRoute === "/EditProfile" ||
                currentRoute === "/NotificationSetting"
                  ? "activeMenu"
                  : ""
              }
            >
              <Accordion.Header>
                <div className="menu-outer-warpper">
                  <div className="icon">
                    <img src={ic_setting} alt="" />
                  </div>
                  <div className="menu-name">Settings</div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="sub-menus">
                  <ul>
                    <li
                      className={
                        currentRoute === "/PersonalDetails" ||
                        currentRoute === "/EditProfile"
                          ? "activeMenuList"
                          : ""
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/PersonalDetails"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Personal Details
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/ChangePassword" && "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/ChangePassword"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Change Password
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "#" && "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="#"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Language
                      </Link>
                    </li>
                    <li
                      className={
                        currentRoute === "/NotificationSetting" &&
                        "activeMenuList"
                      }
                    >
                      <span className="menu-circle"></span>
                      <Link
                        to="/NotificationSetting"
                        onClick={() =>
                          isMobile ? setSidebar(true) : setSidebar(false)
                        }
                      >
                        Notification Settings
                      </Link>
                    </li>
                  </ul>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            {/* ================== > Settings END <================== */}
          </Accordion>

          <div className="logout">
            <Link to="/" className="d-block menu-link">
              <div className={"menu-outer-warpper"}>
                <div className="icon">
                  <img src={ic_logout} alt="" />
                </div>
                <div className="menu-name">Logout</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
