import React, { useContext, useState } from "react";
import SubHeader from "../../../sharedComponents/SubHeader";
import Header from "../../../sharedComponents/Header";
import print_icon from "../../../assets/images/Print.svg";
import { useReactToPrint } from "react-to-print";

const InvoiceFee = () => {
  // React To Print Start
  const componentRef = React.useRef(null);

  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("old boring text");

  // const handleAfterPrint = React.useCallback(() => {}, []);

  // const handleBeforePrint = React.useCallback(() => {}, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    setLoading(true);
    setText("Loading new text...");

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        setText("New, Updated Text!");
        resolve();
      }, 2000);
    });
  }, [setLoading, setText]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "Invoice",
    onBeforeGetContent: handleOnBeforeGetContent,
    removeAfterPrint: true,
  });

  React.useEffect(() => {
    if (
      text === "New, Updated Text!" &&
      typeof onBeforeGetContentResolve.current === "function"
    ) {
      onBeforeGetContentResolve.current();
    }
  }, [onBeforeGetContentResolve.current, text]);

  return (
    <main id="cx-main" className="Invoice_fee">
      <div className="cx-main-card">
        <SubHeader />
        <div
          className="mainLandingCard cx-mb-20"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="900"
        >
          <div className="invoice-heading-wrapper" id="invoiceHeading">
            <p className="invoice-heading">Fee Invoice</p>
            <button className="cx-btn-1" onClick={handlePrint}>
              <img src={print_icon} alt="" className="me-1" /> Print
            </button>
          </div>
          {/* Main Invoice code */}
          <div className="invoice-outer-wrapper" ref={componentRef} text={text}>
            <div className="invoice-inner-wrapper">
              <table className="heading-table">
                <tbody>
                  <tr className="left-title">
                    <td className="lt-heading">Invoice</td>
                    <td className="right-invoice-details">
                      <table>
                        <tr>
                          <td>Invoice No.</td>
                          <td>IN- 1828</td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>29/09/2022</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="invoice-head">
                <tbody>
                  <tr className="address-row">
                    <td>
                      <table className="address-table">
                        <tbody>
                          <tr>
                            <td>Admission No: </td>
                            <td>6786786576</td>
                          </tr>
                          <tr>
                            <td>Name:</td>
                            <td>Sammer</td>
                          </tr>
                          <tr>
                            <td>Grade:</td>
                            <td>Plus Two</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ padding: "0 0 2.2rem 7rem" }}>
                      <table className="address-table2">
                        <tbody>
                          <tr>
                            <td>Academic Year: </td>
                            <td>Mar 2021-2023</td>
                          </tr>
                          <tr>
                            <td>Division</td>
                            <td>A</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={8}>
                      <table className="particular-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name Of Particular</th>
                            <th>Terms/ semester</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="total">1</td>
                            <td>Hostel Fees</td>
                            <td>Term 1</td>
                            <td>$33</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Sub Total</td>
                            <td className="">$33</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Discount</td>
                            <td className="">$0</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Tax/ Additional Charges</td>
                            <td className="">$</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Grand Total</td>
                            <td className="">$33</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Paid Amount</td>
                            <td className="">$0</td>
                          </tr>

                          <tr className="pt-bottom-section">
                            <td></td>
                            <td></td>
                            <td className="ptb-total ptb-border-radius-bottom-left">
                            Balance Amount To Pay
                            </td>
                            <td className="ptb-total ptb-border-radius-bottom-right">
                              $33
                            </td>
                          </tr>
                          <tr style={{"border-bottom": "1px solid rgba(30, 10, 27, 0.3)"}}>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="invoice-bottom-table">
                        <tbody>
                          <tr className="address-row">
                            <td>
                              <div className="ib-left">
                                <div className="payment-input-wrapper">
                                  <div className="pi-heading">
                                    You Have to Pay Thirty Three $ only
                                  </div>
                                  <div className="pi-amount-wrapper">
                                    <div className="pi-text">
                                      Paying Amount
                                      <span className="me-2"> *</span>
                                    </div>
                                    <div className="pi-amount">33</div>
                                  </div>
                                  <div className="pi-note">
                                    <span>* </span> Payment Gateway transaction
                                    charges 1.5% is applicable
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      <table className="invoice-bottom-table">
                        <tbody>
                          <tr className="address-row">
                            <td className="">
                              <div className="ib-right">
                                <div className="charges">
                                  <p>
                                    Transaction Charge (1.5%):{" "}
                                    <span className="mx-2">$ 0.495</span>
                                  </p>
                                </div>
                                <div className="amount-to-pay">
                                  <p>
                                    Total Amount To Pay: <span>$ 33.495</span>
                                  </p>
                                </div>
                                <button className="cx-btn-1">Pay Now</button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InvoiceFee;
