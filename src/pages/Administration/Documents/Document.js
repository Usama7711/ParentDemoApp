import React from 'react'
import SubHeader from '../../../sharedComponents/SubHeader';
import ArrowSvg from "../../../assets/images/curiculum/arrow-right-circle.svg";
import Print from "../../../assets/images/cardPrint.svg";
import Save from "../../../assets/images/saveFile.svg";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from 'react-router-dom';


const Document = () => {
    return (
        <main id="cx-main" className="Document">
            <div className="cx-main-card">
                <SubHeader />
                <div className="mainLandingCard" data-aos="zoom-in" data-aos-duration="900">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <div className="DocCard">
                                <div className="headingFlex">
                                    <label className='HeadTxt'>Birth Certificate</label>
                                    <Link to="/Certificate">
                                        <img src={ArrowSvg} alt="" />
                                    </Link>
                                </div>
                                <div className="fileWrapp">
                                    <img src={Print} alt="" />
                                </div>
                                <label className='footertxt'>Last Updated on Feb 22, 2023</label>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <div className="DocCard">
                                <div className="headingFlex">
                                    <label className='HeadTxt'>Address Proof</label>
                                    <Link to="/Certificate">
                                        <img src={ArrowSvg} alt="" />
                                    </Link>
                                </div>
                                <div className="fileWrapp">
                                    <img src={Print} alt="" />
                                </div>
                                <label className='footertxt'>Last Updated on Feb 22, 2023</label>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <div className="BorderedCard">
                                <div className="headingFlex">
                                    <label className='HeadTxt'>Uplading</label>
                                </div>
                                <div className="fileWrapp">
                                    <img src={Save} alt="" />
                                </div>
                                <div className="progress-bar1">
                                    <div className="topic-list">
                                        <span>Progress </span>
                                    </div>
                                    <div className="pars">40%</div>
                                </div>
                                <ProgressBar now={25} />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 cx-mb-20">
                            <label className="BorderedLabel" htmlFor='filePicker'>
                                <input type="file" className='d-none' id='filePicker' />
                                <div className="insiderContent">
                                    <img src={Save} className='saver' alt="" />
                                    <p className='detailTxt'>Drag & Drop Your File</p>
                                    <p className='detailTxt'>Or</p>

                                    <label htmlFor="buttonFile" className='browseBtn'>
                                        Browse File <input type="file" className='d-none' id='buttonFile' />
                                    </label>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="belowBtns">
                        <button className='cx-btn-2'>Cancel</button>
                        <button className='cx-btn-1 cx-ml-10'>Update</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Document;
