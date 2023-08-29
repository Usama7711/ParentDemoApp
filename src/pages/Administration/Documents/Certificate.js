import React from 'react'
import SubHeader from '../../../sharedComponents/SubHeader';
import certificate from "../../../assets/images/certificate.svg";
const Certificate = () => {
    return (
        <main id="cx-main" className="Certificate">
            <div className="cx-main-card">
                <SubHeader />
                <div className="mainLandingCard" data-aos="zoom-in" data-aos-duration="900">
                    <div className="certHeadAdj cx-mb-20">
                        <div className='leftCont'>
                            <p className='headTxt'>Birth Certificate</p>
                            <label htmlFor="" className="belowLab">Posted on December 12, 2022 </label>
                        </div>
                        <div className="right">
                            <label htmlFor="" className="RightlAB">2:15PM</label>
                        </div>
                    </div>
                    <div className="certificateCard cx-mb-20">
                        <img src={certificate} alt="" className="insideCertificate" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Certificate;
