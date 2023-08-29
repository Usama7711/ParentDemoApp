import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SubHeader from '../../sharedComponents/SubHeader';


const ChangePassword = () => {

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
    <main id="cx-main" className="change_password">
      <div className="cx-main-card">
        <SubHeader />
        {/* Main Landing Card */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="mainLandingCard cx-mb-20" data-aos="zoom-in"
            data-aos-duration="500">
            <div className="innerText">
              <label className='innerLabel'>Change Password</label>
            </div>
            <div className="breakLine cx-mb-20"></div>
            <div className="row">
              <div className="col-md-6 col-sm-12 cx-mb-25">
                <div className="fieldSetCUST">
                  <Form.Control
                    className='formsForValid'
                    required
                    type="Password"
                    placeholder='Type Your Password'
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your Old Password.
                  </Form.Control.Feedback>
                  <span className='legendHere'>Old Password<span className='ashhStar'> &#42;</span> </span>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 cx-mb-25">
                <div className="fieldSetCUST">
                  <Form.Control
                    className='formsForValid'
                    required
                    type="Password"
                    placeholder='Type Your Password'
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your New Password.
                  </Form.Control.Feedback>
                  <span className='legendHere'>New Password<span className='ashhStar'> &#42;</span> </span>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 cx-mb-25">
                <div className="fieldSetCUST">
                  <Form.Control
                    className='formsForValid'
                    required
                    type="Password"
                    placeholder='Type Your Confirm Password'
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Type Your Confirm Password.
                  </Form.Control.Feedback>
                  <span className='legendHere'>Confirm Password<span className='ashhStar'> &#42;</span> </span>
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

export default ChangePassword
