import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Vitals.css";
import { IoIosMenu } from "react-icons/io";
import { Button, Form, Offcanvas } from "react-bootstrap";
import axios from "axios";
import { user_detail } from "../../Api_Collection/Api";

// import { Baseurl, Auth, showMsg } from "../../../../Baseurl";

const Vitals = () => {
  const navigate = useNavigate();
  const drColterRef = useRef(null);
  
  const [showC, setShowC] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState({});
  const [id,setId]=useState("");

  const handleClose = () => setShowC(false);
  const handleShowC = () => setShowC(true);

  const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

  const Token = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const sidebarData = [
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      // link: "/employee/Dashboard",
      name: "Employment Application ",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/2.png" alt="fdn" />,
      // link: "/employee/group-notes",
      name: "Group Notes",
      newIcon: <img src="/Dashboard2/training.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/training.png" alt="fdn" />,
      // link: "/employee/training",
      name: "Training",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/patitent-assigned.png" alt="fdn" />,
      // link: "/assigned-patient/",
      name: "Assigned Patient",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/time-off.png" alt="fdn" />,
      // link: "/employee/time-of-request",
      name: "Time Off Request",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      // link: "/employee/time-sheet",
      name: "Time Sheet/Employee Schedule",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/performance.png" alt="fdn" />,
      // link: "/employee/employee-performance",
      name: "Employee Performance",
      newIcon: <img src="/public/Dashboard2/performance.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdrn" />,
      // link: "/employee/employee-tracking",
      name: "Employee Tracking/ Upload",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/chart.png" alt="fdn" />,
      // link: "/employee/patient-chart ",
      name: "Patient Chart",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/vitals.png" alt="fdn" />,
      // link: "/employee/vitals",
      name: "Patient Vitals",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdn" />,
      // link: "/employee/patient-tracking",
      name: "Patient Tracking",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/medication.png" alt="fdn" />,
      // link: "/employee/medications",
      name: "Medications",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/setting.png" alt="fdn" />,
      // link: "/employee/settings",
      name: "Settings",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/setting.png" alt="fdn" />,
      // link: "/employee/settings",
      name: "Settings",
      newIcon: <img src=" /Dashboard/New folder/hieght.png" alt="fdn" />,
    },
  ];

  useEffect(() => {
    const handleClick = () => {
      setShowC(true);
    };

    const handleResize = () => {
      if (window.innerWidth < 768 && drColterRef.current) {
        drColterRef.current.addEventListener("click", handleClick);
      } else if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  // const getAllpatients = () => {
  //   axios.get(`${Baseurl}employee/getPatient`, Auth()).then((res) => {

  //     setPatients(res.data?.data);
  //   });
  // };

  // useEffect(() => {
  //   getAllpatients();
  // }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
  };


  const getPatitentData = (id) => {
    axios
      .get(`${BaseUrl}employee/getPatientVitalsByPatientId/${id}`, Token)
      .then((res) => {
        console.log(res.data);
        setPatientData(res.data?.data?.[0]);
        console.log(res.data?.data?.[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPatitentData();
  }, []);

  return (
    <>
      {" "}
      <Offcanvas style={{ width: "70%" }} show={showC} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "40px",
            }}
          >
            {sidebarData.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: window.innerWidth < 768 ? "350px" : "auto",
                  width: "auto",
                  padding: ".5rem",
                }}
              >
                {/* <span style={{ marginRight: "10px" }}>{item.newIcon}</span> */}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="nav-wrap-personal">
        {/* <div className="nav-div-personal1">
            <img
              onClick={() => navigate(-1)}
              src="/back_button2.png"
              alt="da"
            />
          </div> */}
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem", display: "flex" }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              flex: "1",
              color: "black",
            }}
          >
            {" "}
            VITALS
          </p>
        </div>
      </div>
      <div
        className="main-div-employment vital-grid"
        style={{ width: "90%", margin: "auto", textAlign: "center" }}
      >
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/thermameter.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Body Temp.
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bodyTemperature}22°C
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/heart.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Pulse Rate
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.pulseRate}46
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/lungs.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Respiration Rate
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.respirationRate}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/hand.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Blood Pressure
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodPressure}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/o2.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Blood Oxygen
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodOxygen}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/clock.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Weight
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.weight}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/last.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Blood Glucose Level
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodGlucoseLevel}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/hieght.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
              color: "black",
            }}
          >
            Height
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodGlucoseLevel}
          </p>
        </div>
      </div>
    </>
  );
};

export default Vitals;
