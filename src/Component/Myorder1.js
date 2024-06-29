import React, { useEffect , useState } from 'react'
// import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Orderitem from "./Orderitem";
import orderimg from "../Component/images/order.jpeg"

const Myorder1 = () => {
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem('id')

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/order/user/' + userId);
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
          console.log('Orders:', data);
        } else {
          console.error('Error fetching orders:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrders();
  }, [])
  return (
    <>
    <Navbar/>
    <div className="bg-image-main" >
    <img className="w-100" alt="" src={orderimg} />
    </div>
    {/* <button onClick={()=>getUserOrders()}>HelloHelloHelloHello</button> */}
    <div className='container'>
      {orders.map((order)=>(
        <Orderitem order={order}/>
      ))
    }
   {/* <Orderitem/>
   <Orderitem/> */}
    </div>
   
    <Footer/>
       </>
  )
}

export default Myorder1