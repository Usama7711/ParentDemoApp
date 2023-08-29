import React from 'react';
import Header from "../../../sharedComponents/Header";
import Sidebar from "../../../sharedComponents/Sidebar";
import SubHeader from '../../../sharedComponents/SubHeader';
import User from "../../../assets/images/userImg.svg"
import DetailsR8 from "../../../assets/images/editDetail.svg"
import { Link } from 'react-router-dom';
const ViewKidsDetails = () => {
    return (
        <main id="cx-main" className="viewKids_details">
            <div className="cx-main-card">
                <SubHeader />
                <div className="mainLandingCard" data-aos="zoom-in"
                    data-aos-duration="500">
                    <div className="profileCard">
                        <div className="userCard">
                            <img src={User} className="userImg" alt="" />
                            <label className='UserName'>Sita Pawar vbueaygbv</label>
                        </div>
                    </div>
                    {/* Kids details */}
                    <div className="row g-0">
                        <div className="kidsHeading cx-mb-20">
                            <label className="headTxt">Contact Information</label>
                            <Link to="/EditKidsDetails">
                                <img src={DetailsR8} className='detailImg' alt="" />
                            </Link>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Email </h6>
                            <label className="labelValue">Sitap@gmail.com</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Mobile Number  </h6>
                            <label className="labelValue">99999 99999</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Address </h6>
                            <label className="labelValue">NECHIPALLIYALIYIL HOUSE, PO MELMURIMELMURI PO</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">City</h6>
                            <label className="labelValue">Pune</label>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Pincode </h6>
                            <label className="labelValue">410410</label>
                        </div>
                        <div className="generalTitle cx-mb-20">
                            <label className='geneTxt'>General Information</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Date of Birth </h6>
                            <label className="labelValue">01-01-2001</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Gender </h6>
                            <label className="labelValue">Male</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Admission No.</h6>
                            <label className="labelValue">99999 99999</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Grade</h6>
                            <label className="labelValue">60</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20">
                            <h6 className="labelKey">Mifare Card ID</h6>
                            <label className="labelValue">6056671029545759</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Transportation</h6>
                            <label className="labelValue">Enable</label>
                        </div>
                        <div className="generalTitle cx-mb-20">
                            <label className='geneTxt'>Wallet Details</label>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 cx-mb-20 ">
                            <h6 className="labelKey">Wallet Amount</h6>
                            <label className="labelValue">500$</label>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ViewKidsDetails
