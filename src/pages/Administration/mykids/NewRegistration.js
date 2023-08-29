import React, { useState } from 'react';
import SubHeader from '../../../sharedComponents/SubHeader';
import Header from "../../../sharedComponents/Header";
import Sidebar from "../../../sharedComponents/Sidebar";
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';
import CalendarImg from "../../../assets/images/calendar.svg";

const NewRegistration = () => {
    const [date, setDate] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <main id="cx-main" className="New_registration">
            <div className="cx-main-card">
                <SubHeader />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="mainLandingCard cx-mb-20" data-aos="zoom-in"
                        data-aos-duration="500">
                        <div className="innerText">
                            <label className='innerLabel'>New Registration</label>
                        </div>
                        <div className="breakLine cx-mb-20"></div>
                        <div className="row registrationRow">
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Enter First Name of Student'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Student First Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Student First Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Enter First Name of Student'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Student First Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Student Last Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
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
                                    <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Select Your Birth Date ..."
                                        className="dateChapter" />
                                    <span className='legendHere'>Date Of Birth<span className='ashhStar'> &#42;</span> </span>
                                    <img src={CalendarImg} className="caledarImg" alt="" />
                                    <span className='legendHere'>Student Last Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <span className='legendHere'>Gender<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select" required aria-label="Default select example">
                                        <option value="">Grade</option>
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
                                    <span className='legendHere'>Gender<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select" required aria-label="Default select example">
                                        <option value="">Syllabus</option>
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
                                        placeholder='Enter Contact Number'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Contact No.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Contact No<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Enter Email'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Email.
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
                                        placeholder='Enter City'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter City.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>City<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Enter Pincode'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Pincode.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Pincode<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <span className='legendHere'>Relation With Kid<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Select class="form-select" required aria-label="Default select example">
                                        <option value="">Select Relation</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        Please Select  Relation.
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25 ResponsiveNone"></div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder="Enter Father's Name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Father's Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Father's Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder="Enter Father's Email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Father's Email.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Father's Email<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder="Enter Mother's Name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Mother's Name.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Mother's Name<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder="Enter Mother's Email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Mother's Email.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Mother's Email<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                        </div>
                        <div className="belowBtns">
                            <button className='cx-btn-2'>Cancel</button>
                            <button className='cx-btn-1 cx-ml-10'>Submit</button>
                        </div>
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default NewRegistration;
