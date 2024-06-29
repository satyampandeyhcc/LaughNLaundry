import React from 'react'
import {Link} from "react-router-dom"
import "../Project.css";
import { FaBars } from 'react-icons/fa';
import logo from "../Component/images/nav-logo.png";
const Navbar = () => {
  return (
    // <div>
<nav 
          style={{ background: "#dce9d2" }}
          className="navbar  position-static my-nav-bar navbar-expand-lg"
        >
          <Link className="navbar-brand ml-3 w-50 my-links" to="/">
              <img
                className="  my-logo-nav"
                alt=""
                src={logo}
              />
              </Link>
          {/* <Link className="navbar-brand ml-lg-5 ml-4 my-links" to="/">
            LOGO
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><FaBars /></span>
            {/* <span className="navbar-toggler-icon" /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-3">
                <Link className="nav-link font-weight-bold my-links" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ml-3">
                <Link className="nav-link font-weight-bold my-links" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item ml-lg-1 ml-3">
                <Link className="nav-link font-weight-bold my-links" to="/pickup">
                  Order Now
                </Link>
              </li>
              <li className="nav-item ml-lg-1 ml-3">
                <Link className="nav-link font-weight-bold my-links" to="/#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ml-3 mb-lg-1 mb-2">
              <Link to="/signup" className="btn py-1 px-4 my-nav-btn1 ">
                  Signup
                  </Link>
              </li>
              <li className="nav-item ml-3 mr-3 ">
              <Link to="/login" className="btn py-1 px-4 my-nav-btn2 ">
                  Login
                  </Link>
                
              </li>
            </ul>
          </div>
        </nav>

    // </div>
  )
}

export default Navbar