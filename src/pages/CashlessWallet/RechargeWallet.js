import React from 'react'
import SubHeader from '../../sharedComponents/SubHeader';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const RechargeWallet = () => {
    return (
        <main id="cx-main" className="Recharge_Wallet">
            <div className="cx-main-card">
                <SubHeader />
                <div className="card" data-aos="zoom-in"
                    data-aos-duration="500">
                    <div className="card-header">
                        <label className="headingTxt">Recharge Wallet</label>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 cx-mb-25 p-4">
                                <div className="fieldSetCUST">
                                    <Form.Control
                                        className='formsForValid'
                                        required
                                        type="text"
                                        placeholder='Enter Amount to add in wallet...'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Amount to add in wallet....
                                    </Form.Control.Feedback>
                                    <span className='legendHere'>Enter Amount<span className='ashhStar'> &#42;</span> </span>
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                            <hr />
                            <div className="col-md-7"></div>
                            <div className="col-md-3 textLeftMedia">
                                <p className="keyTxt">Total Amount</p>
                                <p className="keyTxt">
                                    Transaction Charge (1.5%)
                                </p>
                            </div>
                            <div className="col-md-2 textLeftMedia">
                                <p className="valTxt">500$</p>
                                <p className="valTxt">15$</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row">
                            <div className="col-md-7">
                                <label className="footertxt">
                                    {" "}
                                    <span className="text-danger">&#42;</span>{" "}
                                    Payment gateway transaction charge of 1.5% is
                                    applicable.
                                </label>
                            </div>
                            <div className="col-md-3 textLeftMedia">
                                <p className="keyTxt">
                                    Total Amount To Pay
                                </p>
                            </div>
                            <div className="col-md-2 textLeftMedia">
                                <p className="valTxt">515$</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="belowBtns">
                    <button className="cx-btn-2">Cancel</button>
                    <Link to="/InvoiceFee" className="PayaLink">
                        <button className="cx-btn-1 cx-ml-10">Pay Now</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default RechargeWallet;
