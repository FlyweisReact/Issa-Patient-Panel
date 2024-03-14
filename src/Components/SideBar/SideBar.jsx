// Sidebar.js
import React, { useState } from "react";
import "./SideBar.css";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../img/OasisNotes.png"
import { show_notification } from "../../Api_Collection/Api.js";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const isItemActive = (itemName) => {
    return itemName === activeItem ? "active" : "";
  };

  return (
    <div className="sidebar">
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div className="logo" >
          <img src={logo} alt="" style={{ maxHeight: "3rem", paddingLeft: "5px" }} />
      </div>
      </div>
      <span className="closeButton" onClick={toggleMenu}>
        <MdClose />
      </span>
      <div
        className={`menu-item ${isItemActive("home")}`}
        onClick={() => handleItemClick("home")}
      >
        <Link to={"/patient_panel"}>
          <div className="icon1">
            <PiHouseBold />
          </div>
        </Link>
        <div className={`text ${isItemActive("home")}`}>Home</div>
      </div>
      <div
        className={`menu-item ${isItemActive("intake")}`}
        onClick={() => handleItemClick("intake")}
      >
        <Link to={"/intake"}>
          <div className="icon1">
            <FaRegFileAlt />
          </div>
        </Link>
        <div className={`text ${isItemActive("home")}`}>Intake</div>
      </div>
      {/* <div
        className={`menu-item ${isItemActive("appointment_scheduling")}`}
        onClick={() => handleItemClick("appointment_scheduling")}
      >
        <Link to={"/appointment_scheduling"}>
          <div className="icon1">
            <IoPeopleOutline />
          </div>
        </Link>
        <div className={`text ${isItemActive("home")}`}>
          Appointment Scheduling
        </div>
      </div> */}
      {/* <div
        className={`menu-item ${isItemActive("profile")}`}
        onClick={() => handleItemClick("profile")}
      >
        <Link to={"/profile"}>
          <div className="icon1">
            <CgProfile />
          </div>
        </Link>
        <div className={`text ${isItemActive("home")}`}>Profile</div>
      </div> */}
      <div
        className={`menu-item ${isItemActive("logout")}`}
        onClick={() => handleItemClick("logout")}
      >
        <div className="icon1">
          <IoMdLogOut
            onClick={() => {
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
