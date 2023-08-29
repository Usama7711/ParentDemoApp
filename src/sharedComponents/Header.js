import React from "react";
import user_img from "../assets/images/user_img.svg";
import ic_bell from "../assets/images/ic_bell.svg";
import { Accordion, Button, Dropdown } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ic_active_arrow from "../assets/images/ic_active_arrow.svg";

const Header = () => {
  return (
    <main className="main-header">
      <div className="header-wrapper">
        <div className="left">
          <div className="u-img">
            <img src={user_img} alt="" />
          </div>
          <div className="u-name header-u-name">
            <div className="name">Anna Newman</div>
            <div className="shift">6th D, Regular Shift</div>
          </div>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <div className="arrow">
                <img src={ic_active_arrow} alt="" />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item>
                <div className="d-item">
                  <div className="u-img">
                    <img src={user_img} alt="" />
                  </div>
                  <div className="u-name">
                    <div className="name">Anna Newman</div>
                    <div className="shift">6th D, Regular Shift</div>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="right">
          <div className="bell" id="bell">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <div className="arrow ">
                  <span></span>
                  <img src={ic_bell} alt="" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name ">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
                <Dropdown.Item>
                  <div className="d-item">
                    <div className="u-img">
                      <img src={ic_bell} alt="" />
                    </div>
                    <div className="u-name">
                      <label className="name">
                        Anna’a Missed the lecture today.
                      </label>
                    </div>
                  </div>
                  <div className="shift">4 hours ago</div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="profile" id="profile">
            <div className="u-img">
              <img src={user_img} alt="" />
            </div>
            <div className="u-name header-u-name">
              <div className="name">Anna Newman</div>
              <div className="shift">6th D, Regular Shift</div>
            </div>

            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <div className="arrow">
                  <img src={ic_active_arrow} alt="" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <div className="lan-menu">
                          <label >My Language</label>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <div className="line-menu"></div>
                          <li>
                            <Link to="#">English</Link>
                          </li>
                          <li>
                            <Link to="#">Arbic</Link>
                          </li>
                          <li>
                            <Link to="#">Hindi</Link>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <div className="h-menu-item">
                      <Link to="#">Change School</Link>
                    </div>
                    <div className="h-menu-item">
                      <Link to="/">Logout</Link>
                    </div>
                  </Accordion>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
