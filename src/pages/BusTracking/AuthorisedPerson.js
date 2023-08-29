import React, { useState } from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import search from "../../assets/images/search.svg";
import AP_prfile1 from "../../assets/images/AP_prfile1.svg";
import AP_prfile2 from "../../assets/images/AP_prfile2.svg";
import { Dropdown, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import option from "../../assets/images/option-three-dot.svg";
import SideArrow from "../../assets/images/dropdownArrow.svg"

const AuthorisedPerson = () => {
    const [isView, setIsView] = useState(false);
    const [show, setShow] = useState(false);
    const [openMode, setOpenMode] = useState(false);
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="Bustracking_main">
            <SubHeader />
            <div className="Fees">
                <div id='TransactionsFlexy'>
                    <div className=" row">
                        <div className="searchPanel col-lg-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By Transaction ID."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                        </div>
                        <div className="searchPanel col-lg-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By Payment For."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                        </div>
                        <div className="searchPanel col-lg-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search By Transaction Mode."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                        </div>
                        <div className="subBtn col-lg-3">
                            <button className="cx-btn-1">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='AuthoriswPersone'>
                <div
                    className="activity-table-wrapper attendance-blank-table"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="900"
                >
                    <table>
                        <thead>
                            <tr className="black-img-row">
                                <th>Sr.No</th>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='serial-number'>1</td>
                                <td><img src={AP_prfile1} alt="" /></td>
                                <td>Sita</td>
                                <td>Pawar</td>
                                <td>123456 88888</td>
                                <td>sitapawar@gmail.com</td>
                                <td>17-02-2023 </td>
                                <td>Female</td>
                                <td>
                                    <div className="Common_dropDown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <img src={option} alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <img src={SideArrow} className='rightArrow' alt="" />
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/ViewAuthorisedPerson" className="d-block">
                                                        View
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/EditAuthorisedPerson" className="d-block">Edit</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                   <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='serial-number'>2</td>
                                <td><img src={AP_prfile2} alt="" /></td>
                                <td>Gita</td>
                                <td>Pawar</td>
                                <td>123456 88888</td>
                                <td>gita@gmail.com</td>
                                <td>17-02-2023 </td>
                                <td>Female</td>
                                <td>
                                    <div className="Common_dropDown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <img src={option} alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <img src={SideArrow} className='rightArrow' alt="" />
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/ViewAuthorisedPerson" className="d-block">
                                                        View
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/EditAuthorisedPerson" className="d-block">Edit</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                   <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='serial-number'>3</td>
                                <td><img src={AP_prfile1} alt="" /></td>
                                <td>Ram	</td>
                                <td>Pawar</td>
                                <td>123456 88888</td>
                                <td>Rampawar@gmail.com</td>
                                <td>17-02-2023 </td>
                                <td>Male</td>
                                <td>
                                    <div className="Common_dropDown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <img src={option} alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <img src={SideArrow} className='rightArrow' alt="" />
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/ViewAuthorisedPerson" className="d-block">
                                                        View
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/EditAuthorisedPerson" className="d-block">Edit</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                   <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className='serial-number'>4</td>
                                <td><img src={AP_prfile2} alt="" /></td>
                                <td>Mita</td>
                                <td>Pawar</td>
                                <td>123456 88888</td>
                                <td>Mitap@gmail.com</td>
                                <td>17-02-2023 </td>
                                <td>Female</td>
                                <td>
                                    <div className="Common_dropDown">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <img src={option} alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <img src={SideArrow} className='rightArrow' alt="" />
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/ViewAuthorisedPerson" className="d-block">
                                                        View
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="#" className="d-block">Edit</Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    {" "}
                                                    <Link to="/EditAuthorisedPerson" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            <Modal
                size="md"
                centered
                show={openMode}
                onHide={() => setOpenMode(false)} animation={true}
            >
                <Modal.Header>
                    <Modal.Title>
                        Delete
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="borderModal"></div>
                    <p>Are you sure you want to delete ?</p>
                    <div className="borderModalBelow"></div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modalBtns">
                        <button className="cancelBtn" onClick={() => setOpenMode(false)}>Cancel</button>
                        <button className="YesBtn">Delete</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AuthorisedPerson