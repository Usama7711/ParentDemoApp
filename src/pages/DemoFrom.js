import React, { useState } from "react";
import auth_bg from "../assets/images/bread_bg.svg";
import logo from "../assets/images/logo.svg";
import ic_otp_btn from "../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../assets/images/ic_register_btn.svg";
import ic_copyright from "../assets/images/ic_copyright.svg";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
// import PhoneInput from 'react-phone-input-2'


const DemoFrom = () => {
    const [countryList, setCountryList] = useState("")
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        country: "",
        city: "",
        number: ""
    })

    const handleChangeName = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, "name": value }));
    };
    //Email
    const handleChangeEmail = (e) => {
        const { email, value } = e.target;
        setFormData((prevData) => ({ ...prevData, "email": value }));
    };
    // Country
    const handleCountryChange = (code) => {
        setCountryList(code);
        // handelClickCountry();
    };
    console.log(countryList)
    //CIty
    const handleChangeCity = (e) => {
        const { city, value } = e.target;
        setFormData((prevData) => ({ ...prevData, "city": value }));
    };


    // const handleCountryChange = (code) => {
    //     setCountryList(code);
    //     // handelClickCountry();
    // };


    console.log("Form Data", formData)
    return (
        <main className="DemoFormMian">
            <div className="DemoFrom-wrapper">
                <div className="login-wrapper">
                    <div
                        className="auth-card"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >
                        <img src={logo} alt="logo" className="brand-logo" />
                        <Form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        <Form.Control
                                            className="formsForValid"
                                            // re
                                            autocomplete="nope"
                                            type="text"
                                            placeholder="Enter Your Good Name"
                                            onChange={handleChangeName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your Name.
                                        </Form.Control.Feedback>
                                        <span className="legendHere">
                                            Name<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        <Form.Control
                                            className="formsForValid"
                                            // required
                                            autocomplete="nope"
                                            type="emial"
                                            placeholder="Enter Your Email ID"
                                            onChange={handleChangeEmail}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your Email.
                                        </Form.Control.Feedback>
                                        <span className="legendHere">
                                            Email<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                                {/* Cun */}
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        {/* <label className="formLabel">Country</label> */}
                                        <ReactFlagsSelect
                                            className="formsForValid countyListy "
                                            selected={countryList}
                                            onSelect={handleCountryChange}
                                            searchable
                                        />
                                        <span className="legendHere">
                                            Country<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                        {/* <Form.Control
                                            className="formsForValid"
                                            // required
                                            autocomplete="nope"
                                            type="text"
                                            placeholder="Enter Your Email ID"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your Name.
                                        </Form.Control.Feedback>
                                        <span className="legendHere">
                                            Name<span className="ashhStar"> &#42;</span>{" "}
                                        </span> */}
                                    </div>
                                </div>
                                {/* pho */}
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        <PhoneInput
                                            country={countryList?.toLocaleLowerCase()}
                                            className="formsForValid"
                                            onChange={(number, country) => {
                                                setFormData((prevData) => ({ ...prevData, "number": '+' + number }));
                                                // handleChangeNumber()
                                            }}

                                        />

                                        {/* <Form.Control
                                            className="formsForValid"
                                            // required
                                            autocomplete="nope"
                                            type="text"
                                            placeholder="Enter Your Email ID"
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your Name.
                                        </Form.Control.Feedback> */}
                                        <span className="legendHere">
                                            Phone Number<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                                {/* city */}
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        <Form.Control
                                            className="formsForValid"
                                            // required
                                            autocomplete="nope"
                                            type="text"
                                            placeholder="Enter Your City Name"
                                            onChange={handleChangeCity}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your City Name.
                                        </Form.Control.Feedback>
                                        <span className="legendHere">
                                            City<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row auth-btns m-0">
                                <button
                                    className="login-btn col-12"
                                >
                                    Verify Details
                                </button>
                            </div>
                            <div className="footer-content">
                                <label>
                                    2023
                                    <img src={ic_copyright} alt="" />
                                    Edsys for Education
                                </label>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DemoFrom