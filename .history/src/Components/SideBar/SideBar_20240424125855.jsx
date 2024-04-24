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
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const isItemActive = (itemName) => {
    return itemName === activeItem ? "active" : "";
  };

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
    {
      title: "Home",
      icon: <PiHouseBold />,
      link: "/patient_panel",
    },
  ];

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
