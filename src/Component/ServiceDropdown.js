import React, { useState } from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const ServiceDropdown = ({handleChangeService}) => {
  const [selectedOptionServices, setSelectedOptionServices] = useState("");


  
  const [numberOfShoes, setNumberOfShoes] = useState(0);

 

  const handleInputChange = (e) => {
    setNumberOfShoes(e.target.value);
  };


 



  const handleSelectChangeServices = (eventKey, event) => {
    // Use eventKey to get the selected value
    setSelectedOptionServices(eventKey);
    console.log(eventKey)
    handleChangeService(eventKey)
  };

  return (

    
    <div>


<style>
        {`
          .custom-dropdown {
            width: 1870px; /* Set the desired width */
          }
        `}



        {

            `

            .rs-dropdown-toggle-caret {
              -ms-flex-align: center;
              align-items: center;
              display: -ms-flexbox;
              display: flex;
              font-size: 12px;
              height: 20px;
              margin-left: 2px;
              position: absolute;
              right: 3px;
              top: 8px;
              margin-top: 8px;
          }


            .rs-dropdown-toggle, .rs-dropdown-toggle.rs-btn {
                display: inline-block;
                padding-right: 32px;
                position: relative;
                z-index: 5;
                width: 100%;
                height:50px;
                text-align: left;
                background: white;
                padding-left: 8px;
                border: 0.5px solid var(--Foundation-Dark-Lighter, #b6b6b6);
            }


            #shoes-pair-input-id{
              width:53px;
              height:30px;

            }
               

            @media only screen and (max-width: 800px )   {
              .rs-dropdown-item-submenu.rs-dropdown-item>.rs-dropdown-menu {
                position: absolute;
                top: -6px;
                margin-left: -70px;
                z-index:1;
            }


      


            }

            





            @media only screen and (max-width: 800px )   {
            .rs-dropdown-item.rs-dropdown-item-active{
              margin-left: -90px;

            }

          }

          @media only screen and (max-width: 372px )   {
            rs-dropdown-toggle, .rs-dropdown-toggle.rs-btn{
              
              overflow:scroll;

            }

          }


          

            `
        }
      </style>



      <Dropdown
     
        title={selectedOptionServices || "Service"}
        id="input1"
        onSelect={handleSelectChangeServices}  // Use onSelect instead of onChange
        activeKey={selectedOptionServices}
        name="services"
        classPrefix="custom-dropdown"
        
      >
       
        <Dropdown.Menu title="Normal Washing">
          <Dropdown.Item   eventKey="Normal Washing (Wash & Fold)">Wash & Fold</Dropdown.Item>
          <Dropdown.Item eventKey="Normal Washing (Wash & Iron)">Wash & Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Premium Washing">
          <Dropdown.Item   eventKey="Premium Washing (Wash & Fold)">Wash & Fold</Dropdown.Item>
          <Dropdown.Item eventKey="Premium Washing (Wash & Iron)">Wash & Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Dry Cleaning">
          <Dropdown.Item   eventKey="Dry Cleaning (Shirt & Pants)">Shirt & Pants</Dropdown.Item>
          <Dropdown.Item eventKey="Dry Cleaning (Jacket & Hoodie)">Jacket & Hoodie</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Ironing">
          <Dropdown.Item   eventKey="Ironing (Normal Iron)">Normal Iron</Dropdown.Item>
          <Dropdown.Item eventKey="Ironing (Steam Iron)">Steam Iron</Dropdown.Item>
        </Dropdown.Menu>


        <Dropdown.Menu title="Shoes Washing" >
          
      <Dropdown.Item eventKey={`Shoes Washing (Pair Of Shoes - ${numberOfShoes})`}>
        Pair Of Shoes <input id="shoes-pair-input-id" type="number" value={numberOfShoes} onChange={handleInputChange} />
      </Dropdown.Item>
    </Dropdown.Menu>

        <Dropdown.Menu title="Blanket Washing">
          <Dropdown.Item   eventKey="Blanket Washing (Light Weight)">Light Weight Single</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Single Bed)">Light Weight Double</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Double Bed)">Heavy Weight Single</Dropdown.Item>
          <Dropdown.Item eventKey="Blanket Washing (Heavy Weight)">Heavy Weight Double</Dropdown.Item>
          
        </Dropdown.Menu>








      </Dropdown>
    </div>
  );
};

export default ServiceDropdown;
