// Card.js
import React from 'react';
import { CiClock2, CiLocationOn, CiCalendar   } from "react-icons/ci";

const MedicationsCard = ({name, imageUrl, dose, startfrom, duration }) => {
  return (
    <div className="card">
    <div className='cardscontent'>
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h6>{name}</h6>
        <p><CiCalendar  style={{color:'#1E1E1E99', fontSize:'20px'}}/> DOSE: {dose}</p>
        <p><CiClock2   style={{color:'#1E1E1E99', fontSize:'20px'}}/> STARTED FROM: {startfrom}</p>
        <p><CiLocationOn  style={{color:'#1E1E1E99', fontSize:'20px'}} /> DURATION: {duration}</p>
      </div> 
      </div>
    </div>
  );
};

export default MedicationsCard;
