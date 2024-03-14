// Modal.js
import React from 'react';
import './NotificationModal.css';
import { IoMdClose } from "react-icons/io";

const ProfileModal = ({ onClose, children }) => {
  return (
    <div className="notificationmodal-overlay" onClick={onClose}>
      <div className="notificationmodal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span>
        {children}
      </div>
    </div>
  );
};

export default ProfileModal;
