import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import SubHeader from "../../sharedComponents/SubHeader";
import topic_details_img from "../../assets/images/topic_details_img.svg";
import subtopic_icon from "../../assets/images/subtopic_icon.svg";
import star_icon from "../../assets/images/star_icon.svg";
import blank_star from "../../assets/images/blank_star.svg";
import cart_list_img from "../../assets/images/cart_list_img.svg";
import delete_icon_purple from "../../assets/images/delete_icon_purple.svg";

const MyCart = () => {
  return (
    <main id="cx-main" className="My_Cart">
      <div className="cx-main-card">
        <SubHeader />
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-content-wrapper">
              <div className="cc-heading-wrapper">
                <div className="cc-heading">
                  <p>My cart</p>
                </div>
                <div className="cc-count">
                  <p>3</p>
                </div>
              </div>

              <div className="cart-list-wrapper">
                <div className="cart-list">
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={cart_list_img} alt="" />
                    </div>
                    <div className="col-lg-9">
                      <div className="cl-text-box">
                        <div className="cl-heading">
                          Rutherford's Atomic Model
                        </div>
                        <div className="cl-name-rating">
                          <p>
                            Robert Close &nbsp; | &nbsp;
                            <span className="stars">
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={blank_star} alt="" />
                            </span>
                            <span className="rating-count">(104)</span>
                          </p>
                        </div>
                        <div className="cl-duration">2hrs 30mins</div>
                        <div className="cl-rate">300$</div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="delete-icon-wrapper">
                        <img src={delete_icon_purple} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-list">
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={cart_list_img} alt="" />
                    </div>
                    <div className="col-lg-9">
                      <div className="cl-text-box">
                        <div className="cl-heading">
                          Rutherford's Atomic Model
                        </div>
                        <div className="cl-name-rating">
                          <p>
                            Robert Close &nbsp; | &nbsp;
                            <span className="stars">
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={blank_star} alt="" />
                            </span>
                            <span className="rating-count">(104)</span>
                          </p>
                        </div>
                        <div className="cl-duration">2hrs 30mins</div>
                        <div className="cl-rate">300$</div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="delete-icon-wrapper">
                        <img src={delete_icon_purple} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-list">
                  <div className="row">
                    <div className="col-lg-2">
                      <img src={cart_list_img} alt="" />
                    </div>
                    <div className="col-lg-9">
                      <div className="cl-text-box">
                        <div className="cl-heading">
                          Rutherford's Atomic Model
                        </div>
                        <div className="cl-name-rating">
                          <p>
                            Robert Close &nbsp; | &nbsp;
                            <span className="stars">
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={star_icon} alt="" />
                              <img src={blank_star} alt="" />
                            </span>
                            <span className="rating-count">(104)</span>
                          </p>
                        </div>
                        <div className="cl-duration">2hrs 30mins</div>
                        <div className="cl-rate">300$</div>
                      </div>
                    </div>
                    <div className="col-lg-1">
                      <div className="delete-icon-wrapper">
                        <img src={delete_icon_purple} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="order-summary-wrapper">
              <div className="os-heading-wrapper">
                <p>Order Summary</p>
              </div>
              <div className="order-summary-table">
                <table>
                  <tr>
                    <td>Rutherford's Atomic Model</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td className="author">Robert Close</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Rutherford's Atomic Model</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td className="author">Robert Close</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Rutherford's Atomic Model</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td className="author">Robert Close</td>
                    <td></td>
                  </tr>
                </table>
              </div>
              <div className="order-summary-table">
                <table>
                  <tr>
                    <td>Total</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td>Service Cost</td>
                    <td>$300</td>
                  </tr>
                  <tr>
                    <td>Coupon Applied</td>
                    <td>0</td>
                  </tr>
                </table>
              </div>
              <button className="cx-btn-1">Proceed To Pay ( $600)</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
