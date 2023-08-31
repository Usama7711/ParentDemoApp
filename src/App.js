import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./assets/styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Calendar from "./pages/Attendance/Calendar";
import AttendanceDetails from "./pages/Attendance/AttendanceDetails";
import Leaves from "./pages/Attendance/Leaves";
import ApplyLeave from "./pages/Attendance/ApplyLeave";
import EditLeave from "./pages/Attendance/EditLeave";
import Assignment from "./pages/Assignment/Assignment";
import DailyAssignmentwithReview from "./pages/Assignment/DailyAssignmentwithReview";
import DailyAssignmentwithoutReview from "./pages/Assignment/DailyAssignmentwithoutReview";
import IncompleteAssignment from "./pages/Assignment/IncompleteAssignment";
import Assessment from "./pages/Assesment/Assessment";
import DailyAssessmentwithoutReview from "./pages/Assesment/DailyAssessmentwithoutReview";
import Curriculum from "./pages/Curriculum/Curriculum";
import Topic from "./pages/Curriculum/Topic";
import Elearning from "./pages/Elearning/Elearning";
import ElearningSubjectTopic from "./pages/Elearning/ElearningSubjectTopic";
import PersonalDetails from "./pages/Settings/PersonalDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useContext, useState } from "react";
import EditProfile from "./pages/Settings/EditProfile";
import ChangePassword from "./pages/Settings/ChangePassword";
import NotificationSetting from "./pages/Settings/NotificationSetting";
import MyKids from "./pages/Administration/mykids/MyKids";
import Login from "./pages/AuthPages/Login";
import Header from "./sharedComponents/Header";
import Sidebar from "./sharedComponents/Sidebar";
import LoginWithOTP from "./pages/AuthPages/LoginWithOTP";
// import ParentRegistration from "./pages/AuthPages/ParentRegistration";
import SchoolRegistration from "./pages/AuthPages/SchoolRegistration";
import StudentRegistration from "./pages/AuthPages/StudentRegistration";
import TeacherRegistration from "./pages/AuthPages/TeacherRegistration";
import ParentSignUp from "./pages/AuthPages/ParentSignUp";
import NewRegistration from "./pages/Administration/mykids/NewRegistration";
import EditRegistration from "./pages/Administration/mykids/EditRegistration";
import ViewKidsDetails from "./pages/Administration/mykids/ViewKidsDetails";
import EditKidsDetails from "./pages/Administration/mykids/EditKidsDetails";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import Lock from "./pages/AuthPages/Lock";
import IdCards from "./pages/Administration/mykids/IdCards";
import ViewRegistration from "./pages/Administration/mykids/ViewRegistration";
import StudyMaterial from "./pages/StudyMaterial/StudyMaterial";
import StudyMaterialTopicDetails from "./pages/StudyMaterial/StudyMaterialTopicDetails";
import Fees from "./pages/Administration/fees/Fees";
import InvoiceFee from "./pages/Administration/fees/InvoiceFee";
import InvoiceReceipt from "./pages/Administration/fees/InvoiceReceipt";
import BusTracking from "./pages/BusTracking/BusTracking";
import MyCart from "./pages/MyCart/MyCart";
import Courses from "./pages/Courses/Courses";
import AboutCourseDetails from "./pages/Courses/AboutCourseDetails";
import BuyCourseDetails from "./pages/Courses/BuyCourseDetails";

import { AppContext } from "./context/AppContext";
import AuthorisedPerson from "./pages/BusTracking/AuthorisedPerson";
import ViewAuthorisedPerson from "./pages/BusTracking/ViewAuthorisedPerson";
import TransferCertificate from "./pages/Administration/TransferCertificate/TransferCertificate";
import RequestNewTc from "./pages/Administration/TransferCertificate/RequestNewTc";
import Document from "./pages/Administration/Documents/Document";
import Certificate from "./pages/Administration/Documents/Certificate";
import CashlessWallet from "./pages/CashlessWallet/CashlessWallet";
import CreateAuthorisedPerson from "./pages/BusTracking/CreateAuthorisedPerson";
import EditAuthorisedPerson from "./pages/BusTracking/EditAuthorisedPerson";
import RechargeWallet from "./pages/CashlessWallet/RechargeWallet";
import RenewTransportation from "./pages/BusTracking/RenewTransportation";
import Chat from "./pages/Communication/Chat";
import ComposeMessage from "./pages/Communication/ComposeMessage";
import VideoConference from "./pages/Communication/VideoConference";
import NoticeBoard from "./pages/Communication/NoticeBoard";
import NoticeDetail from "./pages/Communication/NoticeDetail";
import MyDiary from "./pages/Communication/MyDiary";
import DemoFrom from "./pages/DemoFrom";
import axios from "axios";
import { Modal } from "react-bootstrap";
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let currentRoute = location.pathname;
  const { sidebar, setSidebar, schoolName, token, setSectionValue, sectionValue, setFormData, formData } = useContext(AppContext);
  const [dedmoModal, setDemoModal] = useState(false);
  // const sidebarActive = () => setSidebar(!sidebar)

  useEffect(() => {
    AOS.init();
  }, []);

  // function NextSlide() {
  //   const requestBody = JSON.stringify({ demoRoute: sectionValue });
  //   fetch('https://api-demo.edsys.in:3008/api/demo/parent/manual-demo/next', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'token': token,
  //       // Add any additional headers if needed
  //     },
  //     body: requestBody,
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Handle the response data here

  //       navigate(data.url)
  //     })
  //     .catch(error => {
  //       // Handle any errors that occurred during the fetch or response parsing
  //       console.error(error);
  //       navigate("/")
  //     });
  // }
  // const NextSlide = () => {
  //   const accessToken = token; // Replace with your actual token

  //   const config = {
  //     headers: {
  //       "token": accessToken,
  //     },
  //   };

  //   axios
  //     .post("https://api-demo.edsys.in:3008/api/demo/parent/manual-demo/next", null, config)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  const NextDemoBTNSubmit = (e) => {
    // setIsLoading(true);
    let url = 'https://api-demo.edsys.in:3008/api/demo/form/submit-details';
    const data = {
      "name": (formData.name),
      "email": (formData.email),
      "number": (formData.number),
      "country": (formData.country),
      "city": (formData.city),
      //   "utm_source"/: getUTMsource
    };
    axios.post(url, data).then((response) => {
      if (sectionValue === "attendance") {
        navigate("/Calendar")
      } else if (sectionValue === "academics") {
        navigate("/Curriculum")
      } else if (sectionValue === "assessment") {
        navigate("/Assessment")
      } else if (sectionValue === "administration") {
        navigate("/MyKids")
      } else if (sectionValue === "bus") {
        navigate("/BusTracking")
      } else if (sectionValue === "cashlessWallet") {
        navigate("/CashlessWallet")
      } else if (sectionValue === "eLearning") {
        navigate("/Elearning")
      } else if (sectionValue === "communication") {
        navigate("/Chat")
      } else if (sectionValue === "myDiary") {
        navigate("/MyDiary")
      } else if (sectionValue === "settings") {
        navigate("/PersonalDetails")
      } else {
        navigate("/dashboard")
      }
      setDemoModal(false)
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div>
      {/* {currentRoute === "/" ? "" :
        <div class="main-btn-wrapper DemoNextPreviousBTN">
          <button class="cx-btn-2">Previous</button>
          </div>
        } */}
      {currentRoute === "/" ? "" :
        <div className="main-btn-wrapper DemoNextPreviousBTN">
          <button class="cx-btn-1" onClick={() => { setDemoModal(true) }}>Other Demo</button>
        </div>
      }
      <div className="">
        <Routes>
          <Route path="/" element={<DemoFrom />} />
          <Route path="SchoolRegistration" element={<SchoolRegistration type={"School"} />} />
          <Route path="TeacherRegistration" element={<TeacherRegistration type={"Teacher"} />} />
          <Route path="ParentRegistration" element={<TeacherRegistration type={"Parent"} />} />
          <Route path="StudentRegistration" element={<StudentRegistration type={"Student"} />} />
        </Routes>
      </div>

      <div className="App " id="cx-main">
        {currentRoute !== "/" &&
          currentRoute !== "/DemoFrom" &&
          currentRoute !== "/LoginWithOTP" &&
          currentRoute !== "/ParentSignUp" &&
          currentRoute !== "/ForgotPassword" &&
          currentRoute !== "/ParentRegistration" &&
          currentRoute !== "/TeacherRegistration" &&
          currentRoute !== "/SchoolRegistration" &&
          currentRoute !== "/StudentRegistration" &&
          currentRoute !== "/Lock" && (
            <>
              <Header />
              <Sidebar />
            </>
          )}
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Calendar" element={<Calendar />} />
          <Route path="AttendanceDetails" element={<AttendanceDetails />} />
          <Route path="Leaves" element={<Leaves />} />
          <Route path="ApplyLeave" element={<ApplyLeave />} />
          <Route path="EditLeave" element={<EditLeave />} />
          {/* Bus Tracking */}
          <Route path="BusTracking" element={<BusTracking />} />
          <Route path="AuthorisedPerson" element={<AuthorisedPerson />} />
          <Route path="ViewAuthorisedPerson" element={<ViewAuthorisedPerson />} />
          <Route path="CreateAuthorisedPerson" element={<CreateAuthorisedPerson />} />
          <Route path="EditAuthorisedPerson" element={<EditAuthorisedPerson />} />
          <Route path="RenewTransportation" element={<RenewTransportation />} />
          {/* Chat */}
          <Route path="Chat" element={<Chat />} />
          <Route path="ComposeMessage" element={<ComposeMessage />} />
          <Route path="VideoConference" element={<VideoConference />} />
          <Route path="NoticeBoard" element={<NoticeBoard />} />
          <Route path="NoticeDetail" element={<NoticeDetail />} />
          <Route path="MyDiary" element={<MyDiary />} />
          {/* Settings page routes */}
          <Route path="PersonalDetails" element={<PersonalDetails />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="NotificationSetting" element={<NotificationSetting />} />
          {/* Administration page routes */}
          <Route path="MyKids" element={<MyKids />} />
          <Route path="NewRegistration" element={<NewRegistration />} />
          <Route path="EditRegistration" element={<EditRegistration />} />
          <Route path="ViewKidsDetails" element={<ViewKidsDetails />} />
          <Route path="EditKidsDetails" element={<EditKidsDetails />} />
          <Route path="Curriculum" element={<Curriculum />} />
          <Route path="Topic" element={<Topic />} />
          <Route path="Elearning" element={<Elearning />} />
          <Route path="ElearningSubjectTopic" element={<ElearningSubjectTopic />} />
          <Route path="IdCards" element={<IdCards />} />
          <Route path="ViewRegistration" element={<ViewRegistration />} />
          <Route path="Fees" element={<Fees />} />
          <Route path="InvoiceFee" element={<InvoiceFee />} />
          <Route path="InvoiceReceipt" element={<InvoiceReceipt />} />
          <Route path="TransferCertificate" element={<TransferCertificate />} />
          <Route path="RequestNewTc" element={<RequestNewTc />} />
          {/* Assignment */}
          <Route path="Assignment" element={<Assignment />} />
          <Route path="DailyAssignmentwithReview" element={<DailyAssignmentwithReview />} />
          <Route path="DailyAssignmentwithoutReview" element={<DailyAssignmentwithoutReview />} />
          <Route path="IncompleteAssignment" element={<IncompleteAssignment />} />
          <Route path="StudyMaterial" element={<StudyMaterial />} />
          <Route path="StudyMaterialTopicDetails" element={<StudyMaterialTopicDetails />} />
          <Route path="MyCart" element={<MyCart />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="AboutCourseDetails" element={<AboutCourseDetails />} />
          <Route path="BuyCourseDetails" element={<BuyCourseDetails />} />
          {/* Assesment */}
          <Route path="Assessment" element={<Assessment />} />
          <Route path="DailyAssessmentwithoutReview" element={<DailyAssessmentwithoutReview />} />
          <Route path="Document" element={<Document />} />
          <Route path="Certificate" element={<Certificate />} />
          {/* Cahsless Wallet */}
          <Route path="CashlessWallet" element={<CashlessWallet />} />
          <Route path="RechargeWallet" element={<RechargeWallet />} />
        </Routes>
      </div>
      <Modal
        show={dedmoModal}
        // onHide={setDemoBTn(false)}
        centered
        className="common-model"
      >
        <Modal.Header>
          <Modal.Title>Free Demos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="headingModalNext">Hi <span>{formData && formData.name}</span></p>
          <p>Would You like to See more Demo...?</p>
          <div className=" innerSelectBox weekcounder ">
            <div className="customRow">
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="label1" className="singleConatinBox" onClick={() => { setSectionValue("dashboard") }}>
                    <span>Dashboard</span>
                    <input type="radio" name="labelz" id="label1" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label2" className="singleConatinBox" onClick={() => { setSectionValue("attendance") }}>
                    <span>Attendance</span>
                    <input type="radio" name="labelz" id="label2" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label3" className="singleConatinBox" onClick={() => { setSectionValue("academics") }}>
                    <span htmlFor="">Academics</span>
                    <input type="radio" name="labelz" id="label3" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label4" className="singleConatinBox" onClick={() => { setSectionValue("eLearning") }}>
                    <span htmlFor="">e-Learning</span>
                    <input type="radio" name="labelz" id="label4" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label5" className="singleConatinBox" onClick={() => { setSectionValue("assessment") }}>
                    <span>Assessment</span>
                    <input type="radio" name="labelz" id="label5" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label6" className="singleConatinBox" onClick={() => { setSectionValue("administration") }}>
                    <span htmlFor="">Administration</span>
                    <input type="radio" name="labelz" id="label6" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label7" className="singleConatinBox" onClick={() => { setSectionValue("cashlessWallet") }}>
                    <span htmlFor="">Cashless Wallet</span>
                    <input type="radio" name="labelz" id="label7" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label8" className="singleConatinBox" onClick={() => { setSectionValue("bus") }}>
                    <span htmlFor="">Bus</span>
                    <input type="radio" name="labelz" id="label8" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label9" className="singleConatinBox" onClick={() => { setSectionValue("communication") }}>
                    <span htmlFor="">Communication</span>
                    <input type="radio" name="labelz" id="label9" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label10" className="singleConatinBox" onClick={() => { setSectionValue("myDiary") }}>
                    <span htmlFor="">My Diary</span>
                    <input type="radio" name="labelz" id="label10" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="label11" className="singleConatinBox" onClick={() => { setSectionValue("settings") }}>
                    <span htmlFor="">Settings</span>
                    <input type="radio" name="labelz" id="label11" className="cheackcat" />
                    <div className="cheackcatdiv"></div>
                  </label>
                </div>
              </div>
            </div >
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <div class="main-btn-wrapper">
            <button className="cx-btn-1" onClick={() => {
              setDemoModal(false);
            }}>
              Cancel
            </button>
            <button className="cx-btn-2" onClick={() => {
              NextDemoBTNSubmit();
            }}
            >
              Show Demo
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
