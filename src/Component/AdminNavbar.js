import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import house from "../Component/images/House.png";
import { FaBars, FaTimes } from 'react-icons/fa';


export default function AdminNavbar( {order,setorder,response,setresponse}) {


  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
 

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


 console.log(response);

  useEffect(() => {
    const currentURL = window.location.href;
    const newURL=currentURL.split("?")[0];
    const currentpath = newURL.split("/").reverse()[0];
    const x = document.getElementById(currentpath);
    if (x !== undefined)
      document.getElementById(currentpath).style.color = "blue";
  }, []);

  return (
    // <div>

    <nav className="navbar my-nav-bar navbar-expand-lg admindash-navbar">
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
      <div className="nav-img-dashboard">
        <Link className="nav-img" to="/">
          <img src={house} />
        </Link>
      </div>

      <div  className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav2">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link   nav-dash-bar" to="/">
              Home{" "}
              <svg
                style={{ marginTop: "-2px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.5 2.25L8.25 6L4.5 9.75"
                  stroke="#77878F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item  ">
            <Link id="home" className="nav-link nav-dash-bar" to="/login">
              User Account{" "}
              <svg
                style={{ marginTop: "-2px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.5 2.25L8.25 6L4.5 9.75"
                  stroke="#77878F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item ">
            <Link id="admin" className="nav-link  nav-dash-bar" to="/admin">
              Dashboard{" "}
              <svg
                style={{ marginTop: "-2px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M4.5 2.25L8.25 6L4.5 9.75"
                  stroke="#77878F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
</li>


{
(order)?<li className="nav-item ">
<Link
  id="adminorder"
  className="nav-link  nav-dash-bar"
  to="/adminorder"
>
  OrderDetails{" "}
  <svg
    style={{ marginTop: "-2px" }}
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M4.5 2.25L8.25 6L4.5 9.75"
      stroke="#77878F"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</Link>
</li>:null




}



{


  (response) ?<li className="nav-item ">
  <Link
    id="responses"
    className="nav-link  nav-dash-bar"
    to="/responses"
  >
    Response
  </Link>
</li>

:<p></p>

}
          
          

         
            
          


          
           



        </ul>
      </div>
    </nav>
    //   </div>
  );
}
