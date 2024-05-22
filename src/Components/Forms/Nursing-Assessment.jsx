import React, { useEffect, useState,useRef } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
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
import AutoSize from "../AutoSize/AutoSize"
import Loader from "../../Pages/LandingPage/Loader";


const NursingAssessment = () => {
  const [loading,setLoading]=useState(false);

  const [showSingInOne, setShowSingInOne] = useState(false);
  const [showSingInTwo, setShowSingInTwo] = useState(false);
  const [draftModel,setDraftModel]=useState(false);
  const [saveAsDraft,setSaveAsDraft]=useState(false);


  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  const handlePrint2 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var signatureRightAndSide=document.getElementsByClassName("file-upload-box");
    // var formsheading2=document.getElementsByClassName("formsheading2");
    var submitButton=document.getElementsByClassName("form-actions");
    var bodyiamge=document.getElementsByClassName("bodyiamge");


    // hide bottom
    var form_field_gender = document.getElementsByClassName("form-field-child");
    var form_field_single_update = document.getElementsByClassName("form-field-single-update");


    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }
    
    for (let i = 0; i < submitButton.length; i++) {
      submitButton[i].style.display = "flex";
      submitButton[i].style.justifyContent = "center";
      submitButton[i].style.alignItems = "center";
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    // hode bottom
    for (let i = 0; i < form_field_gender.length; i++) {
      var inputs = form_field_gender[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "none";
      }
  }

  for (let i = 0; i < form_field_single_update.length; i++) {
    var inputs = form_field_single_update[i].getElementsByTagName("input");
    for (let j = 0; j < inputs.length; j++) {
        inputs[j].style.borderBottom = "none";
    }
}

for (let i = 0; i < bodyiamge.length; i++) {
  bodyiamge[i].style.margin = "70px 20px"
}



   
    handlePrint();

    // Use setTimeout to show the elements after a delay (adjust the timeout as needed)
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
      }
      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < submitButton.length; i++) {
        submitButton[i].style.display = "flex";
        submitButton[i].style.justifyContent = "center";
        submitButton[i].style.alignItems = "center";
      }

      // hide bottom
      for (let i = 0; i < form_field_gender.length; i++) {
        var inputs = form_field_gender[i].getElementsByTagName("input");
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].style.borderBottom = "1px solid black";
        }
    }

    for (let i = 0; i < form_field_single_update.length; i++) {
      var inputs = form_field_single_update[i].getElementsByTagName("input");
      for (let j = 0; j < inputs.length; j++) {
          inputs[j].style.borderBottom = "1px solid black";
      }
  }

  for (let i = 0; i < bodyiamge.length; i++) {
    bodyiamge[i].style.margin = "20px 20px"
  }

   

    }, 1000);
  };

  const navigate = useNavigate();
  const [filedForm,setFiledForm]=useState("")
  const [employ,setEmploy]=useState([])
  const [getApiData,setGetApiData]=useState("");
  const [userDetail, setUserDetail] = useState("");

  //all useState value
  const [userId, setUserId] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  // const [name, setName] = useState("");
  const [residentName,setResidentName]=useState("")
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [admissionDiagnoses, setAdmissionDiagnoses] = useState("");
  const [codeStatus, setCodeStatus] = useState([]);
  const [lastTBScreeningDate, setLastTBScreeningDate] = useState("");
  const [tbScreeningResults, setTbScreeningResults] = useState("");
  const [careProvidedPhysicalServices, setCareProvidedPhysicalServices] =
    useState([]);

  const [vitalsBloodPressure, setVitalsBloodPressure] = useState('');
  const [vitalsPulse, setVitalsPulse] = useState();
  const [vitalsRespiratoryRate, setVitalsRespiratoryRate] = useState();
  const [vitalsOxygenLevel, setVitalsOxygenLevel] = useState();
  const [vitalsTemperature, setVitalsTemperature] = useState();
  const [vitalsWeight, setVitalsWeight] = useState();
  const [vitalsHeightFeet, setVitalsHeightFeet] = useState();
  const [vitalsHeightInches, setVitalsHeightInches] = useState();
  const [allergies, setAllergies] = useState("");


  const [reviewOfSystemsConstitutional, setReviewOfSystemsConstitutional] =
    useState([]);
    const [reviewOfSystemsConstitutionalOther, setReviewOfSystemsConstitutionalOther] =
    useState("");
  const [reviewOfSystemsCardiovascular, setReviewOfSystemsCardiovascular] =
    useState([]);
  const [cardiovascularBloodPressure,setCardiovascularBloodPressure]=useState("")
    const [reviewOfSystemsCardiovascularOther,setReviewOfSystemsCardiovascularOther]=useState("")
  const [reviewOfSystemsEndocrine, setReviewOfSystemsEndocrine] = useState([]);
  const [endocrineBloodSuger,setEndocrineBloodSuger]=useState("");
  const [reviewOfSystemsEndocrineOther,setReviewOfSystemsEndocrineOther]=useState("")
  const [reviewOfSystemsGastrointestinal, setReviewOfSystemsGastrointestinal] =
    useState([]);
  const [reviewOfSystemsGastrointestinalOther,setReviewOfSystemsGastrointestinalOther]=useState("")
  const [reviewOfSystemsGenitourinary, setReviewOfSystemsGenitourinary] =
    useState([]);
    const [reviewOfSystemsGenitourinaryOther,setReviewOfSystemsGenitourinaryOther]=useState("")
  const [
    reviewOfSystemsHematologyOncology,
    setReviewOfSystemsHematologyOncology,
  ] = useState([]);
  const [reviewOfSystemsHematologyOncologyOther,setReviewOfSystemsHematologyOncologyOther]=useState("")
  const [reviewOfSystemsHeadNeckThroat, setReviewOfSystemsHeadNeckThroat] =
    useState([]);
    const [reviewOfSystemsHeadNeckThroatOther,setReviewOfSystemsHeadNeckThroatOther]=useState("")
  const [reviewOfSystemsIntegumentary, setReviewOfSystemsIntegumentary] =
    useState([]);
  const [reviewOfSystemsIntegumentaryOther,setReviewOfSystemsIntegumentaryOther]=useState("") 
  const [reviewOfSystemsMusculoskeletal, setReviewOfSystemsMusculoskeletal] =
    useState([]);
    const [reviewOfSystemsMusculoskeletalOther,setReviewOfSystemsMusculoskeletalOther]=useState("")
  const [reviewOfSystemsPsychiatric, setReviewOfSystemsPsychiatric] =
    useState([]);
    const [reviewOfSystemsPsychiatricOther,setReviewOfSystemsPsychiatricOther]=useState("")
  const [reviewOfSystemsNeurologic, setReviewOfSystemsNeurologic] =
    useState([]);
    const [reviewOfSystemsNeurologicOther,setReviewOfSystemsNeurologicOther]=useState("")
  const [reviewOfSystemsRespiratory, setReviewOfSystemsRespiratory] =
    useState([]);
    const [reviewOfSystemsRespiratoryOther,setReviewOfSystemsRespiratoryOther]=useState("")
  const [
    reviewOfSystemsAllergicImmunologic,
    setReviewOfSystemsAllergicImmunologic,
  ] = useState([]);
  const [reviewOfSystemsAllergicImmunologicOther,setReviewOfSystemsAllergicImmunologicOther]=useState("")
  



  const [
    suicidalRiskAssessmentDeniesSymptomsBellow,
    setSuicidalRiskAssessmentDeniesSymptomsBellow,
  ] = useState(false);
  const [behavioralSymptoms, setBehavioralSymptoms] = useState([]);
  const [physicalSymptoms, setPhysicalSymptoms] = useState([]);
  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState([]);
  const [currentMedications, setCurrentMedications] = useState(false);
  const [nutritionDiet, setNutritionDiet] = useState("");
  const [nutritionSpecialDietOrder, setNutritionSpecialDietOrder] =
    useState("");
  const [nutritionFluidRestrictions, setNutritionFluidRestrictions] =
    useState();
  const [skinCheck, setSkinCheck] = useState(false);
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
    if(getApiData){
      setSaveAsDraft(getApiData?.saveAsDraft);
      setResidentName(getApiData?.residentFullName);
      setDateOfBirth(getApiData?.dateOfBirth?getApiData?.dateOfBirth?.slice(0,10):"");
      setAge(getApiData?.age);
      setSex(getApiData?.sex)
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
      setCardiovascularBloodPressure(getApiData?.cardiovascularBloodPressure);
      setEndocrineBloodSuger(getApiData?.endocrineBloodSuger);
      setReviewOfSystemsEndocrineOther(getApiData?.reviewOfSystemsEndocrineComment)
      setReviewOfSystemsGastrointestinal(getApiData?.reviewOfSystemsGastrointestinal);
      setReviewOfSystemsGastrointestinalOther(getApiData?.reviewOfSystemsGastrointestinalComment)
      setReviewOfSystemsGenitourinary(getApiData?.reviewOfSystemsGenitourinary);
      setReviewOfSystemsGenitourinaryOther(getApiData?.reviewOfSystemsGenitourinaryComment)
      setReviewOfSystemsHematologyOncology(getApiData?.reviewOfSystemsHematologyOncology);
      setReviewOfSystemsHematologyOncologyOther(getApiData?.reviewOfSystemsHematologyOncologyomment)
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
      setReviewOfSystemsRespiratoryOther(getApiData?.reviewOfSystemsRespiratoryComment)
      setReviewOfSystemsAllergicImmunologic(getApiData?.reviewOfSystemsAllergicImmunologic);
      setReviewOfSystemsAllergicImmunologicOther(getApiData?.reviewOfSystemsAllergicImmunologicComment)
      setSuicidalRiskAssessmentDeniesSymptomsBellow(getApiData?.suicidalRiskAssessmentDeniesSymptomsBellow);
      setBehavioralSymptoms(getApiData?.behavioralSymptoms?getApiData?.behavioralSymptoms:[]);
      setPhysicalSymptoms(getApiData?.physicalSymptoms?getApiData?.physicalSymptoms:[]);
      setPsychosocialSymptoms(getApiData?.psychosocialSymptoms?getApiData?.psychosocialSymptoms:[]);
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
      setBhtName(getApiData?.bhtName?._id);
      setBhtSignature(getApiData?.bhtSignature);
      setbhtDate(getApiData?.bhpDate?formatDate(getApiData?.bhpDate):"")
      setBhpTime(getApiData?.bhpTime)
      setRnName(getApiData?.rnName?._id);
      setRnSignature(getApiData?.rnSignature);
      setrnDate(getApiData?.rnDate?formatDate(getApiData?.rnDate):"")
      setRnTime(getApiData?.rnTime)
    }
  },[getApiData])

  
  const [previusData,setPreviusData]=useState(false);



  useEffect(() => {
    setLoading(true); 
    if (previusData) {
      Nurssing_form_get(userId, setGetApiData, setLoading);
    } else {
      setLoading(false); 
    }
  }, [userId, previusData]);

  useEffect(() => {

    setFiledForm(userDetail?.nursingAssessment);
    setUserId(userDetail?._id);

  }, [userDetail]);

  useEffect(() => {
    user_detail(setUserDetail);
    employ_Detail(setEmploy);
  }, []);

  const initialData = () => {
    setResidentName("");
    setSex("");
    setDateOfBirth("");
    setAge("");
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
    setReviewOfSystemsConstitutional([]);
    setCardiovascularBloodPressure("")
    setEndocrineBloodSuger("")
    setReviewOfSystemsConstitutionalOther("")
    setReviewOfSystemsCardiovascular([]);
    setReviewOfSystemsCardiovascularOther("")
    setReviewOfSystemsEndocrine([]);
    setReviewOfSystemsEndocrineOther("")
    setReviewOfSystemsGastrointestinal("");
    setReviewOfSystemsGenitourinary();
    setReviewOfSystemsGastrointestinalOther("")
    setReviewOfSystemsHematologyOncology([]);
    setReviewOfSystemsHematologyOncologyOther("")
    setReviewOfSystemsHeadNeckThroat([]);
    setReviewOfSystemsHeadNeckThroatOther("")
    setReviewOfSystemsIntegumentary([]);
    setReviewOfSystemsIntegumentaryOther("")
    setReviewOfSystemsMusculoskeletal([]);
    setReviewOfSystemsMusculoskeletalOther("")
    setReviewOfSystemsPsychiatric([]);
    setReviewOfSystemsPsychiatricOther("")
    setReviewOfSystemsNeurologic([]);
    setReviewOfSystemsNeurologicOther("")
    setReviewOfSystemsRespiratory([]);
    setReviewOfSystemsRespiratoryOther("")
    setReviewOfSystemsAllergicImmunologic([]);
    setReviewOfSystemsAllergicImmunologicOther("")
    setSuicidalRiskAssessmentDeniesSymptomsBellow(false);
    setBehavioralSymptoms("");
    setPhysicalSymptoms("");
    setPsychosocialSymptoms([]);
    setCurrentMedications("");
    setNutritionDiet("");
    setNutritionSpecialDietOrder("");
    setNutritionFluidRestrictions("");
    setSkinCheck(false);
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
      saveAsDraft,
      residentName,
      dateOfBirth,
      admissionDate,
      age,
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
cardiovascularBloodPressure,
reviewOfSystemsCardiovascularComment:reviewOfSystemsCardiovascularOther,
reviewOfSystemsEndocrine,
endocrineBloodSuger,
reviewOfSystemsEndocrineComment:reviewOfSystemsEndocrineOther,
reviewOfSystemsGastrointestinal,
reviewOfSystemsGastrointestinalComment:reviewOfSystemsGastrointestinalOther,
reviewOfSystemsGenitourinary,
reviewOfSystemsGenitourinaryComment:reviewOfSystemsGenitourinaryOther,
reviewOfSystemsHematologyOncology,
reviewOfSystemsHematologyOncologyomment:reviewOfSystemsHematologyOncologyOther,
reviewOfSystemsHeadNeckThroat,
reviewOfSystemsHeadNeckThroatComment:reviewOfSystemsHeadNeckThroatOther,
reviewOfSystemsIntegumentary:reviewOfSystemsIntegumentary,
reviewOfSystemsIntegumentaryComment:reviewOfSystemsIntegumentaryOther,
reviewOfSystemsMusculoskeletal,
reviewOfSystemsMusculoskeletalComment:reviewOfSystemsMusculoskeletalOther,
reviewOfSystemsPsychiatric,
reviewOfSystemsPsychiatricComment:reviewOfSystemsPsychiatricOther,
reviewOfSystemsNeurologic,
reviewOfSystemsNeurologicComment:reviewOfSystemsNeurologicOther,
reviewOfSystemsRespiratory,
reviewOfSystemsRespiratoryComment:reviewOfSystemsRespiratoryOther,
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
    Nurssing_form(data,saveAsDraft);
    initialData();
    navigate("/intake");
  };

  const handleData = () => {
    
    const data = {
      patientId: userId,
      saveAsDraft,
      residentName,
      dateOfBirth,
      admissionDate,
      age,
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
cardiovascularBloodPressure,
reviewOfSystemsCardiovascularComment:reviewOfSystemsCardiovascularOther,
reviewOfSystemsEndocrine,
endocrineBloodSuger,
reviewOfSystemsEndocrineComment:reviewOfSystemsEndocrineOther,
reviewOfSystemsGastrointestinal,
reviewOfSystemsGastrointestinalComment:reviewOfSystemsGastrointestinalOther,
reviewOfSystemsGenitourinary,
reviewOfSystemsGenitourinaryComment:reviewOfSystemsGenitourinaryOther,
reviewOfSystemsHematologyOncology,
reviewOfSystemsHematologyOncologyomment:reviewOfSystemsHematologyOncologyOther,
reviewOfSystemsHeadNeckThroat,
reviewOfSystemsHeadNeckThroatComment:reviewOfSystemsHeadNeckThroatOther,
reviewOfSystemsIntegumentary:reviewOfSystemsIntegumentary,
reviewOfSystemsIntegumentaryComment:reviewOfSystemsIntegumentaryOther,
reviewOfSystemsMusculoskeletal,
reviewOfSystemsMusculoskeletalComment:reviewOfSystemsMusculoskeletalOther,
reviewOfSystemsPsychiatric,
reviewOfSystemsPsychiatricComment:reviewOfSystemsPsychiatricOther,
reviewOfSystemsNeurologic,
reviewOfSystemsNeurologicComment:reviewOfSystemsNeurologicOther,
reviewOfSystemsRespiratory,
reviewOfSystemsRespiratoryComment:reviewOfSystemsRespiratoryOther,
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
    Nurssing_form(data,saveAsDraft);

  };

  useEffect(()=>{
    if(saveAsDraft){
      handleData();
    }
  },[saveAsDraft])

  const handleSaveAsDraft=()=>{
    // setDraftModel(!draftModel); 
    setSaveAsDraft(!saveAsDraft);
  }


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


  // rate of reviews  ========>
  const handlereviewOfSystemsConstitutional = (symptom) => {
    setReviewOfSystemsConstitutional(prevState => {
        if (prevState.includes(symptom)) {
          return prevState.filter(item => item !== symptom);
        } else {
          return [...prevState, symptom];
        }
      });
  };

  const handlereviewOfSystemsCardiovascular = (symptom) => {
    setReviewOfSystemsCardiovascular(prevState => {
      if (prevState.includes(symptom)) {
        return prevState.filter(item => item !== symptom);
      } else {
        return [...prevState, symptom];
      }
    });
};


const handlereviewOfSystemsEndocrine = (symptom) => {
  setReviewOfSystemsEndocrine(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsGastrointestinal = (symptom) => {
  setReviewOfSystemsGastrointestinal(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsGenitourinary = (symptom) => {
  setReviewOfSystemsGenitourinary(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsHematologyOncology = (symptom) => {
  setReviewOfSystemsHematologyOncology(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsHeadNeckThroat = (symptom) => {
  setReviewOfSystemsHeadNeckThroat(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsIntegumentary = (symptom) => {
  setReviewOfSystemsIntegumentary(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsMusculoskeletal = (symptom) => {
  setReviewOfSystemsMusculoskeletal(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsPsychiatric = (symptom) => {
  setReviewOfSystemsPsychiatric(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsNeurologic = (symptom) => {
  setReviewOfSystemsNeurologic(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsRespiratory = (symptom) => {
  setReviewOfSystemsRespiratory(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlereviewOfSystemsAllergicImmunologic = (symptom) => {
  setReviewOfSystemsAllergicImmunologic(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

// changes ====>
const handlebehavioralSymptoms = (symptom) => {
  setBehavioralSymptoms(prevState => {
    if (prevState?.includes(symptom)) {
      return prevState?.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlephysicalSymptoms = (symptom) => {
  setPhysicalSymptoms(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

const handlerepsychosocialSymptoms = (symptom) => {
  setPsychosocialSymptoms(prevState => {
    if (prevState.includes(symptom)) {
      return prevState.filter(item => item !== symptom);
    } else {
      return [...prevState, symptom];
    }
  });
};

  return (
    <>
    <div ref={componentRef} >
      <div className="backbutton hidePrint">
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

          <div className="formsheading_updated_treatment_nursing">
            <div className="checkboxitem125555">
               <label>NURSING ASSESSMENT</label>
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
              value={residentName}
              placeholder="Enter name"
              required
              onChange={(e) => setResidentName(e.target.value)}
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
                <label >Care to be provided: </label>
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
          <div>
          <label className="label-review" style={{fontWeight:"bold",marginTop:"0.5rem"}}>Vitals:</label>
          </div>
           

          <div className="box-image-container">
            <div className="form-field-update">

              <div className="form-field-child">
                <label htmlFor="AHCCCS">Blood Pressure:</label>
              
               <input
                  style={{width:`${vitalsBloodPressure?.length?vitalsBloodPressure?.length*20+"px":"30px"}`}}
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
                  style={{width:`${vitalsPulse?.length?vitalsPulse?.length*20+"px":"30px"}`}}
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
                  style={{width:`${vitalsRespiratoryRate?.length?vitalsRespiratoryRate?.length*20+"px":"30px"}`}}
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
                  style={{width:`${vitalsTemperature?.length?vitalsTemperature?.length*20+"px":"30px"}`}}
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
                  style={{width:`${vitalsOxygenLevel?.length?vitalsOxygenLevel?.length*20+"px":"30px"}`}}
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
                  style={{width:`${vitalsWeight?.length?vitalsWeight?.length*20+"px":"50px"}`}}
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
                  style={{width:`${vitalsHeightFeet?.length?vitalsHeightFeet?.length*20+"px":"50px"}`}}
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



          <div className="formsheading">
          <label className="label-review" style={{fontWeight:"bold",marginTop:"0.5rem"}}>Review Of Systems:</label>
          </div>
          
          <label  className="label-review" style={{fontWeight:"bold"}}>Constitutional:</label>

          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
           
                id="DENIES222"
                checked={reviewOfSystemsConstitutional?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsConstitutional("DENIES")}
              />
              <label htmlFor="DENIES222">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Fever"
                checked={reviewOfSystemsConstitutional?.includes("Fever")}
                onChange={() => handlereviewOfSystemsConstitutional("Fever")}
              />
              <label htmlFor="Fever">Fever</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Poor appetite"
                checked={reviewOfSystemsConstitutional?.includes("Poor appetite")}
                onChange={() =>
                  handlereviewOfSystemsConstitutional("Poor appetite")
                }
              />
              <label htmlFor="Poor appetite">Poor appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Unexplained weight gain"
                checked={
                  reviewOfSystemsConstitutional?.includes("Unexplained weight gain")
                }
                onChange={() =>
                  handlereviewOfSystemsConstitutional("Unexplained weight gain")
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
                checked={reviewOfSystemsConstitutional?.includes("Fatigue")}
                onChange={() => handlereviewOfSystemsConstitutional("Fatigue")}
              />
              <label htmlFor="Fatigue">Fatigue</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Chills"
                checked={reviewOfSystemsConstitutional?.includes("Chills")}
                onChange={() => handlereviewOfSystemsConstitutional("Chills")}
              />
              <label htmlFor="Chills">Chills</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Change in appetite"
                checked={reviewOfSystemsConstitutional?.includes("Change in appetite")}
                onChange={() =>
                  handlereviewOfSystemsConstitutional("Change in appetite")
                }
              />
              <label htmlFor="Change in appetite">Change in appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Night Sweats"
                checked={reviewOfSystemsConstitutional?.includes("Night Sweats")}
                onChange={() =>
                  handlereviewOfSystemsConstitutional("Night Sweats")
                }
              />
              <label htmlFor="Night Sweats">Night Sweats</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Unexplained weight loss"
                checked={
                  reviewOfSystemsConstitutional?.includes("Unexplained weight loss")
                }
                onChange={() =>
                  handlereviewOfSystemsConstitutional("Unexplained weight loss")
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
          <label  className="label-review" style={{fontWeight:"bold"}}>Cardiovascular:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="DENIES111"
                checked={reviewOfSystemsCardiovascular?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsCardiovascular("DENIES")}
              />
              <label htmlFor="DENIES111">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Chest pain"
                checked={reviewOfSystemsCardiovascular?.includes("Chest pain")}
                onChange={() => handlereviewOfSystemsCardiovascular("Chest pain")}
              />
              <label htmlFor="Chest pain">Chest pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Shortness of breath"
                checked={
                  reviewOfSystemsCardiovascular?.includes("Shortness of breath")
                }
                onChange={() =>
                  handlereviewOfSystemsCardiovascular("Shortness of breath")
                }
              />
              <label htmlFor="Shortness of breath">Shortness of breath</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Racing Pulse"
                checked={reviewOfSystemsCardiovascular?.includes("Racing Pulse")}
                onChange={() =>
                  handlereviewOfSystemsCardiovascular("Racing Pulse")
                }
              />
              <label htmlFor="Racing Pulse">Racing Pulse</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Swelling of the feet/hands"
                checked={
                  reviewOfSystemsCardiovascular?.includes("Swelling of the feet/hands")
                }
                onChange={() =>
                  handlereviewOfSystemsCardiovascular("Swelling of the feet/hands")
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
                  reviewOfSystemsCardiovascular?.includes("Irregular heartbeat")
                }
                onChange={() =>
                  handlereviewOfSystemsCardiovascular("Irregular heartbeat")
                }
              />
              <label htmlFor="Irregular heartbeat">Irregular heartbeat</label>
            </div>
          </div>

          
          <div className="nursing-Cardiovascular">
           <div>
                <label htmlFor="Is your blood pressure under control?">Is your blood pressure under control?</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="Yes"
                checked={cardiovascularBloodPressure === "Yes"}
                onChange={() => setCardiovascularBloodPressure("Yes")}
              />
                <label htmlFor="Yes">Yes</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="no"
                checked={cardiovascularBloodPressure === "No"}
                onChange={() => setCardiovascularBloodPressure("No")}
              />
                <label htmlFor="no">No</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="Unsure"
                checked={cardiovascularBloodPressure === "Unsure"}
                onChange={() => setCardiovascularBloodPressure("Unsure")}
              />
                <label htmlFor="Unsure">Unsure</label>
              </div>
              <div>
              <input
                type="checkbox"
                id="N/A"
                checked={cardiovascularBloodPressure === "N/A"}
                onChange={() => setCardiovascularBloodPressure("N/A")}
              />
                <label htmlFor="N/A">N/A</label>
              </div>
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
                checked={reviewOfSystemsEndocrine?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsEndocrine("DENIES")}
              />
              <label htmlFor="deniesEndocrine">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="excessThirst"
                checked={reviewOfSystemsEndocrine?.includes("Excess thirst")}
                onChange={() => handlereviewOfSystemsEndocrine("Excess thirst")}
              />
              <label htmlFor="excessThirst">Excess thirst</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="excessiveUrination"
                checked={reviewOfSystemsEndocrine?.includes("Excessive urination")}
                onChange={() =>
                  handlereviewOfSystemsEndocrine("Excessive urination")
                }
              />
              <label htmlFor="excessiveUrination">Excessive urination</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="heatIntolerance"
                checked={reviewOfSystemsEndocrine?.includes("Heat Intolerance")}
                onChange={() => handlereviewOfSystemsEndocrine("Heat Intolerance")}
              />
              <label htmlFor="heatIntolerance">Heat Intolerance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="coldIntolerance"
                checked={reviewOfSystemsEndocrine?.includes("Cold Intolerance")}
                onChange={() => handlereviewOfSystemsEndocrine("Cold Intolerance")}
              />
              <label htmlFor="coldIntolerance">Cold Intolerance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hairLoss"
                checked={reviewOfSystemsEndocrine?.includes("Hair loss")}
                onChange={() => handlereviewOfSystemsEndocrine("Hair loss")}
              />
              <label htmlFor="hairLoss">Hair loss</label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Dry skin"
                checked={reviewOfSystemsEndocrine?.includes("Dry skin")}
                onChange={() => handlereviewOfSystemsEndocrine("Dry skin")}
              />
                <label htmlFor="Dry skin">Dry skin</label>
              </div> 
          </div>

          <div className="nursing-Cardiovascular">
           <div>
                <label htmlFor="Is resident’s blood sugar under control?">Is resident’s blood sugar under control?</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="Yes1"
                checked={endocrineBloodSuger === "Yes"}
                onChange={() => setEndocrineBloodSuger("Yes")}
              />
                <label htmlFor="Yes1">Yes</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="no1"
                checked={endocrineBloodSuger === "No"}
                onChange={() => setEndocrineBloodSuger("No")}
              />
                <label htmlFor="no1">No</label>
              </div> 
               <div>
              <input
                type="checkbox"
                id="Unsure1"
                checked={endocrineBloodSuger === "Unsure"}
                onChange={() => setEndocrineBloodSuger("Unsure")}
              />
                <label htmlFor="Unsure1">Unsure</label>
              </div>
              <div>
              <input
                type="checkbox"
                id="N/A1"
                checked={endocrineBloodSuger === "N/A"}
                onChange={() => setEndocrineBloodSuger("N/A")}
              />
                <label htmlFor="N/A1">N/A</label>
              </div>
              </div>
          
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
                checked={reviewOfSystemsGastrointestinal?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsGastrointestinal("DENIES")}
              />
              <label htmlFor="deniesGastrointestinal">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="abdominalPain"
                checked={reviewOfSystemsGastrointestinal?.includes("Abdominal pain")}
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Abdominal pain")
                }
              />
              <label htmlFor="abdominalPain">Abdominal pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="nausea"
                checked={reviewOfSystemsGastrointestinal?.includes("Nausea")}
                onChange={() => handlereviewOfSystemsGastrointestinal("Nausea")}
              />
              <label htmlFor="nausea">Nausea</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="diarrhea"
                checked={reviewOfSystemsGastrointestinal?.includes("Diarrhea")}
                onChange={() => handlereviewOfSystemsGastrointestinal("Diarrhea")}
              />
              <label htmlFor="diarrhea">Diarrhea</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="bloodyStools"
                checked={reviewOfSystemsGastrointestinal?.includes("Bloody stools")}
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Bloody stools")
                }
              />
              <label htmlFor="bloodyStools">Bloody stools</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="stomachUlcers"
                checked={reviewOfSystemsGastrointestinal?.includes("Stomach Ulcers")}
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Stomach Ulcers")
                }
              />
              <label htmlFor="stomachUlcers">Stomach Ulcers</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="constipation"
                checked={reviewOfSystemsGastrointestinal?.includes("Constipation")}
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Constipation")
                }
              />
              <label htmlFor="constipation">Constipation</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="troubleSwallowing"
                checked={
                  reviewOfSystemsGastrointestinal?.includes("Trouble Swallowing")
                }
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Trouble Swallowing")
                }
              />
              <label htmlFor="troubleSwallowing">Trouble Swallowing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jaundiceYellowSkin"
                checked={
                  reviewOfSystemsGastrointestinal?.includes("Jaundice/yellow skin")
                }
                onChange={() =>
                  handlereviewOfSystemsGastrointestinal("Jaundice/yellow skin")
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
                checked={reviewOfSystemsGenitourinary?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsGenitourinary("DENIES")}
              />
              <label htmlFor="deniesGenitourinary">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="genitalSoresUlcers"
                checked={
                  reviewOfSystemsGenitourinary?.includes("Genital sores or ulcers")
                }
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Genital sores or ulcers")
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
                  reviewOfSystemsGenitourinary?.includes("Kidney failure/problems")
                }
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Kidney failure/problems")
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
                checked={reviewOfSystemsGenitourinary?.includes("Kidney stones")}
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Kidney stones")
                }
              />
              <label htmlFor="Kidney stones">Kidney stones</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Painful/difficult urination"
                checked={
                  reviewOfSystemsGenitourinary?.includes("Painful/difficult urination")
                }
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Painful/difficult urination")
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
                checked={reviewOfSystemsGenitourinary?.includes("Testicular pain")}
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Testicular pain")
                }
              />
              <label htmlFor="Testicular pain">Testicular pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Urinary discharge"
                checked={reviewOfSystemsGenitourinary?.includes("Urinary discharge")}
                onChange={() =>
                  handlereviewOfSystemsGenitourinary("Urinary discharge")
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

            <label className="label-review" style={{fontWeight:"bold"}}>Hematology/Oncology:</label>
          <div className="yeschechbox-review">
            
            <div>
              <input
                type="checkbox"
                id="deniesHematologyOncology"
                checked={reviewOfSystemsHematologyOncology?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsHematologyOncology("DENIES")}
              />
              <label htmlFor="deniesHematologyOncology">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="easyBruising"
                checked={reviewOfSystemsHematologyOncology?.includes("Easy bruising")}
                onChange={() =>
                  handlereviewOfSystemsHematologyOncology("Easy bruising")
                }
              />
              <label htmlFor="easyBruising">Easy bruising</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="prolongedBleeding"
                checked={
                  reviewOfSystemsHematologyOncology?.includes("Prolongedbleeding")
                }
                onChange={() =>
                  handlereviewOfSystemsHematologyOncology("Prolongedbleeding")
                }
              />
              <label htmlFor="prolongedBleeding">Prolonged bleeding</label>
            </div>
          </div>

          <div className="form-field">
              <label >Comment:</label>
              <textarea
        
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
                checked={reviewOfSystemsHeadNeckThroat?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsHeadNeckThroat("DENIES")}
              />
              <label htmlFor="deniesHeadNeckThroat">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hearingLoss"
                checked={reviewOfSystemsHeadNeckThroat?.includes("Hearing loss")}
                onChange={() =>
                  handlereviewOfSystemsHeadNeckThroat("Hearing loss")
                }
              />
              <label htmlFor="hearingLoss">Hearing loss</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="soreThroat"
                checked={reviewOfSystemsHeadNeckThroat?.includes("Sore throat")}
                onChange={() => handlereviewOfSystemsHeadNeckThroat("Sore throat")}
              />
              <label htmlFor="soreThroat">Sore throat</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="runnyNose"
                checked={reviewOfSystemsHeadNeckThroat?.includes("Runny nose")}
                onChange={() => handlereviewOfSystemsHeadNeckThroat("Runny nose")}
              />
              <label htmlFor="runnyNose">Runny nose</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dryMouth"
                checked={reviewOfSystemsHeadNeckThroat?.includes("Dry mouth")}
                onChange={() => handlereviewOfSystemsHeadNeckThroat("Dry mouth")}
              />
              <label htmlFor="dryMouth">Dry mouth</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jawClaudication"
                checked={
                  reviewOfSystemsHeadNeckThroat?.includes("Jaw Claudication (pain in jaw when chewing)")
                }
                onChange={() =>
                  handlereviewOfSystemsHeadNeckThroat(
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
                checked={reviewOfSystemsHeadNeckThroat?.includes("Earache")}
                onChange={() => handlereviewOfSystemsHeadNeckThroat("Earache")}
              />
              <label htmlFor="earache">Earache</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="missingTeeth"
                checked={reviewOfSystemsHeadNeckThroat?.includes("Missing teeth")}
                onChange={() =>
                  handlereviewOfSystemsHeadNeckThroat("Missing teeth")
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
                checked={reviewOfSystemsIntegumentary?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsIntegumentary("DENIES")}
              />
              <label htmlFor="deniesIntegumentary">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="rash"
                checked={reviewOfSystemsIntegumentary?.includes("Rash")}
                onChange={() => handlereviewOfSystemsIntegumentary("Rash")}
              />
              <label htmlFor="rash">Rash</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="changeInMole"
                checked={reviewOfSystemsIntegumentary?.includes("Change in mole")}
                onChange={() =>
                  handlereviewOfSystemsIntegumentary("Change in mole")
                }
              />
              <label htmlFor="changeInMole">Change in mole</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="skinSores"
                checked={reviewOfSystemsIntegumentary?.includes("Skin sores")}
                onChange={() => handlereviewOfSystemsIntegumentary("Skin sores")}
              />
              <label htmlFor="skinSores">Skin sores</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="skinCancer"
                checked={reviewOfSystemsIntegumentary?.includes("Skin cancer")}
                onChange={() => handlereviewOfSystemsIntegumentary("Skin cancer")}
              />
              <label htmlFor="skinCancer">Skin cancer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="severeItching"
                checked={reviewOfSystemsIntegumentary?.includes("Severe itching")}
                onChange={() =>
                  handlereviewOfSystemsIntegumentary("Severe itching")
                }
              />
              <label htmlFor="severeItching">Server itching</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="lossOfHair"
                checked={reviewOfSystemsIntegumentary?.includes("Loss of hair")}
                onChange={() => handlereviewOfSystemsIntegumentary("Loss of hair")}
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
                checked={reviewOfSystemsMusculoskeletal?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsMusculoskeletal("DENIES")}
              />
              <label htmlFor="deniesMusculoskeletal">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="muscleAches"
                checked={reviewOfSystemsMusculoskeletal?.includes("Muscle aches")}
                onChange={() =>
                  handlereviewOfSystemsMusculoskeletal("Muscle aches")
                }
              />
              <label htmlFor="muscleAches">Muscle aches</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="difficultyLayingFlat"
                checked={
                  reviewOfSystemsMusculoskeletal?.includes("Difficulty laying flat due to muscle pain")
                }
                onChange={() =>
                  handlereviewOfSystemsMusculoskeletal(
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
                checked={reviewOfSystemsMusculoskeletal?.includes("Back pain")}
                onChange={() => handlereviewOfSystemsMusculoskeletal("Back pain")}
              />
              <label htmlFor="backPain">Back pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="jointPain"
                checked={reviewOfSystemsMusculoskeletal?.includes("Joint pain")}
                onChange={() => handlereviewOfSystemsMusculoskeletal("Joint pain")}
              />
              <label htmlFor="jointPain">Joint pain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="deformities"
                checked={reviewOfSystemsMusculoskeletal?.includes("Deformities")}
                onChange={() =>
                  handlereviewOfSystemsMusculoskeletal("Deformities")
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
                checked={reviewOfSystemsPsychiatric?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsPsychiatric("DENIES")}
              />
              <label htmlFor="deniesPsychiatric">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="insomnia"
                checked={reviewOfSystemsPsychiatric?.includes("Insomnia")}
                onChange={() => handlereviewOfSystemsPsychiatric("Insomnia")}
              />
              <label htmlFor="insomnia">Insomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="irritability"
                checked={reviewOfSystemsPsychiatric?.includes("Irritability")}
                onChange={() => handlereviewOfSystemsPsychiatric("Irritability")}
              />
              <label htmlFor="irritability">Irritability</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="depression"
                checked={reviewOfSystemsPsychiatric?.includes("Depression")}
                onChange={() => handlereviewOfSystemsPsychiatric("Depression")}
              />
              <label htmlFor="depression">Depression</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="anxiety"
                checked={reviewOfSystemsPsychiatric?.includes("Anxiety")}
                onChange={() => handlereviewOfSystemsPsychiatric("Anxiety")}
              />
              <label htmlFor="anxiety">Anxiety</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="recurrentBadThoughts"
                checked={
                  reviewOfSystemsPsychiatric?.includes("Recurrent bad thoughts")
                }
                onChange={() =>
                  handlereviewOfSystemsPsychiatric("Recurrent bad thoughts")
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
                checked={reviewOfSystemsPsychiatric?.includes("Mood swings")}
                onChange={() => handlereviewOfSystemsPsychiatric("Mood swings")}
              />
              <label htmlFor="moodSwings">Mood swings</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hallucinations"
                checked={reviewOfSystemsPsychiatric?.includes("Hallucinations")}
                onChange={() => handlereviewOfSystemsPsychiatric("Hallucinations")}
              />
              <label htmlFor="hallucinations">Hallucinations</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="compulsions"
                checked={reviewOfSystemsPsychiatric?.includes("Compulsions")}
                onChange={() => handlereviewOfSystemsPsychiatric("Compulsions")}
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
                checked={reviewOfSystemsNeurologic?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsNeurologic("DENIES")}
              />
              <label htmlFor="deniesNeurologic">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="weakness"
                checked={reviewOfSystemsNeurologic?.includes("Weakness")}
                onChange={() => handlereviewOfSystemsNeurologic("Weakness")}
              />
              <label htmlFor="weakness">Weakness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="headaches"
                checked={reviewOfSystemsNeurologic?.includes("Headaches")}
                onChange={() => handlereviewOfSystemsNeurologic("Headaches")}
              />
              <label htmlFor="headaches">Headaches</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="scalpTenderness"
                checked={reviewOfSystemsNeurologic?.includes("Scalp tenderness")}
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Scalp tenderness")
                }
              />
              <label htmlFor="scalpTenderness">Scalp tendemess</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dizziness"
                checked={reviewOfSystemsNeurologic?.includes("Dizziness")}
                onChange={() => handlereviewOfSystemsNeurologic("Dizziness")}
              />
              <label htmlFor="dizziness">Dizziness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="balanceProblems"
                checked={reviewOfSystemsNeurologic?.includes("Problems with balance")}
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Problems with balance")
                }
              />
              <label htmlFor="balanceProblems">Problems with balance</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="paralysis"
                checked={
                  reviewOfSystemsNeurologic?.includes("Paralysis of extremities")
                }
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Paralysis of extremities")
                }
              />
              <label htmlFor="paralysis">Paralysis of extremities</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="tremor"
                checked={reviewOfSystemsNeurologic?.includes("Tremor")}
                onChange={() => handlereviewOfSystemsNeurologic("Tremor")}
              />
              <label htmlFor="tremor">Tremor</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="stroke"
                checked={reviewOfSystemsNeurologic?.includes("Stroke")}
                onChange={() => handlereviewOfSystemsNeurologic("Stroke")}
              />
              <label htmlFor="stroke">Stroke</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="numbnessTingling"
                checked={reviewOfSystemsNeurologic?.includes("Numbness or tingling")}
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Numbness or tingling")
                }
              />
              <label htmlFor="numbnessTingling">Numbness or tingling</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="seizures"
                checked={
                  reviewOfSystemsNeurologic?.includes("Seizures or convulsions")
                }
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Seizures or convulsions")
                }
              />
              <label htmlFor="seizures">Seizures or convulsions</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="fainting"
                checked={reviewOfSystemsNeurologic?.includes("Fainting")}
                onChange={() => handlereviewOfSystemsNeurologic("Fainting")}
              />
              <label htmlFor="fainting">Fainting</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="walkingProblems"
                checked={reviewOfSystemsNeurologic?.includes("Problems walking")}
                onChange={() =>
                  handlereviewOfSystemsNeurologic("Problems walking")
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
                checked={reviewOfSystemsRespiratory?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsRespiratory("DENIES")}
              />
              <label htmlFor="deniesRespiratory">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="wheezing"
                checked={reviewOfSystemsRespiratory?.includes("Wheezing")}
                onChange={() => handlereviewOfSystemsRespiratory("Wheezing")}
              />
              <label htmlFor="wheezing">Wheezing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="cough"
                checked={reviewOfSystemsRespiratory?.includes("Cough")}
                onChange={() => handlereviewOfSystemsRespiratory("Cough")}
              />
              <label htmlFor="cough">Cough</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="coughingUpBlood"
                checked={reviewOfSystemsRespiratory?.includes("Coughing up blood")}
                onChange={() =>
                  handlereviewOfSystemsRespiratory("Coughing up blood")
                }
              />
              <label htmlFor="coughingUpBlood">Coughing up blood</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="severeOrFrequentColds"
                checked={
                  reviewOfSystemsRespiratory?.includes("Severe or Frequent colds")
                }
                onChange={() =>
                  handlereviewOfSystemsRespiratory("Severe or Frequent colds")
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
                checked={reviewOfSystemsRespiratory?.includes("Difficulty breathing")}
                onChange={() =>
                  handlereviewOfSystemsRespiratory("Difficulty breathing")
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
                checked={reviewOfSystemsAllergicImmunologic?.includes("DENIES")}
                onChange={() => handlereviewOfSystemsAllergicImmunologic("DENIES")}
              />
              <label htmlFor="deniesAllergicImmunologic">DENIES</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="seasonalAllergies"
                checked={
                  reviewOfSystemsAllergicImmunologic?.includes("Seasonal allergies")
                }
                onChange={() =>
                  handlereviewOfSystemsAllergicImmunologic("Seasonal allergies")
                }
              />
              <label htmlFor="seasonalAllergies">Seasonal allergies</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hayFeverSymptoms"
                checked={
                  reviewOfSystemsAllergicImmunologic?.includes("Hay fever symptoms")
                }
                onChange={() =>
                  handlereviewOfSystemsAllergicImmunologic("Hay fever symptoms")
                }
              />
              <label htmlFor="hayFeverSymptoms">Hay fever symptoms</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="itching"
                checked={reviewOfSystemsAllergicImmunologic?.includes("Itching")}
                onChange={() =>
                  handlereviewOfSystemsAllergicImmunologic("Itching")
                }
              />
              <label htmlFor="itching">Itching</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="frequentInfections"
                checked={
                  reviewOfSystemsAllergicImmunologic?.includes("Frequent infections")
                }
                onChange={() =>
                  handlereviewOfSystemsAllergicImmunologic("Frequent infections")
                }
              />
              <label htmlFor="frequentInfections">Frequent infections</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="exposureToHIV"
                checked={
                  reviewOfSystemsAllergicImmunologic?.includes("Exposure to HIV")
                }
                onChange={() =>
                  handlereviewOfSystemsAllergicImmunologic("Exposure to HIV")
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


            <div className="box-image-container-update"></div>

            <div style={{ display: "flex", alignItems: "center", columnGap:"1rem"}}>
              <div className="form-field-child">
                <label htmlFor="" className="label-review" style={{ fontSize: "20px" }}>Suicidal Risk Assessment:</label>
              </div>

              <div className="form-field-child" >
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
                checked={behavioralSymptoms?.includes("self-injuring")}
                onChange={() => handlebehavioralSymptoms("self-injuring")}
              />
              <label htmlFor="selfInjuring">Self-injuring</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="recklessBehavior"
                checked={behavioralSymptoms?.includes("reckless behavior")}
                onChange={() => handlebehavioralSymptoms("reckless behavior")}
              />
              <label htmlFor="recklessBehavior">Reckless behavior</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="impulsiveBehaviors"
                checked={behavioralSymptoms?.includes("impulsive behaviors")}
                onChange={() => handlebehavioralSymptoms("impulsive behaviors")}
              />
              <label htmlFor="impulsiveBehaviors">Impulsive behaviors</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="shiftsInTemperament"
                checked={behavioralSymptoms?.includes("shifts in temperament")}
                onChange={() => handlebehavioralSymptoms("shifts in temperament")}
              />
              <label htmlFor="shiftsInTemperament">Shifts in temperament</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="noLongerEnjoyingActivities"
                checked={
                  behavioralSymptoms?.includes
                  ("no longer enjoying previous activities")
                }
                onChange={() =>
                  handlebehavioralSymptoms(
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
                  behavioralSymptoms?.includes("talking or writing about death")
                }
                onChange={() =>
                  handlebehavioralSymptoms("talking or writing about death")
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
                checked={physicalSymptoms?.includes("insomnia")}
                onChange={() => handlephysicalSymptoms("insomnia")}
              />
              <label htmlFor="insomniap">Insomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="hypersomnia"
                checked={physicalSymptoms?.includes("hypersomnia")}
                onChange={() => handlephysicalSymptoms("hypersomnia")}
              />
              <label htmlFor="hypersomnia">Hypersomnia</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="changesInAppetite"
                checked={physicalSymptoms?.includes("changes in appetite")}
                onChange={() => handlephysicalSymptoms("changes in appetite")}
              />
              <label htmlFor="changesInAppetite">Changes in appetite</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="weightLossGain"
                checked={physicalSymptoms?.includes("weight loss/gain")}
                onChange={() => handlephysicalSymptoms("weight loss/gain")}
              />
              <label htmlFor="weightLossGain">Weight loss/gain</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="panicAttacks"
                checked={physicalSymptoms?.includes("panic attacks")}
                onChange={() => handlephysicalSymptoms("panic attacks")}
              />
              <label htmlFor="panicAttacks">Panic attacks</label>
            </div>
          </div>
          <label  className="label-review" style={{fontWeight:"bold"}}>Psychosocial symptoms:</label>
          <div className="yeschechbox-review">
            <div>
              <input
                type="checkbox"
                id="helplessnessHopelessness"
                checked={psychosocialSymptoms?.includes("helplessness/hopelessness")}
                onChange={() =>
                  handlerepsychosocialSymptoms("helplessness/hopelessness")
                }
              />
              <label htmlFor="helplessnessHopelessness">
                  Helplessness    
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="worthlessness"
                checked={psychosocialSymptoms?.includes("worthlessness")}
                onChange={() => handlerepsychosocialSymptoms("worthlessness")}
              />
              <label htmlFor="worthlessness">Worthlessness</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="depression11111"
                checked={psychosocialSymptoms?.includes("depression")}
                onChange={() => handlerepsychosocialSymptoms("depression")}
              />
              <label htmlFor="depression11111">Depression</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="anxiety1111"
                checked={psychosocialSymptoms?.includes("anxiety")}
                onChange={() => handlerepsychosocialSymptoms("anxiety")}
              />
              <label htmlFor="anxiety1111">Anxiety</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="moodSwings1111"
                checked={psychosocialSymptoms?.includes("mood swings")}
                onChange={() => handlerepsychosocialSymptoms("mood swings")}
              />
              <label htmlFor="moodSwings1111">Mood swings</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="irritable"
                checked={psychosocialSymptoms?.includes("Irritable")}
                onChange={() => handlerepsychosocialSymptoms("Irritable")}
              />
              <label htmlFor="irritable">Irritable</label>
            </div>
          
          </div>

          <div className="yeschechbox-review-nursing">
        
            <div>
              <input
                type="checkbox"
                id="residentContractsForSafety"
                checked={
                  psychosocialSymptoms?.includes("Resident contracts for safety")
                }
                onChange={() =>
                  handlerepsychosocialSymptoms("Resident contracts for safety")
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
                  psychosocialSymptoms?.includes
                  ("Resident Safety Plan to be completed within 48 hours of admission")
                }
                onChange={() =>
                  handlerepsychosocialSymptoms(
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
   
   <div className="box-image-container-update"></div>
          
          <div className="yeschechbox-review-Current">
              <div><label className="label-review" style={{fontWeight:"bold"}} >Current Medications:</label></div>
          
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

            <div style={{display:"flex", columnGap:"1rem"}}>
                  <label className="label-review" style={{fontWeight:"bold"}} >Nutrition:  </label>
                  <label>Diet: </label>
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
                  
                  <AutoSize
                      value={nutritionSpecialDietOrder}
                      setValue={setNutritionSpecialDietOrder}
                      placeholder="_________"
                    />
               
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


      

         


        
          <div className="yeschechbox-skin-check">
          <label htmlFor="" className="yeschechbox2">
              Skin Check - Areas requiring treatment marked and labeled:
            </label>

            <div>
              <input
                type="checkbox"
                checked={skinCheck}
                onChange={(e) => setSkinCheck(!skinCheck)}
              />
              <span style={{marginBottom:"5px"}}>Resident denies skin concerns</span>
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
                <button className="upload-button1" type="button" onClick={handleSaveAsDraft}>
                     { saveAsDraft ? "SAVED AS DRAFT" : "IN DRAFT" }       
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
               <button className="upload-button1" type="button" onClick={handleSaveAsDraft}>
                     { saveAsDraft ? "SAVED AS DRAFT" : "IN DRAFT" }       
                </button>
                </div>
                <div>
                <button className="upload-button" type="button" onClick={() => setShowSingInTwo(true)}>
                  SAVED AND SIGNED
                </button>
                </div>
                {
                  filedForm &&   <div>
                  <button onClick={handlePrint2} className="upload-button signature_shift_margin" type="button" >
                  PRINT THIS FORM
                </button>
                </div>
                }
              
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
            <button type="submit"  style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#0c5c75",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem",color:"white"}} >
              SUBMIT DETAILS
            </button>
            {
              filedForm &&   <button type="button" onClick={()=>setPreviusData(!previusData)} style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#0c5c75",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem",color:"white"}} >
            
              {
                    loading ? <Loader/> : "PREVIOUS FORM"
                  }
            </button>
            }
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
