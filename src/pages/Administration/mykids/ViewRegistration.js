import React from 'react'
import SubHeader from '../../../sharedComponents/SubHeader'
import DetailsR8 from "../../../assets/images/editDetail.svg"
import { Link } from 'react-router-dom'

const ViewRegistration = () => {
    return (
        <main id="cx-main" className="View_Registration">
            <div className="cx-main-card">
                <SubHeader />
                <div className="mainLandingCard" data-aos="zoom-in"
                    data-aos-duration="500">
                    {/* Kids registration details */}
                    <div className="row g-0">
                        <div className="kidsHeading cx-mb-20">
                            <label className="headTxt">Student Details</label>
                            <Link to="/EditRegistration">
                                <img src={DetailsR8} className='detailImg' alt="" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Student Name </h6>
                            <label className="labelValue">Talha Anjum</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Gender</h6>
                            <label className="labelValue">Male</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Registration Academic Year</h6>
                            <label className="labelValue">2016</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Student Email</h6>
                            <label className="labelValue">2016</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Birth Date </h6>
                            <label className="labelValue">2016</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Contact No.</h6>
                            <label className="labelValue">9999 9999 9999</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Registration Grade</h6>
                            <label className="labelValue">9999 9999 9999</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">School Hours</h6>
                            <label className="labelValue">200</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">City</h6>
                            <label className="labelValue">Aurangabad</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Pincode </h6>
                            <label className="labelValue">431001</label>
                        </div>
                        {/* Father details */}
                        <div className="generalTitle cx-mb-20">
                            <label className='geneTxt'>Father Details</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Father Name</h6>
                            <label className="labelValue">Father</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Email </h6>
                            <label className="labelValue">Sitap@gmail.com</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Contact No. </h6>
                            <label className="labelValue">99999 99999</label>
                        </div>
                        {/* Mother details */}
                        <div className="generalTitle cx-mb-20">
                            <label className='geneTxt'>Mother Details</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Mother Name</h6>
                            <label className="labelValue">Mother</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Email </h6>
                            <label className="labelValue">Sitap@gmail.com</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Contact No. </h6>
                            <label className="labelValue">99999 99999</label>
                        </div>
                        {/*Exam  Details*/}
                        <div className="generalTitle cx-mb-20">
                            <label className='geneTxt'>Exam  Details</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Exam Date</h6>
                            <label className="labelValue">12-12-2023</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Exam Time</h6>
                            <label className="labelValue">00:24 PM</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Registration No.</h6>
                            <label className="labelValue">12345</label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ViewRegistration
