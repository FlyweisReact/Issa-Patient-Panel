import React, { useEffect, useState } from "react";
import "./Profile.css";
import AppointmentsCard from "../Cards/AppointmentsCard";
import profile from "../../img/profile1.png";
import cards from "../../img/card1.png";
import nurse1 from "../../img/nurse (1).png";
import nurse2 from "../../img/nurse (2).png";
import nurse3 from "../../img/nurse (3).png";
import { user_detail,appointment_Upcoming } from "../../Api_Collection/Api";

const Profile = () => {
  const [user, setUser] = useState("");
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");

  useEffect(() => {
    user_detail(setUser);
    appointment_Upcoming(setAppoinmentUpcoming);
  }, []);

  console.log(user, "user data");
  
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img src={profile} alt="Profile" className="profile-image" />
          <h2>{user?.fullName}</h2>
          <p>
            <span>STATUS:</span> ADMITTED AT CENTRE 1
          </p>
        </div>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <p>
            <span>DATE OF BIRTH : </span>
            {new Date(user?.dateOfBirth).toLocaleDateString()}
          </p>
          <p>
            <span>AGE : </span>
            {user?.age}
          </p>
          <p>
            <span>GENDER : </span>
            {user?.gender}
          </p>
          <p>
            <span>EMAIL : </span>
            {user?.email}
          </p>
          <p>
            {" "}
            <span>CONTACT NO. : </span>
            {user?.mobileNumber}
          </p>
          <p>
            <span>ADDRESS : </span>
            {user?.address}
          </p>
        </div>
      </div>
      <div className="profile_right">
        <div className="profileppointments">
        <p>Upcoming Appointment</p>
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
        <div className="nurse">
          <p>Employee</p>
          <div className="nurse-card">

            {
              user?.employeesId?.map((item,i)=>(
                <div className="nursecard" key={i}>
              <img src={item?.profilePic?item?.profilePic:nurse1} alt="" />
              <p>{item?.fullName}</p>
         
            </div>
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
