import React from "react";
import { Button } from "rsuite";
import img1 from "./images/offerpopupimg.png";
import img2 from "./images/offerpopupdrop.png";
// import img3 from "./images/offerpopupstripimg.png";
import "../offerpopup.css"


const Offerpopup = ({closeoffer}) => {
  console.log("Received closeoffer:", closeoffer);
  
  const handleCancel = () => {
    console.log("Cancel button clicked");
    closeoffer();
    // Ensure onClose is being called
  };
  const handleBookNow = () => {
    console.log("Book Now button clicked");
    closeoffer();

    // Add any action you want to perform when the "Book Now" button is clicked
    // For example, you can redirect to a booking page or perform other logic
     // Close the popup after the action is performed
   
  };
  return (
    <div className="popup-start">
    <div className="offerpopup">
      <div className="textname">
        <div className="hero-text">
        <button className="btn-cancelsss" onClick={handleCancel}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>

<i class="bi bi-x"></i>
        </button>
        <p className="specialnew">Special New Year Offer</p>
        <p className="specialoff">40% OFF</p>
        <p className="specialwash">On your First wash hurry up!!</p>

       
        

<img className="imagename2" src={img2} />
        <button className="btn-popupsss" onClick={handleBookNow}>Book Now</button>

      </div>
      </div>
      <div >
        <img className="imagename" src={img1} />
      </div>
    </div>

</div>
  );
};

export default Offerpopup;
