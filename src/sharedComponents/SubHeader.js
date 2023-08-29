import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import cart_icon from "../../src/assets/images/cart_icon.svg";

const SubHeader = () => {
  const currentPath = useLocation().pathname;
  const [openMode, setOpenMode] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="breadcrumb-wrapper cx-mb-20">
      {(currentPath === "/PersonalDetails" && (
        <div className="breadcrumb">
          <p>Settings</p>
        </div>
      )) ||
        (currentPath === "/EditProfile" && (
          <div div className="breadcrumb">
            <Link to="/PersonalDetails" className="belowLink">
              Settings
            </Link>
            <p>/ Edit Personal Details</p>
          </div>
        )) ||
        (currentPath === "/ChangePassword" && (
          <div div className="breadcrumb">
            <p>Change Password</p>
          </div>
        )) ||
        (currentPath === "/VideoConference" && (
          <div div className="breadcrumb">
            <p>Video Conference</p>
          </div>
        )) ||
        (currentPath === "/NoticeBoard" && (
          <div div className="breadcrumb">
            <p>Notice Board</p>
          </div>
        )) ||
        (currentPath === "/NotificationSetting" && (
          <div div className="breadcrumb">
            <p>Notification</p>
          </div>
        )) ||
        // Administration routes
        (currentPath === "/MyKids" && (
          <>
            <div div className="breadcrumb">
              <p>My Kids</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/NewRegistration" className="green-btn-1">
                Register New Kid
              </Link>
            </div>
          </>
        )) ||
        (currentPath === "/Assignment" ||
          currentPath === "/DailyAssignmentwithReview" ||
          currentPath === "/DailyAssignmentwithoutReview" ||
          currentPath === "/IncompleteAssignment" ? (
          <>
            <div className="breadcrumb">
              <p>Assignment</p>
            </div>
            {/* <div className="btn-wrapper">
              <p>Daily Assignment </p>
            </div> */}
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Assessment" ||
          currentPath === "/DailyAssessmentwithoutReview" ? (
          <>
            <div className="breadcrumb">
              <p>Assessment</p>
            </div>
            {/* <div className="btn-wrapper">
              <p>Daily Assignment </p>
            </div> */}
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Curriculum" ? (
          <>
            <div className="breadcrumb">
              <p>Curriculum</p>
            </div>
            <div className="btn-wrapper">
              <div className="data-class">
                Start Date : &nbsp;
                <span className="date-wrapper"> 10/03/2022</span>
                <div className="date-space"></div>
                End Date : &nbsp;
                <span className="date-wrapper"> 20/01/2023</span>
              </div>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Topic" ? (
          <>
            <div className="breadcrumb">
              <Link className="belowLink" to="/Curriculum">
                Curriculum
                <span className="belowLink">/ English </span>
              </Link>
              <p>
                 / Topic
                02
              </p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Calendar" ? (
          <>
            <div className="breadcrumb">
              <p>Calendar</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/AttendanceDetails" className="green-btn-1">
                View Day Wise Attendance
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/AttendanceDetails" ? (
          <>
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
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Leaves" ? (
          <>
            <div className="breadcrumb">
              <p>Leaves</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/ApplyLeave" className="green-btn-1">
                Apply Leave
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/BusTracking" ? (
          <>
            <div className="breadcrumb">
              <p>Track Bus</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/RenewTransportation" ? (
          <>
            <div className="breadcrumb">
              <p>Renew Transportation</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/AuthorisedPerson" ? (
          <>
            <div className="breadcrumb">
              <p>Authorised Person</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/CreateAuthorisedPerson" className="green-btn-1">
                Create Authorised Person
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/chat" ? (
          <>
            <div className="breadcrumb">
              <p>chat</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/ComposeMessage" className="green-btn-1">
                Compose Message
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/ViewAuthorisedPerson" ? (
          <>
            <div className="breadcrumb">
              <Link to="/AuthorisedPerson">
                <p>Authorised Person</p>
              </Link>
            </div>
            <div className="btn-wrapper">
              <Link to="#" className="green-btn-1">
                Create Authorised Person
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/CreateAuthorisedPerson" ? (
          <>
            <div className="breadcrumb">
              <Link to="/AuthorisedPerson">
                <p>Authorised Person</p>
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/MyDiary" ? (
          <>
            <div className="breadcrumb">
                <p>My Diary</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/EditAuthorisedPerson" ? (
          <>
            <div className="breadcrumb">
              <Link to="/AuthorisedPerson">
                <p>Authorised Person</p>
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/ApplyLeave" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Leaves" className="belowLink">
                Leaves
              </Link>
              <p>/ Apply Leave</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/EditLeave" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Leaves" className="belowLink">
                Leaves
              </Link>
              <p> / Edit Leave</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/EditKidsDetails" ? (
          <>
            <div className="breadcrumb">
              <p>My Kids</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/EditRegistration" ? (
          <>
            <div className="breadcrumb">
              <p>Registration</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/NewRegistration" ? (
          <>
            <div className="breadcrumb">
              <p>Registration</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/NoticeDetail" ? (
          <>
            <div className="breadcrumb">
              <p>Notice Detail</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/ViewKidsDetails" ? (
          <>
            <div className="breadcrumb">
              <p>My Kids</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Chat" ? (
          <>
            <div className="breadcrumb">
              <p>Chat</p>
            </div>
            <div className="btn-wrapper">
              <Link to="/ComposeMessage" className="green-btn-1">
                Compose Message
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/ViewRegistration" ? (
          <>
            <div className="breadcrumb">
              <Link to="/MyKids" className="belowLink">
                <span>Registration </span>
              </Link>
              <p>
                / Student
                Details
              </p>
            </div>
            <div className="btn-wrapper">
              <Link to="/NewRegistration" className="green-btn-1">
                Register New Kid
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/ComposeMessage" ? (
          <>
            <div className="breadcrumb">
              <p>
                <span className="belowLink">Chat </span> / Compose Message
              </p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/IdCards" && (
          <>
            <div div className="breadcrumb">
              <Link to="/MyKids" className="belowLink">
                My Kids
              </Link>
              <p>/ Id Card</p>{" "}
            </div>

            <div className="attendance-status">
              <Link
                to="#"
                onClick={() => setOpenMode(!openMode)}
                className="breadCrumbLink"
              >
                <button className="cx-btn-1">Apply New Card</button>
              </Link>
            </div>

            <Modal
              size="md"
              centered
              show={openMode}
              onHide={() => setOpenMode(false)}
              animation={true}
            >
              <Modal.Header closeButton>
                <Modal.Title>New Card ?</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="borderModal"></div>
                <p>
                  Are you sure you want to apply for the new card, this may cost
                  you?
                </p>
                <div className="borderModalBelow"></div>
              </Modal.Body>

              <Modal.Footer>
                <div className="modalBtns">
                  <button className="cancelBtn"  onClick={() => setOpenMode(false)}>Cancel</button>
                  <button className="YesBtn">Yes</button>
                </div>
              </Modal.Footer>
            </Modal>
          </>
        )) ||
        (currentPath === "/Elearning" && (
          <>
            <div className="breadcrumb">
              <p>E-Learning</p>
            </div>
          </>
        )) ||
        (currentPath === "/ElearningSubjectTopic" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Elearning" className="belowLink">
                <span className="belowLink">E-Learning </span>
              </Link>
              <p>
                / English
              </p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/StudyMaterial" ? (
          <>
            <div className="breadcrumb">
              <p>Study Material</p>
            </div>
            <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/StudyMaterialTopicDetails" ? (
          <>
            <div className="breadcrumb">
              <Link to="/StudyMaterial">
                <span className="belowLink">Study Material </span>
              </Link>
              <p>
                / Topic
                Details
              </p>
            </div>
           <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/mycart" ? (
          <>
            <div className="breadcrumb">
              <Link to="/StudyMaterial" className="belowLink">
                <span >Study Material </span>
              </Link>
              <p> / My Cart</p>
            </div>
           <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Courses" ? (
          <>
            <div className="breadcrumb">
              <p>Courses</p>
            </div>
           <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/AboutCourseDetails" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Courses" className="belowLink">
                <span >Courses</span>
              </Link>
              <p>
                / Rutherford’s Atomic Model
              </p>
            </div>
           <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/BuyCourseDetails" ? (
          <>
            <div className="breadcrumb">
              <p>
                <span className="belowLink">Courses </span>/ Rutherford’s Atomic
                Model
              </p>
            </div>
           <div className="cart-btn" onClick={() => navigate("/mycart")}>
              <img src={cart_icon} alt="" />
              <span className="noti-count">7</span>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Fees" ? (
          <>
            <div className="breadcrumb">
              <p>Fees</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/TransferCertificate" ? (
          <>
            <div className="breadcrumb">
              <p>Transfer Certificate</p>
            </div>
            <div className="attendance-status">
              <Link to="/RequestNewTc">
                <button className="cx-btn-1">Apply</button>
              </Link>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/RequestNewTc" ? (
          <>
            <div className="breadcrumb">
              <p>Transfer Certificate</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/document" ? (
          <>
            <div className="breadcrumb">
              <p>Documents</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/Certificate" ? (
          <>
            <div className="breadcrumb">
              <p>Documents</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/CashlessWallet" ? (
          <>
            <div className="breadcrumb">
              <p>Cashless Wallet</p>
            </div>
          </>
        ) : (
          ""
        )) ||
        (currentPath === "/RechargeWallet" ? (
          <>
            <div className="breadcrumb">
              <Link to="/CashlessWallet" className="belowLink"><span>Cashless Wallet </span></Link>
              <p>
                / Recharge
                Wallet
              </p>
            </div>
          </>
        ) : (
          ""
        ))
        ||
        (currentPath === "/InvoiceFee" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Fees" className="belowLink"><span>Fee Invoice </span></Link>
              <p>
                / Invoice
              </p>
            </div>
          </>
        ) : (
          ""
        ))
        ||
        (currentPath === "/InvoiceReceipt" ? (
          <>
            <div className="breadcrumb">
              <Link to="/Fees" className="belowLink"><span>Fee Receipt </span></Link>
              <p>
              / Receipt
              </p>
            </div>
          </>
        ) : (
          ""
        ))}
      <></>
    </div>
  );
};
export default SubHeader;

{
  /*  */
}
