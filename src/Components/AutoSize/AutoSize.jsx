import React from 'react';

function AutoSize({value,setValue,placeholder}) {

  // Function to handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Calculate the width of the input based on its content
  const calculateWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '16px Arial'; // Set the font size and style
    return context.measureText(text).width + 40; // Add some padding
  };

  // Style object for the input
  const inputStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '10px',
    fontSize: '16px',
    width: `${calculateWidth(value)}px`, // Dynamic width based on content
    minWidth: '150px', // Minimum width
    maxWidth: `${calculateWidth(value)}px`, // Maximum width
    boxSizing: 'border-box', // Include padding in the width calculation
    border:"none",
    outline:"none",
    whiteSpace:"nowrap",
  };
  
  return (
    <input
      type="text"
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default AutoSize;