import React from 'react';
import { Link } from 'react-router-dom';
import Bell from "../../assets/images/Bell.svg"
import Mail from "../../assets/images/mail.svg"
import User from "../../assets/images/userImg.svg"
import SubHeader from '../../sharedComponents/SubHeader';

const PersonalDetails = () => {
    return (
        <main id="cx-main" className="personal_details">
            <div className="cx-main-card">
                <SubHeader />
                {/* Main Landing Card */}
                <div className="mainLandingCard" data-aos="zoom-in"
                    data-aos-duration="500">
                    <div className="innerHeading ">
                        <div className="innerText">
                            <label className='innerLabel'>Personal Details</label>
                        </div>
                        <Link to="/EditProfile" className='mainLink'>
                            <button className='cx-btn-1'>Edit</button>
                        </Link>
                    </div>
                    
                    <div className="profileCard">
                        <div className="userCard">
                            <img src={User} className="userImg" alt="" />
                            <label className='UserName'>Jhon Doe</label>
                        </div>
                        <div className="notificationsMain">
                            <div className="mailBox">
                                <img src={Mail} className="mailIn" alt="" />
                                <div className="popUpTxt">99+</div>
                            </div>
                            <div className="BellBox">
                                <img src={Bell} className="BellIn" alt="" />
                                <div className="popUpTxt">99+</div>
                            </div>
                        </div>
                    </div>

                    {/* User details section */}
                    <div className="informationSec">
                        <div className="row g-0">
                            <label className='innerLabel cx-mb-10'>Information</label>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Email </h6>
                                <label className="labelValue">Jhondoe@gmail.com</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Email Status  </h6>
                                <label className="labelGreen">Verified</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Mobile Number </h6>
                                <label className="labelValue">99999 99999</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                                <h6 className="labelKey">No. Of Students</h6>
                                <label className="labelValue">40</label>
                            </div>
                            
                            <label className='innerLabel cx-mb-10'>General Information</label>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Address</h6>
                                <label className="labelValue">100, Vishrantwadi, Kalas, <br /> Pune -411002</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">City</h6>
                                <label className="labelValue">Pune</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Nationality </h6>
                                <label className="labelValue">Indian</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Date Of Birth </h6>
                                <label className="labelValue">10-10-1989</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Gender </h6>
                                <label className="labelValue">Male</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Joining Date  </h6>
                                <label className="labelValue">10-10-2020</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">ID Card Number </h6>
                                <label className="labelValue">123456789</label>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                                <h6 className="labelKey">Status </h6>
                                <label className="labelGreen">40</label>
                            </div>
                            
                            <label className='innerLabel cx-mb-10'>Recent Activity</label>
                            <div className="col-md-12">
                                <div className="recentDetails">
                                    <div className="pointDot"></div>
                                    <label className='labelValue'>Leave applied for Ramdan form 2023-02-24 for 2 days</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PersonalDetails
