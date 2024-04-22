import axios,{useState} from "axios";
import { Store } from "react-notifications-component";
import { LoginSlice } from "../Store/authSlice";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { setDocumentID } from "../Store/chatSlice";

export const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

const Token = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};


export const show_notification = (title, message, type) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate_animated", "animate_fadeIn"],
    animationOut: ["animate_animated", "animate_fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};

export const login_user = async (payLoad, navigate) => {
  try {
    const res = await axios.post(`${BaseUrl}Patient/signin`, payLoad);
   
    localStorage.setItem("token", res?.data?.accessToken);
    show_notification("Success !", "Singin Successfully", "success");
    navigate("/patient_panel");
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

// Login User
export const LoginUser = ({ setLoading, payload, navigate }) => {
  return async (dispatch) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BaseUrl}Patient/signin`,
        payload
      );
      const data = {
        profile: res?.data,
        payload,
      };
      dispatch(LoginSlice(data));
      navigate("/patient_panel");
      show_notification("Success !", `Welcome`, "success");
    } catch (error) {
      const msg = error?.response?.data?.message || "Something went worng !";
     
      show_notification("Success !", `${msg}`, "success");
    } finally {
      setLoading(false);
    }
  };
};

// Api Module
export const getApi = async ({
  url,
  setResponse,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.get(`${BaseUrl}${url}`, 
     Token
    );
    setResponse(res.data);
    additionalFunctions.forEach((func) => {
      if (typeof func === "function") {
        func();
      }
    });
  } catch (e) {
    console.log(url, e);
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

// Firebase Chat
export const createFirebaseDocument = ({
  payload,
  collectionName,
  navigate,
  navigationLink,
  handleClose,
}) => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, collectionName);
      const docRef = await addDoc(collectionRef, payload);
      console.log("Created", docRef.id);
      handleClose();
      dispatch(setDocumentID(docRef.id));
      navigate(navigationLink);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
};


export const vital_data = async (patient_id, setVitalData ) => {
  try {
    const res = await axios.get(`${BaseUrl}employee/getPatientVitalsByPatientId/${patient_id?._id}?for=week`,Token);
    setVitalData(res?.data?.data);
  } catch (e) {
   
  }
};


export const user_detail = async (setUser) => {
  try {
    const res = await axios.get(`${BaseUrl}Patient/getProfile`, Token);
    setUser(res?.data?.data);
   
  } catch (e) {
    
  }
};

export const getAllPatientMedication = async (setScript) => {
  try {
    const res = await axios.get(`${BaseUrl}Patient/getAllPatientMedication`, Token);
    setScript(res?.data);
    
    
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Update_Profile = async (payLoad) => {
  try {
    const res = await axios.put(
      `${BaseUrl}Patient/updateProfile`,
      payLoad,
      Token
    );
    show_notification("Success !", "User Update Profile Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const safety_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createResidentSafetyPlan`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Safety_form_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/getResidentSafetyPlan/${id}`,
      
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const initialAssestment_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createInitialAssessment`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const initial_assestment_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/InitialAssessment/${id}`,
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const patient_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createTreatmentPlan`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


export const patient_form_treatment_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/getTreatmentPlan/${id}`,
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Resident_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createResidentIntake`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Resident_form_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/ResidentIntake/${id}`,
      
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Nurssing_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createNursingAssessment`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const Nurssing_form_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/getNursingAssessment/${id}`,
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const faceSheet_form = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createFaceSheet`,
      payLoad,
      Token
    );
    show_notification("Success !", "Form Submit Successfully", "success");
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const faceSheet_form_get = async (id,setGetApiData) => {
  try {
    const {data} = await axios.get(
      `${BaseUrl}Patient/getFaceSheet/${id}`,
      
      Token
    );
    setGetApiData(data?.data);
    return data;
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appoinment_Booking = async (payLoad) => {
  try {
    const res = await axios.post(
      `${BaseUrl}Patient/createAppointment`,
      payLoad,
      Token
    );
    show_notification(
      "Success !",
      "Appointment Submit Successfully",
      "success"
    );
    return res;
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appointment_Upcoming = async (setAppoinment) => {
  try {
    const res = await axios.get(
      `${BaseUrl}Patient/getAllUpcomingAppointments`,
      Token
    );
    setAppoinment(res?.data);
  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appointment_get = async (setAppoinmentPast) => {
  try {
    const res = await axios.get(
      `${BaseUrl}Patient/getAllPastAppointments`,
      Token
    );
    setAppoinmentPast(res?.data);
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const appointment_delete= async (id) => {
  try {
    const res = await axios.delete(
      `${BaseUrl}Patient/deleteAppointment/${id}`,
      Token
    );
    show_notification("Success !", `Appoinment Delete SuccessFully`, "success");
  } catch (e) {
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};



export const medication_get = async (setMedication) => {
  try {
    const res = await axios.get(
      // `${BaseUrl}Patient/getOngoingMedications/${patientId}`,
      `${BaseUrl}Patient/getAllTodayAppointments`,
      Token
    );
    setMedication(res?.data);

  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


export const change_appointment_status = async (id) => {
  try {
    const res = await axios.put(
      `${BaseUrl}Patient/cancelAppointment/${id}`,{},
      Token
    );
    show_notification("Success !", `Status Update SuccessFully`, "success");

  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


export const notification_get = async (setNotification) => {
  try {
    const res = await axios.get(
      // `${BaseUrl}Patient/getOngoingMedications/${patientId}`,
      `${BaseUrl}Patient/allNotification`,
      Token
    );
    setNotification(res?.data?.data);

  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};

export const employ_Detail = async (setEmploy) => {
  try {
    const res = await axios.get(
      // `${BaseUrl}Patient/getOngoingMedications/${patientId}`,
      `${BaseUrl}Patient/getEmployee`,
      Token
    );
    setEmploy(res?.data?.data);

  } catch (e) {
    // show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  }
};


// Upload documents
export const uploadDocument = async ({ payload, setArr, setLoading }) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${BaseUrl}employee/createUploadDocumentOnebyone`,
      payload
    );
    const data = res?.data?.data;
    setArr((prev) => [...prev, data]);
  } catch (e) {
    const msg = e?.response?.data?.message || "Image size is too large !";
    show_notification("fail !", `${e?.response?.data?.message}`, "danger");
  } finally {
    setLoading(false);
  }
};

export const createApi = async ({
  url,
  payload,
  successMsg,
  setLoading,
  additionalFunctions = [],
}) => {
  if (setLoading) {
    setLoading(true);
  }
  try {
    const res = await axios.post(
      `${BaseUrl}${url}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (res) {
      if (successMsg) {
        show_notification("Success !", `${successMsg}`, "success");
       
      }
      additionalFunctions.forEach((func) => {
        if (typeof func === "function") {
          func();
        }
      });
    }
  } catch (e) {
    const msg = e?.response?.data?.message || "Something went wrong";
    show_notification("fail !", `${msg}}`, "danger");
  } finally {
    if (setLoading) {
      setLoading(false);
    }
  }
};

