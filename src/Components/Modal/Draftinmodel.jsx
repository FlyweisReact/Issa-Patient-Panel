// Modal.js
import React from "react";
import "./SingInModel.css"; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const Draftinmodel = ({ onClose }) => {
  return (
    <div className="modal-overlay-sing" onClick={onClose}>
      <div className="modal-content-sing" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn-sing" onClick={onClose}>
          <IoMdClose style={{ width: "50px", height: "30px" }} />
        </span>
        <p style={{color:"white"}}>Saved And Edit Later On</p>
      </div>
    </div>
  );
};

export default Draftinmodel;

