import React, { useState } from 'react';
import SubHeader from '../../../sharedComponents/SubHeader';
import User from "../../../assets/images/cameraImg.svg";
import Form from 'react-bootstrap/Form';
import UserImg from "../../../assets/images/userImg.svg"

const EditKidsDetails = () => {
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
        <main id="cx-main" className="Edit_KidsDetails">
            <div className="cx-main-card">
                <SubHeader />
                <div className="mainLandingCard" data-aos="zoom-in"
                    data-aos-duration="500">
                    <div className="editDetailHead cx-mb-20">
                        <label className="editTxt">Edit Kids Details </label>
                    </div>
                    <div className="profileCard ">
                        <div className="userCard">
                            <img src={UserImg} className="UserImg" alt="" />
                            <label htmlFor="imgSelect" className='imgSelector'>
                                <input type="file" id='imgSelect' className='d-none' />
                                <img src={User} className="editImg" alt="" />
                            </label>
                        </div>
                    </div>
                    {/* Inside fields Edit Details */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your First Name....'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your First Name.
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
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <span className='legendHere'>Address<span className='ashhStar'> &#42;</span> </span>
                                    <Form.Control
                                        className='formsForTextArea'
                                        as="textarea" rows={5}
                                        placeholder="Type Your Address..."
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Address....
                                    </Form.Control.Feedback>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST cx-mb-25">
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
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Mobile....'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Your Mobile.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Mobile<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                        </div>
                        <div className="belowBtns">
                            <button className='cx-btn-2'>Cancel</button>
                            <button className='cx-btn-1 cx-ml-10'>Update</button>
                        </div>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default EditKidsDetails
