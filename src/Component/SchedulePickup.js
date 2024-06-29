import React, { useState } from "react";
import "../schedulepickup.css";
import {
  FaHouseUser,
  FaArrowRight,
  FaCircleNotch,
  FaCheckCircle,
} from "react-icons/fa";
import image1 from "../Component/images/truck_img.png";
import img2 from "../Component/images/background_image_pickup.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ServiceDropdown from "./ServiceDropdown";

const SchedulePickup = () => {
const id=localStorage.getItem("id");
const email=localStorage.getItem("email");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email : email,
    services: "",
    date: "",

    user: id ,

    timing: "",
    address: "",
    specialInstruction: "",
    status: "order-placed",
  });

  const [selectedOptionTiming, setSelectedOptionTiming] = useState("");

  const handleSelectChangeTiming = (event) => {
    setSelectedOptionTiming(event.target.value);
    setFormData({ ...formData, timing: event.target.value });
  };

  const handleChangeService = (value) => {
    setFormData({ ...formData, services: value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add your form submission logic here
    console.log("Form data submitted:", formData);

    // You can make an API call to submit the data to the server
    // Example:
    try {
      const response = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Data saved successfully:", responseData);
        alert("Pickup successful!");
      } else {
        const errorData = await response.json();
        console.error("Error saving data:", errorData);
        // throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error("Error saving data:", error);
      throw error;
    }
  };

  return (
    <>







      <Navbar />
      <section className="container-fluid py-5 ">
        <div className="backgroundimg">
          <img src={img2} alt="" />
        </div>
        <div className="PickUpForm">
          <div className="content">
            <div className="toplogo">
              <h2>Schedule A Pick Up</h2>
              <img src={image1} alt="" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid-container-pickup">
                <div>
                  <p style={{ marginBottom: "0px" }}>Name</p>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <p style={{ marginBottom: "0px" }}>Phone</p>
                  <input
                    type="phone"
                    placeholder="+91"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="items_input">
                <p style={{ marginBottom: "0px" }}>Services</p>
                <div>
                  <ServiceDropdown
                    selectedOption={formData.services}
                    onChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        services: value,
                      }))
                    }
                    handleChangeService={handleChangeService}
                  />
                </div>
              </div>

              <div className="grid-container-pickup">
                <div className="date-input-container">
                  <p style={{ marginBottom: "0px" }}>Date</p>
                  <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <p style={{ marginBottom: "0px" }}>Time</p>
                  <select
                    id="input9"
                    onChange={handleSelectChangeTiming}
                    value={selectedOptionTiming}
                    name="timing"
                    required
                  >
                    <option id="input2"   hidden>
                      Timing
                    </option>
                    <option value="8:00AM-10:00 AM">8:00AM-10:00 AM</option>
                    <option value="10:00AM-12:00PM">10:00AM-12:00PM</option>
                    <option value="12:00PM-02:00PM">12:00PM-02:00PM</option>
                    <option value="02:00PM-04:00PM">02:00PM-04:00PM</option>
                    <option value="04:00PM-06:00PM">04:00PM-06:00PM</option>
                    {/* Add more options as needed */}
                  </select>


                 
                </div>
              </div>

              <div className="Address_pickup">
                <p style={{ marginBottom: "0px" }}>Address</p>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Special Instruction (Optional)"
                  name="specialInstruction"
                  value={formData.specialInstruction}
                  onChange={handleChange}
                />
              </div>

              <div className="pickup-textarea-schedule">
                <p
                  className="note-text-area"
                  style={{
                    color: "#111",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "150%",
                  }}
                >
                  NOTE
                </p>
                <p
                  style={{
                    width: "100%",
                    flexShrink: 0,
                    background: "rgb(220, 203, 186)",
                    color: "var(--Gray-Scale-Gray-600, #666)",
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "150%",
                    border: "0px solid red",
                    textAlign: "left",
                  }}
                  className="write-text-pickup"
                >
                  1. Premium garments are recommended to be laundered using
                  premium washing services. <br />
                  2. Free deliveries are available for orders weighing 8kg or
                  above.
                </p>
              </div>

              <div className="Submit_button">
                <button type="submit">Submit</button>

                


                {/* <button
                  type="submit"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"

                >
                  Submit
                </button> */}

              </div>
            </form>

            {/* popup */}
            <div
              className="modal w-100 container-fluid"
              id="exampleModalCenter"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header no-underline text-center">
                    <div style={{ display: "block", margin: "auto" }}>
                      <h1 style={{ color: "green", marginBottom: "10px" }}>
                        <FaCheckCircle />
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h2
                      className="modal-title font-weight-cold p-3 text-center mx-auto"
                      id="exampleModalLongTitle"
                    >
                      Your order is successfully placed!
                    </h2>
                  </div>

                  <div className="modal-body text-center no-underline">
                    <p className="text-dark">
                      Pellentesque sed lectus nec tortor tristique accumsan quis
                      dictum risus. Donec volutpat mollis nulla non facilisis.
                    </p>
                  </div>

                  <div className="modal-footer text-center no-underline justify-content-center">
                    <Link to="/pickup" className="d-inline-block mx-2">
                      <button className="btn btn-hom1 px-5 w-100 font-weight-bold">
                        <FaHouseUser className="mx-0 mb-1" /> Home
                      </button>
                    </Link>
                    <Link to="/myorder1" className="d-inline-block mx-2">
                      <button className="btn btn-order1 px-4  w-100 font-weight-bold">
                        View Order <FaArrowRight className="mx-1 mb-1" />{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SchedulePickup;


