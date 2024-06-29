import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import "../Project.css";
import logo from "../Component/images/nav-logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate=useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (




    <div>

<style>
  {
    `
    
    @media screen and (max-width: 991px) {


      .navbar-logout {
        direction:flex;
        flex-direction:column;
      }
      }
      .my-nav-btn2:hover {
        text-decoration: none;
      }
      
      `
   
  }
  </style>
<nav
          style={{ background: "#dce9d2" }}
          className="navbar my-nav-bar navbar-expand-lg"
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
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span><FaBars /></span>
           
          </button> */}
          <button
           className="navbar-toggler"
           type="button"
           onClick={toggleNavbar}
           data-toggle="collapse"
           data-target="#navbarNav"
           aria-controls="navbarNav"
           aria-expanded="false"
           aria-label="Toggle navigation"
        >
          {isNavbarOpen ? <FaTimes /> : <FaBars />}
        </button>
          <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-2">
                <Link className="nav-link font-weight-bold my-links" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ml-2">
                <Link className="nav-link font-weight-bold my-links" to="/services">
                  Services
                </Link>
              </li>
              {
                !token?(
                  <li className="nav-item ml-2">
                  <Link className="nav-link font-weight-bold my-links" to="/login">
                    Order Now
                  </Link>
                </li>

                ):(
                  <li className="nav-item ml-2">
                  <Link className="nav-link font-weight-bold my-links" to="/pickup">
                    Order Now
                  </Link>
                </li>

                )
                
                }
              <li className="nav-item ml-2">
                <Link className="nav-link font-weight-bold my-links" to="/contact">
                  Contact Us
                </Link>
              </li>
              
              {!token ?
               (
               <div className='d-flex'>
              <li className="nav-item  ml-2  mb-lg-1 mb-2">
              <Link to="/signup" className="btn  py-1 px-4 my-nav-btn1 ">
                  Signup
                  </Link>
              </li>
              <li className="nav-item ml-2   mr-lg-5 ">
              <Link to="/login" className="btn py-1   px-4 my-nav-btn2 ">
              &nbsp;Login&nbsp;
                  </Link>
                
              </li>
              </div>
              ): 
               (
                <div className='d-flex navbar-logout' >
                <li className="nav-item ml-2">
                <Link className="nav-link font-weight-bold my-links" to="/myorder1">
                  My Order
                </Link>
              </li>

              <li className="nav-item ml-2   mr-lg-5 ">
              <Link to="/" className="btn py-1   px-4 my-nav-btn2 "  onClick={handleLogout} >
              &nbsp;Logout&nbsp;
                  </Link>
                
              </li>
                
                </div>
           
             )
              }
            </ul>
          </div>
        </nav>

    </div>
  )
}

export default Navbar