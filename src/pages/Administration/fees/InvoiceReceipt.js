import React, { useContext, useState } from "react";
import SubHeader from "../../../sharedComponents/SubHeader";
import Header from "../../../sharedComponents/Header";
import print_icon from "../../../assets/images/Print.svg";
import { useReactToPrint } from "react-to-print";

const InvoiceReceipt = () => {
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
          <div className="invoice-heading-wrapper">
            <p className="invoice-heading">Fee Receipt</p>
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
                    <td className="lt-heading">Receipt</td>
                    <td className="right-invoice-details">
                      <table>
                        <tr>
                          <td>Invoice No.</td>
                          <td>IN- 1828</td>
                        </tr>
                        <tr>
                          <td>Invoice Date</td>
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
                            <td>Alexander</td>
                          </tr>
                          <tr>
                            <td>Grade:</td>
                            <td>10th A</td>
                          </tr>
                          <tr>
                            <td>Mode of Transaction:</td>
                            <td>By Cash</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style={{ padding: "0 0 0 10rem" }}>
                      <table className="address-table2">
                        <tbody>
                          <tr>
                            <td>Academic Year: </td>
                            <td>Mar 2021-2023</td>
                          </tr>
                          <tr>
                            <td>Receipt No:</td>
                            <td>R- 1543</td>
                          </tr>
                          <tr>
                            <td>Transaction ID:</td>
                            <td>1784f9206</td>
                          </tr>
                          <tr>
                            <td>Paid Date:</td>
                            <td>22/12/2021 , 12:30Pm</td>
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
                            <td>Bus Fare</td>
                            <td>Term 2</td>
                            <td>$0</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Sub Total</td>
                            <td className="">$0</td>
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
                            <td className="">$100</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td className="">Grand Total</td>
                            <td className="">$100</td>
                          </tr>

                          <tr className="pt-bottom-section">
                            <td></td>
                            <td></td>
                            <td className="ptb-total ptb-border-radius-bottom-left">
                            Total Amount Paid
                            </td>
                            <td className="ptb-total ptb-border-radius-bottom-right">
                              $100
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
                                  Payment Received One Hundred Only
                                  </div>
                                  <div className="pi-amount-wrapper">
                                    <div className="pi-text">
                                    Thank You.
                                      
                                    </div>
                                    
                                  </div>
                                 
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>
                      
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

export default InvoiceReceipt;
