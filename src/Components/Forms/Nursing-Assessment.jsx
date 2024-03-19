import React, { useEffect, useState,useRef } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import formupload from "../../img/formupload.png";
// import AutosizeInput from "react-input-autosize";
import body1 from "../../img/body1.png";
import body2 from "../../img/body2.png";
import body3 from "../../img/body3.png";
import body4 from "../../img/body4.png";
import body5 from "../../img/body5.png";
import body6 from "../../img/body6.png";
import body7 from "../../img/body7.png";
import body8 from "../../img/body8.png";
import Select from "react-select";
import { user_detail, Nurssing_form, Nurssing_form_get,employ_Detail } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";
import Draftinmodel from "../Modal/Draftinmodel";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import { useReactToPrint } from "react-to-print";


const NursingAssessment = () => {
  const [showSingInOne, setShowSingInOne] = useState(false);
  const [showSingInTwo, setShowSingInTwo] = useState(false);
  const [draftModel,setDraftModel]=useState(false)

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
        elements[i].style.display = "flex";
      }
    }, 1000);
  };

  const navigate = useNavigate();
  const [employ,setEmploy]=useState([])
  const [getApiData,setGetApiData]=useState("");
  const [userDetail, setUserDetail] = useState("");

  //all useState value
  const [userId, setUserId] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [admissionDiagnoses, setAdmissionDiagnoses] = useState("");
  const [codeStatus, setCodeStatus] = useState([]);
  const [lastTBScreeningDate, setLastTBScreeningDate] = useState("");
  const [tbScreeningResults, setTbScreeningResults] = useState("");
  const [careProvidedPhysicalServices, setCareProvidedPhysicalServices] =
    useState([]);
  // const [
  //   careProvidedBehavioralHealthServices,
  //   setCareProvidedBehavioralHealthServices,
  // ] = useState();
  const [vitalsBloodPressure, setVitalsBloodPressure] = useState('');
  const [vitalsPulse, setVitalsPulse] = useState();
  const [vitalsRespiratoryRate, setVitalsRespiratoryRate] = useState();
  const [vitalsOxygenLevel, setVitalsOxygenLevel] = useState();
  const [vitalsTemperature, setVitalsTemperature] = useState();
  const [vitalsWeight, setVitalsWeight] = useState();
  const [vitalsHeightFeet, setVitalsHeightFeet] = useState();
  const [vitalsHeightInches, setVitalsHeightInches] = useState();
  const [allergies, setAllergies] = useState("");
  // const [
  //   covid19ScreeningSymptomsFeverOrChills,
  //   setCovid19ScreeningSymptomsFeverOrChills,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsShortnessOfBreath,
  //   setCovid19ScreeningSymptomsShortnessOfBreath,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsSoreThroat,
  //   setCovid19ScreeningSymptomsSoreThroat,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsDiarrhea,
  //   setCovid19ScreeningSymptomsDiarrhea,
  // ] = useState();
  // const [covid19ScreeningSymptomsCough, setCovid19ScreeningSymptomsCough] =
  //   useState();
  // const [
  //   covid19ScreeningSymptomsBodyAches,
  //   setCovid19ScreeningSymptomsBodyAches,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsCongestionOrRunnyNose,
  //   setCovid19ScreeningSymptomsCongestionOrRunnyNose,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsLossOfTasteOrSmell,
  //   setCovid19ScreeningSymptomsLossOfTasteOrSmell,
  // ] = useState();
  // const [covid19ScreeningSymptomsFatigue, setCovid19ScreeningSymptomsFatigue] =
  //   useState();
  // const [
  //   covid19ScreeningSymptomsHeadache,
  //   setCovid19ScreeningSymptomsHeadache,
  // ] = useState();
  // const [
  //   covid19ScreeningSymptomsNauseaOrVomiting,
  //   setCovid19ScreeningSymptomsNauseaOrVomiting,
  // ] = useState();
  
  // penging some state

  const [reviewOfSystemsConstitutional, setReviewOfSystemsConstitutional] =
    useState("");
    const [reviewOfSystemsConstitutionalOther, setReviewOfSystemsConstitutionalOther] =
    useState("");
  const [reviewOfSystemsCardiovascular, setReviewOfSystemsCardiovascular] =
    useState("");
    const [reviewOfSystemsCardiovascularOther,setReviewOfSystemsCardiovascularOther]=useState("")
  const [reviewOfSystemsEndocrine, setReviewOfSystemsEndocrine] = useState("");
  const [reviewOfSystemsEndocrineOther,setReviewOfSystemsEndocrineOther]=useState("")
  const [reviewOfSystemsGastrointestinal, setReviewOfSystemsGastrointestinal] =
    useState("");
  const [reviewOfSystemsGastrointestinalOther,setReviewOfSystemsGastrointestinalOther]=useState("")
  const [reviewOfSystemsGenitourinary, setReviewOfSystemsGenitourinary] =
    useState("");
    const [reviewOfSystemsGenitourinaryOther,setReviewOfSystemsGenitourinaryOther]=useState("")
  const [
    reviewOfSystemsHematologyOncology,
    setReviewOfSystemsHematologyOncology,
  ] = useState("");
  const [reviewOfSystemsHematologyOncologyOther,setReviewOfSystemsHematologyOncologyOther]=useState("")
  const [reviewOfSystemsHeadNeckThroat, setReviewOfSystemsHeadNeckThroat] =
    useState("");
    const [reviewOfSystemsHeadNeckThroatOther,setReviewOfSystemsHeadNeckThroatOther]=useState("")
  const [reviewOfSystemsIntegumentary, setReviewOfSystemsIntegumentary] =
    useState("");
  const [reviewOfSystemsIntegumentaryOther,setReviewOfSystemsIntegumentaryOther]=useState("") 
  const [reviewOfSystemsMusculoskeletal, setReviewOfSystemsMusculoskeletal] =
    useState("");
    const [reviewOfSystemsMusculoskeletalOther,setReviewOfSystemsMusculoskeletalOther]=useState("")
  const [reviewOfSystemsPsychiatric, setReviewOfSystemsPsychiatric] =
    useState("");
    const [reviewOfSystemsPsychiatricOther,setReviewOfSystemsPsychiatricOther]=useState("")
  const [reviewOfSystemsNeurologic, setReviewOfSystemsNeurologic] =
    useState("");
    const [reviewOfSystemsNeurologicOther,setReviewOfSystemsNeurologicOther]=useState("")
  const [reviewOfSystemsRespiratory, setReviewOfSystemsRespiratory] =
    useState("");
    const [reviewOfSystemsRespiratoryOther,setReviewOfSystemsRespiratoryOther]=useState("")
  const [
    reviewOfSystemsAllergicImmunologic,
    setReviewOfSystemsAllergicImmunologic,
  ] = useState("");
  const [reviewOfSystemsAllergicImmunologicOther,setReviewOfSystemsAllergicImmunologicOther]=useState("")
  // hj
  const [
    suicidalRiskAssessmentDeniesSymptomsBellow,
    setSuicidalRiskAssessmentDeniesSymptomsBellow,
  ] = useState(false);
  const [behavioralSymptoms, setBehavioralSymptoms] = useState("");
  const [physicalSymptoms, setPhysicalSymptoms] = useState("");
  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState("");
  const [currentMedications, setCurrentMedications] = useState(false);
  const [nutritionDiet, setNutritionDiet] = useState("");
  const [nutritionSpecialDietOrder, setNutritionSpecialDietOrder] =
    useState("");
  const [nutritionFluidRestrictions, setNutritionFluidRestrictions] =
    useState();
  const [skinCheck, setSkinCheck] = useState("");
  const [residentDeniesSkinConcerns, setResidentDeniesSkinConcerns] =
    useState(false);
  const [front, setFront] = useState(false);
  const [back, setBack] = useState(false);
  const [sideLeft, setSideLeft] = useState(false);
  const [sideRight, setSideRight] = useState(false);
  const [legFront, setLegFront] = useState(false);
  const [legBack, setLegBack] = useState(false);
  const [legLeft, setLegLeft] = useState(false);
  const [legRight, setLegRight] = useState(false);
  const [commentFigure,setCommentFigure]=useState("")

  const [bhtName, setBhtName] = useState("");
  const [bhtSignature, setBhtSignature] = useState("");
  const [bhtDate,setbhtDate]=useState("")
  const [bhpTime,setBhpTime]=useState("")
  const [rnName, setRnName] = useState("");
  const [rnSignature, setRnSignature] = useState("");
  const [rnDate,setrnDate]=useState("");
  const [rnTime,setRnTime]=useState("");

  useEffect(()=>{
    setAdmissionDate(getApiData?.admissionDate?getApiData?.admissionDate.slice(0,10):"");
    setTodayDate(getApiData?.todayDate?getApiData?.todayDate.slice(0,10):"");
    setAdmissionDiagnoses(getApiData?.admissionDiagnoses);
    setCodeStatus(getApiData?.codeStatus?getApiData?.codeStatus:[]);
    setLastTBScreeningDate(getApiData?.lastTBScreeningDate?getApiData.lastTBScreeningDate.slice(0,10):"");
    setTbScreeningResults(getApiData?.tbScreeningResults);
    setCareProvidedPhysicalServices(getApiData?.careProvided?getApiData?.careProvided:[]);
    setVitalsBloodPressure(getApiData?.vitalsBloodPressure);
    setVitalsPulse(getApiData?.vitalsPulse);
    setVitalsRespiratoryRate(getApiData?.vitalsRespiratoryRate);
    setVitalsOxygenLevel(getApiData?.vitalsOxygenLevel);
    setVitalsTemperature(getApiData?.vitalsTemperature);
    setVitalsWeight(getApiData?.vitalsWeight);
    setVitalsHeightFeet(getApiData?.vitalsHeightFeet);
    setVitalsHeightInches(getApiData?.vitalsHeightInches);
    setAllergies(getApiData?.allergies);
    setReviewOfSystemsConstitutional(getApiData?.reviewOfSystemsConstitutional);
    setReviewOfSystemsConstitutionalOther(getApiData?.reviewOfSystemsConstitutionalComment)
    setReviewOfSystemsCardiovascular(getApiData?.reviewOfSystemsCardiovascular);
    setReviewOfSystemsCardiovascularOther(getApiData?.reviewOfSystemsCardiovascularComment)
    setReviewOfSystemsEndocrine(getApiData?.reviewOfSystemsEndocrine);
    setReviewOfSystemsEndocrineOther(getApiData?.reviewOfSystemsEndocrineComment)
    setReviewOfSystemsGastrointestinal(getApiData?.reviewOfSystemsGastrointestinal);
    setReviewOfSystemsGastrointestinalOther(getApiData?.reviewOfSystemsGastrointestinalComment)
    setReviewOfSystemsGenitourinary(getApiData?.reviewOfSystemsGenitourinary);
    setReviewOfSystemsGenitourinaryOther(getApiData?.reviewOfSystemsGenitourinaryComment)
    setReviewOfSystemsHematologyOncology(getApiData?.reviewOfSystemsHematologyOncology);
    setReviewOfSystemsHematologyOncologyOther(getApiData?.reviewOfSystemsHematologyOncologyComment)
    setReviewOfSystemsHeadNeckThroat(getApiData?.reviewOfSystemsHeadNeckThroat);
    setReviewOfSystemsHeadNeckThroatOther(getApiData?.reviewOfSystemsHeadNeckThroatComment)
    setReviewOfSystemsIntegumentary(getApiData?.reviewOfSystemsIntegumentary);
    setReviewOfSystemsIntegumentaryOther(getApiData?.reviewOfSystemsIntegumentaryComment)
    setReviewOfSystemsMusculoskeletal(getApiData?.reviewOfSystemsMusculoskeletal);
    setReviewOfSystemsMusculoskeletalOther(getApiData?.reviewOfSystemsMusculoskeletalComment)
    setReviewOfSystemsPsychiatric(getApiData?.reviewOfSystemsPsychiatric);
    setReviewOfSystemsPsychiatricOther(getApiData?.reviewOfSystemsPsychiatricComment)
    setReviewOfSystemsNeurologic(getApiData?.reviewOfSystemsNeurologic);
    setReviewOfSystemsNeurologicOther(getApiData?.reviewOfSystemsNeurologicComment)
    setReviewOfSystemsRespiratory(getApiData?.reviewOfSystemsRespiratory);
    setReviewOfSystemsRespiratoryOther(getApiData?.reviewOfSystemsRespiratoryOther)
    setReviewOfSystemsAllergicImmunologic(getApiData?.reviewOfSystemsAllergicImmunologic);
    setReviewOfSystemsAllergicImmunologicOther(getApiData?.reviewOfSystemsAllergicImmunologicComment)
    setSuicidalRiskAssessmentDeniesSymptomsBellow(getApiData?.suicidalRiskAssessmentDeniesSymptomsBellow);
    setBehavioralSymptoms(getApiData?.behavioralSymptoms);
    setPhysicalSymptoms(getApiData?.physicalSymptoms);
    setPsychosocialSymptoms(getApiData?.psychosocialSymptoms);
    setCurrentMedications(getApiData?.currentMedications);
    setNutritionDiet(getApiData?.nutritionDiet);
    setNutritionSpecialDietOrder(getApiData?.nutritionSpecialDietOrder);
    setNutritionFluidRestrictions(getApiData?.nutritionFluidRestrictions);
    setSkinCheck(getApiData?.skinCheck);
    setResidentDeniesSkinConcerns(getApiData?.residentDeniesSkinConcerns);
    setFront(getApiData?.front);
    setBack(getApiData?.back);
    setSideLeft(getApiData?.sideLeft);
    setSideRight(getApiData?.sideRight);
    setLegFront(getApiData?.legFront);
    setLegBack(getApiData?.legBack);
    setLegLeft(getApiData?.legLeft);
    setLegRight(getApiData?.legRight);
    setCommentFigure(getApiData?.legComment)
    setBhtName(getApiData?.bhtName?.fullName);
    setBhtSignature(getApiData?.bhtSignature);
    setbhtDate(getApiData?.bhpDate?getApiData?.bhpDate.slice(0,10):"")
    setBhpTime(getApiData?.bhpTime)
    setRnName(getApiData?.rnName?.fullName);
    setRnSignature(getApiData?.rnSignature);
    setrnDate(getApiData?.rnDate?getApiData?.rnDate?.slice(0,10):"")
    setRnTime(getApiData?.rnTime)
  },[getApiData])
  

  useEffect(()=>{
    Nurssing_form_get(userId,setGetApiData);
  },[userId])

  useEffect(() => {
    //calculater date
    const birthDate =new Date(userDetail?.dateOfBirth);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds between the current date and the birth date
    const timeDiff = currentDate.getTime() - birthDate.getTime();

    // Convert the time difference from milliseconds to years
const ageInMilliseconds = new Date(timeDiff);
const ageInYears = Math.abs(ageInMilliseconds.getUTCFullYear() - 1970);

    setAge(ageInYears);

    setUserId(userDetail?._id);
    setName(userDetail?.fullName)
    setSex(userDetail?.gender)
    setDateOfBirth(userDetail?.dateOfBirth?userDetail?.dateOfBirth.slice(0,10):"")
  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
    employ_Detail(setEmploy);
  }, []);

  const initialData = () => {
    setUserId("");
    setAdmissionDate("");
    setSex("");
    setTodayDate("");
    setAdmissionDiagnoses("");
    setCodeStatus("");
    setLastTBScreeningDate("");
    setTbScreeningResults("");
    setCareProvidedPhysicalServices("");
    setVitalsBloodPressure(0);
    setVitalsPulse(0);
    setVitalsRespiratoryRate(0);
    setVitalsOxygenLevel(0);
    setVitalsTemperature(0);
    setVitalsWeight(0);
    setVitalsHeightFeet(0);
    setVitalsHeightInches(0);
    setAllergies("");
    setReviewOfSystemsConstitutional("");
    setReviewOfSystemsConstitutionalOther("")
    setReviewOfSystemsCardiovascular("");
    setReviewOfSystemsCardiovascularOther("")
    setReviewOfSystemsEndocrine("");
    setReviewOfSystemsEndocrineOther("")
    setReviewOfSystemsGastrointestinal("");
    setReviewOfSystemsGenitourinary("");
    setReviewOfSystemsGastrointestinalOther("")
    setReviewOfSystemsHematologyOncology("");
    setReviewOfSystemsHematologyOncologyOther("")
    setReviewOfSystemsHeadNeckThroat("");
    setReviewOfSystemsHeadNeckThroatOther("")
    setReviewOfSystemsIntegumentary("");
    setReviewOfSystemsIntegumentaryOther("")
    setReviewOfSystemsMusculoskeletal("");
    setReviewOfSystemsMusculoskeletalOther("")
    setReviewOfSystemsPsychiatric("");
    setReviewOfSystemsPsychiatricOther("")
    setReviewOfSystemsNeurologic("");
    setReviewOfSystemsNeurologicOther("")
    setReviewOfSystemsRespiratory("");
    setReviewOfSystemsRespiratoryOther("")
    setReviewOfSystemsAllergicImmunologic("");
    setReviewOfSystemsAllergicImmunologicOther("")
    setSuicidalRiskAssessmentDeniesSymptomsBellow(false);
    setBehavioralSymptoms("");
    setPhysicalSymptoms("");
    setPsychosocialSymptoms("");
    setCurrentMedications("");
    setNutritionDiet("");
    setNutritionSpecialDietOrder("");
    setNutritionFluidRestrictions("");
    setSkinCheck("");
    setResidentDeniesSkinConcerns(false);
    setFront("");
    setBack("");
    setSideLeft("");
    setSideRight("");
    setLegFront("");
    setLegBack("");
    setLegLeft("");
    setLegRight("");
    setCommentFigure("")
    setBhtName("");
    setBhtSignature("");
    setbhtDate("")
    setBhpTime("")
    setRnName("");
    setRnSignature("");
    setrnDate("")
    setRnTime("")
  };

  const handlePost = (e) => {
    e.preventDefault();
    const data = {
      patientId: userId,
      admissionDate,
      sex,
      todayDate,
      admissionDiagnoses,
      codeStatus,
      lastTBScreeningDate,
      tbScreeningResults,
      careProvided:careProvidedPhysicalServices,
      // careProvidedBehavioralHealthServices,
      vitalsBloodPressure,
      vitalsPulse,
      vitalsRespiratoryRate,
      vitalsOxygenLevel,
      vitalsTemperature,
      vitalsWeight,
      vitalsHeightFeet,
      vitalsHeightInches,
      allergies,
// add value
reviewOfSystemsConstitutional,
reviewOfSystemsConstitutionalComment:reviewOfSystemsConstitutionalOther,
reviewOfSystemsCardiovascular,
reviewOfSystemsCardiovascularComment:reviewOfSystemsCardiovascularOther,
reviewOfSystemsEndocrine,
reviewOfSystemsEndocrineComment:reviewOfSystemsEndocrineOther,
reviewOfSystemsGastrointestinal,
reviewOfSystemsGastrointestinalComment:reviewOfSystemsGastrointestinalOther,
reviewOfSystemsGenitourinary,
reviewOfSystemsGenitourinaryComment:reviewOfSystemsGenitourinaryOther,
reviewOfSystemsHematologyOncology,
reviewOfSystemsHematologyOncologyComment:reviewOfSystemsHematologyOncologyOther,
reviewOfSystemsHeadNeckThroat,
reviewOfSystemsHeadNeckThroatComment:reviewOfSystemsHeadNeckThroatOther,
reviewOfSystemsIntegumentary,
reviewOfSystemsIntegumentaryComment:reviewOfSystemsIntegumentaryOther,
reviewOfSystemsMusculoskeletal,
reviewOfSystemsMusculoskeletalComment:reviewOfSystemsMusculoskeletalOther,
reviewOfSystemsPsychiatric,
reviewOfSystemsPsychiatricComment:reviewOfSystemsPsychiatricOther,
reviewOfSystemsNeurologic,
reviewOfSystemsNeurologicComment:reviewOfSystemsNeurologicOther,
reviewOfSystemsRespiratory,
reviewOfSystemsRespiratoryOther:reviewOfSystemsRespiratoryOther,
reviewOfSystemsAllergicImmunologic,
reviewOfSystemsAllergicImmunologicComment:reviewOfSystemsAllergicImmunologicOther,
      suicidalRiskAssessmentDeniesSymptomsBellow,
      behavioralSymptoms,
      physicalSymptoms,
      psychosocialSymptoms,
      currentMedications,
      nutritionDiet,
      nutritionSpecialDietOrder,
      nutritionFluidRestrictions,
      skinCheck,
      residentDeniesSkinConcerns,
      front,
      back,
      sideLeft,
      sideRight,
      legFront,
      legBack,
      legLeft,
      legRight,
      legComment:commentFigure,
      bhtName,
      bhtSignature,
      bhtDate,
      bhpTime,
      rnName,
      rnSignature,
      rnDate,
      rnTime
    };
    Nurssing_form(data);
    initialData();
    navigate("/intake");
  };


  const careProvidedPhysicalServicesHandler = (status) => {
    if (careProvidedPhysicalServices.includes(status)) {
      // If selected, remove it from the array
      setCareProvidedPhysicalServices((prevStatus) =>
        prevStatus.filter((item) => item !== status)
      );
    } else {
      // If not selected, add it to the array
      setCareProvidedPhysicalServices((prevStatus) => [...prevStatus, status]);
    }
  };

  // status code
  const handleCodeStatusChange = (status) => {

    if (codeStatus.includes(status)) {
      // If selected, remove it from the array
      setCodeStatus((prevStatus) =>
        prevStatus.filter((item) => item !== status)
      );
    } else {

      setCodeStatus((prevStatus) => [...prevStatus, status]);
    }
  };


  return (
    <>
    <div ref={componentRef} >
      <div className="backbutton">
        <IoArrowBackCircle
          style={{
            color: "#1A9FB2",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/intake")}
        />
      </div>
        <div className="Boss">
        <div className="formheading1">
          <div className="formsheading2">
    
              <h1 style={{ fontWeight: "bold" }}> Nursing Assessment</h1>
          </div>
        </div>
        <form onSubmit={handlePost}>
        <div className="box-image-container">
              <div className="form-field-update">
                <div className="form-field-child">
                  <label htmlFor="dateOfBirth">Today’s Date:</label>
                  <input
                type="date"
                id="dateOfBirth"
                value={todayDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setTodayDate(e.target.value)}
              />
            </div>
                <div className="form-field-child">
                  <label htmlFor="admissionDate">Admission Date:</label>
              <input

                type="date"
                id="dateOfBirth"
                value={admissionDate}
                placeholder="DD/MM/YYYY"
                required
                onChange={(e) => setAdmissionDate(e.target.value)}
              />
                </div>
              </div>
          
            <div className="form-field-update">
              <div className="form-field-child">
                <label htmlFor="admissionDate">Resident’s Full Name:</label>
            <input

              type="text"
              id="dateOfBirth"
              value={name}
              placeholder="Enter name"
              required
              onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field-child">
                <label htmlFor="admissionDate">Date of Birth:</label>
                <input

                  type="date"
                  id="dateOfBirth"
                  value={dateOfBirth}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="form-field-child">
                <label htmlFor="admissionDate">Enter Age:</label>
            <input

              type="number"
              id="dateOfBirth"
              value={age}
              placeholder="Enter Age"
              required
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

              <div className="form-field-child">
                <div>
                  <label htmlFor="" >Gender: </label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={sex === "Male"}
                    onChange={() => setSex("Male")}
                  />
                  <label >Male</label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={sex === "Female"}
                    onChange={() => setSex("Female")}
                  />
                  <label >Female</label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={sex === "Other"}
                    onChange={() => setSex("Other")}
                  />
                  <label >Other</label>
                </div>
              </div>
            </div>



            <div className="form-field-single-update">
              <label >Admission Diagnosis: </label>
              <input

                type="text"

                value={admissionDiagnoses}
                placeholder="Enter text"
                required
                onChange={(e) => setAdmissionDiagnoses(e.target.value)}
              />

          </div>


            <div className="form-field-single-update">
              <div>
                <label htmlFor="" >Code Status: </label>
              </div>
              <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                <input
                  type="checkbox"

                  checked={codeStatus.includes("Full Code")}
                  onChange={() => handleCodeStatusChange("Full Code")}
                />
                <label >Full Code</label>
              </div>
              <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                <input
                  type="checkbox"

                  checked={codeStatus.includes("DNR")}
                  onChange={() => handleCodeStatusChange("DNR")}
                />
                <label >DNR</label>
              </div>
            </div>

            <div className="form-field-update">
              <div className="form-field-child">
                <label >Date of Last TB Screening:</label>
                <input
                  type="date"
              value={lastTBScreeningDate}
                  placeholder="MM/DD/YYYY"
              required
              onChange={(e) => setLastTBScreeningDate(e.target.value)}
            />
          </div>

              <div className="form-field-child-result">
                <div>
                  <label htmlFor="" >Results: </label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Negative"}
                    onChange={() => setTbScreeningResults("Negative")}
                  />
                  <label >Negative</label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Positive"}
                    onChange={() => setTbScreeningResults("Positive")}
                  />
                  <label >Positive</label>
                </div>
                <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Pending"}
                    onChange={() => setTbScreeningResults("Pending")}
                  />
                  <label >Pending</label>
                </div>
              </div>

            </div>
  

            <div className="form-field-single-update-care">
              <div>
                <label >Care to be provided at Devine Care: </label>
              </div>
              <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={careProvidedPhysicalServices.includes("PhysicalServices")}
                  onChange={() => careProvidedPhysicalServicesHandler("PhysicalServices")}
                />
                <label >Physical Services</label>
              </div>
              <div style={{ display: 'flex', gap: "10px", alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={careProvidedPhysicalServices.includes("BehavioralHealthServices")}
                  onChange={() => careProvidedPhysicalServicesHandler("BehavioralHealthServices")}
                />
                <label >Behavioral Health Services</label>
              </div>
            </div>
            </div>
            {/* <div className="form-field">
            <label htmlFor="gender">Care to be provided at Devine Care</label>

            <Select
              isMulti
              value={careProvidedPhysicalServices}
              onChange={careProvidedPhysicalServicesHandler}
              options={careProvidedPhysicalServicesOption}

            />
          </div> */}
          {/* <div className="form-field">
            <label htmlFor="gender">
              Care to be provided at Care Provided Behavioral Health Services
              Care
            </label>
            <select
            type="select"
              id="careProvidedBehavioralHealthServices"
              value={careProvidedBehavioralHealthServices}
              required
              onChange={(e) => setCareProvidedBehavioralHealthServices(e.target.value)}
            >
              <option value={true}>True</option>
              <option value={false}>
                False
              </option>
            </select>
       
          </div> */}
            <h2 style={{ marginTop: "1rem", fontWeight: "bold" }}>Vitals:</h2>

          <div className="box-image-container">
            <div className="form-field-update">

              <div className="form-field-child ">
                <label htmlFor="AHCCCS">Blood Pressure:</label>
              
               <input
                  type="text"
                  pattern="{0-9}"
                  value={vitalsBloodPressure}
                  required
                  onChange={(e) => setVitalsBloodPressure(e.target.value)}
                />
                  <input
                  type="tel"
                  value={"BP"}
                  style={{width : "20px",marginLeft:"0"}}
                />
            
              </div>

              <div className="form-field-child">
                <label htmlFor="AHCCCS">Pulse Rate:</label>
                <input
                  type="text"
                
                  value={vitalsPulse}
                 
                  required

                  onChange={(e) => setVitalsPulse(e.target.value)}
                />
                <input
                  type="tel"
                  value={"BPM"}
                  style={{width : "30px",marginLeft:"0px"}}
                />
              </div>

              <div className="form-field-child">
                <label htmlFor="AHCCCS">Respiration Rate:</label>
                <input
                  type="text"
                
                  value={vitalsRespiratoryRate}
                  required

                  onChange={(e) => setVitalsRespiratoryRate(e.target.value)}
                />
                   <input
                  type="tel"
                  value={"BPM"}
                  style={{width : "30px",marginLeft:"0px"}}
                />
              </div>

            </div>

            <div className="form-field-update">

              <div className="form-field-child ">
                <label htmlFor="AHCCCS">Body Temperature:</label>
                <input
                  type="text"
                
                  value={vitalsTemperature}
                  required

                  onChange={(e) => setVitalsTemperature(e.target.value)}
                />
                  <input
                  type="tel"
                  value={"F"}
                  style={{width : "10px",marginLeft:"0px"}}
                />
              </div>
              <div className="form-field-child">
                <label htmlFor="AHCCCS">Blood Oxygen:</label>
                <input
                  type="text"
               
                  value={vitalsOxygenLevel}
                  required

                  onChange={(e) => setVitalsOxygenLevel(e.target.value)}
                />
                   <input
                  type="tel"
                  value={"O2%"}
                  style={{width : "30px",marginLeft:"0px"}}
                />
              </div>
           
       
              <div className="form-field-child">
                <label htmlFor="AHCCCS">Weight:</label>
                <input
                  type="number"
           
                  value={vitalsWeight}
                  required

                  onChange={(e) => setVitalsWeight(e.target.value)}
                />
                    <input
                  type="tel"
                  value={"IBS"}
                  style={{width : "30px",marginLeft:"0px"}}
                />
              </div>
            </div>


            <div className="form-field-update">
              <div className="form-field-child">
                <label htmlFor="AHCCCS">Height:</label>
                <input
                  type="number"
               
                  value={vitalsHeightFeet}
                  required

                  onChange={(e) => setVitalsHeightFeet(e.target.value)}
                />
                  <input
                  type="tel"
                  value={"Ft/Inche"}
                  style={{width : "60px",marginLeft:"0px"}}
                />
              </div>
            </div>
            <div className="form-field-single-update">
            <label htmlFor="AHCCCS">Allergies:</label>
            <input
                type="text"
              value={allergies}
              required
              onChange={(e) => setAllergies(e.target.value)}
            />
          </div>
          </div>

          {/* <div className="formsheading">
              <h6>Covid-19 Screening:Regardless of your vaccination status, have you experienced any of
                the symptoms bellow in the past 48 hours?</h6>

          </div> */}

{/* <div className="parent-div-screening">
          <div>
          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of fever or chills?</label>
            <div className="screening-child">
            <div >
              <input
                type="checkbox"
                id="yesCheckbox"
                checked={covid19ScreeningSymptomsFeverOrChills === true}
                onChange={() => setCovid19ScreeningSymptomsFeverOrChills(true)}
              />
              <label htmlFor="yesCheckbox">Yes</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="noCheckbox"
                checked={covid19ScreeningSymptomsFeverOrChills === false}
                onChange={() => setCovid19ScreeningSymptomsFeverOrChills(false)}
              />
              <label htmlFor="noCheckbox">No</label>
            </div>
            </div>
          </div>
          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of sore throat?</label>
            <div className="screening-child">
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsSoreThroat"
                checked={covid19ScreeningSymptomsSoreThroat === true}
                onChange={() => setCovid19ScreeningSymptomsSoreThroat(true)}
              />
              <label htmlFor="covid19ScreeningSymptomsSoreThroat">Yes</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsSoreThroatno"
                checked={covid19ScreeningSymptomsSoreThroat === false}
                onChange={() => setCovid19ScreeningSymptomsSoreThroat(false)}
              />
              <label htmlFor="covid19ScreeningSymptomsSoreThroatno">No</label>
            </div>
            </div>
          </div>

          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of cough?</label>
            <div className="screening-child">
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsCough"
                checked={covid19ScreeningSymptomsCough === true}
                onChange={() => setCovid19ScreeningSymptomsCough(true)}
              />
              <label htmlFor="covid19ScreeningSymptomsCough">Yes</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsCoughno"
                checked={covid19ScreeningSymptomsCough === false}
                onChange={() => setCovid19ScreeningSymptomsCough(false)}
              />
              <label htmlFor="covid19ScreeningSymptomsCoughno">No</label>
            </div>
            </div>
          </div>

          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of congestion or runny nose?</label>
            <div className="screening-child">
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsCongestionOrRunnyNose"
                checked={covid19ScreeningSymptomsCongestionOrRunnyNose === true}
                onChange={() =>
                  setCovid19ScreeningSymptomsCongestionOrRunnyNose(true)
                }
              />
              <label htmlFor="covid19ScreeningSymptomsCongestionOrRunnyNose">
                Yes
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsCongestionOrRunnyNoseno"
                checked={
                  covid19ScreeningSymptomsCongestionOrRunnyNose === false
                }
                onChange={() =>
                  setCovid19ScreeningSymptomsCongestionOrRunnyNose(false)
                }
              />
              <label htmlFor="covid19ScreeningSymptomsCongestionOrRunnyNoseno">
                No
              </label>
            </div>
            </div>
          </div>

          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of fatigue? </label>
            <div className="screening-child">
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsFatigue"
                checked={covid19ScreeningSymptomsFatigue === true}
                onChange={() => setCovid19ScreeningSymptomsFatigue(true)}
              />
              <label htmlFor="covid19ScreeningSymptomsFatigue">Yes</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsFatigueno"
                checked={covid19ScreeningSymptomsFatigue === false}
                onChange={() => setCovid19ScreeningSymptomsFatigue(false)}
              />
              <label htmlFor="covid19ScreeningSymptomsFatigueno">No</label>
            </div>
            </div>
          </div>
          <div className="yeschechbox-screening">
            <label htmlFor="">New onset of nausea or vomiting?</label>
            <div className="screening-child">
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsNauseaOrVomiting"
                checked={covid19ScreeningSymptomsNauseaOrVomiting === true}
                onChange={() =>
                  setCovid19ScreeningSymptomsNauseaOrVomiting(true)
                }
              />
              <label htmlFor="covid19ScreeningSymptomsNauseaOrVomiting">
                Yes
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="covid19ScreeningSymptomsNauseaOrVomitingno"
                checked={covid19ScreeningSymptomsNauseaOrVomiting === false}
                onChange={() =>
                  setCovid19ScreeningSymptomsNauseaOrVomiting(false)
                }
              />
              <label htmlFor="covid19ScreeningSymptomsNauseaOrVomitingno">
                No
              </label>
            </div>
            </div>
          </div>
          </div>

          <div> 
            <div className="yeschechbox-screening">
              <label htmlFor="">
                New onset of shortness of breath or difficulty breathing?
              </label>
              <div className="screening-child">
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsShortnessOfBreath"
                  checked={covid19ScreeningSymptomsShortnessOfBreath === true}
                  onChange={() =>
                    setCovid19ScreeningSymptomsShortnessOfBreath(true)
                  }
                />
                <label htmlFor="covid19ScreeningSymptomsShortnessOfBreath">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsShortnessOfBreathno"
                  checked={covid19ScreeningSymptomsShortnessOfBreath === false}
                  onChange={() =>
                    setCovid19ScreeningSymptomsShortnessOfBreath(false)
                  }
                />
                <label htmlFor="covid19ScreeningSymptomsShortnessOfBreathno">
                  No
                </label>
              </div>
              </div>
            </div>

            <div className="yeschechbox-screening">
              <label htmlFor="">New onset of diarrhea?</label>
              <div className="screening-child">
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsDiarrhea"
                  checked={covid19ScreeningSymptomsDiarrhea === true}
                  onChange={() => setCovid19ScreeningSymptomsDiarrhea(true)}
                />
                <label htmlFor="covid19ScreeningSymptomsDiarrhea">Yes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsDiarrheano"
                  checked={covid19ScreeningSymptomsDiarrhea === false}
                  onChange={() => setCovid19ScreeningSymptomsDiarrhea(false)}
                />
                <label htmlFor="covid19ScreeningSymptomsDiarrheano">No</label>
              </div>
              </div>
            </div>

            <div className="yeschechbox-screening">
              <label htmlFor=""> New onset of muscle or body aches?</label>
              <div className="screening-child">
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsBodyAches"
                  checked={covid19ScreeningSymptomsBodyAches === true}
                  onChange={() => setCovid19ScreeningSymptomsBodyAches(true)}
                />
                <label htmlFor="covid19ScreeningSymptomsBodyAches">Yes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsBodyAchesno"
                  checked={covid19ScreeningSymptomsBodyAches === false}
                  onChange={() => setCovid19ScreeningSymptomsBodyAches(false)}
                />
                <label htmlFor="covid19ScreeningSymptomsBodyAchesno">No</label>
              </div>
              </div>
            </div>

            <div className="yeschechbox-screening">
              <label htmlFor="">New onset of loss of taste or smell?</label>
              <div className="screening-child">
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsLossOfTasteOrSmell"
                  checked={covid19ScreeningSymptomsLossOfTasteOrSmell === true}
                  onChange={() =>
                    setCovid19ScreeningSymptomsLossOfTasteOrSmell(true)
                  }
                />
                <label htmlFor="covid19ScreeningSymptomsLossOfTasteOrSmell">
                  Yes
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsLossOfTasteOrSmellno"
                  checked={covid19ScreeningSymptomsLossOfTasteOrSmell === false}
                  onChange={() =>
                    setCovid19ScreeningSymptomsLossOfTasteOrSmell(false)
                  }
                />
                <label htmlFor="covid19ScreeningSymptomsLossOfTasteOrSmellno">
                  No
                </label>
              </div>
              </div>
            </div>

            <div className="yeschechbox-screening">
              <label htmlFor="">New onset of headache?</label>
              <div className="screening-child">
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsHeadache"
                  checked={covid19ScreeningSymptomsHeadache === true}
                  onChange={() => setCovid19ScreeningSymptomsHeadache(true)}
                />
                <label htmlFor="covid19ScreeningSymptomsHeadache">Yes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="covid19ScreeningSymptomsHeadacheno"
                  checked={covid19ScreeningSymptomsHeadache === false}
                  onChange={() => setCovid19ScreeningSymptomsHeadache(false)}
                />
                <label htmlFor="covid19ScreeningSymptomsHeadacheno">No</label>
              </div>
              </div>
            </div>

          </div>

          </div> */}


          <div className="formsheading">
              <h6 style={{ fontWeight: "bold" }}>Review Of Systems</h6>
          </div>
          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Constitutional:</label>

          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="DENIES"
              
                checked={reviewOfSystemsConstitutional === "DENIES"}
                onChange={() => setReviewOfSystemsConstitutional("DENIES")}
              />
              <label htmlFor="DENIES">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Fever"
                checked={reviewOfSystemsConstitutional === "Fever"}
                onChange={() => setReviewOfSystemsConstitutional("Fever")}
              />
              <label htmlFor="Fever">Fever</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Poor appetite"
                checked={reviewOfSystemsConstitutional === "Poor appetite"}
                onChange={() =>
                  setReviewOfSystemsConstitutional("Poor appetite")
                }
              />
              <label htmlFor="Poor appetite">Poor appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Unexplained weight gain"
                checked={
                  reviewOfSystemsConstitutional === "Unexplained weight gain"
                }
                onChange={() =>
                  setReviewOfSystemsConstitutional("Unexplained weight gain")
                }
              />
              <label htmlFor="Unexplained weight gain">
                Unexplained weight gain
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Fatigue"
                checked={reviewOfSystemsConstitutional === "Fatigue"}
                onChange={() => setReviewOfSystemsConstitutional("Fatigue")}
              />
              <label htmlFor="Fatigue">Fatigue</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Chills"
                checked={reviewOfSystemsConstitutional === "Chills"}
                onChange={() => setReviewOfSystemsConstitutional("Chills")}
              />
              <label htmlFor="Chills">Chills</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Change in appetite"
                checked={reviewOfSystemsConstitutional === "Change in appetite"}
                onChange={() =>
                  setReviewOfSystemsConstitutional("Change in appetite")
                }
              />
              <label htmlFor="Change in appetite">Change in appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Night Sweats"
                checked={reviewOfSystemsConstitutional === "Night Sweats"}
                onChange={() =>
                  setReviewOfSystemsConstitutional("Night Sweats")
                }
              />
              <label htmlFor="Night Sweats">Night Sweats</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Unexplained weight loss"
                checked={
                  reviewOfSystemsConstitutional === "Unexplained weight loss"
                }
                onChange={() =>
                  setReviewOfSystemsConstitutional("Unexplained weight loss")
                }
              />
              <label htmlFor="Unexplained weight loss">
                Unexplained weight loss
              </label>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="reviewOfSystemsConstitutionalOther&address">Comment:</label>
            <textarea
              id="reviewOfSystemsConstitutionalOther&address"
              value={reviewOfSystemsConstitutionalOther}
              placeholder="Enter text"
              rows={2}
              cols={82}
              required
              onChange={(e)=>setReviewOfSystemsConstitutionalOther(e.target.value)}
            />
          </div>
          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Cardiovascular:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="DENIES"
                checked={reviewOfSystemsCardiovascular === "DENIES"}
                onChange={() => setReviewOfSystemsCardiovascular("DENIES")}
              />
              <label htmlFor="DENIES">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Chest pain"
                checked={reviewOfSystemsCardiovascular === "Chest pain"}
                onChange={() => setReviewOfSystemsCardiovascular("Chest pain")}
              />
              <label htmlFor="Chest pain">Chest pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Shortness of breath"
                checked={
                  reviewOfSystemsCardiovascular === "Shortness of breath"
                }
                onChange={() =>
                  setReviewOfSystemsCardiovascular("Shortness of breath")
                }
              />
              <label htmlFor="Shortness of breath">Shortness of breath</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Racing Pulse"
                checked={reviewOfSystemsCardiovascular === "Racing Pulse"}
                onChange={() =>
                  setReviewOfSystemsCardiovascular("Racing Pulse")
                }
              />
              <label htmlFor="Racing Pulse">Racing Pulse</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Swelling of the feet/hands"
                checked={
                  reviewOfSystemsCardiovascular === "Swelling of the feet/hands"
                }
                onChange={() =>
                  setReviewOfSystemsCardiovascular("Swelling of the feet/hands")
                }
              />
              <label htmlFor="Swelling of the feet/hands">
                Swelling of the feet/hands
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Irregular heartbeat"
                checked={
                  reviewOfSystemsCardiovascular === "Irregular heartbeat"
                }
                onChange={() =>
                  setReviewOfSystemsCardiovascular("Irregular heartbeat")
                }
              />
              <label htmlFor="Irregular heartbeat">Irregular heartbeat</label>
            </div>

                {/* state is make is pending */}
            {/* <div className="form-field-child-result">
                <div>
                  <label className="black_space" >Is your blood pressure under control? </label>
                </div>
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Negative"}
                    onChange={() => setTbScreeningResults("Negative")}
                  />
                  <label >Yes</label>
                </div>
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Positive"}
                    onChange={() => setTbScreeningResults("Positive")}
                  />
                  <label >No</label>
                </div>
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Pending"}
                    onChange={() => setTbScreeningResults("Pending")}
                  />
                  <label >Unsure</label>
                </div>
              </div> */}

            {/* <div>
            <input
                type="checkbox"
                id="itsgoodother"
                checked={
                  reviewOfSystemsCardiovascular === "Is your blood pressure under control? Yes / No / Unsure"
                }
                onChange={() =>
                  setReviewOfSystemsCardiovascular("Is your blood pressure under control? Yes / No / Unsure")
                }
              />
                <label htmlFor="itsgoodother">
                  Is your blood pressure under control? Yes / No / Unsure
                </label>
              </div> */}
          </div>
        
            <div className="form-field">
              <label htmlFor="reviewOfSystemsCardiovascularOther">Comment:</label>
              <textarea
                id="reviewOfSystemsCardiovascularOther"
                value={reviewOfSystemsCardiovascularOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsCardiovascularOther(e.target.value)}
              />
            </div>
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Endocrine:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesEndocrine"
                checked={reviewOfSystemsEndocrine === "DENIES"}
                onChange={() => setReviewOfSystemsEndocrine("DENIES")}
              />
              <label htmlFor="deniesEndocrine">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="excessThirst"
                checked={reviewOfSystemsEndocrine === "Excess thirst"}
                onChange={() => setReviewOfSystemsEndocrine("Excess thirst")}
              />
              <label htmlFor="excessThirst">Excess thirst</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="excessiveUrination"
                checked={reviewOfSystemsEndocrine === "Excessive urination"}
                onChange={() =>
                  setReviewOfSystemsEndocrine("Excessive urination")
                }
              />
              <label htmlFor="excessiveUrination">Excessive urination</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="heatIntolerance"
                checked={reviewOfSystemsEndocrine === "Heat Intolerance"}
                onChange={() => setReviewOfSystemsEndocrine("Heat Intolerance")}
              />
              <label htmlFor="heatIntolerance">Heat Intolerance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="coldIntolerance"
                checked={reviewOfSystemsEndocrine === "Cold Intolerance"}
                onChange={() => setReviewOfSystemsEndocrine("Cold Intolerance")}
              />
              <label htmlFor="coldIntolerance">Cold Intolerance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hairLoss"
                checked={reviewOfSystemsEndocrine === "Hair loss"}
                onChange={() => setReviewOfSystemsEndocrine("Hair loss")}
              />
              <label htmlFor="hairLoss">Hair loss</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="N/a"
                checked={reviewOfSystemsEndocrine === "N/a"}
                onChange={() => setReviewOfSystemsEndocrine("N/a")}
              />
                <label htmlFor="N/a">N/A</label>
              </div>

            {/* <div className="form-field-child-result">
                <div >
                  <label className="black_space" >Dry skin Is resident’s blood sugar under control? </label>
                </div>
                <div className="inner_field_aligment">
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Negative"}
                    onChange={() => setTbScreeningResults("Negative")}
                  />
                  <label >Yes</label>
                </div>
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Positive"}
                    onChange={() => setTbScreeningResults("Positive")}
                  />
                  <label >No</label>
                </div>
                <div style={{ display: 'flex', gap: "5px", alignItems: "center" }}>
                  <input
                    type="checkbox"

                    checked={tbScreeningResults === "Pending"}
                    onChange={() => setTbScreeningResults("Pending")}
                  />
                  <label >Unsure</label>
                </div>

                </div>
               
              </div> */}
            {/* <div>
            <input
                type="checkbox"
                id="Dry skin Is resident’s blood sugar under control?"
                checked={reviewOfSystemsEndocrine === "Dry skin Is resident’s blood sugar under control?"}
                onChange={() => setReviewOfSystemsEndocrine("Dry skin Is resident’s blood sugar under control?")}
              />
                <label htmlFor="Dry skin Is resident’s blood sugar under control?">Dry skin Is resident’s blood sugar under control?</label>
              </div> */}
              {/* <div>
              <input
                type="checkbox"
                id="Yes"
                checked={reviewOfSystemsEndocrine === "Yes"}
                onChange={() => setReviewOfSystemsEndocrine("Yes")}
              />
                <label htmlFor="Yes">Yes</label>
              </div> */}
              {/* <div>
              <input
                type="checkbox"
                id="no"
                checked={reviewOfSystemsEndocrine === "No"}
                onChange={() => setReviewOfSystemsEndocrine("No")}
              />
                <label htmlFor="no">No</label>
              </div> */}
              {/* <div>
              <input
                type="checkbox"
                id="Unsure"
                checked={reviewOfSystemsEndocrine === "Unsure"}
                onChange={() => setReviewOfSystemsEndocrine("Unsure")}
              />
                <label htmlFor="Unsure">Unsure</label>
              </div> */}
             
          </div>
          
          {/* <div className="yeschechbox-review">
        
            </div>  */}
           <div className="form-field">
              <label htmlFor="reviewOfSystemsEndocrineOther">Comment:</label>
              <textarea
                id="reviewOfSystemsEndocrineOther"
                value={reviewOfSystemsEndocrineOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsEndocrineOther(e.target.value)}
              />
            </div> 
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Gastrointestinal:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesGastrointestinal"
                checked={reviewOfSystemsGastrointestinal === "DENIES"}
                onChange={() => setReviewOfSystemsGastrointestinal("DENIES")}
              />
              <label htmlFor="deniesGastrointestinal">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="abdominalPain"
                checked={reviewOfSystemsGastrointestinal === "Abdominal pain"}
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Abdominal pain")
                }
              />
              <label htmlFor="abdominalPain">Abdominal pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="nausea"
                checked={reviewOfSystemsGastrointestinal === "Nausea"}
                onChange={() => setReviewOfSystemsGastrointestinal("Nausea")}
              />
              <label htmlFor="nausea">Nausea</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="diarrhea"
                checked={reviewOfSystemsGastrointestinal === "Diarrhea"}
                onChange={() => setReviewOfSystemsGastrointestinal("Diarrhea")}
              />
              <label htmlFor="diarrhea">Diarrhea</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="bloodyStools"
                checked={reviewOfSystemsGastrointestinal === "Bloody stools"}
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Bloody stools")
                }
              />
              <label htmlFor="bloodyStools">Bloody stools</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="stomachUlcers"
                checked={reviewOfSystemsGastrointestinal === "Stomach Ulcers"}
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Stomach Ulcers")
                }
              />
              <label htmlFor="stomachUlcers">Stomach Ulcers</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="constipation"
                checked={reviewOfSystemsGastrointestinal === "Constipation"}
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Constipation")
                }
              />
              <label htmlFor="constipation">Constipation</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="troubleSwallowing"
                checked={
                  reviewOfSystemsGastrointestinal === "Trouble Swallowing"
                }
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Trouble Swallowing")
                }
              />
              <label htmlFor="troubleSwallowing">Trouble Swallowing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jaundiceYellowSkin"
                checked={
                  reviewOfSystemsGastrointestinal === "Jaundice/yellow skin"
                }
                onChange={() =>
                  setReviewOfSystemsGastrointestinal("Jaundice/yellow skin")
                }
              />
              <label htmlFor="jaundiceYellowSkin">Jaundice/yellow skin</label>
            </div>
          </div>
          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsGastrointestinalOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsGastrointestinalOther(e.target.value)}
              />
            </div> 

          {/* jojfdf */}
          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Genitourinary:</label>
          <div className="yeschechbox-review">
           
            <div>
              <input
                type="checkbox"
                id="deniesGenitourinary"
                checked={reviewOfSystemsGenitourinary === "DENIES"}
                onChange={() => setReviewOfSystemsGenitourinary("DENIES")}
              />
              <label htmlFor="deniesGenitourinary">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="genitalSoresUlcers"
                checked={
                  reviewOfSystemsGenitourinary === "Genital sores or ulcers"
                }
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Genital sores or ulcers")
                }
              />
              <label htmlFor="genitalSoresUlcers">
                Genital sores or ulcers
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="kidneyFailureProblems"
                checked={
                  reviewOfSystemsGenitourinary === "Kidney failure/problems"
                }
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Kidney failure/problems")
                }
              />
              <label htmlFor="kidneyFailureProblems">
                Kidney failure/problems
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Kidney stones"
                checked={reviewOfSystemsGenitourinary === "Kidney stones"}
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Kidney stones")
                }
              />
              <label htmlFor="Kidney stones">Kidney stones</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Painful/difficult urination"
                checked={
                  reviewOfSystemsGenitourinary === "Painful/difficult urination"
                }
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Painful/difficult urination")
                }
              />
              <label htmlFor="Painful/difficult urination">
                Painful/difficult urination
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Testicular pain"
                checked={reviewOfSystemsGenitourinary === "Testicular pain"}
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Testicular pain")
                }
              />
              <label htmlFor="Testicular pain">Testicular pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Urinary discharge"
                checked={reviewOfSystemsGenitourinary === "Urinary discharge"}
                onChange={() =>
                  setReviewOfSystemsGenitourinary("Urinary discharge")
                }
              />
              <label htmlFor="Urinary discharge">Urinary discharge</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsGenitourinaryOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsGenitourinaryOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Hematology/Oncology:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesHematologyOncology"
                checked={reviewOfSystemsHematologyOncology === "DENIES"}
                onChange={() => setReviewOfSystemsHematologyOncology("DENIES")}
              />
              <label htmlFor="deniesHematologyOncology">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="easyBruising"
                checked={reviewOfSystemsHematologyOncology === "Easy bruising"}
                onChange={() =>
                  setReviewOfSystemsHematologyOncology("Easy bruising")
                }
              />
              <label htmlFor="easyBruising">Easy bruising</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="prolongedBleeding"
                checked={
                  reviewOfSystemsHematologyOncology === "Prolonged bleeding"
                }
                onChange={() =>
                  setReviewOfSystemsHematologyOncology("Prolonged bleeding")
                }
              />
              <label htmlFor="prolongedBleeding">Prolonged bleeding</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsHematologyOncologyOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsHematologyOncologyOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Head, Ear, Nose, Throat: </label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesHeadNeckThroat"
                checked={reviewOfSystemsHeadNeckThroat === "DENIES"}
                onChange={() => setReviewOfSystemsHeadNeckThroat("DENIES")}
              />
              <label htmlFor="deniesHeadNeckThroat">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hearingLoss"
                checked={reviewOfSystemsHeadNeckThroat === "Hearing loss"}
                onChange={() =>
                  setReviewOfSystemsHeadNeckThroat("Hearing loss")
                }
              />
              <label htmlFor="hearingLoss">Hearing loss</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="soreThroat"
                checked={reviewOfSystemsHeadNeckThroat === "Sore throat"}
                onChange={() => setReviewOfSystemsHeadNeckThroat("Sore throat")}
              />
              <label htmlFor="soreThroat">Sore throat</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="runnyNose"
                checked={reviewOfSystemsHeadNeckThroat === "Runny nose"}
                onChange={() => setReviewOfSystemsHeadNeckThroat("Runny nose")}
              />
              <label htmlFor="runnyNose">Runny nose</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dryMouth"
                checked={reviewOfSystemsHeadNeckThroat === "Dry mouth"}
                onChange={() => setReviewOfSystemsHeadNeckThroat("Dry mouth")}
              />
              <label htmlFor="dryMouth">Dry mouth</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jawClaudication"
                checked={
                  reviewOfSystemsHeadNeckThroat ===
                  "Jaw Claudication (pain in jaw when chewing)"
                }
                onChange={() =>
                  setReviewOfSystemsHeadNeckThroat(
                    "Jaw Claudication (pain in jaw when chewing)"
                  )
                }
              />
              <label htmlFor="jawClaudication">
                Jaw Claudication (pain in jaw when chewing)
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="earache"
                checked={reviewOfSystemsHeadNeckThroat === "Earache"}
                onChange={() => setReviewOfSystemsHeadNeckThroat("Earache")}
              />
              <label htmlFor="earache">Earache</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="missingTeeth"
                checked={reviewOfSystemsHeadNeckThroat === "Missing teeth"}
                onChange={() =>
                  setReviewOfSystemsHeadNeckThroat("Missing teeth")
                }
              />
              <label htmlFor="missingTeeth">Missing teeth</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsHeadNeckThroatOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsHeadNeckThroatOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Integumentary:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesIntegumentary"
                checked={reviewOfSystemsIntegumentary === "DENIES"}
                onChange={() => setReviewOfSystemsIntegumentary("DENIES")}
              />
              <label htmlFor="deniesIntegumentary">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rash"
                checked={reviewOfSystemsIntegumentary === "Rash"}
                onChange={() => setReviewOfSystemsIntegumentary("Rash")}
              />
              <label htmlFor="rash">Rash</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="changeInMole"
                checked={reviewOfSystemsIntegumentary === "Change in mole"}
                onChange={() =>
                  setReviewOfSystemsIntegumentary("Change in mole")
                }
              />
              <label htmlFor="changeInMole">Change in mole</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="skinSores"
                checked={reviewOfSystemsIntegumentary === "Skin sores"}
                onChange={() => setReviewOfSystemsIntegumentary("Skin sores")}
              />
              <label htmlFor="skinSores">Skin sores</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="skinCancer"
                checked={reviewOfSystemsIntegumentary === "Skin cancer"}
                onChange={() => setReviewOfSystemsIntegumentary("Skin cancer")}
              />
              <label htmlFor="skinCancer">Skin cancer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="severeItching"
                checked={reviewOfSystemsIntegumentary === "Severe itching"}
                onChange={() =>
                  setReviewOfSystemsIntegumentary("Severe itching")
                }
              />
              <label htmlFor="severeItching">Severe itching</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="lossOfHair"
                checked={reviewOfSystemsIntegumentary === "Loss of hair"}
                onChange={() => setReviewOfSystemsIntegumentary("Loss of hair")}
              />
              <label htmlFor="lossOfHair">Loss of hair</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsIntegumentaryOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsIntegumentaryOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}} >Musculoskeletal: </label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesMusculoskeletal"
                checked={reviewOfSystemsMusculoskeletal === "DENIES"}
                onChange={() => setReviewOfSystemsMusculoskeletal("DENIES")}
              />
              <label htmlFor="deniesMusculoskeletal">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="muscleAches"
                checked={reviewOfSystemsMusculoskeletal === "Muscle aches"}
                onChange={() =>
                  setReviewOfSystemsMusculoskeletal("Muscle aches")
                }
              />
              <label htmlFor="muscleAches">Muscle aches</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="difficultyLayingFlat"
                checked={
                  reviewOfSystemsMusculoskeletal ===
                  "Difficulty laying flat due to muscle pain"
                }
                onChange={() =>
                  setReviewOfSystemsMusculoskeletal(
                    "Difficulty laying flat due to muscle pain"
                  )
                }
              />
              <label htmlFor="difficultyLayingFlat">
                Difficulty laying flat due to muscle pain
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="backPain"
                checked={reviewOfSystemsMusculoskeletal === "Back pain"}
                onChange={() => setReviewOfSystemsMusculoskeletal("Back pain")}
              />
              <label htmlFor="backPain">Back pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jointPain"
                checked={reviewOfSystemsMusculoskeletal === "Joint pain"}
                onChange={() => setReviewOfSystemsMusculoskeletal("Joint pain")}
              />
              <label htmlFor="jointPain">Joint pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="deformities"
                checked={reviewOfSystemsMusculoskeletal === "Deformities"}
                onChange={() =>
                  setReviewOfSystemsMusculoskeletal("Deformities")
                }
              />
              <label htmlFor="deformities">Deformities</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="programlocation&address">Comment:</label>
              <textarea
                id="programlocation&address"
                value={reviewOfSystemsMusculoskeletalOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsMusculoskeletalOther(e.target.value)}
              />
            </div> 
            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Psychiatric: </label>
          <div className="yeschechbox-review">
        
            <div>
              <input
                type="checkbox"
                id="deniesPsychiatric"
                checked={reviewOfSystemsPsychiatric === "DENIES"}
                onChange={() => setReviewOfSystemsPsychiatric("DENIES")}
              />
              <label htmlFor="deniesPsychiatric">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="insomnia"
                checked={reviewOfSystemsPsychiatric === "Insomnia"}
                onChange={() => setReviewOfSystemsPsychiatric("Insomnia")}
              />
              <label htmlFor="insomnia">Insomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="irritability"
                checked={reviewOfSystemsPsychiatric === "Irritability"}
                onChange={() => setReviewOfSystemsPsychiatric("Irritability")}
              />
              <label htmlFor="irritability">Irritability</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="depression"
                checked={reviewOfSystemsPsychiatric === "Depression"}
                onChange={() => setReviewOfSystemsPsychiatric("Depression")}
              />
              <label htmlFor="depression">Depression</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="anxiety"
                checked={reviewOfSystemsPsychiatric === "Anxiety"}
                onChange={() => setReviewOfSystemsPsychiatric("Anxiety")}
              />
              <label htmlFor="anxiety">Anxiety</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="recurrentBadThoughts"
                checked={
                  reviewOfSystemsPsychiatric === "Recurrent bad thoughts"
                }
                onChange={() =>
                  setReviewOfSystemsPsychiatric("Recurrent bad thoughts")
                }
              />
              <label htmlFor="recurrentBadThoughts">
                Recurrent bad thoughts
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="moodSwings"
                checked={reviewOfSystemsPsychiatric === "Mood swings"}
                onChange={() => setReviewOfSystemsPsychiatric("Mood swings")}
              />
              <label htmlFor="moodSwings">Mood swings</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hallucinations"
                checked={reviewOfSystemsPsychiatric === "Hallucinations"}
                onChange={() => setReviewOfSystemsPsychiatric("Hallucinations")}
              />
              <label htmlFor="hallucinations">Hallucinations</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="compulsions"
                checked={reviewOfSystemsPsychiatric === "Compulsions"}
                onChange={() => setReviewOfSystemsPsychiatric("Compulsions")}
              />
              <label htmlFor="compulsions">Compulsions</label>
            </div>
          </div>
          
          <div className="form-field">
              <label >Comment:</label>
              <textarea
                value={reviewOfSystemsPsychiatricOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsPsychiatricOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Neurologic: </label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesNeurologic"
                checked={reviewOfSystemsNeurologic === "DENIES"}
                onChange={() => setReviewOfSystemsNeurologic("DENIES")}
              />
              <label htmlFor="deniesNeurologic">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="weakness"
                checked={reviewOfSystemsNeurologic === "Weakness"}
                onChange={() => setReviewOfSystemsNeurologic("Weakness")}
              />
              <label htmlFor="weakness">Weakness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="headaches"
                checked={reviewOfSystemsNeurologic === "Headaches"}
                onChange={() => setReviewOfSystemsNeurologic("Headaches")}
              />
              <label htmlFor="headaches">Headaches</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="scalpTenderness"
                checked={reviewOfSystemsNeurologic === "Scalp tenderness"}
                onChange={() =>
                  setReviewOfSystemsNeurologic("Scalp tenderness")
                }
              />
              <label htmlFor="scalpTenderness">Scalp tenderness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dizziness"
                checked={reviewOfSystemsNeurologic === "Dizziness"}
                onChange={() => setReviewOfSystemsNeurologic("Dizziness")}
              />
              <label htmlFor="dizziness">Dizziness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="balanceProblems"
                checked={reviewOfSystemsNeurologic === "Problems with balance"}
                onChange={() =>
                  setReviewOfSystemsNeurologic("Problems with balance")
                }
              />
              <label htmlFor="balanceProblems">Problems with balance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="paralysis"
                checked={
                  reviewOfSystemsNeurologic === "Paralysis of extremities"
                }
                onChange={() =>
                  setReviewOfSystemsNeurologic("Paralysis of extremities")
                }
              />
              <label htmlFor="paralysis">Paralysis of extremities</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="tremor"
                checked={reviewOfSystemsNeurologic === "Tremor"}
                onChange={() => setReviewOfSystemsNeurologic("Tremor")}
              />
              <label htmlFor="tremor">Tremor</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="stroke"
                checked={reviewOfSystemsNeurologic === "Stroke"}
                onChange={() => setReviewOfSystemsNeurologic("Stroke")}
              />
              <label htmlFor="stroke">Stroke</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="numbnessTingling"
                checked={reviewOfSystemsNeurologic === "Numbness or tingling"}
                onChange={() =>
                  setReviewOfSystemsNeurologic("Numbness or tingling")
                }
              />
              <label htmlFor="numbnessTingling">Numbness or tingling</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="seizures"
                checked={
                  reviewOfSystemsNeurologic === "Seizures or convulsions"
                }
                onChange={() =>
                  setReviewOfSystemsNeurologic("Seizures or convulsions")
                }
              />
              <label htmlFor="seizures">Seizures or convulsions</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fainting"
                checked={reviewOfSystemsNeurologic === "Fainting"}
                onChange={() => setReviewOfSystemsNeurologic("Fainting")}
              />
              <label htmlFor="fainting">Fainting</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="walkingProblems"
                checked={reviewOfSystemsNeurologic === "Problems walking"}
                onChange={() =>
                  setReviewOfSystemsNeurologic("Problems walking")
                }
              />
              <label htmlFor="walkingProblems">Problems walking</label>
            </div>
          </div>

          

          <div className="form-field">
              <label htmlFor="reviewOfSystemsNeurologicOther">Comment:</label>
              <textarea
                id="reviewOfSystemsNeurologicOther"
                value={reviewOfSystemsNeurologicOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsNeurologicOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Respiratory: </label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesRespiratory"
                checked={reviewOfSystemsRespiratory === "DENIES"}
                onChange={() => setReviewOfSystemsRespiratory("DENIES")}
              />
              <label htmlFor="deniesRespiratory">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="wheezing"
                checked={reviewOfSystemsRespiratory === "Wheezing"}
                onChange={() => setReviewOfSystemsRespiratory("Wheezing")}
              />
              <label htmlFor="wheezing">Wheezing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="cough"
                checked={reviewOfSystemsRespiratory === "Cough"}
                onChange={() => setReviewOfSystemsRespiratory("Cough")}
              />
              <label htmlFor="cough">Cough</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="coughingUpBlood"
                checked={reviewOfSystemsRespiratory === "Coughing up blood"}
                onChange={() =>
                  setReviewOfSystemsRespiratory("Coughing up blood")
                }
              />
              <label htmlFor="coughingUpBlood">Coughing up blood</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="severeOrFrequentColds"
                checked={
                  reviewOfSystemsRespiratory === "Severe or Frequent colds"
                }
                onChange={() =>
                  setReviewOfSystemsRespiratory("Severe or Frequent colds")
                }
              />
              <label htmlFor="severeOrFrequentColds">
                Severe or Frequent colds
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="difficultyBreathing"
                checked={reviewOfSystemsRespiratory === "Difficulty breathing"}
                onChange={() =>
                  setReviewOfSystemsRespiratory("Difficulty breathing")
                }
              />
              <label htmlFor="difficultyBreathing">Difficulty breathing</label>
            </div>
          </div>
          <div className="form-field">
              <label htmlFor="reviewOfSystemsRespiratoryOther">Comment:</label>
              <textarea
                id="reviewOfSystemsRespiratoryOther"
                value={reviewOfSystemsRespiratoryOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsRespiratoryOther(e.target.value)}
              />
            </div> 

            <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Allergic/Immunologic: </label>
          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="deniesAllergicImmunologic"
                checked={reviewOfSystemsAllergicImmunologic === "DENIES"}
                onChange={() => setReviewOfSystemsAllergicImmunologic("DENIES")}
              />
              <label htmlFor="deniesAllergicImmunologic">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="seasonalAllergies"
                checked={
                  reviewOfSystemsAllergicImmunologic === "Seasonal allergies"
                }
                onChange={() =>
                  setReviewOfSystemsAllergicImmunologic("Seasonal allergies")
                }
              />
              <label htmlFor="seasonalAllergies">Seasonal allergies</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hayFeverSymptoms"
                checked={
                  reviewOfSystemsAllergicImmunologic === "Hay fever symptoms"
                }
                onChange={() =>
                  setReviewOfSystemsAllergicImmunologic("Hay fever symptoms")
                }
              />
              <label htmlFor="hayFeverSymptoms">Hay fever symptoms</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="itching"
                checked={reviewOfSystemsAllergicImmunologic === "Itching"}
                onChange={() =>
                  setReviewOfSystemsAllergicImmunologic("Itching")
                }
              />
              <label htmlFor="itching">Itching</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="frequentInfections"
                checked={
                  reviewOfSystemsAllergicImmunologic === "Frequent infections"
                }
                onChange={() =>
                  setReviewOfSystemsAllergicImmunologic("Frequent infections")
                }
              />
              <label htmlFor="frequentInfections">Frequent infections</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="exposureToHIV"
                checked={
                  reviewOfSystemsAllergicImmunologic === "Exposure to HIV"
                }
                onChange={() =>
                  setReviewOfSystemsAllergicImmunologic("Exposure to HIV")
                }
              />
              <label htmlFor="exposureToHIV">Exposure to HIV</label>
            </div>
          </div>

          <div className="form-field">
              <label htmlFor="reviewOfSystemsAllergicImmunologicOther">Comment:</label>
              <textarea
              id="reviewOfSystemsAllergicImmunologicOther"
                value={reviewOfSystemsAllergicImmunologicOther}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e)=>setReviewOfSystemsAllergicImmunologicOther(e.target.value)}
              />
            </div> 


            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="form-field-child">
                <label htmlFor="" className="label-review" style={{ fontSize: "20px" }}>Suicidal Risk Assessment:</label>
              </div>

              <div className="form-field-child" style={{ marginTop: "2rem" }}>
              <input
                type="checkbox"
                id="suicidalRiskAssessmentDeniesSymptomsBellow"
                checked={suicidalRiskAssessmentDeniesSymptomsBellow}
                onChange={() =>
                  setSuicidalRiskAssessmentDeniesSymptomsBellow(
                    !suicidalRiskAssessmentDeniesSymptomsBellow
                  )
                }
              />
                <label htmlFor="suicidalRiskAssessmentDeniesSymptomsBellow" style={{ fontSize: "20px" }}>
                Denies Symptoms Bellow
              </label>
            </div>
          </div>

          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Behavioral symptoms: </label>
          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="selfInjuring"
                checked={behavioralSymptoms === "self-injuring"}
                onChange={() => setBehavioralSymptoms("self-injuring")}
              />
              <label htmlFor="selfInjuring">Self-injuring</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="recklessBehavior"
                checked={behavioralSymptoms === "reckless behavior"}
                onChange={() => setBehavioralSymptoms("reckless behavior")}
              />
              <label htmlFor="recklessBehavior">Reckless behavior</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="impulsiveBehaviors"
                checked={behavioralSymptoms === "impulsive behaviors"}
                onChange={() => setBehavioralSymptoms("impulsive behaviors")}
              />
              <label htmlFor="impulsiveBehaviors">Impulsive behaviors</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="shiftsInTemperament"
                checked={behavioralSymptoms === "shifts in temperament"}
                onChange={() => setBehavioralSymptoms("shifts in temperament")}
              />
              <label htmlFor="shiftsInTemperament">Shifts in temperament</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="noLongerEnjoyingActivities"
                checked={
                  behavioralSymptoms ===
                  "no longer enjoying previous activities"
                }
                onChange={() =>
                  setBehavioralSymptoms(
                    "no longer enjoying previous activities"
                  )
                }
              />
              <label htmlFor="noLongerEnjoyingActivities">
                No longer enjoying previous activities
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="talkingOrWritingAboutDeath"
                checked={
                  behavioralSymptoms === "talking or writing about death"
                }
                onChange={() =>
                  setBehavioralSymptoms("talking or writing about death")
                }
              />
              <label htmlFor="talkingOrWritingAboutDeath">
                Talking or writing about death
              </label>
            </div>
          </div>
            
          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Physical symptoms:</label>
          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="insomniap"
                checked={physicalSymptoms === "insomnia"}
                onChange={() => setPhysicalSymptoms("insomnia")}
              />
              <label htmlFor="insomniap">Insomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hypersomnia"
                checked={physicalSymptoms === "hypersomnia"}
                onChange={() => setPhysicalSymptoms("hypersomnia")}
              />
              <label htmlFor="hypersomnia">Hypersomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="changesInAppetite"
                checked={physicalSymptoms === "changes in appetite"}
                onChange={() => setPhysicalSymptoms("changes in appetite")}
              />
              <label htmlFor="changesInAppetite">Changes in appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="weightLossGain"
                checked={physicalSymptoms === "weight loss/gain"}
                onChange={() => setPhysicalSymptoms("weight loss/gain")}
              />
              <label htmlFor="weightLossGain">Weight loss/gain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="panicAttacks"
                checked={physicalSymptoms === "panic attacks"}
                onChange={() => setPhysicalSymptoms("panic attacks")}
              />
              <label htmlFor="panicAttacks">Panic attacks</label>
            </div>
          </div>
          <label htmlFor="" className="label-review" style={{fontWeight:"bold"}}>Psychosocial symptoms:</label>
          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="helplessnessHopelessness"
                checked={psychosocialSymptoms === "helplessness/hopelessness"}
                onChange={() =>
                  setPsychosocialSymptoms("helplessness/hopelessness")
                }
              />
              <label htmlFor="helplessnessHopelessness">
                  Helplessness/hopelessness    
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="worthlessness"
                checked={psychosocialSymptoms === "worthlessness"}
                onChange={() => setPsychosocialSymptoms("worthlessness")}
              />
              <label htmlFor="worthlessness">Worthlessness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="depression"
                checked={psychosocialSymptoms === "depression"}
                onChange={() => setPsychosocialSymptoms("depression")}
              />
              <label htmlFor="depression">Depression</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="anxiety"
                checked={psychosocialSymptoms === "anxiety"}
                onChange={() => setPsychosocialSymptoms("anxiety")}
              />
              <label htmlFor="anxiety">Anxiety</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="moodSwings"
                checked={psychosocialSymptoms === "mood swings"}
                onChange={() => setPsychosocialSymptoms("mood swings")}
              />
              <label htmlFor="moodSwings">Mood swings</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="irritable"
                checked={psychosocialSymptoms === "Irritable"}
                onChange={() => setPsychosocialSymptoms("Irritable")}
              />
              <label htmlFor="irritable">Irritable</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="residentContractsForSafety"
                checked={
                  psychosocialSymptoms === "Resident contracts for safety"
                }
                onChange={() =>
                  setPsychosocialSymptoms("Resident contracts for safety")
                }
              />
              <label htmlFor="residentContractsForSafety">
                Resident contracts for safety
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="residentSafetyPlanCompleted"
                checked={
                  psychosocialSymptoms ===
                  "Resident Safety Plan to be completed within 48 hours of admission"
                }
                onChange={() =>
                  setPsychosocialSymptoms(
                    "Resident Safety Plan to be completed within 48 hours of admission"
                  )
                }
              />
              <label htmlFor="residentSafetyPlanCompleted">
                Resident Safety Plan to be completed within 48 hours of
                admission.
              </label>
            </div>
          </div>

          
          <div className="yeschechbox-review-Current">
              <div><label style={{ fontWeight: "bold" }} >Current Medications:</label></div>
          
            <div  style={{display:'flex',gap:"10px",alignItems:"center"}}>
              <input
                type="checkbox"
            
                checked={currentMedications}
                onChange={() => setCurrentMedications(!currentMedications)}
              />
              <label htmlFor="currentMedications">
                {" "}
                Verified that a list of current medications is present on file.
              </label>
            </div>
          </div>
       
          <div className="yeschechbox-review-Nutrition">
            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
            <div>
                  <label style={{ fontWeight: "bold" }} >Nutrition: Diet: </label>
            </div>
            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
              <input
                type="checkbox"
                id="As tolerated"
                checked={nutritionDiet === "As tolerated"}
                onChange={() => setNutritionDiet("As tolerated")}
              />
              <label htmlFor="As tolerated">As tolerated</label>
            </div>
            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
              <input
                type="checkbox"
                id="Special diet"
                checked={nutritionDiet === "Special diet"}
                onChange={() => setNutritionDiet("Special diet")}
              />
                  <label htmlFor="Special diet">Special diet ordered:</label>
                  {/* <AutosizeInput
                    type="text"
                    inputStyle={{ border: "none", outline: "none" }}
                    placeholder="________"
                    value={nutritionSpecialDietOrder}
                    onChange={(e) => setNutritionSpecialDietOrder(e.target.value)}
                  /> */}
            </div>
            </div>

            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
            <div>
            <label htmlFor="" >Fluid restrictions?</label>
            </div>
            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
              <input
                type="checkbox"
                id="nutritionFluidRestrictions"
                checked={nutritionFluidRestrictions === true}
                onChange={() => setNutritionFluidRestrictions(true)}
              />
              <label htmlFor="nutritionFluidRestrictions">Yes</label>
            </div>
            <div style={{display:'flex',gap:"10px",alignItems:"center"}}>
              <input
                type="checkbox"
                id="nutritionFluidRestrictionsno"
                checked={nutritionFluidRestrictions === false}
                onChange={() => setNutritionFluidRestrictions(false)}
              />
              <label htmlFor="nutritionFluidRestrictionsno">No</label>
            </div>
          </div>

          </div>


      

          {/* <div className="yeschechbox2">
            <label htmlFor="">
              Nutrition Special Diet Order 
            </label>
            <div>
              <input
                type="text"
                value={nutritionSpecialDietOrder}
                onChange={(e) => setNutritionSpecialDietOrder(e.target.value)}
              />
            </div>
          </div> */}

            {/* <div className="form-field">
            <label >Nutrition Special Diet Order :</label>
            <input
              type="text"

              required
              value={nutritionSpecialDietOrder}
              onChange={(e) => setNutritionSpecialDietOrder(e.target.value)}
            />
          </div> */}


        
          <div className="yeschechbox-skin-check">
          <label htmlFor="" className="yeschechbox2">
              Skin Check - Areas requiring treatment marked and labeled:
            </label>

            <div>
              <input
                type="checkbox"
                value={skinCheck}
                onChange={(e) => setSkinCheck(e.target.value)}
              />
              <span>Resident denies skin concerns</span>
            </div>
          </div>



          <div className="form-field">
            <div className="bodydiv">
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={front}
                  onChange={() => setFront(!front)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body1}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={back}
                  onChange={() => setBack(!back)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body2}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={sideLeft}
                  onChange={() => setSideLeft(!sideLeft)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body3}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={sideRight}
                  onChange={() => setSideRight(!sideRight)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body4}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
            </div>
            <div className="bodydiv">
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={legFront}
                  onChange={() => setLegFront(!legFront)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body5}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={legBack}
                  onChange={() => setLegBack(!legBack)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body6}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={legLeft}
                  onChange={() => setLegLeft(!legLeft)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body7}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
              <div className="bodyiamge">
                <input
                  type="checkbox"
                  checked={legRight}
                  onChange={() => setLegRight(!legRight)}
                  style={{
                    width: "22px",
                    height: "22px",
                    padding: "0",
                    marginRight: "10px",
                    color: "#000000",
                  }}
                />
                <img
                  src={body8}
                  alt="Selectable Image"
                  style={{ width: "120px", height: "189px" }}
                />
              </div>
            </div>
          </div>

            <div className="form-field-single-update box-image-container">
              <label >Comment:</label>

              <input
                type="text"
                value={commentFigure}
                placeholder="Enter Comment"
                required
                onChange={(e) => setCommentFigure(e.target.value)}
              />

          </div>

           <div className="box-image-container" style={{marginBottom:"2rem"}}>
            <div className="form-field-single-update">
            <label htmlFor="AHCCCS">BHT Name:</label>
            {/* <input
              type="text"
              // id="AHCCCS"
              value={bhtName}
              placeholder="Enter Name"
              required
              onChange={(e) => setBhtName(e.target.value)}
            /> */}
             <select value={bhtName} onChange={(e)=>setBhtName(e.target.value)}>
             {
                bhtName ?  <option value="">{bhtName}</option> :  <option value="">Select Employ</option>
              }
              {
                employ.length> 0 && employ.map((item)=>(
                  <option value={item._id}>{item?.fullName}</option>
                ))
              }
              
            </select>
          </div>

       
            <div class="file-upload-box " style={{marginLeft:"10px"}}> 
                <div className="file-upload-box-child hidePrint">
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                <button className="upload-button" type="button" onClick={() => setShowSingInOne(true)}>
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {
                  bhtSignature  && (
                    <p className="signature_name_print">Digitally Sign by {bhtSignature} {bhtDate} {bhpTime}</p>
                  )
                }
              </div>
            </div>

            {
              showSingInOne && (<SingInUpdateModel 
                onClose={()=>setShowSingInOne(false)}
                singin={bhtSignature}
                setSingIn={setBhtSignature}
                setDateAndTime={setbhtDate}
                setSignatureTime={setBhpTime}
                />)
            }
            <div className="form-field-single-update">
              <label >RN Name:</label>
            {/* <input
              type="text"

              value={rnName}
              placeholder="Enter Name"
              required
              onChange={(e) => setRnName(e.target.value)}
            /> */}
            <select value={rnName} onChange={(e)=>setRnName(e.target.value)}>
              {
                rnName ?  <option value="">{rnName}</option> :  <option value="">Select Employ</option>
              }
            
              {
                employ.length> 0 && employ.map((item)=>(
                  <option value={item._id}>{item?.fullName}</option>
                ))
              }
              
            </select>
            </div>

            <div class="file-upload-box " style={{marginLeft:"10px",paddingBottom:"1rem"}}>
              
              <div className="file-upload-box-child hidePrint">
               <div >
                <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                  SAVED AS DRAFT
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setShowSingInTwo(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                <div>
                  <button onClick={handlePrint2} className="upload-button signature_shift_margin" type="button" >
                  PRINT THIS FORM
                </button>
                </div>
              </div> 
              <div>
                {
                  rnSignature && (
                    <p className="signature_name_print">Digitally Sign by {rnSignature} {rnDate} {rnTime}</p>
                  )
                }
              </div>
            </div>
            {
              showSingInTwo && (<SingInUpdateModel 
                onClose={()=>setShowSingInTwo(false)}
                singin={rnSignature}
                setSingIn={setRnSignature}
                setDateAndTime={setrnDate}
                setSignatureTime={setRnTime}
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

export default NursingAssessment;
