import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../services.css";
import serviceimg from "../Component/images/services.jpeg";
import normal_washing_img from "../Component/images/normal_washing_img.jpeg";
import ironing_img from "../Component/images/ironing_img.jpeg";
import premium_washing_img from "../Component/images/premium_washing_img.jpeg";
import shoe_washing_img from "../Component/images/shoes_washing_img.jpeg";
import dry_washing_img from "../Component/images/dry_cleaning_img.jpeg";
import blanket_washing_img from "../Component/images/blanket_img.jpeg";
import green_man from "../Component/images/green_man-removebg-preview.png";
import blue_bed from "../Component/images/blue_bed-removebg-preview.png";
import green_shoes from "../Component/images/green_shoes-removebg-preview.png";
import green_iron from "../Component/images/green_iron-removebg-preview.png";
import blue_iron from "../Component/images/blue_iron-removebg-preview-removebg-preview.png";
import green_shirt from "../Component/images/green_shirt-removebg-preview.png";
import blue_shirt from "../Component/images/bluse_shirt-removebg-preview-removebg-preview.png";
import green_bed from "../Component/images/green_bed-removebg-preview.png";
import blue_man from "../Component/images/blue_men-removebg-preview.png";
import { Link } from 'react-router-dom';


const Services = () => {

  const token = localStorage.getItem("token");
  return (
   <>
<Navbar/>
<div className="bg-image-main" >
<img className="w-100" alt="" src={serviceimg} />
</div>
<div className='container-fluid p-lg-5 mt-5 mb-5'>
<div className='row'>
  {/* card1 */}
  <div className='col-lg-4 mb-lg-0 mb-4 p-lg-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
    <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={normal_washing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2'>
      <ul className=' px-lg-2 p-0'>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={green_man} />
        <h5 className='d-inline-block mx-3'>Wash & Fold per Kg</h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 49/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_bed} />
        <h5 className='d-inline-block mx-3'>Wash & Iron per Kg</h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 59/-
        </h5>
        </li>
      </ul>
    </div>
  </div>
</div>
  </div>
  {/* card2 */}
  <div className='col-lg-4 mb-lg-0 mb-4 p-lg-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
  <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={premium_washing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2'>
      <ul className='px-lg-2 p-0'>
        <li className=' list-unstyled'>
        <img className="w-25  d-inline-block my-card-main-img" alt="" src={green_man} />
        <h5 className='d-inline-block mx-2 mx-lg-3'>Wash & Fold per Kg</h5> 
        <h5 className='d-inline-block mx-1 mx-lg-2'>
        ₹ 69/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_bed} />
        <h5 className='d-inline-block mx-2 mx-lg-3'>Wash & Iron per Kg</h5> 
        <h5 className='d-inline-block mx-1 mx-lg-2'>
        ₹ 79/-
        </h5>
        </li>
      </ul>
    </div>
  </div>
</div>
  </div>
  {/* card3 */}
  <div className='col-lg-4 mb-lg-0 mb-4 p-lg-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
  <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={dry_washing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2'>
      <ul className=' px-lg-2 p-0'>
        <li className=' list-unstyled'>
        <img className="w-25  d-inline-block my-card-main-img" alt="" src={green_shirt} />
        <h5 className='d-inline-block mx-1 mx-lg-3'>Shirt & Pants per Pc</h5> 
        <h5 className='d-inline-block mx-1 mx-lg-2'>
        ₹ 99/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_shirt} />
        <h5 className='d-inline-block mx-0 mx-lg-1'>Jacket & Hoodie per Pc</h5> 
        <h5 className='d-inline-block mx-0 mx-lg-1'>
        ₹ 149/-
        </h5>
        </li>
      </ul>
    </div>
  </div>
</div>
  </div>
   {/* card1 */}
   <div className='col-lg-4 mb-lg-0 mb-4 p-lg-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
  <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={ironing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2 '>
      <ul className=' px-lg-2 p-0'>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={green_iron} />
        <h5 className='d-inline-block mx-1'>Normal Iron per Pair</h5> 
        <h5 className='d-inline-block mx-1'>
        ₹ 15/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_iron} />
        <h5 className='d-inline-block mx-2'>Steam Iron per Pair</h5> 
        <h5 className='d-inline-block mx-1'>
        ₹ 20/-
        </h5>
        </li>
      </ul>
     

    </div>

  </div>
</div>
  </div>
  {/* card2 */}
  <div className='col-lg-4 mb-lg-0 mb-4 p-lg-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
  <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={shoe_washing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2'>
      <ul className='px-lg-2 px-0'>
        <li className=' list-unstyled'>
        <img className="w-25  d-inline-block my-card-main-img" alt="" src={green_shoes} />
        <h5 className='d-inline-block mx-3'>Pair of shoes</h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 59/-
        </h5>
        </li>
       
      </ul>
    </div>
  </div>
</div>
  </div>
  {/* card3 */}
  <div className='col-lg-4 p-lg-4 mb-lg-0 mb-4 my-card-main-img col-md-4 col-sm-12'>
  <div className="bg-image my-card-main-img " >
 <div className='bg-img-container'>
    <img className="w-100 my-card-main-img" alt="" src={blanket_washing_img} />
    {
  !token ? (
    <Link to='/login'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  ) : (
    <Link to='/pickup'>
      <button className="btn btn-overlay font-weight-bold">Order Now</button>
    </Link>
  )
}
    </div>
  <div
    className="mask my-card-main-text  text-light d-flex justify-content-center flex-column  "
    style={{ backgroundColor: "black" }}
  >
    <h2 className='text-start mt-4 mx-5'>Pricing</h2>
    <div className='mt-2'>
      <ul className=' px-lg-2 px-0'>
        <li className=' list-unstyled'>
        <img className="w-25  d-inline-block my-card-main-img" alt="" src={green_man} />
        <h5 className='d-inline-block mx-3'>Light  Weight (Per Pcs)</h5> 
        {/* <h5 className='d-inline-block mx-2'>
        ₹ 99/-
        </h5> */}
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={green_bed} />
        <h5 className='d-inline-block mx-3'>Single Bed </h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 149/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={green_bed} />
        <h5 className='d-inline-block mx-3'>Double Bed </h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 149/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25  d-inline-block my-card-main-img" alt="" src={blue_man} />
        <h5 className='d-inline-block mx-3'>Heavy  Weight (Per Pcs)</h5> 
        {/* <h5 className='d-inline-block mx-2'>
        ₹ 99/-
        </h5> */}
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_bed} />
        <h5 className='d-inline-block mx-3'>Single Bed </h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 199/-
        </h5>
        </li>
        <li className=' list-unstyled'>
        <img className="w-25 d-inline-block my-card-main-img" alt="" src={blue_bed} />
        <h5 className='d-inline-block mx-3'>Double Bed </h5> 
        <h5 className='d-inline-block mx-2'>
        ₹ 299/-
        </h5>
        </li>
       

      </ul>
    </div>
  </div>
</div>
  </div>

</div>
</div>


<Footer/>
   </>
  )
}

export default Services