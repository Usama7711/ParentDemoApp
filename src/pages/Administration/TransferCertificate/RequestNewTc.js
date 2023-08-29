import React, { useState } from 'react'
import SubHeader from '../../../sharedComponents/SubHeader'
import user_profile from "../../../assets/images/circleUSer.svg";
import Form from 'react-bootstrap/Form';

const RequestNewTc = () => {
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
        <main id="cx-main" className="Request_NewTc">
            <div className="cx-main-card">
                <SubHeader />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="mainLandingCard" data-aos="zoom-in" data-aos-duration="900">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="perInfoCard">
                                    <div className="mainInnerBlog">
                                        <img src={user_profile} className='imgCircle' alt="" />
                                    </div>
                                    <div className="belowCon">
                                        <div className="headTxt">
                                            <label htmlFor="" className='infoTxt'>Basic Information</label>
                                            <div className="breakLine cx-mb-20"></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 cx-mb-20">
                                                <h6 className='cardKey'>Name</h6>
                                                <label htmlFor="" className='cardVal'>Jhon Doe</label>
                                            </div>
                                            <div className="col-md-6 cx-mb-20">
                                                <h6 className='cardKey'>Admission Number</h6>
                                                <label htmlFor="" className='cardVal'>1234565789</label>
                                            </div>
                                            <div className="col-md-6 cx-mb-20">
                                                <h6 className='cardKey'>Grade Name</h6>
                                                <label htmlFor="" className='cardVal'>Plus Two</label>
                                            </div>
                                            <div className="col-md-6 cx-mb-20">
                                                <h6 className='cardKey'>Division Name</h6>
                                                <label htmlFor="" className='cardVal'>A</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="bigCard cx-mb-20">
                                    <div className="headTxt">
                                        <label className='labelTxt'>Request New TC </label>
                                        <div className="breakLine cx-mb-20"></div>
                                    </div>
                                    <div className="fieldSetCUST">
                                        <span className='legendHere'>Address<span className='ashhStar'> &#42;</span> </span>
                                        <Form.Control
                                            className='formsForTextArea'
                                            as="textarea" rows={10}
                                            placeholder="Enter Reason for requesting new TC..."
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Reason for requesting new TC....
                                        </Form.Control.Feedback>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="belowBtns">
                            <button className='cx-btn-2'>Cancel</button>
                            <button className='cx-btn-1 cx-ml-10'>Apply</button>
                        </div>
                    </div>
                </Form>
            </div>
        </main>
    )
}

export default RequestNewTc
