// Appointments.js
import React, { useEffect, useState } from "react";
import AppointmentsCard from "../Cards/AppointmentsCard";
import MedicationsCard from "../MedicationsCard/MedicationsCard";
import "./Appointments.css";
import cards from "../../img/card1.png";
import Medications from "../../img/Medications.png";
import upload from "../../img/upload.png"
import nurse1 from "../../img/nurse (1).png";
import scheduling1 from '../../img/sheduling1 (1).png'
import scheduling2 from '../../img/sheduling1 (2).png'
import scheduling3 from '../../img/sheduling1 (3).png'
import {
  appointment_Upcoming,
  appointment_get, medication_get, user_detail, getAllPatientMedication, show_notification
} from "../../Api_Collection/Api";
import Vital from "../VitalNew/Vital";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
// import Vitals from "../Vitals/Vitals";


const FileUpload = () => {
  //model 
  const [modalShow, setModalShow] = useState(false);
  //state
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [appoinmentPast, setAppoinmentPast] = useState("");
  const [patientId,setPatientId]=useState("")
  const [medication,setMedication]=useState("")
  const [script,setScript]=useState("")


  //view panel
  const [view,setView]=useState(false);
  const [view1,setView1]=useState(false);

  //add script 
  const [addScript, setAddScript] = useState("");

  // useEffect(()=>{
  //   medication_get(setMedication);
  // },[patientId])


  useEffect(() => {
    user_detail(setPatientId);
    appointment_Upcoming(setAppoinmentUpcoming);
    appointment_get(setAppoinmentPast);
    getAllPatientMedication(setScript);
    medication_get(setMedication);
  }, []);
  const downloadPdf = async (blobUrl) => {

      const anchor = document.createElement('a');
      anchor.href = blobUrl;
      anchor.download = 'medication.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';


    input.onchange = (event) => {
      const file = event.target.files[0];
      setAddScript(file);
    };

    input.click(); // Trigger a click event to open the file dialog
  };

  useEffect(() => {
    if (addScript) {
      show_notification("Success !", "Document Upload Successfully", "success");
    }
  }, [addScript]);


  function MyVerticallyCenteredModal(props) {
    const [addScript, setAddScript] = useState("");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select Script</Form.Label>
            <Form.Control type="file" placeholder="select File" onChange={(e) => setAddScript(e.target.files[0])} />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="appointmentcontainer">
      <div className='appointmentcontent'>
        <p style={{fontSize:"24px"}}>File Upload</p>
      </div>
      

      <div className="file_parent">

            <div style={{padding:"10px"}}>
                <h5>Action</h5>
                <button type="button" className="file_parent_button">Add Additinal Files</button>
            </div>
            <div >
                <h5>File Type</h5>
                <select style={{width:"300px"}}>
                    <option value="">PDF</option>
                    <option value="">DOCX</option>
                    <option value="">HTML </option>
                    <option value="">HTM</option>
                    <option value="">XLS </option>
                    <option value="">XLSX</option>
                    <option value="">JPG</option>
                    <option value="">PNG</option>
                 
                </select>
            </div>
            <div>
                <h5>File Name</h5>
                <input type="file"/>
            </div>

      </div>

      <div style={{textAlign:"right",marginTop:"1rem"}} >
        <button style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"2px"}}>Upload</button>
      </div>
     
     
    </div>
  );
};

export default FileUpload;
