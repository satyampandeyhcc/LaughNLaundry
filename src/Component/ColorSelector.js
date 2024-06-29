
import React, { useState, useEffect } from 'react';


const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [labelColor, setLabelColor] = useState('#333'); // Initial label color

  const colors = [

    { label: 'Order Placed', value: '#FFC60029',textColor: '#FFC600' },
    { label: 'Picked', value: '#0F60FF29',textColor: '#0F60FF' },
    { label: 'Processing', value: '#0FB7FF29',textColor: '#0FB7FF' },
        { label: 'Out for Delivery', value: '#33189D29',textColor: '#33189D' },
        { label: 'Delivered', value: '#28C76F29',textColor: '#28C76F' },
  ];

  useEffect(() => {
    // Set initial color on component mount
    const initialColor = colors[0];
    setSelectedColor(initialColor.value);
    setLabelColor(initialColor.textColor);
  }, []); // Empty dependency array to run this effect only once on mount

  const handleColorChange = (event) => {
    const selectedOption = colors.find((color) => color.value === event.target.value);
    setSelectedColor(event.target.value);
    setLabelColor(selectedOption ? selectedOption.textColor : '#333');
  };

  return (
    <div>
      
      <select
         id="colorSelector"
         onChange={handleColorChange}
         style={{ backgroundColor: selectedColor, color: labelColor, fontWeight: 'bold', padding:8,  border: '1px solid #ccc',borderRadius: '4px'  }}
      >
       {colors.map((color) => (
          <option
            key={color.value}
            value={color.value}
            style={{ color: color.textColor,fontWeight: 'bold' }}
          >
            {color.label}
          </option>
        ))}
      </select>
     
    </div>
  );
};

export default ColorSelector;
