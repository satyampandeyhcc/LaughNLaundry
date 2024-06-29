import React, { useRef, useState, useEffect } from 'react';

import "../Project.css";
import img1 from "../Component/images/smile.png";
import img2 from "../Component/images/Washing Maching.png";
import img3 from "../Component/images/step1.jpeg";
import img4 from "../Component/images/step2.jpeg";
import img5 from "../Component/images/step3.jpeg";
import img6 from "../Component/images/step4.jpeg";
import img7 from "../Component/images/section5.jpeg";
import heroimg from "../Component/images/Hero-img.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Bubble from "./Bubble";
import Caraousal from "./Caraousal"
import Caraousalserv from "./Caraousalserv"
import CaraousalServBottom from "./Caraousalservbottom";
import Loader from "./Loader";
import Offerpopup from '../Component/Offerpopup'; 


const Home = () => {
  const loaderRef = useRef();
  const [loading, setLoading] = useState(true);
  const [showOfferPopup, setShowOfferPopup] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInitialData = async () => {
      // Perform any initial data fetching or setup here

      // Simulate a 3-second delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Update loading state after the delay
      setLoading(false);
      if(loaderRef.current)
      loaderRef.current.stopLoading();
    };

    fetchInitialData();
  }, []);


  const closeOfferPopup = () => {
    setShowOfferPopup(false);
    
  };
  
 
  
  return (
    <>
        {/* nav */}
        {loading ? (
        <Loader ref={loaderRef} />
      ) : (
        <>
          {showOfferPopup && !token ? (
            <Offerpopup closeoffer={closeOfferPopup} />
          ) : (
            <>
              <Navbar />
              <Bubble />

        {/* section1 */}
        <section className="container-fluid my-section-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {/* <img className="img-smile mt-4 " src="images/smile.png" alt="" /> */}
              <img className="img-smile  py-0" alt="" src={heroimg} />
              <p className="my-main-heading text-center py-0 mt-0">
                Every Spin Tells a <span className="boujee-text">Story</span> 
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="mt-4 py-5 mt-sm-5 img-washing-machine"
                alt=""
                src={img2}
              />
            </div>
          </div>
        </section>
        {/* section2 */}
        <Caraousal/>
        {/* section3 */}
        <section className="container-fluid py-5 my-section-3">
          <h3 style={{ color: "#D76D6D" }} className="text-center  section3-heading pt-3 ">
            HOW IT WORKS
          </h3>
          <h1 className="text-center section3-subheading text-dark mb-5 mt-3">Get it done in 4 steps</h1>
          <div className="row">
            <div className="col-lg-3 mb-5 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-dark text-uppercase my-step">Step 1</h4>
                  <h3 className="text-center text-dark my-sub-heading">Pick Up</h3>
                  {/* <img className="img-step-1" src="images/step1.jpeg" alt="" /> */}
                  <img className="img-step-1" alt="" src={img3} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-4 mb-md-4 ">
                <div className="card-body ">
                  <h4 className="text-center text-dark text-uppercase my-step">Step 2</h4>
                  <h3 className="text-center text-dark my-sub-heading">Wash &amp; Dry</h3>
                  <img className="img-step-1" alt="" src={img4} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-sm-5   mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card  mb-sm-5 mb-md-5">
                <div className="card-body ">
                  <h4 className="text-center text-dark text-uppercase my-step">Step 3</h4>
                  <h3 className="text-center text-dark my-sub-heading">Fold</h3>
                  <img className="img-step-1" alt="" src={img5} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5 mt-sm-5 mt-md-5 col-md-4 col-sm-5">
              <div className="card my-card ">
                <div className="card-body ">
                  <h4 className="text-center text-dark text-uppercase my-step">Step 4</h4>
                  <h3 className="text-center text-dark my-sub-heading">Delivery</h3>
                  <img className="img-step-1" alt="" src={img6} />
                </div>
              </div>
            </div>
          </div>
        </section>


<Caraousalserv/>
<CaraousalServBottom/>


        {/* section5 */}
        <section className="container-fluid my-section-5">
   
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6">
              {/* <img className="img-section5 mt-5" src="images/section5.jpeg" alt="" /> */}
              <img className="img-section5 mt-5" alt="" src={img7} />
              {/* <h1 class="my-main-heading ">Every Spin Tells A story</h1> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mt-5 py-lg-5 w-75 m-5">
                {/* <h1 className="font-weight-bold">Laugh n Laundry</h1> */}
                <p className=" my-para-section5  mt-lg-2">
                Welcome to Laugh n' Laundry – Your Trusted Laundry Partner!
<br/> <br/>
At Laugh n' Laundry, we're more than just a laundry service; we're your go-to destination for quality and convenience. With a commitment to exceptional garment care, modern facilities, and a touch of humor, we're here to make your laundry experience stress-free. Whether you prefer our self-service laundromat, trust us with delicate dry cleaning, or enjoy the ease of pickup and delivery, Laugh n' Laundry is dedicated to making your clothes shine and your day a little brighter. Join us on a laundry journey where smiles meet freshness – Laugh n' Laundry, your laundry, our joy! 🧺✨
                </p>
              </div>
            </div>
          </div>
        </section>
        
 {/* Footer */}
 <Footer />
              {/* Footer */}
            </>
          )}
        </>
      )}
    </>
  );
};




export default Home;