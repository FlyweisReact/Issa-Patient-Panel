import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { CiCirclePlus } from "react-icons/ci";
import { user_detail, safety_form,Safety_form_get } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";
import Select from "react-select";
import Draftinmodel from "../Modal/Draftinmodel";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import { useReactToPrint } from "react-to-print";
import { AiFillDelete } from "react-icons/ai";

const SafetyPlan = () => {
  const [draftModel,setDraftModel]=useState(false);
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint2 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var elements1 = document.getElementsByClassName("form-section");
    var signatureRightAndSide = document.getElementsByClassName("file-upload-box");
    // var formsheading2=document.getElementsByClassName("formsheading2");

    // Iterate through each element with the specified class signature_Right_Side
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    for (var i = 0; i < elements1.length; i++) {
      elements1[i].style.marginTop = "1rem";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
      signatureRightAndSide[i].style.fontSize = "24px";
    }

    // for (let i = 0; i < formsheading2.length; i++) {
    //   formsheading2[i].style.backgroundColor="white"
    // }

    // Trigger the print action
    handlePrint();

    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
        elements[i].style.justifyContent = "center";
      }

      for (var i = 0; i < elements1.length; i++) {
        elements1[i].style.marginTop = "0rem";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
        signatureRightAndSide[i].style.fontSize = "16px";
      }

      // for (let i = 0; i < formsheading2.length; i++) {
      //   formsheading2[i].style.backgroundColor="#1a9fb2"
      // }
    }, 1000);
  };

  //singIn model state
  const [getApiData,setGetApiData]=useState("");
  const [showSingIn, setShowSingIn] = useState(false);
  const [userDetail, setUserDetail] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");
  const [warning1, setWarning1] = useState("");
  const [warning2, setWarning2] = useState("");
  const [warning3, setWarning3] = useState("");
  const [internalCopy1, setInernalCopy1] = useState("");
  const [internalCopy2, setInernalCopy2] = useState("");
  const [internalCopy3, setInernalCopy3] = useState("");
  //People & Social settings that provide Distraction
  const [socialName, setSocialName] = useState("");
  const [socialPhone, setSocialPhone] = useState("");
  const [socialRelationship, setSocialRelationship] = useState("");
  const [socialName1, setSocialName1] = useState("");
  const [socialPhone1, setSocialPhone1] = useState("");
  const [socialRelationship1, setSocialRelationship1] = useState("");
  // const [socialArray, setSocialArray] = useState([]);
  //address and place
  const [address, setAdress] = useState("");
  const [place, setPlace] = useState("");
  //People whom I can ask for Help
  const [helpName, setHelpName] = useState("");
  const [helpPhone, setHelpPhone] = useState("");
  const [helpRelationship, setHelpRelationship] = useState("");
  const [helpArray, setHelpArray] = useState([]);
  //Professionals or agencies I can contact during Crisis
  const [professionalsClinicianName,setProfessionalsClinicianName]=useState("")
  const [professionalsPhone,setProfessionalsPhone]=useState("")
  const [professionalsRelationship,setProfessionalsRelationship]=useState("")
  const [crisisName, setCrisisName] = useState("");
  const [crisisPhone, setCrisisPhone] = useState("");
  const [crisisRelationship, setCrisisRelationship] = useState("");
  const [crisisName1, setCrisisName1] = useState("");
  const [crisisPhone1, setCrisisPhone1] = useState("");
  const [crisisRelationship1, setCrisisRelationship1] = useState("");



  // const [crisisArray, setCrisisArray] = useState([]);
  // const [localEmergencyNumber,setLocalEmergencyNumber]=useState("")
  //environmentSafetyMedications
  const [enviromentAdress, setEnviromentAdress] = useState([]);
  //singin
  const [singin, setSingIn] = useState("");
  const [signatureDate,setSignatureDate]=useState("");
  const [signatureTime,setSignatureTime]=useState("");


    // Function to format the date as MM-DD-YYYY
function formatDate(dateString) {
  if (!dateString) return ''; // handle null or undefined value
  const dateObj = new Date(dateString);
  const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
  const day = ('0' + dateObj.getDate()).slice(-2);
  const year = dateObj.getFullYear();
  return `${month}-${day}-${year}`;
}
  
  useEffect(()=>{
    // add patient name key and date key
    // setUser();
    // setUserId("");
    // setDate("");
    setWarning1(getApiData?.warningSigns?.[0]?.warning1);
    setWarning2(getApiData?.warningSigns?.[0]?.warning2);
    setWarning3(getApiData?.warningSigns?.[0]?.warning3);
    setInernalCopy1(getApiData?.internalCopingStrategies?.[0]?.internalCopy1);
    setInernalCopy2(getApiData?.internalCopingStrategies?.[0]?.internalCopy2);
    setInernalCopy3(getApiData?.internalCopingStrategies?.[0]?.internalCopy3);
    setSocialName(getApiData?.distractionsPeople?.[0]?.name);
    setSocialPhone(getApiData?.distractionsPeople?.[0]?.phone);
    setSocialRelationship(getApiData?.distractionsPeople?.[0]?.relationship)
    setSocialName1(getApiData?.distractionsPeople?.[1]?.name);
    setSocialPhone1(getApiData?.distractionsPeople?.[1]?.phone);
    setSocialRelationship1(getApiData?.distractionsPeople?.[1]?.relationship);
    setAdress(getApiData?.distractionsPlace);
    setPlace(getApiData?.distractionsPlane);
    setHelpName("");
    setHelpPhone("");
    setHelpRelationship("");
    setHelpArray(getApiData?.helpContactsPeople ? getApiData?.helpContactsPeople : []);
    // Professionals or agencies I can contact during Crisis:
    setProfessionalsClinicianName(getApiData?.professionalsClinicianName);
    setProfessionalsPhone(getApiData?.professionalsPhone);
    
    setCrisisName(getApiData?.professionals?.[0]?.clinicianName);
    setCrisisPhone(getApiData?.professionals?.[0]?.phone);
    setCrisisRelationship(getApiData?.professionals?.[0]?.relationship);
    setCrisisName1(getApiData?.professionals?.[1]?.clinicianName);
    setCrisisPhone1(getApiData?.professionals?.[1]?.phone);
    setCrisisRelationship1(getApiData?.professionals?.[1]?.relationship);

    // setCrisisArray([]);
    // setLocalEmergencyNumber("")
    setEnviromentAdress(getApiData?.environmentSafetyMedications
      ? getApiData.environmentSafetyMedications.map(item => ({
          label: item, // Assuming 'name' is the property you want to use as label
          value: item    // Assuming 'id' is the property you want to use as value
        }))
      : []);
    setSingIn(getApiData?.signature);
    setSignatureDate(formatDate(getApiData?.signatureDate));
    setSignatureTime(getApiData?.signatureTime);
  },[getApiData])

  useEffect(()=>{
    Safety_form_get(userId,setGetApiData);
  },[userId])
 

  useEffect(() => {
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
    setDate(userDetail?.dateOfBirth?userDetail?.dateOfBirth.slice(0,10):"")
  }, [userDetail]);



  useEffect(() => {
    user_detail(setUserDetail);
  }, []);

  const initial_value = () => {
    setUserDetail("");
    setUser("");
    setUserId("");
    setDate("");
    setWarning1("");
    setWarning2("");
    setWarning3("");
    setInernalCopy1("");
    setInernalCopy2("");
    setInernalCopy3("");
    setSocialName("");
    setSocialPhone("");
    setSocialRelationship("")
    setSocialName1("");
    setSocialPhone1("");
    setSocialRelationship1("");
    setAdress("");
    setPlace("");
    setHelpName("");
    setHelpPhone("");
    setHelpRelationship("");
    setHelpArray([]);
    // Professionals or agencies I can contact during Crisis:
    setProfessionalsClinicianName("");
    setProfessionalsPhone("");
    setProfessionalsRelationship("");
    setCrisisName("");
    setCrisisPhone("");
    setCrisisRelationship("");
    setCrisisName1("");
    setCrisisPhone1("");
    setCrisisRelationship1("");

    // setCrisisArray([]);
    // setLocalEmergencyNumber("")
    setEnviromentAdress([]);
    setSingIn("");
    setSignatureDate("");
    setSignatureTime("");
  };

  const handlePost = (e) => {
    e.preventDefault();

    const enviromentAdressArray=[];

    for(let i=0;i<enviromentAdress.length;i++){
      enviromentAdressArray.push(enviromentAdress[i].value);
    }
    

    const data = {
      patientId: userId,
      date: date,
      warningSigns:[{
        warning1,
        warning2,
        warning3
      }] ,
      internalCopingStrategies: [{
        internalCopy1,
        internalCopy2,
        internalCopy3
      }],
      distractionsPeople :[
        {
          name: socialName,
          phone: socialPhone,
          relationship: socialRelationship
        },
        {
          name: socialName1,
          phone: socialPhone1,
          relationship: socialRelationship1
        }
      ],
      // internalCopyinternalCopy: socialArray,
      distractionsPlace: address,
      distractionsPlane: place,
      // array add
      helpContactsPeople: helpArray,
      // Professionals or agencies I can contact during Crisis
      professionalsClinicianName,
      professionalsPhone,
      professionalsRelationship,
      // professionals: crisisArray,
      professionals: [
        {
          clinicianName: crisisName,
          phone : crisisPhone,
          relationship: crisisRelationship
        },
        {
          clinicianName: crisisName1,
          phone:  crisisPhone1,
         relationship: crisisRelationship1
        }
      ],
      //penddig
      environmentSafetyMedications: enviromentAdressArray,
      signature: singin,
      signatureDate,
      signatureTime
    };
    safety_form(data);
    initial_value();
    navigate("/intake");
  };

  // const handleSocialArray = () => {
    
  //   const newContact = {
  //     name: socialName,
  //     phone: socialPhone,
  //     relationship: socialRelationship,
  //   };
  //   setSocialArray((prev) => [...prev, newContact]);
  //   setSocialName("");
  //   setSocialPhone("");
  //   setSocialRelationship("");
  // };
  const handleHelpArray = () => {
    if(helpName || helpPhone || helpRelationship){
      const newContact = {
        name: helpName,
        phone: helpPhone,
        relationship: helpRelationship,
      };
      setHelpArray((prev) => [...prev, newContact]);
      setHelpName("");
      setHelpPhone("");
      setHelpRelationship("");
    };
    }
    
  //handle delete array
  const handleDeleteArray=(index)=>{
    setHelpArray((prev)=>[...prev.filter((_,i)=>i!==index)]);
  }


  // const handleCrisisArray = () => {
  //   const newContact = {
  //     clinicianName: crisisName,
  //     phone: crisisPhone,
  //     relationship: crisisRelationship,
  //   };
  //   setCrisisArray((prev) => [...prev, newContact]);

  //   setCrisisName("");
  //   setCrisisPhone("");
  //   setCrisisRelationship("");
  // };

  // Making the environment safe
  const enviromentAdressOptions=[
    {label  :"No prescribed medications or OTC medications to be kept in person" , value:"No prescribed medications or OTC medications to be kept in person"},
    {label  :"No firearms allowed, no sharp object such as razor, scissor, knife, needle, nail, etc  to be kept in person" , value:"No firearms allowed, no sharp object such as razor, scissor, knife, needle, nail, etc to be kept in person"},
    {label  :"No drugs or alcohol" , value:"No drugs or alcohol"},
    {label  :"No long strings or rope allowed" , value:"No long strings or rope allowed"},
  ]

  const handleKeySelectedValueSpecialPrecautions = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = enviromentAdressOptions.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...enviromentAdressOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setEnviromentAdress(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...enviromentAdress,
          { value: inputValue, label: inputValue },
        ];
        setEnviromentAdress(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const enviromentAdresshandler=(optionValue)=>{
    setEnviromentAdress(optionValue)
  }

  return (
    <>
    <div ref={componentRef}>
      <div className="backbutton">
        <IoArrowBackCircle
          style={{
            color: "#1A9FB2",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          className="hidePrint"
          onClick={() => navigate("/intake")}
        />
      </div>
        <div className="Boss">
        <div className="formheading1">
          <div className="formsheading2">
            <h1>RESIDENT SAFETY PLAN</h1>
          </div>
        </div>
        <form onSubmit={handlePost}>
          <div className="form-section">
              <div className="form-field-update">
                <div className="form-field-child">
                  <label htmlFor="residentFullName">Resident Name:</label>
              <input
                type="text"
                id="residentFullName"
                value={user}
                placeholder="Enter full name"
                required
                onChange={(e)=>setUser(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label htmlFor="dateOfBirth">DOB:</label>
                  <input
                type="date"
                id="dateOfBirth"
                value={date}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setDate(e?.target?.value)}
              />
            </div>
              </div>


            <h5
              style={{ fontWeight: "700", fontSize: "20px", color: "#000000" ,marginTop:"0.5rem"}}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 1 :</span> Warning Signs{" "}
              <span style={{ color: "#000000B2" }}>
                ( thoughts, images, mood, situation, behavior )
              </span>{" "}
                that a crisis may be developing{" "}:
            </h5>

            <div className="form-field-single-update">
                <label >
                 1.
              </label>
                <input
                style={{width:"100%"}}
                value={warning1}
                
                required
                onChange={(e) => setWarning1(e?.target?.value)}
              />
            </div>
            <div className="form-field-single-update">
                <label >
                 2.
              </label>
                <input
             style={{width:"100%"}}
                value={warning2}
                
                required
                onChange={(e) => setWarning2(e?.target?.value)}
              />
            </div>
            <div className="form-field-single-update">
                <label >
                 3.
              </label>
                <input
                style={{width:"100%"}}
                value={warning3}
                
                required
                onChange={(e) => setWarning3(e?.target?.value)}
              />
            </div>

            {/* <div className="form-field">
              <textarea
                id="programlocation&address"
                value={warning}
                  rows={2}
                cols={130}
                placeholder="Type Here......"
                required
                onChange={(e) => setWarning(e?.target?.value)}
              />
            </div> */}
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
                marginTop:"0.5rem"
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 2 :</span> Internal Coping
                Strategies:
            </h5>
            <p>
              Things I can do to take my mind off my problems without contacting
                other Person:
            </p>
            <div className="form-field-single-update">
                <label >
                 1.
              </label>
                <input
                style={{width:"100%"}}
                value={internalCopy1}
                
                required
                onChange={(e) => setInernalCopy1(e.target.value)}
              />
            </div>
            <div className="form-field-single-update">
                <label >
                 2.
              </label>
                <input
                style={{width:"100%"}}
                value={internalCopy2}
                
                required
                onChange={(e) => setInernalCopy2(e.target.value)}
              />
            </div>
            <div className="form-field-single-update">
                <label >
                 3.
              </label>
                <input
                style={{width:"100%"}}
                value={internalCopy3}
                
                required
                onChange={(e) => setInernalCopy3(e.target.value)}
              />
            </div>
            {/* <div className="form-field">
              <textarea
                id="programlocation&address"
                value={internalCopy}
                  rows={2}
                cols={130}
                placeholder="Type Here......"
                required
                onChange={(e) => setInernalCopy(e.target.value)}
              />
            </div> */}
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
                marginTop:"0.5rem"
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 3 :</span> People & Social
                settings that provide Distraction:
            </h5>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Name:</label>
                <input
                  type="text"

                  value={socialName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setSocialName(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
                <input
                  type="text"

                  value={socialPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setSocialPhone(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Relationship:</label>
                <input
                  type="text"

                  value={socialRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setSocialRelationship(e.target.value)}
                />
              </div>

              </div>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Name:</label>
                <input
                  type="text"

                  value={socialName1}
                  placeholder="Enter name"
                  
                  onChange={(e) => setSocialName1(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
                <input
                  type="text"

                  value={socialPhone1}
                  placeholder="Enter number"
                  
                  onChange={(e) => setSocialPhone1(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Relationship:</label>
                <input
                  type="text"

                  value={socialRelationship1}
                  placeholder="Enter text"
                  
                  onChange={(e) => setSocialRelationship1(e.target.value)}
                />
              </div>

              </div>

              <div className="form-field-single-update">
                <label >
                 Place :
              </label>
                <input
                style={{width:"80%"}}
                  value={address}
                  placeholder="Enter Address"
                required
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
              <div className="form-field-single-update">
                <label >
                 Plane :
              </label>
                <input

                value={place}
                style={{width:"80%"}}
                  placeholder="Enter Address"
                required
                onChange={(e) => setPlace(e.target.value)}
              />
            </div>

              {/* <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleSocialArray}
                >
                  Add
                </button>
              </div> */}

            {/* <div className="needs-interventions-container">
              <div className="needs-interventions-column3">
                {socialArray.length > 0 && (
                  <table>
                    <thead>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Relationship</th>
                    </thead>
                    <tbody>
                      {socialArray?.map((i, index) => (
                        <tr>
                          <td>{` ${i.name}`} </td>
                          <td>{` ${i.phone}`} </td>
                          <td>{` ${i.relationship}`} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div> */}
            
           

            {/* enter data */}
            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
                marginTop:"0.5rem"
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 4 :</span> People whom I
                can ask for Help:
            </h5>
              <div className="form-field-update hidePrint">
                <div className="form-field-child">
                  <label htmlFor="AHCCCS">Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={helpName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setHelpName(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label htmlFor="AHCCCS">Phone Number:</label>
                <input
                  type="number"
                  id="AHCCCS"
                  value={helpPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setHelpPhone(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label htmlFor="AHCCCS">Relationship:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={helpRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setHelpRelationship(e.target.value)}
                />
              </div>

              </div>

              <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleHelpArray}
                >
                  Add
                </button>
              </div>

               <div className="needs-interventions-container">
              <div className="needs-interventions-column3">
                {helpArray.length > 0 && (
                  <table>
                    <thead>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Relationship</th>
                      <th className="hidePrint">Action</th>
                    </thead>
                    <tbody>
                      {helpArray?.map((i, index) => (
                        <tr>
                          <td>{` ${i.name}`} </td>
                          <td>{` ${i.phone}`} </td>
                          <td>{` ${i.relationship}`} </td>
                          <td className="hidePrint"><AiFillDelete style={{cursor:"pointer",fontSize:"1.5rem"}} onClick={()=>handleDeleteArray(index)}/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>


            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
              }}
            >
              {" "}
                Professionals or agencies I can contact during Crisis:
            </h5>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Clinician/Facility Name:</label>
                <input
                  type="text"
                 
                  value={professionalsClinicianName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setProfessionalsClinicianName(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
                <input
                  type="text"
               
                  value={professionalsPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setProfessionalsPhone(e.target.value)}
                />
              </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Clinician Name:</label>
                  <input
                    type="text"

                    value={crisisName}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisName(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label >Phone:</label>
                  <input
                    type="text"

                    value={crisisPhone}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisPhone(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label >Relationship:</label>
                <input
                  type="text"
                
                  value={crisisRelationship}
                  placeholder="Enter text"
                  
                  onChange={(e) => setCrisisRelationship(e.target.value)}
                />
              </div>

              </div>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Clinician Name:</label>
                  <input
                    type="text"

                    value={crisisName1}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisName1(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label >Phone:</label>
                  <input
                    type="text"

                    value={crisisPhone1}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisPhone1(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label >Relationship:</label>
                  <input
                    type="text"

                    value={crisisRelationship1}
                    placeholder="Enter text"

                    onChange={(e) => setCrisisRelationship1(e.target.value)}
                  />
              </div>

            </div>


            <h5
              style={{
                fontWeight: "700",
                fontSize: "20px",
                color: "#000000",
                textAlign: "start",
                marginTop:'0.5rem'
              }}
            >
              {" "}
              Suicide Prevention Lifeline: 1-800-273-TALK (8255) / 988
            </h5>
              <h5
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  color: "#000000",
                  textAlign: "start",
                }}
              >
                {" "}
                Emergency: 911
              </h5>

      
              <div className="form-field-single-update-bold">
                <label >
                Making the Environment Safe :
              </label>

              <Select
              isMulti
              options={enviromentAdressOptions}
              value={enviromentAdress}
                  onChange={enviromentAdresshandler}
                       isCreatable={true}
                  onKeyDown={handleKeySelectedValueSpecialPrecautions}
              />
            </div>
              <div class="file-upload-box ">
              
              <div className="file-upload-box-child hidePrint">
               <div >
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setShowSingIn(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                <div>
                    <button className="upload-button signature_shift_margin" type="button" onClick={()=>handlePrint2()}>
                  PRINT THIS FORM
                </button>
                </div>
              </div>
              <div >
                {
                  singin && (
                    <p className="signature_name_print">Digitally Sign by {singin} {signatureDate} {signatureTime}</p>
                  )
                }
              </div>
            </div>
          
            {
              showSingIn && (<SingInUpdateModel 
                onClose={()=>setShowSingIn(false)}
                singin={singin}
                setSingIn={setSingIn}
                setDateAndTime={setSignatureDate}
                setSignatureTime={setSignatureTime}
                />)
            }
           
          </div>
          <div className="form-actions hidePrint">
            <button type="submit"  style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem"}}>
              SUBMIT DETAILS
            </button>
          </div>
        </form>
      </div>
      


      {
        draftModel && (<Draftinmodel onClose={() => setDraftModel(false)}/>)
      }
      </div>
    </>
  );
};

export default SafetyPlan;
