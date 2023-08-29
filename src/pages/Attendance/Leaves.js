import React from "react";
import { useState } from "react";
import Header from "../../sharedComponents/Header";
import Sidebar from "../../sharedComponents/Sidebar";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import edit_icon from "../../assets/images/edit_icon.svg";
import disable_leave_edit from "../../assets/images/disable_leave_edit.svg";
import Disabale_delete_icon from "../../assets/images/Disabale_delete_icon.svg";
import delete_icon from "../../assets/images/delete_icon.svg";
import no_record_img from "../../assets/images/no_record_img.svg";
import { Calendar } from "primereact/calendar";
import SubHeader from "../../sharedComponents/SubHeader";
import Modal from "react-bootstrap/Modal";

const Leaves = () => {
  const [showBlank, setShowBlank] = useState(false);
  const handleShowBlank = () => setShowBlank(true);
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main id="cx-main" className="Attendance_calender">
      <div className="cx-main-card">
        <SubHeader />
        {/* <div className="breadcrumb-wrapper">
          <div className="breadcrumb">
            <p>Leaves</p>
          </div>
          <div className="btn-wrapper">
            <Link to="/ApplyLeave" className="green-btn-1">
              Apply Leave
            </Link>
          </div>
        </div> */}
        <div className="filter-wrapper">
          <div className="fw-input-fields">
            <div className="row">
              <div className="col-lg-6">
                <Calendar
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  placeholder="Month"
                />
              </div>
              <div className="col-lg-6">
                <Calendar
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  showIcon
                  placeholder="Year"
                />
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
                  <tr className="black-img-row">
                    <th>Sr.No</th>
                    <th>Student name</th>
                    <th>Leave From</th>
                    <th>Leave To-Date</th>
                    <th>No. Of Days</th>
                    <th>Leave Mode</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="black-img-row">
                    <td></td>
                    <td></td>
                    {/* <td></td> */}
                    <td colSpan={4}>
                      <div className="no-record-img">
                        <img src={no_record_img} alt="" />
                      </div>
                    </td>
                    {/* <td></td> */}
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div className="bottom-status-bar">
                <div className="filter-result-count">
                  {/* <p>Showing 1-10 of 100 pages</p> */}
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
              </div>
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
              <thead className="custom-heading-for-leaves">
                <tr>
                  <th>Sr.No</th>
                  <th>Leave From</th>
                  <th>Leave To-Date</th>
                  <th>No. Of Days</th>
                  <th>Leave Mode</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="serial-number">1</td>
                  <td>17-02-2023</td>
                  <td>18-02-2023</td>
                  <td>2</td>
                  <td>Schooling & Transportation</td>
                  <td>
                    <span className="pending">Pending</span>
                  </td>
                  <td>
                    <div className="action-icon-wrapper">
                      <Link to="/EditLeave">
                        <img src={edit_icon} alt="" />
                      </Link>
                      <img onClick={handleShow} src={delete_icon} alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">2</td>
                  <td>17-02-2023</td>
                  <td>18-02-2023</td>
                  <td>2</td>
                  <td>Schooling & Transportation</td>
                  <td>
                    <span className="approved">Approved</span>
                  </td>
                  <td>
                    <div className="action-icon-wrapper disabled_icons">
                      <img src={disable_leave_edit} alt="" />
                      <img src={Disabale_delete_icon} alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="serial-number">3</td>
                  <td>17-02-2023</td>
                  <td>18-02-2023</td>
                  <td>2</td>
                  <td>Schooling & Transportation</td>
                  <td>
                    <span className="rejected">Rejected</span>
                  </td>
                  <td>
                    <div className="action-icon-wrapper disabled_icons">
                      <img src={disable_leave_edit} alt="" />
                      <img src={Disabale_delete_icon} alt="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="bottom-status-bar">
              <div className="filter-result-count">
                <p>Showing 1-10 of 100 pages</p>
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
            </div>
          </div>
        )}
      </div>
      {/* Modal */}
      <Modal centered show={show} onHide={handleClose} animation={true} className="delete_modal">
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="borderModal"></div>
          <p>Are you sure you want to delete ?</p>
          <div className="borderModalBelow"></div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modalBtns">
            <button className="cancelBtn" onClick={handleClose}>
              Cancel
            </button>
            <button className="YesBtn">Delete</button>
          </div>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Leaves;
