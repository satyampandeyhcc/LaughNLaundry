import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Feedback1 from "./Feedback1";


const Responsesadmin = () => {
  const [resp, setResp] = useState([]);

  const fetchResponses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/response/");
      if (response.ok) {
        const data = await response.json();
        setResp(data);
        console.log("Response:", data);
      } else {
        console.error("Error fetching response:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  return (
    <>
      
      <section>
        <div className="container my-3 py-5">
          <h2>Responses</h2>
          <div className="row d-flex mt-4 justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <h3>Commends</h3>

              <div className="container">
                {resp.map((response) => (
                  <Feedback1 response={response} />
                ))}
                {/* <Orderitem/>
   <Orderitem/> */}
              </div>
              {/* <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Responsesadmin;
