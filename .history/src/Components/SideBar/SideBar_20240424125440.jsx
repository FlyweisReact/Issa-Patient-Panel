/** @format */

// Sidebar.js
import React, { useState } from "react";
import "./SideBar.css";
import { PiHouseBold } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../img/OasisNotes.png";
import { show_notification } from "../../Api_Collection/Api.js";

const Sidebar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const location = useLocation()
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
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <span className="closeButton" onClick={toggleMenu}>
        <MdClose />
      </span>
      <div
        className={`menu-item ${location.pathname === "home" && "active"}`}
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
