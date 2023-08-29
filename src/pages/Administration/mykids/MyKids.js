import React, { useState } from 'react';
import SubHeader from '../../../sharedComponents/SubHeader';
import { TabView, TabPanel } from 'primereact/tabview';
import BrandBg from "../../../assets/images/roundedCircle.svg"
import RegFeePaid from "../../../assets/images/regFeePaid.svg"
import RegSucc from "../../../assets/images/regSucc.svg";
import Verified from "../../../assets/images/verified.svg"
import Rejected from "../../../assets/images/Rejected.svg"
import Removed from "../../../assets/images/removed.svg"
import Pending from "../../../assets/images/pending.svg"
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import option from "../.././../assets/images/option-three-dot.svg";
import SideArrow from "../../../assets/images/dropdownArrow.svg"
import Modal from 'react-bootstrap/Modal';

const MyKids = () => {

    const [isView, setIsView] = useState(false);
    const [show, setShow] = useState(false);
    const [openMode, setOpenMode] = useState(false);

    return (
        <>
            <main id="cx-main" className="my_kids">
                <div className="cx-main-card">
                    <SubHeader />
                    {/* Main Landing Card */}
                    <div className="mainLandingCard" data-aos="zoom-in" data-aos-duration="500">
                        <div className="kidsCardSec">
                            <TabView>
                                <TabPanel header="My Kids">
                                    <div className="row myKidsRow">
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize" data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegFeePaid} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/AttendanceDetails" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/Leaves" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/Fees" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/Document" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegFeePaid} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegFeePaid} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewKidsDetails" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditKidsDetails" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Attendence</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Leave</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Fees</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/IdCards" className="d-block">Id Card</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="#" className="d-block">Documents</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setShow(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </TabPanel>
                                <TabPanel header="Registration">
                                    <div className="row myRegistrationRow">
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegSucc} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Interview/Exam Sched</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Removed / Rejected</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Pending} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Verification Pending</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegSucc} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Interview/Exam Sched</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Removed / Rejected</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Pending} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Verification Pending</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={RegSucc} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Interview/Exam Sched</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Rejected} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Registered</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Removed} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Removed / Rejected</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-12 mt-3 mb-2  col3Customize " data-aos="fade-up" data-aos-delay="600" data-aos-duration="500">
                                            <div className="allKidsCard">
                                                <img src={BrandBg} className="userBg" alt="" />
                                                <img src={Pending} className="titleImg" alt="" />
                                                <div className="textProp">
                                                    <label className="head">Mr. Samantha D’souza</label>
                                                    <img src={Verified} alt="" />
                                                </div>
                                                <div className="belowCardDet">
                                                    <div className="cardWrapped">
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Grade</label>
                                                            <label className='ValLab'>6th A</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Admission No.</label>
                                                            <label className='ValLab'>123456789</label>
                                                        </div>
                                                        <div className="cardTxt">
                                                            <label className='keyLab'>Status</label>
                                                            <label className='purpleVal'>Verification Pending</label>
                                                        </div>
                                                    </div>
                                                    <div className="customer-option">
                                                        <Dropdown className={isView ? `d-none` : ""}>
                                                            <Dropdown.Toggle id="dropdown-basic">
                                                                <img src={option} alt="" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <img src={SideArrow} className='sideArrow' alt="" />
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/ViewRegistration" onClick={() => setIsView(true)} className="d-block">
                                                                        View
                                                                    </Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    {" "}
                                                                    <Link to="/EditRegistration" className="d-block">Edit</Link>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item>
                                                                    <Link to="#" onClick={() => setOpenMode(true)} className="d-block">Delete</Link>
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
            <Modal
                // size="md"
                centered
                show={openMode}
                onHide={() => setOpenMode(false)} animation={true}
            >
                <Modal.Header closeButton>
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
        </>
    )
}

export default MyKids
