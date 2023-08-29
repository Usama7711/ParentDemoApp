// Edit Authorised Person 
import React, { useState } from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import { Dropdown } from 'react-bootstrap'
import ViewAuthorised from "../../assets/images/ViewAuthorised.svg"
import ic_upload_image from "../../assets/images/ic_upload_image.svg"
import option from "../../assets/images/option-three-dot.svg";
import SideArrow from "../../assets/images/dropdownArrow.svg"
import CalendarImg from "../../assets/images/calendar.svg";
import { Calendar } from 'primereact/calendar';
import Form from 'react-bootstrap/Form';

const EditAuthorisedPerson = () => {
    const [validated, setValidated] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [date, setDate] = useState(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="CreateAuthorisedPerson">
            <SubHeader />
            <div className="view_wrapper">
                <div className="Main_heading">
                    <p>Edit Authorised Person</p>
                </div>
                <div className="Header">
                    <div className="View_img">
                        <input type="file" id="uplod" />
                        <label htmlFor="uplod">
                            <img src={ViewAuthorised} alt="" />
                            <img src={ic_upload_image} alt="" className="ic_upload_image_edit" />
                        </label>
                    </div>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 cx-mb-25">
                            <div className="CreateAuthInput">
                                <Form.Control
                                    className='formsForValid'
                                    required
                                    type="text"
                                    defaultValue={"Site"}
                                    placeholder='Type Your Name...'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Type Your Name.
                                </Form.Control.Feedback>
                                <span className='legendHere'>First Name<span className='ashhStar'> &#42;</span> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-25">
                            <div className="CreateAuthInput">
                                <Form.Control
                                    className='formsForValid'
                                    required
                                    type="text"
                                    defaultValue={"Pawar"}
                                    placeholder='Type Your Last Name....'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Type Your Last Name.
                                </Form.Control.Feedback>
                                <span className='legendHere'>Last Name<span className='ashhStar'> &#42;</span> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-25">
                            <div className="CreateAuthInput">
                                <Form.Control
                                    className='formsForValid'
                                    required
                                    type="text"
                                    defaultValue={"99959 59595"}
                                    placeholder='Type Your Mobile Number....'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Type Your Mobile Number.
                                </Form.Control.Feedback>
                                <span className='legendHere'>Mobile Number<span className='ashhStar'> &#42;</span> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-25">
                            <div className="CreateAuthInput">
                                <Form.Control
                                    className='formsForValid'
                                    required
                                    type="text"
                                    defaultValue={"Sitap@gmail.com"}
                                    placeholder='Type Your Email....'
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Type Your Email.
                                </Form.Control.Feedback>
                                <span className='legendHere'>Email<span className='ashhStar'> &#42;</span> </span>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-20">
                            <div className="CreateAuthInput">
                                <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Your Birth Date ..." required
                                
                                    className="dateChapter" />
                                <span className='legendHere'>Date Of Birth<span className='ashhStar'> &#42;</span> </span>
                                <Form.Control.Feedback type="invalid">
                                    Please Select  DOB.
                                </Form.Control.Feedback>
                                <img src={CalendarImg} className="caledarImg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-20">
                            <div className="CreateAuthInput ">
                                <span className='legendHere'>Gender<span className='ashhStar'> &#42;</span> </span>
                                <Form.Select class="form-select" required aria-label="Default select example">
                                    <option value="">Select  Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2" selected>Female</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please Select  Gender.
                                </Form.Control.Feedback>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 cx-mb-20">
                            <div className="CreateAuthInput">
                                <span className='legendHere'>Student<span className='ashhStar'> &#42;</span> </span>
                                <Form.Select class="form-select" required aria-label="Default select example">
                                    <option value="">Select Your Nationality</option>
                                    <option value="1" selected>Indian</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please Select  Student.
                                </Form.Control.Feedback>
                            </div>
                        </div>
                    </div>
                    <div className="CreateBtnAUtho">
                        <button className='cx-btn-2'>Cancel</button>
                        <button className='cx-btn-1 cx-ml-10'>Submit</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default EditAuthorisedPerson