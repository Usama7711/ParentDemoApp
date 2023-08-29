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
import { useEffect, useContext } from "react";
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
function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let currentRoute = location.pathname;
  const { sidebar, setSidebar, schoolName } = useContext(AppContext);
  // const sidebarActive = () => setSidebar(!sidebar)

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/DemoFrom" element={<DemoFrom />} />
          <Route path="LoginWithOTP" element={<LoginWithOTP />} />
          <Route path="ParentSignUp" element={<ParentSignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="Lock" element={<Lock />} />
          {/* <Route path="ParentRegistration" element={<ParentRegistration />} /> */}
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
    </div>
  );
}

export default App;
