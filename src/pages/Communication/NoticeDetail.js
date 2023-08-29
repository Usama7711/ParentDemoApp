import React from 'react'
import SubHeader from '../../sharedComponents/SubHeader'
import Full_banner from "../../assets/images/Full_banner.svg";

const NoticeDetail = () => {
    return (
        <div className="cx-main-card" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="900" id="NoticeDetail">
            <SubHeader />
            <div className="main_wrapper">
                <div className="head">
                    <p className="title">
                    Job/Volunteer Opportunities
                    </p>
                    <p className="date">
                        Posted on December 12, 2022 By <span>Douglas Klutz</span>
                    </p>
                </div>
                <div className="body">
                    <img src={Full_banner} alt="" />
                    <p className="qution">
                        What is Job/Volunteer Opportunities ?
                    </p>
                    <p className="answer">
                        A volunteer job is a non-paid position where you assist an organization by providing volunteer labor for a variety of tasks. Your responsibilities depend entirely on the type of organization for which you volunteer. There are many different types of volunteer positions
                    </p>
                    <p className="answer">
                        Volunteers are individuals who freely offer their time, labor, and expertise. Volunteers often work for schools or NGOs, where they typically receive training and report to designated senior staff.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoticeDetail