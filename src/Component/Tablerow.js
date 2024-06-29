import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tablerow(props) {
  const data = props.data;

  const [selectedValue, setSelectedValue] = useState(data.status);
  const handleChange = (event) => {
    event.preventDefault();
    const prevvalue = selectedValue;
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    setSelectedValue(data.status);
  }, [data.status]);

  // const [selectedValue, setSelectedValue] = useState(status);

  return (
    <tr>
      <th className="srid" scope="row">
        {props.sno}
      </th>
      <td className="td-red">
        <Link to={`/adminorder?id=${data.id}`} style={{ color: "#D97474" }}>
          {data.id}
        </Link>
      </td>
      <td className="td-style-maxi">{data.name} </td>
      <td className="td-style-maxi">{data.date}</td>
      <td className="td-style-maxi">{data.timing}</td>
      <td className="td-style-service">{data.services}</td>
      <td className="td-style-maxi">{data.totalWeight} Kg</td>
      <td className="td-style-maxi">₹{data.totalAmount}</td>
      <td>
        <select
          onChange={handleChange}
          className={selectedValue}
          value={selectedValue}
        >
          <option value="order-placed" className="order-placed">
            Order Placed
          </option>
          <option value="picked" className="picked">
            Picked
          </option>
          <option value="processing" className="processing">
            Processing
          </option>
          <option value="out-for-delivery" className="out-for-delivery">
            Out for Delivery
          </option>
          <option value="delivered" className="delivered">
            Delivered
          </option>
        </select>
      </td>
    </tr>
  );
}
