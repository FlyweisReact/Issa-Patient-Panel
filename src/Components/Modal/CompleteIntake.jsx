// Modal.js
import React from 'react';
import './CompleteIntake.css';
import { IoMdClose } from "react-icons/io";

const CompleteIntake = ({ onClose, children }) => {
  return (
    <div className="Intakemodal-overlay" onClick={onClose}>
      <div className="Intakemodal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default CompleteIntake;