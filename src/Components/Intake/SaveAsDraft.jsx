/** @format */

import React, { useEffect, useState } from "react";
import "./Intake.css";
import intake1 from "../../img/intake1.png";
import intake2 from "../../img/intake2.png";
import intake3 from "../../img/inatke3.png";
import intake4 from "../../img/inatke4.png";
import intake5 from "../../img/inatke5.png";
import intake6 from "../../img/intake6.png";
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import {user_detail} from "../../Api_Collection/Api"

const SaveAsDraft = () => {
const [profile,setProfile]=useState("");
// const [initialAssetment,setInitialAssetment]=useState("");
// const [nursingAssetment,setNursingAssetment]=useState("");
// const [treatment,setTreatment]=useState("");
// const [safityPlan,setSafityPlan]=useState("");
// const [facesheet,setFacesheet]=useState("");
// const [Residentintake,setResidentintake]=useState("");

const [initialAssetment,setInitialAssetment]=useState(true);
const [nursingAssetment,setNursingAssetment]=useState(true);
const [treatment,setTreatment]=useState(true);
const [safityPlan,setSafityPlan]=useState(true);
const [facesheet,setFacesheet]=useState(true);
const [Residentintake,setResidentintake]=useState(true);

// useEffect(()=>{
//   if(profile){
//     setInitialAssetment(profile?.showInitialAssessment);
//     setNursingAssetment(profile?.showNursingAssessment);
//     setTreatment(profile?.showTreatmentPlan);
//     setSafityPlan(profile?.showSafetyPlan);
//     setFacesheet(profile?.showFaceSheet);
//     setResidentintake(profile?.showResidentIntakes);
//   }
  
// },[profile])

useEffect(()=>{
  user_detail(setProfile);
},[])

  return (
    <>
      <div className="new_intakecontainer mt-3">
        {
          initialAssetment && <div className="small-card">
          <img src={intake1} alt="Icon" className="card-icon" />
          <p>Initial Assessment</p>
          <Link to={"/initial-Assessment-draft"}>
            <span>
              <MdOutlineFileUpload /> upload
            </span>
          </Link>
        </div>
        }
        {
          nursingAssetment && <div className="small-card">
          <img src={intake2} alt="Icon" className="card-icon" />
          <p>Nursing Assessment</p>
          <Link to={"/nursing-assessment-draft"}>
            <span>
              <MdOutlineFileUpload /> upload
            </span>
          </Link>
        </div>
        }

        {
          treatment &&  <div className="small-card">
          <img src={intake3} alt="Icon" className="card-icon" />
          <p>Treatment Plan</p>
          <Link to={"/treatmentplan-draft"}>
            <span>
              <MdOutlineFileUpload /> upload
            </span>
          </Link>
        </div>
        }
        
       
      </div>
      <div className="new_intakecontainer mt-3">
        {
          safityPlan && <div className="small-card">
          <img src={intake4} alt="Icon" className="card-icon" />
          <p>Face Sheet</p>
          <Link to={"/facesheet-draft"}>
            <span>
              <MdOutlineFileUpload /> upload
            </span>
          </Link>
        </div>
        }

        {
          facesheet &&    <div className="small-card">
          <img src={intake5} alt="Icon" className="card-icon" />
          <p>Safety Plan</p>
          <Link to={"/safetyplan-draft"}>
            <span>
              <MdOutlineFileUpload /> upload
            </span>
          </Link>
        </div>
        }
        
     {
      Residentintake && <div className="small-card">
      <img src={intake6} alt="Icon" className="card-icon" />
      <p>Resident Intakes</p>
      <Link to={"/Residentintakes-draft"}>
        <span>
          <MdOutlineFileUpload /> upload
        </span>
      </Link>
    </div>
     }
        
      </div>
    </>
  );
};

export default SaveAsDraft;
