import React, { useState } from "react";
import SubHeader from "../../../sharedComponents/SubHeader";
import { TabView, TabPanel } from "primereact/tabview";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import search from "../../../assets/images/search.svg";
import TabSearch from "../../../assets/images/tableSearch.svg";
import { Link } from "react-router-dom";
const Fees = () => {
  return (
    <main id="cx-main" className="Fees">
      <div className="cx-main-card">
        <SubHeader />
        <div data-aos="zoom-in"
          data-aos-duration="500">
          <div className="feesCard">
            <Tabs
              defaultActiveKey="Fee Invoices"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab eventKey="Fee Invoices" title="Fee Invoices">
                <div id="innerSlideTab">
                  <TabView>
                    <TabPanel header="All" className="allPanel">
                      <div className="searchflexy cx-mb-20">
                        <div className="searchPanel">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search By Invoice No."
                          />
                          <img src={search} className="srchImg" alt="" />
                        </div>
                        <div className="subBtn">
                          <button className="cx-btn-1">Submit</button>
                        </div>
                      </div>
                      <div
                        className="tableBorders"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table ">
                          <thead id="shadowHead">
                            <tr>
                              <th className="checkBoxBright">
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </th>
                              <th>Sr.No.</th>
                              <th>Invoice No.</th>
                              <th>Demand Date</th>
                              <th>Total Amount</th>
                              <th>Paid Amount</th>
                              <th>Payment Mode</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </td>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Partially Paid
                                  </label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </td>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <label className="tableTxt">
                          Showing 1-10 of 100 pages
                        </label>
                      </div>
                    </TabPanel>

                    <TabPanel header="Pending" className="pendingPanel">
                      <div className="searchflexy cx-mb-20">
                        <div className="searchPanel">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search By Invoice No."
                          />
                          <img src={search} className="srchImg" alt="" />
                        </div>
                        <div className="subBtn">
                          <button className="cx-btn-1">Submit</button>
                        </div>
                      </div>
                      <div
                        className="tableBorders cx-mb-20"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th className="checkBoxBright">
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </th>
                              <th>Sr.No.</th>
                              <th>Invoice No.</th>
                              <th>Demand Date</th>
                              <th>Total Amount</th>
                              <th>Paid Amount</th>
                              <th>Payment Mode</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </td>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </td>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {" "}
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </td>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <label className="tableTxt">
                          Showing 1-10 of 100 pages
                        </label>
                      </div>
                      {/* Below card for condtional check */}
                      <div className="card">
                        <div className="card-header">
                          <label className="headingTxt">Billing Summary</label>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-7"></div>
                            <div className="col-md-3">
                              <p className="keyTxt">Total Amount</p>
                              <p className="keyTxt">
                                Transaction Charge (1.5%)
                              </p>
                            </div>
                            <div className="col-md-2 text-center">
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
                            <div className="col-md-3">
                              <p className="keyTxt">
                                Transaction Charge (1.5%)
                              </p>
                            </div>
                            <div className="col-md-2 text-center">
                              <p className="valTxt">15$</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="belowBtns">
                        <button className="cx-btn-2">Cancel</button>
                        <Link to="#" className="PayaLink">
                          <button className="cx-btn-1 cx-ml-10">Pay Now</button>
                        </Link>
                      </div>
                    </TabPanel>
                    <TabPanel header="Partially Paid" className="partialPanel">
                      <div className="searchflexy cx-mb-20">
                        <div className="searchPanel">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search By Invoice No."
                          />
                          <img src={search} className="srchImg" alt="" />
                        </div>
                        <div className="subBtn">
                          <button className="cx-btn-1">Submit</button>
                        </div>
                      </div>
                      <div
                        className="tableBorders"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th>Sr.No.</th>
                              <th>Invoice No.</th>
                              <th>Demand Date</th>
                              <th>Total Amount</th>
                              <th>Paid Amount</th>
                              <th>Payment Mode</th>
                              <th>Status</th>
                              <th>Action</th>
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
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Partially Paid
                                  </label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
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
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Partially Paid
                                  </label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
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
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Partially Paid
                                  </label>
                                </span>
                              </td>
                              <td>
                                <Link to="/InvoiceFee">
                                  <img src={TabSearch} alt="" className="hoverImg" />
                                </Link>
                              </td>
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
              </Tab>
              <Tab eventKey="Fee Receipts" title="Fee Receipts" className="FeeReceipts">
                <div id="innerSlideTab">
                  {/* <div className="searchflexy cx-mb-20">
                    <div className="searchPanel">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Transaction ID."
                      />
                      <img src={search} className="srchImg" alt="" />
                    </div>
                    <div className="searchPanel">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Payment For."
                      />
                      <img src={search} className="srchImg" alt="" />
                    </div>
                    <div className="searchPanel">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Transaction Mode."
                      />
                      <img src={search} className="srchImg" alt="" />
                    </div>
                    <div className="subBtn">
                      <button className="cx-btn-1">Submit</button>
                    </div>
                  </div> */}
                  <div id='TransactionsFlexy'>
                    <div className=" row">
                      <div className="searchPanel col-lg-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search By Transaction ID."
                        />
                        {/* <img src={search} className="srchImg" alt="" /> */}
                      </div>
                      <div className="searchPanel col-lg-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search By Payment For."
                        />
                        {/* <img src={search} className="srchImg" alt="" /> */}
                      </div>
                      <div className="searchPanel col-lg-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search By Transaction Mode."
                        />
                        {/* <img src={search} className="srchImg" alt="" /> */}
                      </div>
                      <div className="subBtn col-lg-3">
                        <button className="cx-btn-1">Submit</button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tableBorders"
                    id="feesTable"
                    data-aos="fade-up"
                    data-aos-duration="900"
                    data-aos-delay="500"
                  >
                    <table className="table">
                      <thead id="shadowHead">
                        <tr>
                          <th>Sr.No.</th>
                          <th>Transaction ID</th>
                          <th>Paid Date & Time</th>
                          <th>Receipt No.</th>
                          <th>Transaction Mode</th>
                          <th>Invoice No.</th>
                          <th>Action</th>
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
                            <Link to="/InvoiceReceipt">
                              <img src={TabSearch} alt="" className="hoverImg" />
                            </Link>
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
                            <Link to="/InvoiceReceipt">
                              <img src={TabSearch} alt="" className="hoverImg" />
                            </Link>
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
                            <Link to="/InvoiceReceipt">
                              <img src={TabSearch} alt="" className="hoverImg" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <label className="tableTxt">
                      Showing 1-10 of 100 pages
                    </label>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="My Transactions" title="My Transactions">
                <div id="TransactionsFlexy">
                  <TabView>
                    <TabPanel header="All" className="allTrancPanel">
                      <div id='TransactionsFlexy'>
                        <div className=" row">
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction ID."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Payment For."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction Mode."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="subBtn col-lg-3">
                            <button className="cx-btn-1">Submit</button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tableBorders"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th>Sr.No.</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Payment For</th>
                              <th>Transaction Mode</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Success
                                  </label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogFailed">
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
                    <TabPanel header="Pending" className="pendingPanel">
                      <div id='TransactionsFlexy'>
                        <div className=" row">
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction ID."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Payment For."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction Mode."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="subBtn col-lg-3">
                            <button className="cx-btn-1">Submit</button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tableBorders cx-mb-20"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th>Sr.No.</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Payment For</th>
                              <th>Transaction Mode</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlog">
                                  <label className="warningTxt">Pending</label>
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
                    <TabPanel header="Success" className="successPanel">
                      <div id='TransactionsFlexy'>
                        <div className=" row">
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction ID."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Payment For."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction Mode."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="subBtn col-lg-3">
                            <button className="cx-btn-1">Submit</button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tableBorders"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th>Sr.No.</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Payment For</th>
                              <th>Transaction Mode</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Success
                                  </label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Success
                                  </label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogSucc">
                                  <label className="succTxt">
                                    Success
                                  </label>
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
                    <TabPanel header="Failed" className="failedPanel">
                      <div id='TransactionsFlexy'>
                        <div className=" row">
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction ID."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Payment For."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="searchPanel col-lg-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search By Transaction Mode."
                            />
                            {/* <img src={search} className="srchImg" alt="" /> */}
                          </div>
                          <div className="subBtn col-lg-3">
                            <button className="cx-btn-1">Submit</button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tableBorders"
                        id="feesTable"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        data-aos-delay="500"
                      >
                        <table className="table">
                          <thead id="shadowHead">
                            <tr>
                              <th>Sr.No.</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Payment For</th>
                              <th>Transaction Mode</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody className="tableBody">
                            <tr>
                              <td>1</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogFailed">
                                  <label className="failed">Failed</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogFailed">
                                  <label className="failed">Failed</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>4567891230</td>
                              <td>17-02-2023</td>
                              <td>Fees</td>
                              <td>Online Payment</td>
                              <td>
                                <span className="StatusBlogFailed">
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
                  </TabView>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Fees;
