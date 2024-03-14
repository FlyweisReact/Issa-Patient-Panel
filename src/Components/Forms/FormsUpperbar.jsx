// Navbar.js
import React from 'react';
import './FormsUpperbar.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';


const FormUpper = () => {;
    const navigate = useNavigate()

  return (
    <>
      <div >
        <div className='formsheading2' >
          <div className="checkboxitem125555">

            <label>Annual Assessment</label>
            <input
              type="checkbox"
            />
          </div>
          <div className="checkboxitem125555">

            <label >Initial Assessment</label>
            <input
              type="checkbox"
            />
          </div>
      </div>
      
    </div>
    </>
  );
};

export default FormUpper;
