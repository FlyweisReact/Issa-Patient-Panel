import React,{useEffect,useRef} from 'react';

function AutoSize({type: type1,value,setValue,placeholder}) {
  const inputRef = useRef(null);

    const calculateWidth = (text) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = '16px Arial'; 
      return context.measureText(text).width + 10; 
    };
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.width = `${calculateWidth()}px`;
    }
  }, [value]);


  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const inputStyle = {
    
    borderRadius: '4px',
    padding: '5px',
    fontSize: '16px',
    width: `${calculateWidth(value)}px`, 
    minWidth: `${type1?"125px":"25px"}`,
    maxWidth: `100%`,
    boxSizing: 'border-box', 
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