import React, { useState, useContext, useEffect } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import DashBoard_top from "../../assets/images/DashBoard_top.svg";
import Kids_profile from "../../assets/images/Kids_profile.svg";
import Kids_Prifile_2 from "../../assets/images/Kids_Prifile_2.jpg";
import GOToProfile from "../../assets/images/GOToProfile.svg";
import Lac_English from "../../assets/images/Lac_English.svg";
import Lac_Math from "../../assets/images/Lac_Math.svg";
import Lac_Science from "../../assets/images/Lac_Science.svg";
import Lac_Social from "../../assets/images/Lac_Social.svg";
import Meet_Pricipale from "../../assets/images/Meet_Pricipale.svg";
import Meet_Group from "../../assets/images/Meet_Group.svg";
import Meet_techer from "../../assets/images/Meet_techer.svg";
import Assingment_Table_Next from "../../assets/images/Assingment_Table_Next.svg";
import view_icon from "../../assets/images/view_icon.svg";
import delete_icon from "../../assets/images/delete_icon.svg";
import { Carousel, Dropdown, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import { TabPanel, TabView } from "primereact/tabview";
import { AppContext } from "../../context/AppContext";
import MapComponent from "../../sharedComponents/MapComponent";
import { Dialog } from 'primereact/dialog';
import { Tooltip } from 'primereact/tooltip';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState(new Date());
  const { sidebar, setSidebar } = useContext(AppContext);
  const [renderModal, setRenderModal] = useState(false);

  useEffect(() => {
    setRenderModal(!renderModal);
  }, [])

  return (
    <main id="cx-main" className="Dashboard">
      <div
        className={sidebar ? "cx-main-card" : "cx-main-card"}
        data-aos="zoom-in"
        data-aos-duration="500"
        id="dashboard_main"
      >
        <div className="top_section_1 row g-3">
          <div className="col-xl-8 paddingRight10">
            <div className="top_left ">
              <div className="top_left_up">
                <div className="text">
                  <div className="heading">
                    <span>Welcome Back, </span>{" "}
                    <span className="par-name">Mr. John Doe</span>
                  </div>
                  <div className="sub-heading">
                    Your kids completed <span>80%</span> of their tasks.
                  </div>
                </div>
                <div className="img">
                  <img src={DashBoard_top} alt="" />
                </div>
              </div>

              <div className="top_left_bottom">
                <div className="My_kids">
                  <p>My Kids</p>
                </div>
                <Carousel className="Carousel" interval={null}>
                  <Carousel.Item>
                    <div className="single_kide row g-3">
                      <div className="col-lg-3 border-dash ps-0">
                        <div className="photo ">
                          <img src={Kids_profile} alt="" className="kids_img" />
                          <p className="kids_name">Johnathan Doe</p>
                          <div className="Gender">
                            <p className="mail">M</p>
                            <p className="age">
                              16<span>yrs</span>
                            </p>
                          </div>
                          <Link to="#">
                            <div>
                              <p>Go to Profile</p>
                              <img src={GOToProfile} alt="" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-9 ps-xl-3 p-xl-0">
                        <div className="Discription row g-0">
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Grade Name </label>
                            <p>Plus Two</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Student User ID </label>
                            <p>1234</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Assignment Progress</label>
                            <ProgressBar now={35} />
                            <p className="progres_percentage">35%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Division Name </label>
                            <p>A</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Mifare Card ID </label>
                            <p>456789</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Assignment Progress</label>
                            <ProgressBar now={40} />
                            <p className="progres_percentage">40%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Syllabus </label>
                            <p>CBSE English Medium</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Admission Number </label>
                            <p>123456789</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Course Progress</label>
                            <ProgressBar now={60} />
                            <p className="progres_percentage">60%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">School Hours </label>
                            <p>09:00 - 12:30 pm</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Joining Date </label>
                            <p>02-02-2023</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Exam Result</label>
                            <p className="result">85.50%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="single_kide row g-3">
                      <div className="col-lg-3 border-dash">
                        <div className="photo ">
                          <img src={Kids_Prifile_2} alt="" className="kids_img" />
                          <p className="kids_name">Emma Watson</p>
                          <div className="Gender">
                            <p className="mail">F</p>
                            <p className="age">
                              22<span>yrs</span>
                            </p>
                          </div>
                          <Link to="#">
                            <div>
                              <p>Go to Profile</p>
                              <img src={GOToProfile} alt="" />
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-9 ps-xl-3 p-xl-0">
                        <div className="Discription row g-0">
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Grade Name </label>
                            <p>One Two</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Student User ID </label>
                            <p>875469</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Assignment Progress</label>
                            <ProgressBar now={85} />
                            <p className="progres_percentage">85%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Division Name </label>
                            <p>A+</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Mifare Card ID </label>
                            <p>123321</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Assignment Progress</label>
                            <ProgressBar now={90} />
                            <p className="progres_percentage">90%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Syllabus </label>
                            <p>CBSE English Medium</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Admission Number </label>
                            <p>6395742</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Course Progress</label>
                            <ProgressBar now={70} />
                            <p className="progres_percentage">70%</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">School Hours </label>
                            <p>09:00 - 12:30 pm</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Joining Date </label>
                            <p>02-02-2023</p>
                          </div>
                          <div className="common_label-card col-lg-4">
                            <label htmlFor="">Exam Result</label>
                            <p className="result">95.50%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
          <div className="col-xl-4 paddingLeft10">
            <div className="top_right ">
              <Calendar value={value} onChange={onChange} />
              <div className="common_tabs">
                <TabView>
                  <TabPanel header="Upcoming Lectures">
                    <div className="overFlow_X">
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_English} alt="" />
                          <div className="subject">
                            <p>English</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right bk_com">
                          <p className="Completed">Completed</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Math} alt="" />
                          <div className="subject">
                            <p>Mathematics</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right bk_yelow">
                          <p className="InProgress">In Progress</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Social} alt="" />
                          <div className="subject">
                            <p>Social Studies</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right bk_red">
                          <p className="YettoStart">Yet to Start</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Science} alt="" />
                          <div className="subject">
                            <p>Science</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right bk_red">
                          <p className="YettoStart">Yet to Start</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel header="Meetings">
                    <div className="overFlow_X">
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Meet_techer} alt="" />
                          <div className="subject">
                            <p>Teacher’s Meeting</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right ">
                          <p className="">Join Now</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Math} alt="" />
                          <div className="subject">
                            <p>Mathematics</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right ">
                          <p className="">Join Now</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Social} alt="" />
                          <div className="subject">
                            <p>Social Studies</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right ">
                          <p className="">Join Now</p>
                        </div>
                      </div>
                      <div className="singleUpComingMeeting">
                        <div className="left">
                          <img src={Lac_Science} alt="" />
                          <div className="subject">
                            <p>Science</p>
                            <p className="timeing">02:00 - 03:00 PM</p>
                          </div>
                        </div>
                        <div className="right">
                          <p className="">Join Now</p>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabView>
              </div>
            </div>
          </div>
        </div>

        <div className="top_section_2 row g-3">
          <div className="col-xl-8 mt-0 paddingRight10">
            <div className="Assignments ">
              <div className="head">
                <p className="AssignmentsHeading">Assignments</p>
                <Tooltip target=".ViewAll" id="ToolTipsName" />
                <p className="ViewAll"
                  data-pr-tooltip="Click To see List of Assignments"
                  data-pr-position="right"
                  data-pr-at="right+5 top"
                  data-pr-my="left center-2"
                  style={{ cursor: 'pointer' }} >View All</p>
              </div>
              <div className="tabel-main-wrpper">
                <table>
                  <thead>
                    <tr>
                      <th className="w10">Sr.No</th>
                      <th className="w20">Subject</th>
                      <th className="w30">Title</th>
                      <th className="w15">Created On</th>
                      <th className="w10">Marks</th>
                      <th className="w10"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="serial-number ">1</td>
                      <td >English</td>
                      <td >Vocabulary</td>
                      <td >20-02-2023</td>
                      <td>
                        <span className="pending">Pending</span>
                      </td>
                      <td className=" text-center">
                        <img src={Assingment_Table_Next} alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-number w10">2</td>
                      <td >Mathematics</td>
                      <td >Differential Equations</td>
                      <td >03-01-2023</td>
                      <td >
                        <span className="approved">Approved</span>
                      </td>
                      <td className="text-center">
                        <img src={Assingment_Table_Next} alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-number w10">3</td>
                      <td >Sciences</td>
                      <td >Forensic Science</td>
                      <td >12-02-2023</td>
                      <td >
                        <span className="approved">Approved</span>
                      </td>
                      <td className=" text-center">
                        <img src={Assingment_Table_Next} alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-number">4</td>
                      <td >Geography</td>
                      <td >Earth's surface and the</td>
                      <td >20-02-2023</td>
                      <td >
                        <span className="approved">Approved</span>
                      </td>
                      <td className=" text-center">
                        <img src={Assingment_Table_Next} alt="" />
                      </td>
                    </tr>
                    <tr>
                      <td className="serial-number ">5</td>
                      <td >History</td>
                      <td >presentation</td>
                      <td >10-12-2022</td>
                      <td >
                        <span className="rejected">Rejected</span>
                      </td>
                      <td className=" text-center">
                        <img src={Assingment_Table_Next} alt="" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-xl-4 mt-0 paddingLeft10">
            <div className="NoticeBoard ">
              <div className="head">
                <p className="AssignmentsHeading">Notice Board</p>
                <p className="ViewAll">View All</p>
              </div>
              <div className="Notice_List">
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Parents-Teacher Meeting</p>
                    <p className="Date">Date-02-02-2023</p>
                  </div>
                </div>
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Exam Results</p>
                    <p className="Date">Date-02-02-2023</p>
                  </div>
                </div>
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Cultural Activities</p>
                    <p className="Date">Date-02-02-2023</p>
                  </div>
                </div>
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Science Events</p>
                    <p className="Date">Date-28-03-2023</p>
                  </div>
                </div>
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Scholar Meet</p>
                    <p className="Date">Date-18-01-2023</p>
                  </div>
                </div>
                <div className="List">
                  <img src={Lac_Math} alt="" />
                  <div className="subject">
                    <p>Get Together Invitation</p>
                    <p className="Date">Date-02-02-2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top_section_2">
          <div className="Assignments col-xl-8">
            <div className="head">
              <p className="AssignmentsHeading">Assessment</p>
              <p className="ViewAll">View All</p>
            </div>
            <div className="tabel-main-wrpper">
              <table>
                <thead>
                  <tr>
                    <th className="w10" >Sr.No</th>
                    <th className="w20">Subject</th>
                    <th className="w30">Created By</th>
                    <th className="w20">Created On</th>
                    <th className="w10">Marks</th>
                    <th className="w10"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="serial-number">1</td>
                    <td>English</td>
                    <td>Mr. John Doe </td>
                    <td>20-02-2023</td>
                    <td>
                      <span className="pending-number">55</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">2</td>
                    <td>Mathematics</td>
                    <td>Mr. Smith</td>
                    <td>05-02-2023</td>
                    <td>
                      <span className="approved-number">62</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">3</td>
                    <td>Sciences</td>
                    <td>Mr. Shane Watson</td>
                    <td>17-02-2023</td>
                    <td>
                      <span className="pending-number">47</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">4</td>
                    <td>Geography</td>
                    <td>Mr. Michael Clarke</td>
                    <td>20-02-2023</td>
                    <td>
                      <span className="approved-number">77</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">5</td>
                    <td>History</td>
                    <td>Ms. Lee Furlong</td>
                    <td>27-12-2022</td>
                    <td>
                      <span className="rejected-number">10</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="top_section_2">
          <div className="Assignments col-xl-8">
            <div className="head">
              <p className="AssignmentsHeading">Course</p>
              <p className="ViewAll">View All</p>
            </div>
            <div className="tabel-main-wrpper">
              <table>
                <thead>
                  <tr>
                    <th className="w10">Sr.No</th>
                    <th className="w25">Subject</th>
                    <th className="w25">Title</th>
                    <th className="w30">Progress</th>
                    <th className="w01"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="serial-number">1</td>
                    <td>English Literature</td>
                    <td>Mr. Timothy Winter</td>
                    <td className="process_yellow">
                      <label htmlFor="">55%</label>
                      <ProgressBar now={55} />
                    </td>
                    <td >
                      <img src={Assingment_Table_Next} className="ms-4" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">2</td>
                    <td>political science</td>
                    <td>Mr. Robert Agranoff</td>
                    <td className="Full_Green">
                      <label htmlFor="">100%</label>
                      <ProgressBar now={100} />
                    </td>
                    <td >
                      <img src={Assingment_Table_Next} className="ms-4" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">3</td>
                    <td>pharmaceutics</td>
                    <td>Mr. Harvard</td>
                    <td className="process_yellow">
                      <label htmlFor="">21%</label>
                      <ProgressBar now={21} />
                    </td>
                    <td >
                      <img src={Assingment_Table_Next} className="ms-4" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">4</td>
                    <td>Law</td>
                    <td>Mr. Muhammad Taqi Usmani</td>
                    <td className="Full_Green">
                      <label htmlFor="">100%</label>
                      <ProgressBar now={100} />
                    </td>
                    <td >
                      <img src={Assingment_Table_Next} className="ms-4" alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">5</td>
                    <td>Strategic Management</td>
                    <td>Mr. Fred Fiedler</td>
                    <td className="empty_red">
                      <label htmlFor="">Yet to start</label>
                      <ProgressBar now={0} />
                    </td>
                    <td >
                      <img src={Assingment_Table_Next} className="ms-4" alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="top_section_2">
          <div className="Assignments col-xl-8">
            <div className="head">
              <p className="AssignmentsHeading">Fees</p>
              <p className="ViewAll">View All</p>
            </div>
            <div className="tabel-main-wrpper">
              <table>
                <thead>
                  <tr>
                    <th className="w10">Sr.No</th>
                    <th className="w20">Expense</th>
                    <th className="w30">Amount</th>
                    <th className="w20">Date</th>
                    <th className="w10">Status</th>
                    <th className="w20"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="serial-number">1</td>
                    <td>Law</td>
                    <td>Mr. Muhammad Taqi Usmani</td>
                    <td>20-02-2023</td>
                    <td className="">
                      <span className="pending same-width">Due</span>
                    </td>
                    <td className="paynow text-center">Pay Now</td>
                  </tr>
                  <tr>
                    <td className="serial-number">2</td>
                    <td>Strategic Management</td>
                    <td>Mr. Fred Fiedler</td>
                    <td>02-02-2023</td>
                    <td className="">
                      <span className="approved same-width">paid</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">3</td>
                    <td>pharmaceutics</td>
                    <td>Mr. Harvard</td>
                    <td>29-02-2023</td>
                    <td className="">
                      <span className="approved same-width">paid</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">4</td>
                    <td>political science</td>
                    <td>Mr. Robert Agranoff</td>
                    <td>13-01-2023</td>
                    <td className="">
                      <span className="approved same-width">paid</span>
                    </td>
                    <td className="text-center">
                      <img src={Assingment_Table_Next} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td className="serial-number">5</td>
                    <td>English Literature</td>
                    <td>Mr. Timothy Winter</td>
                    <td>12-12-2022</td>
                    <td className="">
                      <span className="rejected">Late Due’s</span>
                    </td>
                    <td className="paynow text-center">Pay Now</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {
        renderModal &&
        <Dialog header="Dashboard Details" visible={renderModal} modal={true} style={{ width: '45vw' }} onHide={() => setRenderModal(!renderModal)}>
          <p className="m-0">
            <ul>
              <li><span>Below are the all tips for dashboard</span></li>
              <li><span>Welcome card shows the status of remaining course.</span></li>
              <li><span>By clicking top right icon you can switch languages & logout too.</span></li>
              <li><span>Below Calendar you can check details of upcoming lectures and meetings.</span></li>
              <li><span>Dashboard contains complete material like Assesment & Assignment details.</span></li>
            </ul>
          </p>
        </Dialog>
      }
    </main>
  );
};

export default Dashboard;
