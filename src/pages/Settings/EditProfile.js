import React, { useState } from 'react';
import User from "../../assets/images/cameraImg.svg";
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import CalendarImg from "../../assets/images/calendar.svg";
import { Calendar } from 'primereact/calendar';
import SubHeader from '../../sharedComponents/SubHeader';
import UserImg from "../../assets/images/userImg.svg"
const EditProfile = () => {
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
        <main id="cx-main" className="edit_details">
            <div className="cx-main-card">
                <SubHeader />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="mainLandingCard cx-mb-20" data-aos="zoom-in"
                        data-aos-duration="500">
                        <div className="profileCard ">
                            <div className="userCard">
                                <img src={UserImg} className="UserImg" alt="" />
                                <label htmlFor="imgSelect" className='imgSelector'>
                                    <input type="file" id='imgSelect' className='d-none' />
                                    <img src={User} className="editImg" alt="" />
                                </label>
                            </div>
                        </div>

                        {/* Forms section */}
                        <div className="row">
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Name...'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>First Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Last Name....'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Last Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Last Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-20">
                                <div className="fieldSetCUST">
                                    <span className='legendHere'>Gender<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select" required aria-label="Default select example">
                                        <option value="">Select  Gender</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please Select  Gender.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Mail Id'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Mail Id.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Email<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Mobile Number'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Mobile Number.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Mobile Number<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <span className='legendHere'>Place<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select" required aria-label="Default select example">
                                        <option value="">Select  a Place</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please Select  a place.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                        </div>
                        {/* Now flex is gonna work */}
                        <div className="middleTransporter">
                            <div className="leftSideCOnt">
                                <div className="fieldSetCUST cx-mb-25">
                                    <span className='legendHere'>Nationality<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select custFormSel" required aria-label="Default select example">
                                        <option value="">Select Your Nationality</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please Select Your Nationality.
                                    </Form.Control.Feedback>
                                </div>
                                <div className="fieldSetCUST cx-mb-25">
                                    <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Your Birth Date ..."
                                        className="dateChapter" />
                                    <span className='legendHere'>Date Of Birth<span className='ashhStar'> &#42;</span> </span>
                                    <img src={CalendarImg} className="caledarImg" alt="" />
                                </div>
                                <div className="fieldSetCUST cx-mb-25">
                                    <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Your Joining Date"
                                        className="dateChapter" />
                                    <span className='legendHere'>Joining Date<span className='ashhStar'> &#42;</span> </span>
                                    <img src={CalendarImg} className="caledarImg" alt="" />
                                </div>
                                <div className="bottomToggle cx-mb-25">
                                    <div className="definationLabel">
                                        <label className="definationTxt">Email Verification Status</label>
                                    </div>
                                    <div className="definationRadios">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Verified" />
                                            <label class="form-check-label labelGreen" for="Verified">
                                                Verified
                                            </label>
                                        </div>
                                        <div class="form-check secondRadio">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="Not Verified" />
                                            <label class="form-check-label labelGreen" for="Not Verified">
                                                Not Verified
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightSideCOnt">
                                <div className="fieldSetCUST cx-mb-25">
                                    <span className='legendHere'>Address<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Control
                                        className='formsForTextArea'
                                        as="textarea" rows={4}
                                        placeholder="Type Your Address..."
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Address....
                                    </Form.Control.Feedback>
                                </div>

                                <div className="fieldSetCUST cx-mb-20">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Last Name....'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Last Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Last Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="belowBtns">
                        <button className='cx-btn-2'>Cancel</button>
                        <button className='cx-btn-1 cx-ml-10'>Update</button>
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default EditProfile
