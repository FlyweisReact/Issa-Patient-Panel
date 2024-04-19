// Appointments.js
import React, { useEffect, useState } from "react";
import AppointmentsCard from "../Cards/AppointmentsCard";
import MedicationsCard from "../MedicationsCard/MedicationsCard";
import "./Appointments.css";
import { ClipLoader } from "react-spinners";
import cards from "../../img/card1.png";
import Medications from "../../img/Medications.png";
import upload from "../../img/upload.png";
import nurse1 from "../../img/nurse (1).png";
import scheduling1 from "../../img/sheduling1 (1).png";
import scheduling2 from "../../img/sheduling1 (2).png";
import scheduling3 from "../../img/sheduling1 (3).png";
import {
  appointment_Upcoming,
  user_detail,
  uploadDocument,
  createApi,
  getApi,
} from "../../Api_Collection/Api";
import Vital from "../VitalNew/Vital";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


const Appointments = () => {
  // document model
  const [show, setShow] = useState(false);
  const [documents, setDocuments] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");


  const [appoinmentUpcoming, setAppoinmentUpcoming] = useState("");
  const [view, setView] = useState(false);

  useEffect(() => {
    user_detail(setId);
    appointment_Upcoming(setAppoinmentUpcoming);
  }, []);

console.log(appoinmentUpcoming?.data,"data is print")
  // files Name
const FilesNames = [
    "Progress Note",
    "Discharge",
    "Activities of Daily Living Tracking Form",
    "Financial Transactions Record",
    "Staffing Note",
    "Authorization for Release of Information",
    "Incident Report",
    "Contact Note",
    "Mars",
    "Medication Reconciliation",
    "Medication Count",
    "Informed Consent for Medications",
    "PRN Medication Log",
    "Mental Status",
    "Refusal of Medical Treatment Form",
    "Appointment Tracking Log",
  ];

const DocumentUploader = (props) => {
    const [fileType, setFileType] = useState("");
    const [file, setFile] = useState("");
    const [arr, setArr] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);
    const [patientArr, setPatientArr] = useState({});
  
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
      uploadDocument({
        payload: filePayload,
        setArr,
        setLoading: setUploading,
      });
    };
  
    const payload = {
      patientId: id,
      data: arr,
    };
  
    const submitHandler = () => {
      const additionalFunctions = [props.onHide, props?.fetchDocument];
      createApi({
        url: `employee/createUploadDocument1`,
        payload,
        successMsg: "Uploaded !",
        setLoading: setSubmitLoading,
        additionalFunctions,
      });
    };
  
    useEffect(() => {
      if (props?.show) {
        if (!props?.patitentId) {
          getApi({
            url: "employee/getPatient",
            setResponse: setPatientArr,
          });
        }
      }
    }, [props]);
  
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
                <FontAwesomeIcon 
        icon={faTimes} 
        className="fa-xmark" 
        onClick={props.onHide} 
      />
              </div>
  
              <div className="wrapper">
               
  
                <div className="flexbox">
                  <div className="items">
                    <p className="head">Actions</p>
                    <button type="submit">
                      {uploading ? (
                        <ClipLoader color="#fff" />
                      ) : (
                        "Add Additional files"
                      )}
                    </button>
                  </div>
                  <div className="items">
                    <p className="head">File Type</p>
                    <select onChange={(e) => setFileType(e.target.value)}>
                      <option value=""> Select Prefrence </option>
                      {FilesNames?.map((i) => (
                        <option value={i} key={i}>
                          {" "}
                          {i}{" "}
                        </option>
                      ))}
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
                        <FontAwesomeIcon
        icon={faTrashCan}
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
                    onClick={() => submitHandler()}
                    type="button"
                  >
                    {submitLoading ? <ClipLoader color="#fff" /> : "Upload Files"}
                  </button>
                </div>
              </div>
            </form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="appointmentcontainer">
      <div className="appointmentcontent">
        <p>Appointment Scheduling</p>
      </div>
      <div className="Schedulingcards">
        <div className="Scheduling-card">
          <img src={scheduling1} alt="Icon" className="card-icon-appointment" />
          <Link to={"/booknewappointment"}>
            <p>Book New Appointment</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling2} alt="Icon" className="card-icon-appointment" />
          <Link to={"/appointmenthistory"}>
            <p>Appointment History</p>
          </Link>
        </div>
        <div className="Scheduling-card">
          <img src={scheduling3} alt="Icon" className="card-icon-appointment" />
          <Link to={"/manageappointment"}>
            <p>Manage Appointments</p>
          </Link>
        </div>
      </div>

      <div className="appointmentcontent">
        {appoinmentUpcoming?.data?.length > 0 ?   <p>Upcoming Appointments</p> :   <p>No Upcoming Appointments</p>}
      
        {/* <p onClick={() => setView(!view)}>VIEW ALL</p> */}
      </div>
      <div className="appointmentCard">
        {view
          ? appoinmentUpcoming?.data?.map((appointment, index) => (
              <AppointmentsCard
                key={index}
                imageUrl={
                  appointment?.adminId?.profilePic
                    ? appointment?.adminId?.profilePic
                    : nurse1
                }
                date={new Date(appointment?.date).toLocaleDateString()}
                slot={appointment?.time}
                location={appointment?.adminId?.address}
              />
            ))
          : appoinmentUpcoming?.data
              ?.slice(0, 4)
              ?.map((appointment, index) => (
                <AppointmentsCard
                  key={index}
                  imageUrl={
                    appointment?.adminId?.profilePic
                      ? appointment?.adminId?.profilePic
                      : nurse1
                  }
                  date={new Date(appointment?.date).toLocaleDateString()}
                  slot={appointment?.time}
                  location={appointment?.adminId?.address}
                />
              ))}
      </div>

      <div>
        <Vital />
      </div>

      <div className="appointmentcontent">
        <p>Upload Document</p>
      </div>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={() => setShow(true)}
          style={{
            backgroundColor: "#0066ff",
            cursor: "pointer",
            width: "150px",
            height: "40px",
            borderRadius: "20px",
            outline: "none",
            border: "none",
            color: "white",
          }}
        >
          Upload
        </button>
      </div>

      {/* model section */}

      <DocumentUploader show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Appointments;
