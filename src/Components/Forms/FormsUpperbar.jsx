// Navbar.js
import React from 'react';
import './FormsUpperbar.css'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';


const FormUpper = ({assessmentType,setAssessmentType}) => {;
    const navigate = useNavigate();

  return (
    <>
      <div >
        <div className='formsheading-initial-assestment' >
          <div className="checkboxitem125555">

            <label>Annual Assessment</label>
            <input
              type="checkbox" checked={assessmentType==="Annual Assessment"} onChange={()=>setAssessmentType("Annual Assessment")}
            />
          </div>
          <div className="checkboxitem125555" >

            <label >Initial Assessment</label>
            <input
              type="checkbox" checked={assessmentType==="Initial Assessment"} onChange={()=>setAssessmentType("Initial Assessment")}
            />
          </div>
      </div>
      
    </div>
    </>
  );
};

export default FormUpper;
