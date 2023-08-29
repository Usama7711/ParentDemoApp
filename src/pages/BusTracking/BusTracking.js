import React, { useState } from "react";
import SubHeader from "../../sharedComponents/SubHeader";
import { TabPanel, TabView } from "primereact/tabview";
import { Form } from "react-bootstrap";
import CurrentLocation from "../../assets/images/CurrentLocation.svg";
import ActualTime from "../../assets/images/ActualTime.svg";
import Pre_stop from "../../assets/images/Pre_stop.svg";
import Live_stop from "../../assets/images/Live_stop.svg";
import Next_stop from "../../assets/images/Next_stops.svg";
import Left_Arrow from "../../assets/images/Left_Arrow.svg";
import Stop_Home from "../../assets/images/Stop_Home.svg";
import BusLogo from "../../assets/images/BusLogo.svg";
import CallingProfile from "../../assets/images/CallingProfile.svg";
import telephone from "../../assets/images/telephone.svg";
import MapComponent from "../../sharedComponents/MapComponent";

const BusTracking = () => {
  const [MapList, setMapList] = useState(false);
  console.log("MapList", MapList);
  return (
    <main id="cx-main" className="Dashboard">
      <div
        className="cx-main-card"
        // data-aos="zoom-in"
        // data-aos-duration="500"
        id="Bustracking_main"
      >
        <SubHeader />
        <div
          className="BusTacking_Top_tabs"
          data-aos="zoom-in"
          data-aos-duration="500"
          id="cx-wrapper"
        >
          <TabView>
            <TabPanel header="Pick-Up">
              <div className="PickUP row">
                <div
                  className={
                    MapList === true
                      ? "Mapsection col-lg-12"
                      : "RouteSummary col-lg-8"
                  }
                >
                  <div className="RouteSummary_main">
                    <div className="top">
                      <p className="heading">Route Summary</p>
                      <div className="switchCase">
                        <label
                          for="custom-switch"
                          className={MapList === true ? "list_view" : "active"}
                        >
                          List View
                        </label>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          onChange={() => setMapList(!MapList)}
                        />
                        <label
                          for="custom-switch"
                          className={MapList === true ? "active" : "list_view"}
                        >
                          Map View
                        </label>
                      </div>
                    </div>
                    {MapList === false ? (
                      <div className="RouteSummary_body">
                        <div className="top_body">
                          <img src={ActualTime} alt="" />
                          <p>Actual Time</p>
                          <img src={CurrentLocation} alt="" />
                          <p>Current Location</p>
                        </div>
                        <div className="Track_Body">
                          <div className="Track_Head">
                            <p className="shadule_heading">Scheduled Time</p>
                            <p className="busStop">Bus Stops</p>
                            <p></p>
                          </div>
                          <div className="Step_wise_Route">
                            <div className="Timeing">
                              <div className="time_slot">
                                <p className="startPoint">Start Point</p>
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                              <div className="time_slot">
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                              <div className="time_slot">
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                              <div className="time_slot">
                                <p className="EndPoit">End Point</p>
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                            </div>
                            <div className="Route">
                              <div className="Route_path"></div>
                              <div className="BusLogo">
                                <img src={BusLogo} alt="" />
                              </div>
                              <div className="step_main">
                                <div className="Pre_stop">
                                  <img src={Pre_stop} alt="" />
                                </div>
                                <div className="Live_Stop">
                                  <img src={Live_stop} alt="" />
                                </div>
                                <div className="Next_stop">
                                  <img src={Next_stop} alt="" />
                                </div>
                                <div className="Next_stop">
                                  <img src={Next_stop} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="Station">
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop active">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <MapComponent />
                    )}
                  </div>
                </div>
                {MapList === false ? (
                  <div className="pickUo_Details col-lg-4">
                    <div className="TripDetails">
                      <div className="heading">
                        <p>Trip Details</p>
                      </div>
                      <div className="Details row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Estimated Time</label>
                          <p>30mins</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Estimated Distance</label>
                          <p>3kms</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Bus Name</label>
                          <p>Volvo</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Period</label>
                          <p>Morning</p>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">Bus Plate No.</label>
                          <p>MH-12-AA-5022</p>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">Timing/ Duration</label>
                          <p>09:00 AM - 09:30 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="StaffDetails">
                      <div className="heading">
                        <p>Staff Details</p>
                      </div>
                      <div className="Calling_card_single">
                        <div className="left_card">
                          <img src={CallingProfile} alt="" />
                          <div className="Name">
                            <label htmlFor="">Driver Name</label>
                            <p>Chinnar Dev</p>
                          </div>
                        </div>
                        <div className="Call_logo">
                          <img src={telephone} alt="" />
                        </div>
                      </div>
                      <div className="Calling_card_single">
                        <div className="left_card">
                          <img src={CallingProfile} alt="" />
                          <div className="Name">
                            <label htmlFor="">Driver Name</label>
                            <p>Chinnar Dev</p>
                          </div>
                        </div>
                        <div className="Call_logo">
                          <img src={telephone} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </TabPanel>
            <TabPanel header="Drop">
              <div className="PickUP row">
                <div
                  className={
                    MapList === true
                      ? "Mapsection col-lg-12"
                      : "RouteSummary col-lg-8"
                  }
                >
                  <div className="RouteSummary_main">
                    <div className="top">
                      <p className="heading">Route Summary</p>
                      <div className="switchCase">
                        <label
                          for="custom-switch"
                          className={MapList === true ? "list_view" : "active"}
                        >
                          List View
                        </label>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          onChange={() => setMapList(!MapList)}
                        />
                        <label
                          for="custom-switch"
                          className={MapList === true ? "active" : "list_view"}
                        >
                          Map View
                        </label>
                      </div>
                    </div>
                    {MapList === false ? (
                      <div className="RouteSummary_body">
                        <div className="top_body">
                          <img src={ActualTime} alt="" />
                          <p>Actual Time</p>
                          <img src={CurrentLocation} alt="" />
                          <p>Current Location</p>
                        </div>
                        <div className="Track_Body">
                          <div className="Track_Head">
                            <p className="shadule_heading">Scheduled Time</p>
                            <p className="busStop">Bus Stops</p>
                            <p></p>
                          </div>
                          <div className="Step_wise_Route">
                            <div className="Timeing">
                              <div className="time_slot">
                                <p className="startPoint">Start Point</p>
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                              <div className="time_slot">
                                <p className="EndPoit">End Point</p>
                                <p className="start">09:30AM</p>
                                <p className="end">09:30AM</p>
                              </div>
                            </div>
                            <div className="Route">
                              <div className="Route_path"></div>
                              <div className="BusLogo DropBusLogo">
                                <img src={BusLogo} alt="" />
                              </div>
                              <div className="step_main">
                                <div className="Pre_stop">
                                  <img src={Pre_stop} alt="" />
                                </div>
                                <div className="Live_Stop">
                                  <img src={Next_stop} alt="" />
                                </div>
                                <div className="Next_stop">
                                  <img src={Next_stop} alt="" />
                                </div>
                                <div className="Next_stop">
                                  <img src={Next_stop} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="Station">
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="single_stop">
                                <img
                                  src={Left_Arrow}
                                  className="arrow_left"
                                  alt=""
                                />
                                <div className="statio_Name">
                                  <div className="logo">
                                    <img src={Stop_Home} alt="" />
                                  </div>
                                  <div className="stop_name">
                                    <p>
                                      Kamaleshwaram, Thiruvananthapuram, Kerala
                                      - 695009, India
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <MapComponent/>
                    )}
                  </div>
                </div>
                {MapList === false ? (
                  <div className="pickUo_Details col-lg-4">
                    <div className="TripDetails">
                      <div className="heading">
                        <p>Trip Details</p>
                      </div>
                      <div className="Details row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Estimated Time</label>
                          <p>30mins</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Estimated Distance</label>
                          <p>3kms</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Bus Name</label>
                          <p>Volvo</p>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="">Period</label>
                          <p>Morning</p>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">Bus Plate No.</label>
                          <p>MH-12-AA-5022</p>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">Timing/ Duration</label>
                          <p>09:00 AM - 09:30 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="StaffDetails">
                      <div className="heading">
                        <p>Staff Details</p>
                      </div>
                      <div className="Calling_card_single">
                        <div className="left_card">
                          <img src={CallingProfile} alt="" />
                          <div className="Name">
                            <label htmlFor="">Driver Name</label>
                            <p>Chinnar Dev</p>
                          </div>
                        </div>
                        <div className="Call_logo">
                          <img src={telephone} alt="" />
                        </div>
                      </div>
                      <div className="Calling_card_single">
                        <div className="left_card">
                          <img src={CallingProfile} alt="" />
                          <div className="Name">
                            <label htmlFor="">Driver Name</label>
                            <p>Chinnar Dev</p>
                          </div>
                        </div>
                        <div className="Call_logo">
                          <img src={telephone} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </main>
  );
};

export default BusTracking;
