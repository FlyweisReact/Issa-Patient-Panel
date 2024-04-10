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
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useNavigate } from "react-router-dom";


const Appointments = () => {

  // document model
  const [show, setShow] = useState(false);

  //navigate
  const navigate=useNavigate();
  //model 
  const [modalShow, setModalShow] = useState(false);
  //state
  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [appoinmentPast, setAppoinmentPast] = useState("");
  const [patientId,setPatientId]=useState("")
  const [medication,setMedication]=useState("")
  const [script,setScript]=useState("")


  const [view,setView]=useState(false);


  const [addScript, setAddScript] = useState("");


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

  function DocumentUploader(props) {
    const [fileType, setFileType] = useState("");
    const [file, setFile] = useState("");
    const [arr, setArr] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

    const removeFile = (index) => {
      const filterThis = arr?.filter((_, i) => index !== i);
      setArr(filterThis);
    };

    // File Upload
    const filePayload = new FormData();
    filePayload.append("file", file);
    filePayload.append("type", fileType);
    const uploadFiles = (e) => {
      e.preventDefault();
      // uploadDocument({
      //   payload: filePayload,
      //   setArr,
      //   setLoading: setUploading,
      // });
    };



    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="file-upload-modal">
          <Container className="full-width-container">
            <form onSubmit={uploadFiles}>
              <div className="close-header">
                <h5>File Upload </h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => props.onHide()}
                ></i>
              </div>
              <div className="wrapper">
                <div className="flexbox">
                  <div className="items">
                    <p className="head">Actions</p>
                 
                  </div>
                  <div className="items">
                    <p className="head">File Type</p>
                    <select onChange={(e) => setFileType(e.target.value)}>
                      <option value=""> Select Prefrence </option>
                      <option vale="First Type"> First Type </option>
                      <option vale="Second Type">Second Type </option>
                    </select>
                  </div>
                  <div className="items">
                    <p className="head">File Name</p>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                </div>

                <table className="colored_table mt-3">
                  <thead>
                    <tr>
                      <th className="text-start">Type</th>
                      <th className="text-start">File</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr?.map((i, index) => (
                      <tr key={index}>
                        <td className="text-start"> {i.type} </td>
                        <td className="text-start">
                          <a href={i.document} target="_blank" rel="noreferrer">
                            View File
                          </a>
                        </td>
                        <td>
                          <i
                            className="fa-solid fa-trash-can cursor-pointer"
                            onClick={() => removeFile(index)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="btn-container">
                  <button
                    className="upload_files"
                 
                    type="button"
                  >
                 
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <div className="appointmentcontainer">
         <DocumentUploader show={show} onHide={() => setShow(false)} />
      <div className='appointmentcontent'>
        <p>Appointment Scheduling</p>
      </div>
      <div className='Schedulingcards'>
        <div className="Scheduling-card">
          <img src={scheduling1} alt="Icon" className="card-icon-appointment" />
          <Link to={'/booknewappointment'}>
            <p>Book New Appointment</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling2} alt="Icon" className="card-icon-appointment" />
          <Link to={'/appointmenthistory'}>
            <p>Appointment History</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling3} alt="Icon" className="card-icon-appointment" />
          <Link to={'/manageappointment'}>
            <p>Manage Appointments</p>
          </Link>
        </div>
      </div>
      

      <div className="appointmentcontent">
        <p>Upcoming Appointments</p>
        <p onClick={()=>setView(!view)}>VIEW ALL</p>
      </div>
      <div className="appointmentCard">
  {
    view ? 
      appoinmentUpcoming?.data?.map((appointment, index) => (
        <AppointmentsCard
          key={index}  
          imageUrl={appointment?.adminId?.profilePic ? appointment?.adminId?.profilePic : nurse1}
          date={new Date(appointment?.date).toLocaleDateString()}
          slot={appointment?.time}
          location={appointment?.adminId?.address}
        />
      )) :
      appoinmentUpcoming?.data?.slice(0, 4)?.map((appointment, index) => (
        <AppointmentsCard
          key={index}  
          imageUrl={appointment?.adminId?.profilePic ? appointment?.adminId?.profilePic : nurse1}
          date={new Date(appointment?.date).toLocaleDateString()}
          slot={appointment?.time}
          location={appointment?.adminId?.address}
        />
      ))
  }
</div>

<div >
      <Vital/></div>

      <div className="appointmentcontent">
        <p>Upload Document</p>
   

      </div>
            <div style={{display:"flex" ,gap:"20px" ,alignItems:"center",}}>
 

        <button onClick={()=>navigate("/patient_Upload_script")} style={{ backgroundColor: "#0066ff", cursor: "pointer", width: "150px", height: "40px", borderRadius: "20px", outline: "none", border: "none", color: "white" }}>Upload</button>
   </div>

      {/* model section */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
     
    </div>
  );
};

export default Appointments;
