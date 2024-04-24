/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Home from "./Pages/Home/Home";
import Appointments from "./Components/Appointments/Appointments";
import Intake from "./Components/Intake/Intake";
import Appointment_Scheduling from "./Components/Appointment Scheduling/Appointment_Scheduling";
import Profile from "./Components/Profile/Profile";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import InitialAssessment from "./Components/Forms/Initial-Assessment";
import FaceSheet from "./Components/Forms/FaceSheet";
import SafetyPlan from "./Components/Forms/SafetyPlan";
import NursingAssessment from "./Components/Forms/Nursing-Assessment";
// import TreatmentPlan from "./Components/Forms/TreatmentPlan";
import ResidentIntakes from "./Components/Forms/ResidentIntakes";
import BookAppointment from "./Components/Forms/BookAppointment";
import AppointmentHistory from "./Components/Forms/AppointmentHistory";
import ManageAppointments from "./Components/Forms/ManageAppointments";
import CancelAppointment from "./Components/Forms/CancelAppointment";
import Login from "./Pages/Login";
import UpdateProfile from "./Components/Forms/UpdateProfile";
import { LoginForm } from "./Components/form/LoginForm";
import FileUpload from "./Components/Appointments/FileUpload";
import Treatmentplan_update from "./Components/Forms/TreatmentPlan_update";
import Chat from "./chat/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/patient_panel"
          element={<Home Wcomponenet={Appointments} />}
        />
        <Route
          path="/patient_Upload_script"
          element={<Home Wcomponenet={FileUpload} />}
        />
        <Route path="/intake" element={<Home Wcomponenet={Intake} />} />
        <Route
          path="/appointment_scheduling"
          element={<Home Wcomponenet={Appointment_Scheduling} />}
        />
        <Route
          path="/initial-Assessment"
          element={<Home Wcomponenet={InitialAssessment} />}
        />
        <Route path="/facesheet" element={<Home Wcomponenet={FaceSheet} />} />
        <Route path="/safetyplan" element={<Home Wcomponenet={SafetyPlan} />} />
        <Route
          path="/nursing-assessment"
          element={<Home Wcomponenet={NursingAssessment} />}
        />
        <Route
          path="/treatmentplanUpdate"
          element={<Home Wcomponenet={Treatmentplan_update} />}
        />
        <Route
          path="/Residentintakes"
          element={<Home Wcomponenet={ResidentIntakes} />}
        />
        <Route path="/Chat" element={<Home Wcomponenet={Chat} />} />
        <Route path="/booknewappointment" element={<BookAppointment />} />
        <Route path="/appointmenthistory" element={<AppointmentHistory />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/manageappointment" element={<ManageAppointments />} />
        <Route path="/cancel_appointment" element={<CancelAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
