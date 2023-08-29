import React from 'react'
import Nav from "react-bootstrap/Nav";
import profile_img from "../../assets/images/Chating_images/profile_img.svg";
import profile_img2 from "../../assets/images/Chating_images/profile_img2.svg";
import profile_img3 from "../../assets/images/Chating_images/profile_img3.svg";
import profile_img4 from "../../assets/images/Chating_images/profile_img4.svg";
import profile_img5 from "../../assets/images/Chating_images/profile_img5.svg";
import ic_online from "../../assets/images/Chating_images/ic_online.svg";
import ic_minus_red from "../../assets/images/Chating_images/ic_minus_red.svg";
import ic_come_back from "../../assets/images/Chating_images/ic_come_back.svg";
import ic_on_call from "../../assets/images/Chating_images/ic_on_call.svg";
import Me from "../../assets/images/Chating_images/Me.jpg";
import ic_offline from "../../assets/images/Chating_images/ic_offline.svg";
import ViewAuthorised from "../../assets/images/ViewAuthorised.svg";
import { Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubHeader from '../../sharedComponents/SubHeader';
import ChatBox from './ChatBox';

const Chat = () => {
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="Chat">
            <SubHeader />
            <div className="main-chat">
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <div className="row d-flex flex-wrap justify-content-around">
                        <div className="col-lg-3 col-md-4 col-md-3">
                            <div className="left-chat-section">
                                <div className="left-heading-chat">
                                    <div className="left-head">
                                        <input
                                            type="search"
                                            className="form-control"
                                            placeholder="Search"
                                        />
                                    </div>
                                </div>
                                <div className="pinned-section">
                                    <div className="left">
                                        <label htmlFor="">Messages</label>
                                    </div>
                                </div>
                                <div className="chat-user-lists">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="1">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={Me} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Freya</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">02/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: Hello !
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="2">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img5} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_on_call} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Noah</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">11/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: Hello sir, Good Morning
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="3">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img4} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_offline} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Harry</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">11/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You:ok fine.
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="4">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img3} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Amelia</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">9/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: I'm waiting for you reply
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="5">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img2} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_come_back} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Ezra</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">17/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: thanks sir
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="6">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img5} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Muhammad</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">0/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: Walikumasslam ,
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="7">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img4} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Alexander</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">25/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: Hello sir, Good Morning
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="8">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img3} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Frankie</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">11/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You:Good Morning
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item>
                                            <Nav.Link eventKey="9">
                                                <div className="user-chat-tab">
                                                    <div className="left-profile-pic">
                                                        <Link to="">
                                                            <img src={profile_img2} alt="" />
                                                        </Link>
                                                        <span className="indication-img">
                                                            <img src={ic_online} alt="" />
                                                        </span>
                                                    </div>

                                                    <div className="right-name-date ">
                                                        <div className="top-section ">
                                                            <div className="name ">
                                                                <label htmlFor="">Michael</label>
                                                            </div>
                                                            <div></div>
                                                            <div className="date">
                                                                <label htmlFor="">11/1</label>
                                                            </div>
                                                        </div>

                                                        <div className="bottom-section ">
                                                            <label htmlFor="">
                                                                You: Hello sir, Good Morning
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                        <ChatBox />
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}

export default Chat