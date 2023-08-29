import React from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import ViewAuthorised from "../../assets/images/ViewAuthorised.svg"
import { Form } from 'react-bootstrap'

const RenewTransportation = () => {
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="RenewTransportation">
            <SubHeader />
            <div className="renewTransport_main">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="Renew_Card">
                            <div className="top">
                                <img src={ViewAuthorised} alt="" />
                                <div className="switchCase">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    // onChange={() => setMapList(!MapList)}
                                    />
                                </div>
                            </div>
                            <div className="bottom">
                                <p className="name">
                                Janhvi Kapoor
                                </p>
                                <p className="label">Grade <span>10th</span></p>
                                <p className="label">Admission No. <span>123456789</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="Renew_Card">
                            <div className="top">
                                <img src={ViewAuthorised} alt="" />
                                <div className="switchCase">
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        defaultChecked
                                    // onChange={() => setMapList(!MapList)}
                                    />
                                </div>
                            </div>
                            <div className="bottom">
                                <p className="name">
                                Janhvi Kapoor
                                </p>
                                <p className="label">Grade <span>10th</span></p>
                                <p className="label">Admission No. <span>123456789</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenewTransportation