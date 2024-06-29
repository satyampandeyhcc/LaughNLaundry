import React from "react";
import "../orderitem.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Orderitem = ({ order }) => {
  return (
    <>
      <div className="container border main-cont-order  my-5">
        <div className="row py-lg-0 py-3 my-order-header">
          <div className="col-lg-3 ml-lg-5 ml-0 col-md-4 col-6">
            <ul className="px-lg-2 mt-3 px-0 list-unstyled">
              <li className="text-uppercase py-1">order placed</li>
              <li className="text-uppercase py-1">{order.date}</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <ul className="px-lg-2 mt-3 px-0 list-unstyled">
              <li className="text-uppercase py-1">total</li>
              <li className=" py-1">{order.totalAmount}</li>
            </ul>
          </div>
          <div className="col-9  col-lg-3 d-flex justify-content-end mt-3">
            <Link to={`/userorder?id=${order.id}`}>
              <button className="btn  border btn-overlay">
                View order details
              </button>
            </Link>
          </div>
        </div>
        <div className="row  py-lg-0 py-3">
          <div className="col-lg-3 ml-lg-5 ml-0 col-md-4 col-6">
            <ul className="px-lg-2 mt-3 px-0 list-unstyled">
              <li className="text-uppercase py-2">order #</li>

              <li className="text-uppercase py-2">Service</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-6">
            <ul className="px-lg-2 mt-3 text-danger px-0 list-unstyled">
              <li className="text-uppercase py-2">{order.id}</li>
              <li className=" py-2">{order.services}</li>
            </ul>
          </div>
          <div className="col-9  col-lg-3 d-flex justify-content-end mt-3">
            <Link>
              <button className="btn border  mt-lg-3 button-pick  px-5 py-2 text-primary font-weight-bold ">
                {" "}
                {order.status}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderitem;
