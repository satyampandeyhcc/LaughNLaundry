import React, { useState, useEffect } from "react";
import "../Orderuserdetails.css";
// import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Ratingstyles";

import Navbar from "./Navbar";
import Footer from "./Footer";
import snowflake from "../Component/images/snowflakes.png";
import deliveryman from "../Component/images/delivery_man1.png";
import Starating from "./Starrating";
import ColorSelector from "./ColorSelector";
// import {Fastar } from "react-icons/fa";
import {
  FaBook,
  FaCube,
  FaArrowCircleUp,
  FaTruck,
  FaHandshake,
  FaCheck,
  FaStar,
} from "react-icons/fa";

import { useSearchParams } from "react-router-dom";

const Orderuserdetails = () => {
  const [order, setorder] = useState({}); //userdata[orderid-1]
  const [formdata, setFormdata] = useState({
    feedback: "",
  });
  const [rate, setrate] = useState(0);
  const [selectedStatus, setSelectedStatus] = useState(""); // Default status
  const [timelineData, setTimelineData] = useState([]);
  const [completedIndex, setCompletedIndex] = useState(0);

  const [formattedDateTime, setFormattedDateTime] = useState("");
  const [formattedDateTimelineTime, setFormattedDateTimelineTime] =
    useState("");

  const [queryParameters] = useSearchParams();
  let orderid = queryParameters.get("id");

  console.log(orderid);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);

    const selectedIndex = timelineData.findIndex(
      (item) => item.status === newStatus
    );

    setCompletedIndex(selectedIndex);
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/order/" + orderid
      );

      const data = await response.json();
      console.log(data);
      setorder(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // const formData1 = {
  //   rating: weight,

  // };

  // const formData2={
  //   feedback: selectedStatus,
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  //   const formData = {
  //     rating: rate,

  //   };

  //   const formData2={
  //     feedback: feedback,
  //   }
  // console.log(feedback);
  const formdata1 = {
    feedback: formdata.feedback,
  };
  console.log(rate);
  const formdata2 = {
    rating: rate,
  };

  useEffect(() => {
    setSelectedStatus(order.status);
  }, [order]);

  useEffect(() => {
    handleStatusChange(selectedStatus);
  }, [selectedStatus]);

  useEffect(() => {
    // Initialize timeline data
    const initialTimelineData = [
      { status: "order-placed", icon: <FaBook /> },
      { status: "picked", icon: <FaCube /> },
      { status: "processing", icon: <FaArrowCircleUp /> },
      { status: "out-for-delivery", icon: <FaTruck /> },
      { status: "delivered", icon: <FaHandshake /> },
    ];
    setTimelineData(initialTimelineData);
  }, []);

  useEffect(() => {
    const formatDate = (dateTimeString) => {
      const dateObject = new Date(dateTimeString);
      const day = dateObject.getDate().toString().padStart(2, "0");
      const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      const year = dateObject.getFullYear();
      const hours = dateObject.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = dateObject.getMinutes().toString().padStart(2, "0"); // Add leading zero if needed
      const period = dateObject.getHours() >= 12 ? "PM" : "AM";

      const formattedDate = `${day}/${month}/${year} - ${hours}:${minutes} ${period}`;
      return formattedDate;
    };

    setFormattedDateTime(formatDate(order.created_at));
    setFormattedDateTimelineTime(formatDate(order.updated_at));
  }, [order]);

  // console.log(feedback);
  const UpdateOrders = async (type) => {
    console.log("Form data submitted:", formdata);
    try {
      const response = await fetch(
        "http://localhost:5000/api/order/" + orderid,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(type === 0 ? formdata1 : { rating: type }),
        }
      ).then(() => {
        alert("Order Updated");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid padding-bottom-3x py-5 mb-1">
        <h2 className="text-center">Order Details</h2>
        <div className="row mt-lg-5">
          <div className="col-lg-3 mt-5 mt-lg-5">
            {/* Customer Details Partition */}
            <div className="px-lg-1 ml-lg-5 ml-4">
              <div className="row  py-lg-0 ">
                <div className="col-lg-12   col-md-12 col-12">
                  <ul className="  px-0 list-unstyled">
                    <li className="font-weight-bold py-2">
                      Order No.:{" "}
                      <span className="ml-3 text-muted font-weight-light">
                        {" "}
                        {order.id}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Order Placed:{" "}
                      <span className="ml-3 text-muted font-weight-light">
                        {" "}
                        {/* {order.date} -{order.timing}  */}
                        {formattedDateTime}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Service:{" "}
                      <span className="ml-3 text-muted font-weight-light">
                        {" "}
                        {order.services}
                      </span>
                    </li>

                    {order.totalAmount ? (
                      <div>
                        <li className="font-weight-bold py-2">
                          Total Item:{" "}
                          <span className="ml-3 text-muted font-weight-light">
                            {" "}
                            {order.totalItems}
                          </span>
                        </li>
                        <li className="font-weight-bold py-2">
                          Total Weight:{" "}
                          <span className="ml-3 text-muted font-weight-light">
                            {" "}
                            {order.totalWeight}
                          </span>
                        </li>
                        <li className="font-weight-bold py-2">
                          Total Amount:{" "}
                          <span className="ml-3 text-muted font-weight-light">
                            {" "}
                            ₹{order.totalAmount}
                          </span>
                        </li>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </ul>
                </div>
                {/* <div className='col-lg-6 px-0 col-md-6 col-6'>
      <ul className=' mt-3 text-danger px-0 list-unstyled'>
            <li className='text-muted py-2'>
          408-254656-6512
          </li>
          <li className='text-muted py-2'>
          03\12\23  -  01:23 PM
          </li>
          <li className='text-muted py-2'>
          Normal Washing (Wash & Fold)
          </li>
          <li className='text-muted py-2'>
          17
          </li>
          <li className='text-muted py-2'>
          33KG
          </li>
          <li className='text-muted py-2'>
          ₹39.00
          </li>
            
            
        </ul>
      </div> */}
              </div>
              {/* <div className="row">
      <div className="col-md-4 col-lg-4 col-sm-5">
        <ul className='list-unstyled'>
          <li className='font-weight-bold py-2'>
          Order No.:
          </li>
          <li className='font-weight-bold py-2'>
          Order Placed:
          </li>
          <li className='font-weight-bold py-2'>
          Service:
          </li>
          <li className='font-weight-bold py-2'>
          Total Item:
          </li>
          <li className='font-weight-bold py-2'>
          Total Weight:
          </li>
          <li className='font-weight-bold py-2'>
          Total Amount:
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-lg-8 col-sm-4">
        <ul className='list-unstyled'>
          <li className='text-muted py-2'>
          408-254656-6512
          </li>
          <li className='text-muted py-2'>
          03\12\23  -  01:23 PM
          </li>
          <li className='text-muted py-2'>
          Normal Washing (Wash & Fold)
          </li>
          <li className='text-muted py-2'>
          17
          </li>
          <li className='text-muted py-2'>
          33KG
          </li>
          <li className='text-muted py-2'>
          ₹39.00
          </li>
        </ul>
      </div>
    </div> */}
            </div>
            {/* shipping details */}
            <div className="px-lg-1 ml-lg-5 mt-5 ml-4">
              <h5 className=" mb-3">Shipping Address</h5>
              <p className="font-weight-bold">{order.name}</p>
              <p className="text-muted ">{order.address}</p>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-unstyled">
                    <li className="font-weight-bold py-2">
                      Phone:{" "}
                      <span className="ml-3 text-muted font-weight-light">
                        {" "}
                        {order.phone}
                      </span>
                    </li>
                    <li className="font-weight-bold py-2">
                      Email:{" "}
                      <span className="ml-3 text-muted font-weight-light">
                        {" "}
                        {order.email}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {order.status === "delivered" && (
              <div>
                <div className="container mt-5 mb-5 ">
                  <div className="row py-lg-0 justify-content-start   px-4  py-3">
                    {/* shipping details */}
                    <div className="col-lg-5  col-md-6 col-sm-12 ">
                      <div className="px-lg-2 mt-3">
                        <div className="d-inline">
                          <h5 className=" d-inline mb-3">Rating</h5>

                          <Starating
                            rate={rate}
                            setrate={setrate}
                            isadmin={false}
                            UpdateOrders={UpdateOrders}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container mt-3 mb-5">
                  <h3 className="px-3 ml-lg-3">Feedback</h3>
                  <div className="row py-lg-3 mt-2 justify-content-start   px-lg-5  py-3">
                    <textarea
                      className="my-feedback-area p-3"
                      id="feedback"
                      name="feedback"
                      value={formdata.feedback}
                      rows={4}
                      cols={40}
                      placeholder="Write down your feedback about our product & services"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="px-4 ml-2 justify-content-start  py-3">
                    <button
                      type="submit"
                      onClick={() => UpdateOrders(0)}
                      style={{
                        backgroundColor: "#FA8232",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "background-color 0.3s", // Add a smooth transition effect
                      }}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#F57C1E")
                      } // Darker orange on hover
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#FA8239")
                      } // Return to original color on mouse out
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-3 delivery-img">
            <img
              className="w-100 delivery-img mt-4 d-inline-block my-card-main-img"
              alt=""
              src={deliveryman}
            />
          </div>
          {/* timeline */}

          {/* 
          <div className="col-lg-3  col-sm-12">
       
            <div class="container py-0">
              <div class="page-header mt-0"></div>
              <ul class="timeline">
                <li class="timeline-inverted">
                  <div class="timeline-badge">1</div>
                  <div class="timeline-panel">
                    <p className="h6 mt-4 font-weight-bold  mb-0 mb-lg-0">
                      Order Placed
                    </p>
                    <p className="date-time text-muted">
                      {order.date} - {order.timing} PM
                    </p>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">2</div>
                  <div class="timeline-panel">
                    <p className="h6 mt-4 font-weight-bold  mb-0 mb-lg-0">
                      Picked
                    </p>
                    <p className="date-time text-muted">21/12/23 - 01:00 PM</p>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">3</div>
                  <div class="timeline-panel">
                    <p className="h6 mt-4  font-weight-bold mb-0 mb-lg-0">
                      Processing
                    </p>
                    <p className="date-time text-muted">21/12/23 - 01:00 PM</p>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">4</div>
                  <div class="timeline-panel">
                    <p className="h6 mt-4 font-weight-bold mb-0 mb-lg-0">
                      Out for Delivery
                    </p>
                    <p className="date-time text-muted">21/12/23 - 01:00 PM</p>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge">5</div>
                  <div class="timeline-panel">
                    <p className="h6 mt-4  font-weight-bold mb-0 mb-lg-0">
                      Delivered
                    </p>
                    <p className="date-time text-muted">21/12/23 - 01:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

          
          </div> */}
          <div className="col-lg-3">
            <div className="  steps mb-5 px-5   timeliner-steps-user flex-row  justify-content-between padding-top-2x padding-bottom-1x">
              {timelineData.map((item, index) => (
                <div
                  className={` timeline-inverted flex-col step ${
                    index <= completedIndex ? "completeds" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="step-icon-wrap "
                    style={{
                      transform: "rotate(90deg)",
                      zIndex: -1,
                    }}
                  >
                    <div
                      className="step-icon text-white line"
                      style={{
                        transform: "rotate(-90deg)",

                        borderColor: "#00B207",
                        backgroundColor: `${
                          index <= completedIndex ? "#00B207" : "white"
                        }`,
                      }}
                    >
                      <FaCheck
                        style={{
                          color: `${
                            index <= completedIndex ? "white" : "#00B207"
                          }`,
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      zIndex: 100,
                      background: "white",
                    }}
                  >
                    <p
                      className="h6 my-icons mt-3 mb-1"
                      style={{ color: "green" }}
                    >
                      {item.icon}
                    </p>
                    <p
                      style={{ color: "green" }}
                      className={`h6 mt-2 mb-0 mb-lg-0 `}
                    >
                      {item.status.toUpperCase()}
                    </p>

                    {index === completedIndex && (
                      <p className="date-time" style={{ color: "green" }}>
                        {formattedDateTimelineTime}
                      </p>
                    )}
                    <p className="date-time  " style={{ color: "green" }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-3 my-snow-img">
            <img
              className="w-100 my-snow-img  d-inline-block "
              alt=""
              src={snowflake}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Orderuserdetails;
