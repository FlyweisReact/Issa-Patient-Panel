import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import HistoryCard from "../Cards/HistoryCards";
import cards from "../../img/card1.png";
import nurse1 from "../../img/nurse (1).png";
import {
  appointment_Upcoming,
  appointment_get,
} from "../../Api_Collection/Api";

const AppointmentHistory = () => {
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [appoinmentPast, setAppoinmentPast] = useState("");

  useEffect(() => {
    appointment_Upcoming(setAppoinmentUpcoming);
    appointment_get(setAppoinmentPast);
  }, []);
 
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
          onClick={() => navigate("/appointment_scheduling")}
        />
      </div>
      <div className="form-container">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>MY APPOINTMENTS</h1>
          </div>
        </div>
        <div className="SchedulingCard">
          <div className="todayappointments">
            <p>UPCOMING</p>
            {appoinmentUpcoming?.data?.map((history, index) => (
              <HistoryCard
                key={index}
                imageUrl={history?.adminId?.profilePic?history?.adminId?.profilePic:nurse1}
                from={history.from}
                visit={history.reasonForVisit}
                referenceId={history.patientId}
              />
            ))}
          </div>
          <div className="tomorrowappointments">
            <p>PAST</p>
            {appoinmentPast?.data?.map((history, index) => (
              <HistoryCard
                key={index}
                imageUrl={history?.adminId?.profilePic?history?.adminId?.profilePic:nurse1}
                from={history.from}
                visit={history.reasonForVisit}
                referenceId={history.patientId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentHistory;
