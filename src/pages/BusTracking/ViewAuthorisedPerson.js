import React, { useState } from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import ViewAuthorised from "../../assets/images/ViewAuthorised.svg"
import option from "../../assets/images/option-three-dot.svg";
import SideArrow from "../../assets/images/dropdownArrow.svg"
import { Dropdown, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ViewAuthorisedPerson = () => {
    const [show, setShow] = useState(false);
    const [openMode, setOpenMode] = useState(false);
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="ViewAuthorisedPerson">
            <SubHeader />
            <div className="view_wrapper">
                <div className="Main_heading">
                    <p>Authorised Person Details</p>
                </div>
                <div className="Header">
                    <div className="View_img">
                        <img src={ViewAuthorised} alt="" />
                        <p className="View_name">Sita Pawar</p>
                    </div>
                    <div className="Common_dropDown">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <img src={option} alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <img src={SideArrow} className='rightArrow' alt="" />
                                <Dropdown.Item href="#"><Link to="/EditAuthorisedPerson">Edit</Link></Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setOpenMode(true)}>Delete </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="Card_imformation row g-0">
                    <div className="Heading col-lg-12">
                        <p>Contact Information</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Email </label>
                            <p>Sitap@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Mobile Number  </label>
                            <p>99999 99999</p>
                        </div>
                    </div>
                </div>
                <div className="Card_imformation row g-0">
                    <div className="Heading col-lg-12">
                        <p>General Information</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Parent </label>
                            <p>Sita Pawar- Mother</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">First Name</label>
                            <p>Site</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Last Name</label>
                            <p>Powar</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Date Of Birth </label>
                            <p>10-10-1989</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="single_information">
                            <label htmlFor="">Gender</label>
                            <p>Female</p>
                        </div>
                    </div>
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

export default ViewAuthorisedPerson