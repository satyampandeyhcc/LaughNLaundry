import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Project.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Component/images/nav-logo.png";

const AdminNavbar2 = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    // <div>
    <nav
      style={{ background: "#dce9d2" }}
      className="navbar my-nav-bar navbar-expand-lg"
    >
      <Link className="navbar-brand ml-3 w-50 my-links" to="/">
        <img className="  my-logo-nav" alt="" src={logo} />
      </Link>
      {/* <Link className="navbar-brand ml-lg-5 ml-4 my-links" to="/">
            LOGO
          </Link> */}

     
    </nav>

    // </div>
  );
};

export default AdminNavbar2;
