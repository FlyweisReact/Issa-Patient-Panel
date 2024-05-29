/** @format */

// Sidebar.js
import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../img/OasisNotes.png";
import { BaseUrl, show_notification } from "../../Api_Collection/Api.js";
import { useDispatch } from 'react-redux';
import { CiSaveDown2 } from "react-icons/ci";
import { LOGOUT } from '../../Store/authSlice.js';
import { LiaWpforms } from "react-icons/lia";
import axios from "axios";

const Sidebar = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const isItemActive = (itemName) => {
    return itemName === activeItem ? "active" : "";
  };
  const [patientData,setPatientData]=useState({});

  const getAllPatientData=async()=>{
    
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
    
      const res = await axios.get(`${BaseUrl}Patient/getProfile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    
     setPatientData(res?.data?.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Request error:', error.request);
      } else {
        // Other errors (e.g., no token, config errors)
        console.error('Error:', error.message);
      }
    }
  }

  useEffect(()=>{
    getAllPatientData()
  },[])

  const data = [
    {
      title: "Home",
      icon: <PiHouseBold />,
      link: "/patient_panel",
    },
    {
      title: "Intake",
      icon: <FaRegFileAlt />,
      link: "/intake",
    },
    // {
    //   title: "Draft Intake",
    //   icon: <LiaWpforms style={{fontWeight:"bold",fontSize:"1.8rem"}}/>,
    //   link: "/draft-intake",
    // },
  ];

  return (
    <div className="sidebar">
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="logo">
          <img style={{maxWidth:"70px",maxHeight:"60px"}}  src={patientData?.adminId?.logo ||logo} alt="" />
        </div>
      </div>
      <span className="closeButton" onClick={toggleMenu}>
        <MdClose />
      </span>
      {data?.map((i, index) => (
        <div
          key={index}
          className={`menu-item ${location.pathname === i.link && "active"}`}
          onClick={() => navigate(i.link)}
        >
          <div className="icon1">{i.icon}</div>
          <div className={`text ${location.pathname === i.link && "active"}`}>
            {i.title}
          </div>
        </div>
      ))}

      <div
        className={`menu-item ${isItemActive("logout")}`}
        onClick={() => handleItemClick("logout")}
      >
        <div className="icon1">
          <IoMdLogOut
            onClick={() => {
              dispatch(LOGOUT());
              show_notification(
                "LogOut!",
                "User_LogOut successfully",
                "success"
              );
              localStorage.removeItem("token");
              navigate("/");
            }}
          />
        </div>
        <div className={`text ${isItemActive("home")}`}>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
