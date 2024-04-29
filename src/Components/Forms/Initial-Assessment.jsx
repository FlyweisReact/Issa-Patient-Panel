// ResidentForm.js

import React, { useEffect, useState } from "react";
import "./Initial-Assessment.css";
import FormUpper from "./FormsUpperbar";
import { AiFillDelete } from "react-icons/ai";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { user_detail, initialAssestment_form,initial_assestment_get } from "../../Api_Collection/Api";
import Select from "react-select";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import Draftinmodel from "../Modal/Draftinmodel";

import { useReactToPrint } from "react-to-print";
import AutoSize from "../AutoSize/AutoSize";

const InitialAssessment = () => {
  const navigate = useNavigate();
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  let hideData = document.getElementsByClassName("hidaData");

  for (let i = 0; i < hideData.length; i++) {
    hideData[i].style.display = "none";
  }



  const handlePrint2 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    var hidePrintButton = document.getElementsByClassName("hidePrintButton");
    var signatureRightAndSide =
      document.getElementsByClassName("file-upload-box");

      // print under line hidden
      var form_field_gender = document.getElementsByClassName("form-field-child-gender");


    for (let i = 0; i < hideData.length; i++) {
      hideData[i].style.display = "block";
    }

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }

    for (let i = 0; i < hidePrintButton.length; i++) {
      hidePrintButton[i].style.display = "none";
    }

    for (let i = 0; i < signatureRightAndSide.length; i++) {
      signatureRightAndSide[i].style.justifyContent = "right";
    }

    // print functinality
    for (let i = 0; i < form_field_gender.length; i++) {
      form_field_gender[i].style.borderBottom = "none";
    }



    handlePrint();

    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "flex";
        elements[i].style.justifyContent = "center";
      }

      for (let i = 0; i < hidePrintButton.length; i++) {
        hidePrintButton[i].style.display = "flex";
      }

      for (let i = 0; i < signatureRightAndSide.length; i++) {
        signatureRightAndSide[i].style.justifyContent = "space-between";
      }

      for (let i = 0; i < hideData.length; i++) {
        hideData[i].style.display = "none";
      }

      // print functinality
      for (let i = 0; i < form_field_gender.length; i++) {
        form_field_gender[i].style.borderBottom = "1px solid black";
      }


    }, 1000);
  };

  //singin model
  const [draftModel, setDraftModel] = useState(false);
  const [signInModel1, setSigInModel1] = useState(false);
  const [signInModel2, setSigInModel2] = useState(false);
  const [signInModel3, setSigInModel3] = useState(false);
  const [signInModel4, setSigInModel4] = useState(false);
  const [signInModel5, setSigInModel5] = useState(false);
  const [signInModel6, setSigInModel6] = useState(false);
  const [signInModel7, setSigInModel7] = useState(false);
  const [signInModel8, setSigInModel8] = useState(false);

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [getApiData,setGetApiData]=useState([]);
  //state define
  const [assessmentType,setAssessmentType]=useState("")
  const [hasNotified, setHasNotified] = useState("");
  const [assessmentOn, setAssessmentOn] = useState("");
  const [patientId, setPatientId] = useState("");
  const [dob, setDob] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [residentName, setResidentName] = useState("");
  const [sex, setSex] = useState("");
  const [dateOfAssessment, setDateOfAssessment] = useState("");
  const [ahcccsNumber, setAhcccsNumber] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  // admission status is array
  const [admissionStatus, setAdmissionStatus] = useState([]);

  const [programLocation, setProgramLocation] = useState("");
  const [guardianship, setGuardianship] = useState("");
  const [powerOfAttorneyStatus, setPowerOfAttorneyStatus] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [guardianshipPoaPubFidName, setGuardianshipPoaPubFidName] =
    useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [reasonForAdmission, setReasonForAdmission] = useState([]);
 
  const [residentGoals, setResidentGoals] = useState("");

  // Resident Strengths (Array)
  const [residentStrengths, setResidentStrengths] = useState([]);

  const [residentLimitations, setResidentLimitations] = useState("");
  const [currentBehavioralIssues, setCurrentBehavioralIssues] = useState("");

  // Behavioral Interventions (Array of Objects)==> check i think remove this section by client
  const [need, setNeed] = useState("");
  const [intervention, setIntervention] = useState("");
  // 1
  const [behavioralInterventionsArray, setbehavioralInterventionsArray] =
    useState([]);

  // 1
  const [behavioralInterventions, setBehavioralInterventions] = useState([]);
// 1
  const behavioralInterventionaArrayHandle = () => {
    setbehavioralInterventionsArray((prev) => [
      ...prev,
      { need, intervention },
    ]);
    setNeed("");
    setIntervention("");
  };

  const [dischargePlan, setDischargePlan] = useState("");
  const [estimateDateOfDischarge, setEstimateDateOfDischarge] = useState("");
  const [agreementWithPlan, setAgreementWithPlan] = useState();

  // Resident Guardian Agreement
  const [residentGuardianAgreementName, setResidentGuardianAgreementName] =
    useState("");
  const [
    residentGuardianAgreementSignature,
    setResidentGuardianAgreementSignature,
  ] = useState("");
  const [residentGuardianAgreementDate, setResidentGuardianAgreementDate] =
    useState("");
  const [residentGuardianAgreementTime, setResidentGuardianAgreementTime] = useState("");

  // Staff Agreement
  const [staffAgreementname, setStaffAgreementName] = useState("");
  const [staffAgreementSignature, setStaffAgreementSignature] = useState("");
  const [staffAgreementDate, setStaffAgreementDate] = useState("");
  const [staffAgreementTime, setStaffAgreementTime] = useState("");

  // BHP Agreement
  const [bhpAgreementName, setBhpAgreementName] = useState("");
  const [bhpAgreementSignature, setBhpAgreementSignature] = useState("");
  const [bhpAgreementDate, setBhpAgreementDate] = useState("");
  const [bhpAgreementTime, setBhpAgreementTime] = useState("");

  // Other
  const [otherName, setOtherName] = useState("");
  const [otherRelationship, setOtherRelationship] = useState("");
  const [otherSignature, setOtherSignature] = useState("");
  const [otherDate, setOtherDate] = useState("");
  const [otherTime, setOtherTime] = useState("");

  // Medical Conditions (Array of Objects) array second section is start ===>
  // diabetes =======>
  const [yesDiabetes, setYesDiabetes] = useState();
  const [commentDiabety, setCommentDeabetes] = useState("");

  //Heart disease / heart attack
  const [yesHeart, setYesHeart] = useState();
  const [commentHeart, setCommentHeart] = useState("");

  //History
  const [yesHistory, setYesHistory] = useState();
  const [commentHistory, setCommentHistory] = useState("");

  //High Blood Pressure
  const [yesHigh, setYesHigh] = useState();
  const [commentHigh, setCommentHigh] = useState("");

  //Lung disease (ie asthma, COPD, emphysema)
  const [yesLung, setYesLung] = useState();
  const [commentLung, setCommentLung] = useState("");

  //Seizures
  const [yesSeizures, setYesSeizures] = useState();
  const [commentSeizures, setCommentSeizures] = useState("");

  //Cancer
  const [yesCancer, setYesCancer] = useState();
  const [commentCancer, setCommentCancer] = useState("");

  // Liver/kidney disease
  const [yesLiver, setYesLiver] = useState();
  const [commentLiver, setCommentLiver] = useState("");

  //Thyroid disorder
  const [yesThyroid, setYesThyroid] = useState();
  const [thyroidDisorder, setThyroidDisorder] = useState([]);
  //dropdown

  // History of head trauma/traumatic brain injury
  const [yesbrain, setYesBrain] = useState();
  const [commentbrain, setbrain] = useState("");

  // injury
  // const [injury,setInjury] =useState("") not present remove it
  const [yesInjury, setYesInjury] = useState();
  const [commentInjury, setCommentInjury] = useState("");

  //Chronic painChronic pain
  const [yesChronic, setYesChronic] = useState();
  const [chronicCommit, setChronicCommit] = useState("");

  // Allergies (food, environment, medications)
  const [AllergiesYes, setAllergiesYes] = useState();
  const [AllergiesComment, setAllergiesComment] = useState("");

  // Surgeries
  const [SurgeriesYes, setSurgeriessYes] = useState();
  const [SurgeriesComment, setSurgeriesComment] = useState("");

  //Number of pregnancies / births
  const [pregnanciesYes, setPregnanciesYes] = useState();
  const [pregnanciesComment, setPregnanciesComment] = useState("");

  // Substance use disorder (please specify)
  const [SubstanceYes, setSubstanceYes] = useState();
  const [SubstanceComment, setSubstanceComment] = useState("");

  // Depression
  const [DepressionYes, setDepressionYes] = useState();
  const [DepressionComment, setDepressionComment] = useState("");

  // Anxiety/panic attacks
  const [AnxietyYes, setAnxietyYes] = useState();
  const [AnxietyComment, setAnxietyComment] = useState("");

  // Insomnia
  const [InsomniaYes, setInsomniaYes] = useState();
  const [InsomniaComment, setInsomniaComment] = useState("");

  // Bipolar disorder
  const [BipolarYes, setBipolarYes] = useState();
  const [BipolarComment, setBipolarComment] = useState("");

  // Schizophrenia
  const [SchizophreniaYes, setSchizophreniaYes] = useState();
  const [SchizophreniaComment, setSchizophreniaComment] = useState("");

  // Obsessive compulsive disorder
  const [ObsessiveYes, setObsessiveYes] = useState();
  const [ObsessiveComment, setObsessiveComment] = useState("");

  // Personality disorder (please specify) shishpal
  const [PersonalityYes, setPersonalityYes] = useState(false);
  const [PersonalityComment, setPersonalityComment] = useState("");

  // Phobias
  const [PhobiasYes, setPhobiasYes] = useState();
  const [PhobiasComment, setPhobiasComment] = useState("");

  // Any other health conditions
  const [healthConditionsYes, setHealthConditionsYes] = useState();
  const [healthConditionsYesComment, sethealthConditionsYesComment] =
    useState("");

  // Infection or Diseases
  const [InfectionYes, setInfectionYes] = useState();
  // drop down c
  const [infectionDiseases, setInfectionDiseases] = useState([]);

  //section 2 condition other array 
 const [OtherConditionOther,setOtherConditionOther]=useState("")
 const [otherConditionYesNO,setOtherConditionYesNo]=useState();
 const [otherConditionDiscription,setOtherConditionDiscription]=useState("")

 const [otherConditionArray,setOtherConditionArray]=useState([]);
  const handleAddCondition=()=>{
    if(OtherConditionOther || otherConditionYesNO || otherConditionDiscription ){
      const data={
        condition:OtherConditionOther,
        yes:otherConditionYesNO,
        comments:otherConditionDiscription
      }
      setOtherConditionArray((prev)=>[...prev,data]);
      setOtherConditionOther("");
      setOtherConditionYesNo();
      setOtherConditionDiscription("");
    }
  }


  const [
    SignificantFamilyMedicalPsychiatricHistory,
    setSignificantFamilyMedicalPsychiatricHistory,
  ] = useState([]);


  // array 
  const [
    mentalHealthTreatmentHistoryTypeOfService,
    setMentalHealthTreatmentHistoryTypeOfService,
  ] = useState([]);

  const [
    mentalHealthTreatmentHistoryWhere,
    setMentalHealthTreatmentHistoryWhere,
  ] = useState("");
  const [
    mentalHealthTreatmentHistoryDates,
    setMentalHealthTreatmentHistoryDates,
  ] = useState("");
  const [
    mentalHealthTreatmentHistoryDiagnosisReason,
    setMentalHealthTreatmentHistoryDiagnosisReason,
  ] = useState([]);


  const [typeOfServiceArray, setTypeOfServicesArray] = useState([]);
  const handleTypeOfService = () => {
    if (
      mentalHealthTreatmentHistoryDiagnosisReason &&
      mentalHealthTreatmentHistoryDates &&
      mentalHealthTreatmentHistoryWhere &&
      mentalHealthTreatmentHistoryTypeOfService
    ) {
      const data = {
        diagnosisReason:mentalHealthTreatmentHistoryDiagnosisReason?.map((item)=>item),
        dates:mentalHealthTreatmentHistoryDates,
        where:mentalHealthTreatmentHistoryWhere,
        typeOfService:mentalHealthTreatmentHistoryTypeOfService?.map((item)=>item),
      };
      setTypeOfServicesArray((prev) => [...prev, data]);
      setMentalHealthTreatmentHistoryTypeOfService([]);
      setMentalHealthTreatmentHistoryWhere("");
      setMentalHealthTreatmentHistoryDates("");
      setMentalHealthTreatmentHistoryDiagnosisReason([]);
    }
  };






  // Event handler for removing an item from the array
  const handleRemoveItem = (index) => {
    const updatedArray = [...typeOfServiceArray];
    updatedArray.splice(index, 1);
    setTypeOfServicesArray(updatedArray);
  };

  
  const [substanceAbuseHistory, setSubstanceAbuseHistory] = useState("");
  const [substanceAbuseDenies, setSubstanceAbuseDenies] = useState("");

  // type of age, frequancy,last use, length of soberty
  //Alcohol data
  const [
    substanceAbuseHistoryDataAgeOfFirstUseAlcohol,
    setSubstanceAbuseHistoryDataAgeOfFirstUseAlcohol,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseAlcohol,
    setSubstanceAbuseHistoryDataLastUseAlcohol,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyAlcohol,
    setSubstanceAbuseHistoryDataFrequencyAlcohol,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyAlcohol,
    setSubstanceAbuseHistoryDataLengthOfSobrietyAlcohol,
  ] = useState("");
  //Benzodiazepines
  const [
    substanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines,
    setSubstanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseBenzodiazepines,
    setSubstanceAbuseHistoryDataLastUseBenzodiazepines,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyBenzodiazepines,
    setSubstanceAbuseHistoryDataFrequencyBenzodiazepines,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines,
    setSubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines,
  ] = useState("");
  //Crack
  const [
    substanceAbuseHistoryDataAgeOfFirstUseCrack,
    setSubstanceAbuseHistoryDataAgeOfFirstUseCrack,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseCrack,
    setSubstanceAbuseHistoryDataLastUseCrack,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyCrack,
    setSubstanceAbuseHistoryDataFrequencyCrack,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyCrack,
    setSubstanceAbuseHistoryDataLengthOfSobrietyCrack,
  ] = useState("");
  //Heroin
  const [
    substanceAbuseHistoryDataAgeOfFirstUseHeroin,
    setSubstanceAbuseHistoryDataAgeOfFirstUseHeroin,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseHeroin,
    setSubstanceAbuseHistoryDataLastUseHeroin,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyHeroin,
    setSubstanceAbuseHistoryDataFrequencyHeroin,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyHeroin,
    setSubstanceAbuseHistoryDataLengthOfSobrietyHeroin,
  ] = useState("");
  //Inhalants
  const [
    substanceAbuseHistoryDataAgeOfFirstUseInhalants,
    setSubstanceAbuseHistoryDataAgeOfFirstUseInhalants,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseInhalants,
    setSubstanceAbuseHistoryDataLastUseInhalants,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyInhalants,
    setSubstanceAbuseHistoryDataFrequencyInhalants,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyInhalants,
    setSubstanceAbuseHistoryDataLengthOfSobrietyInhalants,
  ] = useState("");
  //Marijuana
  const [
    substanceAbuseHistoryDataAgeOfFirstUseMarijuana,
    setSubstanceAbuseHistoryDataAgeOfFirstUseMarijuana,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseMarijuana,
    setSubstanceAbuseHistoryDataLastUseMarijuana,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyMarijuana,
    setSubstanceAbuseHistoryDataFrequencyMarijuana,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyMarijuana,
    setSubstanceAbuseHistoryDataLengthOfSobrietyMarijuana,
  ] = useState("");
  //Methamphetamine
  const [
    substanceAbuseHistoryDataAgeOfFirstUseMethamphetamine,
    setSubstanceAbuseHistoryDataAgeOfFirstUseMethamphetamine,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseMethamphetamine,
    setSubstanceAbuseHistoryDataLastUseMethamphetamine,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyMethamphetamine,
    setSubstanceAbuseHistoryDataFrequencyMethamphetamine,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyMethamphetamine,
    setSubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine,
  ] = useState("");
  //Methadone
  const [
    substanceAbuseHistoryDataAgeOfFirstUseMethadone,
    setSubstanceAbuseHistoryDataAgeOfFirstUseMethadone,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseMethadone,
    setSubstanceAbuseHistoryDataLastUseMethadone,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyMethadone,
    setSubstanceAbuseHistoryDataFrequencyMethadone,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyMethadone,
    setSubstanceAbuseHistoryDataLengthOfSobrietyMethadone,
  ] = useState("");
  //MDMA
  const [
    substanceAbuseHistoryDataAgeOfFirstUseMDMA,
    setSubstanceAbuseHistoryDataAgeOfFirstUseMDMA,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseMDMA,
    setSubstanceAbuseHistoryDataLastUseMDMA,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyMDMA,
    setSubstanceAbuseHistoryDataFrequencyMDMA,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyMDMA,
    setSubstanceAbuseHistoryDataLengthOfSobrietyMDMA,
  ] = useState("");
  //PCP
  const [
    substanceAbuseHistoryDataAgeOfFirstUsePCP,
    setSubstanceAbuseHistoryDataAgeOfFirstUsePCP,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUsePCP,
    setSubstanceAbuseHistoryDataLastUsePCP,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyPCP,
    setSubstanceAbuseHistoryDataFrequencyPCP,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyPCP,
    setSubstanceAbuseHistoryDataLengthOfSobrietyPCP,
  ] = useState("");
  //Prescription
  const [
    substanceAbuseHistoryDataAgeOfFirstUsePrescription,
    setSubstanceAbuseHistoryDataAgeOfFirstUsePrescription,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUsePrescription,
    setSubstanceAbuseHistoryDataLastUsePrescription,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyPrescription,
    setSubstanceAbuseHistoryDataFrequencyPrescription,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyPrescription,
    setSubstanceAbuseHistoryDataLengthOfSobrietyPrescription,
  ] = useState("");
  //OTC
  const [
    substanceAbuseHistoryDataAgeOfFirstUseOTC,
    setSubstanceAbuseHistoryDataAgeOfFirstUseOTC,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLastUseOTC,
    setSubstanceAbuseHistoryDataLastUseOTC,
  ] = useState("");
  const [
    substanceAbuseHistoryDataFrequencyOTC,
    setSubstanceAbuseHistoryDataFrequencyOTC,
  ] = useState("");
  const [
    substanceAbuseHistoryDataLengthOfSobrietyOTC,
    setSubstanceAbuseHistoryDataLengthOfSobrietyOTC,
  ] = useState("");

  // arr the value in array
  const [typeArray, setTypeArray] = useState([]);
  // other array
  const [otherTypeOther, setOtherTypeOther] = useState("");
  const [otherAgeOfFirstUse, setOtherAgeOfFirstUse] = useState("");
  const [otherLastUse, setOtherLastUse] = useState("");
  const [otherFrequancy, setOtherFrequancy] = useState("");
  const [OtherlengthOfSobrifty, setOtherLengthOfSobirty] = useState("");

  const handleTypeOfArray = () => {
    if (
      otherTypeOther ||
      otherAgeOfFirstUse ||
      otherLastUse ||
      otherFrequancy ||
      OtherlengthOfSobrifty
    ) {
      const data = {
        types:otherTypeOther,
        ageOfFirstUse:otherAgeOfFirstUse,
        lastUse:otherLastUse?.value,
        frequency:otherFrequancy?.value,
        lengthOfSobriety:OtherlengthOfSobrifty?.value,
      };
      setTypeArray((prev) => [...prev, data]);
      setOtherAgeOfFirstUse("");
      setOtherLastUse("");
      setOtherFrequancy("");
      setOtherLengthOfSobirty("");
      setOtherTypeOther("");
    }
  };

  // Active Withdrawal Symptoms
  const [noneReportedOrObserved, setNoneReportedOrObserved] = useState(false);
  const [Agitation, setAgitation] = useState(false);
  const [Nausea, setNausea] = useState(false);
  const [Vomiting, setVomiting] = useState(false);
  const [Headache, setHeadache] = useState(false);
  const [TactileDisturbances, setTactileDisturbances] = useState(false);
  const [Anxiety, setAnxiety] = useState(false);
  const [Tremors, setTremors] = useState(false);
  const [VisualDisturbances, setVisualDisturbances] = useState(false);
  const [VisualDisturbancesOtherBoolean, setVisualDisturbancesOtherBoolean] =
    useState(false);
  const [VisualDisturbancesOtherType, setVisualDisturbancesOtherType] =
    useState("");
  // const [AuditoryDisturbances, setAuditoryDisturbances] = useState(false);
  const [Sweats, setSweats] = useState(false);
  const [Paranoia, setParanoia] = useState(false);
  const [GooseBumps, setGooseBumps] = useState(false);
  const [Runningnose, setRunningnose] = useState(false);
  const [BonePain, setBonePain] = useState(false);
  const [Tearing, setTearing] = useState(false);
  const [Seizures, setSeizures] = useState(false);
  const [LossofMuscleCoordination, setLossofMuscleCoordination] =
    useState(false);
  const [
    LossofMuscleCoordinationOtherBoolean,
    setLossofMuscleCoordinationBoolean,
  ] = useState(false);
  const [LossofMuscleCoordinationOtherType, setLossofMuscleCoordinationType] =
    useState("");

// mentalStatusExam
  //apparentAge
  const [consistent, setConsistent] = useState(false);
  const [younger, setYounger] = useState(false);
  const [older, setOlder] = useState(false);
  const [olderOtherBoolean,setOlderOtherBoolean]=useState(false)
  const [olderOther,setOlderOther]=useState("")
  //height
  const [averageHeight, setAverageHeight] = useState(false);
  const [short, setShort] = useState(false);
  const [tall, setTall] = useState(false);
  const [heigthBoolean,setHeigthBoolean]=useState(false)
  const [heigthOther,setHeigthOther]=useState("")

  //Weight
  const [averageWeight, setAverageWeight] = useState(false);
  const [obese, setObese] = useState(false);
  const [overweight, setOverweight] = useState(false);
  const [thin, setThin] = useState(false);
  const [emaciated, setEmaciated] = useState(false);
  const [WeightBoolean,setWeightBoolean]=useState(false);
  const [WeightOther,setWeightOther]=useState("")
  //attire
  const [casual, setCasual] = useState(false);
  const [neat, setNeat] = useState(false);
  const [tattered, setTattered] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [attireBoolean,setAttireBoolaen]=useState(false);
  const [attireOther,setAttireOther]=useState("")
  //Grooming
  const [wellGroomed, setWellGroomed] = useState(false);
  const [adequateGrooming, setAdequateGrooming] = useState(false);
  const [unkempt, setUnkempt] = useState(false);
  const [disheveled, setDisheveled] = useState(false);
  const [GroomingBoolean,setGroomingBoolean]=useState(false);
  const [GroomingOther,setGroomingOther]=useState("")
  // <h6>Demeanor / Interaction</h6>
  //Mood
  const [euthymic, setEuthymic] = useState(false);
  const [irritable, setIrritable] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [depressedMood, setDepressedMood] = useState(false);
  const [anxious, setAnxious] = useState(false);
  const [euthymicOtherBoolean, seteuthymicOtherBoolean] = useState(false);
  const [euthymicOtherBooleanType, seteuthymicOtherBooleanType] = useState("");
  //Affect
  const [normalRange, setNormalRange] = useState(false);
  const [depressedAffect, setDepressedAffect] = useState(false);
  const [labile, setLabile] = useState(false);
  const [constricted, setConstricted] = useState(false);
  const [other, setOther] = useState(false);
  const [otherText, setOtherText] = useState("");

  //EyeContact
  const [appropriate, setAppropriate] = useState(false);
  const [minimal, setMinimal] = useState(false);
  const [poor, setPoor] = useState(false);
  const [adequateEyeContact, setAdequateEyeContact] = useState(false);

  const [EyeContactOtherBoolean, setEyeContactOtherBoolean] = useState(false);
  const [EyeContactOtherBooleanType, setEyeContactOtherBooleanType] =
    useState("");

  //Cooperation
  const [appropriateCooperation, setAppropriateCooperation] = useState(false);
  const [hostile, setHostile] = useState(false);
  const [evasive, setEvasive] = useState(false);
  const [defensive, setDefensive] = useState(false);
  const [indifferent, setIndifferent] = useState(false);

  const [CooperationOtherBoolean, setCooperationOtherBoolean] = useState(false);
  const [CooperationOtherBooleanType, setCooperationOtherBooleanType] =
    useState("");

  //Speech section 3

  //Articulation
  const [normalArticulation, setNormalArticulation] = useState(false);
  const [unintelligible, setUnintelligible] = useState(false);
  const [mumbled, setMumbled] = useState(false);
  const [slurred, setSlurred] = useState(false);
  const [stuttered, setStuttered] = useState(false);

  const [ArticulationOtherBoolean, setArticulationOtherBoolean] =
    useState(false);
  const [ArticulationOtherBooleanOther, setArticulationOtherBooleanOther] =
    useState("");
  //Tone
  const [normalTone, setNormalTone] = useState(false);
  const [soft, setSoft] = useState(false);
  const [loud, setLoud] = useState(false);
  const [pressured, setPressured] = useState(false);

  const [ToneOtherBoolean, setToneOtherBoolean] = useState(false);
  const [ToneOtherBooleanOther, setToneOtherBooleanOther] = useState("");
  //Rate
  const [normalRate, setNormalRate] = useState(false);
  const [slow, setSlow] = useState(false);
  const [fast, setFast] = useState(false);

  const [RateOtherBoolean, setRateOtherBoolean] = useState(false);
  const [RateOtherBooleanOther, setRateOtherBooleanOther] = useState("");

  //Quantity
  const [normalQuantity, setNormalQuantity] = useState(false);
  const [verbose, setVerbose] = useState(false);
  const [mutism, setMutism] = useState(false);
  const [QuantityOtherBoolean, setQuantityOtherBoolean] = useState(false);
  const [QuantityOtherBooleanOther, setQuantityOtherBooleanOther] =
    useState("");

  //responseLatency
  const [normalresponseLatency, setNormalresponseLatency] = useState(false);
  const [delayed, setDelayed] = useState(false);
  const [shortened, setShortened] = useState(false);
  const [responseLatencyOtherBoolean, setresponseLatencyOtherBoolean] =
    useState(false);
  const [
    responseLatencyOtherBooleanOther,
    setresponseLatencyOtherBooleanOther,
  ] = useState("");

  // sesion 3 Cognition
  // thoughtContent
  const [unremarkablethoughtContent, setUnremarkablethoughtContent] =
    useState(false);
  const [suspicious, setSuspicious] = useState(false);
  const [negative, setNegative] = useState(false);
  const [concrete, setConcrete] = useState(false);
  const [thoughtContentBoolaen,setthoughtContentBoolean]=useState(false);
  const [thoughtContentOther,setThoughtContentOther]=useState("")
  //thoughtProcesses
  const [logicalCoherent, setLogicalCoherent] = useState(false);
  const [tangential, setTangential] = useState(false);
  const [circumstantial, setCircumstantial] = useState(false);
  const [vague, setVague] = useState(false);
  const [thoughtProcessesBoolean,setThoughtProcessesBoolaen]=useState(false)
  const [thoughtProcessesOther,setThoughtProcessesOther]=useState("")

  //Delusions
  const [noDelusions, setNoDelusions] = useState(false);
  const [yesPersecutory, setYesPersecutory] = useState(false);
  const [yesSomatic, setYesSomatic] = useState(false);
  const [yesGrandiose, setYesGrandiose] = useState(false);
  const [yesOtherDelusionsBoolean, setYesOtherDelusionsBoolean] =
    useState(false);
  const [yesOtherDelusionsText, setYesOtherDelusionsText] = useState("");
  //Hallucinations
  const [unremarkableHallucinations, setUnremarkableHallucinations] =
    useState(false);
  const [visualHallucinations, setVisualHallucinations] = useState(false);
  const [auditoryHallucinations, setAuditoryHallucinations] = useState(false);
  const [tactileHallucinations, setTactileHallucinations] = useState(false);
  const [yesOtherHallucinationsBoolean, setYesOtherHallucinationsBoolean] =
    useState(false);
  const [yesOtherHallucinationsText, setYesOtherHallucinationsText] =
    useState("");
  // Motor activity
  //Gait
  const [normalGait, setNormalGait] = useState(false);
  const [staggering, setStaggering] = useState(false);
  const [shuffling, setShuffling] = useState(false);
  const [slowGait, setSlowGait] = useState(false);
  const [awkward, setAwkward] = useState(false);
  const [gaitOtherBoolen,setGailOtherBoolen]=useState(false)
  const [gaitOther,setgetOther]=useState("")
  //Posture
  const [normalPosture, setNormalPosture] = useState(false);
  const [relaxed, setRelaxed] = useState(false);
  const [rigid, setRigid] = useState(false);
  const [tense, setTense] = useState(false);
  const [slouched, setSlouched] = useState(false);
  const [PostureOtherBoolen,setgaitOtherBoolen]=useState(false)
  const [PostureOther,setPostureOther]=useState("")
  //PsychomotorActivity
  const [withinNormalLimits, setWithinNormalLimits] = useState(false);
  const [calm, setCalm] = useState(false);
  const [hyperactive, setHyperactive] = useState(false);
  const [agitated, setAgitated] = useState(false);
  const [hypoactive, setHypoactive] = useState(false);
  const [PsychomotorActivityOtherBoolen,setPsychomotorActivityOtherBoolen]=useState(false)
  const [PsychomotorActivityOther,setPsychomotorActivityOther]=useState("")
  //Mannerisms
  const [none, setNone] = useState(false);
  const [tics, setTics] = useState(false);
  const [tremorsMannerisms, setTremorsMannerisms] = useState(false);
  const [rocking, setRocking] = useState(false);
  const [picking, setPicking] = useState(false);
  const [MannerismsOtherBoolen,setMannerismsOtherBoolen]=useState(false)
  const [MannerismsOther,setMannerismsOther]=useState("")
  //Orientation to Person:
  //orientation
  const [person, setPerson] = useState(false);
  const [place, setPlace] = useState(false);
  const [time, setTime] = useState(false);
  const [circumstances, setCircumstances] = useState(false);

  //Judgment
  const [goodJudgment, setGoodJudgment] = useState(false);
  const [fairJudgment, setFairJudgment] = useState(false);
  const [poorJudgment, setPoorJudgment] = useState(false);

  //Insight
  const [goodInsight, setGoodInsight] = useState(false);
  const [fairInsight, setFairInsight] = useState(false);
  const [poorInsight, setPoorInsight] = useState(false);

  //Memory
  const [goodMemory, setGoodMemory] = useState(false);
  const [fairMemory, setFairMemory] = useState(false);
  const [poorMemory, setPoorMemory] = useState(false);

  //AbilityToConcentration
  const [intactAbilityToConcentration, setIntactAbilityToConcentration] =
    useState(false);
  const [
    intactAbilityToConcentrationOtherBoolean,
    setIntactAbilityToConcentrationOtherBoolean,
  ] = useState(false);

  const [otherAbilityToConcentration, setOtherAbilityToConcentration] =
    useState("");


  // Significant Social Developmental History
  const [
    significantSocialDevelopmentalHistory,
    setSignificantSocialDevelopmentalHistory,
  ] = useState("");

  // Personal Information (Nested Object)
  const [educationalHistory,setEducationalHistory]=useState("");
  const [highestEducation, setHighestEducation] = useState("");
  const [specialEducation, setSpecialEducation] = useState();
  const [currentStudent, setCurrentStudent] = useState();
  const [ifYesWhere, setIfYesWhere] = useState("");

  // Employment History (Nested Object) shishpal
  const [currentlyEmployed, setCurrentlyEmployed] = useState(false);

  const [employmentLocation, setEmploymentLocation] = useState("");

  const [workHistory, setWorkHistory] = useState("");

  // Military History (Nested Object)  shishpal
  const [militaryService, setMilitaryService] = useState(false);
  const [activeDuty, setActiveDuty] = useState("");

  // Arrested History (Multiple Fields) legalHistory
  const [selectedValue, setSelectedValue] = useState([]);

  // Current Independent Living Skills:
  const [BathingGood,setBathingGood]=useState(false);
  const [BathingFair,setBathingFair]=useState(false);
  const [BathingNotSoGood,setBathingNotSoGood]=useState(false);
  const [BathingGoodNeedAssist,setBathingGoodNeedAssist]=useState(false);
  const [BathingComments,setBathingComments]=useState("");

  const [GroomingGood,setGroomingGood]=useState(false);
  const [GroomingFair,setGroomingFair]=useState(false);
  const [GroomingNotSoGood,setGroomingNotSoGood]=useState(false);
  const [GroomingGoodNeedAssist,setGroomingGoodNeedAssist]=useState(false);
  const [GroomingComments,setGroomingComments]=useState("");

  const [MobilityGood,setMobilityGood]=useState(false);
  const [MobilityFair,setMobilityFair]=useState(false);
  const [MobilityNotSoGood,setMobilityNotSoGood]=useState(false);
  const [MobilityGoodNeedAssist,setMobilityGoodNeedAssist]=useState(false);
  const [MobilityComments,setMobilityComments]=useState("");

  const [HouseworkGood,setHouseworkGood]=useState(false);
  const [HouseworkFair,setHouseworkFair]=useState(false);
  const [HouseworkNotSoGood,setHouseworkNotSoGood]=useState(false);
  const [HouseworkGoodNeedAssist,setHouseworkGoodNeedAssist]=useState(false);
  const [HouseworkComments,setHouseworkComments]=useState("");

  const [ShoppingGood,setShoppingGood]=useState(false);
  const [ShoppingFair,setShoppingFair]=useState(false);
  const [ShoppingNotSoGood,setShoppingNotSoGood]=useState(false);
  const [ShoppingGoodNeedAssist,setShoppingGoodNeedAssist]=useState(false);
  const [ShoppingComments,setShoppingComments]=useState("");

  const [ManagingGood,setManagingGood]=useState(false);
  const [ManagingFair,setManagingFair]=useState(false);
  const [ManagingNotSoGood,setManagingNotSoGood]=useState(false);
  const [ManagingGoodNeedAssist,setManagingGoodNeedAssist]=useState(false);
  const [ManagingComments,setManagingComments]=useState("");

  const [PreparingGood,setPreparingGood]=useState(false);
  const [PreparingFair,setPreparingFair]=useState(false);
  const [PreparingNotSoGood,setPreparingNotSoGood]=useState(false);
  const [PreparingGoodNeedAssist,setPreparingGoodNeedAssist]=useState(false);
  const [PreparingComments,setPreparingComments]=useState("");

  const [EatingGood,setEatingGood]=useState(false);
  const [EatingFair,setEatingFair]=useState(false);
  const [EatingNotSoGood,setEatingNotSoGood]=useState(false);
  const [EatingGoodNeedAssist,setEatingGoodNeedAssist]=useState(false);
  const [EatingComments,setEatingComments]=useState("");

  const [ToiletingGood,setToiletingGood]=useState(false);
  const [ToiletingFair,setToiletingFair]=useState(false);
  const [ToiletingNotSoGood,setToiletingNotSoGood]=useState(false);
  const [ToiletingGoodNeedAssist,setToiletingGoodNeedAssist]=useState(false);
  const [ToiletingComments,setToiletingComments]=useState("");

    // Current Independent Living Skills:
    const [otherCurrentOther,setOtherCurrentOther]=useState("");
    const [otherCurrentGood,setOtherCurrentGood]=useState(false);
    const [otherCurrentFair,setOtherCurrentFair]=useState(false);
    const [otherCurrentNotSoGood,setOtherCurrentNotSoGood]=useState(false);
    const [otherCurrentNeed,setOtherCurrentNeed]=useState(false);
    const [otherCurrentComment,setOtherCurrentComment]=useState("");



  const [handleRiskFactorActivityArray, setHandleRiskFactorActivityArray] =
    useState([]);

  const handleRiskFactorActivity = () => {
    if(otherCurrentOther || otherCurrentGood || otherCurrentFair ||  otherCurrentNotSoGood || otherCurrentNeed || otherCurrentComment){
      const newData = {
        type:otherCurrentOther,
        good:otherCurrentGood,
        fair:otherCurrentFair,
        otherCurrentNotSoGood,
        needAssist:otherCurrentNeed,
        comments:otherCurrentComment
      };
      setHandleRiskFactorActivityArray((prev) => [...prev, newData]);
      setOtherCurrentOther("");
      setOtherCurrentGood("");
      setOtherCurrentFair("");
      setOtherCurrentNotSoGood("");
      setOtherCurrentNeed(false);
      setOtherCurrentComment("");

    }

  };

  const [triggers, setTriggers] = useState("");
  const [fallRisk, setFallRisk] = useState("");
  const [fallRiskExplanation, setFallRiskExplanation] = useState("");

  const [hobbiesLeisureActivities, setHobbiesLeisureActivities] = useState("");

  // Medical Equipment
  const [selectedValueMedical, setSelectedValueMedical] = useState([]);
  // Special Precautions (Nested Object)
  const [selectedValueSpecialPrecautions, setSelectedValueSpecialPrecautions] =
    useState([]);

  // Safety and Risk Assessment shishpal
  const [currentThoughtsOfHarmingSelf, setCurrentThoughtsOfHarmingSelf] =
    useState(false);
    // pendingggggggggggg shishpal
  const [suicidalIdeation, setSuicidalIdeation] = useState("");
  const [suicidalIdeationUrgency, setSuicidalIdeationUrgency] = useState(false);
  const [suicidalIdeationSeverity, setSuicidalIdeationSeverity] = useState(false);
  const [currentThoughtsOfHarmingOthers, setCurrentThoughtsOfHarmingOthers] =
    useState(false);

  // Risk Factors (Nested Object)

  const [riskYesNo, setRiskYesNo] = useState(null);
  const [riskComment, setRiskComment] = useState("");

  const [PriorYesNo, setPriorYesNo] = useState(null);
  const [PriorComment, setPriorComment] = useState("");

  const [AccessYesNo, setAccessYesNo] = useState(null);
  const [AccessComment, setAccessComment] = useState("");


  const [SubstanceYesNo, setSubstanceYesNo] = useState(null);
  const [SubstanceAbuseComment, setSubstanceCommentAbuse] = useState("");

  const [abusingYesNo, setabusingYesNo] = useState(null);
  const [abusingComment, setabusingComment] = useState("");


  const [RecentYesNo, setRecentYesNo] = useState(null);
  const [RecentComment, setRecentComment] = useState("");

  const [behaviourYesNO,setBehaviourYesNo]=useState(null)
  const [behaviorcuesDropDown, setBehaviorcuesDropDown] = useState([]);

  const [SymptomsYesNO,setSymptomsYesNo]=useState(null)
  const [symptomsOfPsychosisDropDown, setSymptomsOfPsychosisDropDown] =
  useState([]);

  const [FamilyYesNO,setFamilyYesNo]=useState(null)
  const [Family,setFamily]=useState("")

   
  const [TerminalYesNO,setTerminalYesNo]=useState(null)
  const [Terminal,setTerminal]=useState("")

  const [CurrentYesNO,setCurrentYesNo]=useState(null)
  const [Current,setCurrent]=useState("")

  const [ChronicYesNO,setChronicYesNo]=useState(null)
  const [ChronicPain,setChronicPain]=useState("")

  const [riskFactorArray, setRiskFactoeArray] = useState([]);


    //risk factor other
    const [otherRiskOther,setOtherRiskOther ]=useState("")
    const [otherRiskYesOrNot,setOtherRiskOtherYesOrNot ]=useState()
    const [otherRiskComment,setOtherRiskComment ]=useState("")

  const handleRiskFactor = () => {
    const newData = {
      type:otherRiskOther,
      yesNo:otherRiskYesOrNot,
      comment:otherRiskComment,
    };
    setRiskFactoeArray((prev) => [...prev, newData]);
    setOtherRiskOther("");
    setOtherRiskOtherYesOrNot();
    setOtherRiskComment("");
  };

  // State variables for protectiveFactors
  const [SupportsYesNo, setSupportsYesNo] = useState();
  const [SupportsComment, setSupportsComment] = useState("");

  const [SpiritualYesNo, setSpiritualYesNo] = useState();
  const [SpiritualComment, setSpiritualComment] = useState("");

  const [ReligiousYesNo, setReligiousYesNo] = useState();
  const [ReligiousComment, setReligiousComment] = useState("");

  const [FearYesNo, setFearYesNo] = useState();
  const [FearComment, setFearComment] = useState("");

  // dharmu code
  const [interventionYesNo, setInterventionYesNo] = useState();
  const [interventionComment, setInterventionComment] = useState("");
// shishpal
  const [WillingYesNo, setWillingYesNo] = useState(false);
  const [WillingComment, setWillingComment] = useState("");


  // protectiveFactors other
  const [otherProtectiveFactorsApply,setOtherProtectiveFactorsApply]=useState("")
  // shispal
  const [otherProtectiveFactorsYesNo,setOtherProtectiveFactorsYesNO]=useState(false)
  const [otherProtectiveFactorsDescription,setOtherProtectiveFactorsDescription]=useState("")

  const [protectiveFactorsArray, setProtectiveFactorsArray] = useState([]);

  const handleProtectiveFactors = () => {
    if(otherProtectiveFactorsApply|| otherProtectiveFactorsYesNo|| otherProtectiveFactorsDescription){
      const newData = {
        type:otherProtectiveFactorsApply,
        yesNo:otherProtectiveFactorsYesNo,
        comment:otherProtectiveFactorsDescription,
      };
      setProtectiveFactorsArray((prev) => [...prev, newData]);
      setOtherProtectiveFactorsApply("");
      setOtherProtectiveFactorsYesNO("");
      setOtherProtectiveFactorsDescription("");
    }
  
  };


  // State variable for riskLevel
  const [riskLevel, setRiskLevel] = useState("");

  // State variables for psychiatricDiagnoses
const [psychiatricPrimaryIcdCode,setPsychiatricPrimaryIcdCode]=useState("")
const [psychiatricPrimaryDescription,setPsychiatricPrimaryDescription]=useState("")
const [psychiatricSecondaryicdCode,setPsychiatricSecondaryIcdCode]=useState("");
const [psychiatricSecondaryDescription,setPsychiatricSecondaryDescription]=useState("");
const [psychiatricTertiaryIcdCode,setPsychiatricTertiaryIcdCode]=useState("")
const [psychiatricTertiaryDescription,setPsychiatricTertiaryDescription]=useState("")
const [psychiatricAdditionalicdCode,setPsychiatricAdditionalIcdCode]=useState("");
const [psychiatricAdditionalDescription,setPsychiatricAdditionalDescription]=useState("");



//psychiatricDiagnoses state other
const [otherPsychiatricOption,setOtherPsychiatricOption]=useState("")
const [othericdCode, setOtherIcdCode] = useState("");
  const [otherdescription, setOtherDescription] = useState("");

  const [psychiatricDiagnosesArray, setPsychiatricDiagnosesArray] = useState([]);

  const handlePsychiatricDiagnoses = () => {
    setPsychiatricDiagnosesArray((prev) => [
      ...prev,
      {
        name:otherPsychiatricOption,
        icdCode:othericdCode,
        description:otherdescription,
      },
    ]);
    setOtherPsychiatricOption("");
    setOtherIcdCode("");
    setOtherDescription("");

  };

  // State variables for medicalDiagnoses
const [primaryIcdCode,setPrimaryIcdCode]=useState("")
const [primaryDescription,setPrimaryDescription]=useState("")
const [secondaryicdCode,setSecondaryIcdCode]=useState("");
const [secondaryDescription,setSecondaryDescription]=useState("");
const [TertiaryIcdCode,setTertiaryIcdCode]=useState("")
const [TertiaryDescription,setTertiaryDescription]=useState("")
const [Additional1icdCode,setAdditional1IcdCode]=useState("");
const [Additional1Description,setAdditional1Description]=useState("");
// const [Additional2icdCode,setAdditional2IcdCode]=useState("");
// const [Additional2Description,setAdditional2Description]=useState("");



    //  medicalDiagnoses Other
    const [OtherMedicalOption, setOtherMedicalOption] = useState("");
    const [OthericdCodeMedicalDiagnoses, setOtherIcdCodeMedicalDiagnoses] = useState("");
    const [OtherdescriptionMedicalDiagnoses, setOtherDescriptionMedicalDiagnoses] =
      useState("");
  const [medicalDiagnosesArray, setMedicalDiagnosesArray] = useState([]);

  const handleMedicalDiagnoses = () => {
    setMedicalDiagnosesArray((prev) => [
      ...prev,
      {
        name:OtherMedicalOption,
        icdCode:OthericdCodeMedicalDiagnoses,
        description:OtherdescriptionMedicalDiagnoses,

      },
    ]);
    setOtherMedicalOption("");
    setOtherIcdCodeMedicalDiagnoses("");
    setOtherDescriptionMedicalDiagnoses("");

  };


  // State variable for primarySupportGroup
  const [primarySupportGroup, setPrimarySupportGroup] = useState(false);

  // State variable for maritalProblems
  const [maritalProblems, setMaritalProblems] = useState(false);

  // State variable for accessToHealthCareServices
  const [accessToHealthCareServices, setAccessToHealthCareServices] =
    useState(false);

  // State variable for educationalProblems
  const [educationalProblems, setEducationalProblems] = useState(false);

  // State variable for housingProblems
  const [housingProblems, setHousingProblems] = useState(false);

  // State variable for familyProblems
  const [familyProblems, setFamilyProblems] = useState(false);

  // State variable for occupationalProblems
  const [occupationalProblems, setOccupationalProblems] = useState(false);

  // State variable for interactionWithLegalSystem, substanceUseInHome, sexualProblems, otherStressors
  const [interactionWithLegalSystem, setInteractionWithLegalSystem] =
    useState(false);
  const [substanceUseInHome, setSubstanceUseInHome] = useState(false);
  const [sexualProblems, setSexualProblems] = useState(false);
  const [otherBoolean, setOtherBoolean] = useState(false);
  const [otherStressors, setOtherStressors] = useState("");

  // State variables for significantRecentLosses
  // set this value in api calling 
  // shishpal
  const [setNoAndYes, setSetNoAndYes] = useState(false);

  const [death, setDeath] = useState(false);
  const [job, setJob] = useState(false);
  const [childRemovedFromHouse, setChildRemovedFromHouse] = useState(false);
  const [injury, setInjury] = useState(false);
  const [divorceSeparation, setDivorceSeparation] = useState(false);
  const [violentActsAgainstPersonFamily, setViolentActsAgainstPersonFamily] =
    useState(false);
  const [medicalSurgical, setMedicalSurgical] = useState(false);
  const [accidentInjury, setAccidentInjury] = useState(false);
  const [otherSignificantRecentLosses, setOtherSignificantRecentLosses] =
    useState(false);
  const [
    otherSignificantRecentLossesType,
    setOtherSignificantRecentLossesType,
  ] = useState("");

  const [additionalNotes, setAdditionalNotes] = useState("");

  const [acceptResident,setAcceptResident]=useState(false);
  //gresedent gaudent name and information
  const [residentGuardianName, setResidentGuardianName] = useState("");
  const [residentGauardianSignature, setResidentGauardianSignature] =
    useState("");
  const [residentGuardianDate, setResidentGuardianDate] = useState("");
  const [residentGuardianTime, setResidentGuardianTime] = useState("");

  // State variables for staffInformation
  const [staffName, setStaffName] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState("");
  const [staffDateTime, setStaffDateTime] = useState("");

  // State variables for bhpInformation
  const [bhpName, setBhpName] = useState("");
  const [bhpCredentials, setBhpCredentials] = useState("");
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpDate, setBhpDate] = useState("");
  const [bhpTime, setBhpTime] = useState("");

  // get array in api
  function getApiArrayData(startIndex,arrayLength,array){
    if (arrayLength <= startIndex) {
      // Return an empty array if invalid parameters are provided
      return [];
  }

  const arr = [];

  for (let i = startIndex; i < arrayLength; i++) {
    arr.push(array[i]);
}
return arr;

  }

  function formatDate(dateString) {
    if (!dateString) return ''; // handle null or undefined value
    const dateObj = new Date(dateString);
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();
    return `${month}-${day}-${year}`;
  }

  useEffect(()=>{
    setAssessmentType(getApiData?.assessmentType)
    setHasNotified(getApiData?.hasNotified);
setAssessmentOn(getApiData?.assessmentOn);
setDob(getApiData?.dob);
setCompanyName(getApiData?.companyName);
setResidentName(getApiData?.hasNotified);
setSex(getApiData?.sex);
setDateOfAssessment(getApiData?.dateOfAssessment?getApiData?.dateOfAssessment?.slice(0,10):"");
setAhcccsNumber(getApiData?.ahcccsNumber);
setPreferredLanguage(getApiData?.preferredLanguage);
setEthnicity(getApiData?.ethnicity);
setAdmissionStatus(
  
  getApiData?.admissionStatus
  ? getApiData?.admissionStatus?.map(item => ({
      label: item, 
      value: item    
    }))
  : []
  
  );
setProgramLocation(getApiData?.programLocation);
setGuardianship(getApiData?.guardianship);
setPowerOfAttorneyStatus(getApiData?.powerOfAttorneyStatus);
setTodayDate(getApiData?.todayDate?getApiData?.todayDate?.slice(0,10):"");
setGuardianshipPoaPubFidName(getApiData?.guardianshipPoaPubFidName);
setApprovedBy(getApiData?.approvedBy);
setReasonForAdmission(
  
  getApiData?.reasonForAdmission
  ? getApiData?.reasonForAdmission?.map(item => ({
      label: item, 
      value: item    
    }))
  : []
  
  );
setResidentGoals(getApiData?.residentGoals);
setResidentStrengths(
  
  getApiData?.residentStrengths
  ? getApiData?.residentStrengths?.map(item => ({
      label: item, 
      value: item    
    }))
  : []
  
  );
setResidentLimitations(getApiData?.residentLimitations);
setCurrentBehavioralIssues(getApiData?.currentBehavioralIssues);

setYesDiabetes(getApiData?.medicalConditions?.[0]?.yes);
setCommentDeabetes(getApiData?.medicalConditions?.[0]?.comments);

setYesHeart(getApiData?.medicalConditions?.[1]?.yes);
setCommentHeart(getApiData?.medicalConditions?.[1]?.comments);

setYesHistory(getApiData?.medicalConditions?.[2]?.yes);
setCommentHistory(getApiData?.medicalConditions?.[2]?.comments);

setYesHigh(getApiData?.medicalConditions?.[3]?.yes);
setCommentHigh(getApiData?.medicalConditions?.[3]?.comments);

setYesLung(getApiData?.medicalConditions?.[4]?.yes);
setCommentLung(getApiData?.medicalConditions?.[4]?.comments);

setYesSeizures(getApiData?.medicalConditions?.[5]?.yes);
setCommentSeizures(getApiData?.medicalConditions?.[5]?.comments);

setYesCancer(getApiData?.medicalConditions?.[6]?.yes);
setCommentCancer(getApiData?.medicalConditions?.[6]?.comments);

setYesLiver(getApiData?.medicalConditions?.[7]?.yes);
setCommentLiver(getApiData?.medicalConditions?.[7]?.comments);

setYesThyroid(getApiData?.medicalConditions?.[8]?.yes);
setThyroidDisorder(getApiData?.medicalConditions?.[8]?.comment
  ? getApiData?.medicalConditions?.[8].comment?.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);

setYesBrain(getApiData?.medicalConditions?.[9]?.yes);
setbrain(getApiData?.medicalConditions?.[9]?.comments);

setYesInjury(getApiData?.medicalConditions?.[10]?.yes);
setCommentInjury(getApiData?.medicalConditions?.[10]?.comments);

setYesChronic(getApiData?.medicalConditions?.[11]?.yes);
setChronicCommit(getApiData?.medicalConditions?.[11]?.comments);

setAllergiesYes(getApiData?.medicalConditions?.[12]?.yes);
setAllergiesComment(getApiData?.medicalConditions?.[12]?.comments);

setSurgeriessYes(getApiData?.medicalConditions?.[13]?.yes);
setSurgeriesComment(getApiData?.medicalConditions?.[13]?.comments);

setPregnanciesYes(getApiData?.medicalConditions?.[14]?.yes);
setPregnanciesComment(getApiData?.medicalConditions?.[14]?.comments);

setSubstanceYes(getApiData?.medicalConditions?.[15]?.yes);
setSubstanceComment(getApiData?.medicalConditions?.[15]?.comments);

setDepressionYes(getApiData?.medicalConditions?.[16]?.yes);
setDepressionComment(getApiData?.medicalConditions?.[16]?.comments);

setAnxietyYes(getApiData?.medicalConditions?.[17]?.yes);
setAnxietyComment(getApiData?.medicalConditions?.[17]?.comments);

setInsomniaYes(getApiData?.medicalConditions?.[18]?.yes);
setInsomniaComment(getApiData?.medicalConditions?.[18]?.comments);

setBipolarYes(getApiData?.medicalConditions?.[19]?.yes);
setBipolarComment(getApiData?.medicalConditions?.[19]?.comments);

setSchizophreniaYes(getApiData?.medicalConditions?.[20]?.yes);
setSchizophreniaComment(getApiData?.medicalConditions?.[20]?.comments);

setObsessiveYes(getApiData?.medicalConditions?.[21]?.yes);
setObsessiveComment(getApiData?.medicalConditions?.[21]?.comments);

setPersonalityYes(getApiData?.medicalConditions?.[22]?.yes);
setPersonalityComment(getApiData?.medicalConditions?.[22]?.comments);

setPhobiasYes(getApiData?.medicalConditions?.[23]?.yes);
setPhobiasComment(getApiData?.medicalConditions?.[23]?.comments);

setHealthConditionsYes(getApiData?.medicalConditions?.[24]?.yes);
sethealthConditionsYesComment(getApiData?.medicalConditions?.[24]?.comments);

setInfectionYes(getApiData?.medicalConditions?.[25]?.yes);
setInfectionDiseases(getApiData?.medicalConditions?.[25]?.comment
  ? getApiData?.medicalConditions?.[8].comment?.map(item => ({
      label: item, 
      value: item    
    }))
  : []);

setOtherConditionArray(getApiData?.medicalConditions?getApiArrayData(26,getApiData?.medicalConditions?.length,getApiData?.medicalConditions):[]);
setSignificantFamilyMedicalPsychiatricHistory(getApiData?.SignificantFamilyMedicalPsychiatricHistory
  ? getApiData?.SignificantFamilyMedicalPsychiatricHistory.map(item => ({
      label: item, 
      value: item   
    }))
  : []);

setTypeOfServicesArray(getApiData?.mentalHealthTreatmentHistory
  ?getApiData?.mentalHealthTreatmentHistory?.flatMap((item)=>(
    {
      diagnosisReason:item?.diagnosisReason?.map((i) => ({
        value : i?.value,
        label : i?.label
      })),
      typeOfService:item?.typeOfService?.map((i) => ({
        value : i?.value,
        label : i?.label
      })),
      dates:item?.dates,
      where:item?.where
    }
  )):[])


setSubstanceAbuseHistory(getApiData?.substanceAbuseHistory);
setSubstanceAbuseDenies(getApiData?.substanceAbuseDenies);

setSubstanceAbuseHistoryDataAgeOfFirstUseAlcohol(getApiData?.substanceAbuseHistoryData?.[0]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseAlcohol(getApiData?.substanceAbuseHistoryData?.[0]?.lastUse?{
  label: getApiData?.substanceAbuseHistoryData?.[0]?.lastUse, value :getApiData?.substanceAbuseHistoryData?.[0]?.lastUse
}:""

);
setSubstanceAbuseHistoryDataFrequencyAlcohol(getApiData?.substanceAbuseHistoryData?.[0]?.frequency?{label:getApiData?.substanceAbuseHistoryData?.[0]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[0]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyAlcohol(getApiData?.substanceAbuseHistoryData?.[0]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[0]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[0]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines(getApiData?.substanceAbuseHistoryData?.[1]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseBenzodiazepines(getApiData?.substanceAbuseHistoryData?.[1]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[1]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[1]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyBenzodiazepines(getApiData?.substanceAbuseHistoryData?.[1]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[1]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[1]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines(getApiData?.substanceAbuseHistoryData?.[1]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[1]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[1]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseCrack(getApiData?.substanceAbuseHistoryData?.[2]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseCrack(getApiData?.substanceAbuseHistoryData?.[2]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[2]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[2]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyCrack(getApiData?.substanceAbuseHistoryData?.[2]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[2]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[2]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyCrack(getApiData?.substanceAbuseHistoryData?.[2]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[2]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[2]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseHeroin(getApiData?.substanceAbuseHistoryData?.[3]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseHeroin(getApiData?.substanceAbuseHistoryData?.[3]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[3]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[3]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyHeroin(getApiData?.substanceAbuseHistoryData?.[3]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[3]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[3]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyHeroin(getApiData?.substanceAbuseHistoryData?.[3]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[3]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[3]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseInhalants(getApiData?.substanceAbuseHistoryData?.[4]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseInhalants(getApiData?.substanceAbuseHistoryData?.[4]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[4]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[4]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyInhalants(getApiData?.substanceAbuseHistoryData?.[4]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[4]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[4]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyInhalants(getApiData?.substanceAbuseHistoryData?.[4]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[4]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[4]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseMarijuana(getApiData?.substanceAbuseHistoryData?.[5]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseMarijuana(getApiData?.substanceAbuseHistoryData?.[5]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[5]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[5]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyMarijuana(getApiData?.substanceAbuseHistoryData?.[5]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[5]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[5]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyMarijuana(getApiData?.substanceAbuseHistoryData?.[5]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[5]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[5]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseMethamphetamine(getApiData?.substanceAbuseHistoryData?.[6]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseMethamphetamine(getApiData?.substanceAbuseHistoryData?.[6]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[6]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[6]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyMethamphetamine(getApiData?.substanceAbuseHistoryData?.[6]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[6]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[6]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine(getApiData?.substanceAbuseHistoryData?.[6]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[6]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[6]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseMethadone(getApiData?.substanceAbuseHistoryData?.[7]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseMethadone(getApiData?.substanceAbuseHistoryData?.[7]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[7]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[7]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyMethadone(getApiData?.substanceAbuseHistoryData?.[7]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[7]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[7]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyMethadone(getApiData?.substanceAbuseHistoryData?.[7]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[7]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[7]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseMDMA(getApiData?.substanceAbuseHistoryData?.[8]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseMDMA(getApiData?.substanceAbuseHistoryData?.[8]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[8]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[8]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyMDMA(getApiData?.substanceAbuseHistoryData?.[8]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[8]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[8]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyMDMA(getApiData?.substanceAbuseHistoryData?.[8]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[8]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[8]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUsePCP(getApiData?.substanceAbuseHistoryData?.[9]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUsePCP(getApiData?.substanceAbuseHistoryData?.[9]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[9]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[9]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyPCP(getApiData?.substanceAbuseHistoryData?.[9]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[9]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[9]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyPCP(getApiData?.substanceAbuseHistoryData?.[9]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[9]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[9]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUsePrescription(getApiData?.substanceAbuseHistoryData?.[10]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUsePrescription(getApiData?.substanceAbuseHistoryData?.[10]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[10]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[10]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyPrescription(getApiData?.substanceAbuseHistoryData?.[10]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[10]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[10]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyPrescription(getApiData?.substanceAbuseHistoryData?.[10]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[10]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[10]?.lengthOfSobriety}:"");

setSubstanceAbuseHistoryDataAgeOfFirstUseOTC(getApiData?.substanceAbuseHistoryData?.[11]?.ageOfFirstUse);
setSubstanceAbuseHistoryDataLastUseOTC(getApiData?.substanceAbuseHistoryData?.[11]?.lastUse
  ?{label:getApiData?.substanceAbuseHistoryData?.[11]?.lastUse,value:getApiData?.substanceAbuseHistoryData?.[11]?.lastUse}:"");
setSubstanceAbuseHistoryDataFrequencyOTC(getApiData?.substanceAbuseHistoryData?.[11]?.frequency
  ?{label:getApiData?.substanceAbuseHistoryData?.[11]?.frequency,value:getApiData?.substanceAbuseHistoryData?.[11]?.frequency}:"");
setSubstanceAbuseHistoryDataLengthOfSobrietyOTC(getApiData?.substanceAbuseHistoryData?.[11]?.lengthOfSobriety
  ?{label:getApiData?.substanceAbuseHistoryData?.[11]?.lengthOfSobriety,value:getApiData?.substanceAbuseHistoryData?.[11]?.lengthOfSobriety}:"");

setTypeArray(getApiData?.substanceAbuseHistoryData?getApiArrayData(12,getApiData?.substanceAbuseHistoryData?.length,getApiData?.substanceAbuseHistoryData):[]);

// start 
setNoneReportedOrObserved(
      getApiData?.ActiveWithdrawalSymptoms?.noneReportedOrObserved
    );
    setAgitation(getApiData?.ActiveWithdrawalSymptoms?.Agitation);
    setNausea(getApiData?.ActiveWithdrawalSymptoms?.Nausea);
    setVomiting(getApiData?.ActiveWithdrawalSymptoms?.Vomiting);
    setHeadache(getApiData?.ActiveWithdrawalSymptoms?.Headache);
    setTactileDisturbances(
      getApiData?.ActiveWithdrawalSymptoms?.TactileDisturbances
    );
    setAnxiety(getApiData?.ActiveWithdrawalSymptoms?.Anxiety);
    setTremors(getApiData?.ActiveWithdrawalSymptoms?.Tremors);
   
    setVisualDisturbances(
      getApiData?.ActiveWithdrawalSymptoms?.VisualDisturbances
    );
    // jai maa kali
    setVisualDisturbancesOtherBoolean(
      getApiData?.ActiveWithdrawalSymptoms?.AuditoryDisturbances?true:false
    );
    setVisualDisturbancesOtherType(getApiData?.ActiveWithdrawalSymptoms?.AuditoryDisturbances);

    setSweats(getApiData?.ActiveWithdrawalSymptoms?.Sweats);
    setParanoia(getApiData?.ActiveWithdrawalSymptoms?.Paranoia);
    setGooseBumps(getApiData?.ActiveWithdrawalSymptoms?.GooseBumps);
    setRunningnose(getApiData?.ActiveWithdrawalSymptoms?.Runningnose);
    setBonePain(getApiData?.ActiveWithdrawalSymptoms?.BonePain);
    setTearing(getApiData?.ActiveWithdrawalSymptoms?.Tearing);
    setSeizures(getApiData?.ActiveWithdrawalSymptoms?.Seizures);
    setLossofMuscleCoordination(
      getApiData?.ActiveWithdrawalSymptoms?.LossofMuscleCoordination
    );
    setLossofMuscleCoordinationBoolean(getApiData?.ActiveWithdrawalSymptoms?.LossofMuscleCoordinationOtherType?true:false);
    setLossofMuscleCoordinationType(getApiData?.ActiveWithdrawalSymptoms?.LossofMuscleCoordinationOtherType);

    setConsistent(getApiData?.mentalStatusExam?.apparentAge?.consistent);
    setYounger(getApiData?.mentalStatusExam?.apparentAge?.younger);
    setOlder(getApiData?.mentalStatusExam?.apparentAge?.older);
    setOlderOtherBoolean(getApiData?.mentalStatusExam?.apparentAge?.otherComment?true:false);
    setOlderOther(getApiData?.mentalStatusExam?.apparentAge?.otherComment);

    setAverageHeight(
      getApiData?.mentalStatusExam?.height?.average
    );
    setShort(getApiData?.mentalStatusExam?.height?.short);
    setTall(getApiData?.mentalStatusExam?.height?.tall);
    setHeigthBoolean(getApiData?.mentalStatusExam?.height?.otherComment?true:false);
    setHeigthOther(getApiData?.mentalStatusExam?.height?.otherComment);

    setAverageWeight(
      getApiData?.mentalStatusExam?.weight?.average
    );
    setObese(getApiData?.mentalStatusExam?.weight?.obese);
    setOverweight(
      getApiData?.mentalStatusExam?.weight?.overweight
    );
    setThin(getApiData?.mentalStatusExam?.weight?.thin);
    setEmaciated(getApiData?.mentalStatusExam?.weight?.emaciated);
    setWeightBoolean(getApiData?.mentalStatusExam?.weight?.otherComment?true:false);
    setWeightOther(getApiData?.mentalStatusExam?.weight?.otherComment);

    setCasual(getApiData?.mentalStatusExam?.attire?.Casual);
    setNeat(getApiData?.mentalStatusExam?.attire?.Neat);
    setTattered(getApiData?.mentalStatusExam?.attire?.Tattered);
    setDirty(getApiData?.mentalStatusExam?.attire?.Dirty);
    setAttireBoolaen(getApiData?.mentalStatusExam?.attire?.otherComment?true:false);
    setAttireOther(getApiData?.mentalStatusExam?.attire?.otherComment);

    setWellGroomed(
      getApiData?.mentalStatusExam?.grooming?.wellGroomed
    );
    setAdequateGrooming(
      getApiData?.mentalStatusExam?.grooming?.adequate
    );
    setUnkempt(getApiData?.mentalStatusExam?.grooming?.unkempt);
    setDisheveled(
      getApiData?.mentalStatusExam?.grooming?.disheveled
    );

    setGroomingBoolean(getApiData?.mentalStatusExam?.grooming?.otherComment?true:false);
    setGroomingOther(getApiData?.mentalStatusExam?.grooming?.otherComment);

    setEuthymic(getApiData?.mentalStatusExam?.Mood?.Euthymic);
    setIrritable(getApiData?.mentalStatusExam?.Mood?.Irritable);
    setElevated(getApiData?.mentalStatusExam?.Mood?.Elevated);
    setDepressedMood(
      getApiData?.mentalStatusExam?.Mood?.Depressed
    );
    setAnxious(getApiData?.mentalStatusExam?.Mood?.Anxious);
    seteuthymicOtherBoolean(getApiData?.mentalStatusExam?.Mood?.otherComment?true:false);
    seteuthymicOtherBooleanType(getApiData?.mentalStatusExam?.Mood?.otherComment);

    setNormalRange(
      getApiData?.mentalStatusExam?.Affect?.normalRange
    );
    setDepressedAffect(
      getApiData?.mentalStatusExam?.Affect?.Depressed
    );
    setLabile(getApiData?.mentalStatusExam?.Affect?.Labile);
    setConstricted(
      getApiData?.mentalStatusExam?.Affect?.Constricted
    );
    setOther(getApiData?.mentalStatusExam?.Affect?.otherComment?true:false);
    setOtherText(getApiData?.mentalStatusExam?.Affect?.otherComment);

    setAppropriate(
      getApiData?.mentalStatusExam?.EyeContact?.Appropriate
    );
    setMinimal(getApiData?.mentalStatusExam?.EyeContact?.Minimal);
    setPoor(getApiData?.mentalStatusExam?.EyeContact?.Poor);
    setAdequateEyeContact(
      getApiData?.mentalStatusExam?.EyeContact?.Adequate
    );
    setEyeContactOtherBoolean(getApiData?.mentalStatusExam?.EyeContact?.otherComment?true:false);
    setEyeContactOtherBooleanType(getApiData?.mentalStatusExam?.EyeContact?.otherComment);

    setAppropriateCooperation(
      getApiData?.mentalStatusExam?.Cooperation?.Appropriate
    );
    setHostile(getApiData?.mentalStatusExam?.Cooperation?.Hostile);
    setEvasive(getApiData?.mentalStatusExam?.Cooperation?.Evasive);
    setDefensive(
      getApiData?.mentalStatusExam?.Cooperation?.Defensive
    );
    setIndifferent(
      getApiData?.mentalStatusExam?.Cooperation?.Indifferent
    );
    setCooperationOtherBoolean(getApiData?.mentalStatusExam?.Cooperation?.otherComment?true:false);
    setCooperationOtherBooleanType(getApiData?.mentalStatusExam?.Cooperation?.otherComment);

    setNormalArticulation(
      getApiData?.mentalStatusExam?.Articulation?.Normal
    );
    setUnintelligible(
      getApiData?.mentalStatusExam?.Articulation?.Unintelligible
    );
    setMumbled(
      getApiData?.mentalStatusExam?.Articulation?.Mumbled
    );
    setSlurred(
      getApiData?.mentalStatusExam?.Articulation?.Slurred
    );
    setStuttered(
      getApiData?.mentalStatusExam?.Articulation?.Stuttered
    );
    setArticulationOtherBoolean(getApiData?.mentalStatusExam?.Articulation?.otherComment?true:false);
    setArticulationOtherBooleanOther(getApiData?.mentalStatusExam?.Articulation?.otherComment);

    setNormalTone(getApiData?.mentalStatusExam?.Tone?.Normal);
    setSoft(getApiData?.mentalStatusExam?.Tone?.Soft);
    setLoud(getApiData?.mentalStatusExam?.Tone?.Loud);
    setPressured(getApiData?.mentalStatusExam?.Tone?.Pressured);
    setToneOtherBoolean(getApiData?.mentalStatusExam?.Tone?.otherComment?true:false);
    setToneOtherBooleanOther(getApiData?.mentalStatusExam?.Tone?.otherComment);

    setNormalRate(getApiData?.mentalStatusExam?.Rate?.Normal);
    setSlow(getApiData?.mentalStatusExam?.Rate?.Slow);
    setFast(getApiData?.mentalStatusExam?.Rate?.Fast);
    setRateOtherBoolean(getApiData?.mentalStatusExam?.Rate?.otherComment?true:false);
    setRateOtherBooleanOther(getApiData?.mentalStatusExam?.Rate?.otherComment);

    setNormalQuantity(
      getApiData?.mentalStatusExam?.Quantity?.Normal
    );
    setVerbose(getApiData?.mentalStatusExam?.Quantity?.Verbose);
    setMutism(getApiData?.mentalStatusExam?.Quantity?.Mutism);
    setQuantityOtherBoolean(getApiData?.mentalStatusExam?.Quantity?.otherComment?true:false);
    setQuantityOtherBooleanOther(getApiData?.mentalStatusExam?.Quantity?.otherComment);

    setNormalresponseLatency(
      getApiData?.mentalStatusExam?.responseLatency?.Normal
    );
    setDelayed(
      getApiData?.mentalStatusExam?.responseLatency?.Delayed
    );
    setShortened(
      getApiData?.mentalStatusExam?.responseLatency?.Shortened
    );
    setresponseLatencyOtherBoolean(getApiData?.mentalStatusExam?.responseLatency?.otherComment?true:false);
    setresponseLatencyOtherBooleanOther(getApiData?.mentalStatusExam?.responseLatency?.otherComment);

    setUnremarkablethoughtContent(
      getApiData?.mentalStatusExam?.thoughtContent?.Unremarkable
    );
    setSuspicious(
      getApiData?.mentalStatusExam?.thoughtContent?.Suspicious
    );
    setNegative(
      getApiData?.mentalStatusExam?.thoughtContent?.Negative
    );
    setConcrete(
      getApiData?.mentalStatusExam?.thoughtContent?.Concrete
    );
    setthoughtContentBoolean(getApiData?.mentalStatusExam?.thoughtContent?.otherComment?true:false);
    setThoughtContentOther(getApiData?.mentalStatusExam?.thoughtContent?.otherComment);

    setLogicalCoherent(
      getApiData?.mentalStatusExam?.thoughtProcesses
        ?.logicalCoherent
    );
    setTangential(
      getApiData?.mentalStatusExam?.thoughtProcesses?.Tangential
    );
    setCircumstantial(
      getApiData?.mentalStatusExam?.thoughtProcesses
        ?.Circumstantial
    );
    setVague(
      getApiData?.mentalStatusExam?.thoughtProcesses?.Vague
    );
    setThoughtProcessesBoolaen(getApiData?.mentalStatusExam?.thoughtProcesses?.otherComment?true:false);
    setThoughtProcessesOther(getApiData?.mentalStatusExam?.thoughtProcesses?.otherComment);

    setNoDelusions(getApiData?.mentalStatusExam?.Delusions?.No);
    setYesPersecutory(
      getApiData?.mentalStatusExam?.Delusions?.YesPersecutory
    );
    setYesSomatic(
      getApiData?.mentalStatusExam?.Delusions?.YesSomatic
    );
    setYesGrandiose(
      getApiData?.mentalStatusExam?.Delusions?.YesGrandiose
    );
    setYesOtherDelusionsBoolean(getApiData?.mentalStatusExam?.Delusions?.otherComment?true:false);
    setYesOtherDelusionsText(getApiData?.mentalStatusExam?.Delusions?.otherComment);

    setUnremarkableHallucinations(
      getApiData?.mentalStatusExam?.Hallucinations?.Unremarkable
    );
    setVisualHallucinations(
      getApiData?.mentalStatusExam?.Hallucinations
        ?.VisualHallucinations
    );
    setAuditoryHallucinations(
      getApiData?.mentalStatusExam?.Hallucinations
        ?.AuditoryHallucinations
    );
    setTactileHallucinations(
      getApiData?.mentalStatusExam?.Hallucinations
        ?.TactileHallucinations
    );
    setYesOtherHallucinationsBoolean(getApiData?.mentalStatusExam?.Hallucinations
      ?.otherComment?true:false);
    setYesOtherHallucinationsText(getApiData?.mentalStatusExam?.Hallucinations
      ?.otherComment);

    setNormalGait(getApiData?.mentalStatusExam?.Gait?.Normal);
    setStaggering(getApiData?.mentalStatusExam?.Gait?.Staggering);
    setShuffling(getApiData?.mentalStatusExam?.Gait?.Shuffling);
    setSlowGait(getApiData?.mentalStatusExam?.Gait?.Slow);
    setAwkward(getApiData?.mentalStatusExam?.Gait?.Awkward);
    setGailOtherBoolen(getApiData?.mentalStatusExam?.Gait?.otherComment?true:false)
    setgetOther(getApiData?.mentalStatusExam?.Gait?.otherComment)

    setNormalPosture(
      getApiData?.mentalStatusExam?.Posture?.Normal
    );
    setRelaxed(getApiData?.mentalStatusExam?.Posture?.Relaxed);
    setRigid(getApiData?.mentalStatusExam?.Posture?.Rigid);
    setTense(getApiData?.mentalStatusExam?.Posture?.Tense);
    setSlouched(getApiData?.mentalStatusExam?.Posture?.Slouched);
    setgaitOtherBoolen(getApiData?.mentalStatusExam?.Posture?.otherComment?true:false)
    setPostureOther(getApiData?.mentalStatusExam?.Posture?.otherComment)

    setWithinNormalLimits(
      getApiData?.mentalStatusExam?.PsychomotorActivity
        ?.Withinnormallimits
    );
    setCalm(
      getApiData?.mentalStatusExam?.PsychomotorActivity?.Calm
    );
    setHyperactive(
      getApiData?.mentalStatusExam?.PsychomotorActivity
        ?.Hyperactive
    );
    setAgitated(
      getApiData?.mentalStatusExam?.PsychomotorActivity?.Agitated
    );
    setHypoactive(
      getApiData?.mentalStatusExam?.PsychomotorActivity?.Hypoactive
    );
    setPsychomotorActivityOtherBoolen(getApiData?.mentalStatusExam?.PsychomotorActivity?.otherComment?true:false)
    setPsychomotorActivityOther(getApiData?.mentalStatusExam?.PsychomotorActivity?.otherComment)

    setNone(getApiData?.mentalStatusExam?.Mannerisms?.None);
    setTics(getApiData?.mentalStatusExam?.Mannerisms?.Tics);
    setTremorsMannerisms(
      getApiData?.mentalStatusExam?.Mannerisms?.Tremors
    );
    setRocking(getApiData?.mentalStatusExam?.Mannerisms?.Rocking);
    setPicking(getApiData?.mentalStatusExam?.Mannerisms?.Picking);
    setMannerismsOtherBoolen(getApiData?.mentalStatusExam?.Mannerisms?.otherComment?true:false)
    setMannerismsOther(getApiData?.mentalStatusExam?.Mannerisms?.otherComment)


setPerson(getApiData?.mentalStatusExam?.orientation?.person);
setPlace(getApiData?.mentalStatusExam?.orientation?.place);
setTime(getApiData?.mentalStatusExam?.orientation?.time);
setCircumstances(getApiData?.mentalStatusExam?.orientation?.circumstances);
setGoodJudgment(getApiData?.mentalStatusExam?.Judgment?.Good);
setFairJudgment(getApiData?.mentalStatusExam?.Judgment?.Fair);
setPoorJudgment(getApiData?.mentalStatusExam?.Insight?.Poor);
setGoodInsight(getApiData?.mentalStatusExam?.Judgment?.Good);
setFairInsight(getApiData?.mentalStatusExam?.Insight?.Fair);
setPoorInsight(getApiData?.mentalStatusExam?.Insight?.Poor);
setGoodMemory(getApiData?.mentalStatusExam?.Memory?.Good);
setFairMemory(getApiData?.mentalStatusExam?.Memory?.Fair);
setPoorMemory(getApiData?.mentalStatusExam?.Memory?.Poor);
setIntactAbilityToConcentration(getApiData?.mentalStatusExam?.AbilityToConcentration?.Intact);
setIntactAbilityToConcentrationOtherBoolean(getApiData?.mentalStatusExam?.AbilityToConcentration?.Other?true:false);
setOtherAbilityToConcentration(getApiData?.mentalStatusExam?.AbilityToConcentration?.Other);
setSignificantSocialDevelopmentalHistory(getApiData?.significantSocialDevelopmentalHistory);
setEducationalHistory(getApiData?.personalInformation?.educationalHistory);
setHighestEducation(getApiData?.personalInformation?.highestEducation);
setSpecialEducation(getApiData?.personalInformation?.specialEducation);
setCurrentStudent(getApiData?.personalInformation?.currentStudent);
setIfYesWhere(getApiData?.personalInformation?.currentStudentLocation);

setCurrentlyEmployed(getApiData?.employmentHistory?.currentlyEmployed);
setEmploymentLocation(getApiData?.employmentHistory?.employmentLocation);

setWorkHistory(getApiData?.workHistory);

setMilitaryService(getApiData?.militaryHistory?.militaryService);
setActiveDuty(getApiData?.militaryHistory?.activeDuty);

setSelectedValue(getApiData?.legalHistory
  ? getApiData?.legalHistory.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);

setBathingGood(getApiData?.independentLivingSkills?.[0]?.good);
setBathingFair(getApiData?.independentLivingSkills?.[0]?.fair);
setBathingNotSoGood(getApiData?.independentLivingSkills?.[0]?.otherCurrentNotSoGood);
setBathingGoodNeedAssist(getApiData?.independentLivingSkills?.[0]?.needAssist );
setBathingComments(getApiData?.independentLivingSkills?.[0]?.comments);

setGroomingGood(getApiData?.independentLivingSkills?.[1]?.good);
setGroomingFair(getApiData?.independentLivingSkills?.[1]?.fair);
setGroomingNotSoGood(getApiData?.independentLivingSkills?.[1]?.otherCurrentNotSoGood);
setGroomingGoodNeedAssist(getApiData?.independentLivingSkills?.[1]?.needAssist);
setGroomingComments(getApiData?.independentLivingSkills?.[1]?.comments);

setMobilityGood(getApiData?.independentLivingSkills?.[2]?.good);
setMobilityFair(getApiData?.independentLivingSkills?.[2]?.fair);
setMobilityNotSoGood(getApiData?.independentLivingSkills?.[2]?.otherCurrentNotSoGood);
setMobilityGoodNeedAssist(getApiData?.independentLivingSkills?.[2]?.needAssist);
setMobilityComments(getApiData?.independentLivingSkills?.[2]?.comments);

setHouseworkGood(getApiData?.independentLivingSkills?.[3]?.good);
setHouseworkFair(getApiData?.independentLivingSkills?.[3]?.fair);
setHouseworkNotSoGood(getApiData?.independentLivingSkills?.[3]?.otherCurrentNotSoGood);
setHouseworkGoodNeedAssist(getApiData?.independentLivingSkills?.[3]?.needAssist);
setHouseworkComments(getApiData?.independentLivingSkills?.[3]?.comments);

setShoppingGood(getApiData?.independentLivingSkills?.[4]?.good);
setShoppingFair(getApiData?.independentLivingSkills?.[4]?.fair);
setShoppingNotSoGood(getApiData?.independentLivingSkills?.[4]?.otherCurrentNotSoGood);
setShoppingGoodNeedAssist(getApiData?.independentLivingSkills?.[4]?.needAssist);
setShoppingComments(getApiData?.independentLivingSkills?.[4]?.comments);

setManagingGood(getApiData?.independentLivingSkills?.[5]?.good);
setManagingFair(getApiData?.independentLivingSkills?.[5]?.fair);
setManagingNotSoGood(getApiData?.independentLivingSkills?.[5]?.otherCurrentNotSoGood);
setManagingGoodNeedAssist(getApiData?.independentLivingSkills?.[5]?.needAssist);
setManagingComments(getApiData?.independentLivingSkills?.[5]?.comments);

setPreparingGood(getApiData?.independentLivingSkills?.[6]?.good);
setPreparingFair(getApiData?.independentLivingSkills?.[6]?.fair);
setPreparingNotSoGood(getApiData?.independentLivingSkills?.[6]?.otherCurrentNotSoGood);
setPreparingGoodNeedAssist(getApiData?.independentLivingSkills?.[6]?.needAssist);
setPreparingComments(getApiData?.independentLivingSkills?.[6]?.comments);

setEatingGood(getApiData?.independentLivingSkills?.[7]?.good);
setEatingFair(getApiData?.independentLivingSkills?.[7]?.fair);
setEatingNotSoGood(getApiData?.independentLivingSkills?.[7]?.otherCurrentNotSoGood);
setEatingGoodNeedAssist(getApiData?.independentLivingSkills?.[7]?.needAssist);
setEatingComments(getApiData?.independentLivingSkills?.[7]?.comments);

setToiletingGood(getApiData?.independentLivingSkills?.[8]?.good);
setToiletingFair(getApiData?.independentLivingSkills?.[8]?.fair);
setToiletingNotSoGood(getApiData?.independentLivingSkills?.[8]?.otherCurrentNotSoGood);
setToiletingGoodNeedAssist(getApiData?.independentLivingSkills?.[8]?.needAssist);
setToiletingComments(getApiData?.independentLivingSkills?.[8]?.comments);
// setOtherCurrentOther(getApiArrayData?.independentLivingSkills?.[0]?.comments);

setOtherCurrentGood(getApiData?.independentLivingSkills?.[9]?.good);
setOtherCurrentFair(getApiData?.independentLivingSkills?.[9]?.fair);
setOtherCurrentNotSoGood(getApiData?.independentLivingSkills?.[9]?.otherCurrentNotSoGood);
setOtherCurrentNeed(getApiData?.independentLivingSkills?.[9]?.needAssist);
setOtherCurrentComment(getApiData?.independentLivingSkills?.[9]?.comments);

setHandleRiskFactorActivityArray(getApiData?.independentLivingSkills?getApiArrayData(10,getApiData?.independentLivingSkills?.length,getApiData?.independentLivingSkills):[]);

setTriggers(getApiData?.triggers);
setFallRisk(getApiData?.fallRisk);
setFallRiskExplanation(getApiData?.fallRiskExplanation);
setHobbiesLeisureActivities(getApiData?.hobbiesLeisureActivities);
setSelectedValueMedical(getApiData?.medicalEquipmentArray
  ? getApiData?.medicalEquipmentArray.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);

setSelectedValueSpecialPrecautions(getApiData?.specialPrecautions
  ? getApiData?.specialPrecautions.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);

setCurrentThoughtsOfHarmingSelf(getApiData?.currentThoughtsOfHarmingSelf);
setSuicidalIdeation(getApiData?.suicidalIdeation);
setSuicidalIdeationUrgency(getApiData?.suicidalIdeationUrgency);
setSuicidalIdeationSeverity(getApiData?.suicidalIdeationSeverity);
setCurrentThoughtsOfHarmingOthers(getApiData?.currentThoughtsOfHarmingOthers);

setRiskYesNo(getApiData?.riskFactors?.[0]?.yesNo);
setRiskComment(getApiData?.riskFactors?.[0]?.comment);
setPriorYesNo(getApiData?.riskFactors?.[1]?.yesNo);
setPriorComment(getApiData?.riskFactors?.[1]?.comment);
setAccessYesNo(getApiData?.riskFactors?.[2]?.yesNo);
setAccessComment(getApiData?.riskFactors?.[2]?.comment);
setSubstanceYesNo(getApiData?.riskFactors?.[3]?.yesNo);
setSubstanceCommentAbuse(getApiData?.riskFactors?.[3]?.comment);
setabusingYesNo(getApiData?.riskFactors?.[4]?.yesNo);
setabusingComment(getApiData?.riskFactors?.[4]?.comment);
setRecentYesNo(getApiData?.riskFactors?.[5]?.yesNo);
setRecentComment(getApiData?.riskFactors?.[5]?.comment);
setBehaviourYesNo(getApiData?.riskFactors?.[6]?.yesNo);
setBehaviorcuesDropDown(getApiData?.riskFactors?.[6]?.comments
  ? getApiData?.riskFactors?.[6]?.comments.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);
setSymptomsYesNo(getApiData?.riskFactors?.[7]?.yesNo);
setSymptomsOfPsychosisDropDown(getApiData?.riskFactors?.[7]?.comments
  ? getApiData?.riskFactors?.[7]?.comments.map(item => ({
      label: item, // Assuming 'name' is the property you want to use as label
      value: item    // Assuming 'id' is the property you want to use as value
    }))
  : []);
setFamilyYesNo(getApiData?.riskFactors?.[8]?.yesNo);
setFamily(getApiData?.riskFactors?.[8]?.comment);
setTerminalYesNo(getApiData?.riskFactors?.[9]?.yesNo);
setTerminal(getApiData?.riskFactors?.[9]?.comment);
setCurrentYesNo(getApiData?.riskFactors?.[10]?.yesNo);
setCurrent(getApiData?.riskFactors?.[10]?.comment);
setChronicYesNo(getApiData?.riskFactors?.[11]?.yesNo);
setChronicPain(getApiData?.riskFactors?.[11]?.comment);

setRiskFactoeArray(getApiData?.riskFactors?getApiArrayData(12,getApiData?.riskFactors?.length,getApiData?.riskFactors):[]);

setSupportsYesNo(getApiData?.protectiveFactors?.[0]?.yesNo);
setSupportsComment(getApiData?.protectiveFactors?.[0]?.comment);
setSpiritualYesNo(getApiData?.riskFactors?.[1]?.yesNo);
setSpiritualComment(getApiData?.protectiveFactors?.[1]?.comment);
setReligiousYesNo(getApiData?.riskFactors?.[2]?.yesNo);
setReligiousComment(getApiData?.protectiveFactors?.[2]?.comment);
setFearYesNo(getApiData?.riskFactors?.[3]?.yesNo);
setFearComment(getApiData?.protectiveFactors?.[3]?.comment);
setInterventionYesNo(getApiData?.riskFactors?.[4]?.yesNo);
setInterventionComment(getApiData?.protectiveFactors?.[4]?.comment);
setWillingYesNo(getApiData?.riskFactors?.[5]?.yesNo);
setWillingComment(getApiData?.protectiveFactors?.[5]?.comment);

setProtectiveFactorsArray(getApiData?.protectiveFactors?getApiArrayData(6,getApiData?.protectiveFactors?.length,getApiData?.protectiveFactors):[]);

setRiskLevel(getApiData?.riskLevel);

setPsychiatricPrimaryIcdCode(getApiData?.psychiatricDiagnoses?.[0]?.icdCode);
setPsychiatricPrimaryDescription(getApiData?.psychiatricDiagnoses?.[0]?.description);
setPsychiatricSecondaryIcdCode(getApiData?.psychiatricDiagnoses?.[1]?.icdCode);
setPsychiatricSecondaryDescription(getApiData?.psychiatricDiagnoses?.[1]?.description);
setPsychiatricTertiaryIcdCode(getApiData?.psychiatricDiagnoses?.[2]?.icdCode);
setPsychiatricTertiaryDescription(getApiData?.psychiatricDiagnoses?.[2]?.description);
setPsychiatricAdditionalIcdCode(getApiData?.psychiatricDiagnoses?.[3]?.icdCode);
setPsychiatricAdditionalDescription(getApiData?.psychiatricDiagnoses?.[3]?.description);

setPsychiatricDiagnosesArray(getApiData?.psychiatricDiagnoses?getApiArrayData(4,getApiData?.psychiatricDiagnoses?.length,getApiData?.psychiatricDiagnoses):[]);

setPrimaryIcdCode(getApiData?.medicalDiagnoses?.[0]?.icdCode);
setPrimaryDescription(getApiData?.medicalDiagnoses?.[0]?.description);
setSecondaryIcdCode(getApiData?.medicalDiagnoses?.[1]?.icdCode);
setSecondaryDescription(getApiData?.medicalDiagnoses?.[1]?.description);
setTertiaryIcdCode(getApiData?.medicalDiagnoses?.[2]?.icdCode);
setTertiaryDescription(getApiData?.medicalDiagnoses?.[2]?.description);
setAdditional1IcdCode(getApiData?.medicalDiagnoses?.[3]?.icdCode);
setAdditional1Description(getApiData?.medicalDiagnoses?.[3]?.description);
setMedicalDiagnosesArray(getApiData?.medicalDiagnoses?getApiArrayData(4,getApiData?.medicalDiagnoses?.length,getApiData?.medicalDiagnoses):[])

setPrimarySupportGroup(getApiData?.primarySupportGroup);
setMaritalProblems(getApiData?.maritalProblems);
setAccessToHealthCareServices(getApiData?.accessToHealthCareServices);
setEducationalProblems(getApiData?.educationalProblems);
setHousingProblems(getApiData?.housingProblems);
setFamilyProblems(getApiData?.familyProblems);
setOccupationalProblems(getApiData?.occupationalProblems);
setInteractionWithLegalSystem(getApiData?.interactionWithLegalSystem);
setSubstanceUseInHome(getApiData?.substanceUseInHome);
setSexualProblems(getApiData?.sexualProblems);
setOtherBoolean(getApiData?.otherStressors?true:false);
setOtherStressors(getApiData?.otherStressors);

setSetNoAndYes(getApiData?.significantRecentLosses?.yes);

setDeath(getApiData?.significantRecentLosses?.typeOfLoss?.death);
setJob(getApiData?.significantRecentLosses?.typeOfLoss?.job);
setChildRemovedFromHouse(getApiData?.significantRecentLosses?.typeOfLoss?.childRemovedFromHouse);
setInjury(getApiData?.significantRecentLosses?.typeOfLoss?.injury);
setDivorceSeparation(getApiData?.significantRecentLosses?.typeOfLoss?.divorceSeparation);
setViolentActsAgainstPersonFamily(getApiData?.significantRecentLosses?.typeOfLoss?.violentActsAgainstPersonFamily);
setMedicalSurgical(getApiData?.significantRecentLosses?.typeOfLoss?.medicalSurgical);
setAccidentInjury(getApiData?.significantRecentLosses?.typeOfLoss?.accidentInjury);
setOtherSignificantRecentLosses(getApiData?.significantRecentLosses?.comment?true:false);
setOtherSignificantRecentLossesType(getApiData?.significantRecentLosses?.comment);

setAdditionalNotes(getApiData?.additionalNotes);
setAcceptResident(getApiData?.acceptResident);
setResidentGuardianName(getApiData?.residentInformation?.ResidentName);
setResidentGauardianSignature(getApiData?.residentInformation?.ResidentSignature);
setResidentGuardianDate(getApiData?.residentInformation?.ResidentDate?formatDate(getApiData?.residentInformation?.ResidentDate):"");
setResidentGuardianTime(getApiData?.residentInformation?.time);

setStaffName(getApiData?.staffInformation?.staffName);
setStaffSignature(getApiData?.staffInformation?.staffSignature);
setStaffDate(getApiData?.staffInformation?.staffDate?formatDate(getApiData?.staffInformation?.staffDate):"");
setStaffDateTime(getApiData?.staffInformation?.time);

setBhpName(getApiData?.bhpInformation?.bhpName);
setBhpCredentials(getApiData?.bhpInformation?.bhpCredentials);
setBhpSignature(getApiData?.bhpInformation?.bhpSignature);
setBhpDate(getApiData?.bhpInformation?.bhpDate?formatDate(getApiData?.bhpInformation?.bhpDate):"");
setBhpTime(getApiData?.bhpInformation?.time);

  },[getApiData])

  useEffect(()=>{
    initial_assestment_get(patientId,setGetApiData);
  },[patientId])


  useEffect(() => {
    setPatientId(userData?._id);
    setUser(userData?.fullName);
    setSex(userData?.gender)
    setCompanyName(userData?.companyName)
    setDob(userData?.dateOfBirth?userData.dateOfBirth.slice(0,10):"")
    setResidentName(userData?.fullName)
  }, [userData]);


  useEffect(() => {
    user_detail(setUserData);
  }, []);

  //react select library
  const qualitiesOptions = [
    { label: "Self motivated", value: "Self motivated" },
    { label: "Loving", value: "Loving" },
    { label: "Honesty", value: "Honesty" },
    { label: "Helping others", value: "Helping others" },
    { label: "Communication", value: "Communication" },
    { label: "Creative", value: "Creative" },
    { label: "Patient", value: "Patient" },
    { label: "Dedication", value: "Dedication" },
    { label: "Coloring", value: "Coloring" },
    { label: "Decision making", value: "Decision making" },
    { label: "Team work", value: "Team work" },
    { label: "Family", value: "Family" },
    { label: "Writing", value: "Writing" },
    { label: "Coloring", value: "Coloring" },
    { label: "Art", value: "Art" },
  ];

  const handleKeyDownResidentStrength = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = qualitiesOptions.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...qualitiesOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setResidentStrengths(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...residentStrengths,
          { value: inputValue, label: inputValue },
        ];
        setResidentStrengths(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setResidentStrengths(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stringValues = residentStrengths.map((item) => item.value);

    let SignificantFamilyMedicalPsychiatricHistoryArray=[];
    SignificantFamilyMedicalPsychiatricHistory.forEach((item)=>{
      SignificantFamilyMedicalPsychiatricHistoryArray.push(item?.value);
    })

    const admissionStatusArray=[];
    admissionStatus.forEach((item)=>{
      admissionStatusArray.push(item?.value)
    })

    const selectedValueArray=[];
    selectedValue.forEach((item)=>{
      selectedValueArray.push(item?.value)
    })

    const selectedValueMedicalArray=[];
    selectedValueMedical.forEach((item)=>{
      selectedValueMedicalArray.push(item?.value);
    })

    const selectedValueSpecialPrecautionsArray=[];
    selectedValueSpecialPrecautions.forEach((item)=>{
      selectedValueSpecialPrecautionsArray.push(item?.value)
    })

    const thyroidDisorderArray=[];
    thyroidDisorder.forEach((item)=>{
      thyroidDisorderArray.push(item.value)
    })

    const infectionDiseasesArray=[];
    infectionDiseases.forEach((item)=>{
      infectionDiseasesArray.push(item.value)
    })

    const reasonForAdmissionArray=[];
    reasonForAdmission.forEach((item)=>{
      reasonForAdmissionArray.push(item?.value);
    })

    const riskFacrtor1=[];
    behaviorcuesDropDown.forEach((item)=>{
      riskFacrtor1.push(item?.value);
    })

    const riskFacrtor2=[];
    symptomsOfPsychosisDropDown.forEach((item)=>{
      riskFacrtor2.push(item?.value);
    })

    // medical condition
    const otherConditionArrayTemp=[
      {
        condition: "diabetes",
        yes: yesDiabetes,
        comments: commentDiabety,
      },
      {
        condition: "Heart disease / heart attack",
        yes: yesHeart,
        comments: commentHeart,
      },
      {
        condition: "History",
        yes: yesHistory,
        comments: commentHistory,
      }
      ,
      {
        condition: "High Blood Pressure",
        yes: yesHigh,
        comments: commentHigh,
      }
      ,
      {
        condition: "Lung disease (ie asthma, COPD, emphysema)",
        yes: yesLung,
        comments: commentLung,
      }
      ,
      {
        condition: "Seizures",
        yes: yesSeizures,
        comments: commentSeizures,
      }
      ,
      {
        condition: "Cancer",
        yes: yesCancer,
        comments: commentCancer,
      }
      ,
      {
        condition: "Liver/kidney disease",
        yes: yesLiver,
        comments: commentLiver,
      }
      ,
      {
        condition: "Thyroid disorder",
        yes: yesThyroid,
        comment: thyroidDisorderArray,
      }
      ,
      {
        condition: "History of head trauma/traumatic brain injury",
        yes: yesbrain,
        comments: commentbrain,
      }
      ,
      {
        condition: "injury",
        yes: yesInjury,
        comments: commentInjury,
      }
      ,
      {
        condition: "Chronic painChronic pain",
        yes: yesChronic,
        comments: chronicCommit,
      },  {
        condition: "Allergies",
        yes: AllergiesYes,
        comments: AllergiesComment,
      },  {
        condition: "Surgeries",
        yes: SurgeriesYes,
        comments: SurgeriesComment,
      }
      ,  {
        condition: "Number of pregnancies / births",
        yes: pregnanciesYes,
        comments: pregnanciesComment,
      }
      ,  {
        condition: "Substance use disorder (please specify)",
        yes: SubstanceYes,
        comments: SubstanceComment,
      }
      ,  {
        condition: "Depression",
        yes: DepressionYes,
        comments: DepressionComment,
      }
      ,  {
        condition: "Anxiety/panic attacks",
        yes: AnxietyYes,
        comments: AnxietyComment,
      }
      ,  {
        condition: "Insomnia",
        yes: InsomniaYes,
        comments: InsomniaComment,
      }
      ,  {
        condition: "Bipolar disorder",
        yes: BipolarYes,
        comments: BipolarComment,
      }
      ,  {
        condition: "Schizophrenia",
        yes: SchizophreniaYes,
        comments: SchizophreniaComment,
      }
      ,  {
        condition: "Obsessive compulsive disorder",
        yes: ObsessiveYes,
        comments: ObsessiveComment,
      }
      ,  {
        condition: "Personality disorder (please specify)",
        yes: PersonalityYes,
        comments: PersonalityComment,
      }
      ,  {
        condition: "Phobias",
        yes: PhobiasYes,
        comments: PhobiasComment,
      }
      ,  {
        condition: "Any other health conditions",
        yes: healthConditionsYes,
        comments: healthConditionsYesComment,
      }
      ,  {
        condition: "Infection or Diseases",
        yes: healthConditionsYes,
        comment: infectionDiseasesArray,
      }
    ]

    const otherConditionArrayTempAns=[...otherConditionArrayTemp,...otherConditionArray]

    // substance array
    const typeArrayTemp= [
      {
        types: "Alcohol",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseAlcohol,
        lastUse: substanceAbuseHistoryDataLastUseAlcohol?.value,
        frequency: substanceAbuseHistoryDataFrequencyAlcohol?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyAlcohol?.value,
      },
      {
        types: "Benzodiazepines",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines,
        lastUse: substanceAbuseHistoryDataLastUseBenzodiazepines?.value,
        frequency: substanceAbuseHistoryDataFrequencyBenzodiazepines?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines?.value,
      },
      {
        types: "Crack",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseCrack,
        lastUse: substanceAbuseHistoryDataLastUseCrack?.value,
        frequency: substanceAbuseHistoryDataFrequencyCrack?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyCrack?.value,
      },
      {
        types: "Heroin",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseHeroin,
        lastUse: substanceAbuseHistoryDataLastUseHeroin?.value,
        frequency: substanceAbuseHistoryDataFrequencyHeroin?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyHeroin?.value,
      },
      {
        types: "Inhalants",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseInhalants,
        lastUse: substanceAbuseHistoryDataLastUseInhalants?.value,
        frequency: substanceAbuseHistoryDataFrequencyInhalants?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyInhalants?.value,
      },
      {
        types: "Marijuana",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseMarijuana,
        lastUse: substanceAbuseHistoryDataLastUseMarijuana?.value,
        frequency: substanceAbuseHistoryDataFrequencyMarijuana?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyMarijuana?.value,
      },
      {
        types: "Methamphetamine",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseMethamphetamine,
        lastUse: substanceAbuseHistoryDataLastUseMethamphetamine?.value,
        frequency: substanceAbuseHistoryDataFrequencyMethamphetamine?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyMethamphetamine?.value,
      },
      {
        types: "Methadone",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseMethadone,
        lastUse: substanceAbuseHistoryDataLastUseMethadone?.value,
        frequency: substanceAbuseHistoryDataFrequencyMethadone?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyMethadone?.value,
      },
      {
        types: "MDMA (ecstasy)",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseMDMA,
        lastUse: substanceAbuseHistoryDataLastUseMDMA?.value,
        frequency: substanceAbuseHistoryDataFrequencyMDMA?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyMDMA?.value,
      },
      {
        types: "PCP (angel dust)",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUsePCP,
        lastUse: substanceAbuseHistoryDataLastUsePCP?.value,
        frequency: substanceAbuseHistoryDataFrequencyPCP?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyPCP?.value,
      },
      {
        types: "Prescription medicine",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUsePrescription,
        lastUse: substanceAbuseHistoryDataLastUsePrescription?.value,
        frequency: substanceAbuseHistoryDataFrequencyPrescription?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyPrescription?.value,
      },
      {
        types: "OTC medicine",
        ageOfFirstUse: substanceAbuseHistoryDataAgeOfFirstUseOTC,
        lastUse: substanceAbuseHistoryDataLastUseOTC?.value,
        frequency: substanceAbuseHistoryDataFrequencyOTC?.value,
        lengthOfSobriety: substanceAbuseHistoryDataLengthOfSobrietyOTC?.value,
      },
    ]

    const typeArrayTempAns=[ ...typeArrayTemp,...typeArray]

    const handleRiskFactorActivityArrayTemp= [
        {
          type: "Bathing/Showering",
          good: BathingGood,
          fair: BathingFair,
          otherCurrentNotSoGood:BathingNotSoGood,
          needAssist: BathingGoodNeedAssist,
          comments: BathingComments
        },
        {
          type: "Grooming/hygiene",
          good: GroomingGood,
          fair: GroomingFair,
          otherCurrentNotSoGood:GroomingNotSoGood,
          needAssist: GroomingGoodNeedAssist,
          comments: GroomingComments
        },
        {
          type: "Mobility",
          good: MobilityGood,
          fair: MobilityFair,
          otherCurrentNotSoGood:MobilityNotSoGood,
          needAssist: MobilityGoodNeedAssist,
          comments: MobilityComments
        },
        {
          type: "Housework",
          good: HouseworkGood,
          fair: HouseworkFair,
          otherCurrentNotSoGood:HouseworkNotSoGood,
          needAssist: HouseworkGoodNeedAssist,
          comments: HouseworkComments
        },
        {
          type: "Shopping",
          good: ShoppingGood,
          fair: ShoppingFair,
          otherCurrentNotSoGood:ShoppingNotSoGood,
          needAssist: ShoppingGoodNeedAssist,
          comments: ShoppingComments
        },
        {
          type: "Managing money/budget",
          good: ManagingGood,
          fair: ManagingFair,
          otherCurrentNotSoGood:ManagingNotSoGood,
          needAssist:ManagingGoodNeedAssist ,
          comments: ManagingComments
        },
        {
          type: "Preparing food",
          good: PreparingGood,
          fair: PreparingFair,
          otherCurrentNotSoGood:PreparingNotSoGood,
          needAssist: PreparingGoodNeedAssist,
          comments: PreparingComments
        },
        {
          type: "Eating",
          good: EatingGood,
          fair: EatingFair,
          otherCurrentNotSoGood:EatingNotSoGood,
          needAssist: EatingGoodNeedAssist,
          comments: EatingComments
        },
        {
          type: "Toileting",
          good: ToiletingGood,
          fair: ToiletingFair,
          otherCurrentNotSoGood:ToiletingNotSoGood,
          needAssist: ToiletingGoodNeedAssist,
          comments: ToiletingComments
        },
      ]

      const handleRiskFactorActivityArrayTempAns= [...handleRiskFactorActivityArrayTemp,...handleRiskFactorActivityArray]

    // riskFactors
    const riskFactorsTemp= [
      {
        type:"Current suicidal ideation",
        yesNo:riskYesNo,
        comment:riskComment
      },
      {
        type:"Prior suicide attempt",
        yesNo:PriorYesNo,
        comment:PriorComment
      },
      {
        type:"Access to means (i.e. weapon)",
        yesNo:AccessYesNo,
        comment:AccessComment
      },
      {
        type:"Substance abuse",
        yesNo:SubstanceYesNo,
        comment:SubstanceAbuseComment
      },
      {
        type:"Other self-abusing behavior",
        yesNo:abusingYesNo,
        comment:abusingComment
      },
      {
        type:"Recent losses/lack of support",
        yesNo:RecentYesNo,
        comment:RecentComment
      },
      {
        type:"Behavior cues",
        yesNo:behaviourYesNO,
        comments:riskFacrtor1
      },
      {
        type:"Symptoms of psychosis",
        yesNo:SymptomsYesNO,
        comments:riskFacrtor2
      },
      {
        type:"Family history of suicide",
        yesNo:FamilyYesNO,
        comment:Family
      },
      {
        type:"Terminal physical illness",
        yesNo:TerminalYesNO,
        comment:Terminal
      },
      {
        type:"Current stressors (specify)",
        yesNo:CurrentYesNO,
        comment:Current
      },
      {
        type:"Chronic pain",
        yesNo:ChronicYesNO,
        comment:ChronicPain
      },
    ]

    const riskFactorArrayTempAns=[...riskFactorsTemp,...riskFactorArray]

    // protectiveFactorsArray
    const protectiveFactorsArrayTemp=[
      {
        type:"Supports available (family friends)",
        yesNo:SupportsYesNo,
        comment:SupportsComment
      },
      {
        type:"Spiritual / religious support",
        yesNo:SpiritualYesNo,
        comment:SpiritualComment
      },
      {
        type:"Religious/cultural prohibitions",
        yesNo:ReligiousYesNo,
        comment:ReligiousComment
      },
      {
        type:"Fear of consequences",
        yesNo:FearYesNo,
        comment:FearComment
      },
      {
        type:"Able to be engaged in intervention",
        yesNo:interventionYesNo,
        comment:interventionComment
      },
      {
        type:"Willing to commit to keeping self safe",
        yesNo:WillingYesNo,
        comment:WillingComment
      },
    ]


    
    const protectiveFactorsArrayTempAns=[...protectiveFactorsArrayTemp,...protectiveFactorsArray]

    //psychiatricDiagnoses
      const psychiatricDiagnosesArrayTemp=[
        {
   
          icdCode:psychiatricPrimaryIcdCode,
          description:psychiatricPrimaryDescription,
          name:"Primary"
        },
        {
          icdCode:psychiatricSecondaryicdCode,
          description:psychiatricSecondaryDescription,
          name:"Secondary"
        },
        {
          icdCode:psychiatricTertiaryIcdCode,
          description:psychiatricTertiaryDescription,
          name:"Tertiary"
        },
        {
      
          icdCode:psychiatricAdditionalicdCode,
          description:psychiatricAdditionalDescription,
          name:"Additional"
        },
      ]


      const psychiatricDiagnosesArrayAns=[...psychiatricDiagnosesArrayTemp,...psychiatricDiagnosesArray]

      const medicalDiagnosesArrayTemp=[
        {
          icdCode:primaryIcdCode,
          description:primaryDescription,
          name:"Primary",
        },
        {
         

          icdCode:secondaryicdCode,
          description:secondaryDescription,
          name:"Secondary"
        },
        {
          icdCode:TertiaryIcdCode,
          description:TertiaryDescription,
          name:"Tertiary"
        },
        {
          icdCode:Additional1icdCode,
          description:Additional1Description,
          name:"Additional"
        },
      ]

      const medicalDiagnosesArrayTempAns=[...medicalDiagnosesArrayTemp,...psychiatricDiagnosesArray]


    const data = {
      assessmentType,
      patientId:patientId,
      dob,
      hasNotified,
      assessmentOn,
      companyName,
      residentName,
      sex,
      dateOfAssessment,
      ahcccsNumber,
      preferredLanguage,
      ethnicity,
      admissionStatus:admissionStatusArray,
      programLocation,
      guardianship,
      powerOfAttorneyStatus,
      todayDate,
      guardianshipPoaPubFidName,
      approvedBy,
      reasonForAdmission:reasonForAdmissionArray,
      residentGoals,
      residentStrengths: stringValues,
      residentLimitations,
      currentBehavioralIssues,
      medicalConditions: otherConditionArrayTempAns,
      SignificantFamilyMedicalPsychiatricHistory:SignificantFamilyMedicalPsychiatricHistoryArray,
      
      mentalHealthTreatmentHistory:typeOfServiceArray,
     
      substanceAbuseHistory,
      substanceAbuseDenies,

      substanceAbuseHistoryData : typeArrayTempAns,

      ActiveWithdrawalSymptoms :{
        noneReportedOrObserved,
        Agitation,
        Nausea,
        Vomiting,
        Headache,
        TactileDisturbances,
        Anxiety,
        Tremors,
        VisualDisturbances,
        AuditoryDisturbances:VisualDisturbancesOtherType,
        Sweats,
        Paranoia,
        GooseBumps,
        Runningnose,
        BonePain,
        Tearing,
        Seizures,
        LossofMuscleCoordination,
        LossofMuscleCoordinationOtherType
      },
      mentalStatusExam: {
        apparentAge:{
          consistent:consistent,
          younger,
          older,
          
          otherComment:olderOther
        },
        height:{
          average:averageHeight,
          short,
          tall,
          otherComment:heigthOther
        },
        weight:{
          average:averageWeight,
          obese,
          overweight,
          thin,
          emaciated,
          otherComment:WeightOther
        },
        attire:{
          Casual:casual,
          Neat:neat,
          Tattered:tattered,
          Dirty:dirty,
          otherComment:attireOther
        },
        grooming:{
          wellGroomed:wellGroomed,
          adequate:adequateGrooming,
          unkempt,
          disheveled,
          otherComment:GroomingOther
        },
        Mood:{
          Euthymic:euthymic,
          Irritable:irritable,
          Elevated: elevated,
          Depressed:depressedMood,
          Anxious:anxious,
          otherComment:euthymicOtherBooleanType
        },
        Affect:{
          normalRange,
          Depressed:depressedAffect,
          Labile:labile,
          Constricted:constricted,
          otherComment:otherText
        },
        EyeContact:{
          Appropriate:appropriate,
          Minimal:minimal,
          Poor:poor,
          Adequate:adequateEyeContact,
          otherComment:EyeContactOtherBooleanType
        },
        Cooperation:{
          Appropriate:appropriateCooperation,
          Hostile:hostile,
          Evasive: evasive,
          Defensive:defensive,
          Indifferent:indifferent,
          otherComment: CooperationOtherBooleanType
        },
        Articulation:{
          Normal:normalArticulation,
          Unintelligible:unintelligible,
          Mumbled:mumbled,
          Slurred:slurred,
          Stuttered:stuttered,
          otherComment:ArticulationOtherBooleanOther
        },
        Tone:{
          Normal:normalTone,
          Soft:soft,
          Loud:loud,
          Pressured:pressured,
          otherComment:ToneOtherBooleanOther
        },
        Rate:{
          Normal:normalRate,
          Slow:slow,
          Fast:fast,
          otherComment:RateOtherBooleanOther
        },
        Quantity:{
          Normal:normalQuantity,
          Verbose:verbose,
          Mutism:mutism,
          otherComment:QuantityOtherBooleanOther,

        },
        responseLatency:{
          Normal:normalresponseLatency,
          Delayed:delayed,
          Shortened:shortened,
          otherComment:responseLatencyOtherBooleanOther
        },

        thoughtContent:{
          Unremarkable:unremarkablethoughtContent,
          Suspicious:suspicious,
          Negative:negative,
          Concrete:concrete,
          otherComment:thoughtContentOther
        },

        thoughtProcesses:{
          logicalCoherent:logicalCoherent,
          Tangential:tangential,
          Circumstantial:circumstantial,
          Vague:vague,
          otherComment:thoughtProcessesOther
        },

        Delusions:{
          No:noDelusions,
          YesPersecutory: yesPersecutory,
          YesSomatic:yesSomatic,
          YesGrandiose:yesGrandiose,
          otherComment:yesOtherDelusionsText
        },

        Hallucinations:{
          Unremarkable:unremarkableHallucinations,
          VisualHallucinations:visualHallucinations,
          AuditoryHallucinations:auditoryHallucinations,
          TactileHallucinations:tactileHallucinations,
          otherComment:yesOtherHallucinationsText
        },

        Gait:{
          Normal:normalGait,
          Staggering:staggering,
          Shuffling:shuffling,
          Slow:slowGait,
          Awkward:awkward,
          otherComment:gaitOther,
        },

        Posture:{
          Normal:normalPosture,
          Relaxed:relaxed,
          Rigid:rigid,
          Tense:tense,
          Slouched:slouched,
          otherComment:PostureOther,
        },

        PsychomotorActivity:{
          Withinnormallimits:withinNormalLimits,
          Calm:calm,
          Hyperactive:hyperactive,
          Agitated:agitated,
          Hypoactive:hypoactive,
          otherComment:PsychomotorActivityOther,
        },

        Mannerisms:{
          None:none,
          Tics:tics,
          Tremors:tremorsMannerisms,
          Rocking:rocking,
          Picking:picking,
          otherComment:MannerismsOther,
        },

        orientation:{
          person,
          place,
          time,
          circumstances:circumstances
        },

        Judgment:{
          Good:goodJudgment,
          Fair:fairJudgment,
          Poor:poorJudgment
        },

        Insight:{
          Good:goodInsight,
          Fair:fairInsight,
          Poor:poorInsight
        },
        Memory:{
          Good:goodMemory,
          Fair:fairMemory,
          Poor:poorMemory
        },
        AbilityToConcentration:{
          Intact:intactAbilityToConcentration,
          Other:otherAbilityToConcentration
        },
      },

      significantSocialDevelopmentalHistory,

      personalInformation:{
        educationalHistory,
        highestEducation,
        specialEducation,
        currentStudent,
        currentStudentLocation:ifYesWhere
      },

      employmentHistory:{
        currentlyEmployed,
        employmentLocation,
      
      },
      workHistory,
      militaryHistory:{
        militaryService,
        activeDuty
      },
      legalHistory:selectedValueArray,

      independentLivingSkills:handleRiskFactorActivityArrayTempAns,
      triggers,
      fallRisk,
      fallRiskExplanation,
      hobbiesLeisureActivities,
      medicalEquipmentArray:selectedValueMedicalArray,
      specialPrecautions:selectedValueSpecialPrecautionsArray,
      currentThoughtsOfHarmingSelf,
  
      suicidalIdeation,
      suicidalIdeationUrgency,
      suicidalIdeationSeverity,
      currentThoughtsOfHarmingOthers,

      riskFactors:riskFactorArrayTempAns,
      protectiveFactors:protectiveFactorsArrayTempAns,

      riskLevel,

      psychiatricDiagnoses:psychiatricDiagnosesArrayAns,

      medicalDiagnoses:medicalDiagnosesArrayTempAns,

                primarySupportGroup,
                maritalProblems,
                accessToHealthCareServices,
                educationalProblems,
                housingProblems,
                familyProblems,
                occupationalProblems,
                interactionWithLegalSystem,
                substanceUseInHome,
                sexualProblems,
                otherStressors,

     

      significantRecentLosses:{
        yes:setNoAndYes,
        typeOfLoss:{
          death,
          injury,
          medicalSurgical,
          job,
          divorceSeparation:divorceSeparation,
          accidentInjury,
          childRemovedFromHouse,
          violentActsAgainstPersonFamily:violentActsAgainstPersonFamily,
          comment:otherSignificantRecentLossesType?true:false,
        },
        comment:otherSignificantRecentLossesType
      },

      additionalNotes,
      acceptResident,

      residentInformation: {
        ResidentName: residentGuardianName,
        ResidentSignature: residentGauardianSignature,
        ResidentDate: residentGuardianDate,
        time:residentGuardianTime,
      },
      staffInformation: {
        staffName: staffName,
        staffSignature: staffSignature,
        staffDate: staffDate,
        time:staffDateTime
      },
      bhpInformation: {
        bhpName: bhpName,
        bhpCredentials: bhpCredentials,
        bhpSignature: bhpSignature,
        bhpDate:bhpDate,
        time:bhpTime,
      },
    };

    initialAssestment_form(data);
    navigate("/intake");
  };

  const option_value_Admission = [
    { label: "Voluntary", value: "Voluntary" },
    { label: "Court Ordered Treatment", value: "Court Ordered Treatment" },
  ];

  const handleKeyDownAdmissionStatus = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option_value_Admission.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option_value_Admission,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setAdmissionStatus(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...admissionStatus,
          { value: inputValue, label: inputValue },
        ];
        setAdmissionStatus(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const handleSelectChangeAdmission = (selectedOptions) => {
    setAdmissionStatus(selectedOptions);
  };

  // resion for admission
  const option_value_ReasonForAdmission = [
    { label: "Anxiety", value: "Anxiety" },
    { label: "Depression", value: "Depression" },
    { label: "Mood changes", value: "Mood changes" },
    {
      label: "Trouble falling or staying asleep",
      value: "Trouble falling or staying asleep",
    },
    { label: "Mood swings", value: "Mood swings" },
    { label: "Irritability", value: "Irritability" },
    { label: "Social withdrawal", value: "Social withdrawal" },
    { label: "Changes in eating habits", value: "Changes in eating habits" },
    { label: "Feelings of anger", value: "Feelings of anger" },
    { label: "Negative thoughts", value: "Negative thoughts" },
    { label: "Confused thinking", value: "Confused thinking" },
    { label: "Loss of interest", value: "Loss of interest" },
    { label: "Fatigue or low energy", value: "Fatigue or low energy" },
    { label: "Difficulty concentrating", value: "Difficulty concentrating" },
    { label: "Delusions", value: "Delusions" },
    { label: "Hallucinations", value: "Hallucinations" },
    { label: "Substance use", value: "Substance use" },
    { label: "Stress", value: "Stress" },
    { label: "Trouble coping", value: "Trouble coping" },
    { label: "Feelings of fear", value: "Feelings of fear" },
    { label: "Grief/Loss", value: "Grief/Loss" },
    { label: "Eating Disorder", value: "Eating Disorder" },
    { label: "Danger to self", value: "Danger to self" },
    { label: "Danger to others", value: "Danger to others" },
    { label: "Lack of self care", value: "Lack of self care" },
    {
      label: "Inability to maintain safety",
      value: "Inability to maintain safety",
    },
    { label: "Autism Spectrum Disorder", value: "Autism Spectrum Disorder" },
    { label: "Bipolar Disorder", value: "Bipolar Disorder" },
    {
      label: "Inability to maintain self care",
      value: "Inability to maintain self care",
    },
    {
      label: "Inability to self administer",
      value: "Inability to self administer",
    },
    { label: "Conduct Disorder", value: "Conduct Disorder" },
    {
      label: "Inappropriate Sexual Behavior",
      value: "Inappropriate Sexual Behavior",
    },
    { label: "Schizophrenia Disorder", value: "Schizophrenia Disorder" },
    { label: "Major Depressive Disorder", value: "Major Depressive Disorder" },
    { label: "Obsessive Disorder", value: "Obsessive Disorder" },
    { label: "Psychosis", value: "Psychosis" },
    { label: "Abused", value: "Abused" },
    { label: "Assaulted", value: "Assaulted" },
  ];

  const handleKeyDownReasionForAdmission = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option_value_ReasonForAdmission.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option_value_ReasonForAdmission,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setReasonForAdmission(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...reasonForAdmission,
          { value: inputValue, label: inputValue },
        ];
        setReasonForAdmission(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const handleSelectChangeAdmissionReasonForAdmission = (selectedOption) => {
    setReasonForAdmission(selectedOption);
  };

  //state Thyroid disorder

  const thyroidOptions = [
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "Hyperthyroidism", value: "Hyperthyroidism" },
  ];

  const handleKeyThyroidDisorder = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = thyroidOptions.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...thyroidOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setThyroidDisorder(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...thyroidDisorder,
          { value: inputValue, label: inputValue },
        ];
        setThyroidDisorder(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const thyroiddisorderhnadler = (selectedOptions) => {
    setThyroidDisorder(selectedOptions);
  };

  // Infection or Diseases<

  const infectionDiseasesOptions = [
    { label: "HIV/Aids", value: "HIV/Aids" },
    { label: "MRSA", value: "MRSA" },
    { label: "VRE", value: "VRE" },
    { label: "Rash", value: "Rash" },
    { label: "Open Wounds", value: "Open Wounds" },
    { label: "Chicken pox", value: "Chicken pox" },
    { label: "Shingles", value: "Shingles" },
    { label: "Hepatitis", value: "Hepatitis" },
    { label: "STD", value: "STD" },
    { label: "Measles", value: "Measles" },
    { label: "Mumps", value: "Mumps" },
    { label: "Signs of active TB", value: "Signs of active TB" },
    { label: "Scabies", value: "Scabies" },
  ];

  const handleKeyInfectionDiseases = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = infectionDiseasesOptions.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...infectionDiseasesOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setInfectionDiseases(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...infectionDiseases,
          { value: inputValue, label: inputValue },
        ];
        setInfectionDiseases(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const infectionDiseasesHandler = (selectedOptions) => {
    setInfectionDiseases(selectedOptions);
  };

  //Significant Family Medical/Psychiatric History:
  const SignificantFamilyMedicalPsychiatricHistoryOptions = [
    { label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" },
    { label: "Sister", value: "Sister" },
    { label: "Brother", value: "Brother" },
    { label: "Daughter", value: "Daughter" },
    { label: "Son", value: "Son" },
    { label: "Cousin", value: "Cousin" },
    { label: "Aunt", value: "Aunt" },
    { label: "Uncle", value: "Uncle" },
    { label: "Grandfather", value: "Grandfather" },
    { label: "GrandMother", value: "GrandMother" },
  ];

  const handleKeySignificantFamilyMedicalPsychiatricHistory = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists =
        SignificantFamilyMedicalPsychiatricHistoryOptions.some(
          (option) => option.value === inputValue
        );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...SignificantFamilyMedicalPsychiatricHistoryOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSignificantFamilyMedicalPsychiatricHistory(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...SignificantFamilyMedicalPsychiatricHistory,
          { value: inputValue, label: inputValue },
        ];
        setSignificantFamilyMedicalPsychiatricHistory(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const SignificantFamilyMedicalPsychiatricHistoryHandler = (
    selectedOptions
  ) => {
    setSignificantFamilyMedicalPsychiatricHistory(selectedOptions);
  };

  // types of services
  const mentalHealthTreatmentHistoryTypeOfServiceOption = [
    { label: "BHRF", value: "BHRF" },
    { label: "IP", value: "IP" },
    { label: "OP", value: "OP" },
    { label: "PHP", value: "PHP" },
    { label: "IOP", value: "IOP" },
  ];

  const handleKeyMentalHealthTreatmentHistoryTypeOfService = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = mentalHealthTreatmentHistoryTypeOfServiceOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...mentalHealthTreatmentHistoryTypeOfServiceOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setMentalHealthTreatmentHistoryTypeOfService(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...mentalHealthTreatmentHistoryTypeOfService,
          { value: inputValue, label: inputValue },
        ];
        setMentalHealthTreatmentHistoryTypeOfService(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const mentalHealthTreatmentHistoryTypeOfServiceHandler = (
    selectedOptions
  ) => {
    setMentalHealthTreatmentHistoryTypeOfService(selectedOptions);
  };

  //Diagnosis/Reason for Treatment
  const mentalHealthTreatmentHistoryDiagnosisReasonOption = [
    { label: "Mental health Treatment", value: "Mental health Treatment" },
    { label: "Substance Abuse Treatment", value: "Substance Abuse Treatment" },
    { label: "Stabilization", value: "Stabilization" },
    { label: "Detox", value: "Detox" },
    {
      label: "DTS/DTO Other (Please specify)",
      value: "DTS/DTO Other (Please specify)",
    },
  ];

  const handleKeyDownMentalHealthTreatmentHistoryDiagnosisReason = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists =
        mentalHealthTreatmentHistoryDiagnosisReasonOption.some(
          (option) => option.value === inputValue
        );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...mentalHealthTreatmentHistoryDiagnosisReasonOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setMentalHealthTreatmentHistoryDiagnosisReason(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...mentalHealthTreatmentHistoryDiagnosisReason,
          { value: inputValue, label: inputValue },
        ];
        setMentalHealthTreatmentHistoryDiagnosisReason(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const mentalHealthTreatmentHistoryDiagnosisReasonHandler = (
    selectedOptions
  ) => {
    setMentalHealthTreatmentHistoryDiagnosisReason(selectedOptions);
  };

  //Criminal Justice Legal History
  const selectedValueOption = [
    { label: "Arrested for DUI", value: "Arrested for DUI" },
    { label: "Arrested for assault", value: "Arrested for assault" },
    { label: "Arrested for bad checks", value: "Arrested for bad checks" },
    { label: "Arrested for shop lifting", value: "Arrested for shop lifting" },
    {
      label: "Arrested for attempted murder",
      value: "Arrested for attempted murder",
    },
    { label: "Arrested for drug", value: "Arrested for drug" },
    { label: "Arrested for alcohol", value: "Arrested for alcohol" },
    {
      label: "Arrested for disorderly conduct",
      value: "Arrested for disorderly conduct",
    },
    {
      label: "Arrested for identity theft/ forgery",
      value: "Arrested for identity theft/ forgery",
    },
    { label: "Arrested for sex offense", value: "Arrested for sex offense" },
    { label: "Arrested for _______,", value: "Arrested for _______," },
    { label: "Probation/parole", value: "Probation/parole" },
    { label: "custody", value: "custody" },
    { label: "Pending litigation", value: "Pending litigation" },
    { label: "Sentencing dates", value: "Sentencing dates" },
    { label: "Needs Legal Aid", value: "Needs Legal Aid" },
    { label: "Incarcerated", value: "Incarcerated" },
  ];

  const handleKeyDownSelectedValue = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSelectedValue(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...selectedValue,
          { value: inputValue, label: inputValue },
        ];
        setSelectedValue(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const selectedValueHandler = (selectedOptions) => {
    setSelectedValue(selectedOptions);
  };


  //Medical Equipment:
  const selectedValueMedicalOption = [
    { label: "Wheel Chair", value: "Wheel Chair" },
    { label: "Oxygen tank", value: "Oxygen tank" },
    { label: "CPAP Machine", value: "CPAP Machine" },
    { label: "Shower chair", value: "Shower chair" },
    { label: "None", value: "None" },
  ];

  const handleKeySelectedValueMedical = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueMedicalOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueMedicalOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSelectedValueMedical(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...selectedValueMedical,
          { value: inputValue, label: inputValue },
        ];
        setSelectedValueMedical(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const selectedValueMedicalHandler = (optionValue) => {
    setSelectedValueMedical(optionValue);
  };

  const selectedValueSpecialPrecautionsOption = [
    { label: "Yes Seizure", value: "Yes Seizure" },
    { label: "Elopement/Awol", value: "Elopement/Awol" },
    { label: "Physical Aggression", value: "Physical Aggression" },
    { label: "Withdrawal", value: "Withdrawal" },
    {
      label: "Inappropriate Sexual Behaviors",
      value: "Inappropriate Sexual Behaviors",
    },
    { label: "Substance use", value: "Substance use" },
    { label: "None", value: "None" },
  ];

  const handleKeySelectedValueSpecialPrecautions = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueSpecialPrecautionsOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueSpecialPrecautionsOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSelectedValueSpecialPrecautions(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...selectedValueSpecialPrecautions,
          { value: inputValue, label: inputValue },
        ];
        setSelectedValueSpecialPrecautions(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const selectedValueSpecialPrecautionsHandler = (optionValue) => {
    setSelectedValueSpecialPrecautions(optionValue);
  };

  //Select risk factors that apply
  const selectedValueRiskFactorsOption = [
    { label: "Current suicidal ideation", value: "Current suicidal ideation" },
    { label: "Prior suicide attempt", value: "Prior suicide attempt" },
    {
      label: "Access to means (i.e. weapon)",
      value: "Access to means (i.e. weapon)",
    },
    {
      label: "Other self-abusing behavior",
      value: "Other self-abusing behavior",
    },
    {
      label: "Recent losses/lack of support",
      value: "Recent losses/lack of support",
    },
    { label: "Symptoms of psychosis", value: "Symptoms of psychosis" },
    { label: "Family history of suicide", value: "Family history of suicide" },
    { label: "Terminal physical illness", value: "Terminal physical illness" },
    {
      label: "Current stressors (specify)",
      value: "Current stressors (specify)",
    },
    { label: "Chronic pain", value: "Chronic pain" },
  ];



  //Select risk factors that apply dropdown 1
  const selectedValueRiskFactorsOption1 = [
    { label: "isolation", value: "isolation" },
    { label: "impulsivity", value: "impulsivity" },
    { label: "withdrawn", value: "withdrawn" },
    { label: "anger", value: "anger" },
    { label: "agitation", value: "agitation" },
    { label: "verbal aggression", value: "verbal aggression" },
    { label: "slamming door", value: "slamming door" },
    { label: "physical aggression", value: "physical aggression" },
  ];

  const handleKeySelectedValueRiskFactorsBehavior = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueRiskFactorsOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueRiskFactorsOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setBehaviorcuesDropDown(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...behaviorcuesDropDown,
          { value: inputValue, label: inputValue },
        ];
        setBehaviorcuesDropDown(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const selectedValueRiskFactorsHandlerBehaviorcues = (optionValue) => {
    setBehaviorcuesDropDown(optionValue);
  };

  const selectedValueRiskFactorsOption2 = [
    { label: "Auditory Hallucination", value: "Auditory Hallucination" },
    { label: "Visual Hallucination", value: "Visual Hallucination" },
    { label: "Tactile Hallucination", value: "Tactile Hallucination" },
    { label: "Olfactory Hallucination", value: "Olfactory Hallucination" },
  ];

  const handleKeySelectedValueRiskFactorsSymptoms = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueRiskFactorsOption2.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueRiskFactorsOption2,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSymptomsOfPsychosisDropDown(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...symptomsOfPsychosisDropDown,
          { value: inputValue, label: inputValue },
        ];
        setSymptomsOfPsychosisDropDown(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const selectedValueRiskFactorsHandlerSymptoms = (optionValue) => {
    setSymptomsOfPsychosisDropDown(optionValue);
  };


  // type of and frequancy
  // last use 1
  const selectedsubstanceAbuseHistoryDataLastUseAlcohol = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUseAlcohol = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // setSubstanceAbuseHistoryDataLastUseAlcohol(inputValue);
      const optionExists = selectedsubstanceAbuseHistoryDataLastUseAlcohol.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions =
          { value: inputValue, label: inputValue }
        ;
        setSubstanceAbuseHistoryDataLastUseAlcohol(newOptions);
      }
      event.target.value = "";
    }
  };

  const handlersubstanceAbuseHistoryDataLastUseAlcohol = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUseAlcohol(optionValue);
  };

  // frequancy
  const selectedsubstanceAbuseHistoryDataFrequencyAlcohol = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ];

  const handleKeysubstanceAbuseHistoryDataFrequencyAlcohol = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = selectedsubstanceAbuseHistoryDataFrequencyAlcohol.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          { value: inputValue, label: inputValue };
        
        setSubstanceAbuseHistoryDataFrequencyAlcohol(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlersubstanceAbuseHistoryDataFrequencyAlcohol = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyAlcohol(optionValue);
  };

  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyAlcohol = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyAlcohol = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = selectedsubstanceAbuseHistoryDataFrequencyAlcohol.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
    

        setSubstanceAbuseHistoryDataLengthOfSobrietyAlcohol(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlersubstanceAbuseHistoryDataLengthOfSobrietyAlcohol = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyAlcohol(optionValue);
  };

  // 2
    // last use
    const optionsubstanceAbuseHistoryDataLastUseBenzodiazepines = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUseBenzodiazepines = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLastUseBenzodiazepines.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
        
  
          setSubstanceAbuseHistoryDataLastUseBenzodiazepines(newOptions);
  
      
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLastUseBenzodiazepines = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUseBenzodiazepines(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyBenzodiazepines = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
  
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyBenzodiazepines = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyBenzodiazepines.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataFrequencyBenzodiazepines(newOptions);
  
         
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyBenzodiazepines = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyBenzodiazepines(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines(newOptions);
  
     
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines(optionValue);
    };

    // 3
      // last use
  const optionsubstanceAbuseHistoryDataLastUseCrack = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUseCrack = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLastUseCrack.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLastUseCrack(newOptions);

      
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLastUseCrack = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUseCrack(optionValue);
  };

  // frequancy
  const optionsubstanceAbuseHistoryDataFrequencyCrack = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ]

  const handleKeysubstanceAbuseHistoryDataFrequencyCrack = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataFrequencyCrack.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataFrequencyCrack(newOptions);


      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataFrequencyCrack = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyCrack(optionValue);
  };

  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyCrack = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyCrack = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyCrack.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLengthOfSobrietyCrack(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLengthOfSobrietyCrack = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyCrack(optionValue);
  };

  // 4
    // last use
    const optionsubstanceAbuseHistoryDataLastUseHeroin = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUseHeroin = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLastUseHeroin.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLastUseHeroin(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLastUseHeroin = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUseHeroin(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyHeroin = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
  
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyHeroin = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyHeroin.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataFrequencyHeroin(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyHeroin = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyHeroin(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyHeroin = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyHeroin = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyHeroin.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyHeroin(newOptions);
  
      
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLengthOfSobrietyHeroin = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyHeroin(optionValue);
    };

    // 5
      // last use
  const optionsubstanceAbuseHistoryDataLastUseInhalants = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUseInhalants = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLastUseInhalants.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLastUseInhalants(newOptions);

      
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLastUseInhalants = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUseInhalants(optionValue);
  };

  // frequancy
  const optionsubstanceAbuseHistoryDataFrequencyInhalants = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ];

  const handleKeysubstanceAbuseHistoryDataFrequencyInhalants = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataFrequencyInhalants.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataFrequencyInhalants(newOptions);


      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataFrequencyInhalants = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyInhalants(optionValue);
  }; 


  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyInhalants = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyInhalants = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyInhalants.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        
        setSubstanceAbuseHistoryDataLengthOfSobrietyInhalants(newOptions);


      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLengthOfSobrietyInhalants = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyInhalants(optionValue);
  };

  // 6
    // last use
    const optionsubstanceAbuseHistoryDataLastUseMarijuana = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUseMarijuana = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLastUseMarijuana.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLastUseMarijuana(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLastUseMarijuana = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUseMarijuana(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyMarijuana = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
  
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyMarijuana = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyMarijuana.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataFrequencyMarijuana(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyMarijuana = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyMarijuana(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyMarijuana = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMarijuana = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyMarijuana.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyMarijuana(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLengthOfSobrietyMarijuana = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyMarijuana(optionValue);
    };

    // 7
      // last use
  const optionsubstanceAbuseHistoryDataLastUseMethamphetamine = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUseMethamphetamine = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLastUseMethamphetamine.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLastUseMethamphetamine(newOptions);

       
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLastUseMethamphetamine = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUseMethamphetamine(optionValue);
  };

  // frequancy
  const optionsubstanceAbuseHistoryDataFrequencyMethamphetamine = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ];

  const handleKeysubstanceAbuseHistoryDataFrequencyMethamphetamine = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataFrequencyMethamphetamine.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataFrequencyMethamphetamine(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataFrequencyMethamphetamine = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyMethamphetamine(optionValue);
  };

  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine(newOptions);

 
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine(optionValue);
  };

  // 8
    // last use
    const optionsubstanceAbuseHistoryDataLastUseMethadone = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUseMethadone = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLastUseMethadone.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLastUseMethadone(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLastUseMethadone = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUseMethadone(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyMethadone = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
  
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyMethadone = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyMethadone.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataFrequencyMethadone(newOptions);
  
        
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyMethadone = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyMethadone(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyMethadone = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethadone = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyMethadone.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyMethadone(newOptions);
  
          
        }
  
        event.target.value = "";
      }
    };
  
    const hnadlesubstanceAbuseHistoryDataLengthOfSobrietyMethadone = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyMethadone(optionValue);
    };

    // 9
      // last use
  const optionsubstanceAbuseHistoryDataLastUseMDMA = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUseMDMA = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLastUseMDMA.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLastUseMDMA(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLastUseMDMA = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUseMDMA(optionValue);
  };

  // frequancy
  const optionsubstanceAbuseHistoryDataFrequencyMDMA = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ];

  const handleKeysubstanceAbuseHistoryDataFrequencyMDMA = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataFrequencyMDMA.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataFrequencyMDMA(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataFrequencyMDMA = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyMDMA(optionValue);
  };

  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyMDMA = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMDMA = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyMDMA.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataLengthOfSobrietyMDMA(newOptions);

       
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLengthOfSobrietyMDMA = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyMDMA(optionValue);
  };

  // 10
    // last use
    const optionsubstanceAbuseHistoryDataLastUsePCP = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUsePCP = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLastUsePCP.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLastUsePCP(newOptions)
  
      
        }
  
        event.target.value = "";
      }
    };
  
    const hnadlesubstanceAbuseHistoryDataLastUsePCP = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUsePCP(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyPCP = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
  
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyPCP = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyPCP.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
          setSubstanceAbuseHistoryDataFrequencyPCP(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyPCP = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyPCP(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyPCP = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPCP = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyPCP.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyPCP(newOptions);
  
       
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLengthOfSobrietyPCP = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyPCP(optionValue);
    };

    // 11
      // last use
  const optionsubstanceAbuseHistoryDataLastUsePrescription = [
    { label: "Weeks ago", value: "Weeks ago" },
    { label: "Days ago", value: "Days ago" },
    { label: "Yesterday", value: "Yesterday" },
    { label: "Months ago", value: "Months ago" },
    { label: "Few hours ago", value: "Few hours ago" },
    { label: "Unsure", value: "Unsure" }
  ];

  const handleKeysubstanceAbuseHistoryDataLastUsePrescription = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLastUsePrescription.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
        
          { value: inputValue, label: inputValue }
        
        setSubstanceAbuseHistoryDataLastUsePrescription(newOptions);

       
      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataLastUsePrescription = (optionValue) => {
    setSubstanceAbuseHistoryDataLastUsePrescription(optionValue);
  };

  // frequancy
  const optionsubstanceAbuseHistoryDataFrequencyPrescription = [
    { label: "Daily", value: "Daily" },
    { label: "Two to four times weekly", value: "Two to four times weekly" },
    { label: "Multiple times a day", value: "Multiple times a day" },
    { label: "Chronic", value: "Chronic" },
    { label: "Intermittent", value: "Intermittent" },
    { label: "Only on social events", value: "Only on social events" },
    { label: "Only on weekends", value: "Only on weekends" },
    { label: "Few times a month", value: "Few times a month" }

  ];

  const handleKeysubstanceAbuseHistoryDataFrequencyPrescription = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataFrequencyPrescription.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        

        setSubstanceAbuseHistoryDataFrequencyPrescription(newOptions);

      }

      event.target.value = "";
    }
  };

  const handlesubstanceAbuseHistoryDataFrequencyPrescription = (optionValue) => {
    setSubstanceAbuseHistoryDataFrequencyPrescription(optionValue);
  };

  // length of soberty
  const optionsubstanceAbuseHistoryDataLengthOfSobrietyPrescription = [
    { label: "One week", value: "One week" },
    { label: "A few days ago", value: "A few days ago" },
    { label: "One month", value: "One month" },
    { label: "Two months", value: "Two months" },
    { label: "Three months", value: "Three months" },
    { label: "Four months", value: "Four months" },
    { label: "Five to Six months", value: "Five to Six months" },
    { label: "One year", value: "One year" },
    { label: "Two years", value: "Two years" },
    { label: "Many years", value: "Many years" }
  ];

  const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPrescription = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

   
      const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyPrescription.some(
        (option) => option.value === inputValue
      );

      if (!optionExists) {
        const newOptions = 
          
          { value: inputValue, label: inputValue }
        
        setSubstanceAbuseHistoryDataLengthOfSobrietyPrescription(newOptions);

      
      }

      event.target.value = "";
    }
  };

  const hnadlesubstanceAbuseHistoryDataLengthOfSobrietyPrescription = (optionValue) => {
    setSubstanceAbuseHistoryDataLengthOfSobrietyPrescription(optionValue);
  };

  // 12
    // last use
    const optionsubstanceAbuseHistoryDataLastUseOTC = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLastUseOTC = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
    //  
        const optionExists = optionsubstanceAbuseHistoryDataLastUseOTC.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLastUseOTC(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const hnadlesubstanceAbuseHistoryDataLastUseOTC = (optionValue) => {
      setSubstanceAbuseHistoryDataLastUseOTC(optionValue);
    };
  
    // frequancy
    const optionsubstanceAbuseHistoryDataFrequencyOTC = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataFrequencyOTC = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
     
        const optionExists = optionsubstanceAbuseHistoryDataFrequencyOTC.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
        
  
          setSubstanceAbuseHistoryDataFrequencyOTC(newOptions);
  
      
        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataFrequencyOTC = (optionValue) => {
      setSubstanceAbuseHistoryDataFrequencyOTC(optionValue);
    };
  
    // length of soberty
    const optionsubstanceAbuseHistoryDataLengthOfSobrietyOTC = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeysubstanceAbuseHistoryDataLengthOfSobrietyOTC = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionsubstanceAbuseHistoryDataLengthOfSobrietyOTC.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
          setSubstanceAbuseHistoryDataLengthOfSobrietyOTC(newOptions);

        }
  
        event.target.value = "";
      }
    };
  
    const handlesubstanceAbuseHistoryDataLengthOfSobrietyOTC = (optionValue) => {
      setSubstanceAbuseHistoryDataLengthOfSobrietyOTC(optionValue);
    };

    // 13 additional value
    const optionotherLastUse = [
      { label: "Weeks ago", value: "Weeks ago" },
      { label: "Days ago", value: "Days ago" },
      { label: "Yesterday", value: "Yesterday" },
      { label: "Months ago", value: "Months ago" },
      { label: "Few hours ago", value: "Few hours ago" },
      { label: "Unsure", value: "Unsure" }
    ];
  
    const handleKeyotherLastUse = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
    //  
        const optionExists = optionotherLastUse.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
            setOtherLastUse(newOptions);
  
        }
  
        event.target.value = "";
      }
    };
  
    const handleotherLastUse = (optionValue) => {
      setOtherLastUse(optionValue);
    };
  
    // frequancy
    const optionotherFrequancy = [
      { label: "Daily", value: "Daily" },
      { label: "Two to four times weekly", value: "Two to four times weekly" },
      { label: "Multiple times a day", value: "Multiple times a day" },
      { label: "Chronic", value: "Chronic" },
      { label: "Intermittent", value: "Intermittent" },
      { label: "Only on social events", value: "Only on social events" },
      { label: "Only on weekends", value: "Only on weekends" },
      { label: "Few times a month", value: "Few times a month" }
    ];
  
    const handleKeyotherFrequancy = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
     
        const optionExists = optionotherFrequancy.some(
          (option) => option.value === inputValue
        );
  
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
        
  
            setOtherFrequancy(newOptions);
  
      
        }
  
        event.target.value = "";
      }
    };
  
    const handleotherFrequancy = (optionValue) => {
      setOtherFrequancy(optionValue);
    };
  
    // length of soberty
    const optionOtherlengthOfSobrifty = [
      { label: "One week", value: "One week" },
      { label: "A few days ago", value: "A few days ago" },
      { label: "One month", value: "One month" },
      { label: "Two months", value: "Two months" },
      { label: "Three months", value: "Three months" },
      { label: "Four months", value: "Four months" },
      { label: "Five to Six months", value: "Five to Six months" },
      { label: "One year", value: "One year" },
      { label: "Two years", value: "Two years" },
      { label: "Many years", value: "Many years" }
    ];
  
    const handleKeyOtherlengthOfSobrifty = (event) => {
      if (event.key === "Enter" && event.target.value) {
        const inputValue = event.target.value.trim();
  
     
        const optionExists = optionOtherlengthOfSobrifty.some(
          (option) => option.value === inputValue
        );
        if (!optionExists) {
          const newOptions = 
            
            { value: inputValue, label: inputValue }
          
  
            setOtherLengthOfSobirty(newOptions);

        }
  
        event.target.value = "";
      }
    };

    const handleOtherlengthOfSobrifty = (optionValue) => {
      setOtherLengthOfSobirty(optionValue);
    };

    
  return (
    <>
      <div >
        <div style={{ width: "20px" }} className="backbutton">
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
          <FormUpper setAssessmentType={setAssessmentType} assessmentType={assessmentType}/>
          <p style={{ marginTop: "0.5rem", marginBottom: "0"}}>
            <span>
            
            <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
            </span>
            <span style={{ paddingLeft: "10px" }}>has notified</span>
            <span>
             
              <AutoSize value={hasNotified} setValue={setHasNotified} placeholder={"_______________"}/>
            </span>
            to participate in his/her Service Treatment Plan/Initial Assessment
            on
            <span>
           
               <AutoSize value={assessmentOn} setValue={setAssessmentOn} placeholder={"_______________"}/>
            </span>
          </p>
          <form onSubmit={handleSubmit} style={{ marginTop: "0.5rem " }}>
            <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
              SECTION I
            </h5>
            <div className="form-section">
              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child-gender">
                    <label htmlFor="residentFullName">
                      Resident's Full Name:
                    </label>
                    <input
                      type="text"
                      id="residentFullName"
                      className="borderless_input"
                      value={residentName}
                      placeholder="Enter full name"
                      required
                      onChange={(e) => setResidentName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child-name">
                    <label>Gender:</label>

                    <div className="genderdiv">
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="maleRadio"
                          checked={sex === "Male"}
                          onChange={() => setSex("Male")}
                          className="custom-radio"
                        />
                        <label htmlFor="maleRadio">Male</label>
                      </div>
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="femaleRadio"
                          checked={sex === "Female"}
                          onChange={() => setSex("Female")}
                          className="custom-radio"
                        />
                        <label htmlFor="femaleRadio">Female</label>
                      </div>
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="femaleRadio"
                          checked={sex === "Other"}
                          onChange={() => setSex("Other")}
                          className="custom-radio"
                        />
                        <label htmlFor="femaleRadio">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      className="borderless_input"
                      value={dob}
                      placeholder="DD/MM/YYYY"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Admission Date:</label>
                    <input
                      type="date"
                      value={dateOfAssessment}
                      placeholder="Enter Date"
                      required
                      onChange={(e) => setDateOfAssessment(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-single-update">
                  <label htmlFor="AHCCCS">AHCCCS# :</label>
                  <input
                    type="text"
                    id="AHCCCS"
                    value={ahcccsNumber}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setAhcccsNumber(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="preferredlanguage">
                      Preferred Language:
                    </label>
                    <input
                      type="text"
                      required
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child">
                    <label htmlFor="ethnicity">Ethnicity: </label>
                    <input
                      type="text"
                      required
                      value={ethnicity}
                      onChange={(e) => setEthnicity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-single-update-bold">
                  <label>Admission Status:</label>

                  <Select
                    isMulti
                    value={admissionStatus}
                    onChange={handleSelectChangeAdmission}
                    options={option_value_Admission}
                    isCreatable={true}
                    onKeyDown={handleKeyDownAdmissionStatus}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="programlocation&address">
                    Program Location & Address:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    value={programLocation}
                    onChange={(e) => setProgramLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="">Guardianship:</label>
                    <input
                      type="text"
                      id="attorneystatus"
                      value={guardianship}
                      placeholder="Enter text"
                      required
                      onChange={(e) => setGuardianship(e.target.value)}
                    />
                   
                  </div>

                  <div className="form-field-child">
                    <label htmlFor="attorneystatus">
                      Power of Attorney Status:
                    </label>
                    <input
                      type="text"
                      id="attorneystatus"
                      value={powerOfAttorneyStatus}
                      placeholder="Enter text"
                      required
                      onChange={(e) => setPowerOfAttorneyStatus(e.target.value)}
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>
         

                <div className="form-field-single-update">
                  <label htmlFor="todaydate">Today’s Date:</label>
                  <input
                    type="date"
                    id="todaydate"
                    value={todayDate}
                    placeholder="DD/MM/YYYY"
                    required
                    onChange={(e) => setTodayDate(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="fidname">
                    Guardianship/POA/PUB FID Name:
                  </label>
                  <input
                    type="text"
                    id="fidname"
                    value={guardianshipPoaPubFidName}
                    placeholder="Enter name"
                    required
                    onChange={(e) =>
                      setGuardianshipPoaPubFidName(e.target.value)
                    }
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="approvedby">Approved By:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={approvedBy}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setApprovedBy(e.target.value)}
                  />
                </div>
              </div>
           

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Reason for Admission to Services:</label>
                  <Select
                    isMulti
                    value={reasonForAdmission}
                    onChange={handleSelectChangeAdmissionReasonForAdmission}
                    options={option_value_ReasonForAdmission}
                    isCreatable={true}
                    onKeyDown={handleKeyDownReasionForAdmission}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Resident’s Goals:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={residentGoals}
                    placeholder="Enter goal"
                    required
                    onChange={(e) => setResidentGoals(e.target.value)}
                  />
          
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Resident’s Strength:</label>
                  <Select
                    isMulti
                    value={residentStrengths}
                    onChange={handleSelectChange}
                    options={qualitiesOptions}
                    isCreatable={true}
                    onKeyDown={handleKeyDownResidentStrength}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label>Resident’s Barriers:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={residentLimitations}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setResidentLimitations(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label style={{whiteSpace:"wrap"}}>
                    Current Behavioral Issues / Symptoms Reported by the
                    Resident:
                  </label>
                  <input
                    type="text"
                    value={currentBehavioralIssues}
                    placeholder="Enter text"
                    onChange={(e) => setCurrentBehavioralIssues(e.target.value)}
                  />
                </div>
              </div>

           
              <h5
                style={{
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SECTION II
              </h5>
              <div className="formsheading">
                <p>
                  A. Currently prescribed medications are attached on a separate
                  page.
                </p>
                <p style={{ fontWeight: "bold" }}>
                  B. Current and Past Medical/Psychiatric Conditions.
                </p>
              </div>

              <div className="needs-interventions-container-condition table-respnosive">
                <div className="needs-interventions-column-condition">
                  <table>
                    <thead>
                      <th>Conditions</th>
                      <th>Yes</th>
                      <th>No</th>
                      <th>Comments</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Diabetes</td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetes"
                            checked={yesDiabetes === true}
                            onChange={() => setYesDiabetes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetesno"
                            checked={yesDiabetes === false}
                            onChange={() => setYesDiabetes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentDiabety ? commentDiabety.split("\n").length : 1), 1)}
                            value={commentDiabety || ''}
                            placeholder="___________"
                            onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentDeabetes(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Heart disease / heart attack</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHeart"
                            checked={yesHeart === true}
                            onChange={() => setYesHeart(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHeartno"
                            checked={yesHeart === false}
                            onChange={() => setYesHeart(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHeart ? commentHeart.split("\n").length : 1), 1)}
                            value={commentHeart || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentHeart(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHeart(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>History of stroke</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHistory"
                            checked={yesHistory === true}
                            onChange={() => setYesHistory(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHistoryno"
                            checked={yesHistory === false}
                            onChange={() => setYesHistory(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHistory ? commentHistory.split("\n").length : 1), 1)}
                            value={commentHistory || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentHistory(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHistory(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>High Blood Pressure</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHigh"
                            checked={yesHigh === true}
                            onChange={() => setYesHigh(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHighno"
                            checked={yesHigh === false}
                            onChange={() => setYesHigh(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHigh ? commentHigh.split("\n").length : 1), 1)}
                            value={commentHigh || ''}
                        
                            placeholder="___________"
                            onChange={(e) => setCommentHigh(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHigh(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Lung disease (ie asthma, COPD, emphysema)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLung"
                            checked={yesLung === true}
                            onChange={() => setYesLung(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLungno"
                            checked={yesLung === false}
                            onChange={() => setYesLung(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentLung ? commentLung.split("\n").length : 1), 1)}
                            value={commentLung || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setCommentLung(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentLung(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Seizures</td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetes"
                            checked={yesSeizures === true}
                            onChange={() => setYesSeizures(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesSeizuresno"
                            checked={yesSeizures === false}
                            onChange={() => setYesSeizures(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentSeizures ? commentSeizures.split("\n").length : 1), 1)}
                            value={commentSeizures || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentSeizures(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentSeizures(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Cancer</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesCancer"
                            checked={yesCancer === true}
                            onChange={() => setYesCancer(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesCancerno"
                            checked={yesCancer === false}
                            onChange={() => setYesCancer(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentCancer ? commentCancer.split("\n").length : 1), 1)}
                            value={commentCancer || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setCommentCancer(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentCancer(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Liver/kidney disease</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLiver"
                            checked={yesLiver === true}
                            onChange={() => setYesLiver(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLiverno"
                            checked={yesLiver === false}
                            onChange={() => setYesLiver(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentLiver ? commentLiver.split("\n").length : 1), 1)}
                            value={commentLiver || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentLiver(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentLiver(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Thyroid disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesThyroid"
                            checked={yesThyroid === true}
                            onChange={() => setYesThyroid(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="setYesThyroidno"
                            checked={yesThyroid === false}
                            onChange={() => setYesThyroid(false)}
                          />
                        </td>
                        <td>
                          <Select
                            isMulti
                            value={thyroidDisorder}
                            onChange={thyroiddisorderhnadler}
                            options={thyroidOptions}
                            isCreatable={true}
                            onKeyDown={handleKeyThyroidDisorder}
                          />
                        </td>
                      </tr>
                       <tr>
                        <td>History of head trauma/traumatic brain</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesbrain"
                            checked={yesbrain === true}
                            onChange={() => setYesBrain(true)}
                          />
                        </td>
                        <td>
                          <input

                            type="checkbox"
                            id="yesbrainno"
                            checked={yesbrain === false}
                            onChange={() => setYesBrain(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{ border: "none", outline: "none", resize: "none" }}
                            rows={Math.max((commentbrain ? commentbrain.split("\n").length : 1), 1)}
                            value={commentbrain || ''}
                            
                            placeholder="___________"
                            onChange={(e) => setbrain(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setbrain((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr> 
                      <tr>
                        <td>History of head trauma/traumatic brain injury</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesInjury"
                            checked={yesInjury === true}
                            onChange={() => setYesInjury(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesInjuryno"
                            checked={yesInjury === false}
                            onChange={() => setYesInjury(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentInjury ? commentInjury.split("\n").length : 1), 1)}
                            value={commentInjury || ''}
                            
                            placeholder="___________"
                            onChange={(e) => setCommentInjury(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentInjury(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Chronic pain</td>
                        <td>
                          <input
                            type="checkbox"
                            id="Chronic"
                            checked={yesChronic === true}
                            onChange={() => setYesChronic(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="Chronicno"
                            checked={yesChronic === false}
                            onChange={() => setYesChronic(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((chronicCommit ? chronicCommit.split("\n").length : 1), 1)}
                            value={chronicCommit || ''}
                            
                            
                            placeholder="___________"
                            onChange={(e) => setChronicCommit(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setChronicCommit(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Allergies (food, environment, medications)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="AllergiesYes"
                            checked={AllergiesYes === true}
                            onChange={() => setAllergiesYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="AllergiesYesno"
                            checked={AllergiesYes === false}
                            onChange={() => setAllergiesYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((AllergiesComment ? AllergiesComment.split("\n").length : 1), 1)}
                            value={AllergiesComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setAllergiesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAllergiesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Surgeries</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SurgeriesYes"
                            checked={SurgeriesYes === true}
                            onChange={() => setSurgeriessYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SurgeriesYesno"
                            checked={SurgeriesYes === false}
                            onChange={() => setSurgeriessYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SurgeriesComment ? SurgeriesComment.split("\n").length : 1), 1)}
                            value={SurgeriesComment || ''}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setSurgeriesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSurgeriesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Number of pregnancies / births</td>
                        <td>
                          <input
                            type="checkbox"
                            id="pregnanciesYes"
                            checked={pregnanciesYes === true}
                            onChange={() => setPregnanciesYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="pregnanciesYesno"
                            checked={pregnanciesYes === false}
                            onChange={() => setPregnanciesYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((pregnanciesComment ? pregnanciesComment.split("\n").length : 1), 1)}
                            value={pregnanciesComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setPregnanciesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPregnanciesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Substance use disorder (please specify)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SubstanceYes"
                            checked={SubstanceYes === true}
                            onChange={() => setSubstanceYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SubstanceYesno"
                            checked={SubstanceYes === false}
                            onChange={() => setSubstanceYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SubstanceComment ? SubstanceComment.split("\n").length : 1), 1)}
                            value={SubstanceComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setSubstanceComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSubstanceComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Depression</td>
                        <td>
                          <input
                            type="checkbox"
                            id="DepressionYes"
                            checked={DepressionYes === true}
                            onChange={() => setDepressionYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="DepressionYesno"
                            checked={DepressionYes === false}
                            onChange={() => setDepressionYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((DepressionComment ? DepressionComment.split("\n").length : 1), 1)}
                            value={DepressionComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setDepressionComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setDepressionComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Anxiety/panic attacks</td>
                        <td>
                          <input
                            type="checkbox"
                            id="AnxietyYes"
                            checked={AnxietyYes === true}
                            onChange={() => setAnxietyYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="AnxietyYesno"
                            checked={AnxietyYes === false}
                            onChange={() => setAnxietyYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((AnxietyComment ? AnxietyComment.split("\n").length : 1), 1)}
                            value={AnxietyComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) => setAnxietyComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAnxietyComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Insomnia</td>
                        <td>
                          <input
                            type="checkbox"
                            id="InsomniaYes"
                            checked={InsomniaYes === true}
                            onChange={() => setInsomniaYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="InsomniaYesno"
                            checked={InsomniaYes === false}
                            onChange={() => setInsomniaYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((InsomniaComment ? InsomniaComment.split("\n").length : 1), 1)}
                            value={InsomniaComment || ''}
                        
                            placeholder="___________"
                            onChange={(e) =>
                              setInsomniaComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setInsomniaComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Bipolar disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="BipolarYes"
                            checked={BipolarYes === true}
                            onChange={() => setBipolarYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="BipolarYesno"
                            checked={BipolarYes === false}
                            onChange={() => setBipolarYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((BipolarComment ? BipolarComment.split("\n").length : 1), 1)}
                            value={BipolarComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) => setBipolarComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setBipolarComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Schizophrenia</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SchizophreniaYes"
                            checked={SchizophreniaYes === true}
                            onChange={() => setSchizophreniaYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SchizophreniaYesno"
                            checked={SchizophreniaYes === false}
                            onChange={() => setSchizophreniaYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SchizophreniaComment ? SchizophreniaComment.split("\n").length : 1), 1)}
                            value={SchizophreniaComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setSchizophreniaComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSchizophreniaComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Obsessive compulsive disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="ObsessiveYes"
                            checked={ObsessiveYes === true}
                            onChange={() => setObsessiveYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="ObsessiveYesno"
                            checked={ObsessiveYes === false}
                            onChange={() => setObsessiveYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((ObsessiveComment ? ObsessiveComment.split("\n").length : 1), 1)}
                            value={ObsessiveComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setObsessiveComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setObsessiveComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Personality disorder (please specify)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="PersonalityYes"
                            checked={PersonalityYes === true}
                            onChange={() => setPersonalityYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="PersonalityYesno"
                            checked={PersonalityYes === false}
                            onChange={() => setPersonalityYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((PersonalityComment ? PersonalityComment.split("\n").length : 1), 1)}
                            value={PersonalityComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setPersonalityComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPersonalityComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Phobias</td>
                        <td>
                          <input
                            type="checkbox"
                            id="PhobiasYes"
                            checked={PhobiasYes === true}
                            onChange={() => setPhobiasYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="PhobiasYesno"
                            checked={PhobiasYes === false}
                            onChange={() => setPhobiasYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((PhobiasComment ? PhobiasComment.split("\n").length : 1), 1)}
                            value={PhobiasComment || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setPhobiasComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPhobiasComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Any other health conditions</td>
                        <td>
                          <input
                            type="checkbox"
                            id="healthConditionsYes"
                            checked={healthConditionsYes === true}
                            onChange={() => setHealthConditionsYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="healthConditionsYesno"
                            checked={healthConditionsYes === false}
                            onChange={() => setHealthConditionsYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((healthConditionsYesComment ? healthConditionsYesComment.split("\n").length : 1), 1)}
                            value={healthConditionsYesComment || ''}
                          
                            placeholder="___________"
                            onChange={(e) =>
                              sethealthConditionsYesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                sethealthConditionsYesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Infection or Diseases</td>
                        <td>
                          <input
                            type="checkbox"
                            id="InfectionYes"
                            checked={InfectionYes === true}
                            onChange={() => setInfectionYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="InfectionYesno"
                            checked={InfectionYes === false}
                            onChange={() => setInfectionYes(false)}
                          />
                        </td>
                        <td>
                          <Select
                            isMulti
                            placeholder="Select Multiple Type"
                            value={infectionDiseases}
                            onChange={infectionDiseasesHandler}
                            options={infectionDiseasesOptions}
                            isCreatable={true}
                            onKeyDown={handleKeyInfectionDiseases}
                          />
                        </td>
                      </tr>
                      {
                        
                          otherConditionArray.map((i)=><tr>
                            <td>{i.condition}</td>
                           <td><input type="checkbox" checked={i.yes===true} /></td>
                           <td><input type="checkbox" checked={i.yes===false} /></td>
                            <td>{i.comments}</td>
                          </tr>)
                        
                      }
                      <tr>
                        <td>Other: <input type="text" className="treatment_plan_table"
                        value={OtherConditionOther} onChange={(e)=>setOtherConditionOther(e.target.value)} placeholder="___________"/></td>
                        <td>
                          <input
                            type="checkbox"
                          
                            checked={otherConditionYesNO === true}
                            onChange={() => setOtherConditionYesNo(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                   
                            checked={otherConditionYesNO === false}
                            onChange={() => setOtherConditionYesNo(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((otherConditionDiscription ? otherConditionDiscription.split("\n").length : 1), 1)}
                            value={otherConditionDiscription || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setOtherConditionDiscription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherConditionDiscription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    
                      
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleAddCondition}
                >
                  Add
                </button>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Significant Family Medical/Psychiatric History:</label>

                  <Select
                    isMulti
                    value={SignificantFamilyMedicalPsychiatricHistory}
                    onChange={SignificantFamilyMedicalPsychiatricHistoryHandler}
                    options={SignificantFamilyMedicalPsychiatricHistoryOptions}
                    isCreatable={true}
                    onKeyDown={
                      handleKeySignificantFamilyMedicalPsychiatricHistory
                    }
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ marginTop: "1.5rem" }}>
                  Mental Health Treatment History (in Resident hospitalization,
                  partial hospitalization, out Resident, etc):
                </h6>
              </div>

              <div className="box-image-container hidePrint">
                <div className="form-field-single-update-bold">
                  <div>
                    <label>Type of Service:</label>
                  </div>
                  <div>
                    {" "}
                    <Select
                      isMulti
                      style={{ border: "none", outline: "none" }}
                      value={mentalHealthTreatmentHistoryTypeOfService}
                      onChange={
                        mentalHealthTreatmentHistoryTypeOfServiceHandler
                      }
                      options={mentalHealthTreatmentHistoryTypeOfServiceOption}
                      isCreatable={true}
                      onKeyDown={
                        handleKeyMentalHealthTreatmentHistoryTypeOfService
                      }
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Where:</label>
                    <input
                      type="text"
                      value={mentalHealthTreatmentHistoryWhere}
                      placeholder="Enter text"
                      
                      onChange={(e) =>
                        setMentalHealthTreatmentHistoryWhere(e.target.value)
                      }
                    />
                  </div>

                  <div className="form-field-child">
                    <label>Dates:</label>
                    <input
                      type="date"
                      id="approvedby"
                      value={mentalHealthTreatmentHistoryDates}
                      placeholder="Enter text"
                      
                      onChange={(e) =>
                        setMentalHealthTreatmentHistoryDates(e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>

                <div className="form-field-single-update-bold">
                  <label >
                    Diagnosis/Reason for Treatment:
                  </label>

                  <Select
                    isMulti
                    placeholder="Select Multiple Type"
                    value={mentalHealthTreatmentHistoryDiagnosisReason}
                    onChange={
                      mentalHealthTreatmentHistoryDiagnosisReasonHandler
                    }
                    options={mentalHealthTreatmentHistoryDiagnosisReasonOption}
                    isCreatable={true}
                    onKeyDown={
                      handleKeyDownMentalHealthTreatmentHistoryDiagnosisReason
                    }
                  />
                </div>
              </div>
              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleTypeOfService}
                >
                  Add
                </button>
              </div>

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  {typeOfServiceArray.length > 0 && (
                    <table>
                      <thead>
                        <th>Type of Services</th>
                        <th>Where</th>
                        <th>Dates</th>
                        <th>Diagnosis/Reason for Treatment </th>

                        <th className="hidePrint">Action</th>
                      </thead>
                      <tbody>
                        {typeOfServiceArray?.map((i, index) => (
                          <tr>
                            <td>
                              {i?.typeOfService?.map(
                                (item) => (
                                  <p key={item?.value}>{item?.value}</p>
                                )
                              )}
                            </td>
                            <td>
                              {`${i?.where}`}{" "}
                            </td>
                            <td>{`${i?.dates}`}</td>
                            <td>
                              {i?.diagnosisReason?.map(
                                (item) => (
                                  <p key={item?.value}>{item?.value}</p>
                                )
                              )}
                            </td>
                            <td className="hidePrint">
                              <AiFillDelete
                                onClick={() => handleRemoveItem(index)}
                                style={{
                                  fontSize: "1.5rem",
                                  cursor: "pointer",
                                }}
                              />{" "}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="yeschechbox235-parent">

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                     <label style={{ fontWeight: "bold" }}>
                    Substance Abuse history:
                  </label>
                   
                
                </div>
                  
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="">Denies: </label>
                    <input
                      type="checkbox"
                      id="substanceAbuseDenies"
                      checked={substanceAbuseDenies}
                      onChange={() =>
                        setSubstanceAbuseDenies(!substanceAbuseDenies)
                      }
                    />
               
                </div>
              </div>

              <div className="needs-interventions-container2 table-respnosive">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th style={{ fontWeight: "bold" }}>Type</th>
                      <th style={{ fontWeight: "bold" }}>Age of First use</th>
                      <th style={{ fontWeight: "bold" }}>Last Use</th>
                      <th style={{ fontWeight: "bold" }}>Frequency </th>
                      <th style={{ fontWeight: "bold" }}>Length of Sobriety</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alcohol</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseAlcohol
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseAlcohol(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                        <Select
                  value={substanceAbuseHistoryDataLastUseAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataLastUseAlcohol}
                  options={selectedsubstanceAbuseHistoryDataLastUseAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseAlcohol}
                />  
                        </td>
                              
                        <td>
                        <Select
                  value={substanceAbuseHistoryDataFrequencyAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataFrequencyAlcohol}
                  options={selectedsubstanceAbuseHistoryDataFrequencyAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyAlcohol}
                />

                         
                        </td>
                        <td>

                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                />

                         
                        </td>
                      </tr>

                      <tr>
                        <td>Benzodiazepines</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseBenzodiazepines}
                  onChange={handlesubstanceAbuseHistoryDataLastUseBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataLastUseBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseBenzodiazepines}
                />
                         
                        </td>
                        <td>

                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyBenzodiazepines}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                />

                       
                        </td>
                      </tr>
                      <tr>
                        <td>Crack</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseCrack}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseCrack(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseCrack}
                  onChange={handlesubstanceAbuseHistoryDataLastUseCrack}
                  options={optionsubstanceAbuseHistoryDataLastUseCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseCrack}
                />
                       
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyCrack}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyCrack}
                  options={optionsubstanceAbuseHistoryDataFrequencyCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyCrack}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyCrack}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Heroin</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseHeroin}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseHeroin(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseHeroin}
                  onChange={handlesubstanceAbuseHistoryDataLastUseHeroin}
                  options={optionsubstanceAbuseHistoryDataLastUseHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseHeroin}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyHeroin}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyHeroin}
                  options={optionsubstanceAbuseHistoryDataFrequencyHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyHeroin}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Inhalants</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseInhalants
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseInhalants(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseInhalants}
                  onChange={handlesubstanceAbuseHistoryDataLastUseInhalants}
                  options={optionsubstanceAbuseHistoryDataLastUseInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseInhalants}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyInhalants}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyInhalants}
                  options={optionsubstanceAbuseHistoryDataFrequencyInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyInhalants}
                />

                      
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>Marijuana </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMarijuana
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMarijuana(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMarijuana}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMarijuana}
                  options={optionsubstanceAbuseHistoryDataLastUseMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMarijuana}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMarijuana}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMarijuana}
                  options={optionsubstanceAbuseHistoryDataFrequencyMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMarijuana}
                />

                        
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Methamphetamine </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMethamphetamine
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMethamphetamine(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMethamphetamine}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataLastUseMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMethamphetamine}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMethamphetamine}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataFrequencyMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMethamphetamine}
                />

                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>Methadone</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMethadone
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMethadone(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMethadone}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMethadone}
                  options={optionsubstanceAbuseHistoryDataLastUseMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMethadone}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMethadone}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMethadone}
                  options={optionsubstanceAbuseHistoryDataFrequencyMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMethadone}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  
                  onChange={hnadlesubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                />

                        
                        </td>
                      </tr>
                      <tr>
                        <td>MDMA (ecstasy)</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseMDMA}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMDMA(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMDMA}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMDMA}
                  options={optionsubstanceAbuseHistoryDataLastUseMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMDMA}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMDMA}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMDMA}
                  options={optionsubstanceAbuseHistoryDataFrequencyMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMDMA}
                />
                        
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>PCP (angel dust)</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUsePCP}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUsePCP(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUsePCP}
                  onChange={hnadlesubstanceAbuseHistoryDataLastUsePCP}
                  options={optionsubstanceAbuseHistoryDataLastUsePCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUsePCP}
                />
                          
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyPCP}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyPCP}
                  options={optionsubstanceAbuseHistoryDataFrequencyPCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyPCP}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyPCP}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                />

                          
                        </td>
                      </tr>
                      <tr>
                        <td>Prescription medicine</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUsePrescription
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUsePrescription(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUsePrescription}
                  onChange={handlesubstanceAbuseHistoryDataLastUsePrescription}
                  options={optionsubstanceAbuseHistoryDataLastUsePrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUsePrescription}
                />
                          
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyPrescription}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyPrescription}
                  options={optionsubstanceAbuseHistoryDataFrequencyPrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyPrescription}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  
                  onChange={hnadlesubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>OTC medicine</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseOTC}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseOTC(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseOTC}
                  onChange={hnadlesubstanceAbuseHistoryDataLastUseOTC}
                  options={optionsubstanceAbuseHistoryDataLastUseOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseOTC}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyOTC}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyOTC}
                  options={optionsubstanceAbuseHistoryDataFrequencyOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyOTC}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyOTC}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                />

                      
                        </td>
                      </tr>

                      {typeArray?.map((i) => (
                        <tr>
                          <td>{i.types}</td>
                          <td>{i.ageOfFirstUse} </td>
                          <td>{i.lastUse} </td>
                          <td>{i.frequency} </td>
                          <td>{i.lengthOfSobriety} </td>
                        </tr>
                      ))}

                      <tr >
                        <td>
                          Other:
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={otherTypeOther}
                            onChange={(e) => setOtherTypeOther(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={otherAgeOfFirstUse}
                            onChange={(e) =>
                              setOtherAgeOfFirstUse(e.target.value)
                            }
                          />
                        </td>
                        <td>
                        <Select
                  value={otherLastUse}
                  
                  onChange={handleotherLastUse}
                  options={optionotherLastUse}
                  isCreatable={true}
                  onKeyDown={handleKeyotherLastUse}
                />
          
                        </td>
                        <td>
                        <Select
                  value={otherFrequancy}
                  
                  onChange={handleotherFrequancy}
                  options={optionotherFrequancy}
                  isCreatable={true}
                  onKeyDown={handleKeyotherFrequancy}
                />
                        </td>
                        <td>

                        <Select
                  value={OtherlengthOfSobrifty}
                  
                  onChange={handleOtherlengthOfSobrifty}
                  options={optionOtherlengthOfSobrifty}
                  isCreatable={true}
                  onKeyDown={handleKeyOtherlengthOfSobrifty}
                />
                     
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleTypeOfArray}
                >
                  Add
                </button>
              </div>

              <div class="checkbox-container">
                <label style={{ fontWeight: "bold" }}>
                  Active Withdrawal Symptoms:
                </label>
             
                <div class="checkBox_style_update">
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="noneReportedOrObserved"
                        value={noneReportedOrObserved}
                        checked={noneReportedOrObserved}
                        
                        onChange={() =>
                          setNoneReportedOrObserved(!noneReportedOrObserved)
                        }
                      />
                      <label htmlFor="noneReportedOrObserved">
                        None reported observed
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Vomiting"
                        value={Vomiting}
                        checked={Vomiting}
                        onChange={() => setVomiting(!Vomiting)}
                      />
                      <label htmlFor="Vomiting">Vomiting</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Anxiety"
                        value={Anxiety}
                        checked={Anxiety}
                        onChange={() => setAnxiety(!Anxiety)}
                      />
                      <label htmlFor="Anxiety">Anxiety</label>
                  </div>

                  <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Agitation"
                        value={Agitation}
                        checked={Agitation}
                        onChange={() => setAgitation(!Agitation)}
                      />
                      <label htmlFor="Agitation">Agitation</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Headache"
                        value={Headache}
                        checked={Headache}
                        onChange={() => setHeadache(!Headache)}
                      />
                      <label htmlFor="Headache">Headache</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Tremors"
                        value={Tremors}
                        checked={Tremors}
                        onChange={() => setTremors(!Tremors)}
                      />
                      <label htmlFor="Tremors">Tremors</label>
                    </div>
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Nausea"
                        value={Nausea}
                        checked={Nausea}
                        onChange={() => setNausea(!Nausea)}
                      />
                      <label htmlFor="Nausea">Nausea</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="TactileDisturbances"
                        value={TactileDisturbances}
                        checked={TactileDisturbances}
                        onChange={() =>
                          setTactileDisturbances(!TactileDisturbances)
                        }
                      />
                      <label htmlFor="TactileDisturbances">
                        Tactile Disturbances
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="VisualDisturbances"
                        value={VisualDisturbances}
                        checked={VisualDisturbances}
                        onChange={() =>
                          setVisualDisturbances(!VisualDisturbances)
                        }
                      />
                      <label htmlFor="VisualDisturbances">
                        Visual Disturbances
                      </label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="VisualDisturbances"
                        value={VisualDisturbances}
                        checked={VisualDisturbancesOtherBoolean}
                        onChange={() =>
                          setVisualDisturbancesOtherBoolean(
                            !VisualDisturbancesOtherBoolean
                          )
                        }
                      />
                      <label htmlFor="VisualDisturbances">Other</label>
                      {VisualDisturbancesOtherBoolean && (
                        <AutoSize value={VisualDisturbancesOtherType} setValue={setVisualDisturbancesOtherType} placeholder={"_______________"}/>
                      )}
                   
                  </div>
                </div>
              </div>

              <div class="checkbox-container">
                <label style={{ fontWeight: "bold" }}>
                  Auditory Disturbances:
                </label>
                <div class="checkBox_style_update">
                  
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Sweats"
                        value={Sweats}
                        checked={Sweats}
                        onChange={() => setSweats(!Sweats)}
                      />
                      <label htmlFor="Sweats">Sweats</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="GooseBumps"
                        value={GooseBumps}
                        checked={GooseBumps}
                        onChange={() => setGooseBumps(!GooseBumps)}
                      />
                      <label htmlFor="GooseBumps">Goose Bumps</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="BonePain"
                        value={BonePain}
                        checked={BonePain}
                        onChange={() => setBonePain(!BonePain)}
                      />
                      <label htmlFor="BonePain">Bone Pain</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Seizures"
                        value={Seizures}
                        checked={Seizures}
                        onChange={() => setSeizures(!Seizures)}
                      />
                      <label htmlFor="Seizures">Seizures</label>
                    </div>
                 
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Paranoia"
                        value={Paranoia}
                        checked={Paranoia}
                        onChange={() => setParanoia(!Paranoia)}
                      />
                      <label htmlFor="Paranoia">Paranoia</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Runningnose"
                        value={Runningnose}
                        checked={Runningnose}
                        onChange={() => setRunningnose(!Runningnose)}
                      />
                      <label htmlFor="Runningnose">Running nose</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Tearing"
                        value={Tearing}
                        checked={Tearing}
                        onChange={() => setTearing(!Tearing)}
                      />
                      <label htmlFor="Tearing">Tearing</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="LossofMuscleCoordination"
                        value={LossofMuscleCoordination}
                        checked={LossofMuscleCoordination}
                        onChange={() =>
                          setLossofMuscleCoordination(!LossofMuscleCoordination)
                        }
                      />
                      <label htmlFor="LossofMuscleCoordination">
                        Loss of muscle coordination
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="LossofMuscleCoordination"
                        value={LossofMuscleCoordinationOtherBoolean}
                        checked={LossofMuscleCoordinationOtherBoolean}
                        onChange={() =>
                          setLossofMuscleCoordinationBoolean(
                            !LossofMuscleCoordinationOtherBoolean
                          )
                        }
                      />
                      <label htmlFor="LossofMuscleCoordination">Other</label>
                      {LossofMuscleCoordinationOtherBoolean && (
                     
                        <AutoSize value={LossofMuscleCoordinationOtherType} setValue={setLossofMuscleCoordinationType} placeholder={"_______________"}/>

                      )}
                    </div>
                
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Mental Status Exam/Behavioral Observations:
                </h6>
                <h6 style={{ fontWeight: "bold" }}>General Appearance:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Apparent age</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="consistent"
                      checked={consistent}
                      onChange={() => setConsistent(!consistent)}
                    />
                    <label htmlFor="consistent">Consistent</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="Younger"
                      checked={younger}
                      onChange={() => setYounger(!younger)}
                    />
                    <label htmlFor="Younger">Younger</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="older"
                      checked={older}
                      onChange={() => setOlder(!older)}
                    />
                    <label htmlFor="older">Older</label>
                  </div>
                 
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={olderOtherBoolean}
                      onChange={() =>
                        setOlderOtherBoolean(!olderOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      olderOtherBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={olderOther}
                      onChange={(e) =>
                        setOlderOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Heigth</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="averageHeight"
                      checked={averageHeight}
                      onChange={() => setAverageHeight(!averageHeight)}
                    />
                    <label htmlFor="averageHeight">Average</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="short"
                      checked={short}
                      onChange={() => setShort(!short)}
                    />
                    <label htmlFor="short">Short</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="tall"
                      checked={tall}
                      onChange={() => setTall(!tall)}
                    />
                    <label htmlFor="tall">Tall</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={heigthBoolean}
                      onChange={() =>
                        setHeigthBoolean(!heigthBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      heigthBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={heigthOther}
                      onChange={(e) =>
                        setHeigthOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Weight</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="averageWeight"
                      checked={averageWeight}
                      onChange={() => setAverageWeight(!averageWeight)}
                    />
                    <label htmlFor="averageWeight">Average</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="obese"
                      checked={obese}
                      onChange={() => setObese(!obese)}
                    />
                    <label htmlFor="obese">Obese</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="overweight"
                      checked={overweight}
                      onChange={() => setOverweight(!overweight)}
                    />
                    <label htmlFor="overweight">Overweight</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="thin"
                      checked={thin}
                      onChange={() => setThin(!thin)}
                    />
                    <label htmlFor="thin">Thin</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="emaciated"
                      checked={emaciated}
                      onChange={() => setEmaciated(!emaciated)}
                    />
                    <label htmlFor="emaciated">Emaciated</label>
                  </div>
                   <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={WeightBoolean}
                      onChange={() =>
                        setWeightBoolean(!WeightBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      WeightBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={WeightOther}
                      onChange={(e) =>
                        setWeightOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Attire</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="casual"
                      checked={casual}
                      onChange={() => setCasual(!casual)}
                    />
                    <label htmlFor="casual">Casual</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="neat"
                      checked={neat}
                      onChange={() => setNeat(!neat)}
                    />
                    <label htmlFor="neat">Neat</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="tattered"
                      checked={tattered}
                      onChange={() => setTattered(!tattered)}
                    />
                    <label htmlFor="tattered">Tattered</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="dirty"
                      checked={dirty}
                      onChange={() => setDirty(!dirty)}
                    />
                    <label htmlFor="dirty">Dirty</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={attireBoolean}
                      onChange={() =>
                        setAttireBoolaen(!attireBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      attireBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={attireOther}
                      onChange={(e) =>
                        setAttireOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Grooming</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="casual"
                      checked={wellGroomed}
                      onChange={() => setWellGroomed(!wellGroomed)}
                    />
                    <label htmlFor="wellGroomed">Well-groomed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="adequateGrooming"
                      checked={adequateGrooming}
                      onChange={() => setAdequateGrooming(!adequateGrooming)}
                    />
                    <label htmlFor="adequateGrooming">Adequate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="unkempt"
                      checked={unkempt}
                      onChange={() => setUnkempt(!unkempt)}
                    />
                    <label htmlFor="unkempt">Unkempt</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="disheveled"
                      checked={disheveled}
                      onChange={() => setDisheveled(!disheveled)}
                    />
                    <label htmlFor="disheveled">Disheveled</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={GroomingBoolean}
                      onChange={() =>
                        setGroomingBoolean(!GroomingBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      GroomingBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={GroomingOther}
                      onChange={(e) =>
                        setGroomingOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Demeanor / Interaction:</h6>
              </div>

              <div className="box-image-container">
                <div className=" checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Mood</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="euthymic"
                      checked={euthymic}
                      onChange={() => setEuthymic(!euthymic)}
                    />
                    <label htmlFor="euthymic">Euthymic</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="irritable"
                      checked={irritable}
                      onChange={() => setIrritable(!irritable)}
                    />
                    <label htmlFor="irritable">Irritable</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="elevated"
                      checked={elevated}
                      onChange={() => setElevated(!elevated)}
                    />
                    <label htmlFor="elevated">Elevated</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="depressedMood"
                      checked={depressedMood}
                      onChange={() => setDepressedMood(!depressedMood)}
                    />
                    <label htmlFor="depressedMood">Depressed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="anxious"
                      checked={anxious}
                      onChange={() => setAnxious(!anxious)}
                    />
                    <label htmlFor="anxious">Anxious</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="euthymicOtherBoolean"
                      checked={euthymicOtherBoolean}
                      onChange={() =>
                        seteuthymicOtherBoolean(!euthymicOtherBoolean)
                      }
                    />
                    <label htmlFor="euthymicOtherBoolean">Other</label>
                    {euthymicOtherBoolean && (
                      <AutoSize value={euthymicOtherBooleanType} setValue={seteuthymicOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Affect</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="normalRange"
                      checked={normalRange}
                      onChange={() => setNormalRange(!normalRange)}
                    />
                    <label htmlFor="normalRange">Normal range</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="depressedAffect"
                      checked={depressedAffect}
                      onChange={() => setDepressedAffect(!depressedAffect)}
                    />
                    <label htmlFor="depressedAffect">Depressed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="labile"
                      checked={labile}
                      onChange={() => setLabile(!labile)}
                    />
                    <label htmlFor="labile">Labile</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="constricted"
                      checked={constricted}
                      onChange={() => setConstricted(!constricted)}
                    />
                    <label htmlFor="constricted">Constricted</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="other"
                      checked={other}
                      onChange={() => setOther(!other)}
                    />
                    <label htmlFor="other">Other</label>
                    {other && (
                  
                      <AutoSize value={otherText} setValue={setOtherText} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Eye Contact</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="appropriate"
                      checked={appropriate}
                      onChange={() => setAppropriate(!appropriate)}
                    />
                    <label htmlFor="appropriate">Appropriate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="minimal"
                      checked={minimal}
                      onChange={() => setMinimal(!minimal)}
                    />
                    <label htmlFor="minimal">Minimal</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="poor"
                      checked={poor}
                      onChange={() => setPoor(!poor)}
                    />
                    <label htmlFor="poor">Poor</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="adequateEyeContact"
                      checked={adequateEyeContact}
                      onChange={() =>
                        setAdequateEyeContact(!adequateEyeContact)
                      }
                    />
                    <label htmlFor="adequateEyeContact">Adequate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                     
                      checked={EyeContactOtherBoolean}
                      onChange={() =>
                        setEyeContactOtherBoolean(!EyeContactOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    {EyeContactOtherBoolean && (
                  
                      <AutoSize value={EyeContactOtherBooleanType} setValue={setEyeContactOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Cooperation</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="appropriateCooperation"
                      checked={appropriateCooperation}
                      onChange={() =>
                        setAppropriateCooperation(!appropriateCooperation)
                      }
                    />
                    <label htmlFor="appropriateCooperation">Appropriate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="hostile"
                      checked={hostile}
                      onChange={() => setHostile(!hostile)}
                    />
                    <label htmlFor="hostile">Hostile</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="evasive"
                      checked={evasive}
                      onChange={() => setEvasive(!evasive)}
                    />
                    <label htmlFor="evasive">Evasive</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="defensive"
                      checked={defensive}
                      onChange={() => setDefensive(!defensive)}
                    />
                    <label htmlFor="defensive">Defensive</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="indifferent"
                      checked={indifferent}
                      onChange={() => setIndifferent(!indifferent)}
                    />
                    <label htmlFor="indifferent">Indifferent</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                     
                      checked={CooperationOtherBoolean}
                      onChange={() =>
                        setCooperationOtherBoolean(!CooperationOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    {CooperationOtherBoolean && (
                 
                      <AutoSize value={CooperationOtherBooleanType} setValue={setCooperationOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Speech:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Articulation</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="normalArticulation"
                      checked={normalArticulation}
                      onChange={() =>
                        setNormalArticulation(!normalArticulation)
                      }
                    />
                    <label htmlFor="normalArticulation">Normal</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="unintelligible"
                      checked={unintelligible}
                      onChange={() => setUnintelligible(!unintelligible)}
                    />
                    <label htmlFor="unintelligible">Unintelligible</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="mumbled"
                      checked={mumbled}
                      onChange={() => setMumbled(!mumbled)}
                    />
                    <label htmlFor="mumbled">Mumbled</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="slurred"
                      checked={slurred}
                      onChange={() => setSlurred(!slurred)}
                    />
                    <label htmlFor="slurred">Slurred</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="stuttered"
                      checked={stuttered}
                      onChange={() => setStuttered(!stuttered)}
                    />
                    <label htmlFor="stuttered">Stuttered</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="ArticulationOtherBoolean"
                      checked={ArticulationOtherBoolean}
                      onChange={() =>
                        setArticulationOtherBoolean(!ArticulationOtherBoolean)
                      }
                    />
                    <label htmlFor="ArticulationOtherBoolean">Other</label>
                    {ArticulationOtherBoolean && (
                  
                      <AutoSize value={ArticulationOtherBooleanOther} setValue={setArticulationOtherBooleanOther} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                    <div class="checkboxitem">
                      <label>Tone</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalTone"
                        checked={normalRate}
                        onChange={() => setNormalRate(!normalRate)}
                      />
                      <label htmlFor="normalRate">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="soft"
                        checked={soft}
                        onChange={() => setSoft(!soft)}
                      />
                      <label htmlFor="soft">Soft</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="loud"
                        checked={loud}
                        onChange={() => setLoud(!loud)}
                      />
                      <label htmlFor="loud">Loud</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="pressured"
                        checked={pressured}
                        onChange={() => setPressured(!pressured)}
                      />
                      <label htmlFor="pressured">Pressured</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="ToneOtherBoolean"
                        checked={ToneOtherBoolean}
                        onChange={() => setToneOtherBoolean(!ToneOtherBoolean)}
                      />
                      <label htmlFor="ToneOtherBoolean">Other</label>
                      {ToneOtherBoolean && (
                  
                        <AutoSize value={ToneOtherBooleanOther} setValue={setToneOtherBooleanOther} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                  <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                   
                   <label>Rate</label>
                 </div>
                 <div class="checkboxitem">
                      <input type="checkbox" id="normalTone" checked={normalTone} onChange={() => setNormalTone(!normalTone)} />
                      <label htmlFor="normalTone">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="slow" checked={slow} onChange={() => setSlow(!slow)} />
                      <label htmlFor="slow">Slow</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="fast" checked={fast} onChange={() => setFast(!fast)} />
                      <label htmlFor="fast">Fast</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="RateOtherBoolean" checked={RateOtherBoolean} onChange={() => setRateOtherBoolean(!RateOtherBoolean)} />
                      <label htmlFor="RateOtherBoolean">Other</label>
                      {
                        RateOtherBoolean && 
                        <AutoSize value={RateOtherBooleanOther} setValue={setRateOtherBooleanOther} placeholder={"_______________"}/>
                      }

                    </div>

                  </div>
                  <div className="border-bootom-line "></div>
                    <div className="checkbox-table-parent">
                    <div class="checkboxitem">
                      <label>Quantity</label>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="normalQuantity" checked={normalQuantity} onChange={() => setNormalQuantity(!normalQuantity)} />
                      <label htmlFor="normalQuantity">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="verbose" checked={verbose} onChange={() => setVerbose(!verbose)} />
                      <label htmlFor="verbose">Verbose</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="mutism" checked={mutism} onChange={() => setMutism(!mutism)} />
                      <label htmlFor="mutism">Mutism</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="QuantityOtherBoolean" checked={QuantityOtherBoolean} onChange={() => setQuantityOtherBoolean(!QuantityOtherBoolean)} />
                      <label htmlFor="QuantityOtherBoolean">Other</label>
                      {
                        QuantityOtherBoolean && 
                        <AutoSize value={QuantityOtherBooleanOther} setValue={setQuantityOtherBooleanOther} placeholder={"_______________"}/>
                      }
                    </div>
                  </div>
                  <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                      <label>Response latency</label>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="normalresponseLatency" checked={normalresponseLatency} onChange={() => setNormalresponseLatency(!normalresponseLatency)} />
                      <label htmlFor="normalresponseLatency">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="delayed" checked={delayed} onChange={() => setDelayed(!delayed)} />
                      <label htmlFor="delayed">Delayed</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="shortened" checked={shortened} onChange={() => setShortened(!shortened)} />
                      <label htmlFor="shortened">Shortened</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="responseLatencyOtherBoolean" checked={responseLatencyOtherBoolean} onChange={() => setresponseLatencyOtherBoolean(!responseLatencyOtherBoolean)} />
                      <label htmlFor="responseLatencyOtherBoolean">Other</label>
                      {
                        responseLatencyOtherBoolean && 
                        <AutoSize value={responseLatencyOtherBooleanOther} setValue={setresponseLatencyOtherBooleanOther} placeholder={"_______________"}/>
                      }
                    </div>
                  </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Cognition:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                    
                    <label>Thought content</label>
                  </div>
                  <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="unremarkablethoughtContent"
                        checked={unremarkablethoughtContent}
                        onChange={() =>
                          setUnremarkablethoughtContent(
                            !unremarkablethoughtContent
                          )
                        }
                      />
                      <label htmlFor="unremarkablethoughtContent">
                        Unremarkable
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="suspicious"
                        checked={suspicious}
                        onChange={() => setSuspicious(!suspicious)}
                      />
                      <label htmlFor="suspicious">Suspicious</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="negative"
                        checked={negative}
                        onChange={() => setNegative(!negative)}
                      />
                      <label htmlFor="negative">Negative</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="concrete"
                        checked={concrete}
                        onChange={() => setConcrete(!concrete)}
                      />
                      <label htmlFor="concrete">Concrete</label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={thoughtContentBoolaen}
                        onChange={() =>
                          setthoughtContentBoolean(!thoughtContentBoolaen)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {thoughtContentBoolaen && (
                       
                        <AutoSize value={thoughtContentOther} setValue={setThoughtContentOther} placeholder={"_______________"}/>
                      )}
                    </div>

                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                 
                 <label>Thought processes</label>
               </div>
               <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="logicalCoherent"
                        checked={logicalCoherent}
                        onChange={() => setLogicalCoherent(!logicalCoherent)}
                      />
                      <label htmlFor="logicalCoherent">Logical /Coherent</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tangential"
                        checked={tangential}
                        onChange={() => setTangential(!tangential)}
                      />
                      <label htmlFor="tangential">Tangential</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="circumstantial"
                        checked={circumstantial}
                        onChange={() => setCircumstantial(!circumstantial)}
                      />
                      <label htmlFor="circumstantial">Circumstantial</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="vague"
                        checked={vague}
                        onChange={() => setVague(!vague)}
                      />
                      <label htmlFor="vague">Vague</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={thoughtProcessesBoolean}
                        onChange={() =>
                          setThoughtProcessesBoolaen(!thoughtProcessesBoolean)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {thoughtProcessesBoolean && (
                     
                        <AutoSize value={thoughtProcessesOther} setValue={setThoughtProcessesOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                
                <label>Delusions</label>
              </div>
              <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="noDelusions"
                        checked={noDelusions}
                        onChange={() => setNoDelusions(!noDelusions)}
                      />
                      <label htmlFor="noDelusions">No</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesPersecutory"
                        checked={yesPersecutory}
                        onChange={() => setYesPersecutory(!yesPersecutory)}
                      />
                      <label htmlFor="yesPersecutory">Yes, persecutory</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesSomatic"
                        checked={yesSomatic}
                        onChange={() => setYesSomatic(!yesSomatic)}
                      />
                      <label htmlFor="yesSomatic">Yes, somatic</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesGrandiose"
                        checked={yesGrandiose}
                        onChange={() => setYesGrandiose(!yesGrandiose)}
                      />
                      <label htmlFor="yesGrandiose">Yes, grandiose</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={yesOtherDelusionsBoolean}
                        onChange={() =>
                          setYesOtherDelusionsBoolean(!yesOtherDelusionsBoolean)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {yesOtherDelusionsBoolean && (
                      
                        <AutoSize value={yesOtherDelusionsText} setValue={setYesOtherDelusionsText} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                      <label>Hallucinations</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="unremarkableHallucinations"
                        checked={unremarkableHallucinations}
                        onChange={() =>
                          setUnremarkableHallucinations(
                            !unremarkableHallucinations
                          )
                        }
                      />
                      <label htmlFor="unremarkableHallucinations">
                        Unremarkable
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="visualHallucinations"
                        checked={visualHallucinations}
                        onChange={() =>
                          setVisualHallucinations(!visualHallucinations)
                        }
                      />
                      <label htmlFor="visualHallucinations">
                        Visual hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="auditoryHallucinations"
                        checked={auditoryHallucinations}
                        onChange={() =>
                          setAuditoryHallucinations(!auditoryHallucinations)
                        }
                      />
                      <label htmlFor="auditoryHallucinations">
                        Auditory hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tactileHallucinations"
                        checked={tactileHallucinations}
                        onChange={() =>
                          setTactileHallucinations(!tactileHallucinations)
                        }
                      />
                      <label htmlFor="tactileHallucinations">
                        Tactile hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherHallucinations"
                        checked={yesOtherHallucinationsBoolean}
                        onChange={() =>
                          setYesOtherHallucinationsBoolean(
                            !yesOtherHallucinationsBoolean
                          )
                        }
                      />
                      <label htmlFor="yesOtherHallucinations">Yes, other</label>
                      {yesOtherHallucinationsBoolean && (
                    
                        <AutoSize value={yesOtherHallucinationsText} setValue={setYesOtherHallucinationsText} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
              </div>
                  
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Motor activity:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
          
          <label>Gait</label>
        </div>
        <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalGait"
                        checked={normalGait}
                        onChange={() => setNormalGait(!normalGait)}
                      />
                      <label htmlFor="normalGait">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="staggering"
                        checked={staggering}
                        onChange={() => setStaggering(!staggering)}
                      />
                      <label htmlFor="staggering">Staggering</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="shuffling"
                        checked={shuffling}
                        onChange={() => setShuffling(!shuffling)}
                      />
                      <label htmlFor="shuffling">Shuffling</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="slowGait"
                        checked={slowGait}
                        onChange={() => setSlowGait(!slowGait)}
                      />
                      <label htmlFor="slowGait">Slow</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="awkward"
                        checked={awkward}
                        onChange={() => setAwkward(!awkward)}
                      />
                      <label htmlFor="awkward">Awkward</label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="gaitOtherBoolen"
                        checked={gaitOtherBoolen}
                        onChange={() =>
                          setGailOtherBoolen(
                            !gaitOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="gaitOtherBoolen">other</label>
                      {gaitOtherBoolen && (
                    
                        <AutoSize type="text" value={gaitOther} setValue={setgetOther} placeholder={"_______________"}/>
                      )}
                    </div>

                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
           
           <label>Posture</label>
         </div>
         <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalPosture"
                        checked={normalPosture}
                        onChange={() => setNormalPosture(!normalPosture)}
                      />
                      <label htmlFor="normalPosture">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="relaxed"
                        checked={relaxed}
                        onChange={() => setRelaxed(!relaxed)}
                      />
                      <label htmlFor="relaxed">Relaxed</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="rigid"
                        checked={rigid}
                        onChange={() => setRigid(!rigid)}
                      />
                      <label htmlFor="rigid">Rigid</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tense"
                        checked={tense}
                        onChange={() => setTense(!tense)}
                      />
                      <label htmlFor="tense">Tense</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="slouched"
                        checked={slouched}
                        onChange={() => setSlouched(!slouched)}
                      />
                      <label htmlFor="slouched">Slouched</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="PostureOtherBoolen"
                        checked={PostureOtherBoolen}
                        onChange={() =>
                          setgaitOtherBoolen(
                            !PostureOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="PostureOtherBoolen">other</label>
                      {PostureOtherBoolen && (
                    
                        <AutoSize type="text" value={PostureOther} setValue={setPostureOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line "></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
        
        <label>Psychomotor Activity</label>
      </div>
      <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="withinNormalLimits"
                        checked={withinNormalLimits}
                        onChange={() =>
                          setWithinNormalLimits(!withinNormalLimits)
                        }
                      />
                      <label htmlFor="withinNormalLimits">
                        Within normal limits
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="calm"
                        checked={calm}
                        onChange={() => setCalm(!calm)}
                      />
                      <label htmlFor="calm">Calm</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="hyperactive"
                        checked={hyperactive}
                        onChange={() => setHyperactive(!hyperactive)}
                      />
                      <label htmlFor="hyperactive">Hyperactive</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="agitated"
                        checked={agitated}
                        onChange={() => setAgitated(!agitated)}
                      />
                      <label htmlFor="agitated">Agitated</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="hypoactive"
                        checked={hypoactive}
                        onChange={() => setHypoactive(!hypoactive)}
                      />
                      <label htmlFor="hypoactive">Hypoactive</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="PsychomotorActivityOtherBoolen"
                        checked={PsychomotorActivityOtherBoolen}
                        onChange={() =>
                          setPsychomotorActivityOtherBoolen(
                            !PsychomotorActivityOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="PsychomotorActivityOtherBoolen">other</label>
                      {PsychomotorActivityOtherBoolen && (
                    
                        <AutoSize type="text" value={PsychomotorActivityOther} setValue={setPsychomotorActivityOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                      <label>Mannerisms</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="none"
                        checked={none}
                        onChange={() => setNone(!none)}
                      />
                      <label htmlFor="none">None</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tics"
                        checked={tics}
                        onChange={() => setTics(!tics)}
                      />
                      <label htmlFor="tics">Tics</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tremorsMannerisms"
                        checked={tremorsMannerisms}
                        onChange={() =>
                          setTremorsMannerisms(!tremorsMannerisms)
                        }
                      />
                      <label htmlFor="tremorsMannerisms">Tremors</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="rocking"
                        checked={rocking}
                        onChange={() => setRocking(!rocking)}
                      />
                      <label htmlFor="rocking">Rocking</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="picking"
                        checked={picking}
                        onChange={() => setPicking(!picking)}
                      />
                      <label htmlFor="picking">Picking</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherHallucinations"
                        checked={MannerismsOtherBoolen}
                        onChange={() =>
                          setMannerismsOtherBoolen(
                            !MannerismsOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="yesOtherHallucinations">other</label>
                      {MannerismsOtherBoolen && (
                    
                        <AutoSize type="text" value={MannerismsOther} setValue={setMannerismsOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
              </div>
           
              <div
                className="yeschechboxOrientation"
                style={{ marginTop: "1.5rem" }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label style={{ fontWeight: "bold" }}>
                    Orientation to Person:
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="person"
                      checked={person === true}
                      onChange={() => setPerson(true)}
                    />
                    <label htmlFor="person">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="personno"
                      checked={person === false}
                      onChange={() => setPerson(false)}
                    />
                    <label htmlFor="personno">No</label>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label>Place:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="place"
                      checked={place === true}
                      onChange={() => setPlace(true)}
                    />
                    <label htmlFor="place">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="placeno"
                      checked={place === false}
                      onChange={() => setPlace(false)}
                    />
                    <label htmlFor="placeno">No</label>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label htmlFor="">Time:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="placeno"
                      checked={time === true}
                      onChange={() => setTime(true)}
                    />
                    <label htmlFor="placeno">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="timeno"
                      checked={time === false}
                      onChange={() => setTime(false)}
                    />
                    <label htmlFor="timeno">No</label>
                  </div>
                </div>
             
              </div>

              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Circumstances:</label>

                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="circumstances"
                      checked={circumstances === true}
                      onChange={() => setCircumstances(true)}
                    />
                    <label htmlFor="circumstances">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="circumstancesno"
                      checked={circumstances === false}
                      onChange={() => setCircumstances(false)}
                    />
                    <label htmlFor="circumstancesno">No</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Judgment:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodJudgment"
                      checked={goodJudgment}
                      onChange={() => setGoodJudgment(!goodJudgment)}
                    />
                    <label htmlFor="goodJudgment">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairJudgment"
                      checked={fairJudgment}
                      onChange={() => setFairJudgment(!fairJudgment)}
                    />
                    <label htmlFor="fairJudgment">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorJudgment"
                      checked={poorJudgment}
                      onChange={() => setPoorJudgment(!poorJudgment)}
                    />
                    <label htmlFor="poorJudgment">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Insight:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodInsight"
                      checked={goodInsight}
                      onChange={() => setGoodInsight(!goodInsight)}
                    />
                    <label htmlFor="goodInsight">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairInsight"
                      checked={fairInsight}
                      onChange={() => setFairInsight(!fairInsight)}
                    />
                    <label htmlFor="fairInsight">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorInsight"
                      checked={poorInsight}
                      onChange={() => setPoorInsight(!poorInsight)}
                    />
                    <label htmlFor="poorInsight">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Memory:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodMemory"
                      checked={goodMemory}
                      onChange={() => setGoodMemory(!goodMemory)}
                    />
                    <label htmlFor="goodMemory">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairMemory"
                      checked={fairMemory}
                      onChange={() => setFairMemory(!fairMemory)}
                    />
                    <label htmlFor="fairMemory">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorMemory"
                      checked={poorMemory}
                      onChange={() => setPoorMemory(!poorMemory)}
                    />
                    <label htmlFor="poorMemory">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ fontWeight: "bold" }}>
                    Ability to concentration:
                  </label>

                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      id="intact"
                      checked={intactAbilityToConcentration}
                      onChange={() =>
                        setIntactAbilityToConcentration(
                          !intactAbilityToConcentration
                        )
                      }
                    />
                    <label htmlFor="intact">Intact</label>
                  </div>
                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      id="intact"
                      checked={intactAbilityToConcentrationOtherBoolean}
                      onChange={() =>
                        setIntactAbilityToConcentrationOtherBoolean(
                          !intactAbilityToConcentrationOtherBoolean
                        )
                      }
                    />
                    <label htmlFor="intact">Other</label>
                    {intactAbilityToConcentrationOtherBoolean && (
                 
                      <AutoSize value={otherAbilityToConcentration} setValue={setOtherAbilityToConcentration} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
              </div>

          
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Significant Social/Developmental History:</h6>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Childhood (include parents, siblings, family):</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={significantSocialDevelopmentalHistory}
                    placeholder="Enter "
                    required
                    onChange={(e) =>
                      setSignificantSocialDevelopmentalHistory(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Educational history:</h6>
              </div>

           

              <div className="form-field-update">
                <div className="form-field-child">
                  <label>Highest level of education:</label>
                  <input
                    type="text"
                    value={highestEducation}
                    placeholder="Enter education"
                    required
                    onChange={(e) => setHighestEducation(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label
                    htmlFor=""
                    style={{ marginTop: "1rem", fontWeight: "bold" }}
                  >
                    Special education:
                  </label>
                  <div
                    className="employment-Aligmant"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={specialEducation === true}
                        onChange={() => setSpecialEducation(true)}
                      />
                      <label>Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={specialEducation === false}
                        onChange={() => setSpecialEducation(false)}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label style={{ fontWeight: "bold" }}>
                    Currently a student?
                  </label>
                  <div className="employment-Aligmant">
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={currentStudent === true}
                        onChange={() => setCurrentStudent(true)}
                      />
                      <label>Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        checked={currentStudent === false}
                        onChange={() => setCurrentStudent(false)}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
                <div className="form-field-child">
                  <label>If yes, where?</label>
                  <input
                    type="text"
                    value={ifYesWhere}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setIfYesWhere(e.target.value)}
                  />
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Employment history:</h6>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label style={{ fontWeight: "bold" }}>
                    Currently employed:
                  </label>
                  <div className="employment-Aligmant">
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        id="currentlyEmployed"
                        checked={currentlyEmployed === true}
                        onChange={() => setCurrentlyEmployed(true)}
                      />
                      <label htmlFor="currentlyEmployed">Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        id="currentlyEmployedno"
                        checked={currentlyEmployed === false}
                        onChange={() => setCurrentlyEmployed(false)}
                      />
                      <label htmlFor="currentlyEmployedno">No</label>
                    </div>
                  </div>
                </div>
               
                <div className="form-field-child">
                  <label >
                    If employed, where? FT or PT?:
                  </label>
                  <input
                    type="text"
                    required
                    value={employmentLocation}
                    placeholder="Enter text"
                    
                    onChange={(e) => setEmploymentLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Work History (and barriers to employment):</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    value={workHistory}
                    onChange={(e) => setWorkHistory(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label style={{ fontWeight: "bold" }}>
                      Military History:
                    </label>
                    <div className="yesNoAligment">
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="militaryService"
                          checked={militaryService === true}
                          onChange={() => setMilitaryService(true)}
                        />
                        <label htmlFor="militaryService">Yes</label>
                      </div>
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="militaryServiceno"
                          checked={militaryService === false}
                          onChange={() => setMilitaryService(false)}
                        />
                        <label htmlFor="militaryServiceno">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-field-child">
                    <label style={{ fontWeight: "bold" }}>
                      Currently on active duty?
                    </label>
                    <div className="yesNoAligment">
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="activeDuty"
                          checked={activeDuty === true}
                          onChange={() => setActiveDuty(true)}
                        />
                        <label htmlFor="activeDuty">Yes</label>
                      </div>
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="activeDutyno"
                          checked={activeDuty === false}
                          onChange={() => setActiveDuty(false)}
                        />
                        <label htmlFor="activeDutyno">No</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update-bold">
                  <label>Criminal Justice Legal History:</label>
                  <Select
                    isMulti
                    value={selectedValue}
                    onChange={selectedValueHandler}
                    options={selectedValueOption}
                    isCreatable={true}
                    onKeyDown={handleKeyDownSelectedValue}
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Current Independent Living Skills:
                </h6>
              </div>

             
              <div className="needs-interventions-container table-respnosive">
                <div className="needs-interventions-column3">
                  <table>
                    <thead>
                      <tr>
                        <th>Type of Activity</th>
                        <th>Good</th>
                        <th>Fair</th>
                        <th>Not so good</th>
                        <th>Need assist</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bathing/Showering</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingGood === true}
                            onChange={() => setBathingGood(!BathingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingFair === true}
                            onChange={() => setBathingFair(!BathingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingNotSoGood === true}
                            onChange={() =>
                              setBathingNotSoGood(!BathingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={BathingGoodNeedAssist}
                            onChange={(e) =>
                              setBathingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              BathingComments
                                ? BathingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={BathingComments || ""}
                            placeholder="___________"
                            onChange={(e) => setBathingComments(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setBathingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Grooming/hygiene</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingGood === true}
                            onChange={() => setGroomingGood(!GroomingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingFair === true}
                            onChange={() => setGroomingFair(!GroomingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingNotSoGood === true}
                            onChange={() =>
                              setGroomingNotSoGood(!GroomingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={GroomingGoodNeedAssist}
                            onChange={(e) =>
                              setGroomingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              GroomingComments
                                ? GroomingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={GroomingComments || ""}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setGroomingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setGroomingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Mobility</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityGood === true}
                            onChange={() => setMobilityGood(!MobilityGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityFair === true}
                            onChange={() => setMobilityFair(!MobilityFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityNotSoGood === true}
                            onChange={() =>
                              setMobilityNotSoGood(!MobilityNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={MobilityGoodNeedAssist}
                            onChange={(e) =>
                              setMobilityGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              MobilityComments
                                ? MobilityComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={MobilityComments || ""}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setMobilityComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setMobilityComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Housework</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkGood === true}
                            onChange={() => setHouseworkGood(!HouseworkGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkFair === true}
                            onChange={() => setHouseworkFair(!HouseworkFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkNotSoGood === true}
                            onChange={() =>
                              setHouseworkNotSoGood(!HouseworkNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={HouseworkGoodNeedAssist}
                            onChange={(e) =>
                              setHouseworkGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              HouseworkComments
                                ? HouseworkComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={HouseworkComments || ""}
                          
                            placeholder="___________"
                            onChange={(e) =>
                              setHouseworkComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setHouseworkComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Shopping</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingGood === true}
                            onChange={() => setShoppingGood(!ShoppingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingFair === true}
                            onChange={() => setShoppingFair(!ShoppingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingNotSoGood === true}
                            onChange={() =>
                              setShoppingNotSoGood(!ShoppingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ShoppingGoodNeedAssist}
                            onChange={(e) =>
                              setShoppingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ShoppingComments
                                ? ShoppingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ShoppingComments || ""}
              
                            placeholder="___________"
                            onChange={(e) =>
                              setShoppingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setShoppingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Managing money/budget</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingGood === true}
                            onChange={() => setManagingGood(!ManagingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingFair === true}
                            onChange={() => setManagingFair(!ManagingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingNotSoGood === true}
                            onChange={() =>
                              setManagingNotSoGood(!ManagingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ManagingGoodNeedAssist}
                            onChange={(e) =>
                              setManagingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ManagingComments
                                ? ManagingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ManagingComments || ""}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setManagingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setManagingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Preparing food</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingGood === true}
                            onChange={() => setPreparingGood(!PreparingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingFair === true}
                            onChange={() => setPreparingFair(!PreparingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingNotSoGood === true}
                            onChange={() =>
                              setPreparingNotSoGood(!PreparingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={PreparingGoodNeedAssist}
                            onChange={(e) =>
                              setPreparingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              PreparingComments
                                ? PreparingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={PreparingComments || ""}
                    
                            placeholder="___________"
                            onChange={(e) =>
                              setPreparingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPreparingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Eating</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingGood === true}
                            onChange={() => setEatingGood(!EatingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingFair === true}
                            onChange={() => setEatingFair(!EatingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingNotSoGood === true}
                            onChange={() =>
                              setEatingNotSoGood(!EatingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={EatingGoodNeedAssist}
                            onChange={(e) =>
                              setEatingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              EatingComments
                                ?  EatingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ EatingComments || ""}
                    
                      
                            placeholder="___________"
                            onChange={(e) => setEatingComments(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setEatingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Toileting</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingGood === true}
                            onChange={() => setToiletingGood(!ToiletingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingFair === true}
                            onChange={() => setToiletingFair(!ToiletingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingNotSoGood === true}
                            onChange={() =>
                              setToiletingNotSoGood(!ToiletingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ToiletingGoodNeedAssist}
                            onChange={(e) =>
                              setToiletingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ToiletingComments
                                ?  ToiletingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ ToiletingComments || ""}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setToiletingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setToiletingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      {handleRiskFactorActivityArray?.map((i, index) => (
                        <tr key={index}>
                          <td>Other: {i?.type}</td>

                          <td>
                            <input type="checkbox" checked={i.good === true} />
                          </td>
                          <td>
                            <input type="checkbox" checked={i.fair === true} />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={i.otherCurrentNotSoGood === true}
                            />
                          </td>
                          <td>
                            {` ${i.needAssist === true ? "Yes" : "No"}`}{" "}
                          </td>
                          <td> {i.comments} </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          Other:{" "}
                          <input
                            type="text"
                            placeholder="___________"
                            className="treatment_plan_table"
                            value={otherCurrentOther}
                            onChange={(e) =>
                              setOtherCurrentOther(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentGood}
                            onChange={(e) =>
                              setOtherCurrentGood(!otherCurrentGood)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentFair}
                            onChange={(e) =>
                              setOtherCurrentFair(!otherCurrentFair)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentNotSoGood}
                            onChange={(e) =>
                              setOtherCurrentNotSoGood(!otherCurrentNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={otherCurrentNeed}
                            onChange={(e) =>
                              setOtherCurrentNeed(e.target.value)
                            }
                          >
                            <option>Select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              otherCurrentComment
                                ?  otherCurrentComment.split("\n").length
                                : 1,
                              1
                            )}
                            value={ otherCurrentComment || ""}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setOtherCurrentComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherCurrentComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleRiskFactorActivity}
                >
                  Add
                </button>
              </div>


              <div className="box-image-container">
                <div className="form-field-single-update ">
                  <label>Behavioral Triggers:</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    
                    value={triggers}
                    onChange={(e) => setTriggers(e.target.value)}
                  />
                </div>
                <div
                  className="yeschechboxFall-risk"
                  style={{ marginTop: "0.5rem", marginLeft: "10px" }}
                >
                  <label htmlFor="">Fall risk:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fallRisk"
                      checked={fallRisk === true}
                      onChange={() => setFallRisk(true)}
                    />
                    <label htmlFor="fallRisk">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fallRiskno"
                      checked={fallRisk === false}
                      onChange={() => setFallRisk(false)}
                    />
                    <label htmlFor="fallRiskno">No</label>
                  </div>
                </div>
                <div className="form-field-single-update">
                  <label>If yes please explain:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={fallRiskExplanation}
                    placeholder="Enter text"
                    
                    onChange={(e) => setFallRiskExplanation(e.target.value)}
                  />
                </div>
                <div className="form-field-single-update">
                  <label htmlFor="programlocation&address">
                    Hobbies/Leisure Activities:
                  </label>

                  <input
                    type="text"
                    id="approvedby"
                    value={hobbiesLeisureActivities}
                    placeholder="Enter text"
                    
                    onChange={(e) =>
                      setHobbiesLeisureActivities(e.target.value)
                    }
                  />
                </div>
                <div className="form-field-single-update-bold ">
                  <label>Medical Equipment:</label>

                  <Select
                    value={selectedValueMedical}
                    isMulti
                    onChange={selectedValueMedicalHandler}
                    options={selectedValueMedicalOption}
                    isCreatable={true}
                    onKeyDown={handleKeySelectedValueMedical}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold ">
                  <label htmlFor="reasonadmission">Special Precautions:</label>
                  <Select
                    value={selectedValueSpecialPrecautions}
                    isMulti
                    onChange={selectedValueSpecialPrecautionsHandler}
                    options={selectedValueSpecialPrecautionsOption}
                    isCreatable={true}
                    onKeyDown={handleKeySelectedValueSpecialPrecautions}
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Safety and Risk Assessment
                </h6>
              </div>
              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>
                  Are you currently thinking about harming yourself or
                  committing suicide?
                </label>
                <div
                  className="riskAndSafityAligment"
                  style={{ paddingLeft: "15px" }}
                >
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingSelf"
                      checked={currentThoughtsOfHarmingSelf === true}
                      onChange={() => setCurrentThoughtsOfHarmingSelf(true)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingSelfno"
                      checked={currentThoughtsOfHarmingSelf === false}
                      onChange={() => setCurrentThoughtsOfHarmingSelf(false)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingSelfno">No</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>Ideation</label>

                <div className="employment-Aligmant-location">
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Fleeting"}
                      onChange={()=>setSuicidalIdeation("Fleeting")}
                    />
                    <label>Fleeting</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Periodic"}
                      onChange={()=>setSuicidalIdeation("Periodic")}
                    />
                    <label>Periodic</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Constant"}
                      onChange={()=>setSuicidalIdeation("Constant")}
                    />
                    <label>Constant</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="N/A"}
                      onChange={()=>setSuicidalIdeation("N/A")}
                    />
                    <label>N/A</label>
                  </div>
                </div>
              </div>

              <div className="increasingClass">
                <label style={{ fontWeight: "bold" }}>Increasing in:</label>

                <div className="increasingClassInternal">
                  <div className="yeschechbox1">
                    <div>
                      <label>Urgency:</label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="suicidalIdeationUrgency"
                        checked={suicidalIdeationUrgency === true}
                        onChange={() => setSuicidalIdeationUrgency(true)}
                      />
                      <label htmlFor="suicidalIdeationUrgency">Yes</label>
                    </div>
                    <div className="increasingClassInternal-child-no">
                      <input
                        type="checkbox"
                        id="suicidalIdeationUrgencyno"
                        checked={suicidalIdeationUrgency === false}
                        onChange={() => setSuicidalIdeationUrgency(false)}
                      />
                      <label htmlFor="suicidalIdeationUrgencyno">NO</label>
                    </div>
                  </div>

                  <div className="yeschechbox1" style={{ marginLeft: "3rem" }}>
                    <label>Severity:</label>
                    <div
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="currentThoughtsOfHarmingSelf"
                        checked={suicidalIdeationSeverity === true}
                        onChange={() => setSuicidalIdeationSeverity(true)}
                      />
                      <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
                    </div>
                    <div className="increasingClassInternal-child-no">
                      <input
                        type="checkbox"
                        id="suicidalIdeationSeverityno"
                        checked={suicidalIdeationSeverity === false}
                        onChange={() => setSuicidalIdeationSeverity(false)}
                      />
                      <label htmlFor="suicidalIdeationSeverityno">No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>
                  Are you currently thinking about harming others or have
                  homicidal thoughts?
                </label>

                <div className="safetyRiskLast">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingOthers"
                      checked={currentThoughtsOfHarmingOthers === true}
                      onChange={() => setCurrentThoughtsOfHarmingOthers(true)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingOthers">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingOthersno"
                      checked={currentThoughtsOfHarmingOthers === false}
                      onChange={() => setCurrentThoughtsOfHarmingOthers(false)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingOthersno">No</label>
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Risk Factors:</h6>
              </div>

              <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  <table>
                    <thead>
                      <tr>
                        <th>Select risk factors that apply</th>
                        <th>Yes</th>
                        <th>No</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Current suicidal ideation </td>
                        <td>
                          <input type="checkbox"  checked={riskYesNo === true}
                      onChange={() => setRiskYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  checked={riskYesNo === false}
                      onChange={() => setRiskYesNo(false)} />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={riskComment}
                            onChange={(e)=>{setRiskComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Prior suicide attempt</td>
                        <td>
                          <input type="checkbox" checked={PriorYesNo === true}
                      onChange={() => setPriorYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={PriorYesNo === false}
                      onChange={() => setPriorYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={PriorComment}
                            onChange={(e)=>{setPriorComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Access to means (i.e. weapon)</td>
                        <td>
                          <input type="checkbox" 
                          checked={AccessYesNo === true}
                          onChange={() => setAccessYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={AccessYesNo === false}
                      onChange={() => setAccessYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={AccessComment}
                            onChange={(e)=>{setAccessComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Substance abuse</td>
                        <td>
                          <input type="checkbox" 
                          checked={SubstanceYesNo === true}
                          onChange={() => setSubstanceYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SubstanceYesNo === false}
                          onChange={() => setSubstanceYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={SubstanceAbuseComment}
                            onChange={(e)=>{setSubstanceCommentAbuse(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Other self-abusing behavior</td>
                        <td>
                          <input type="checkbox" 
                          checked={abusingYesNo === true}
                          onChange={() => setabusingYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={abusingYesNo === false}
                          onChange={() => setabusingYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={abusingComment}
                            onChange={(e)=>{setabusingComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Recent losses/lack of support</td>
                        <td>
                          <input type="checkbox" 
                          checked={RecentYesNo === true}
                          onChange={() => setRecentYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={RecentYesNo === false}
                          onChange={() => setRecentYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={RecentComment}
                            onChange={(e)=>{setRecentComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Behavior cues</td>
                        <td>
                          <input type="checkbox" 
                          checked={behaviourYesNO === true}
                          onChange={() => setBehaviourYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={behaviourYesNO === false}
                          onChange={() => setBehaviourYesNo(false)}/>
                        </td>
                        <td>
                     
                          <Select
                            value={behaviorcuesDropDown}
                            isMulti
                            options={selectedValueRiskFactorsOption1}
                            onChange={
                              selectedValueRiskFactorsHandlerBehaviorcues
                            }
                            isCreatable={true}
                            onKeyDown={
                              handleKeySelectedValueRiskFactorsBehavior
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Symptoms of psychosis </td>
                        <td>
                          <input type="checkbox" 
                          checked={SymptomsYesNO === true}
                          onChange={() => setSymptomsYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SymptomsYesNO === false}
                          onChange={() => setSymptomsYesNo(false)}/>
                        </td>
                        <td>
                          
                          <Select
                            value={symptomsOfPsychosisDropDown}
                            isMulti
                            options={selectedValueRiskFactorsOption2}
                            onChange={selectedValueRiskFactorsHandlerSymptoms}
                            isCreatable={true}
                            onKeyDown={
                              handleKeySelectedValueRiskFactorsSymptoms
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Family history of suicide</td>
                        <td>
                          <input type="checkbox"
                         checked={FamilyYesNO === true}
                          onChange={() => setFamilyYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={FamilyYesNO === false}
                          onChange={() => setFamilyYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Family}
                            onChange={(e)=>{setFamily(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Terminal physical illness</td>
                        <td>
                          <input type="checkbox" 
                          checked={TerminalYesNO === true}
                          onChange={() => setTerminalYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={TerminalYesNO === false}
                          onChange={() => setTerminalYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Terminal}
                            onChange={(e)=>{setTerminal(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Current stressors (specify)</td>
                        <td>
                          <input type="checkbox" 
                          checked={CurrentYesNO === true}
                          onChange={() => setCurrentYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={CurrentYesNO === false}
                          onChange={() => setCurrentYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Current}
                            onChange={(e)=>{setCurrent(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Chronic pain</td>
                        <td>
                          <input type="checkbox" 
                          checked={ChronicYesNO === true}
                          onChange={() => setChronicYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={ChronicYesNO === false}
                          onChange={() => setChronicYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={ChronicPain}
                            onChange={(e)=>{setChronicPain(e.target.value)}}
                          />
                        </td>
                      </tr>
                      {riskFactorArray.length > 0 && (
                  
                        riskFactorArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              {i.type}
                            </td>
                            <td><input type="checkbox" checked={i.yesNo===true}/></td>
                            <td><input type="checkbox" checked={i.yesNo===false}/></td>
                            <td>{` ${i.comment}`} </td>
                          </tr>
                        ))
                   
                  )}
                      <tr>
                        <td>Other: 
                          <input
                          type="text"
                          value={otherRiskOther}
                          placeholder="__________"
                          className="treatment_plan_table"
                          onChange={(e)=>setOtherRiskOther(e.target.value)}/> </td>
                        <td>
                          <input type="checkbox" checked={otherRiskYesOrNot===true} onChange={()=>setOtherRiskOtherYesOrNot(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={otherRiskYesOrNot===false} onChange={()=>setOtherRiskOtherYesOrNot(false)} />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="____________"
                            value={otherRiskComment}
                            onChange={(e)=>setOtherRiskComment(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                 <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleRiskFactor}
                >
                  Add
                </button>
              </div>


              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Protective factors:</h6>
              </div>

              <div className="needs-interventions-container2 table-respnosive">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <tr>
                        <th>Protective factors that apply</th>
                        <th>Yes</th>
                        <th>No</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Supports available (family friends)</td>
                        <td>
                          <input type="checkbox" 
                          checked={SupportsYesNo === true}
                          onChange={() => setSupportsYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SupportsYesNo === false}
                          onChange={() => setSupportsYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={SupportsComment}
                            onChange={(e)=>{setSupportsComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Spiritual / religious support</td>
                        <td>
                          <input type="checkbox" 
                          checked={SpiritualYesNo === true}
                          onChange={() => setSpiritualYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SpiritualYesNo === false}
                          onChange={() => setSpiritualYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={SpiritualComment}
                            onChange={(e)=>{setSpiritualComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Religious/cultural prohibitions</td>
                        <td>
                          <input type="checkbox" 
                           checked={ReligiousYesNo === true}
                           onChange={() => setReligiousYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                           checked={ReligiousYesNo === false}
                           onChange={() => setReligiousYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={ReligiousComment}
                            onChange={(e)=>{setReligiousComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Fear of consequences</td>
                        <td>
                          <input type="checkbox" 
                          checked={FearYesNo === true}
                          onChange={() => setFearYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={FearYesNo === false}
                          onChange={() => setFearYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={FearComment}
                            onChange={(e)=>{setFearComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Able to be engaged in intervention</td>
                        <td>
                          <input type="checkbox" 
                          checked={interventionYesNo === true}
                          onChange={() => setInterventionYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={interventionYesNo === false}
                          onChange={() => setInterventionYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={interventionComment}
                            onChange={(e)=>{setInterventionComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Willing to commit to keeping self safe</td>
                        <td>
                          <input type="checkbox"  
                          checked={WillingYesNo === true}
                          onChange={() => setWillingYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  
                          checked={WillingYesNo === false}
                          onChange={() => setWillingYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={WillingComment}
                            onChange={(e)=>{setWillingComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                       {protectiveFactorsArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              {i?.type}
                            </td>
                           <td><input type="checkbox" checked={i.yesNo===true}/></td>
                           <td><input type="checkbox" checked={i.yesNo===false}/></td>
                            <td>{` ${i.comment}`} </td>
                          </tr>
                        ))} 
                           <tr>
                        <td>Other: <input type="text" 
                        className="treatment_plan_table"
                        placeholder="__________"
                        value={otherProtectiveFactorsApply} onChange={(e)=>setOtherProtectiveFactorsApply(e.target.value)}/></td>
                        <td>
                          <input type="checkbox" checked={otherProtectiveFactorsYesNo===true} onChange={()=>setOtherProtectiveFactorsYesNO(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  checked={otherProtectiveFactorsYesNo===false} onChange={()=>setOtherProtectiveFactorsYesNO(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={otherProtectiveFactorsDescription}
                            onChange={(e)=>setOtherProtectiveFactorsDescription(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleProtectiveFactors}
                >
                  Add
                </button>
              </div>

           

              <div className="formsheading">
                <p>
                  Considering the responses to the above risk factors in
                  combination with all the other information you know about the
                  person (gender, age, diagnosis, balancing factors-resiliency
                  and supports, would you rate the level of risk for this person
                  for danger to self (DTS) as:
                </p>
              </div>
              <div className="yeschechbox_select-4">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "No Risk"}
                    onChange={() => setRiskLevel("No Risk")}
                  />
                  <label>No Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "Low Risk"}
                    onChange={() => setRiskLevel("Low Risk")}
                  />
                  <label>Low Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "Moderate Risk"}
                    onChange={() => setRiskLevel("Moderate Risk")}
                  />
                  <label>Moderate Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "High Risk"}
                    onChange={() => setRiskLevel("High Risk")}
                  />
                  <label>High Risk</label>
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Diagnoses:</h6>
              </div>
             

            

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th>Psychiatric Diagnoses</th>
                      <th>ICD Code</th>
                      <th>Description</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary*</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricPrimaryIcdCode}
                            onChange={(e)=>setPsychiatricPrimaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricPrimaryDescription
                                ? psychiatricPrimaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricPrimaryDescription || ""}
                        
                            placeholder="___________"
                            onChange={(e) => setPsychiatricPrimaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricPrimaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricSecondaryicdCode}
                            onChange={(e)=>setPsychiatricSecondaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricSecondaryDescription
                                ? psychiatricSecondaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricSecondaryDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setPsychiatricSecondaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricSecondaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tertiary</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricTertiaryIcdCode}
                            onChange={(e)=>setPsychiatricTertiaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricTertiaryDescription
                                ? psychiatricTertiaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricTertiaryDescription || ""}
                            
                            placeholder="___________"
                            onChange={(e) => setPsychiatricTertiaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricTertiaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Additional</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricAdditionalicdCode}
                            onChange={(e)=>setPsychiatricAdditionalIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricAdditionalDescription
                                ? psychiatricAdditionalDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricAdditionalDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setPsychiatricAdditionalDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricAdditionalDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                     
                        {
                          psychiatricDiagnosesArray.map((i)=>
                          <tr>
                            <td>{i?.name}</td>
                            <td>{i?.icdCode}</td>
                            <td>{i?.description}</td>
                            
                          </tr>)
                        }
                  
                      <tr>
                        <td>Other: <input
                        className="treatment_plan_table"
                        type="text"
                        value={otherPsychiatricOption}
                        placeholder="__________"
                        onChange={(e)=>setOtherPsychiatricOption(e.target.value)}
                        /></td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={othericdCode}
                            onChange={(e)=>setOtherIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              otherdescription.split("\n").length,
                              1
                            )}
                            value={otherdescription}
                            placeholder="___________"
                            onChange={(e) => setOtherDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handlePsychiatricDiagnoses}
                >
                  Add
                </button>
              </div>
           

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Medical Diagnoses:</h6>
              </div>

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th>Medical Diagnoses</th>
                      <th>ICD Code</th>
                      <th>Description</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary*</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={primaryIcdCode}
                            onChange={(e)=>setPrimaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              primaryDescription
                                ? primaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={primaryDescription || ""}
                          
                            placeholder="___________"
                            onChange={(e) => setPrimaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPrimaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={secondaryicdCode}
                            onChange={(e)=>setSecondaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              secondaryDescription
                                ? secondaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={secondaryDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setSecondaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSecondaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tertiary</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={TertiaryIcdCode}
                            onChange={(e)=>setTertiaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              TertiaryDescription
                                ? TertiaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={TertiaryDescription || ""}
                      
                            placeholder="___________"
                            onChange={(e) => setTertiaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setTertiaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Additional</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={Additional1icdCode}
                            onChange={(e)=>setAdditional1IcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              Additional1Description
                                ? Additional1Description.split("\n").length
                                : 1,
                              1
                            )}
                            value={Additional1Description || ""}
                         
                            placeholder="___________"
                            onChange={(e) => setAdditional1Description(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAdditional1Description(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      
                      {
                          medicalDiagnosesArray.map((i)=>
                          <tr>
                            <td>{i?.name}</td>
                            <td>{i?.icdCode}</td>
                            <td>{i?.description}</td>
                            
                          </tr>)
                        }
                  
                      <tr>
                        <td>Other: <input
                        className="treatment_plan_table"
                        type="text"
                        value={OtherMedicalOption}
                        placeholder="__________"
                        onChange={(e)=>setOtherMedicalOption(e.target.value)}
                        /></td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={OthericdCodeMedicalDiagnoses}
                            onChange={(e)=>setOtherIcdCodeMedicalDiagnoses(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              OtherdescriptionMedicalDiagnoses.split("\n").length,
                              1
                            )}
                            value={OtherdescriptionMedicalDiagnoses}
                            placeholder="___________"
                            onChange={(e) => setOtherDescriptionMedicalDiagnoses(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherDescriptionMedicalDiagnoses(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                 <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleMedicalDiagnoses}
                >
                  Add
                </button>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Psychosocial or Environmental Stressors
                </h6>
                <h6 style={{ fontWeight: "bold" }}>
                  Problems with / related to:
                </h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12-aligment4">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="primarySupportGroup"
                        checked={primarySupportGroup}
                        onChange={() =>
                          setPrimarySupportGroup(!primarySupportGroup)
                        }
                      />
                      <label htmlFor="primarySupportGroup">
                        Primary Support Group
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="educationalProblems"
                        checked={educationalProblems}
                        onChange={() =>
                          setEducationalProblems(!educationalProblems)
                        }
                      />
                      <label htmlFor="educationalProblems">
                        Educational problems
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="occupationalProblems"
                        checked={occupationalProblems}
                        onChange={() =>
                          setOccupationalProblems(!occupationalProblems)
                        }
                      />
                      <label htmlFor="occupationalProblems">
                        Occupational problems
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="sexualProblems"
                        checked={sexualProblems}
                        onChange={() => setSexualProblems(!sexualProblems)}
                      />
                      <label htmlFor="sexualProblems">Sexual problems</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="maritalProblems"
                        checked={maritalProblems}
                        onChange={() => setMaritalProblems(!maritalProblems)}
                      />
                      <label htmlFor="maritalProblems">Marital problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="housingProblems"
                        checked={housingProblems}
                        onChange={() => setHousingProblems(!housingProblems)}
                      />
                      <label htmlFor="housingProblems">Housing problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="interactionWithLegalSystem"
                        checked={interactionWithLegalSystem}
                        onChange={() =>
                          setInteractionWithLegalSystem(
                            !interactionWithLegalSystem
                          )
                        }
                      />
                      <label htmlFor="interactionWithLegalSystem">
                        Interaction with legal system
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="otherBoolean"
                        checked={otherBoolean}
                        onChange={() => setOtherBoolean(!otherBoolean)}
                      />
                      <label htmlFor="otherBoolean">
                        Other (please specify)
                      </label>
                      {otherBoolean && (
                    
                        <AutoSize value={otherStressors} setValue={setOtherStressors} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="accessToHealthCareServices"
                        checked={accessToHealthCareServices}
                        onChange={() =>
                          setAccessToHealthCareServices(
                            !accessToHealthCareServices
                          )
                        }
                      />
                      <label htmlFor="accessToHealthCareServices">
                        Access to health care services
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="familyProblems"
                        checked={familyProblems}
                        onChange={() => setFamilyProblems(!familyProblems)}
                      />
                      <label htmlFor="familyProblems">Family problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="substanceUseInHome"
                        checked={substanceUseInHome}
                        onChange={() =>
                          setSubstanceUseInHome(!substanceUseInHome)
                        }
                      />
                      <label htmlFor="substanceUseInHome">
                        Substance use in home
                      </label>
                    </div>
                    <div class="checkboxitem"></div>
                  </div>
                </div>
              </div>

              <div className="yeschechbox-significant">
                
                <div className="Significant-losses">
                <label style={{ fontWeight: "bold" }}>
                  Significant recent losses:
                </label>
                  <input
                    type="checkbox"
                    id="setSetNoAndYes"
                    checked={setNoAndYes === true}
                    onChange={() => setSetNoAndYes(true)}
                  />
                  <label htmlFor="setSetNoAndYes">Yes</label>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="setSetNoAndYesno"
                    checked={setNoAndYes === false}
                    onChange={() => setSetNoAndYes(false)}
                  />
                  <label htmlFor="setSetNoAndYesno">No</label>
                  <label style={{ paddingLeft: "10px", marginBottom: "6px" }}>
                    If yes, please check applicable loss(es):
                  </label>
                </div>
              </div>

              <div className="formsheading">
           
              </div>
              <div class="checkbox-container">
                <div class="chechbox12-correct">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="death"
                        checked={death}
                        onChange={() => setDeath(!death)}
                      />
                      <label htmlFor="death">Death</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="injury"
                        checked={injury}
                        onChange={() => setInjury(!injury)}
                      />
                      <label htmlFor="injury">Injury</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="medicalSurgical"
                        checked={medicalSurgical}
                        onChange={() => setMedicalSurgical(!medicalSurgical)}
                      />
                      <label htmlFor="medicalSurgical">
                        Medical/ surgical{" "}
                      </label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="job"
                        checked={job}
                        onChange={() => setJob(!job)}
                      />
                      <label htmlFor="job">Job</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="divorceSeparation"
                        checked={divorceSeparation}
                        onChange={() =>
                          setDivorceSeparation(!divorceSeparation)
                        }
                      />
                      <label htmlFor="divorceSeparation">
                        Divorce / separation{" "}
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="accidentInjury"
                        checked={accidentInjury}
                        onChange={() => setAccidentInjury(!accidentInjury)}
                      />
                      <label htmlFor="accidentInjury">Accident /injury</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="childRemovedFromHouse"
                        checked={childRemovedFromHouse}
                        onChange={() =>
                          setChildRemovedFromHouse(!childRemovedFromHouse)
                        }
                      />
                      <label htmlFor="childRemovedFromHouse">
                        Child removed from house
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="violentActsAgainstPersonFamily"
                        checked={violentActsAgainstPersonFamily}
                        onChange={() =>
                          setViolentActsAgainstPersonFamily(
                            !violentActsAgainstPersonFamily
                          )
                        }
                      />
                      <label htmlFor="violentActsAgainstPersonFamily">
                        Violent acts against person/family{" "}
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="otherSignificantRecentLosses"
                        checked={otherSignificantRecentLosses}
                        onChange={() =>
                          setOtherSignificantRecentLosses(
                            !otherSignificantRecentLosses
                          )
                        }
                      />
                      <label htmlFor="otherSignificantRecentLosses">
                        Other (please specify)
                      </label>
                      {otherSignificantRecentLosses && (
                    
                        <AutoSize value={otherSignificantRecentLossesType} setValue={setOtherSignificantRecentLossesType} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Additional Notes:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={additionalNotes}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                  />
                </div>
              </div>

              <div class="checkbox-container1">
                <div class="checkoptions1" style={{ marginTop: "1.2rem" }}>
                  <div class="checkboxitem1">
                    <input
                      type="checkbox"
                      checked={acceptResident === true}
                      onChange={() => setAcceptResident(true)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      {" "}
                      Yes, I (Resident/guardian) am in agreement with the types
                      and levels of services included in my behavior plan.
                    </span>
                  </div>
                  <div class="checkboxitem12" style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      checked={acceptResident === false}
                      onChange={() => setAcceptResident(false)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      No, I (Resident/guardian) disagree with the types and/or
                      levels of some or all of the services. By checking this
                      box, I (Resident/guardian) will receive the services that
                      I have agreed to receive and may appeal the treatment
                      team’s decision to not include all the types and/ or
                      levels of services that I have requested.
                    </span>
                  </div>
                </div>
              </div>

  
              <div
                className="box-image-container"
                style={{ paddingBottom: "10px" }}
              >
                <div className="form-field-single-update">
                  <label>Resident/Guardian name:</label>
                  <input
                    type="text"
                    value={residentGuardianName}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setResidentGuardianName(e.target.value)}
                  />
                </div>

                <div
                  class="file-upload-box "
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child hidePrint">
                    <button
                      className="upload-button1"
                      type="button"
                      onClick={() => setDraftModel(true)}
                    >
                      SAVED AS DRAFT
                    </button>
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => setSigInModel8(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {residentGauardianSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {residentGauardianSignature}{" "}
                        {residentGuardianDate}{" "}
                        {residentGuardianTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel8 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel8(false)}
                    singin={residentGauardianSignature}
                    setSingIn={setResidentGauardianSignature}
                    setDateAndTime={setResidentGuardianDate}
                    setSignatureTime={setResidentGuardianTime}
                  />
                )}
    
                <div className="form-field-single-update">
                  <label>Staff name, title:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={staffName}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setStaffName(e.target.value)}
                  />
                </div>

                <div
                  class="file-upload-box hidePrint"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child">
                    <button
                      className="upload-button1"
                      type="button"
                      onClick={() => setDraftModel(true)}
                    >
                      SAVED AS DRAFT
                    </button>
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => setSigInModel6(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {staffSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {staffSignature}{" "} {staffDate}{" "}
                        {staffDateTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel6 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel6(false)}
                    singin={staffSignature}
                    setSingIn={setStaffSignature}
                    setDateAndTime={setStaffDate}
                    setSignatureTime={setStaffDateTime}
                  />
                )}

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="approvedby">BHP Name:</label>
                    <input
                      type="text"
                      id="approvedby"
                      value={bhpName}
                      placeholder="Enter text"
                      required
                      onChange={(e) => setBhpName(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label htmlFor="bhpCredentials">
                      BHP Credentials:
                    </label>
                    <input
                      type="text"
                      required
                      value={bhpCredentials}
                      onChange={(e) => setBhpCredentials(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  class="file-upload-box hidePrint"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child">
                    <div>
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => setDraftModel(true)}
                      >
                        SAVED AS DRAFT
                      </button>
                    </div>
                    <div>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel7(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      <button
                        className="upload-button signature_shift_margin"
                        type="button"
                        onClick={handlePrint2}
                      >
                        PRINT THIS FORM
                      </button>
                    </div>
                  </div>
                  <div>
                    {bhpSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {bhpSignature}{" "} {bhpDate} {" "}
                        {bhpTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel7 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel7(false)}
                    singin={bhpSignature}
                    setSingIn={setBhpSignature}
                    setDateAndTime={setBhpDate}
                    setSignatureTime={setBhpTime}
                  />
                )}
              </div>
            </div>

          
          <div className="form-actions hidePrint">
              <button type="submit"  style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem"}} >
              SUBMIT DETAILS
            </button>
            </div>
          </form>
        </div>
        {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
      </div>


      <div ref={componentRef} className="hidaData">
      <div >
        <div style={{ width: "20px" }} className="backbutton">
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
          <FormUpper setAssessmentType={setAssessmentType} assessmentType={assessmentType}/>
          <p style={{ marginTop: "0.5rem", marginBottom: "0"}}>
            <span>
            
            <AutoSize value={companyName} setValue={setCompanyName} placeholder={"Company Name"}/>
            </span>
            <span style={{ paddingLeft: "10px" }}>has notified</span>
            <span>
             
              <AutoSize value={hasNotified} setValue={setHasNotified} placeholder={"_______________"}/>
            </span>
            to participate in his/her Service Treatment Plan/Initial Assessment
            on
            <span>
           
               <AutoSize value={assessmentOn} setValue={setAssessmentOn} placeholder={"_______________"}/>
            </span>
          </p>
          <form onSubmit={handleSubmit} style={{ marginTop: "0.5rem " }}>
            <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
              SECTION I
            </h5>
            <div className="form-section">
              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child-gender">
                    <label htmlFor="residentFullName">
                      Resident's Full Name:
                    </label>
                    <input
                      type="text"
                      id="residentFullName"
                      className="borderless_input"
                      style={{borderBottom:'none',marginBottom:"3px"}}
                      value={residentName}
                      placeholder="Enter full name"
                      required
                      onChange={(e) => setResidentName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child-name">
                    <label>Gender:</label>

                    <div className="genderdiv">
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="maleRadio"
                          checked={sex === "Male"}
                          onChange={() => setSex("Male")}
                          className="custom-radio"
                        />
                        <label htmlFor="maleRadio">Male</label>
                      </div>
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="femaleRadio"
                          checked={sex === "Female"}
                          onChange={() => setSex("Female")}
                          className="custom-radio"
                        />
                        <label htmlFor="femaleRadio">Female</label>
                      </div>
                      <div className="genderbox">
                        <input
                          type="radio"
                          id="femaleRadio"
                          checked={sex === "Other"}
                          onChange={() => setSex("Other")}
                          className="custom-radio"
                        />
                        <label htmlFor="femaleRadio">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      className="borderless_input"
                      style={{borderBottom:'none',marginBottom:"5px"}}
                      value={dob}
                      placeholder="DD/MM/YYYY"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Admission Date:</label>
                    <input
                      type="date"
                       style={{borderBottom:'none',marginBottom:"5px"}}
                      value={dateOfAssessment}
                      placeholder="Enter Date"
                      required
                      onChange={(e) => setDateOfAssessment(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-single-update">
                  <label htmlFor="AHCCCS">AHCCCS# :</label>
                  <input
                    type="text"
                    id="AHCCCS"
                    value={ahcccsNumber}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setAhcccsNumber(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="preferredlanguage">
                      Preferred Language:
                    </label>
                    <input
                      type="text"
                      style={{borderBottom:'none',marginBottom:"5px"}}
                      required
                      value={preferredLanguage}
                      onChange={(e) => setPreferredLanguage(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child">
                    <label htmlFor="ethnicity">Ethnicity: </label>
                    <input
                      type="text"
                      style={{borderBottom:'none',marginBottom:"5px"}}
                      required
                      value={ethnicity}
                      onChange={(e) => setEthnicity(e.target.value)}
                    />
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="form-field-single-update-bold">
                  <label>Admission Status:</label>

                  <Select
                    isMulti
                    value={admissionStatus}
                    onChange={handleSelectChangeAdmission}
                    options={option_value_Admission}
                    isCreatable={true}
                    onKeyDown={handleKeyDownAdmissionStatus}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="programlocation&address">
                    Program Location & Address:{" "}
                  </label>
                  <input
                    type="text"
                    required
                    style={{borderBottom:'none'}}
                    value={programLocation}
                    onChange={(e) => setProgramLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="">Guardianship:</label>
                    <input
                      type="text"
                      id="attorneystatus"
                      value={guardianship}
                      style={{borderBottom:'none',marginBottom:"5px"}}
                      placeholder="Enter text"
                      required
                      onChange={(e) => setGuardianship(e.target.value)}
                    />
                   
                  </div>

                  <div className="form-field-child">
                    <label htmlFor="attorneystatus">
                      Power of Attorney Status:
                    </label>
                    <input
                      type="text"
                      id="attorneystatus"
                      style={{borderBottom:'none',marginBottom:"5px"}}
                      value={powerOfAttorneyStatus}
                      placeholder="Enter text"
                      required
                      onChange={(e) => setPowerOfAttorneyStatus(e.target.value)}
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>
         

                <div className="form-field-single-update">
                  <label htmlFor="todaydate">Today’s Date:</label>
                  <input
                    type="date"
                    id="todaydate"
                    value={todayDate}
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    placeholder="DD/MM/YYYY"
                    required
                    onChange={(e) => setTodayDate(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="fidname">
                    Guardianship/POA/PUB FID Name:
                  </label>
                  <input
                    type="text"
                    id="fidname"
                    value={guardianshipPoaPubFidName}
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    placeholder="Enter name"
                    required
                    onChange={(e) =>
                      setGuardianshipPoaPubFidName(e.target.value)
                    }
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label htmlFor="approvedby">Approved By:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={approvedBy}
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setApprovedBy(e.target.value)}
                  />
                </div>
              </div>
           

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Reason for Admission to Services:</label>
                  <Select
                    isMulti
                    value={reasonForAdmission}
                    onChange={handleSelectChangeAdmissionReasonForAdmission}
                    options={option_value_ReasonForAdmission}
                    isCreatable={true}
                    onKeyDown={handleKeyDownReasionForAdmission}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Resident’s Goals:</label>
                  <input
                    type="text"
                    id="approvedby"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    value={residentGoals}
                    placeholder="Enter goal"
                    required
                    onChange={(e) => setResidentGoals(e.target.value)}
                  />
          
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Resident’s Strength:</label>
                  <Select
                    isMulti
                    value={residentStrengths}
                    onChange={handleSelectChange}
                    options={qualitiesOptions}
                    isCreatable={true}
                    onKeyDown={handleKeyDownResidentStrength}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label>Resident’s Barriers:</label>
                  <input
                    type="text"
                    id="approvedby"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    value={residentLimitations}
                    placeholder="Enter text"
                    required
                    onChange={(e) => setResidentLimitations(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label style={{whiteSpace:"wrap"}}>
                    Current Behavioral Issues / Symptoms Reported by the
                    Resident:
                  </label>
                  <input
                    type="text"
                    value={currentBehavioralIssues}
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    placeholder="Enter text"
                    onChange={(e) => setCurrentBehavioralIssues(e.target.value)}
                  />
                </div>
              </div>

           
              <h5
                style={{
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                SECTION II
              </h5>
              <div className="formsheading">
                <p>
                  A. Currently prescribed medications are attached on a separate
                  page.
                </p>
                <p style={{ fontWeight: "bold" }}>
                  B. Current and Past Medical/Psychiatric Conditions.
                </p>
              </div>

              <div className="needs-interventions-container-condition table-respnosive">
                <div className="needs-interventions-column-condition">
                  <table>
                    <thead>
                      <th>Conditions</th>
                      <th>Yes</th>
                      <th>No</th>
                      <th>Comments</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Diabetes</td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetes"
                            checked={yesDiabetes === true}
                            onChange={() => setYesDiabetes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetesno"
                            checked={yesDiabetes === false}
                            onChange={() => setYesDiabetes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentDiabety ? commentDiabety.split("\n").length : 1), 1)}
                            value={commentDiabety || ''}
                            placeholder="___________"
                            onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentDeabetes(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Heart disease / heart attack</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHeart"
                            checked={yesHeart === true}
                            onChange={() => setYesHeart(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHeartno"
                            checked={yesHeart === false}
                            onChange={() => setYesHeart(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHeart ? commentHeart.split("\n").length : 1), 1)}
                            value={commentHeart || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentHeart(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHeart(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>History of stroke</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHistory"
                            checked={yesHistory === true}
                            onChange={() => setYesHistory(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHistoryno"
                            checked={yesHistory === false}
                            onChange={() => setYesHistory(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHistory ? commentHistory.split("\n").length : 1), 1)}
                            value={commentHistory || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentHistory(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHistory(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>High Blood Pressure</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHigh"
                            checked={yesHigh === true}
                            onChange={() => setYesHigh(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesHighno"
                            checked={yesHigh === false}
                            onChange={() => setYesHigh(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentHigh ? commentHigh.split("\n").length : 1), 1)}
                            value={commentHigh || ''}
                        
                            placeholder="___________"
                            onChange={(e) => setCommentHigh(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentHigh(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Lung disease (ie asthma, COPD, emphysema)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLung"
                            checked={yesLung === true}
                            onChange={() => setYesLung(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLungno"
                            checked={yesLung === false}
                            onChange={() => setYesLung(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentLung ? commentLung.split("\n").length : 1), 1)}
                            value={commentLung || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setCommentLung(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentLung(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Seizures</td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetes"
                            checked={yesSeizures === true}
                            onChange={() => setYesSeizures(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesSeizuresno"
                            checked={yesSeizures === false}
                            onChange={() => setYesSeizures(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentSeizures ? commentSeizures.split("\n").length : 1), 1)}
                            value={commentSeizures || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentSeizures(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentSeizures(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>Cancer</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesCancer"
                            checked={yesCancer === true}
                            onChange={() => setYesCancer(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesCancerno"
                            checked={yesCancer === false}
                            onChange={() => setYesCancer(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentCancer ? commentCancer.split("\n").length : 1), 1)}
                            value={commentCancer || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setCommentCancer(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentCancer(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Liver/kidney disease</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLiver"
                            checked={yesLiver === true}
                            onChange={() => setYesLiver(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesLiverno"
                            checked={yesLiver === false}
                            onChange={() => setYesLiver(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentLiver ? commentLiver.split("\n").length : 1), 1)}
                            value={commentLiver || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setCommentLiver(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentLiver(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Thyroid disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesThyroid"
                            checked={yesThyroid === true}
                            onChange={() => setYesThyroid(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="setYesThyroidno"
                            checked={yesThyroid === false}
                            onChange={() => setYesThyroid(false)}
                          />
                        </td>
                        <td>
                          <Select
                            isMulti
                            value={thyroidDisorder}
                            onChange={thyroiddisorderhnadler}
                            options={thyroidOptions}
                            isCreatable={true}
                            onKeyDown={handleKeyThyroidDisorder}
                          />
                        </td>
                      </tr>
                       <tr>
                        <td>History of head trauma/traumatic brain</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesbrain"
                            checked={yesbrain === true}
                            onChange={() => setYesBrain(true)}
                          />
                        </td>
                        <td>
                          <input

                            type="checkbox"
                            id="yesbrainno"
                            checked={yesbrain === false}
                            onChange={() => setYesBrain(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{ border: "none", outline: "none", resize: "none" }}
                            rows={Math.max((commentbrain ? commentbrain.split("\n").length : 1), 1)}
                            value={commentbrain || ''}
                            
                            placeholder="___________"
                            onChange={(e) => setbrain(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setbrain((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr> 
                      <tr>
                        <td>History of head trauma/traumatic brain injury</td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesInjury"
                            checked={yesInjury === true}
                            onChange={() => setYesInjury(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="yesInjuryno"
                            checked={yesInjury === false}
                            onChange={() => setYesInjury(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((commentInjury ? commentInjury.split("\n").length : 1), 1)}
                            value={commentInjury || ''}
                            
                            placeholder="___________"
                            onChange={(e) => setCommentInjury(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setCommentInjury(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Chronic pain</td>
                        <td>
                          <input
                            type="checkbox"
                            id="Chronic"
                            checked={yesChronic === true}
                            onChange={() => setYesChronic(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="Chronicno"
                            checked={yesChronic === false}
                            onChange={() => setYesChronic(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((chronicCommit ? chronicCommit.split("\n").length : 1), 1)}
                            value={chronicCommit || ''}
                            
                            
                            placeholder="___________"
                            onChange={(e) => setChronicCommit(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setChronicCommit(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Allergies (food, environment, medications)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="AllergiesYes"
                            checked={AllergiesYes === true}
                            onChange={() => setAllergiesYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="AllergiesYesno"
                            checked={AllergiesYes === false}
                            onChange={() => setAllergiesYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((AllergiesComment ? AllergiesComment.split("\n").length : 1), 1)}
                            value={AllergiesComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setAllergiesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAllergiesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Surgeries</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SurgeriesYes"
                            checked={SurgeriesYes === true}
                            onChange={() => setSurgeriessYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SurgeriesYesno"
                            checked={SurgeriesYes === false}
                            onChange={() => setSurgeriessYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SurgeriesComment ? SurgeriesComment.split("\n").length : 1), 1)}
                            value={SurgeriesComment || ''}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setSurgeriesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSurgeriesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Number of pregnancies / births</td>
                        <td>
                          <input
                            type="checkbox"
                            id="pregnanciesYes"
                            checked={pregnanciesYes === true}
                            onChange={() => setPregnanciesYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="pregnanciesYesno"
                            checked={pregnanciesYes === false}
                            onChange={() => setPregnanciesYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((pregnanciesComment ? pregnanciesComment.split("\n").length : 1), 1)}
                            value={pregnanciesComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setPregnanciesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPregnanciesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Substance use disorder (please specify)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SubstanceYes"
                            checked={SubstanceYes === true}
                            onChange={() => setSubstanceYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SubstanceYesno"
                            checked={SubstanceYes === false}
                            onChange={() => setSubstanceYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SubstanceComment ? SubstanceComment.split("\n").length : 1), 1)}
                            value={SubstanceComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setSubstanceComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSubstanceComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Depression</td>
                        <td>
                          <input
                            type="checkbox"
                            id="DepressionYes"
                            checked={DepressionYes === true}
                            onChange={() => setDepressionYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="DepressionYesno"
                            checked={DepressionYes === false}
                            onChange={() => setDepressionYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((DepressionComment ? DepressionComment.split("\n").length : 1), 1)}
                            value={DepressionComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setDepressionComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setDepressionComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Anxiety/panic attacks</td>
                        <td>
                          <input
                            type="checkbox"
                            id="AnxietyYes"
                            checked={AnxietyYes === true}
                            onChange={() => setAnxietyYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="AnxietyYesno"
                            checked={AnxietyYes === false}
                            onChange={() => setAnxietyYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((AnxietyComment ? AnxietyComment.split("\n").length : 1), 1)}
                            value={AnxietyComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) => setAnxietyComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAnxietyComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Insomnia</td>
                        <td>
                          <input
                            type="checkbox"
                            id="InsomniaYes"
                            checked={InsomniaYes === true}
                            onChange={() => setInsomniaYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="InsomniaYesno"
                            checked={InsomniaYes === false}
                            onChange={() => setInsomniaYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((InsomniaComment ? InsomniaComment.split("\n").length : 1), 1)}
                            value={InsomniaComment || ''}
                        
                            placeholder="___________"
                            onChange={(e) =>
                              setInsomniaComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setInsomniaComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Bipolar disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="BipolarYes"
                            checked={BipolarYes === true}
                            onChange={() => setBipolarYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="BipolarYesno"
                            checked={BipolarYes === false}
                            onChange={() => setBipolarYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((BipolarComment ? BipolarComment.split("\n").length : 1), 1)}
                            value={BipolarComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) => setBipolarComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setBipolarComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Schizophrenia</td>
                        <td>
                          <input
                            type="checkbox"
                            id="SchizophreniaYes"
                            checked={SchizophreniaYes === true}
                            onChange={() => setSchizophreniaYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="SchizophreniaYesno"
                            checked={SchizophreniaYes === false}
                            onChange={() => setSchizophreniaYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((SchizophreniaComment ? SchizophreniaComment.split("\n").length : 1), 1)}
                            value={SchizophreniaComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setSchizophreniaComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSchizophreniaComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Obsessive compulsive disorder</td>
                        <td>
                          <input
                            type="checkbox"
                            id="ObsessiveYes"
                            checked={ObsessiveYes === true}
                            onChange={() => setObsessiveYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="ObsessiveYesno"
                            checked={ObsessiveYes === false}
                            onChange={() => setObsessiveYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((ObsessiveComment ? ObsessiveComment.split("\n").length : 1), 1)}
                            value={ObsessiveComment || ''}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setObsessiveComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setObsessiveComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Personality disorder (please specify)</td>
                        <td>
                          <input
                            type="checkbox"
                            id="PersonalityYes"
                            checked={PersonalityYes === true}
                            onChange={() => setPersonalityYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="PersonalityYesno"
                            checked={PersonalityYes === false}
                            onChange={() => setPersonalityYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((PersonalityComment ? PersonalityComment.split("\n").length : 1), 1)}
                            value={PersonalityComment || ''}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setPersonalityComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPersonalityComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Phobias</td>
                        <td>
                          <input
                            type="checkbox"
                            id="PhobiasYes"
                            checked={PhobiasYes === true}
                            onChange={() => setPhobiasYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="PhobiasYesno"
                            checked={PhobiasYes === false}
                            onChange={() => setPhobiasYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((PhobiasComment ? PhobiasComment.split("\n").length : 1), 1)}
                            value={PhobiasComment || ''}
                          
                            placeholder="___________"
                            onChange={(e) => setPhobiasComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPhobiasComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Any other health conditions</td>
                        <td>
                          <input
                            type="checkbox"
                            id="healthConditionsYes"
                            checked={healthConditionsYes === true}
                            onChange={() => setHealthConditionsYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="healthConditionsYesno"
                            checked={healthConditionsYes === false}
                            onChange={() => setHealthConditionsYes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((healthConditionsYesComment ? healthConditionsYesComment.split("\n").length : 1), 1)}
                            value={healthConditionsYesComment || ''}
                          
                            placeholder="___________"
                            onChange={(e) =>
                              sethealthConditionsYesComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                sethealthConditionsYesComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Infection or Diseases</td>
                        <td>
                          <input
                            type="checkbox"
                            id="InfectionYes"
                            checked={InfectionYes === true}
                            onChange={() => setInfectionYes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="InfectionYesno"
                            checked={InfectionYes === false}
                            onChange={() => setInfectionYes(false)}
                          />
                        </td>
                        <td>
                          <Select
                            isMulti
                            placeholder="Select Multiple Type"
                            value={infectionDiseases}
                            onChange={infectionDiseasesHandler}
                            options={infectionDiseasesOptions}
                            isCreatable={true}
                            onKeyDown={handleKeyInfectionDiseases}
                          />
                        </td>
                      </tr>
                      {
                        
                          otherConditionArray.map((i)=><tr>
                            <td>{i.condition}</td>
                           <td><input type="checkbox" checked={i.yes===true} /></td>
                           <td><input type="checkbox" checked={i.yes===false} /></td>
                            <td>{i.comments}</td>
                          </tr>)
                        
                      }
                      <tr>
                        <td>Other: <input type="text" className="treatment_plan_table"
                        value={OtherConditionOther} onChange={(e)=>setOtherConditionOther(e.target.value)} placeholder="___________"/></td>
                        <td>
                          <input
                            type="checkbox"
                          
                            checked={otherConditionYesNO === true}
                            onChange={() => setOtherConditionYesNo(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                   
                            checked={otherConditionYesNO === false}
                            onChange={() => setOtherConditionYesNo(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                            }}
                            rows={Math.max((otherConditionDiscription ? otherConditionDiscription.split("\n").length : 1), 1)}
                            value={otherConditionDiscription || ''}
                           
                            placeholder="___________"
                            onChange={(e) => setOtherConditionDiscription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherConditionDiscription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    
                      
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleAddCondition}
                >
                  Add
                </button>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold">
                  <label>Significant Family Medical/Psychiatric History:</label>

                  <Select
                    isMulti
                    value={SignificantFamilyMedicalPsychiatricHistory}
                    onChange={SignificantFamilyMedicalPsychiatricHistoryHandler}
                    options={SignificantFamilyMedicalPsychiatricHistoryOptions}
                    isCreatable={true}
                    onKeyDown={
                      handleKeySignificantFamilyMedicalPsychiatricHistory
                    }
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ marginTop: "1.5rem" }}>
                  Mental Health Treatment History (in Resident hospitalization,
                  partial hospitalization, out Resident, etc):
                </h6>
              </div>

              <div className="box-image-container hidePrint">
                <div className="form-field-single-update-bold">
                  <div>
                    <label>Type of Service:</label>
                  </div>
                  <div>
                    {" "}
                    <Select
                      isMulti
                      style={{ border: "none", outline: "none" }}
                      value={mentalHealthTreatmentHistoryTypeOfService}
                      onChange={
                        mentalHealthTreatmentHistoryTypeOfServiceHandler
                      }
                      options={mentalHealthTreatmentHistoryTypeOfServiceOption}
                      isCreatable={true}
                      onKeyDown={
                        handleKeyMentalHealthTreatmentHistoryTypeOfService
                      }
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Where:</label>
                    <input
                      type="text"
                      value={mentalHealthTreatmentHistoryWhere}
                      placeholder="Enter text"
                      
                      onChange={(e) =>
                        setMentalHealthTreatmentHistoryWhere(e.target.value)
                      }
                    />
                  </div>

                  <div className="form-field-child">
                    <label>Dates:</label>
                    <input
                      type="date"
                      id="approvedby"
                      value={mentalHealthTreatmentHistoryDates}
                      placeholder="Enter text"
                      
                      onChange={(e) =>
                        setMentalHealthTreatmentHistoryDates(e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>

                <div className="form-field-single-update-bold">
                  <label >
                    Diagnosis/Reason for Treatment:
                  </label>

                  <Select
                    isMulti
                    placeholder="Select Multiple Type"
                    value={mentalHealthTreatmentHistoryDiagnosisReason}
                    onChange={
                      mentalHealthTreatmentHistoryDiagnosisReasonHandler
                    }
                    options={mentalHealthTreatmentHistoryDiagnosisReasonOption}
                    isCreatable={true}
                    onKeyDown={
                      handleKeyDownMentalHealthTreatmentHistoryDiagnosisReason
                    }
                  />
                </div>
              </div>
              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleTypeOfService}
                >
                  Add
                </button>
              </div>

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  {typeOfServiceArray.length > 0 && (
                    <table>
                      <thead>
                        <th>Type of Services</th>
                        <th>Where</th>
                        <th>Dates</th>
                        <th>Diagnosis/Reason for Treatment </th>

                        <th className="hidePrint">Action</th>
                      </thead>
                      <tbody>
                        {typeOfServiceArray?.map((i, index) => (
                          <tr>
                            <td>
                              {i?.typeOfService?.map(
                                (item) => (
                                  <p key={item?.value}>{item?.value}</p>
                                )
                              )}
                            </td>
                            <td>
                              {`${i?.where}`}{" "}
                            </td>
                            <td>{`${i?.dates}`}</td>
                            <td>
                              {i?.diagnosisReason?.map(
                                (item) => (
                                  <p key={item?.value}>{item?.value}</p>
                                )
                              )}
                            </td>
                            <td className="hidePrint">
                              <AiFillDelete
                                onClick={() => handleRemoveItem(index)}
                                style={{
                                  fontSize: "1.5rem",
                                  cursor: "pointer",
                                }}
                              />{" "}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>

              <div className="yeschechbox235-parent">

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                     <label style={{ fontWeight: "bold" }}>
                    Substance Abuse history:
                  </label>
                
                
                </div>
                  
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="">Denies: </label>
                    <input
                      type="checkbox"
                      id="substanceAbuseDenies"
                      checked={substanceAbuseDenies}
                      onChange={() =>
                        setSubstanceAbuseDenies(!substanceAbuseDenies)
                      }
                    />
               
                </div>
              </div>

              <div className="needs-interventions-container2 table-respnosive">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th style={{ fontWeight: "bold" }}>Type</th>
                      <th style={{ fontWeight: "bold" }}>Age of First use</th>
                      <th style={{ fontWeight: "bold" }}>Last Use</th>
                      <th style={{ fontWeight: "bold" }}>Frequency </th>
                      <th style={{ fontWeight: "bold" }}>Length of Sobriety</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alcohol</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseAlcohol
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseAlcohol(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                        <Select
                  value={substanceAbuseHistoryDataLastUseAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataLastUseAlcohol}
                  options={selectedsubstanceAbuseHistoryDataLastUseAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseAlcohol}
                />  
                        </td>
                              
                        <td>
                        <Select
                  value={substanceAbuseHistoryDataFrequencyAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataFrequencyAlcohol}
                  options={selectedsubstanceAbuseHistoryDataFrequencyAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyAlcohol}
                />

                         
                        </td>
                        <td>

                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  onChange={handlersubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyAlcohol}
                />

                         
                        </td>
                      </tr>

                      <tr>
                        <td>Benzodiazepines</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseBenzodiazepines(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseBenzodiazepines}
                  onChange={handlesubstanceAbuseHistoryDataLastUseBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataLastUseBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseBenzodiazepines}
                />
                         
                        </td>
                        <td>

                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyBenzodiazepines}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyBenzodiazepines}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines}
                />

                       
                        </td>
                      </tr>
                      <tr>
                        <td>Crack</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseCrack}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseCrack(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseCrack}
                  onChange={handlesubstanceAbuseHistoryDataLastUseCrack}
                  options={optionsubstanceAbuseHistoryDataLastUseCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseCrack}
                />
                       
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyCrack}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyCrack}
                  options={optionsubstanceAbuseHistoryDataFrequencyCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyCrack}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyCrack}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyCrack}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Heroin</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseHeroin}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseHeroin(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseHeroin}
                  onChange={handlesubstanceAbuseHistoryDataLastUseHeroin}
                  options={optionsubstanceAbuseHistoryDataLastUseHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseHeroin}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyHeroin}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyHeroin}
                  options={optionsubstanceAbuseHistoryDataFrequencyHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyHeroin}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyHeroin}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Inhalants</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseInhalants
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseInhalants(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseInhalants}
                  onChange={handlesubstanceAbuseHistoryDataLastUseInhalants}
                  options={optionsubstanceAbuseHistoryDataLastUseInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseInhalants}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyInhalants}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyInhalants}
                  options={optionsubstanceAbuseHistoryDataFrequencyInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyInhalants}
                />

                      
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyInhalants}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>Marijuana </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMarijuana
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMarijuana(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMarijuana}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMarijuana}
                  options={optionsubstanceAbuseHistoryDataLastUseMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMarijuana}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMarijuana}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMarijuana}
                  options={optionsubstanceAbuseHistoryDataFrequencyMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMarijuana}
                />

                        
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMarijuana}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>Methamphetamine </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMethamphetamine
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMethamphetamine(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMethamphetamine}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataLastUseMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMethamphetamine}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMethamphetamine}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataFrequencyMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMethamphetamine}
                />

                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>Methadone</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUseMethadone
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMethadone(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMethadone}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMethadone}
                  options={optionsubstanceAbuseHistoryDataLastUseMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMethadone}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMethadone}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMethadone}
                  options={optionsubstanceAbuseHistoryDataFrequencyMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMethadone}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  
                  onChange={hnadlesubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMethadone}
                />

                        
                        </td>
                      </tr>
                      <tr>
                        <td>MDMA (ecstasy)</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseMDMA}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseMDMA(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseMDMA}
                  onChange={handlesubstanceAbuseHistoryDataLastUseMDMA}
                  options={optionsubstanceAbuseHistoryDataLastUseMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseMDMA}
                />
                        
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyMDMA}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyMDMA}
                  options={optionsubstanceAbuseHistoryDataFrequencyMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyMDMA}
                />
                        
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyMDMA}
                />

                        </td>
                      </tr>
                      <tr>
                        <td>PCP (angel dust)</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUsePCP}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUsePCP(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUsePCP}
                  onChange={hnadlesubstanceAbuseHistoryDataLastUsePCP}
                  options={optionsubstanceAbuseHistoryDataLastUsePCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUsePCP}
                />
                          
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyPCP}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyPCP}
                  options={optionsubstanceAbuseHistoryDataFrequencyPCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyPCP}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyPCP}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPCP}
                />

                          
                        </td>
                      </tr>
                      <tr>
                        <td>Prescription medicine</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={
                              substanceAbuseHistoryDataAgeOfFirstUsePrescription
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUsePrescription(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUsePrescription}
                  onChange={handlesubstanceAbuseHistoryDataLastUsePrescription}
                  options={optionsubstanceAbuseHistoryDataLastUsePrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUsePrescription}
                />
                          
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyPrescription}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyPrescription}
                  options={optionsubstanceAbuseHistoryDataFrequencyPrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyPrescription}
                />

                          
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  
                  onChange={hnadlesubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyPrescription}
                />

                         
                        </td>
                      </tr>
                      <tr>
                        <td>OTC medicine</td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={substanceAbuseHistoryDataAgeOfFirstUseOTC}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataAgeOfFirstUseOTC(
                                e.target.value
                              )
                            }
                          />
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataLastUseOTC}
                  onChange={hnadlesubstanceAbuseHistoryDataLastUseOTC}
                  options={optionsubstanceAbuseHistoryDataLastUseOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLastUseOTC}
                />
                         
                        </td>
                        <td>
                          <Select
                  
                  value={substanceAbuseHistoryDataFrequencyOTC}
                  onChange={handlesubstanceAbuseHistoryDataFrequencyOTC}
                  options={optionsubstanceAbuseHistoryDataFrequencyOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataFrequencyOTC}
                />

                         
                        </td>
                        <td>
                          <Select
                  value={substanceAbuseHistoryDataLengthOfSobrietyOTC}
                  onChange={handlesubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                  options={optionsubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                  isCreatable={true}
                  onKeyDown={handleKeysubstanceAbuseHistoryDataLengthOfSobrietyOTC}
                />

                      
                        </td>
                      </tr>

                      {typeArray?.map((i) => (
                        <tr>
                          <td>{i.types}</td>
                          <td>{i.ageOfFirstUse} </td>
                          <td>{i.lastUse} </td>
                          <td>{i.frequency} </td>
                          <td>{i.lengthOfSobriety} </td>
                        </tr>
                      ))}

                      <tr >
                        <td>
                          Other:
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={otherTypeOther}
                            onChange={(e) => setOtherTypeOther(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="treatment_plan_table"
                            placeholder="_________"
                            value={otherAgeOfFirstUse}
                            onChange={(e) =>
                              setOtherAgeOfFirstUse(e.target.value)
                            }
                          />
                        </td>
                        <td>
                        <Select
                  value={otherLastUse}
                  
                  onChange={handleotherLastUse}
                  options={optionotherLastUse}
                  isCreatable={true}
                  onKeyDown={handleKeyotherLastUse}
                />
          
                        </td>
                        <td>
                        <Select
                  value={otherFrequancy}
                  
                  onChange={handleotherFrequancy}
                  options={optionotherFrequancy}
                  isCreatable={true}
                  onKeyDown={handleKeyotherFrequancy}
                />
                        </td>
                        <td>

                        <Select
                  value={OtherlengthOfSobrifty}
                  
                  onChange={handleOtherlengthOfSobrifty}
                  options={optionOtherlengthOfSobrifty}
                  isCreatable={true}
                  onKeyDown={handleKeyOtherlengthOfSobrifty}
                />
                     
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleTypeOfArray}
                >
                  Add
                </button>
              </div>

              <div class="checkbox-container">
                <label style={{ fontWeight: "bold" }}>
                  Active Withdrawal Symptoms:
                </label>
             
                <div class="checkBox_style_update">
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="noneReportedOrObserved"
                        value={noneReportedOrObserved}
                        checked={noneReportedOrObserved}
                        
                        onChange={() =>
                          setNoneReportedOrObserved(!noneReportedOrObserved)
                        }
                      />
                      <label htmlFor="noneReportedOrObserved">
                        None reported observed
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Vomiting"
                        value={Vomiting}
                        checked={Vomiting}
                        onChange={() => setVomiting(!Vomiting)}
                      />
                      <label htmlFor="Vomiting">Vomiting</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Anxiety"
                        value={Anxiety}
                        checked={Anxiety}
                        onChange={() => setAnxiety(!Anxiety)}
                      />
                      <label htmlFor="Anxiety">Anxiety</label>
                  </div>

                  <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Agitation"
                        value={Agitation}
                        checked={Agitation}
                        onChange={() => setAgitation(!Agitation)}
                      />
                      <label htmlFor="Agitation">Agitation</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Headache"
                        value={Headache}
                        checked={Headache}
                        onChange={() => setHeadache(!Headache)}
                      />
                      <label htmlFor="Headache">Headache</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Tremors"
                        value={Tremors}
                        checked={Tremors}
                        onChange={() => setTremors(!Tremors)}
                      />
                      <label htmlFor="Tremors">Tremors</label>
                    </div>
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Nausea"
                        value={Nausea}
                        checked={Nausea}
                        onChange={() => setNausea(!Nausea)}
                      />
                      <label htmlFor="Nausea">Nausea</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="TactileDisturbances"
                        value={TactileDisturbances}
                        checked={TactileDisturbances}
                        onChange={() =>
                          setTactileDisturbances(!TactileDisturbances)
                        }
                      />
                      <label htmlFor="TactileDisturbances">
                        Tactile Disturbances
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="VisualDisturbances"
                        value={VisualDisturbances}
                        checked={VisualDisturbances}
                        onChange={() =>
                          setVisualDisturbances(!VisualDisturbances)
                        }
                      />
                      <label htmlFor="VisualDisturbances">
                        Visual Disturbances
                      </label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="VisualDisturbances"
                        value={VisualDisturbances}
                        checked={VisualDisturbancesOtherBoolean}
                        onChange={() =>
                          setVisualDisturbancesOtherBoolean(
                            !VisualDisturbancesOtherBoolean
                          )
                        }
                      />
                      <label htmlFor="VisualDisturbances">Other</label>
                      {VisualDisturbancesOtherBoolean && (
                        <AutoSize value={VisualDisturbancesOtherType} setValue={setVisualDisturbancesOtherType} placeholder={"_______________"}/>
                      )}
                   
                  </div>
                </div>
              </div>

              <div class="checkbox-container">
                <label style={{ fontWeight: "bold" }}>
                  Auditory Disturbances:
                </label>
                <div class="checkBox_style_update">
                  
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Sweats"
                        value={Sweats}
                        checked={Sweats}
                        onChange={() => setSweats(!Sweats)}
                      />
                      <label htmlFor="Sweats">Sweats</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="GooseBumps"
                        value={GooseBumps}
                        checked={GooseBumps}
                        onChange={() => setGooseBumps(!GooseBumps)}
                      />
                      <label htmlFor="GooseBumps">Goose Bumps</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="BonePain"
                        value={BonePain}
                        checked={BonePain}
                        onChange={() => setBonePain(!BonePain)}
                      />
                      <label htmlFor="BonePain">Bone Pain</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Seizures"
                        value={Seizures}
                        checked={Seizures}
                        onChange={() => setSeizures(!Seizures)}
                      />
                      <label htmlFor="Seizures">Seizures</label>
                    </div>
                 
                 
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Paranoia"
                        value={Paranoia}
                        checked={Paranoia}
                        onChange={() => setParanoia(!Paranoia)}
                      />
                      <label htmlFor="Paranoia">Paranoia</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Runningnose"
                        value={Runningnose}
                        checked={Runningnose}
                        onChange={() => setRunningnose(!Runningnose)}
                      />
                      <label htmlFor="Runningnose">Running nose</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="Tearing"
                        value={Tearing}
                        checked={Tearing}
                        onChange={() => setTearing(!Tearing)}
                      />
                      <label htmlFor="Tearing">Tearing</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="LossofMuscleCoordination"
                        value={LossofMuscleCoordination}
                        checked={LossofMuscleCoordination}
                        onChange={() =>
                          setLossofMuscleCoordination(!LossofMuscleCoordination)
                        }
                      />
                      <label htmlFor="LossofMuscleCoordination">
                        Loss of muscle coordination
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="LossofMuscleCoordination"
                        value={LossofMuscleCoordinationOtherBoolean}
                        checked={LossofMuscleCoordinationOtherBoolean}
                        onChange={() =>
                          setLossofMuscleCoordinationBoolean(
                            !LossofMuscleCoordinationOtherBoolean
                          )
                        }
                      />
                      <label htmlFor="LossofMuscleCoordination">Other</label>
                      {LossofMuscleCoordinationOtherBoolean && (
                     
                        <AutoSize value={LossofMuscleCoordinationOtherType} setValue={setLossofMuscleCoordinationType} placeholder={"_______________"}/>

                      )}
                    </div>
                
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Mental Status Exam/Behavioral Observations:
                </h6>
                <h6 style={{ fontWeight: "bold" }}>General Appearance:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Apparent age</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="consistent"
                      checked={consistent}
                      onChange={() => setConsistent(!consistent)}
                    />
                    <label htmlFor="consistent">Consistent</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="Younger"
                      checked={younger}
                      onChange={() => setYounger(!younger)}
                    />
                    <label htmlFor="Younger">Younger</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="older"
                      checked={older}
                      onChange={() => setOlder(!older)}
                    />
                    <label htmlFor="older">Older</label>
                  </div>
                 
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={olderOtherBoolean}
                      onChange={() =>
                        setOlderOtherBoolean(!olderOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      olderOtherBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={olderOther}
                      onChange={(e) =>
                        setOlderOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>

                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Heigth</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="averageHeight"
                      checked={averageHeight}
                      onChange={() => setAverageHeight(!averageHeight)}
                    />
                    <label htmlFor="averageHeight">Average</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="short"
                      checked={short}
                      onChange={() => setShort(!short)}
                    />
                    <label htmlFor="short">Short</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="tall"
                      checked={tall}
                      onChange={() => setTall(!tall)}
                    />
                    <label htmlFor="tall">Tall</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={heigthBoolean}
                      onChange={() =>
                        setHeigthBoolean(!heigthBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      heigthBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={heigthOther}
                      onChange={(e) =>
                        setHeigthOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Weight</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="averageWeight"
                      checked={averageWeight}
                      onChange={() => setAverageWeight(!averageWeight)}
                    />
                    <label htmlFor="averageWeight">Average</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="obese"
                      checked={obese}
                      onChange={() => setObese(!obese)}
                    />
                    <label htmlFor="obese">Obese</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="overweight"
                      checked={overweight}
                      onChange={() => setOverweight(!overweight)}
                    />
                    <label htmlFor="overweight">Overweight</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="thin"
                      checked={thin}
                      onChange={() => setThin(!thin)}
                    />
                    <label htmlFor="thin">Thin</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="emaciated"
                      checked={emaciated}
                      onChange={() => setEmaciated(!emaciated)}
                    />
                    <label htmlFor="emaciated">Emaciated</label>
                  </div>
                   <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={WeightBoolean}
                      onChange={() =>
                        setWeightBoolean(!WeightBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      WeightBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={WeightOther}
                      onChange={(e) =>
                        setWeightOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Attire</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="casual"
                      checked={casual}
                      onChange={() => setCasual(!casual)}
                    />
                    <label htmlFor="casual">Casual</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="neat"
                      checked={neat}
                      onChange={() => setNeat(!neat)}
                    />
                    <label htmlFor="neat">Neat</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="tattered"
                      checked={tattered}
                      onChange={() => setTattered(!tattered)}
                    />
                    <label htmlFor="tattered">Tattered</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="dirty"
                      checked={dirty}
                      onChange={() => setDirty(!dirty)}
                    />
                    <label htmlFor="dirty">Dirty</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={attireBoolean}
                      onChange={() =>
                        setAttireBoolaen(!attireBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      attireBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={attireOther}
                      onChange={(e) =>
                        setAttireOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Grooming</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="casual"
                      checked={wellGroomed}
                      onChange={() => setWellGroomed(!wellGroomed)}
                    />
                    <label htmlFor="wellGroomed">Well-groomed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="adequateGrooming"
                      checked={adequateGrooming}
                      onChange={() => setAdequateGrooming(!adequateGrooming)}
                    />
                    <label htmlFor="adequateGrooming">Adequate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="unkempt"
                      checked={unkempt}
                      onChange={() => setUnkempt(!unkempt)}
                    />
                    <label htmlFor="unkempt">Unkempt</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="disheveled"
                      checked={disheveled}
                      onChange={() => setDisheveled(!disheveled)}
                    />
                    <label htmlFor="disheveled">Disheveled</label>
                  </div>
                  <div className="checkboxitem">
                    <div style={{display:"flex", alignItems:"center",gap:"10px"}}> 
                    <input
                      type="checkbox"
                      
                      checked={GroomingBoolean}
                      onChange={() =>
                        setGroomingBoolean(!GroomingBoolean)
                      }
                    />
                    <label >Other</label>
                    </div>

                    {
                      GroomingBoolean &&  <div>
                      <input
                      type="text"
                      style={{width:"auto"}}
                      className="treatment_plan_table"
                      placeholder="____________"
                      value={GroomingOther}
                      onChange={(e) =>
                        setGroomingOther(e.target.value)
                      }/>
                      </div>
                    }
                     
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Demeanor / Interaction:</h6>
              </div>

              <div className="box-image-container">
                <div className=" checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Mood</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="euthymic"
                      checked={euthymic}
                      onChange={() => setEuthymic(!euthymic)}
                    />
                    <label htmlFor="euthymic">Euthymic</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="irritable"
                      checked={irritable}
                      onChange={() => setIrritable(!irritable)}
                    />
                    <label htmlFor="irritable">Irritable</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="elevated"
                      checked={elevated}
                      onChange={() => setElevated(!elevated)}
                    />
                    <label htmlFor="elevated">Elevated</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="depressedMood"
                      checked={depressedMood}
                      onChange={() => setDepressedMood(!depressedMood)}
                    />
                    <label htmlFor="depressedMood">Depressed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="anxious"
                      checked={anxious}
                      onChange={() => setAnxious(!anxious)}
                    />
                    <label htmlFor="anxious">Anxious</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="euthymicOtherBoolean"
                      checked={euthymicOtherBoolean}
                      onChange={() =>
                        seteuthymicOtherBoolean(!euthymicOtherBoolean)
                      }
                    />
                    <label htmlFor="euthymicOtherBoolean">Other</label>
                    {euthymicOtherBoolean && (
                      <AutoSize value={euthymicOtherBooleanType} setValue={seteuthymicOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Affect</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="normalRange"
                      checked={normalRange}
                      onChange={() => setNormalRange(!normalRange)}
                    />
                    <label htmlFor="normalRange">Normal range</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="depressedAffect"
                      checked={depressedAffect}
                      onChange={() => setDepressedAffect(!depressedAffect)}
                    />
                    <label htmlFor="depressedAffect">Depressed</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="labile"
                      checked={labile}
                      onChange={() => setLabile(!labile)}
                    />
                    <label htmlFor="labile">Labile</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="constricted"
                      checked={constricted}
                      onChange={() => setConstricted(!constricted)}
                    />
                    <label htmlFor="constricted">Constricted</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="other"
                      checked={other}
                      onChange={() => setOther(!other)}
                    />
                    <label htmlFor="other">Other</label>
                    {other && (
                  
                      <AutoSize value={otherText} setValue={setOtherText} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Eye Contact</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="appropriate"
                      checked={appropriate}
                      onChange={() => setAppropriate(!appropriate)}
                    />
                    <label htmlFor="appropriate">Appropriate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="minimal"
                      checked={minimal}
                      onChange={() => setMinimal(!minimal)}
                    />
                    <label htmlFor="minimal">Minimal</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="poor"
                      checked={poor}
                      onChange={() => setPoor(!poor)}
                    />
                    <label htmlFor="poor">Poor</label>
                  </div>

                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="adequateEyeContact"
                      checked={adequateEyeContact}
                      onChange={() =>
                        setAdequateEyeContact(!adequateEyeContact)
                      }
                    />
                    <label htmlFor="adequateEyeContact">Adequate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                     
                      checked={EyeContactOtherBoolean}
                      onChange={() =>
                        setEyeContactOtherBoolean(!EyeContactOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    {EyeContactOtherBoolean && (
                  
                      <AutoSize value={EyeContactOtherBooleanType} setValue={setEyeContactOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Cooperation</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="appropriateCooperation"
                      checked={appropriateCooperation}
                      onChange={() =>
                        setAppropriateCooperation(!appropriateCooperation)
                      }
                    />
                    <label htmlFor="appropriateCooperation">Appropriate</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="hostile"
                      checked={hostile}
                      onChange={() => setHostile(!hostile)}
                    />
                    <label htmlFor="hostile">Hostile</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="evasive"
                      checked={evasive}
                      onChange={() => setEvasive(!evasive)}
                    />
                    <label htmlFor="evasive">Evasive</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="defensive"
                      checked={defensive}
                      onChange={() => setDefensive(!defensive)}
                    />
                    <label htmlFor="defensive">Defensive</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="indifferent"
                      checked={indifferent}
                      onChange={() => setIndifferent(!indifferent)}
                    />
                    <label htmlFor="indifferent">Indifferent</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                     
                      checked={CooperationOtherBoolean}
                      onChange={() =>
                        setCooperationOtherBoolean(!CooperationOtherBoolean)
                      }
                    />
                    <label >Other</label>
                    {CooperationOtherBoolean && (
                 
                      <AutoSize value={CooperationOtherBooleanType} setValue={setCooperationOtherBooleanType} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Speech:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                    <label>Articulation</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="normalArticulation"
                      checked={normalArticulation}
                      onChange={() =>
                        setNormalArticulation(!normalArticulation)
                      }
                    />
                    <label htmlFor="normalArticulation">Normal</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="unintelligible"
                      checked={unintelligible}
                      onChange={() => setUnintelligible(!unintelligible)}
                    />
                    <label htmlFor="unintelligible">Unintelligible</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="mumbled"
                      checked={mumbled}
                      onChange={() => setMumbled(!mumbled)}
                    />
                    <label htmlFor="mumbled">Mumbled</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="slurred"
                      checked={slurred}
                      onChange={() => setSlurred(!slurred)}
                    />
                    <label htmlFor="slurred">Slurred</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="stuttered"
                      checked={stuttered}
                      onChange={() => setStuttered(!stuttered)}
                    />
                    <label htmlFor="stuttered">Stuttered</label>
                  </div>
                  <div class="checkboxitem">
                    <input
                      type="checkbox"
                      id="ArticulationOtherBoolean"
                      checked={ArticulationOtherBoolean}
                      onChange={() =>
                        setArticulationOtherBoolean(!ArticulationOtherBoolean)
                      }
                    />
                    <label htmlFor="ArticulationOtherBoolean">Other</label>
                    {ArticulationOtherBoolean && (
                  
                      <AutoSize value={ArticulationOtherBooleanOther} setValue={setArticulationOtherBooleanOther} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                    <div class="checkboxitem">
                      <label>Tone</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalTone"
                        checked={normalRate}
                        onChange={() => setNormalRate(!normalRate)}
                      />
                      <label htmlFor="normalRate">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="soft"
                        checked={soft}
                        onChange={() => setSoft(!soft)}
                      />
                      <label htmlFor="soft">Soft</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="loud"
                        checked={loud}
                        onChange={() => setLoud(!loud)}
                      />
                      <label htmlFor="loud">Loud</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="pressured"
                        checked={pressured}
                        onChange={() => setPressured(!pressured)}
                      />
                      <label htmlFor="pressured">Pressured</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="ToneOtherBoolean"
                        checked={ToneOtherBoolean}
                        onChange={() => setToneOtherBoolean(!ToneOtherBoolean)}
                      />
                      <label htmlFor="ToneOtherBoolean">Other</label>
                      {ToneOtherBoolean && (
                  
                        <AutoSize value={ToneOtherBooleanOther} setValue={setToneOtherBooleanOther} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                  <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                   
                   <label>Rate</label>
                 </div>
                 <div class="checkboxitem">
                      <input type="checkbox" id="normalTone" checked={normalTone} onChange={() => setNormalTone(!normalTone)} />
                      <label htmlFor="normalTone">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="slow" checked={slow} onChange={() => setSlow(!slow)} />
                      <label htmlFor="slow">Slow</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="fast" checked={fast} onChange={() => setFast(!fast)} />
                      <label htmlFor="fast">Fast</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="RateOtherBoolean" checked={RateOtherBoolean} onChange={() => setRateOtherBoolean(!RateOtherBoolean)} />
                      <label htmlFor="RateOtherBoolean">Other</label>
                      {
                        RateOtherBoolean && 
                        <AutoSize value={RateOtherBooleanOther} setValue={setRateOtherBooleanOther} placeholder={"_______________"}/>
                      }

                    </div>

                  </div>
                  <div className="border-bootom-line "></div>
                    <div className="checkbox-table-parent">
                    <div class="checkboxitem">
                      <label>Quantity</label>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="normalQuantity" checked={normalQuantity} onChange={() => setNormalQuantity(!normalQuantity)} />
                      <label htmlFor="normalQuantity">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="verbose" checked={verbose} onChange={() => setVerbose(!verbose)} />
                      <label htmlFor="verbose">Verbose</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="mutism" checked={mutism} onChange={() => setMutism(!mutism)} />
                      <label htmlFor="mutism">Mutism</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="QuantityOtherBoolean" checked={QuantityOtherBoolean} onChange={() => setQuantityOtherBoolean(!QuantityOtherBoolean)} />
                      <label htmlFor="QuantityOtherBoolean">Other</label>
                      {
                        QuantityOtherBoolean && 
                        <AutoSize value={QuantityOtherBooleanOther} setValue={setQuantityOtherBooleanOther} placeholder={"_______________"}/>
                      }
                    </div>
                  </div>
                  <div className="border-bootom-line"></div>
                  <div className="checkbox-table-parent">
                  <div class="checkboxitem">
                      <label>Response latency</label>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="normalresponseLatency" checked={normalresponseLatency} onChange={() => setNormalresponseLatency(!normalresponseLatency)} />
                      <label htmlFor="normalresponseLatency">Normal</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="delayed" checked={delayed} onChange={() => setDelayed(!delayed)} />
                      <label htmlFor="delayed">Delayed</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="shortened" checked={shortened} onChange={() => setShortened(!shortened)} />
                      <label htmlFor="shortened">Shortened</label>

                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" id="responseLatencyOtherBoolean" checked={responseLatencyOtherBoolean} onChange={() => setresponseLatencyOtherBoolean(!responseLatencyOtherBoolean)} />
                      <label htmlFor="responseLatencyOtherBoolean">Other</label>
                      {
                        responseLatencyOtherBoolean && 
                        <AutoSize value={responseLatencyOtherBooleanOther} setValue={setresponseLatencyOtherBooleanOther} placeholder={"_______________"}/>
                      }
                    </div>
                  </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Cognition:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                    
                    <label>Thought content</label>
                  </div>
                  <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="unremarkablethoughtContent"
                        checked={unremarkablethoughtContent}
                        onChange={() =>
                          setUnremarkablethoughtContent(
                            !unremarkablethoughtContent
                          )
                        }
                      />
                      <label htmlFor="unremarkablethoughtContent">
                        Unremarkable
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="suspicious"
                        checked={suspicious}
                        onChange={() => setSuspicious(!suspicious)}
                      />
                      <label htmlFor="suspicious">Suspicious</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="negative"
                        checked={negative}
                        onChange={() => setNegative(!negative)}
                      />
                      <label htmlFor="negative">Negative</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="concrete"
                        checked={concrete}
                        onChange={() => setConcrete(!concrete)}
                      />
                      <label htmlFor="concrete">Concrete</label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={thoughtContentBoolaen}
                        onChange={() =>
                          setthoughtContentBoolean(!thoughtContentBoolaen)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {thoughtContentBoolaen && (
                       
                        <AutoSize value={thoughtContentOther} setValue={setThoughtContentOther} placeholder={"_______________"}/>
                      )}
                    </div>

                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                 
                 <label>Thought processes</label>
               </div>
               <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="logicalCoherent"
                        checked={logicalCoherent}
                        onChange={() => setLogicalCoherent(!logicalCoherent)}
                      />
                      <label htmlFor="logicalCoherent">Logical /Coherent</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tangential"
                        checked={tangential}
                        onChange={() => setTangential(!tangential)}
                      />
                      <label htmlFor="tangential">Tangential</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="circumstantial"
                        checked={circumstantial}
                        onChange={() => setCircumstantial(!circumstantial)}
                      />
                      <label htmlFor="circumstantial">Circumstantial</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="vague"
                        checked={vague}
                        onChange={() => setVague(!vague)}
                      />
                      <label htmlFor="vague">Vague</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={thoughtProcessesBoolean}
                        onChange={() =>
                          setThoughtProcessesBoolaen(!thoughtProcessesBoolean)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {thoughtProcessesBoolean && (
                     
                        <AutoSize value={thoughtProcessesOther} setValue={setThoughtProcessesOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                
                <label>Delusions</label>
              </div>
              <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="noDelusions"
                        checked={noDelusions}
                        onChange={() => setNoDelusions(!noDelusions)}
                      />
                      <label htmlFor="noDelusions">No</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesPersecutory"
                        checked={yesPersecutory}
                        onChange={() => setYesPersecutory(!yesPersecutory)}
                      />
                      <label htmlFor="yesPersecutory">Yes, persecutory</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesSomatic"
                        checked={yesSomatic}
                        onChange={() => setYesSomatic(!yesSomatic)}
                      />
                      <label htmlFor="yesSomatic">Yes, somatic</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesGrandiose"
                        checked={yesGrandiose}
                        onChange={() => setYesGrandiose(!yesGrandiose)}
                      />
                      <label htmlFor="yesGrandiose">Yes, grandiose</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherDelusions"
                        checked={yesOtherDelusionsBoolean}
                        onChange={() =>
                          setYesOtherDelusionsBoolean(!yesOtherDelusionsBoolean)
                        }
                      />
                      <label htmlFor="yesOtherDelusions">Yes, other</label>
                      {yesOtherDelusionsBoolean && (
                      
                        <AutoSize value={yesOtherDelusionsText} setValue={setYesOtherDelusionsText} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                      <label>Hallucinations</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="unremarkableHallucinations"
                        checked={unremarkableHallucinations}
                        onChange={() =>
                          setUnremarkableHallucinations(
                            !unremarkableHallucinations
                          )
                        }
                      />
                      <label htmlFor="unremarkableHallucinations">
                        Unremarkable
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="visualHallucinations"
                        checked={visualHallucinations}
                        onChange={() =>
                          setVisualHallucinations(!visualHallucinations)
                        }
                      />
                      <label htmlFor="visualHallucinations">
                        Visual hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="auditoryHallucinations"
                        checked={auditoryHallucinations}
                        onChange={() =>
                          setAuditoryHallucinations(!auditoryHallucinations)
                        }
                      />
                      <label htmlFor="auditoryHallucinations">
                        Auditory hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tactileHallucinations"
                        checked={tactileHallucinations}
                        onChange={() =>
                          setTactileHallucinations(!tactileHallucinations)
                        }
                      />
                      <label htmlFor="tactileHallucinations">
                        Tactile hallucinations
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherHallucinations"
                        checked={yesOtherHallucinationsBoolean}
                        onChange={() =>
                          setYesOtherHallucinationsBoolean(
                            !yesOtherHallucinationsBoolean
                          )
                        }
                      />
                      <label htmlFor="yesOtherHallucinations">Yes, other</label>
                      {yesOtherHallucinationsBoolean && (
                    
                        <AutoSize value={yesOtherHallucinationsText} setValue={setYesOtherHallucinationsText} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
              </div>
                  
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Motor activity:</h6>
              </div>

              <div className="box-image-container">
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
          
          <label>Gait</label>
        </div>
        <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalGait"
                        checked={normalGait}
                        onChange={() => setNormalGait(!normalGait)}
                      />
                      <label htmlFor="normalGait">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="staggering"
                        checked={staggering}
                        onChange={() => setStaggering(!staggering)}
                      />
                      <label htmlFor="staggering">Staggering</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="shuffling"
                        checked={shuffling}
                        onChange={() => setShuffling(!shuffling)}
                      />
                      <label htmlFor="shuffling">Shuffling</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="slowGait"
                        checked={slowGait}
                        onChange={() => setSlowGait(!slowGait)}
                      />
                      <label htmlFor="slowGait">Slow</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="awkward"
                        checked={awkward}
                        onChange={() => setAwkward(!awkward)}
                      />
                      <label htmlFor="awkward">Awkward</label>
                    </div>

                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="gaitOtherBoolen"
                        checked={gaitOtherBoolen}
                        onChange={() =>
                          setGailOtherBoolen(
                            !gaitOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="gaitOtherBoolen">other</label>
                      {gaitOtherBoolen && (
                    
                        <AutoSize type="text" value={gaitOther} setValue={setgetOther} placeholder={"_______________"}/>
                      )}
                    </div>

                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
           
           <label>Posture</label>
         </div>
         <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="normalPosture"
                        checked={normalPosture}
                        onChange={() => setNormalPosture(!normalPosture)}
                      />
                      <label htmlFor="normalPosture">Normal</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="relaxed"
                        checked={relaxed}
                        onChange={() => setRelaxed(!relaxed)}
                      />
                      <label htmlFor="relaxed">Relaxed</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="rigid"
                        checked={rigid}
                        onChange={() => setRigid(!rigid)}
                      />
                      <label htmlFor="rigid">Rigid</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tense"
                        checked={tense}
                        onChange={() => setTense(!tense)}
                      />
                      <label htmlFor="tense">Tense</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="slouched"
                        checked={slouched}
                        onChange={() => setSlouched(!slouched)}
                      />
                      <label htmlFor="slouched">Slouched</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="PostureOtherBoolen"
                        checked={PostureOtherBoolen}
                        onChange={() =>
                          setgaitOtherBoolen(
                            !PostureOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="PostureOtherBoolen">other</label>
                      {PostureOtherBoolen && (
                    
                        <AutoSize type="text" value={PostureOther} setValue={setPostureOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line "></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
        
        <label>Psychomotor Activity</label>
      </div>
      <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="withinNormalLimits"
                        checked={withinNormalLimits}
                        onChange={() =>
                          setWithinNormalLimits(!withinNormalLimits)
                        }
                      />
                      <label htmlFor="withinNormalLimits">
                        Within normal limits
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="calm"
                        checked={calm}
                        onChange={() => setCalm(!calm)}
                      />
                      <label htmlFor="calm">Calm</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="hyperactive"
                        checked={hyperactive}
                        onChange={() => setHyperactive(!hyperactive)}
                      />
                      <label htmlFor="hyperactive">Hyperactive</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="agitated"
                        checked={agitated}
                        onChange={() => setAgitated(!agitated)}
                      />
                      <label htmlFor="agitated">Agitated</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="hypoactive"
                        checked={hypoactive}
                        onChange={() => setHypoactive(!hypoactive)}
                      />
                      <label htmlFor="hypoactive">Hypoactive</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="PsychomotorActivityOtherBoolen"
                        checked={PsychomotorActivityOtherBoolen}
                        onChange={() =>
                          setPsychomotorActivityOtherBoolen(
                            !PsychomotorActivityOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="PsychomotorActivityOtherBoolen">other</label>
                      {PsychomotorActivityOtherBoolen && (
                    
                        <AutoSize type="text" value={PsychomotorActivityOther} setValue={setPsychomotorActivityOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="checkbox-table-parent">
                <div class="checkboxitem">
                      <label>Mannerisms</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="none"
                        checked={none}
                        onChange={() => setNone(!none)}
                      />
                      <label htmlFor="none">None</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tics"
                        checked={tics}
                        onChange={() => setTics(!tics)}
                      />
                      <label htmlFor="tics">Tics</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="tremorsMannerisms"
                        checked={tremorsMannerisms}
                        onChange={() =>
                          setTremorsMannerisms(!tremorsMannerisms)
                        }
                      />
                      <label htmlFor="tremorsMannerisms">Tremors</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="rocking"
                        checked={rocking}
                        onChange={() => setRocking(!rocking)}
                      />
                      <label htmlFor="rocking">Rocking</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="picking"
                        checked={picking}
                        onChange={() => setPicking(!picking)}
                      />
                      <label htmlFor="picking">Picking</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="yesOtherHallucinations"
                        checked={MannerismsOtherBoolen}
                        onChange={() =>
                          setMannerismsOtherBoolen(
                            !MannerismsOtherBoolen
                          )
                        }
                      />
                      <label htmlFor="yesOtherHallucinations">other</label>
                      {MannerismsOtherBoolen && (
                    
                        <AutoSize type="text" value={MannerismsOther} setValue={setMannerismsOther} placeholder={"_______________"}/>
                      )}
                    </div>
                </div>
              </div>
           
              <div
                className="yeschechboxOrientation"
                style={{ marginTop: "1.5rem" }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label style={{ fontWeight: "bold" }}>
                    Orientation to Person:
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="person"
                      checked={person === true}
                      onChange={() => setPerson(true)}
                    />
                    <label htmlFor="person">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="personno"
                      checked={person === false}
                      onChange={() => setPerson(false)}
                    />
                    <label htmlFor="personno">No</label>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label>Place:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="place"
                      checked={place === true}
                      onChange={() => setPlace(true)}
                    />
                    <label htmlFor="place">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="placeno"
                      checked={place === false}
                      onChange={() => setPlace(false)}
                    />
                    <label htmlFor="placeno">No</label>
                  </div>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <label htmlFor="">Time:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="placeno"
                      checked={time === true}
                      onChange={() => setTime(true)}
                    />
                    <label htmlFor="placeno">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="timeno"
                      checked={time === false}
                      onChange={() => setTime(false)}
                    />
                    <label htmlFor="timeno">No</label>
                  </div>
                </div>
             
              </div>

              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Circumstances:</label>

                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="circumstances"
                      checked={circumstances === true}
                      onChange={() => setCircumstances(true)}
                    />
                    <label htmlFor="circumstances">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="circumstancesno"
                      checked={circumstances === false}
                      onChange={() => setCircumstances(false)}
                    />
                    <label htmlFor="circumstancesno">No</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Judgment:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodJudgment"
                      checked={goodJudgment}
                      onChange={() => setGoodJudgment(!goodJudgment)}
                    />
                    <label htmlFor="goodJudgment">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairJudgment"
                      checked={fairJudgment}
                      onChange={() => setFairJudgment(!fairJudgment)}
                    />
                    <label htmlFor="fairJudgment">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorJudgment"
                      checked={poorJudgment}
                      onChange={() => setPoorJudgment(!poorJudgment)}
                    />
                    <label htmlFor="poorJudgment">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Insight:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodInsight"
                      checked={goodInsight}
                      onChange={() => setGoodInsight(!goodInsight)}
                    />
                    <label htmlFor="goodInsight">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairInsight"
                      checked={fairInsight}
                      onChange={() => setFairInsight(!fairInsight)}
                    />
                    <label htmlFor="fairInsight">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorInsight"
                      checked={poorInsight}
                      onChange={() => setPoorInsight(!poorInsight)}
                    />
                    <label htmlFor="poorInsight">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Memory:</label>
                <div className="yesNoAligment">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="goodMemory"
                      checked={goodMemory}
                      onChange={() => setGoodMemory(!goodMemory)}
                    />
                    <label htmlFor="goodMemory">Good</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fairMemory"
                      checked={fairMemory}
                      onChange={() => setFairMemory(!fairMemory)}
                    />
                    <label htmlFor="fairMemory">Fair</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="poorMemory"
                      checked={poorMemory}
                      onChange={() => setPoorMemory(!poorMemory)}
                    />
                    <label htmlFor="poorMemory">Poor</label>
                  </div>
                </div>
              </div>
              <div className="yeschechbox">
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ fontWeight: "bold" }}>
                    Ability to concentration:
                  </label>

                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      id="intact"
                      checked={intactAbilityToConcentration}
                      onChange={() =>
                        setIntactAbilityToConcentration(
                          !intactAbilityToConcentration
                        )
                      }
                    />
                    <label htmlFor="intact">Intact</label>
                  </div>
                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      id="intact"
                      checked={intactAbilityToConcentrationOtherBoolean}
                      onChange={() =>
                        setIntactAbilityToConcentrationOtherBoolean(
                          !intactAbilityToConcentrationOtherBoolean
                        )
                      }
                    />
                    <label htmlFor="intact">Other</label>
                    {intactAbilityToConcentrationOtherBoolean && (
                 
                      <AutoSize value={otherAbilityToConcentration} setValue={setOtherAbilityToConcentration} placeholder={"_______________"}/>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label style={{ fontWeight: "bold" }}>
                  Significant Social/Developmental History:
                </label>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Childhood (include parents, siblings, family):</label>
                  <input
                    type="text"
                    id="approvedby"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    value={significantSocialDevelopmentalHistory}
                    placeholder="Enter "
                    required
                    onChange={(e) =>
                      setSignificantSocialDevelopmentalHistory(e.target.value)
                    }
                  />
                </div>
              </div>

              <div
                className="form-field-single-update"
                style={{ merginLeft: "10px",marginTop:"0.5rem" }}
              >
                <label>Educational history:</label>
              
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label>Highest level of education:</label>
                  <input
                    type="text"
                    value={highestEducation}
                    placeholder="Enter education"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    required
                    onChange={(e) => setHighestEducation(e.target.value)}
                  />
                </div>

                <div className="form-field-child">
                  <label
                    htmlFor=""
                    style={{ marginTop: "1rem", fontWeight: "bold" }}
                  >
                    Special education:
                  </label>
                  <div
                    className="employment-Aligmant"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        
                        checked={specialEducation === true}
                        onChange={() => setSpecialEducation(true)}
                      />
                      <label>Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={specialEducation === false}
                        onChange={() => setSpecialEducation(false)}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label style={{ fontWeight: "bold" }}>
                    Currently a student?
                  </label>
                  <div className="employment-Aligmant">
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                       
                        checked={currentStudent === true}
                        onChange={() => setCurrentStudent(true)}
                      />
                      <label>Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        checked={currentStudent === false}
                        onChange={() => setCurrentStudent(false)}
                      />
                      <label>No</label>
                    </div>
                  </div>
                </div>
                <div className="form-field-child">
                  <label>If yes, where?</label>
                  <input
                    type="text"
                    value={ifYesWhere}
                    placeholder="Enter text"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    required
                    onChange={(e) => setIfYesWhere(e.target.value)}
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Employment history:</h6>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label style={{ fontWeight: "bold" }}>
                    Currently employed:
                  </label>
                  <div className="employment-Aligmant">
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        id="currentlyEmployed"
                        checked={currentlyEmployed === true}
                        onChange={() => setCurrentlyEmployed(true)}
                      />
                      <label htmlFor="currentlyEmployed">Yes</label>
                    </div>
                    <div className="checkboxitem-update">
                      <input
                        type="checkbox"
                        id="currentlyEmployedno"
                        checked={currentlyEmployed === false}
                        onChange={() => setCurrentlyEmployed(false)}
                      />
                      <label htmlFor="currentlyEmployedno">No</label>
                    </div>
                  </div>
                </div>
               
                <div className="form-field-child">
                  <label >
                    If employed, where? FT or PT?:
                  </label>
                  <input
                    type="text"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    required
                    value={employmentLocation}
                    placeholder="Enter text"
                    
                    onChange={(e) => setEmploymentLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Work History (and barriers to employment):</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    style={{borderBottom:'none',marginBottom:"5px"}}
                    value={workHistory}
                    onChange={(e) => setWorkHistory(e.target.value)}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label style={{ fontWeight: "bold" }}>
                      Military History:
                    </label>
                    <div className="yesNoAligment">
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="militaryService"
                          checked={militaryService === true}
                          onChange={() => setMilitaryService(true)}
                        />
                        <label htmlFor="militaryService">Yes</label>
                      </div>
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="militaryServiceno"
                          checked={militaryService === false}
                          onChange={() => setMilitaryService(false)}
                        />
                        <label htmlFor="militaryServiceno">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-field-child">
                    <label style={{ fontWeight: "bold" }}>
                      Currently on active duty?
                    </label>
                    <div className="yesNoAligment">
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="activeDuty"
                          checked={activeDuty === true}
                          onChange={() => setActiveDuty(true)}
                        />
                        <label htmlFor="activeDuty">Yes</label>
                      </div>
                      <div className="checkboxitem-update">
                        <input
                          type="checkbox"
                          id="activeDutyno"
                          checked={activeDuty === false}
                          onChange={() => setActiveDuty(false)}
                        />
                        <label htmlFor="activeDutyno">No</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update-bold">
                  <label>Criminal Justice Legal History:</label>
                  <Select
                    isMulti
                    value={selectedValue}
                    onChange={selectedValueHandler}
                    options={selectedValueOption}
                    isCreatable={true}
                    onKeyDown={handleKeyDownSelectedValue}
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Current Independent Living Skills:
                </h6>
              </div>

             
              <div className="needs-interventions-container table-respnosive">
                <div className="needs-interventions-column3">
                  <table>
                    <thead>
                      <tr>
                        <th>Type of Activity</th>
                        <th>Good</th>
                        <th>Fair</th>
                        <th>Not so good</th>
                        <th>Need assist</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bathing/Showering</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingGood === true}
                            onChange={() => setBathingGood(!BathingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingFair === true}
                            onChange={() => setBathingFair(!BathingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={BathingNotSoGood === true}
                            onChange={() =>
                              setBathingNotSoGood(!BathingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={BathingGoodNeedAssist}
                            onChange={(e) =>
                              setBathingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              BathingComments
                                ? BathingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={BathingComments || ""}
                            placeholder="___________"
                            onChange={(e) => setBathingComments(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setBathingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Grooming/hygiene</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingGood === true}
                            onChange={() => setGroomingGood(!GroomingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingFair === true}
                            onChange={() => setGroomingFair(!GroomingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={GroomingNotSoGood === true}
                            onChange={() =>
                              setGroomingNotSoGood(!GroomingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={GroomingGoodNeedAssist}
                            onChange={(e) =>
                              setGroomingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              GroomingComments
                                ? GroomingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={GroomingComments || ""}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setGroomingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setGroomingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Mobility</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityGood === true}
                            onChange={() => setMobilityGood(!MobilityGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityFair === true}
                            onChange={() => setMobilityFair(!MobilityFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={MobilityNotSoGood === true}
                            onChange={() =>
                              setMobilityNotSoGood(!MobilityNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={MobilityGoodNeedAssist}
                            onChange={(e) =>
                              setMobilityGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              MobilityComments
                                ? MobilityComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={MobilityComments || ""}
                         
                            placeholder="___________"
                            onChange={(e) =>
                              setMobilityComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setMobilityComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Housework</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkGood === true}
                            onChange={() => setHouseworkGood(!HouseworkGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkFair === true}
                            onChange={() => setHouseworkFair(!HouseworkFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={HouseworkNotSoGood === true}
                            onChange={() =>
                              setHouseworkNotSoGood(!HouseworkNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={HouseworkGoodNeedAssist}
                            onChange={(e) =>
                              setHouseworkGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              HouseworkComments
                                ? HouseworkComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={HouseworkComments || ""}
                          
                            placeholder="___________"
                            onChange={(e) =>
                              setHouseworkComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setHouseworkComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Shopping</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingGood === true}
                            onChange={() => setShoppingGood(!ShoppingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingFair === true}
                            onChange={() => setShoppingFair(!ShoppingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ShoppingNotSoGood === true}
                            onChange={() =>
                              setShoppingNotSoGood(!ShoppingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ShoppingGoodNeedAssist}
                            onChange={(e) =>
                              setShoppingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ShoppingComments
                                ? ShoppingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ShoppingComments || ""}
              
                            placeholder="___________"
                            onChange={(e) =>
                              setShoppingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setShoppingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Managing money/budget</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingGood === true}
                            onChange={() => setManagingGood(!ManagingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingFair === true}
                            onChange={() => setManagingFair(!ManagingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ManagingNotSoGood === true}
                            onChange={() =>
                              setManagingNotSoGood(!ManagingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ManagingGoodNeedAssist}
                            onChange={(e) =>
                              setManagingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ManagingComments
                                ? ManagingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ManagingComments || ""}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setManagingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setManagingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Preparing food</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingGood === true}
                            onChange={() => setPreparingGood(!PreparingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingFair === true}
                            onChange={() => setPreparingFair(!PreparingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={PreparingNotSoGood === true}
                            onChange={() =>
                              setPreparingNotSoGood(!PreparingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={PreparingGoodNeedAssist}
                            onChange={(e) =>
                              setPreparingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              PreparingComments
                                ? PreparingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={PreparingComments || ""}
                    
                            placeholder="___________"
                            onChange={(e) =>
                              setPreparingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPreparingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Eating</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingGood === true}
                            onChange={() => setEatingGood(!EatingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingFair === true}
                            onChange={() => setEatingFair(!EatingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={EatingNotSoGood === true}
                            onChange={() =>
                              setEatingNotSoGood(!EatingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={EatingGoodNeedAssist}
                            onChange={(e) =>
                              setEatingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              EatingComments
                                ?  EatingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ EatingComments || ""}
                    
                      
                            placeholder="___________"
                            onChange={(e) => setEatingComments(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setEatingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Toileting</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingGood === true}
                            onChange={() => setToiletingGood(!ToiletingGood)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingFair === true}
                            onChange={() => setToiletingFair(!ToiletingFair)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={ToiletingNotSoGood === true}
                            onChange={() =>
                              setToiletingNotSoGood(!ToiletingNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={ToiletingGoodNeedAssist}
                            onChange={(e) =>
                              setToiletingGoodNeedAssist(e.target.value)
                            }
                          >
                            <option disabled>Select value</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              ToiletingComments
                                ?  ToiletingComments.split("\n").length
                                : 1,
                              1
                            )}
                            value={ ToiletingComments || ""}
                            
                            placeholder="___________"
                            onChange={(e) =>
                              setToiletingComments(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setToiletingComments(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      {handleRiskFactorActivityArray?.map((i, index) => (
                        <tr key={index}>
                          <td>Other: {i?.type}</td>

                          <td>
                            <input type="checkbox" checked={i.good === true} />
                          </td>
                          <td>
                            <input type="checkbox" checked={i.fair === true} />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={i.otherCurrentNotSoGood === true}
                            />
                          </td>
                          <td>
                            {` ${i.needAssist === true ? "Yes" : "No"}`}{" "}
                          </td>
                          <td> {i.comments} </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          Other:{" "}
                          <input
                            type="text"
                            placeholder="___________"
                            className="treatment_plan_table"
                            value={otherCurrentOther}
                            onChange={(e) =>
                              setOtherCurrentOther(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentGood}
                            onChange={(e) =>
                              setOtherCurrentGood(!otherCurrentGood)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentFair}
                            onChange={(e) =>
                              setOtherCurrentFair(!otherCurrentFair)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            checked={otherCurrentNotSoGood}
                            onChange={(e) =>
                              setOtherCurrentNotSoGood(!otherCurrentNotSoGood)
                            }
                          />
                        </td>
                        <td>
                          <select
                            value={otherCurrentNeed}
                            onChange={(e) =>
                              setOtherCurrentNeed(e.target.value)
                            }
                          >
                            <option>Select</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              otherCurrentComment
                                ?  otherCurrentComment.split("\n").length
                                : 1,
                              1
                            )}
                            value={ otherCurrentComment || ""}
                           
                            placeholder="___________"
                            onChange={(e) =>
                              setOtherCurrentComment(e.target.value)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherCurrentComment(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleRiskFactorActivity}
                >
                  Add
                </button>
              </div>


              <div className="box-image-container">
                <div className="form-field-single-update ">
                  <label>Behavioral Triggers:</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    required
                    style={{borderBottom:'none'}}
                    value={triggers}
                    onChange={(e) => setTriggers(e.target.value)}
                  />
                </div>
                <div
                  className="yeschechboxFall-risk"
                  style={{ marginTop: "0.5rem", marginLeft: "10px" }}
                >
                  <label htmlFor="">Fall risk:</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fallRisk"
                      checked={fallRisk === true}
                      onChange={() => setFallRisk(true)}
                    />
                    <label htmlFor="fallRisk">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="fallRiskno"
                      checked={fallRisk === false}
                      onChange={() => setFallRisk(false)}
                    />
                    <label htmlFor="fallRiskno">No</label>
                  </div>
                </div>
                <div className="form-field-single-update">
                  <label>If yes please explain:</label>
                  <input
                    type="text"
                    id="approvedby"
                    style={{borderBottom:'none'}}
                    value={fallRiskExplanation}
                    placeholder="Enter text"
                    
                    onChange={(e) => setFallRiskExplanation(e.target.value)}
                  />
                </div>
                <div className="form-field-single-update">
                  <label htmlFor="programlocation&address">
                    Hobbies/Leisure Activities:
                  </label>

                  <input
                    type="text"
                    id="approvedby"
                    style={{borderBottom:'none'}}
                    value={hobbiesLeisureActivities}
                    placeholder="Enter text"
                    
                    onChange={(e) =>
                      setHobbiesLeisureActivities(e.target.value)
                    }
                  />
                </div>
                <div className="form-field-single-update-bold ">
                  <label>Medical Equipment:</label>

                  <Select
                    value={selectedValueMedical}
                    isMulti
                    onChange={selectedValueMedicalHandler}
                    options={selectedValueMedicalOption}
                    isCreatable={true}
                    onKeyDown={handleKeySelectedValueMedical}
                  />
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update-bold ">
                  <label htmlFor="reasonadmission">Special Precautions:</label>
                  <Select
                    value={selectedValueSpecialPrecautions}
                    isMulti
                    onChange={selectedValueSpecialPrecautionsHandler}
                    options={selectedValueSpecialPrecautionsOption}
                    isCreatable={true}
                    onKeyDown={handleKeySelectedValueSpecialPrecautions}
                  />
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Safety and Risk Assessment
                </h6>
              </div>
              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>
                  Are you currently thinking about harming yourself or
                  committing suicide?
                </label>
                <div
                  className="riskAndSafityAligment"
                  style={{ paddingLeft: "15px" }}
                >
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingSelf"
                      checked={currentThoughtsOfHarmingSelf === true}
                      onChange={() => setCurrentThoughtsOfHarmingSelf(true)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingSelfno"
                      checked={currentThoughtsOfHarmingSelf === false}
                      onChange={() => setCurrentThoughtsOfHarmingSelf(false)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingSelfno">No</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>Ideation</label>

                <div className="employment-Aligmant-location">
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Fleeting"}
                      onChange={()=>setSuicidalIdeation("Fleeting")}
                    />
                    <label>Fleeting</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Periodic"}
                      onChange={()=>setSuicidalIdeation("Periodic")}
                    />
                    <label>Periodic</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="Constant"}
                      onChange={()=>setSuicidalIdeation("Constant")}
                    />
                    <label>Constant</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "7px",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={suicidalIdeation==="N/A"}
                      onChange={()=>setSuicidalIdeation("N/A")}
                    />
                    <label>N/A</label>
                  </div>
                </div>
              </div>

              <div className="increasingClass">
                <label style={{ fontWeight: "bold" }}>Increasing in:</label>

                <div className="increasingClassInternal">
                  <div className="yeschechbox1">
                    <div>
                      <label>Urgency:</label>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="suicidalIdeationUrgency"
                        checked={suicidalIdeationUrgency === true}
                        onChange={() => setSuicidalIdeationUrgency(true)}
                      />
                      <label htmlFor="suicidalIdeationUrgency">Yes</label>
                    </div>
                    <div className="increasingClassInternal-child-no">
                      <input
                        type="checkbox"
                        id="suicidalIdeationUrgencyno"
                        checked={suicidalIdeationUrgency === false}
                        onChange={() => setSuicidalIdeationUrgency(false)}
                      />
                      <label htmlFor="suicidalIdeationUrgencyno">NO</label>
                    </div>
                  </div>

                  <div className="yeschechbox1" style={{ marginLeft: "3rem" }}>
                    <label>Severity:</label>
                    <div
                      style={{
                        display: "flex",
                        gap: "7px",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="currentThoughtsOfHarmingSelf"
                        checked={suicidalIdeationSeverity === true}
                        onChange={() => setSuicidalIdeationSeverity(true)}
                      />
                      <label htmlFor="currentThoughtsOfHarmingSelf">Yes</label>
                    </div>
                    <div className="increasingClassInternal-child-no">
                      <input
                        type="checkbox"
                        id="suicidalIdeationSeverityno"
                        checked={suicidalIdeationSeverity === false}
                        onChange={() => setSuicidalIdeationSeverity(false)}
                      />
                      <label htmlFor="suicidalIdeationSeverityno">No</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="yeschechbox1">
                <label style={{ fontWeight: "bold" }}>
                  Are you currently thinking about harming others or have
                  homicidal thoughts?
                </label>

                <div className="safetyRiskLast">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingOthers"
                      checked={currentThoughtsOfHarmingOthers === true}
                      onChange={() => setCurrentThoughtsOfHarmingOthers(true)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingOthers">Yes</label>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="checkbox"
                      id="currentThoughtsOfHarmingOthersno"
                      checked={currentThoughtsOfHarmingOthers === false}
                      onChange={() => setCurrentThoughtsOfHarmingOthers(false)}
                    />
                    <label htmlFor="currentThoughtsOfHarmingOthersno">No</label>
                  </div>
                </div>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Risk Factors:</h6>
              </div>

              <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  <table>
                    <thead>
                      <tr>
                        <th>Select risk factors that apply</th>
                        <th>Yes</th>
                        <th>No</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Current suicidal ideation </td>
                        <td>
                          <input type="checkbox"  checked={riskYesNo === true}
                      onChange={() => setRiskYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  checked={riskYesNo === false}
                      onChange={() => setRiskYesNo(false)} />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={riskComment}
                            onChange={(e)=>{setRiskComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Prior suicide attempt</td>
                        <td>
                          <input type="checkbox" checked={PriorYesNo === true}
                      onChange={() => setPriorYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={PriorYesNo === false}
                      onChange={() => setPriorYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={PriorComment}
                            onChange={(e)=>{setPriorComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Access to means (i.e. weapon)</td>
                        <td>
                          <input type="checkbox" 
                          checked={AccessYesNo === true}
                          onChange={() => setAccessYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={AccessYesNo === false}
                      onChange={() => setAccessYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={AccessComment}
                            onChange={(e)=>{setAccessComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Substance abuse</td>
                        <td>
                          <input type="checkbox" 
                          checked={SubstanceYesNo === true}
                          onChange={() => setSubstanceYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SubstanceYesNo === false}
                          onChange={() => setSubstanceYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={SubstanceAbuseComment}
                            onChange={(e)=>{setSubstanceCommentAbuse(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Other self-abusing behavior</td>
                        <td>
                          <input type="checkbox" 
                          checked={abusingYesNo === true}
                          onChange={() => setabusingYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={abusingYesNo === false}
                          onChange={() => setabusingYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={abusingComment}
                            onChange={(e)=>{setabusingComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Recent losses/lack of support</td>
                        <td>
                          <input type="checkbox" 
                          checked={RecentYesNo === true}
                          onChange={() => setRecentYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={RecentYesNo === false}
                          onChange={() => setRecentYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={RecentComment}
                            onChange={(e)=>{setRecentComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Behavior cues</td>
                        <td>
                          <input type="checkbox" 
                          checked={behaviourYesNO === true}
                          onChange={() => setBehaviourYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={behaviourYesNO === false}
                          onChange={() => setBehaviourYesNo(false)}/>
                        </td>
                        <td>
                     
                          <Select
                            value={behaviorcuesDropDown}
                            isMulti
                            options={selectedValueRiskFactorsOption1}
                            onChange={
                              selectedValueRiskFactorsHandlerBehaviorcues
                            }
                            isCreatable={true}
                            onKeyDown={
                              handleKeySelectedValueRiskFactorsBehavior
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Symptoms of psychosis </td>
                        <td>
                          <input type="checkbox" 
                          checked={SymptomsYesNO === true}
                          onChange={() => setSymptomsYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SymptomsYesNO === false}
                          onChange={() => setSymptomsYesNo(false)}/>
                        </td>
                        <td>
                          
                          <Select
                            value={symptomsOfPsychosisDropDown}
                            isMulti
                            options={selectedValueRiskFactorsOption2}
                            onChange={selectedValueRiskFactorsHandlerSymptoms}
                            isCreatable={true}
                            onKeyDown={
                              handleKeySelectedValueRiskFactorsSymptoms
                            }
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Family history of suicide</td>
                        <td>
                          <input type="checkbox"
                         checked={FamilyYesNO === true}
                          onChange={() => setFamilyYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={FamilyYesNO === false}
                          onChange={() => setFamilyYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Family}
                            onChange={(e)=>{setFamily(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Terminal physical illness</td>
                        <td>
                          <input type="checkbox" 
                          checked={TerminalYesNO === true}
                          onChange={() => setTerminalYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={TerminalYesNO === false}
                          onChange={() => setTerminalYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Terminal}
                            onChange={(e)=>{setTerminal(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Current stressors (specify)</td>
                        <td>
                          <input type="checkbox" 
                          checked={CurrentYesNO === true}
                          onChange={() => setCurrentYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={CurrentYesNO === false}
                          onChange={() => setCurrentYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={Current}
                            onChange={(e)=>{setCurrent(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Chronic pain</td>
                        <td>
                          <input type="checkbox" 
                          checked={ChronicYesNO === true}
                          onChange={() => setChronicYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={ChronicYesNO === false}
                          onChange={() => setChronicYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                            value={ChronicPain}
                            onChange={(e)=>{setChronicPain(e.target.value)}}
                          />
                        </td>
                      </tr>
                      {riskFactorArray.length > 0 && (
                  
                        riskFactorArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              {i.type}
                            </td>
                            <td><input type="checkbox" checked={i.yesNo===true}/></td>
                            <td><input type="checkbox" checked={i.yesNo===false}/></td>
                            <td>{` ${i.comment}`} </td>
                          </tr>
                        ))
                   
                  )}
                      <tr>
                        <td>Other: 
                          <input
                          type="text"
                          value={otherRiskOther}
                          placeholder="__________"
                          className="treatment_plan_table"
                          onChange={(e)=>setOtherRiskOther(e.target.value)}/> </td>
                        <td>
                          <input type="checkbox" checked={otherRiskYesOrNot===true} onChange={()=>setOtherRiskOtherYesOrNot(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={otherRiskYesOrNot===false} onChange={()=>setOtherRiskOtherYesOrNot(false)} />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="____________"
                            value={otherRiskComment}
                            onChange={(e)=>setOtherRiskComment(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                 <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleRiskFactor}
                >
                  Add
                </button>
              </div>


              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Protective factors:</h6>
              </div>

              <div className="needs-interventions-container2 table-respnosive">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <tr>
                        <th>Protective factors that apply</th>
                        <th>Yes</th>
                        <th>No</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Supports available (family friends)</td>
                        <td>
                          <input type="checkbox" 
                          checked={SupportsYesNo === true}
                          onChange={() => setSupportsYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SupportsYesNo === false}
                          onChange={() => setSupportsYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={SupportsComment}
                            onChange={(e)=>{setSupportsComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Spiritual / religious support</td>
                        <td>
                          <input type="checkbox" 
                          checked={SpiritualYesNo === true}
                          onChange={() => setSpiritualYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={SpiritualYesNo === false}
                          onChange={() => setSpiritualYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={SpiritualComment}
                            onChange={(e)=>{setSpiritualComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Religious/cultural prohibitions</td>
                        <td>
                          <input type="checkbox" 
                           checked={ReligiousYesNo === true}
                           onChange={() => setReligiousYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                           checked={ReligiousYesNo === false}
                           onChange={() => setReligiousYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={ReligiousComment}
                            onChange={(e)=>{setReligiousComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Fear of consequences</td>
                        <td>
                          <input type="checkbox" 
                          checked={FearYesNo === true}
                          onChange={() => setFearYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={FearYesNo === false}
                          onChange={() => setFearYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={FearComment}
                            onChange={(e)=>{setFearComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Able to be engaged in intervention</td>
                        <td>
                          <input type="checkbox" 
                          checked={interventionYesNo === true}
                          onChange={() => setInterventionYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox" 
                          checked={interventionYesNo === false}
                          onChange={() => setInterventionYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={interventionComment}
                            onChange={(e)=>{setInterventionComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Willing to commit to keeping self safe</td>
                        <td>
                          <input type="checkbox"  
                          checked={WillingYesNo === true}
                          onChange={() => setWillingYesNo(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  
                          checked={WillingYesNo === false}
                          onChange={() => setWillingYesNo(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={WillingComment}
                            onChange={(e)=>{setWillingComment(e.target.value)}}
                          />
                        </td>
                      </tr>
                       {protectiveFactorsArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              {i?.type}
                            </td>
                           <td><input type="checkbox" checked={i.yesNo===true}/></td>
                           <td><input type="checkbox" checked={i.yesNo===false}/></td>
                            <td>{` ${i.comment}`} </td>
                          </tr>
                        ))} 
                           <tr>
                        <td>Other: <input type="text" 
                        className="treatment_plan_table"
                        placeholder="__________"
                        value={otherProtectiveFactorsApply} onChange={(e)=>setOtherProtectiveFactorsApply(e.target.value)}/></td>
                        <td>
                          <input type="checkbox" checked={otherProtectiveFactorsYesNo===true} onChange={()=>setOtherProtectiveFactorsYesNO(true)}/>
                        </td>
                        <td>
                          <input type="checkbox"  checked={otherProtectiveFactorsYesNo===false} onChange={()=>setOtherProtectiveFactorsYesNO(false)}/>
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                            value={otherProtectiveFactorsDescription}
                            onChange={(e)=>setOtherProtectiveFactorsDescription(e.target.value)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleProtectiveFactors}
                >
                  Add
                </button>
              </div>

           

              <div className="formsheading">
                <p>
                  Considering the responses to the above risk factors in
                  combination with all the other information you know about the
                  person (gender, age, diagnosis, balancing factors-resiliency
                  and supports, would you rate the level of risk for this person
                  for danger to self (DTS) as:
                </p>
              </div>
              <div className="yeschechbox_select-4">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "No Risk"}
                    onChange={() => setRiskLevel("No Risk")}
                  />
                  <label>No Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "Low Risk"}
                    onChange={() => setRiskLevel("Low Risk")}
                  />
                  <label>Low Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "Moderate Risk"}
                    onChange={() => setRiskLevel("Moderate Risk")}
                  />
                  <label>Moderate Risk</label>
                </div>
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    checked={riskLevel === "High Risk"}
                    onChange={() => setRiskLevel("High Risk")}
                  />
                  <label>High Risk</label>
                </div>
              </div>
              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Diagnoses:</h6>
              </div>
             

            

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th>Psychiatric Diagnoses</th>
                      <th>ICD Code</th>
                      <th>Description</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary*</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricPrimaryIcdCode}
                            onChange={(e)=>setPsychiatricPrimaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricPrimaryDescription
                                ? psychiatricPrimaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricPrimaryDescription || ""}
                        
                            placeholder="___________"
                            onChange={(e) => setPsychiatricPrimaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricPrimaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricSecondaryicdCode}
                            onChange={(e)=>setPsychiatricSecondaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricSecondaryDescription
                                ? psychiatricSecondaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricSecondaryDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setPsychiatricSecondaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricSecondaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tertiary</td>
                        <td>
                        <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricTertiaryIcdCode}
                            onChange={(e)=>setPsychiatricTertiaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricTertiaryDescription
                                ? psychiatricTertiaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricTertiaryDescription || ""}
                            
                            placeholder="___________"
                            onChange={(e) => setPsychiatricTertiaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricTertiaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Additional</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={psychiatricAdditionalicdCode}
                            onChange={(e)=>setPsychiatricAdditionalIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              psychiatricAdditionalDescription
                                ? psychiatricAdditionalDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={psychiatricAdditionalDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setPsychiatricAdditionalDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPsychiatricAdditionalDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                     
                        {
                          psychiatricDiagnosesArray.map((i)=>
                          <tr>
                            <td>{i?.name}</td>
                            <td>{i?.icdCode}</td>
                            <td>{i?.description}</td>
                            
                          </tr>)
                        }
                  
                      <tr>
                        <td>Other: <input
                        className="treatment_plan_table"
                        type="text"
                        value={otherPsychiatricOption}
                        placeholder="__________"
                        onChange={(e)=>setOtherPsychiatricOption(e.target.value)}
                        /></td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={othericdCode}
                            onChange={(e)=>setOtherIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              otherdescription.split("\n").length,
                              1
                            )}
                            value={otherdescription}
                            placeholder="___________"
                            onChange={(e) => setOtherDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handlePsychiatricDiagnoses}
                >
                  Add
                </button>
              </div>
           

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Medical Diagnoses:</h6>
              </div>

              <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <th>Medical Diagnoses</th>
                      <th>ICD Code</th>
                      <th>Description</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Primary*</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={primaryIcdCode}
                            onChange={(e)=>setPrimaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              primaryDescription
                                ? primaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={primaryDescription || ""}
                          
                            placeholder="___________"
                            onChange={(e) => setPrimaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setPrimaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Secondary</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={secondaryicdCode}
                            onChange={(e)=>setSecondaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              secondaryDescription
                                ? secondaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={secondaryDescription || ""}
                           
                            placeholder="___________"
                            onChange={(e) => setSecondaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setSecondaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Tertiary</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={TertiaryIcdCode}
                            onChange={(e)=>setTertiaryIcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              TertiaryDescription
                                ? TertiaryDescription.split("\n").length
                                : 1,
                              1
                            )}
                            value={TertiaryDescription || ""}
                      
                            placeholder="___________"
                            onChange={(e) => setTertiaryDescription(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setTertiaryDescription(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Additional</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={Additional1icdCode}
                            onChange={(e)=>setAdditional1IcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              Additional1Description
                                ? Additional1Description.split("\n").length
                                : 1,
                              1
                            )}
                            value={Additional1Description || ""}
                         
                            placeholder="___________"
                            onChange={(e) => setAdditional1Description(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAdditional1Description(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                      
                      {
                          medicalDiagnosesArray.map((i)=>
                          <tr>
                            <td>{i?.name}</td>
                            <td>{i?.icdCode}</td>
                            <td>{i?.description}</td>
                            
                          </tr>)
                        }
                  
                      <tr>
                        <td>Other: <input
                        className="treatment_plan_table"
                        type="text"
                        value={OtherMedicalOption}
                        placeholder="__________"
                        onChange={(e)=>setOtherMedicalOption(e.target.value)}
                        /></td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={OthericdCodeMedicalDiagnoses}
                            onChange={(e)=>setOtherIcdCodeMedicalDiagnoses(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              OtherdescriptionMedicalDiagnoses.split("\n").length,
                              1
                            )}
                            value={OtherdescriptionMedicalDiagnoses}
                            placeholder="___________"
                            onChange={(e) => setOtherDescriptionMedicalDiagnoses(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherDescriptionMedicalDiagnoses(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                 <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleMedicalDiagnoses}
                >
                  Add
                </button>
              </div>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Psychosocial or Environmental Stressors
                </h6>
                <h6 style={{ fontWeight: "bold" }}>
                  Problems with / related to:
                </h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12-aligment4">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="primarySupportGroup"
                        checked={primarySupportGroup}
                        onChange={() =>
                          setPrimarySupportGroup(!primarySupportGroup)
                        }
                      />
                      <label htmlFor="primarySupportGroup">
                        Primary Support Group
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="educationalProblems"
                        checked={educationalProblems}
                        onChange={() =>
                          setEducationalProblems(!educationalProblems)
                        }
                      />
                      <label htmlFor="educationalProblems">
                        Educational problems
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="occupationalProblems"
                        checked={occupationalProblems}
                        onChange={() =>
                          setOccupationalProblems(!occupationalProblems)
                        }
                      />
                      <label htmlFor="occupationalProblems">
                        Occupational problems
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="sexualProblems"
                        checked={sexualProblems}
                        onChange={() => setSexualProblems(!sexualProblems)}
                      />
                      <label htmlFor="sexualProblems">Sexual problems</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="maritalProblems"
                        checked={maritalProblems}
                        onChange={() => setMaritalProblems(!maritalProblems)}
                      />
                      <label htmlFor="maritalProblems">Marital problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="housingProblems"
                        checked={housingProblems}
                        onChange={() => setHousingProblems(!housingProblems)}
                      />
                      <label htmlFor="housingProblems">Housing problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="interactionWithLegalSystem"
                        checked={interactionWithLegalSystem}
                        onChange={() =>
                          setInteractionWithLegalSystem(
                            !interactionWithLegalSystem
                          )
                        }
                      />
                      <label htmlFor="interactionWithLegalSystem">
                        Interaction with legal system
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="otherBoolean"
                        checked={otherBoolean}
                        onChange={() => setOtherBoolean(!otherBoolean)}
                      />
                      <label htmlFor="otherBoolean">
                        Other (please specify)
                      </label>
                      {otherBoolean && (
                    
                        <AutoSize value={otherStressors} setValue={setOtherStressors} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="accessToHealthCareServices"
                        checked={accessToHealthCareServices}
                        onChange={() =>
                          setAccessToHealthCareServices(
                            !accessToHealthCareServices
                          )
                        }
                      />
                      <label htmlFor="accessToHealthCareServices">
                        Access to health care services
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="familyProblems"
                        checked={familyProblems}
                        onChange={() => setFamilyProblems(!familyProblems)}
                      />
                      <label htmlFor="familyProblems">Family problems</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="substanceUseInHome"
                        checked={substanceUseInHome}
                        onChange={() =>
                          setSubstanceUseInHome(!substanceUseInHome)
                        }
                      />
                      <label htmlFor="substanceUseInHome">
                        Substance use in home
                      </label>
                    </div>
                    <div class="checkboxitem"></div>
                  </div>
                </div>
              </div>

              <div className="yeschechbox-significant">
                
                <div className="Significant-losses">
                <label style={{ fontWeight: "bold" }}>
                  Significant recent losses:
                </label>
                  <input
                    type="checkbox"
                    id="setSetNoAndYes"
                    checked={setNoAndYes === true}
                    onChange={() => setSetNoAndYes(true)}
                  />
                  <label htmlFor="setSetNoAndYes">Yes</label>
                </div>

                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="setSetNoAndYesno"
                    checked={setNoAndYes === false}
                    onChange={() => setSetNoAndYes(false)}
                  />
                  <label htmlFor="setSetNoAndYesno">No</label>
                  <label style={{ paddingLeft: "10px", marginBottom: "6px" }}>
                    If yes, please check applicable loss(es):
                  </label>
                </div>
              </div>

              <div className="formsheading">
           
              </div>
              <div class="checkbox-container">
                <div class="chechbox12-correct">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="death"
                        checked={death}
                        onChange={() => setDeath(!death)}
                      />
                      <label htmlFor="death">Death</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="injury"
                        checked={injury}
                        onChange={() => setInjury(!injury)}
                      />
                      <label htmlFor="injury">Injury</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="medicalSurgical"
                        checked={medicalSurgical}
                        onChange={() => setMedicalSurgical(!medicalSurgical)}
                      />
                      <label htmlFor="medicalSurgical">
                        Medical/ surgical{" "}
                      </label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="job"
                        checked={job}
                        onChange={() => setJob(!job)}
                      />
                      <label htmlFor="job">Job</label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="divorceSeparation"
                        checked={divorceSeparation}
                        onChange={() =>
                          setDivorceSeparation(!divorceSeparation)
                        }
                      />
                      <label htmlFor="divorceSeparation">
                        Divorce / separation{" "}
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="accidentInjury"
                        checked={accidentInjury}
                        onChange={() => setAccidentInjury(!accidentInjury)}
                      />
                      <label htmlFor="accidentInjury">Accident /injury</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="childRemovedFromHouse"
                        checked={childRemovedFromHouse}
                        onChange={() =>
                          setChildRemovedFromHouse(!childRemovedFromHouse)
                        }
                      />
                      <label htmlFor="childRemovedFromHouse">
                        Child removed from house
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="violentActsAgainstPersonFamily"
                        checked={violentActsAgainstPersonFamily}
                        onChange={() =>
                          setViolentActsAgainstPersonFamily(
                            !violentActsAgainstPersonFamily
                          )
                        }
                      />
                      <label htmlFor="violentActsAgainstPersonFamily">
                        Violent acts against person/family{" "}
                      </label>
                    </div>
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="otherSignificantRecentLosses"
                        checked={otherSignificantRecentLosses}
                        onChange={() =>
                          setOtherSignificantRecentLosses(
                            !otherSignificantRecentLosses
                          )
                        }
                      />
                      <label htmlFor="otherSignificantRecentLosses">
                        Other (please specify)
                      </label>
                      {otherSignificantRecentLosses && (
                    
                        <AutoSize value={otherSignificantRecentLossesType} setValue={setOtherSignificantRecentLossesType} placeholder={"_______________"}/>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Additional Notes:</label>
                  <input
                    type="text"
                    id="approvedby"
                    value={additionalNotes}
                    placeholder="Enter text"
                    style={{borderBottom:'none'}}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                  />
                </div>
              </div>

              <div class="checkbox-container1">
                <div class="checkoptions1" style={{ marginTop: "1.2rem" }}>
                  <div class="checkboxitem1">
                    <input
                      type="checkbox"
                      checked={acceptResident === true}
                      onChange={() => setAcceptResident(true)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      {" "}
                      Yes, I (Resident/guardian) am in agreement with the types
                      and levels of services included in my behavior plan.
                    </span>
                  </div>
                  <div class="checkboxitem12" style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      checked={acceptResident === false}
                      onChange={() => setAcceptResident(false)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      No, I (Resident/guardian) disagree with the types and/or
                      levels of some or all of the services. By checking this
                      box, I (Resident/guardian) will receive the services that
                      I have agreed to receive and may appeal the treatment
                      team’s decision to not include all the types and/ or
                      levels of services that I have requested.
                    </span>
                  </div>
                </div>
              </div>

  
              <div
                className="box-image-container"
                style={{ paddingBottom: "10px" }}
              >
                <div className="form-field-single-update">
                  <label>Resident/Guardian name:</label>
                  <input
                    type="text"
                    value={residentGuardianName}
                    placeholder="Enter text"
                    
                    style={{borderBottom:'none'}}
                    onChange={(e) => setResidentGuardianName(e.target.value)}
                  />
                </div>

                <div
                  class="file-upload-box "
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child hidePrint">
                    <button
                      className="upload-button1"
                      type="button"
                      onClick={() => setDraftModel(true)}
                    >
                      SAVED AS DRAFT
                    </button>
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => setSigInModel8(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {residentGauardianSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {residentGauardianSignature}{" "}
                        {residentGuardianDate}{" "}
                        {residentGuardianTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel8 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel8(false)}
                    singin={residentGauardianSignature}
                    setSingIn={setResidentGauardianSignature}
                    setDateAndTime={setResidentGuardianDate}
                    setSignatureTime={setResidentGuardianTime}
                  />
                )}
    
                <div className="form-field-single-update">
                  <label>Staff name, title:</label>
                  <input
                    type="text"
                    id="approvedby"
                    required
                    value={staffName}
                    placeholder="Enter text"
                    style={{borderBottom:'none'}}
                    onChange={(e) => setStaffName(e.target.value)}
                  />
                </div>

                <div
                  class="file-upload-box hidePrint"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child">
                    <button
                      className="upload-button1"
                      type="button"
                      onClick={() => setDraftModel(true)}
                    >
                      SAVED AS DRAFT
                    </button>
                    <button
                      className="upload-button"
                      type="button"
                      onClick={() => setSigInModel6(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {staffSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {staffSignature}{" "} {staffDate}{" "}
                        {staffDateTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel6 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel6(false)}
                    singin={staffSignature}
                    setSingIn={setStaffSignature}
                    setDateAndTime={setStaffDate}
                    setSignatureTime={setStaffDateTime}
                  />
                )}

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="approvedby">BHP Name:</label>
                    <input
                      type="text"
                      id="approvedby"
                      value={bhpName}
                      required
                      placeholder="Enter text"
                      style={{borderBottom:'none'}}
                      onChange={(e) => setBhpName(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label htmlFor="bhpCredentials">
                      BHP Credentials:
                    </label>
                    <input
                      type="text"
                      style={{borderBottom:'none'}}
                      required
                      value={bhpCredentials}
                      onChange={(e) => setBhpCredentials(e.target.value)}
                    />
                  </div>
                </div>

                <div
                  class="file-upload-box hidePrint"
                  style={{ marginLeft: "10px" }}
                >
                  <div className="file-upload-box-child">
                    <div>
                      <button
                        className="upload-button1"
                        type="button"
                        onClick={() => setDraftModel(true)}
                      >
                        SAVED AS DRAFT
                      </button>
                    </div>
                    <div>
                      <button
                        className="upload-button"
                        type="button"
                        onClick={() => setSigInModel7(true)}
                      >
                        SAVED AND SIGNED
                      </button>
                    </div>
                    <div>
                      <button
                        className="upload-button signature_shift_margin"
                        type="button"
                        onClick={handlePrint2}
                      >
                        PRINT THIS FORM
                      </button>
                    </div>
                  </div>
                  <div>
                    {bhpSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {bhpSignature}{" "} {bhpDate} {" "}
                        {bhpTime}
                      </p>
                    )}
                  </div>
                </div>

                {signInModel7 && (
                  <SingInUpdateModel
                    onClose={() => setSigInModel7(false)}
                    singin={bhpSignature}
                    setSingIn={setBhpSignature}
                    setDateAndTime={setBhpDate}
                    setSignatureTime={setBhpTime}
                  />
                )}
              </div>
            </div>

          
          <div className="form-actions hidePrint">
              <button type="submit"  style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center",marginTop:"1.5rem"}} >
              SUBMIT DETAILS
            </button>
            </div>
          </form>
        </div>
        {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
      </div>
      </div>
    </>
  );
};

export default InitialAssessment;
