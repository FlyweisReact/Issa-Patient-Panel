// Card.js
import React from 'react';
import './AppointmentsCard.css';
import { CiClock2, CiLocationOn, CiCalendar   } from "react-icons/ci";


const AppointmentsCard = ({ imageUrl, date, slot, location }) => {
  return (
    <div className="card">
    <div className='cardscontent'>
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
        <h6>MEDICAL APPOINTMENT</h6>
        <p><CiCalendar  style={{color:'#1E1E1E99', fontSize:'20px'}}/> DATE: {date}</p>
        <p><CiClock2   style={{color:'#1E1E1E99', fontSize:'20px'}}/> SLOT: {slot}</p>
        <p><CiLocationOn  style={{color:'#1E1E1E99', fontSize:'20px'}} /> LOCATION: {location}</p>
      </div> 
      </div>
    </div>
  );
};

export default AppointmentsCard;
