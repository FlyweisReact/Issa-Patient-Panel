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
import { useNavigate } from "react-router-dom";
// import Vitals from "../Vitals/Vitals";


const Appointments = () => {
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
        <p>Appointment Scheduling</p>
      </div>
      <div className='Schedulingcards'>
        <div className="Scheduling-card">
          <img src={scheduling1} alt="Icon" className="card-icon" />
          <Link to={'/booknewappointment'}>
            <p>Book New Appointment</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling2} alt="Icon" className="card-icon" />
          <Link to={'/appointmenthistory'}>
            <p>Appointment History</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling3} alt="Icon" className="card-icon" />
          <Link to={'/manageappointment'}>
            <p>Manage Appointments</p>
          </Link>
        </div>
      </div>
      <div >
      <Vital/></div>

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

      {/* <div className="appointmentcontent">
        <p>Ongoing Medications</p>
        <p onClick={()=>setView1(!view1)}>VIEW ALL</p>
      </div> */}
      {/* <div className="appointmentCard">
        {
          view1 ?  medication?.data?.map((appointment, index) => (
            <MedicationsCard
              key={index}
              name={appointment?.name}
              imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
              dose={appointment?.timeStatus?.[0]?.time}
              startfrom={new Date(appointment?.date).toLocaleDateString()}
              duration={appointment?.duration}
            />
          )): medication?.data?.slice(0,4)?.map((appointment, index) => (
            <MedicationsCard
              key={index}
              name={appointment?.name}
              imageUrl={appointment?.adminId?.profilePic?appointment?.adminId?.profilePic:nurse1}
              dose={appointment?.timeStatus?.[0]?.time}
              startfrom={new Date(appointment?.date).toLocaleDateString()}
              duration={appointment?.duration}
            />
          ))
        }

      </div> */}
      <div className="appointmentcontent">
        <p>Upload your script</p>
        {/* <p onClick={() => setModalShow(true)}>Add</p> */}

      </div>
            <div style={{display:"flex" ,gap:"20px" ,alignItems:"center",}}>
      {/* {
        script?.data?.slice(1,5)?.map((item,i)=>(
          <div key={i} style={{ width: "249px", height: "128px" }}>
          <img src={upload} alt="" onClick={()=>downloadPdf(item?.document)} style={{cursor:"pointer"}} />
        </div>
        ))
      } */}
        {/* display: "none"  */}
        {/* <div style={{ width: "249px", height: "128px", }}>
          <img src={upload} alt="" onClick={()=>downloadPdf(script?.document)} style={{cursor:"pointer"}} />
        </div> */}

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
