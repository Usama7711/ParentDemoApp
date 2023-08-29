import React, { useState } from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import Form from 'react-bootstrap/Form';

const ComposeMessage = () => {
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
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="ComposeMessage">
            <SubHeader />
            <div className="MessageCompose">
                <div className="heading">
                    <p>New Message</p>
                </div>
                <div className="main_body">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="CreateAuthInput">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder=''
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Enter e-Mail.
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>To<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 cx-mb-25">
                                <div className="CreateAuthInput">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Type Your Subject Here....'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Subject .
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Subject<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 cx-mb-25">
                                <div className="CreateAuthInput">
                                    <textarea name="" id="" cols="60" rows="5" ></textarea>
                                    <Form.Control.Feedback type="invalid">
                                        Please Type Content .
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Content<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="CreateBtnAUtho">
                                <button className='cx-btn-2'>Cancel</button>
                                <button className='cx-btn-1 cx-ml-10'>Send</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ComposeMessage