import React from 'react'
import SubHeader from '../../../sharedComponents/SubHeader';
import user_profile from "../../../assets/images/circleUSer.svg";

const TransferCertificate = () => {
    return (
        <main id="cx-main" className="transfer_certificate">
            <div className="cx-main-card">
                <SubHeader />
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
                            <div className="bigCard cx-mb-25">
                                <div className="headTxt d-flex justify-content-between align-items-center flex-wrap">
                                    <label className='labelTxt'>TC Request Details</label>
                                    <button className='cx-btn-3'>Cancel Request</button>
                                </div>
                                <div className="breakLine cx-mb-20"></div>
                                <div className="row">
                                    <div className="col-md-6 cx-mb-20">
                                        <h5 className='labelKey'>Requested ON</h5>
                                        <label htmlFor="" className='labelBlackVal'>02-02-2023, 04:04:58 AM</label>
                                    </div>
                                    <div className="col-md-6 cx-mb-20">
                                        <h5 className='labelKey'>Requested By</h5>
                                        <label htmlFor="" className='labelBlackVal'>Mr. Johnny Doe</label>
                                    </div>
                                    <div className="col-md-6 cx-mb-20">
                                        <h5 className='labelKey'>Reason</h5>
                                        <label htmlFor="" className='labelBlackVal'>Re-locating at new place.</label>
                                    </div>
                                    <div className="col-md-6 cx-mb-20">
                                        <h5 className='labelKey'>Status </h5>
                                        <label htmlFor="" className='labelBlackVal'>Requested</label>
                                    </div>
                                </div>
                            </div>
                            <div className="bigCard cx-mb-25">
                                <div className="headTxt">
                                    <label className='labelTxt'>Fee Dues</label>
                                    <div className="breakLine cx-mb-20"></div>
                                </div>
                                <div className="tableBorders">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sr.No.</th>
                                                <th>Invoice ID</th>
                                                <th>Invoice Date</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            <tr>
                                                <td>1</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className='tfoot'>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total Dues</td>
                                                <td>1500</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="bigCard cx-mb-25">
                                <div className="headTxt">
                                    <label className='labelTxt'>Bus Fare Dues</label>
                                    <div className="breakLine cx-mb-20"></div>
                                </div>
                                <div className="tableBorders">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sr.No.</th>
                                                <th>Invoice No.</th>
                                                <th>Fare Month</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            <tr>
                                                <td>1</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Requested</td>
                                                <td>17-02-2023</td>
                                                <td>04:53:58s</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className='tfoot'>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>Total Dues</td>
                                                <td>1500</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="bigCard cx-mb-25">
                                <div className="headTxt">
                                    <label className='labelTxt'>Wallet Details</label>
                                    <div className="breakLine cx-mb-20"></div>
                                </div>
                                <div className="tableBorders">
                                    <table className="table">
                                        <tfoot className='tfoot'>
                                            <tr id='footerCard'>
                                                <td className='firstChild'>Wallet Balance</td>
                                                <td className='secondChild'>1500</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            <div className="bigCard cx-mb-25">
                                <div className="headTxt">
                                    <label className='labelTxt'>Total Payment Dues</label>
                                    <div className="breakLine cx-mb-20"></div>
                                </div>
                                <div className="tableBorders">
                                    <table className="table">
                                        <thead id='paymentDetailsCard'>
                                            <tr>
                                                <th className='firstChild'>Particulars</th>
                                                <th className='SecondChild'>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="tableBody">
                                            <tr>
                                                <td>Fee Dues (A)</td>
                                                <td>500</td>
                                            </tr>
                                            <tr>
                                                <td>Bus Fare Dues (B)</td>
                                                <td>500</td>
                                            </tr>
                                            <tr>
                                                <td>Wallet Balance</td>
                                                <td>5000</td>
                                            </tr>
                                        </tbody>
                                        <tfoot className='tfoot'>
                                            <tr>
                                                <td>Total Dues</td>
                                                <td>1500</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="belowTxtCard">
                                    <label> <span> &#42;</span> Payment gateway transaction charge of 1.5% is applicable.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default TransferCertificate;
