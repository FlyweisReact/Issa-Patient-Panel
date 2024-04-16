import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HistoryCard from "../Cards/HistoryCards";
import cards from "../../img/card1.png";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "./ManageAppointments.css";
import { appointment_Upcoming } from "../../Api_Collection/Api";
import nurse1 from "../../img/nurse (1).png";

const ManageAppointments = () => {
  const [appoinmentPast, setAppoinmentPast] = useState("");

  useEffect(() => {
    appointment_Upcoming(setAppoinmentPast);
  }, []);

  const again_Call_appointment=()=>{
    appointment_Upcoming(setAppoinmentPast);
  }
  
  const navigate = useNavigate();

  return (
    <div className="booking-container">
      <div className="backbutton">
        <IoArrowBackCircle
          style={{
            color: "#1A9FB2",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="form-container">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>MANAGE APPOINTMENTS</h1>
          </div>
        </div>
        <div className="manage-container">
          <div className="manageCard">
            <h5>
              {" "}
              <RiDeleteBin6Fill style={{ color: "red" }} /> Cancel Appointment
            </h5>
            <p>
              <span>Select & Mark</span> all your Upcoming Appointments you want
              to Cancel
            </p>
            <div className="manageppointments">
              {appoinmentPast?.data?.map((history, index) => (
                <HistoryCard
                id={history?._id}
                again_Call_appointment={again_Call_appointment}
                 name={history?.adminId?.address}
                  imageUrl={history?.adminId?.profilePic?history?.adminId?.profilePic:nurse1}
                  from={history.date}
                  visit={history.reasonForVisit}
                  referenceId={history.patientId}
                  status={history?.status}
                />
              ))}
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ManageAppointments;
