import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import formupload from "../../img/formupload.png";
import { appoinment_Booking } from "../../Api_Collection/Api";

const BookAppointment = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [contectNumber, setContectNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [appoinmentDate, setAppoinmentDate] = useState("");
  const [appoinmentTime, setAppoinmentTime] = useState("");

  const data = {
    name: name,
    contactNumber: contectNumber,
    reasonForVisit: reasonForVisit,
    appointmentDate: appoinmentDate,
    appointmentTime: appoinmentTime,
  };
  const initial_value = () => {
    setName("");
    setContectNumber("");
    setReasonForVisit("");
    setAppoinmentDate("");
    setAppoinmentTime("");
  };
  const handlePostData = (e) => {
    e.preventDefault();
    appoinment_Booking(data);
    initial_value();
    navigate("/appointment_scheduling")
  };
  return (
    <>
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
              <h1>BOOK NEW APPOINTMENT</h1>
            </div>
          </div>
          <form onSubmit={handlePostData}>
            <div className="booking-section">
              <h2>Booking Details</h2>
              <div className="form-field">
                <label htmlFor="AHCCCS">Name</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={name}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Contact Number</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={contectNumber}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setContectNumber(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Reason For Visit</label>
                <textarea
                  id="programlocation&address"
                  rows={5}
                  cols={130}
                  placeholder="Type Here......"
                  required
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                />
              </div>
              <h2>Choose your Slot</h2>
              <div className="form-field">
                <label htmlFor="dateOfBirth">Appointment Date</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value={appoinmentDate}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setAppoinmentDate(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="gender">Time Slot</label>
                <select
                  style={{ color: "#1A9FB2" }}
                  id="gender"
                  value={appoinmentTime}
                  required
                  onChange={(e) => setAppoinmentTime(e.target.value)}
                >
                  <option value="9:30 AM">9:30 AM ( Morning )</option>
                  <option value="10:30 PM">10:30 PM ( Morning )</option>
                  <option value="10:30 AM">10:30 AM ( evening )</option>
                  <option value="11:30 PM ">11:30 PM ( evening )</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="initalsubmit">
                SUBMIT DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
