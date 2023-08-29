import React from "react";
import SubHeader from "../../sharedComponents/SubHeader";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import back_btn from "../../assets/images/back_btn.svg";
import forward_btn from "../../assets/images/forward_btn.svg";
import diary_icon from "../../assets/images/diary_icon.svg";
import diary_icon2 from "../../assets/images/diary_icon2.svg";
import like_btn from "../../assets/images/like_btn.svg";
import like_btn_active from "../../assets/images/like_btn_active.svg";
import diary_img_1 from "../../assets/images/diary_img_1.svg";
import diary_img_2 from "../../assets/images/diary_img_2.svg";
import diary_img_3 from "../../assets/images/diary_img_3.svg";
import diary_img_4 from "../../assets/images/diary_img_4.svg";
import comment_btn from "../../assets/images/comment_btn.svg";
import comment_avatar from "../../assets/images/comment_avatar.svg";
import comment_avatar2 from "../../assets/images/comment_avatar2.svg";
import arrow_right_circle_fill from "../../assets/images/arrow_right_circle_fill.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Calendar from "./Calendar";

const MyDiary = () => {

  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (
    <main id="cx-main" className="Dashboard">
      <div
        className="cx-main-card"
        data-aos="zoom-in"
        data-aos-duration="500"
        id="Bustracking_main"
      >
        <SubHeader />
        <div
          className="mydiary_wrapper"
          data-aos="zoom-in"
          data-aos-duration="500"
          id="cx-wrapper"
        >
          <div className="row g-0">
            <div className="col-md-12">
              <div className="week-calendar-wrapper">

              <Calendar showDetailsHandle={showDetailsHandle} />


                {/* <div className="month-wrapper">
                  <div className="back-btn">
                    <img src={back_btn} alt="" />
                  </div>
                  <div className="current-month">
                    <p>March, 2023 </p>
                  </div>
                  <div className="forward-btn">
                    <img src={forward_btn} alt="" />
                  </div>
                </div>
                <div className="week-day-wrapper">
                  <div className="day">
                    <p>sun</p>
                    <p>10</p>
                  </div>
                  <div className="day">
                    <p>mon</p>
                    <p>11</p>
                  </div>
                  <div className="day">
                    <p>tue</p>
                    <p>12</p>
                  </div>
                  <div className="day">
                    <p>wed</p>
                    <p>
                      <span>13</span>
                    </p>
                  </div>
                  <div className="day">
                    <p>thu</p>
                    <p>14</p>
                  </div>
                  <div className="day">
                    <p>fri</p>
                    <p>15</p>
                  </div>
                  <div className="day">
                    <p>sat</p>
                    <p>16</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="mydiary-tabs-wrapper">
              <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                <div className="row g-0">
                  <div className="col-lg-4">
                    <div className="mydiary-list-wrapper">
                      <div className="mydiary-list">
                        <Nav variant="pills" className="flex-column">
                          <div className="mydiary-list-heading">
                            <p>1st March, 2023</p>
                          </div>
                          <Nav.Item>
                            <Nav.Link eventKey="0">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="1">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="3">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="4">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="5">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <div className="mydiary-list-heading">
                            <p>2nd March, 2023</p>
                          </div>
                          <Nav.Item>
                            <Nav.Link eventKey="3">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="4">
                              <div className="mydiary-single-item">
                                <div className="row g-0">
                                  <div className="col-md-2">
                                    <div className="msi-img-box">
                                      <img src={diary_icon} alt="" />
                                    </div>
                                  </div>
                                  <div className="col-md-9">
                                    <div className="msi-text-box">
                                      <div className="mt-heading">
                                        <p>Diary Communication Title</p>
                                      </div>
                                      <div className="mt-details">
                                        <p>
                                          Priority
                                          <span className="priority-red">
                                            High
                                          </span>
                                          l Category
                                          <span className="priority-purple">
                                            Home-Work
                                          </span>
                                        </p>
                                        <p>
                                          Created At
                                          <span className="priority-purple">
                                            02:57 PM
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-1">
                                    <div className="msi-icon-box">
                                      <img
                                        src={arrow_right_circle_fill}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="mydiary-detail-wrapper">
                      <Tab.Content>
                        <Tab.Pane eventKey="0">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  infancy. Various versions have evolved over
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>

                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="1">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-heading">
                                  <p>Comments</p>
                                </div>
                                <div className="comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Parent Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Parent comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn_active} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sub-comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Teacher Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Teacher comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="2">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-heading">
                                  <p>Comments</p>
                                </div>
                                <div className="comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Parent Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Parent comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn_active} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sub-comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Teacher Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Teacher comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="3">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-heading">
                                  <p>Comments</p>
                                </div>
                                <div className="comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Parent Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Parent comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn_active} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sub-comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Teacher Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Teacher comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-heading">
                                  <p>Comments</p>
                                </div>
                                <div className="comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Parent Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Parent comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn_active} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sub-comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Teacher Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Teacher comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="5">
                          <div className="md-inner-wrapper">
                            <div className="main-diary-title">
                              <p>Diary Communication Title</p>
                              <span>
                                <img src={diary_icon2} alt="" />
                              </span>
                            </div>
                            <div className="main-diary-details-wrapper">
                              <div className="main-diary-title">
                                <p>Homework</p>
                                <span>
                                  <img src={like_btn} alt="" />
                                </span>
                              </div>
                              <div className="md-text-box">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                  as opposed to using 'Content here, content
                                  here', making it look like readable English.
                                  Many desktop publishing packages and web page
                                  editors now use Lorem Ipsum as their default
                                  model text, and a search for 'lorem ipsum'
                                  will uncover many web sites still in their
                                  infancy. Various versions have evolved over
                                  the years.
                                </p>
                              </div>
                              <div className="time-stamp">
                                <p className="priority-details">
                                  Priority{" "}
                                  <span className="priority-red">High</span>
                                </p>
                                <p className="time">
                                  Mon 1st March, 2023 02:41 PM
                                </p>
                              </div>
                              <div className="img-box-wrapper">
                                <img src={diary_img_1} alt="" />
                                <img src={diary_img_2} alt="" />
                                <img src={diary_img_3} alt="" />
                                <img src={diary_img_4} alt="" />
                              </div>
                              <div className="comment-box">
                                <div className="comment-heading">
                                  <p>Comments</p>
                                </div>
                                <div className="comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Parent Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Parent comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn_active} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="sub-comment">
                                  <div className="row g-0">
                                    <div className="col-md-1">
                                      <div className="c-img-box">
                                        <img src={comment_avatar2} alt="" />
                                      </div>
                                    </div>
                                    <div className="col-md-10">
                                      <div className="commenting-person">
                                        <p>Teacher Name</p>
                                      </div>
                                      <div className="commented">
                                        <p>
                                          The Teacher comment will be shown
                                          here...
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-1">
                                      <div className="comment-like-btn">
                                        <img src={like_btn} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="comment-input-field">
                                <Form className="comment-form">
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                      type="text"
                                      placeholder="Write comment here..."
                                    />
                                  </Form.Group>
                                  <div className="comment-btn">
                                    <img src={comment_btn} alt="" />
                                  </div>
                                </Form>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyDiary;
