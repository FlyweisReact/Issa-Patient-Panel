// Modal.js
import React from 'react';
import './ProfileModal.css'; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const ProfileModal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content-update" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span>
        {children}
      </div>
    </div>
  );
};

export default ProfileModal;
