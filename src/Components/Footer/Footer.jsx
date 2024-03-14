// Footer.js

import React from "react";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="logo1">
          <h1>Logo</h1>
          <p>201 green park View, New Delhi, 1256203</p>
          <div className="footer-social ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-links">
          <h5>Home</h5>
          <ul>
            <li>
              <a href="#">Eye Care</a>
            </li>
            <li>
              <a href="#">Skin Care</a>
            </li>
            <li>
              <a href="#">Pathology</a>
            </li>
            <li>
              <a href="">Medicine</a>
            </li>
            <li>
              <a href="">Dental</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h5>Useful Links</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pathology</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Appointment</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h5 style={{ marginBottom: "55px" }}>Services</h5>
          <ul>
            <li>
              <a href="#">Emergency Services</a>
            </li>
            <li>
              <a href="#">Qualified</a>
            </li>
          </ul>
          <div className="input-container">
            <input
              type="text"
              placeholder="Email address"
              className="emailinput"
            />
            <div className="input-icon">
              <IoIosSend />
            </div>
          </div>
        </div>
      </div>
      <div className="allrights">© Forturn 2023. All rights reserved</div>
    </footer>
  );
};

export default Footer;
