import React,{useEffect,useRef} from 'react';

function AutoSize({type: type1,value,setValue,placeholder}) {
  const inputRef = useRef(null);

    // Calculate the width of the input based on its content
    const calculateWidth = (text) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = '16px Arial'; // Set the font size and style
      return context.measureText(text).width + 5; // Add some padding
    };
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${calculateWidth()}px`;
    }
  }, [value]); // Update width when the value changes

  // Function to handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Style object for the input
  const inputStyle = {
    
    borderRadius: '4px',
    padding: '5px',
    fontSize: '16px',
    width: `${calculateWidth(value)}px`, // Dynamic width based on content
    minWidth: `${type1?"125px":"25px"}`, // Minimum width
    maxWidth: `100%`, // Maximum width
    boxSizing: 'border-box', // Include padding in the width calculation
    border:"none",
    outline:"none",
    whiteSpace:"nowrap",
  };
  

  return (
    <input
    {...(type1 ? { type: type1 } : { type: "text" })}
      style={inputStyle}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
}

export default AutoSize;