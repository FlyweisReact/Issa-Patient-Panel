import React, { useEffect, useState } from 'react'
import './Appointment_Scheduling.css'
import AppointmentsCard from '../Cards/AppointmentsCard'
import scheduling1 from '../../img/sheduling1 (1).png'
import scheduling2 from '../../img/sheduling1 (2).png'
import scheduling3 from '../../img/sheduling1 (3).png'
import nurse1 from "../../img/nurse (1).png";
import cards from '../../img/card1.png'
import { Link } from 'react-router-dom'
import {
    appointment_Upcoming,
    appointment_get,
  } from "../../Api_Collection/Api";

const Appointment_Scheduling = () => {
    const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
    const [appoinmentPast, setAppoinmentPast] = useState("");


    useEffect(() => {
        appointment_Upcoming(setAppoinmentUpcoming);
        appointment_get(setAppoinmentPast);
      }, []);
      
    return (
        <div className='Appointment_Schedulingcontainer'>
          
            <div className='appointmentcontent'>
                <p>Upcoming Appointments</p>
            </div>
            <div className='SchedulingCard'>
            <div className='todayappointments'>
                <p>TODAY</p>
                {appoinmentUpcoming?.data?.map((appointment, index) => (
                     <AppointmentsCard
                     key={index}  
                     imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
                     date={new Date(appointment?.date).toLocaleDateString()}
                     slot={appointment?.time}
                     location={appointment?.adminId?.address}
                   />
                ))}
            </div>
            <div className='tomorrowappointments'>
                <p>TOMORROW</p>
                {appoinmentPast?.data?.map((appointment, index) => (
                     <AppointmentsCard
                     key={index}  
                     imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
                     date={new Date(appointment?.date).toLocaleDateString()}
                     slot={appointment?.time}
                     location={appointment?.adminId?.address}
                   />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Appointment_Scheduling