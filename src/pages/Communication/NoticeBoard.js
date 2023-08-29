import React from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import NoticeBoardImg from "../../assets/images/NoticeBoard.svg";
import Forword from "../../assets/images/Forword.svg";
import profile_img5 from "../../assets/images/Chating_images/profile_img5.svg";
import { Link } from 'react-router-dom';

 
const NoticeBoard = () => {
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="NoticeBoard">
            <SubHeader />
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">Job/Volunteer Opportunities</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span> Douglas Klutz </span></p>
                        <div className="bottom">
                            <p className="discription">Searching for job and volunteer opportunities takes time that most college students just don't have. This bulletin board idea posts assorted opportunities especially for college students. To make it even more accessible, create tear offs listing the position and contact information.</p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">Free Community Workshops & Resources</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span> John Beyers </span></p>
                        <div className="bottom">
                            <p className="discription">Most communities offer interesting lectures, workshops and resources that can be very beneficial for college students. The goal of this board is to profile relevant events, organizations and resources for students.</p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">Conflict Resolution Ideas</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span> Rona Miles </span></p>
                        <div className="bottom">
                            <p className="discription">Many college students deal with roommates. This can create great stress in their lives if they are not equipped for the challenges of living with another. This board focuses on strategies for conflict resolution and compromise with roommates.</p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">Smart Social Media Practices</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span> Eli Stav </span></p>
                        <div className="bottom">
                            <p className="discription">Many college students post things to social media that should have remained private. This board educates students on the importance of governing their social media activity.</p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">See Something, Say Something</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span>  Eliot Spitzer </span></p>
                        <div className="bottom">
                            <p className="discription">Campus security is a hot topic for college students and their families. This bulletin board promotes awareness and safety measures for college students in an effort to prevent tragedy.
                            </p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="single_card">
                        <img src={NoticeBoardImg} alt="" className="banner" />
                        <p className="title">Student Services</p>
                        <p className="date">Category <span> School Notice </span></p>
                        <p className="date">Dec 12, 2022 By <span> Devon Wray Hanahan </span></p>
                        <div className="bottom">
                            <p className="discription">Most colleges and universities offer countless offices, groups and clubs geared toward meeting the needs of students, but they may not be well known to students. This bulletin board is designed to feature the available services for students on campus.</p>
                            <Link to="/NoticeDetail"><img src={Forword} alt="" className='forword' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoticeBoard