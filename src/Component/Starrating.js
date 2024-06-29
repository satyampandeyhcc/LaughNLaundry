
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./Ratingstyles";
const Starrating = ({rate,setrate,isadmin,UpdateOrders}) => {

    

console.log(rate);






  return (
    <Container>
    {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
            <label>
                <Radio
                    type="radio"
                    value={givenRating || (isadmin && rate)}
                    onClick={() => {
                        if(isadmin) return;
                        setrate(givenRating);
                  
                        alert(
                            `Are you sure you want to give 
                            ${givenRating} stars ?`
                        );
                        console.log(rate);
                        UpdateOrders(givenRating);
                        
                    }}
                />
                <Rating>
                    <FaStar
                        color={
                            givenRating < rate || givenRating === rate
                                ? "#FFD700"
                                : "rgb(192,192,192)"
                        }
                    />
                </Rating>
            </label>
        );
    })}
</Container>
  );
};

export default Starrating;