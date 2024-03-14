import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
import { CiCirclePlus } from "react-icons/ci";
import { user_detail, safety_form } from "../../Api_Collection/Api";
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

    // Iterate through each element with the specified class
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    // Trigger the print action
    handlePrint();

    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    }, 1000);
  };

  //singIn model state
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
  const [socialArray, setSocialArray] = useState([]);
  //address and place
  const [address, setAdress] = useState("");
  const [place, setPlace] = useState("");
  //People whom I can ask for Help
  const [helpName, setHelpName] = useState("");
  const [helpPhone, setHelpPhone] = useState("");
  const [helpRelationship, setHelpRelationship] = useState("");
  const [helpArray, setHelpArray] = useState([]);
  //Professionals or agencies I can contact during Crisis
  const [crisisName, setCrisisName] = useState("");
  const [crisisPhone, setCrisisPhone] = useState("");
  const [crisisRelationship, setCrisisRelationship] = useState("");
  const [crisisArray, setCrisisArray] = useState([]);
  const [localEmergencyNumber,setLocalEmergencyNumber]=useState("")
  //environmentSafetyMedications
  const [enviromentAdress, setEnviromentAdress] = useState([]);
  //singin
  const [singin, setSingIn] = useState("");
  const [signInDate,setSignInDate]=useState("");

  useEffect(() => {
    setUserId(userDetail?._id);
    setUser(userDetail?.fullName);
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
    setSocialPhone("");
    setSocialName1("");
    setSocialPhone1("");
    setSocialPhone1("");
    setSocialRelationship("");
    setSocialArray([]);
    setAdress("");
    setPlace("");
    setHelpName("");
    setHelpPhone("");
    setHelpRelationship("");
    setHelpArray([]);
    setCrisisName("");
    setCrisisPhone("");
    setCrisisRelationship("");
    setCrisisArray([]);
    setLocalEmergencyNumber("")
    setEnviromentAdress("");
    setSingIn("");
  };

  const handlePost = (e) => {
    e.preventDefault();
    
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
          socialName,
          socialPhone,
          socialRelationship
        },
        {
          socialName1,
          socialPhone1,
          socialRelationship1
        }
      ],
      // internalCopyinternalCopy: socialArray,
      distractionsPlace: address,
      distractionsPlane: place,
      // array add
      helpContactsPeople: helpArray,
      professionals: crisisArray,
      //penddig
      localEmergencyNumber,
      environmentSafetyMedications: enviromentAdress,
      signature: singin,
    };
    safety_form(data);
    initial_value();
    navigate("/intake");
  };

  const handleSocialArray = () => {
    
    const newContact = {
      name: socialName,
      phone: socialPhone,
      relationship: socialRelationship,
    };
    setSocialArray((prev) => [...prev, newContact]);
    setSocialName("");
    setSocialPhone("");
    setSocialRelationship("");
  };
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


  const handleCrisisArray = () => {
    const newContact = {
      clinicianName: crisisName,
      phone: crisisPhone,
      relationship: crisisRelationship,
    };
    setCrisisArray((prev) => [...prev, newContact]);

    setCrisisName("");
    setCrisisPhone("");
    setCrisisRelationship("");
  };

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
            <h1>Resident Safety Plan</h1>
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
              style={{ fontWeight: "700", fontSize: "20px", color: "#000000" ,marginTop:"1.5rem"}}
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
                marginTop:"1.5rem"
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
                marginTop:"1.5rem"
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
                marginTop:"1.5rem"
              }}
            >
              {" "}
              <span style={{ color: "#0C5C75" }}>STEP 4 :</span> People whom I
                can ask for Help:
            </h5>
              <div className="form-field-update">
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
                 
                  value={crisisName}
                  placeholder="Enter name"
                  
                  onChange={(e) => setCrisisName(e.target.value)}
                />
              </div>
                <div className="form-field-child">
                  <label >Phone Number:</label>
                <input
                  type="text"
               
                  value={crisisPhone}
                  placeholder="Enter number"
                  
                  onChange={(e) => setCrisisPhone(e.target.value)}
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

                    value={crisisName}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisName(e.target.value)}
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

                    value={crisisName}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisName(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label >Phone:</label>
                  <input
                    type="text"

                    value={crisisName}
                    placeholder="Enter name"

                    onChange={(e) => setCrisisName(e.target.value)}
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

            <div className="needs-interventions-container">
              <div className="needs-interventions-column3">
                {crisisArray.length > 0 && (
                  <table>
                    <thead>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Relationship</th>
                    </thead>
                    <tbody>
                      {crisisArray?.map((i, index) => (
                        <tr>
                          <td>{` ${i.clinicianName}`} </td>
                          <td>{` ${i.phone}`} </td>
                          <td>{` ${i.relationship}`} </td>
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
              Suicide Prevention Lifeline: 1-800-273-TALK (8255)
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

              {/* <div className="form-field">
                <label >Local Emergency Help: </label>
                <input
                  type="text"
                  value={localEmergencyNumber}
                  placeholder="Enter number"
                  onChange={(e) => setLocalEmergencyNumber(e.target.value)}
                />
              </div> */}

            {/* <div className="form-actions">
              <button type="button" className="safetybutton1">
                <CiCirclePlus style={{ width: "30px", height: "30px" }} /> ADD
                MORE PEOPLE
              </button>
            </div> */}
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
              <div class="file-upload-box hidePrint">
              
              <div className="file-upload-box-child">
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
                    <button className="upload-button signature_shift_margin" type="button" onClick={handlePrint2} >
                  PRINT THIS FORM
                </button>
                </div>
              </div> 
              <div>
                {
                  singin && (
                    <p className="signature_name_print">Digitally Sign by {singin} {signInDate}</p>
                  )
                }
              </div>
              
            </div>

            {
              showSingIn && (<SingInUpdateModel 
                onClose={()=>setShowSingIn(false)}
                singin={singin}
                setSingIn={setSingIn}
                setDateAndTime={setSignInDate}
                />)
            }
            {/* <div class="file-upload-box">
              <div style={{ display: "block" }}>
                <button className="upload-button1" type="button" onClick={() => setShowSingIn(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setShowSingIn(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div> */}
          </div>
          {/* <div className="form-actions">
            <button type="submit"  className="initalsubmit">
              SUBMIT DETAILS
            </button>
          </div> */}
        </form>
      </div>
      {/* {showSingIn && (
        <SingInModel onClose={() => setShowSingIn(false)}>
          <div className="input_singin_button">
            <p style={{ color: "white" }}>Digitally Sign by employee name</p>
            <input
              type="text"
              placeholder="Enter Sing in Signature"
              value={singin}
              onChange={(e) => setSingIn(e.target.value)}
            />
          </div>

          <div className="sing_in_submit_button">
            <button type="button" onClick={() => setShowSingIn(false)}>
              Submit
            </button>
          </div>
        </SingInModel>
      )} */}


      {
        draftModel && (<Draftinmodel onClose={() => setDraftModel(false)}/>)
      }
      </div>
    </>
  );
};

export default SafetyPlan;
