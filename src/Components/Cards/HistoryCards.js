// Card.js
import React from 'react';
import './AppointmentsCard.css';
import { CiClock2, CiLocationOn, CiCalendar   } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { LiaIdCardSolid } from "react-icons/lia";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {change_appointment_status} from "../../Api_Collection/Api"



const HistoryCard = ({name, imageUrl, from, visit,  referenceId ,status=null,id,again_Call_appointment}) => {


const handleStatus=async(id)=>{
  await change_appointment_status(id);
  await again_Call_appointment();
}

  return (
    <div className="card">
    <div className='cardscontent'>
      <img src={imageUrl} alt="Card" className="card-image" />
      <div className="card-content">
      
        <h6>{name}</h6>
        <RiDeleteBin6Fill style={{ color: "red" }} className='delete_button' onClick={()=>handleStatus(id)}/>
        <p><CiCalendar  style={{color:'#1E1E1E99', fontSize:'20px'}}/>FROM: <span style={{color:'#1A9FB2'}}>{new Date(from).toLocaleDateString()}</span></p>
        <p><SlLocationPin   style={{color:'#1E1E1E99', fontSize:'20px'}}/>VISIT: {visit}</p>
        {
          status &&  <p style={{marginBottom:"1rem"}}>status: {status}</p>
        }
        <p><LiaIdCardSolid  style={{color:'#1E1E1E99', fontSize:'20px'}} />REFERENCE ID: {referenceId}</p>
       
       
      </div> 
      </div>
    </div>
  );
};

export default HistoryCard;
