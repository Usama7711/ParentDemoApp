import React, { useContext, useEffect, useState } from "react";
import auth_bg from "../assets/images/bread_bg.svg";
import logo from "../assets/images/logo.svg";
import ic_otp_btn from "../assets/images/ic_otp_btn.svg";
import ic_register_btn from "../assets/images/ic_register_btn.svg";
import ic_copyright from "../assets/images/ic_copyright.svg";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
// import PhoneInput from 'react-phone-input-2'
import { AppContext } from "../context/AppContext";
import { Modal } from "react-bootstrap";


const DemoFrom = () => {
    const { setSectionValue, sectionValue, setToken, token , setFormData , formData} = useContext(AppContext);
    const [countryList, setCountryList] = useState("")
    const [oTPFiled, setOTPFiled] = useState(false)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [otpModal, setOpenModal] = useState(false);
    const [getOtp, setGetOtp] = useState("");
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     country: "",
    //     city: "",
    //     number: "",
    //     section: '',
    // })


    const handleChange = (e) => {
        const newValue = e.target.value;
        setSectionValue(newValue);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false || formData.country === '') {
            event.stopPropagation();
        } else {
            // Submit the form or perform further actions
            console.log('Form is valid and can be submitted:', formData);
        }
        setValidated(true);
    };
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
        setFormData((prevData) => ({ ...prevData, "country": code }));
        // handelClickCountry();
    };
    //Section
    const handleSectionChange = (event) => {
        setFormData({ ...formData, section: event.target.value });
        setSectionValue(event.target.value)
    };
    //CIty
    const handleChangeCity = (e) => {
        const { city, value } = e.target;
        setFormData((prevData) => ({ ...prevData, "city": value }));
    };

    const BaseURL = "https://api-demo.edsys.in:3008"

    // Get Details
    const [geoData, setGeoData] = useState("")
    const geoDataFun = () => {
        axios.get("https://api-demo.edsys.in:3008/api/demo/form/get-geo-details").then((res, err) => {
            setGeoData(res.data.data)
            setCountryList(res.data.data.country_code)
            setFormData((prevData) => ({ ...prevData, "country": res.data.data.country_code }));
            setFormData((prevData) => ({ ...prevData, "city": res.data.data.city }));
        })
    }
    useEffect(() => {
        geoDataFun()
    }, [])
    // otp Send
    const handleSendOtp = () => {

        let url = 'https://api-demo.edsys.in:3008/api/demo/form/handle-otp';
        const data = {
            "action": "send",
            "number": (formData.number),
            "email": (formData.email),
        };
        if (formData.number.length < 10) {
            alert("Please enter a valid phone number")
        } else {

            axios.post(url, data).then((response) => {
                setOpenModal(true)
            }).catch((err) => {
                console.log(err)
                alert("Please enter a valid phone number")
                setOpenModal(false)
            })
            // setOpenModal(true)
        }
        axios.post(url, data).then((response) => {
            // setOtpfiled(true)
        }).catch((err) => {
            console.log(err)
            setOTPFiled(false)
        })
    };


    // Form Submit 
    const handleFormOtp = (e) => {
        // setIsLoading(true);
        let url = 'https://api-demo.edsys.in:3008/api/demo/form/submit-details';
        const data = {
            "name": (formData.name),
            "email": (formData.email),
            "number": (formData.number),
            "country": (formData.country),
            "city": (formData.city),
            //   "utm_source"/: getUTMsource
        };
        axios.post(url, data).then((response) => {
            handleVerifayOtp()
        }).catch((err) => {
            console.log(err)
        })
    };

    const handleVerifayOtp = () => {
        let url = 'https://api-demo.edsys.in:3008/api/demo/form/handle-otp';
        const data = {
            "action": "verify",
            "number": (formData.number),
            "email": (formData.email),
            "otp": getOtp,
        };
        axios.post(url, data).then((response) => {
            setToken(response.data.token)
            if (sectionValue === "attendance") {
                navigate("/Calendar")
            } else if (sectionValue === "academics") {
                navigate("/Curriculum")
            } else if (sectionValue === "assessment") {
                navigate("/Assessment")
            } else if (sectionValue === "administration") {
                navigate("/MyKids")
            } else if (sectionValue === "bus") {
                navigate("/BusTracking")
            } else if (sectionValue === "cashlessWallet") {
                navigate("/CashlessWallet")
            } else if (sectionValue === "eLearning") {
                navigate("/Elearning")
            } else if (sectionValue === "communication") {
                navigate("/Chat")
            } else if (sectionValue === "myDiary") {
                navigate("/MyDiary")
            } else if (sectionValue === "settings") {
                navigate("/PersonalDetails")
            } else {
                navigate("/dashboard")
            }
        }).catch((err) => {
            console.log(err);
            alert("Invalid OTP");
        })
    };


    

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
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input">
                                        <Form.Control
                                            className="formsForValid"
                                            required
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
                                            required
                                            autocomplete="nope"
                                            type="email"
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
                                        <ReactFlagsSelect
                                            className="formsForValid countyListy"
                                            selected={formData.country}
                                            onSelect={handleCountryChange}
                                            searchable
                                        />
                                        {formData.country ? (
                                            <Form.Control.Feedback type="valid">
                                                Country selected.
                                            </Form.Control.Feedback>
                                        ) : (
                                            <Form.Control.Feedback type="invalid">
                                                Please select a country.
                                            </Form.Control.Feedback>
                                        )}
                                        <span className="legendHere">
                                            Country<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                                {/* pho */}
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST margin-b-input phoneNumberFild">
                                        <PhoneInput
                                            country={countryList?.toLocaleLowerCase()}
                                            inputProps={{
                                                required: true,
                                            }}
                                            onChange={(number, country) => {
                                                setFormData((prevData) => ({ ...prevData, "number": '+' + number }));
                                            }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid phone number.
                                        </Form.Control.Feedback>
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
                                            required
                                            autocomplete="nope"
                                            type="text"
                                            placeholder="Enter Your City Name"
                                            onChange={handleChangeCity}
                                            defaultValue={geoData.city}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please Type Your City Name.
                                        </Form.Control.Feedback>
                                        <span className="legendHere">
                                            City<span className="ashhStar"> &#42;</span>{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="fieldSetCUST">
                                        <span className='legendHere'>Section<span className='ashhStar'> &#42;</span> </span>
                                        <Form.Select
                                            className="form-select"
                                            required
                                            aria-label="Default select example"
                                            onChange={handleSectionChange}
                                            value={formData.section} // Bind the selected value to the state
                                        >
                                            <option value="">Select Section</option>
                                            <option value="dashboard">Dashboard</option>
                                            <option value="attendance">Attendance</option>
                                            <option value="academics">Academics</option>
                                            <option value="eLearning">e-Learning</option>
                                            <option value="assessment">Assessment</option>
                                            <option value="administration">Administration</option>
                                            <option value="cashlessWallet">Cashless Wallet</option>
                                            <option value="bus">Bus</option>
                                            <option value="communication">Communication</option>
                                            <option value="myDiary">My Diary</option>
                                            <option value="settings">Settings</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            Please Select Section.
                                        </Form.Control.Feedback>
                                    </div>
                                </div>
                            </div>

                            <div className="row auth-btns m-0">
                                <button
                                    className="login-btn col-12"
                                    onClick={() => { handleSendOtp() }}
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
            <Modal
                // size="md"
                centered
                show={otpModal}
            // onHide={() => setOpenModal(false)}
            >
                <Modal.Header>
                    <Modal.Title>
                        Verify Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalHeadOTP">
                        <p>Hii <span>{formData.name}</span></p>
                        <p>OTP send on your Phone number or Email</p>
                    </div>
                    <div className="fieldSetCUST margin-b-input">
                        <Form.Control
                            className="formsForValid"
                            required
                            autocomplete="nope"
                            type="text"
                            style={{ textAlign: "center" }}
                            placeholder="Enter Your 6 digin OTP"
                            onChange={(e) => {
                                setGetOtp(e.target.value)
                            }}
                            maxLength={6}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please Type Your otp.
                        </Form.Control.Feedback>
                        <span className="legendHere">
                            OTP<span className="ashhStar"> &#42;</span>{" "}
                        </span>
                    </div>
                    <div className="borderModalBelow"></div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="modalBtns">
                        <button className="cancelBtn" onClick={() => setOpenModal(false)}>Cancel</button>
                        <button className="YesBtn" onClick={() => { handleFormOtp() }}>Submit</button>
                    </div>
                </Modal.Footer>
            </Modal>
        </main>
    )
}

export default DemoFrom