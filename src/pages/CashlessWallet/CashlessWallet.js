import React, { useState } from 'react';
import SubHeader from '../../sharedComponents/SubHeader';
import { Link } from 'react-router-dom';
import search from "../../assets/images/search.svg";
import exportIcon from "../../assets/images/exportIcon.svg";
import { Calendar } from 'primereact/calendar';
import CalendarImg from "../../assets/images/calendar.svg";
import { TabView, TabPanel } from "primereact/tabview";
import TabSearch from "../../assets/images/tableSearch.svg";
const CashlessWallet = () => {
    const [date, setDate] = useState(null);
    return (
        <main id="cx-main" className="Cashless_Wallet">
            <div className="cx-main-card" data-aos="zoom-in"
                data-aos-duration="500">
                <SubHeader />
                <div className="cashlessCard cx-mb-20">
                    <div className="differenceHold">
                        <div className="insideLeft">
                            <h6 className='hTxt'>Sara’s Balance</h6>
                            <h4 className='hNum'>$3000</h4>
                        </div>
                        <div className="insideRight" id='cahslessWalletBtn'>
                            <Link to="/RechargeWallet" className='mainLink'>
                                <button className='cx-btn-1'>Recharge Wallet</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cashlessCard cx-mb-20">
                    <label className='headingTxt'>Transaction History</label>
                </div>
                <div className="headerForms">
                    <div className="row">
                        <div className="col-md-3 cx-mb-20">
                            <div className="datePicker">
                                <Calendar value={date} onChange={(e) => setDate(e.value)} placeholder="Date"
                                    className="dateChapter" />
                                <img src={CalendarImg} className="caledarImg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-3 cx-mb-20">
                            <select className="form-select" required aria-label="Default select example">
                                <option value="">Notification Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-md-3 cx-mb-20">
                            <select className="form-select" required aria-label="Default select example">
                                <option value="">Notification Like</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-md-1 cx-mb-20 smallScrNone"></div>
                        <div className="col-md-2 leftSide cx-mb-20">
                            <div className="subBtn">
                                <img src={exportIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tabs Section */}
                <div id="tabsCashless">
                    <TabView>
                        <TabPanel header="All">
                            <div
                                className="tableBorders"
                                id="feesTable"
                                data-aos="fade-up"


                            >
                                <table className="table">
                                    <thead id="shadowHead">
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Recharge ID</th>
                                            <th>Transaction No.</th>
                                            <th>Reference No.</th>
                                            <th>Amount</th>
                                            <th>Date & Time</th>
                                            <th>Mode</th>
                                            <th>Paid By</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>By Cheque</td>
                                            <td>Father</td>
                                            <td>
                                                <span className="StatusBlog text-center">
                                                    <label className="warningTxt">Pending</label>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>By Cheque</td>
                                            <td>Mother</td>
                                            <td>
                                                <span className="StatusBlogSucc text-center">
                                                    <label className="succTxt">
                                                        Success
                                                    </label>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>By Cheque</td>
                                            <td>Uncle</td>
                                            <td>
                                                <span className="StatusBlogFailed text-center">
                                                    <label className="failed">Failed</label>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <label className="tableTxt">
                                    Showing 1-10 of 100 pages
                                </label>
                            </div>
                        </TabPanel>
                        <TabPanel header="Successfull">
                            <div
                                className="tableBorders cx-mb-20"
                                id="feesTable"
                                data-aos="fade-up"


                            >
                                <table className="table">
                                    <thead id="shadowHead">
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Recharge ID</th>
                                            <th>Transaction No.</th>
                                            <th>Reference No.</th>
                                            <th>Amount</th>
                                            <th>Date & Time</th>
                                            <th>Paid By</th>
                                            <th>Mode</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td>4567891230</td>
                                            <td>17-02-2023</td>
                                            <td>Fees</td>
                                            <td>Online Payment</td>
                                            <td>Online Payment</td>
                                            <td>
                                                Father
                                            </td>
                                            <td>
                                                By Cheque
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>4567891230</td>
                                            <td>17-02-2023</td>
                                            <td>Fees</td>
                                            <td>Online Payment</td>
                                            <td>Online Payment</td>
                                            <td>
                                                Father
                                            </td>
                                            <td>
                                                By Cheque
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>4567891230</td>
                                            <td>17-02-2023</td>
                                            <td>Fees</td>
                                            <td>Online Payment</td>
                                            <td>Online Payment</td>
                                            <td>
                                                Father
                                            </td>
                                            <td>
                                                By Cheque
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <label className="tableTxt">
                                    Showing 1-10 of 100 pages
                                </label>
                            </div>
                        </TabPanel>
                        <TabPanel header="Pending">
                            <div
                                className="tableBorders"
                                id="feesTable"
                                data-aos="fade-up"


                            >
                                <table className="table">
                                    <thead id="shadowHead">
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Recharge ID</th>
                                            <th>Reference No.</th>
                                            <th>Amount</th>
                                            <th>Due Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td>270</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>270</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>270</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023</td>
                                            <td>Pending</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <label className="tableTxt">
                                    Showing 1-10 of 100 pages
                                </label>
                            </div>
                        </TabPanel>
                        <TabPanel header="Failed">
                            <div
                                className="tableBorders"
                                id="feesTable"
                                data-aos="fade-up"


                            >
                                <table className="table">
                                    <thead id="shadowHead">
                                        <tr>
                                            <th>Sr.No.</th>
                                            <th>Recharge ID</th>
                                            <th>Transaction No.</th>
                                            <th>Reference No.</th>
                                            <th>Amount</th>
                                            <th>Date & Time</th>
                                            <th>Paid By</th>
                                            <th>Mode</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        <tr>
                                            <td>1</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>Father</td>
                                            <td>By Cheque</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>Father</td>
                                            <td>By Cheque</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>270</td>
                                            <td>123</td>
                                            <td>123456</td>
                                            <td>1230</td>
                                            <td>17-02-2023 14:22:25</td>
                                            <td>Father</td>
                                            <td>By Cheque</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <label className="tableTxt">
                                    Showing 1-10 of 100 pages
                                </label>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </main>
    )
}

export default CashlessWallet;
