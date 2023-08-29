import React, { useRef } from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import { SpeedDial } from "primereact/speeddial";
import double_tick from "../../assets/images/Chating_images/double_tick.svg";
import hr_three_dot from "../../assets/images/Chating_images/hr_three_dot.svg";
import send_btn from "../../assets/images/Chating_images/send_btn.svg";
import profile_img from "../../assets/images/Chating_images/profile_img.svg";
import Me from "../../assets/images/Chating_images/Me.jpg";
import ic_online from "../../assets/images/Chating_images/ic_online.svg";
import profile_img2 from "../../assets/images/Chating_images/profile_img2.svg";
import profile_img3 from "../../assets/images/Chating_images/profile_img3.svg";
import profile_img4 from "../../assets/images/Chating_images/profile_img4.svg";
import profile_img5 from "../../assets/images/Chating_images/profile_img5.svg";
import ic_minus_red from "../../assets/images/Chating_images/ic_minus_red.svg";
import ic_come_back from "../../assets/images/Chating_images/ic_come_back.svg";
import ic_on_call from "../../assets/images/Chating_images/ic_on_call.svg";
import ic_offline from "../../assets/images/Chating_images/ic_offline.svg";
import Delete from "../../assets/images/Chating_images/Delete.svg";
import ViewAuthorised from "../../assets/images/ViewAuthorised.svg";
import { Link } from 'react-router-dom';
import { Dropdown, Tab } from 'react-bootstrap';

const ChatBox = () => {
    const toast = useRef(null);

    const items = [
        {
            label: "Add",
            icon: "pi pi-pencil",
            command: () => {
                toast.current.show({
                    severity: "info",
                    summary: "Add",
                    detail: "Data Added",
                });
            },
        },
        {
            label: "Update",
            icon: "pi pi-refresh",
            command: () => {
                toast.current.show({
                    severity: "success",
                    summary: "Update",
                    detail: "Data Updated",
                });
            },
        },
        {
            label: "Delete",
            icon: "pi pi-trash",
            command: () => {
                toast.current.show({
                    severity: "error",
                    summary: "Delete",
                    detail: "Data Deleted",
                });
            },
        },
        {
            label: "Upload",
            icon: "pi pi-upload",
            command: () => {
                window.location.hash = "/fileupload";
            },
        },
        {
            label: "React Website",
            icon: "pi pi-external-link",
            command: () => {
                window.location.href = "https://facebook.github.io/react/";
            },
        },
    ];
    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            {/* <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="ChatBox"> */}
            <div className=" right-chat-section right-chat-custom-height-1">
                <Tab.Content>
                    <Tab.Pane eventKey="1">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={Me} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">Freya</label>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Delete} alt="" />
                            </div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={Me} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={Me} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={Me} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={Me} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img5} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_on_call} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">Noah</label>
                                </div>
                            </div>
                            <div className="right">
                                <img src={Delete} alt="" />
                            </div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img5} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_on_call} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img5} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_on_call} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img5} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_on_call} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img5} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_on_call} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img4} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_offline} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">Harry</label>
                                </div>
                            </div>
                            <div className="right"><img src={Delete} alt="" /></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img4} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_offline} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img4} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_offline} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img4} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_offline} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img4} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_offline} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img3} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">Amelia</label>
                                </div>
                            </div>
                            <div className="right"><img src={Delete} alt="" /></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img3} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img3} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img3} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img3} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="5">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img2} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_come_back} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">Ezra</label>
                                </div>
                            </div>
                            <div className="right"><img src={Delete} alt="" /></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img2} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_come_back} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img2} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_come_back} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img2} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_come_back} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={profile_img2} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_come_back} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="6">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">John Doe</label>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="7">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">John Doe</label>
                                </div>
                            </div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="8">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">John Doe</label>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>

                    <Tab.Pane eventKey="9">
                        <div className="heading-chat-section">
                            <div className="left">
                                <div className="left-profile-pic">
                                    <Link to="">
                                        <img src={profile_img} alt="" />
                                    </Link>
                                    <span className="indication-img">
                                        <img src={ic_online} alt="" />
                                    </span>
                                </div>
                                <div className="name">
                                    <label htmlFor="">John Doe</label>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>
                        <div className="chatting-section">
                            <div className="message-main">
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>

                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                                <div className="send-msg">
                                    <div className="inner_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="send-msg-main">
                                        <p className="msg-text">
                                            Message goes here Message goes here Message goes here
                                        </p>
                                    </div>
                                </div>
                                <div className="time-date-sms-send">2:27 Pm</div>
                                <div className="receive-msg">
                                    <div className="innerSEND_profile_pic">
                                        <Link to="">
                                            <img src={ViewAuthorised} alt="" />
                                        </Link>
                                        <span className="indication-img">
                                            <img src={ic_online} alt="" />
                                        </span>
                                    </div>
                                    <div className="right-receive-msg">
                                        <div className="receive-msg-main">
                                            <p className="msg-text">
                                                Hello! Finally found the time to write to you) I need your help in creating interactive animations for my mobile application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="time-date-sms-receive">2:27 Pm</div>
                            </div>
                        </div>
                        <div className="send_section_btn_inputs">

                            <div className="text-input">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message here"
                                />
                            </div>
                            <div className="send-btn">
                                <Link to="#">
                                    <img src={send_btn} alt="" />
                                </Link>
                            </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
            </div>
            {/* </div> */}
        </div>
    )
}

export default ChatBox