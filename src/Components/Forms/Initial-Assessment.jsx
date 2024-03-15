// ResidentForm.js

import React, { useEffect, useState } from "react";
import "./Initial-Assessment.css";
import FormUpper from "./FormsUpperbar";
import formupload from "../../img/formupload.png";
import Chechkbox from "../chechkbox";
import { AiFillDelete } from "react-icons/ai";
import locate from "../../img/locate.png";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { user_detail, initialAssestment_form } from "../../Api_Collection/Api";
import Select from "react-select";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import Draftinmodel from "../Modal/Draftinmodel";

import { useReactToPrint } from "react-to-print";
import { Form } from "react-bootstrap";
import AutoSize from "../AutoSize/AutoSize";
import TextareaAutosize from 'react-textarea-autosize';

const InitialAssessment = () => {
  const navigate = useNavigate();
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

  //singin model
  const [draftModel, setDraftModel] = useState(false);
  //  all model
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

  //state
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
  const [reasonForAdmissionBoolean, setReasonForAdmissionBoolean] =
    useState(false);
  const [reasonForAdmissionOther, setReasonForAdmissionOther] = useState("");
  const [residentGoals, setResidentGoals] = useState("");

  useEffect(() => {
    // setTypeOfOtherBoolean()
    for (let i = 0; i < reasonForAdmission.length; i++) {
      if (reasonForAdmission[i].value === "Other") {
        setReasonForAdmissionBoolean(true);
        break;
      } else {
        setReasonForAdmissionBoolean(false);
      }
    }
  }, [reasonForAdmission]);

  // Resident Strengths (Array)
  const [residentStrengths, setResidentStrengths] = useState([]);
  const [residentStrengthsOther, setResidentStrengthsOther] = useState("");
  const [residentStrengthsBoolean, setResidentStrengthsBoolean] =
    useState(false);

  useEffect(() => {
    // setTypeOfOtherBoolean()
    for (let i = 0; i < residentStrengths.length; i++) {
      if (residentStrengths[i].value === "Other") {
        setResidentStrengthsBoolean(true);
        break;
      } else {
        setResidentStrengthsBoolean(false);
        break;
      }
    }
  }, [residentStrengths]);

  const [residentLimitations, setResidentLimitations] = useState("");
  const [currentBehavioralIssues, setCurrentBehavioralIssues] = useState("");

  // Behavioral Interventions (Array of Objects)
  const [need, setNeed] = useState("");
  const [intervention, setIntervention] = useState("");
  const [behavioralInterventionsArray, setbehavioralInterventionsArray] =
    useState([]);

  // final array
  const [behavioralInterventions, setBehavioralInterventions] = useState([]);

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
  // const [residentGuardianAgreement, setResidentGuardianAgreement] = useState({});

  // Staff Agreement
  const [staffAgreementname, setStaffAgreementName] = useState("");
  const [staffAgreementSignature, setStaffAgreementSignature] = useState("");
  const [staffAgreementDate, setStaffAgreementDate] = useState("");
  // const [staffAgreement, setStaffAgreement] = useState({});

  // BHP Agreement
  const [bhpAgreementName, setBhpAgreementName] = useState("");
  const [bhpAgreementSignature, setBhpAgreementSignature] = useState("");
  const [bhpAgreementDate, setBhpAgreementDate] = useState("");
  // const [bhpAgreement, setBhpAgreement] = useState({});

  // Other
  const [otherName, setOtherName] = useState("");
  const [otherRelationship, setOtherRelationship] = useState("");
  const [otherSignature, setOtherSignature] = useState("");
  const [otherDate, setOtherDate] = useState("");
  // const [other, setOther] = useState({});

  // Medical Conditions (Array of Objects) array
  // diabetes
  const [diabetes, setDiabetes] = useState("");
  const [yesDiabetes, setYesDiabetes] = useState();
  const [noDiabetes, setNoDiabetes] = useState(false);
  const [commentDiabety, setCommentDeabetes] = useState("");

  //Heart disease / heart attack
  const [heart, setHeart] = useState("");
  const [yesHeart, setYesHeart] = useState();
  const [noHeart, setNoHeart] = useState(false);
  const [commentHeart, setCommentHeart] = useState("");

  //History
  const [history, setHistory] = useState("");
  const [yesHistory, setYesHistory] = useState();
  const [noHistory, setNoHistory] = useState(false);
  const [commentHistory, setCommentHistory] = useState("");

  //High Blood Pressure
  const [High, setHigh] = useState("");
  const [yesHigh, setYesHigh] = useState();
  const [noHigh, setNoHigh] = useState(false);
  const [commentHigh, setCommentHigh] = useState("");

  //Lung disease (ie asthma, COPD, emphysema)
  const [Lung, setLung] = useState("");
  const [yesLung, setYesLung] = useState();
  const [noLung, setNoLung] = useState(false);
  const [commentLung, setCommentLung] = useState("");

  //Seizures
  const [SeizuresMental, setSeizuresMental] = useState("");
  const [yesSeizures, setYesSeizures] = useState();
  const [noSeizures, setNoSeizures] = useState(false);
  const [commentSeizures, setCommentSeizures] = useState("");

  //Cancer
  const [Cancer, setCancer] = useState("");
  const [yesCancer, setYesCancer] = useState();
  const [noCancer, setNoCancer] = useState(false);
  const [commentCancer, setCommentCancer] = useState("");

  // Liver/kidney disease
  const [Liver, setLiver] = useState("");
  const [yesLiver, setYesLiver] = useState();
  const [noLiver, setNoLiver] = useState(false);
  const [commentLiver, setCommentLiver] = useState("");

  //Thyroid disorder
  const [Thyroid, setThyroid] = useState("");
  const [yesThyroid, setYesThyroid] = useState();
  const [noThyroid, setNoThyroid] = useState(false);
  //dropdown

  // History of head trauma/traumatic brain injury
  const [brain, setBrain] = useState("");
  const [yesbrain, setYesBrain] = useState();
  const [nobrain, setNoBrain] = useState(false);
  const [commentbrain, setbrain] = useState("");

  // injury
  // const [injury,setInjury] =useState("")
  const [yesInjury, setYesInjury] = useState();
  const [noInjury, setNoInjury] = useState(false);
  const [commentInjury, setCommentInjury] = useState("");

  //Chronic painChronic pain
  const [Chronic, setChronic] = useState("");
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

  // Personality disorder (please specify
  const [PersonalityYes, setPersonalityYes] = useState();
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
  const [infectionDiseasesBoolean, setInfectionDiseasesBoolean] =
    useState(false);
  const [infectionDiseasesOther, setInfectionDiseasesOther] = useState("");

  //section 2 condition other array
 const [OtherConditionOther,setOtherConditionOther]=useState("")
 const [otherConditionYesNO,setOtherConditionYesNo]=useState();
 const [otherConditionDiscription,setOtherConditionDiscription]=useState("")

 const [otherConditionArray,setOtherConditionArray]=useState([]);
  const handleAddCondition=()=>{
    if(OtherConditionOther || otherConditionYesNO || otherConditionDiscription ){
      const data={
        OtherConditionOther,
        otherConditionYesNO,
        otherConditionDiscription
      }
      setOtherConditionArray((prev)=>[...prev,data]);
      setOtherConditionOther("");
      setOtherConditionYesNo();
      setOtherConditionDiscription("");
    }
  }


  useEffect(() => {
    // setTypeOfOtherBoolean()
    for (let i = 0; i < infectionDiseases.length; i++) {
      if (infectionDiseases[i].value === "Other") {
        setInfectionDiseasesBoolean(true);
        break;
      } else {
        setInfectionDiseasesBoolean(false);
        break;
      }
    }
  }, [infectionDiseases]);

  const [medicalConditions, setMedicalConditions] = useState([]);

  // miss the value between the 79 to 99
  const [
    SignificantFamilyMedicalPsychiatricHistory,
    setSignificantFamilyMedicalPsychiatricHistory,
  ] = useState([]);
  const [
    significantFamilyMedicalPsychiatricHistoryBoolean,
    setSignificantFamilyMedicalPsychiatricHistoryBoolean,
  ] = useState(false);
  const [
    SignificantFamilyMedicalPsychiatricHistoryType,
    setSignificantFamilyMedicalPsychiatricHistoryType,
  ] = useState("");

  useEffect(() => {
    for (
      let i = 0;
      i < SignificantFamilyMedicalPsychiatricHistory.length;
      i++
    ) {
      if (SignificantFamilyMedicalPsychiatricHistory[i].value === "Other") {
        setSignificantFamilyMedicalPsychiatricHistoryBoolean(true);
        break;
      } else {
        setSignificantFamilyMedicalPsychiatricHistoryBoolean(false);
        break;
      }
    }
  }, [SignificantFamilyMedicalPsychiatricHistory]);

  const [
    mentalHealthTreatmentHistoryTypeOfService,
    setMentalHealthTreatmentHistoryTypeOfService,
  ] = useState([]);
  const [
    mentalHealthTreatmentHistoryTypeOfServiceType,
    setMentalHealthTreatmentHistoryTypeOfServiceType,
  ] = useState("");
  const [
    mentalHealthTreatmentHistoryTypeOfServiceBoolean,
    setMentalHealthTreatmentHistoryTypeOfServiceBoolean,
  ] = useState(false);

  useEffect(() => {
    for (let i = 0; i < mentalHealthTreatmentHistoryTypeOfService.length; i++) {
      if (mentalHealthTreatmentHistoryTypeOfService[i].value === "Other") {
        setMentalHealthTreatmentHistoryTypeOfServiceBoolean(true);
        break;
      } else {
        setMentalHealthTreatmentHistoryTypeOfServiceBoolean(false);
        break;
      }
    }
  }, [mentalHealthTreatmentHistoryTypeOfService]);

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
  const [
    mentalHealthTreatmentHistoryDiagnosisReasonBoolean,
    setMentalHealthTreatmentHistoryDiagnosisReasonBoolean,
  ] = useState(false);
  const [
    mentalHealthTreatmentHistoryDiagnosisReasonType,
    setMentalHealthTreatmentHistoryDiagnosisReasonType,
  ] = useState("");

  useEffect(() => {
    for (
      let i = 0;
      i < mentalHealthTreatmentHistoryDiagnosisReason.length;
      i++
    ) {
      if (
        mentalHealthTreatmentHistoryDiagnosisReason[i].value ===
        "DTS/DTO Other (Please specify)"
      ) {
        setMentalHealthTreatmentHistoryDiagnosisReasonBoolean(true);
        break;
      } else {
        setMentalHealthTreatmentHistoryDiagnosisReasonBoolean(false);
        break;
      }
    }
  }, [mentalHealthTreatmentHistoryDiagnosisReason]);

  // const [mentalHealthTreatmentHistory, setMentalHealthTreatmentHistory] =
  //   useState([]);

  const [substanceAbuseHistory, setSubstanceAbuseHistory] = useState("");
  const [substanceAbuseDenies, setSubstanceAbuseDenies] = useState("");
  // substanceAbuseHistoryData array
  const [substanceAbuseHistoryDataTypes, setSubstanceAbuseHistoryDataTypes] =
    useState([]);
  const [
    substanceAbuseHistoryDataTypesBoolean,
    setSubstanceAbuseHistoryDataTypesBoolean,
  ] = useState(false);
  const [
    substanceAbuseHistoryDataTypesType,
    setSubstanceAbuseHistoryDataTypesType,
  ] = useState("");

  //type of service
  const [typeOfServiceArray, setTypeOfServicesArray] = useState([]);
  const handleTypeOfService = () => {
    if (
      mentalHealthTreatmentHistoryDiagnosisReason &&
      mentalHealthTreatmentHistoryDates &&
      mentalHealthTreatmentHistoryWhere &&
      mentalHealthTreatmentHistoryTypeOfService
    ) {
      const data = {
        mentalHealthTreatmentHistoryDiagnosisReason,
        mentalHealthTreatmentHistoryDates,
        mentalHealthTreatmentHistoryWhere,
        mentalHealthTreatmentHistoryTypeOfService,
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

  // type of age, frequancy,last use, length of soberty
  //Alcohol
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

  // arrthe value in array
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
        otherTypeOther,
        otherAgeOfFirstUse,
        otherLastUse,
        otherFrequancy,
        OtherlengthOfSobrifty,
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
    useState();
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

  const [activeWithdrawalSymptoms, setActiveWithdrawalSymptoms] = useState({});

  // Mental Status Exam (Nested Object)
  //peding more satte (__ to 283)
  //mental state value

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

  //Posture
  const [normalPosture, setNormalPosture] = useState(false);
  const [relaxed, setRelaxed] = useState(false);
  const [rigid, setRigid] = useState(false);
  const [tense, setTense] = useState(false);
  const [slouched, setSlouched] = useState(false);

  //PsychomotorActivity
  const [withinNormalLimits, setWithinNormalLimits] = useState(false);
  const [calm, setCalm] = useState(false);
  const [hyperactive, setHyperactive] = useState(false);
  const [agitated, setAgitated] = useState(false);
  const [hypoactive, setHypoactive] = useState(false);

  //Mannerisms
  const [none, setNone] = useState(false);
  const [tics, setTics] = useState(false);
  const [tremorsMannerisms, setTremorsMannerisms] = useState(false);
  const [rocking, setRocking] = useState(false);
  const [picking, setPicking] = useState(false);
  //Orientation to Person:
  //orientation
  const [person, setPerson] = useState();
  const [place, setPlace] = useState();
  const [time, setTime] = useState();
  const [circumstances, setCircumstances] = useState();

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

  const [mentalStatusExam, setMentalStatusExam] = useState();

  // Significant Social Developmental History
  const [
    significantSocialDevelopmentalHistory,
    setSignificantSocialDevelopmentalHistory,
  ] = useState("");

  // Personal Information (Nested Object)
  const [highestEducation, setHighestEducation] = useState("");
  const [specialEducation, setSpecialEducation] = useState();
  const [currentStudent, setCurrentStudent] = useState();
  const [currentStudentLocation, setCurrentStudentLocation] = useState("");
  const [personalInformation, setPersonalInformation] = useState({});

  const [ifYesWhere, setIfYesWhere] = useState("");
  // Employment History (Nested Object)
  const [currentlyEmployed, setCurrentlyEmployed] = useState();
  const [employmentLocation, setEmploymentLocation] = useState("");
  const [fullTime, setFullTime] = useState();
  const [employmentHistory, setEmploymentHistory] = useState({});

  const [workHistory, setWorkHistory] = useState("");

  // Military History (Nested Object)
  const [militaryService, setMilitaryService] = useState();
  const [activeDuty, setActiveDuty] = useState("");
  const [militaryHistory, setMilitaryHistory] = useState({});

  // Arrested History (Multiple Fields)
  const [selectedValue, setSelectedValue] = useState([]);

  // Activities of Daily Living (ADLs)
  const [bathingShoweringGood, setBathingShoweringGood] = useState([]);
  const [typesOfActivityOther, setTypesOfActivityOther] = useState("");
  //implment type of other activity
  const [typeOfOtherBoolean, setTypeOfOtherBoolean] = useState(false);
  useEffect(() => {
    // setTypeOfOtherBoolean()
    for (let i = 0; i < bathingShoweringGood.length; i++) {
      if (bathingShoweringGood[i].value === "Other(specify)") {
        setTypeOfOtherBoolean(true);
        break;
      } else {
        setTypeOfOtherBoolean(false);
      }
    }
  }, [bathingShoweringGood]);

  // const [bathingShoweringFair, setBathingShoweringFair] = useState();
  // const [bathingShoweringNeedAssist, setBathingShoweringNeedAssist] =
    // useState();

    // Current Independent Living Skills:
    const [otherCurrentOther,setOtherCurrentOther]=useState("");
    const [otherCurrentGood,setOtherCurrentGood]=useState(false);
    const [otherCurrentFair,setOtherCurrentFair]=useState(false);
    const [otherCurrentNotSoGood,setOtherCurrentNotSoGood]=useState(false);
    const [otherCurrentNeed,setOtherCurrentNeed]=useState("");
    const [otherCurrentComment,setOtherCurrentComment]=useState("");



  const [handleRiskFactorActivityArray, setHandleRiskFactorActivityArray] =
    useState([]);

  const handleRiskFactorActivity = () => {
    const newData = {
      otherCurrentOther,
      otherCurrentGood,
      otherCurrentFair,
      otherCurrentNotSoGood,
      otherCurrentNeed,
      otherCurrentComment
    };
    setHandleRiskFactorActivityArray((prev) => [...prev, newData]);
    setOtherCurrentOther("");
    setOtherCurrentGood("");
    setOtherCurrentFair("");
    setOtherCurrentNotSoGood("");
    setOtherCurrentNeed("");
    setOtherCurrentComment("");
  };

  const [triggers, setTriggers] = useState("");
  const [fallRisk, setFallRisk] = useState("");
  const [fallRiskExplanation, setFallRiskExplanation] = useState("");

  const [hobbiesLeisureActivities, setHobbiesLeisureActivities] = useState("");

  // Medical Equipment
  const [selectedValueMedical, setSelectedValueMedical] = useState([]);
  const [selectedValueMedicalBoolean, setselectedValueMedicalBoolean] =
    useState(false);
  const [selectedValueMedicalType, setselectedValueMedicalType] = useState("");

  useEffect(() => {
    // setTypeOfOtherBoolean()
    for (let i = 0; i < selectedValueMedical.length; i++) {
      if (selectedValueMedical[i].value === "Other") {
        setselectedValueMedicalBoolean(true);
        break;
      } else {
        setselectedValueMedicalBoolean(false);
      }
    }
  }, [selectedValueMedical]);
  // Special Precautions (Nested Object)
  const [selectedValueSpecialPrecautions, setSelectedValueSpecialPrecautions] =
    useState([]);

  // jigjok
  const [currentThoughtsOfHarmingSelf, setCurrentThoughtsOfHarmingSelf] =
    useState();
  const [suicidalIdeation, setSuicidalIdeation] = useState("");
  const [suicidalIdeationUrgency, setSuicidalIdeationUrgency] = useState();
  const [suicidalIdeationSeverity, setSuicidalIdeationSeverity] = useState();
  const [currentThoughtsOfHarmingOthers, setCurrentThoughtsOfHarmingOthers] =
    useState();

  // Risk Factors (Nested Object)
  const [selectedValueRiskFactors, setSelectedValueRiskFactors] = useState([]);
  const [riskYesNo, setRiskYesNo] = useState();
  const [riskComment, setRiskComment] = useState("");
  const [riskFactorArray, setRiskFactoeArray] = useState([]);

  // drop down
  const [behaviorcuesDropDown, setBehaviorcuesDropDown] = useState([]);
  const [symptomsOfPsychosisDropDown, setSymptomsOfPsychosisDropDown] =
    useState([]);

    //risk factor other
    const [otherRiskOther,setOtherRiskOther ]=useState("")
    const [otherRiskYesOrNot,setOtherRiskOtherYesOrNot ]=useState()
    const [otherRiskComment,setOtherRiskComment ]=useState("")

  const handleRiskFactor = () => {
    const newData = {
      otherRiskOther,
      otherRiskYesOrNot,
      otherRiskComment,
    };
    setRiskFactoeArray((prev) => [...prev, newData]);
    setOtherRiskOther("");
    setOtherRiskOtherYesOrNot();
    setOtherRiskComment("");
  };
  const [riskFactors, setRiskFactors] = useState({});

  // State variables for protectiveFactors
  const [selectedValueProtectiveFactors, setSelectedValueProtectiveFactors] =
    useState([]);
  const [protectiveYesNo, setProtectiveYesNo] = useState();
  const [protectiveComment, setprotectiveComment] = useState("");


  // protectiveFactors other
  const [otherProtectiveFactorsApply,setOtherProtectiveFactorsApply]=useState("")
  const [otherProtectiveFactorsYesNo,setOtherProtectiveFactorsYesNO]=useState()
  const [otherProtectiveFactorsDescription,setOtherProtectiveFactorsDescription]=useState("")
  const [protectiveFactorsArray, setProtectiveFactorsArray] = useState([]);

  const handleProtectiveFactors = () => {
    const newData = {
      otherProtectiveFactorsApply,
      otherProtectiveFactorsYesNo,
      otherProtectiveFactorsDescription,
    };
    setProtectiveFactorsArray((prev) => [...prev, newData]);
    setOtherProtectiveFactorsApply("");
    setOtherProtectiveFactorsYesNO("");
    setOtherProtectiveFactorsDescription("");
  };

  const [protectiveFactors, setProtectiveFactors] = useState({});

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
        otherPsychiatricOption,
        othericdCode,
        otherdescription,
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
const [Additional2icdCode,setAdditional2IcdCode]=useState("");
const [Additional2Description,setAdditional2Description]=useState("");



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
        OtherMedicalOption,
        OthericdCodeMedicalDiagnoses,
        OtherdescriptionMedicalDiagnoses,

      },
    ]);
    setOtherMedicalOption("");
    setOtherIcdCodeMedicalDiagnoses("");
    setOtherDescriptionMedicalDiagnoses("");

  };

  // State variable for additionalDiagnoses
  const [additionalDiagnoses, setAdditionalDiagnoses] = useState("");

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
  const [no, setNo] = useState(false);
  const [yes, setYes] = useState(false);
  const [setNoAndYes, setSetNoAndYes] = useState();
  const [death, setDeath] = useState(false);
  const [job, setJob] = useState("");
  const [childRemovedFromHouse, setChildRemovedFromHouse] = useState("");
  const [injury, setInjury] = useState(false);
  const [divorceSeparation, setDivorceSeparation] = useState("");
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
  // const [significantRecentLosses, setSignificantRecentLosses] = useState({});

  const [additionalNotes, setAdditionalNotes] = useState("");

  //gresedent gaudent name and information
  const [residentGuardianName, setResidentGuardianName] = useState("");
  const [residentGauardianSignature, setResidentGauardianSignature] =
    useState("");
  const [residentGuardianDate, setResidentGuardianDate] = useState("");

  // State variables for staffInformation
  const [staffName, setStaffName] = useState("");
  const [staffTitle, setStaffTitle] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffDate, setStaffDate] = useState("");
  const [staffInformation, setStaffInformation] = useState({});

  // State variables for bhpInformation
  const [bhpName, setBhpName] = useState("");
  const [bhpCredentials, setBhpCredentials] = useState("");
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpDate, setBhpDate] = useState("");
  const [bhpInformation, setBhpInformation] = useState({});

  useEffect(() => {
    setPatientId(userData?._id);
    setUser(userData?.fullName);
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

    const data = {
      patientId,
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
      admissionStatus,
      programLocation,
      guardianship,
      powerOfAttorneyStatus,
      todayDate,
      guardianshipPoaPubFidName,
      approvedBy,
      reasonForAdmission,
      residentGoals,
      residentStrengths: stringValues,
      residentLimitations,
      currentBehavioralIssues,
      // missing
      dischargePlan,
      estimateDateOfDischarge,
      agreementWithPlan,
      residentGuardianAgreement: {
        name: residentGuardianAgreementName,
        signature: residentGuardianAgreementSignature,
        date: residentGuardianAgreementDate,
      },
      staffAgreement: {
        name: staffAgreementname,
        signature: staffAgreementSignature,
        date: staffAgreementDate,
      },
      bhpAgreement: {
        name: bhpAgreementName,
        signature: bhpAgreementSignature,
        date: bhpAgreementDate,
      },
      other: {
        name: otherName,
        relationship: otherRelationship,
        signature: otherSignature,
        date: otherDate,
      },
      // missing
      // mentalHealthTreatmentHistory,

      //missing

      significantRecentLosses: {
        typeOfLoss: {
          death,
          job,
          childRemovedFromHouse,
          injury,
          divorceSeparation,
          violentActsAgainstPersonFamily,
          medicalSurgical,
          accidentInjury,
          other: otherSignificantRecentLosses,
        },
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
  const [thyroidDisorder, setThyroidDisorder] = useState([]);

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

  // Type of services drop down
  // const substanceAbuseHistoryDataTypesOption = [
  //   { label: "Alcohol", value: "Alcohol" },
  //   { label: "Benzodiazepines", value: "Benzodiazepines" },
  //   { label: "Cocaine", value: "Cocaine" },
  //   { label: "Crack", value: "Crack" },
  //   {
  //     label: "Hallucinogens (LSD,mescaline,etc.)",
  //     value: "Hallucinogens (LSD,mescaline,etc.)",
  //   },
  //   { label: "Heroin", value: "Heroin" },
  //   { label: "Crack", value: "Crack" },
  //   { label: "Inhalants", value: "Inhalants" },
  //   { label: "Marijuana", value: "Marijuana" },
  //   { label: "Methamphetamine", value: "Methamphetamine" },
  //   { label: "Methadone", value: "Methadone" },
  //   { label: "MDMA (ecstasy)", value: "MDMA (ecstasy)" },
  //   { label: "PCP (angel dust)", value: "PCP (angel dust)" },
  //   { label: "Prescription medicine", value: "Prescription medicine" },
  //   { label: "OTC medicine", value: "OTC medicine" },

  // ];

  // const handleKeySubstanceAbuseHistoryDataTypes = (event) => {
  //   if (event.key === 'Enter' && event.target.value) {
  //     const inputValue = event.target.value.trim();

  //     const optionExists = substanceAbuseHistoryDataTypesOption.some(
  //       (option) => option.value === inputValue
  //     );

  //     if (!optionExists) {
  //       const newOptions = [
  //         ...substanceAbuseHistoryDataTypesOption,
  //         { value: inputValue, label: inputValue }
  //       ];

  //       setSubstanceAbuseHistoryDataTypes(newOptions);

  //       const newSelectedValues = [
  //         ...substanceAbuseHistoryDataTypes,
  //         { value: inputValue, label: inputValue }
  //       ];
  //       setSubstanceAbuseHistoryDataTypes(newSelectedValues);
  //     }

  //     event.target.value = "";
  //   }
  // }

  // const substanceAbuseHistoryDataTypesHandler = (selectedOptions) => {
  //   setSubstanceAbuseHistoryDataTypes(selectedOptions);
  // };

  // //// Type of services Last use
  // const substanceAbuseHistoryDataLastUseOption = [
  //   { label: "Weeks ago", value: "Weeks ago" },
  //   { label: "Days ago", value: "Days ago" },
  //   { label: "Yesterday", value: "Yesterday" },
  //   { label: "Months ago", value: "Months ago" },
  //   { label: "Few hours ago", value: "Few hours ago" },
  //   { label: "Unsure", value: "Unsure" },
  // ];

  // const handleKeyDownSubstanceAbuseHistoryDataLastUse = (event) => {
  //   if (event.key === 'Enter' && event.target.value) {
  //     const inputValue = event.target.value.trim();

  //     const optionExists = substanceAbuseHistoryDataLastUseOption.some(
  //       (option) => option.value === inputValue
  //     );

  //     if (!optionExists) {
  //       const newOptions = [
  //         ...substanceAbuseHistoryDataLastUseOption,
  //         { value: inputValue, label: inputValue }
  //       ];

  //       setSubstanceAbuseHistoryDataLastUse(newOptions);

  //       const newSelectedValues = [
  //         ...substanceAbuseHistoryDataLastUse,
  //         { value: inputValue, label: inputValue }
  //       ];
  //       setSubstanceAbuseHistoryDataLastUse(newSelectedValues);
  //     }

  //     event.target.value = "";
  //   }
  // };
  // const substanceAbuseHistoryDataLastUseHandler = (selectedOptions) => {
  //   setSubstanceAbuseHistoryDataLastUse(selectedOptions);
  // };

  // const substanceAbuseHistoryDataFrequencyOption = [
  //   { label: "Daily", value: "Daily" },
  //   { label: "Two to four times weekly", value: "Two to four times weekly" },
  //   { label: "Multiple times a day", value: "Multiple times a day" },
  //   { label: "Chronic", value: "Chronic" },
  //   { label: "Intermittent", value: "Intermittent" },
  //   { label: "Only on social events", value: "Only on social events" },
  //   { label: "Only on weekends", value: "Only on weekends" },
  //   { label: "Few times a month", value: "Few times a month" },
  // ];

  // const handleKeyDownSubstanceAbuseHistoryDataFrequency = (event) => {
  //   if (event.key === 'Enter' && event.target.value) {
  //     const inputValue = event.target.value.trim();

  //     const optionExists = substanceAbuseHistoryDataFrequencyOption.some(
  //       (option) => option.value === inputValue
  //     );

  //     if (!optionExists) {
  //       const newOptions = [
  //         ...substanceAbuseHistoryDataFrequency,
  //         { value: inputValue, label: inputValue }
  //       ];

  //       setSubstanceAbuseHistoryDataFrequency(newOptions);

  //       const newSelectedValues = [
  //         ...substanceAbuseHistoryDataFrequency,
  //         { value: inputValue, label: inputValue }
  //       ];
  //       setSubstanceAbuseHistoryDataFrequency(newSelectedValues);
  //     }

  //     event.target.value = "";
  //   }
  // };

  // const substanceAbuseHistoryDataFrequencyHandler = (selectedOptions) => {
  //   setSubstanceAbuseHistoryDataFrequency(selectedOptions);
  // };

  // const substanceAbuseHistoryDataLengthOfSobrietyOption = [
  //   { label: "One week", value: "One week" },
  //   { label: "A few days ago, One month", value: "A few days ago, One month" },
  //   { label: "One month", value: "One month" },
  //   { label: "Two months", value: "Two months" },
  //   { label: "Three months", value: "Three months" },
  //   { label: "Four months", value: "Four months" },
  //   { label: "Five to Six months", value: "Five to Six months" },
  //   { label: "One year", value: "One year" },
  //   { label: "Two years", value: "Two years" },
  //   { label: "Many years", value: "Many years" },
  // ];

  // const handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety = (event) => {
  //   if (event.key === 'Enter' && event.target.value) {
  //     const inputValue = event.target.value.trim();

  //     const optionExists = substanceAbuseHistoryDataLengthOfSobrietyOption.some(
  //       (option) => option.value === inputValue
  //     );

  //     if (!optionExists) {
  //       const newOptions = [
  //         ...substanceAbuseHistoryDataLengthOfSobrietyOption,
  //         { value: inputValue, label: inputValue }
  //       ];

  //       setSubstanceAbuseHistoryDataLengthOfSobriety(newOptions);

  //       const newSelectedValues = [
  //         ...substanceAbuseHistoryDataLengthOfSobriety,
  //         { value: inputValue, label: inputValue }
  //       ];
  //       setSubstanceAbuseHistoryDataLengthOfSobriety(newSelectedValues);
  //     }

  //     event.target.value = "";
  //   }
  // };

  // const substanceAbuseHistoryDataLengthOfSobrietyHandler = (selectedOptions) => {
  //   setSubstanceAbuseHistoryDataLengthOfSobriety(selectedOptions);
  // };

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

  // Current Independent Living Skills:
  const bathingShoweringGoodOptions = [
    { label: "Bathing/Showering", value: "Bathing/Showering" },
    { label: "Grooming/hygiene", value: "Grooming/hygiene" },
    { label: "Mobility", value: "Mobility" },
    { label: "Housework", value: "Housework" },
    { label: "Shopping", value: "Shopping" },
    { label: "Managing money/budget", value: "Managing money/budget" },
    { label: "Taking medications", value: "Taking medications" },
    { label: "Preparing food", value: "Preparing food" },
    { label: "Eating", value: "Eating" },
    { label: "Toileting", value: "Toileting" },
  ];

  const handleKeyBathingShoweringGood = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = bathingShoweringGoodOptions.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...bathingShoweringGoodOptions,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setBathingShoweringGood(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...bathingShoweringGood,
          { value: inputValue, label: inputValue },
        ];
        setBathingShoweringGood(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const bathingShoweringGoodJHandler = (optionValue) => {
    setBathingShoweringGood(optionValue);
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

  const handleKeySelectedValueRiskFactors = (event) => {
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
        setSelectedValueRiskFactors(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...selectedValueRiskFactors,
          { value: inputValue, label: inputValue },
        ];
        setSelectedValueRiskFactors(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const selectedValueRiskFactorsHandler = (optionValue) => {
    setSelectedValueRiskFactors(optionValue);
  };

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

  //Protective factors that apply:
  const selectedValueProtectiveFactorsOption = [
    {
      label: "Supports available (family friends)",
      value: "Supports available (family friends)",
    },
    {
      label: "Spiritual / religious support",
      value: "Spiritual / religious support",
    },
    {
      label: "Religious/cultural prohibitions",
      value: "Religious/cultural prohibitions",
    },
    { label: " Fear of consequences", value: " Fear of consequences" },
    {
      label: " Able to be engaged in intervention",
      value: " Able to be engaged in intervention",
    },
    {
      label: "Willing to commit to keeping self safe",
      value: "Willing to commit to keeping self safe",
    },
  ];

  const handleKeySelectedValueProtectiveFactors = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = selectedValueProtectiveFactorsOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...selectedValueProtectiveFactorsOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setSelectedValueProtectiveFactors(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...selectedValueProtectiveFactors,
          { value: inputValue, label: inputValue },
        ];
        setSelectedValueProtectiveFactors(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };
  const selectedValueProtectiveFactorsHandler = (optionValue) => {
    setSelectedValueProtectiveFactors(optionValue);
  };

  return (
    <>
      <div ref={componentRef} style={{ width: "100%", margin: "auto" }}>
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
          <FormUpper />
          <p style={{ marginTop: "1rem" }}>
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
          <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
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
                      // value={user}
                      className="borderless_input"
                      value={residentName}
                      // placeholder="Enter full name"
                      required
                      // onChange={(e) => setUser(e.target.value)}
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
                    <label htmlFor="admissionDate">Admission Date:</label>
                    <input
                      type="date"
                      id="admissionDate"
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
                    {/* <div className="yesNoAligment">
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="guardianship"
                  checked={guardianship===true}
                  onChange={()=>setGuardianship(true)}

                />
               <label htmlFor="guardianship">Yes</label>
              </div>
              <div className="checkboxitem">
                <input
                  type="checkbox"
                  id="guardianshipno"
                  checked={guardianship===false}
                  onChange={()=>setGuardianship(false)}

                />
               <label htmlFor="guardianshipno">No</label>
              </div>
              </div> */}
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
                {/* <div className="form-field">
              <label htmlFor="guardianship">Guardianship:</label>

              <input
                type="text"
                id="guardianship"
                value={guardianship}
                placeholder="Enter name"
                required
                onChange={(e) => setGuardianship(e.target.value)}
              />
            </div> */}

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
              {/* <h2 style={{ marginTop: "1.5rem", fontWeight: "bold" }}>Other Details:</h2> */}

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
                  {/* <textarea
                id="programlocation&address"
                type="text"
                value={residentGoals}
                placeholder="Enter text"
                rows={2}
                cols={82}
                required
                onChange={(e) => setResidentGoals(e.target.value)}
              /> */}
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

              {/*
              <label className="label-review">
                Identified Needs/targeted Behaviors Intervention(s) to Meet
                Objectives
              </label>
              <div className="safetyplandiv">
                <div className="form-field" style={{ marginBottom: "10px" }}>
                  <label >Needs</label>
                  <input
                    type="text"

                    value={need}
                    placeholder="Enter Needs"
                    onChange={(e) => setNeed(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label >Interventions</label>
                  <input
                    type="text"

                    value={intervention}
                    placeholder="Enter Interventions"
                    onChange={(e) => setIntervention(e.target.value)}
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="safetybutton"
                    onClick={behavioralInterventionaArrayHandle}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="needs-interventions-container">
                <div className="needs-interventions-column1">
                  {behavioralInterventionsArray.length > 0 && (
                    <table>
                      <thead>

                        <th>Need</th>
                        <th>Intervention</th>
                      </thead>
                      <tbody>
                        {behavioralInterventionsArray?.map((i, index) => (
                          <tr>

                            <td>{`${i.need}`} </td>
                            <td>{`${i.intervention}`} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Discharge Plan</label>
                <input
                  type="text"
                  id="approvedby"
                  value={dischargePlan}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setDischargePlan(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="todaydate">Estimated Date of Discharge</label>
                <input
                  type="date"
                  id="todaydate"
                  value={estimateDateOfDischarge}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setEstimateDateOfDischarge(e.target.value)}
                />
              </div>

              <div class="checkbox-container1">
                <div class="checkoptions1" style={{ marginTop: "1.2rem" }}>

                  <div class="checkboxitem1">
                    <input
                      type="checkbox"
                      checked={agreementWithPlan === true}
                      onChange={() => setAgreementWithPlan(true)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      {" "}
                      Yes, I (Resident/guardian) am in agreement with the types
                      and levels of services included in my behavior plan.
                    </span>
                  </div>
                  <div
                    class="checkboxitem12"
                    style={{ display: "flex" }}
                  >
                    <input
                      type="checkbox"
                      checked={agreementWithPlan === false}
                      onChange={() => setAgreementWithPlan(false)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      No, I (Resident/guardian) disagree with the types and/or
                      levels of some or all of the services included in my
                      behavioral health treatment plan. By checking this box, I
                      (Resident/guardian) will receive the services that I have
                      agreed to receive and may appeal the treatment team’s
                      decision to not include all the types and/ or levels of
                      services that I have requested. *
                    </span>
                  </div>
                </div>
              </div> */}

              {/* <div className="form-field">
                <label htmlFor="approvedby">Resident/Guardian name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value={residentGuardianAgreementName}
                  placeholder="Enter name"
                  required
                  onChange={(e) =>
                    setResidentGuardianAgreementName(e.target.value)
                  }
                />
              </div> */}
              {/*
              <div class="file-upload-box hidePrint">
                <div className="file-upload-box-child">
                  <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" type="button" onClick={() => setSigInModel1(true)}>
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {
                    residentGuardianAgreementSignature && (
                      <p className="signature_name_print">Digitally Sign by {residentGuardianAgreementSignature} {residentGuardianAgreementDate}</p>
                    )
                  }
                </div>
              </div> */}

              {/* {
                signInModel1 && (<SingInUpdateModel
                  onClose={() => setSigInModel1(false)}
                  singin={residentGuardianAgreementSignature}
                  setSingIn={setResidentGuardianAgreementSignature}
                  setDateAndTime={setResidentGuardianAgreementDate}
                />)
              } */}

              {/* <div className="form-field">
                <label htmlFor="approvedby">Staff Name, Title :</label>
                <input
                  type="text"
                  id="approvedby"
                  value={staffAgreementname}
                  placeholder="Enter name"
                  required
                  onChange={(e) => setStaffAgreementName(e.target.value)}
                />
              </div> */}
              {/* <div class="file-upload-box hidePrint">
                <div className="file-upload-box-child">
                  <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" type="button" onClick={() => setSigInModel2(true)}>
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {
                    staffAgreementSignature && (
                      <p className="signature_name_print">Digitally Sign by {staffAgreementSignature} {staffAgreementDate}</p>
                    )
                  }
                </div>
              </div> */}

              {/* {
                signInModel2 && (<SingInUpdateModel
                  onClose={() => setSigInModel2(false)}
                  singin={staffAgreementSignature}
                  setSingIn={setStaffAgreementSignature}
                  setDateAndTime={setStaffAgreementDate}
                />)
              } */}

              {/* <div className="form-field">
                <label htmlFor="approvedby">BHP Name, Credentials:</label>
                <input
                  type="text"
                  id="approvedby"
                  value={bhpAgreementName}
                  placeholder="Enter name"
                  required
                  onChange={(e) => setBhpAgreementName(e.target.value)}
                />
              </div> */}
              {/* <div class="file-upload-box hidePrint">
                <div className="file-upload-box-child">
                  <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" type="button" onClick={() => setSigInModel3(true)}>
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {
                    bhpAgreementSignature && (
                      <p className="signature_name_print">Digitally Sign by {bhpAgreementSignature} {bhpAgreementDate}</p>
                    )
                  }
                </div>
              </div> */}

              {/* {
                signInModel3 && (<SingInUpdateModel
                  onClose={() => setSigInModel3(false)}
                  singin={bhpAgreementSignature}
                  setSingIn={setBhpAgreementSignature}
                  setDateAndTime={setBhpAgreementDate}
                />)
              } */}
              {/*
              <div className="form-field">
                <label htmlFor="approvedby">Other Name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value={otherName}
                  placeholder="Enter name"
                  required
                  onChange={(e) => setOtherName(e.target.value)}
                />
              </div> */}

              {/* <div className="form-field">
                <label htmlFor="approvedby">Relationship to Resident</label>
                <input
                  type="text"
                  id="approvedby"
                  value={otherRelationship}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setOtherRelationship(e.target.value)}
                />
              </div>
              <div class="file-upload-box hidePrint">
                <div className="file-upload-box-child">
                  <button className="upload-button1" type="button" onClick={() => setDraftModel(true)}>
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" type="button" onClick={() => setSigInModel5(true)}>
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {
                    otherSignature && (
                      <p className="signature_name_print">Digitally Sign by {otherSignature} {otherDate}</p>
                    )
                  }
                </div>
              </div> */}

              {/* {
                signInModel5 && (<SingInUpdateModel
                  onClose={() => setSigInModel5(false)}
                  singin={otherSignature}
                  setSingIn={setOtherSignature}
                  setDateAndTime={setOtherDate}
                />)
              } */}

              <h5
                style={{
                  marginTop: "1.5rem",
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
                            checked={diabetes === true}
                            onChange={() => setDiabetes(true)}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            id="diabetesno"
                            checked={diabetes === false}
                            onChange={() => setDiabetes(false)}
                          />
                        </td>
                        <td>
                          <textarea
                            style={{
                              border: "none",
                              outline: "none",
                              resize: "none",
                              width: "50%",
                            }}
                            rows={Math.max(
                              commentDiabety.split("\n").length,
                              1
                            )}
                            value={commentDiabety}
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
                            rows={Math.max(commentHeart.split("\n").length, 1)}
                            value={commentHeart}
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
                            rows={Math.max(
                              commentHistory.split("\n").length,
                              1
                            )}
                            value={commentHistory}
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
                            rows={Math.max(commentHigh.split("\n").length, 1)}
                            value={commentHigh}
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
                            rows={Math.max(commentLung.split("\n").length, 1)}
                            value={commentLung}
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
                            onChange={() => setDiabetes(true)}
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
                            rows={Math.max(
                              commentSeizures.split("\n").length,
                              1
                            )}
                            value={commentSeizures}
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
                            rows={Math.max(commentCancer.split("\n").length, 1)}
                            value={commentCancer}
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
                            rows={Math.max(commentLiver.split("\n").length, 1)}
                            value={commentLiver}
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
                      {/* <tr>
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
                            rows={Math.max(commentbrain.split("\n").length, 1)}
                            value={commentbrain}
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
                      </tr> */}
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
                            rows={Math.max(commentInjury.split("\n").length, 1)}
                            value={commentInjury}
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
                            rows={Math.max(chronicCommit.split("\n").length, 1)}
                            value={chronicCommit}
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
                            rows={Math.max(
                              AllergiesComment.split("\n").length,
                              1
                            )}
                            value={AllergiesComment}
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
                            rows={Math.max(
                              SurgeriesComment.split("\n").length,
                              1
                            )}
                            value={SurgeriesComment}
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
                            rows={Math.max(
                              pregnanciesComment.split("\n").length,
                              1
                            )}
                            value={pregnanciesComment}
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
                            rows={Math.max(
                              SubstanceComment.split("\n").length,
                              1
                            )}
                            value={SubstanceComment}
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
                            rows={Math.max(
                              DepressionComment.split("\n").length,
                              1
                            )}
                            value={DepressionComment}
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
                            rows={Math.max(
                              AnxietyComment.split("\n").length,
                              1
                            )}
                            value={AnxietyComment}
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
                            rows={Math.max(
                              healthConditionsYesComment.split("\n").length,
                              1
                            )}
                            value={healthConditionsYesComment}
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
                            rows={Math.max(
                              BipolarComment.split("\n").length,
                              1
                            )}
                            value={BipolarComment}
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
                            rows={Math.max(
                              SchizophreniaComment.split("\n").length,
                              1
                            )}
                            value={SchizophreniaComment}
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
                            rows={Math.max(
                              ObsessiveComment.split("\n").length,
                              1
                            )}
                            value={ObsessiveComment}
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
                            rows={Math.max(
                              PersonalityComment.split("\n").length,
                              1
                            )}
                            value={PersonalityComment}
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
                            rows={Math.max(
                              PhobiasComment.split("\n").length,
                              1
                            )}
                            value={PhobiasComment}
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
                            rows={Math.max(
                              healthConditionsYesComment.split("\n").length,
                              1
                            )}
                            value={healthConditionsYesComment}
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
                            <td>Other: {i.OtherConditionOther}</td>
                           <td><input type="checkbox" checked={i.otherConditionYesNO===true} /></td>
                           <td><input type="checkbox" checked={i.otherConditionYesNO===false} /></td>
                            <td>{i.otherConditionDiscription}</td>
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
                            rows={Math.max(
                              otherConditionDiscription.split("\n").length,
                              1
                            )}
                            value={otherConditionDiscription}
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



              {/* <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Diabetes:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="diabetes"
                      checked={diabetes === true}
                      onChange={() => setDiabetes(true)}
                    />
                    <label htmlFor="diabetes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="diabetesno"
                      checked={diabetes === false}
                      onChange={() => setDiabetes(false)}
                    />
                    <label htmlFor="diabetesno">No</label>
                  </div>
                </div>

              </div>

              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentDiabety}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentDeabetes(e.target.value)}
                />
              </div>


              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Heart disease / heart attack</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHeart"
                      checked={yesHeart === true}
                      onChange={() => setYesHeart(true)}
                    />
                    <label htmlFor="yesHeart">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHeartno"
                      checked={yesHeart === false}
                      onChange={() => setYesHeart(false)}
                    />
                    <label htmlFor="yesHeartno">No</label>
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label style={{ fontSize: "14px" }}>Comments</label>
                <textarea

                  value={commentHeart}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentHeart(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>History of stroke:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHistory"
                      checked={yesHistory === true}
                      onChange={() => setYesHistory(true)}
                    />
                    <label htmlFor="yesHistory">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHistoryno"
                      checked={yesHistory === false}
                      onChange={() => setYesHistory(false)}
                    />
                    <label htmlFor="yesHistoryno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentHistory}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentHistory(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>High Blood Pressure:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHigh"
                      checked={yesHigh === true}
                      onChange={() => setYesHigh(true)}
                    />
                    <label htmlFor="yesHigh">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesHighno"
                      checked={yesHigh === false}
                      onChange={() => setYesHigh(false)}
                    />
                    <label htmlFor="yesHighno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentHigh}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentHigh(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>
                  Lung disease (ie asthma, COPD, emphysema):
                </label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesLung"
                      checked={diabetes === true}
                      onChange={() => setYesLung(true)}
                    />
                    <label htmlFor="yesLung">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesLungno"
                      checked={yesLung === false}
                      onChange={() => setYesLung(false)}
                    />
                    <label htmlFor="yesLungno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentLung}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentLung(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Seizures:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="diabetes"
                      checked={diabetes === true}
                      onChange={() => setDiabetes(true)}
                    />
                    <label htmlFor="diabetes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesSeizuresno"
                      checked={yesSeizures === false}
                      onChange={() => setYesSeizures(false)}
                    />
                    <label htmlFor="yesSeizuresno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentSeizures}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentSeizures(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Cancer:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesCancer"
                      checked={yesCancer === true}
                      onChange={() => setYesCancer(true)}
                    />
                    <label htmlFor="yesCancer">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesCancerno"
                      checked={yesCancer === false}
                      onChange={() => setYesCancer(false)}
                    />
                    <label htmlFor="yesCancerno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentCancer}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentCancer(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Liver/kidney disease:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesLiver"
                      checked={yesLiver === true}
                      onChange={() => setYesLiver(true)}
                    />
                    <label htmlFor="yesLiver">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesLiverno"
                      checked={yesLiver === false}
                      onChange={() => setYesLiver(false)}
                    />
                    <label htmlFor="yesLiverno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  id="programlocation&address"
                  value={commentLiver}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e) => setCommentLiver(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Thyroid disorder:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesThyroid"
                      checked={yesThyroid === true}
                      onChange={() => setYesThyroid(true)}
                    />
                    <label htmlFor="yesThyroid">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="setYesThyroidno"
                      checked={yesThyroid === false}
                      onChange={() => setYesThyroid(false)}
                    />
                    <label htmlFor="setYesThyroidno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "20px", marginTop: "1.5rem" }}>
                  Select thyroid disorder:{" "}
                </label>

                <Select
                  isMulti
                  value={thyroidDisorder}
                  onChange={thyroiddisorderhnadler}
                  options={thyroidOptions}
                />
              </div>
              <div className="yeschechbox" style={{ marginTop: "1.5rem" }}>
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>History of head trauma/traumatic brain:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesbrain"
                      checked={yesbrain === true}
                      onChange={() => setYesBrain(true)}
                    />
                    <label htmlFor="yesbrain">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input

                      type="checkbox"
                      id="yesbrainno"
                      checked={yesbrain === false}
                      onChange={() => setYesBrain(false)}
                    />
                    <label htmlFor="yesbrainno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={commentbrain}
                  onChange={(e) => setbrain(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>History of head trauma/traumatic brain injury:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesInjury"
                      checked={yesInjury === true}
                      onChange={() => setYesInjury(true)}
                    />
                    <label htmlFor="yesInjury">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="yesInjuryno"
                      checked={yesInjury === false}
                      onChange={() => setYesInjury(false)}
                    />
                    <label htmlFor="yesInjuryno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={commentInjury}
                  onChange={(e) => setCommentInjury(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Chronic pain:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="Chronic"
                      checked={yesChronic === true}
                      onChange={() => setYesChronic(true)}
                    />
                    <label htmlFor="Chronic">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="Chronicno"
                      checked={yesChronic === false}
                      onChange={() => setYesChronic(false)}
                    />
                    <label htmlFor="Chronicno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={chronicCommit}
                  onChange={(e) => setChronicCommit(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>
                  Allergies (food, environment, medications):
                </label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="AllergiesYes"
                      checked={AllergiesYes === true}
                      onChange={() => setAllergiesYes(true)}
                    />
                    <label htmlFor="AllergiesYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="AllergiesYesno"
                      checked={AllergiesYes === false}
                      onChange={() => setAllergiesYes(false)}
                    />
                    <label htmlFor="AllergiesYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={AllergiesComment}
                  onChange={(e) => setAllergiesComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Surgeries:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SurgeriesYes"
                      checked={SurgeriesYes === true}
                      onChange={() => setSurgeriessYes(true)}
                    />
                    <label htmlFor="SurgeriesYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SurgeriesYesno"
                      checked={SurgeriesYes === false}
                      onChange={() => setSurgeriessYes(false)}
                    />
                    <label htmlFor="SurgeriesYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={SurgeriesComment}
                  onChange={(e) => setSurgeriesComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Number of pregnancies / births:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="pregnanciesYes"
                      checked={pregnanciesYes === true}
                      onChange={() => setPregnanciesYes(true)}
                    />
                    <label htmlFor="pregnanciesYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="pregnanciesYesno"
                      checked={pregnanciesYes === false}
                      onChange={() => setPregnanciesYes(false)}
                    />
                    <label htmlFor="pregnanciesYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={pregnanciesComment}
                  onChange={(e) => setPregnanciesComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Substance use disorder (please specify):</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SubstanceYes"
                      checked={SubstanceYes === true}
                      onChange={() => setSubstanceYes(true)}
                    />
                    <label htmlFor="SubstanceYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SubstanceYesno"
                      checked={SubstanceYes === false}
                      onChange={() => setSubstanceYes(false)}
                    />
                    <label htmlFor="SubstanceYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={SubstanceComment}
                  onChange={(e) => setSubstanceComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Depression:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="DepressionYes"
                      checked={DepressionYes === true}
                      onChange={() => setDepressionYes(true)}
                    />
                    <label htmlFor="DepressionYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="DepressionYesno"
                      checked={DepressionYes === false}
                      onChange={() => setDepressionYes(false)}
                    />
                    <label htmlFor="DepressionYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={DepressionComment}
                  onChange={(e) => setDepressionComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Anxiety/panic attacks:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="AnxietyYes"
                      checked={AnxietyYes === true}
                      onChange={() => setAnxietyYes(true)}
                    />
                    <label htmlFor="AnxietyYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="AnxietyYesno"
                      checked={AnxietyYes === false}
                      onChange={() => setAnxietyYes(false)}
                    />
                    <label htmlFor="AnxietyYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={AnxietyComment}
                  onChange={(e) => setAnxietyComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Insomnia:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="InsomniaYes"
                      checked={InsomniaYes === true}
                      onChange={() => setInsomniaYes(true)}
                    />
                    <label htmlFor="InsomniaYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="InsomniaYesno"
                      checked={InsomniaYes === false}
                      onChange={() => setInsomniaYes(false)}
                    />
                    <label htmlFor="InsomniaYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={healthConditionsYesComment}
                  onChange={(e) => sethealthConditionsYesComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Bipolar disorder:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="BipolarYes"
                      checked={BipolarYes === true}
                      onChange={() => setBipolarYes(true)}
                    />
                    <label htmlFor="BipolarYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="BipolarYesno"
                      checked={BipolarYes === false}
                      onChange={() => setBipolarYes(false)}
                    />
                    <label htmlFor="BipolarYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={BipolarComment}
                  onChange={(e) => setBipolarComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Schizophrenia:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SchizophreniaYes"
                      checked={SchizophreniaYes === true}
                      onChange={() => setSchizophreniaYes(true)}
                    />
                    <label htmlFor="SchizophreniaYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="SchizophreniaYesno"
                      checked={SchizophreniaYes === false}
                      onChange={() => setSchizophreniaYes(false)}
                    />
                    <label htmlFor="SchizophreniaYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={SchizophreniaComment}
                  onChange={(e) => setSchizophreniaComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Obsessive compulsive disorder:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="ObsessiveYes"
                      checked={ObsessiveYes === true}
                      onChange={() => setObsessiveYes(true)}
                    />
                    <label htmlFor="ObsessiveYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="ObsessiveYesno"
                      checked={ObsessiveYes === false}
                      onChange={() => setObsessiveYes(false)}
                    />
                    <label htmlFor="ObsessiveYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={ObsessiveComment}
                  onChange={(e) => setObsessiveComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Personality disorder (please specify):</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="PersonalityYes"
                      checked={PersonalityYes === true}
                      onChange={() => setPersonalityYes(true)}
                    />
                    <label htmlFor="PersonalityYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="PersonalityYesno"
                      checked={PersonalityYes === false}
                      onChange={() => setPersonalityYes(false)}
                    />
                    <label htmlFor="PersonalityYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={PersonalityComment}
                  onChange={(e) => setPersonalityComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label style={{ fontSize: "20px", marginTop: "1.5rem" }}>Phobias:</label>

                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="PhobiasYes"
                      checked={PhobiasYes === true}
                      onChange={() => setPhobiasYes(true)}
                    />
                    <label htmlFor="PhobiasYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="PhobiasYesno"
                      checked={PhobiasYes === false}
                      onChange={() => setPhobiasYes(false)}
                    />
                    <label htmlFor="PhobiasYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  value={PhobiasComment}
                  onChange={(e) => setPhobiasComment(e.target.value)}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Any other health conditions:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="healthConditionsYes"
                      checked={healthConditionsYes === true}
                      onChange={() => setHealthConditionsYes(true)}
                    />
                    <label htmlFor="healthConditionsYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="healthConditionsYesno"
                      checked={healthConditionsYes === false}
                      onChange={() => setHealthConditionsYes(false)}
                    />
                    <label htmlFor="healthConditionsYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address" style={{ fontSize: "14px" }}>Comments</label>
                <textarea
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  value={healthConditionsYesComment}
                  onChange={(e) => sethealthConditionsYesComment(e.target.value)}
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="" style={{ fontSize: "20px", marginTop: "1.5rem" }}>Infection or Diseases:</label>
                <div className="checkbox654">
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="InfectionYes"
                      checked={InfectionYes === true}
                      onChange={() => setInfectionYes(true)}
                    />
                    <label htmlFor="InfectionYes">Yes</label>
                  </div>
                  <div className="checkBox-aligment">
                    <input
                      type="checkbox"
                      id="InfectionYesno"
                      checked={InfectionYes === false}
                      onChange={() => setInfectionYes(false)}
                    />
                    <label htmlFor="InfectionYesno">No</label>
                  </div>
                </div>
              </div>
              <div className="form-field-single-update-bold">
                <label >
                  Select Infection or Diseases:{" "}
                </label>

                <Select
                  isMulti
                  placeholder="Select Multiple Type"
                  value={infectionDiseases}
                  onChange={infectionDiseasesHandler}
                  options={infectionDiseasesOptions}
                  isCreatable={true}
                  onKeyDown={handleKeyInfectionDiseases}
                />
              </div> */}

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
                      id="approvedby"
                      value={mentalHealthTreatmentHistoryWhere}
                      placeholder="Enter text"
                      required
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
                      required
                      onChange={(e) =>
                        setMentalHealthTreatmentHistoryDates(e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="border-bootom-line"></div>

                <div className="form-field-single-update-bold">
                  <label htmlFor="reasonadmission">
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
                              {i?.mentalHealthTreatmentHistoryTypeOfService?.map(
                                (item) => (
                                  <p key={item?.value}>{item?.value}</p>
                                )
                              )}
                            </td>
                            <td>
                              {`${i?.mentalHealthTreatmentHistoryWhere}`}{" "}
                            </td>
                            <td>{`${i?.mentalHealthTreatmentHistoryDates}`}</td>
                            <td>
                              {i?.mentalHealthTreatmentHistoryDiagnosisReason?.map(
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
                <div className="yeschechbox235" style={{ marginTop: "1.5rem" }}>
                  <label style={{ fontWeight: "bold" }}>
                    Substance Abuse history:
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
                      id="substanceAbuseHistory"
                      checked={substanceAbuseHistory}
                      onChange={() =>
                        setSubstanceAbuseHistory(!substanceAbuseHistory)
                      }
                    />
                  </div>
                </div>

                <div className="yeschechbox23" style={{ marginTop: "1.5rem" }}>
                  <label htmlFor="">Denies: </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
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
              </div>

              {/* <div className="box-image-container hidePrint">

              <div className="form-field-single-update-bold">
                <label htmlFor="reasonadmission">Type:</label>
                <Select
                  isMulti
                  placeholder="Select Multiple Type"
                  value={substanceAbuseHistoryDataTypes}
                  onChange={substanceAbuseHistoryDataTypesHandler}
                  options={substanceAbuseHistoryDataTypesOption}
                  isCreatable={true}
                  onKeyDown={handleKeySubstanceAbuseHistoryDataTypes}
                />
              </div>

                <div className="border-bootom-line"></div>


              <div className="form-field-single-update-bold">
                <label>Age of First use:</label>
                <input
                  type="text"
                  id=""
                  value={substanceAbuseHistoryDataAgeOfFirstUse}
                  placeholder="Enter age"

                  onChange={(e) =>
                    setSubstanceAbuseHistoryDataAgeOfFirstUse(e.target.value)
                  }
                />
              </div>
                <div className="border-bootom-line"></div>

              <div className="form-field-single-update-bold">
                <label htmlFor="">Last Use:</label>

                <Select
                  isMulti
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                />
              </div>

                <div className="border-bootom-line"></div>

              <div className="form-field-single-update-bold">
                <label htmlFor="">Frequency:</label>
                <Select
                  isMulti
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                />
              </div>

                <div className="border-bootom-line"></div>

              <div className="form-field-single-update-bold">
                <label htmlFor="reasonadmission">Length of Sobriety:</label>
                <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  isMulti
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                />
              </div>
              </div> */}

              {/* <div className="needs-interventions-container2">
                <div className="needs-interventions-column2">
                  {typeArray.length > 0 && (
                    <table>
                      <thead>
                        <th>Type</th>
                        <th>Age of First use</th>
                        <th>Last Use</th>
                        <th>Frequency </th>
                        <th>Length of Sobriety</th>
                      </thead>
                      <tbody>
                        {typeArray?.map((i) => (
                          <tr>
                            <td>{i?.substanceAbuseHistoryDataTypes?.map((item) => (
                              <p key={item?.value}>{item?.value}</p>
                            ))}</td>
                            <td>{`${i.substanceAbuseHistoryDataAgeOfFirstUse}`} </td>
                            <td>{i?.substanceAbuseHistoryDataLastUse?.map((item) => (
                              <p key={item?.value}>{item?.value}</p>
                            ))}</td>
                            <td>{i?.substanceAbuseHistoryDataFrequency?.map((item) => (
                              <p key={item?.value}>{item?.value}</p>
                            ))}</td>
                            <td>{i?.substanceAbuseHistoryDataLengthOfSobriety?.map((item) => (
                              <p key={item?.value}>{item?.value}</p>
                            ))}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div> */}

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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseAlcohol}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseAlcohol(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyAlcohol}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyAlcohol(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyAlcohol
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyAlcohol(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={
                              substanceAbuseHistoryDataLastUseBenzodiazepines
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseBenzodiazepines(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataFrequencyBenzodiazepines
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyBenzodiazepines(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyBenzodiazepines(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseCrack}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseCrack(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyCrack}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyCrack(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyCrack
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyCrack(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseHeroin}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseHeroin(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyHeroin}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyHeroin(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyHeroin
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyHeroin(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseInhalants}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseInhalants(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyInhalants}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyInhalants(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyInhalants
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyInhalants(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseMarijuana}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseMarijuana(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyMarijuana}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyMarijuana(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyMarijuana
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyMarijuana(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={
                              substanceAbuseHistoryDataLastUseMethamphetamine
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseMethamphetamine(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataFrequencyMethamphetamine
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyMethamphetamine(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyMethamphetamine
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyMethamphetamine(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseMethadone}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseMethadone(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyMethadone}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyMethadone(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyMethadone
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyMethadone(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseMDMA}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseMDMA(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyMDMA}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyMDMA(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyMDMA
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyMDMA(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUsePCP}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUsePCP(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyPCP}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyPCP(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataLengthOfSobrietyPCP}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyPCP(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUsePrescription}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUsePrescription(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataFrequencyPrescription
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyPrescription(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={
                              substanceAbuseHistoryDataLengthOfSobrietyPrescription
                            }
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyPrescription(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataLastUse}
                  onChange={substanceAbuseHistoryDataLastUseHandler}
                  options={substanceAbuseHistoryDataLastUseOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLastUse}
                /> */}
                          <Form.Select
                            as="select"
                            value={substanceAbuseHistoryDataLastUseOTC}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLastUseOTC(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  
                  value={substanceAbuseHistoryDataFrequency}
                  onChange={substanceAbuseHistoryDataFrequencyHandler}
                  options={substanceAbuseHistoryDataFrequencyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataFrequency}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataFrequencyOTC}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataFrequencyOTC(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          {/* <Select
                  value={substanceAbuseHistoryDataLengthOfSobriety}
                  
                  onChange={substanceAbuseHistoryDataLengthOfSobrietyHandler}
                  options={substanceAbuseHistoryDataLengthOfSobrietyOption}
                  isCreatable={true}
                  onKeyDown={handleKeyDownSubstanceAbuseHistoryDataLengthOfSobriety}
                /> */}

                          <Form.Select
                            value={substanceAbuseHistoryDataLengthOfSobrietyOTC}
                            onChange={(e) =>
                              setSubstanceAbuseHistoryDataLengthOfSobrietyOTC(
                                e.target.value
                              )
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
                        </td>
                      </tr>

                      {typeArray?.map((i) => (
                        <tr>
                          <td>Other: {i.otherTypeOther}</td>
                          <td>{i.otherAgeOfFirstUse} </td>
                          <td>{i.otherLastUse} </td>
                          <td>{i.otherFrequancy} </td>
                          <td>{i.OtherlengthOfSobrifty} </td>
                        </tr>
                      ))}

                      <tr>
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
                          <Form.Select
                            as="select"
                            value={otherLastUse}
                            onChange={(e) => setOtherLastUse(e.target.value)}
                          >
                            <option>Select</option>
                            <option value="Weeks ago">Weeks ago</option>
                            <option value="Days ago">Days ago</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Months ago">Months ago</option>
                            <option value="Few hours ago">Few hours ago</option>
                            <option value="Unsure">Unsure</option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Select
                            value={otherFrequancy}
                            onChange={(e) => setOtherFrequancy(e.target.value)}
                          >
                            <option>Select</option>
                            <option value="Daily">Daily</option>
                            <option value="Two to four times weekly">
                              Two to four times weekly
                            </option>
                            <option value="Multiple times a day">
                              Multiple times a day
                            </option>
                            <option value="Chronic">Chronic</option>
                            <option value="Intermittent">Intermittent</option>
                            <option value="Only on social events">
                              Only on social events
                            </option>
                            <option value="Only on weekends">
                              Only on weekends
                            </option>
                            <option value="Few times a month">
                              Few times a month
                            </option>
                          </Form.Select>
                        </td>
                        <td>
                          <Form.Select
                            value={OtherlengthOfSobrifty}
                            onChange={(e) =>
                              setOtherLengthOfSobirty(e.target.value)
                            }
                          >
                            <option>Select</option>
                            <option value="One week">One week</option>
                            <option value="A few days ago">
                              A few days ago
                            </option>
                            <option value="One month">One month</option>
                            <option value="Two months">Two months</option>
                            <option value="Three months">Three months</option>
                            <option value="Four months">Four months</option>
                            <option value="Five to Six months">
                              Five to Six months
                            </option>
                            <option value="One year">One year</option>
                            <option value="Two years">Two years</option>
                            <option value="Many years">Many years</option>
                          </Form.Select>
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
                <div class="chechbox12-aligment411">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input
                        type="checkbox"
                        id="noneReportedOrObserved"
                        value={noneReportedOrObserved}
                        checked={noneReportedOrObserved}
                        style={{ alignSelf: "start", marginTop: "10px" }}
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
                  </div>
                  <div class="checkoptions">
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
                  </div>
                  <div class="checkoptions">
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
              </div>

              <div class="checkbox-container">
                <label style={{ fontWeight: "bold" }}>
                  Auditory Disturbances:
                </label>
                <div class="chechbox12">
                  <div class="checkoptions">
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
                  </div>
                  <div class="checkoptions">
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
                      checked={olderOther}
                      onChange={() =>
                        setOlderOther(!olderOther)
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
                      checked={heigthOther}
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
                      onChange={() => setAverageWeight(!averageHeight)}
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
                      checked={WeightOther}
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
                      checked={attireOther}
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
                      checked={GroomingOther}
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
                </div>
              </div>
              {/* <div class="checkbox-container">
                <div class="chechbox12-aligment411">
                  <div class="checkoptions">
                    <div class="checkboxitem">
          
                      <label>Gait</label>
                    </div>
                    <div class="checkboxitem">
           
                      <label>Posture</label>
                    </div>
                    <div class="checkboxitem">
        
                      <label>Psychomotor Activity</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Mannerisms</label>
                    </div>
         
                  </div>
                  111111111
                  <div class="checkoptions">
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
                        id="normalPosture"
                        checked={normalPosture}
                        onChange={() => setNormalPosture(!normalPosture)}
                      />
                      <label htmlFor="normalPosture">Normal</label>
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
                        id="none"
                        checked={none}
                        onChange={() => setNone(!none)}
                      />
                      <label htmlFor="none">None</label>
                    </div>
                  </div>
                  222222222
                  <div class="checkoptions">
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
                        id="relaxed"
                        checked={relaxed}
                        onChange={() => setRelaxed(!relaxed)}
                      />
                      <label htmlFor="relaxed">Relaxed</label>
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
                        id="tics"
                        checked={tics}
                        onChange={() => setTics(!tics)}
                      />
                      <label htmlFor="tics">Tics</label>
                    </div>
                  </div>
                  3333333333
                  <div class="checkoptions">
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
                        id="rigid"
                        checked={rigid}
                        onChange={() => setRigid(!rigid)}
                      />
                      <label htmlFor="rigid">Rigid</label>
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
                        id="tremorsMannerisms"
                        checked={tremorsMannerisms}
                        onChange={() =>
                          setTremorsMannerisms(!tremorsMannerisms)
                        }
                      />
                      <label htmlFor="tremorsMannerisms">Tremors</label>
                    </div>
                  </div>
                  444444444
                  <div class="checkoptions">
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
                        id="tense"
                        checked={tense}
                        onChange={() => setTense(!tense)}
                      />
                      <label htmlFor="tense">Tense</label>
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
                        id="rocking"
                        checked={rocking}
                        onChange={() => setRocking(!rocking)}
                      />
                      <label htmlFor="rocking">Rocking</label>
                    </div>
                  </div>
                  55555555
                  <div class="checkoptions">
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
                        id="slouched"
                        checked={slouched}
                        onChange={() => setSlouched(!slouched)}
                      />
                      <label htmlFor="slouched">Slouched</label>
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
                        id="picking"
                        checked={picking}
                        onChange={() => setPicking(!picking)}
                      />
                      <label htmlFor="picking">Picking</label>
                    </div>
                  </div>
                </div>
              </div> */}
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
                {/* <div style={{ display: "flex", gap: "10px", alignItems: "center", display: "none" }}>
              <label htmlFor="">Circumstances:</label>
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
              <input type="checkbox" id="circumstances" checked={circumstances===true} onChange={()=>setCircumstances(true)}/>
                    <label htmlFor="circumstances">Yes</label>
              </div>
              <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
                    <input type="checkbox" id="circumstancesno" checked={circumstances === false} onChange={() => setCircumstances(false)} />
                    <label htmlFor="circumstancesno">No</label>
              </div>
                </div> */}
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
                style={{ merginLeft: "10px" }}
              >
                <label>Educational history:</label>
                <input
                  type="text"
                  id="approvedby"
                  value={currentStudentLocation}
                  placeholder="Enter "
                  required
                  onChange={(e) => setCurrentStudentLocation(e.target.value)}
                />
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
                        checked={specialEducation === true}
                        onChange={() => setSpecialEducation(true)}
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
                {/* <div className="yeschechbox">
                <label style={{ fontWeight: "bold" }}>Fully time employed:</label>
                <div className="employment-Aligmant">
                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      name=""
                      id="fullTime"
                      checked={fullTime === true}
                      onChange={() => setFullTime(true)}
                    />
                    <label htmlFor="fullTime">Yes</label>
                  </div>
                  <div className="checkboxitem">
                    <input
                      type="checkbox"
                      id="fullTimeno"
                      checked={fullTime === false}
                      onChange={() => setFullTime(false)}
                    />
                    <label htmlFor="fullTimeno">No</label>
                  </div>
                </div>
              </div> */}
                <div className="form-field-child">
                  <label htmlFor="approvedby">
                    If employed, where? FT or PT?:
                  </label>
                  <input
                    type="text"
                    id="approvedby"
                    value={employmentLocation}
                    placeholder="Enter text"
                    required
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

              {/* <div className="box-image-container hidePrint" style={{ padding: "10px" }}>
              <div className="form-field">
                <label >Type of Activity</label>
                <Select
                  value={bathingShoweringGood}
                  isMulti
                  onChange={bathingShoweringGoodJHandler}
                  options={bathingShoweringGoodOptions}
                  isCreatable={true}
                  onKeyDown={handleKeyBathingShoweringGood}
                />
              </div>


              <div className="yeschechbox employment-Aligmantfall-risk">
                <div>
                  <input
                    type="checkbox"
                    checked={bathingShoweringFair === true}
                    onChange={() => setBathingShoweringFair(true)}
                  />
                  <label>Good</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={bathingShoweringFair === false}
                    onChange={() => setBathingShoweringFair(false)}
                  />
                  <label>Fair</label>
                </div>
                <div>
                  <input
                    type="checkbox"

                  />
                  <label>Not so good</label>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Need assist?</label>
                <div className="employment-Aligmant">
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      checked={bathingShoweringNeedAssist === true}
                      onChange={() => setBathingShoweringNeedAssist(true)}
                    />
                    <label>Yes</label>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <input
                      type="checkbox"
                      checked={bathingShoweringNeedAssist === false}
                      onChange={() => setBathingShoweringNeedAssist(false)}
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="form-field-single-update-notBold">
                <label >Comments:</label>
                <input
                  type="text"

                  placeholder="Enter text"
                  value={bathingShoweringComments}
                  onChange={(e) => setBathingShoweringComments(e.target.value)}

                />

              </div>
              </div> */}

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
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Grooming/hygiene</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Mobility</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Housework</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Shopping</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Managing money/budget</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Preparing food</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Eating</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Toileting</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <select>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            // rows={Math.max(commentDiabety.split("\n").length, 1)}
                            // value={commentDiabety}
                            placeholder="___________"
                            // onChange={(e) => setCommentDeabetes(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                // setCommentDeabetes((prevComment) => prevComment + "\n");
                              }
                            }}
                          />
                        </td>
                      </tr>

                      {handleRiskFactorActivityArray?.map((i, index) => (
                        <tr key={index}>
                      
                          <td>Other:{" "}
                        {i?.otherCurrentOther}
                          </td>
                         
                          <td>
                            <input
                              type="checkbox"
                              checked={i.otherCurrentGood === true}
                            
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={i.otherCurrentFair === true}
                            
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              checked={i.otherCurrentNotSoGood === true}
                             
                            />
                          </td>
                          <td>
                            {` ${
                              i.otherCurrentNeed === "Yes"
                                ? "Yes"
                                : "No"
                            }`}{" "}
                          </td>
                          <td> {i.otherCurrentComment} </td>
                        </tr>
                      ))}
                      <tr>
                        <td>Other: <input type="text"
                        className="treatment_plan_table"
                        value={otherCurrentOther}
                        onChange={(e)=>setOtherCurrentOther(e.target.value)}/></td>
                        <td>
                          <input type="checkbox" checked={otherCurrentGood} onChange={(e)=>setOtherCurrentGood(!otherCurrentGood)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={otherCurrentFair} onChange={(e)=>setOtherCurrentFair(!otherCurrentFair)}/>
                        </td>
                        <td>
                          <input type="checkbox" checked={otherCurrentNotSoGood} onChange={(e)=>setOtherCurrentNotSoGood(!otherCurrentNotSoGood)}/>
                        </td>
                        <td>
                          <select value={otherCurrentNeed} onChange={(e)=>setOtherCurrentNeed(e.target.value)}>
                          <option >Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(otherCurrentComment.split("\n").length, 1)}
                            value={otherCurrentComment}
                            placeholder="___________"
                            onChange={(e) => setOtherCurrentComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setOtherCurrentComment((prevComment) => prevComment + "\n");
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

              {/* <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  {handleRiskFactorActivityArray.length > 0 && (
                    <table>
                      <thead>
                        <tr>
                          <th>Type of Activity</th>
                          <th>Good</th>
                          <th>Fair</th>
                          <th>Need assist</th>
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {handleRiskFactorActivityArray?.map((i, index) => (
                          <tr key={index}>
                            <td>

                              {i?.bathingShoweringGood?.map((item) => (
                                <p key={item?.value}>{item?.value}</p>
                              ))}

                            </td>
                            <td>{`${i.bathingShoweringFair === true ? "Yes" : "No"}`} </td>
                            <td>{`${i.bathingShoweringFair !== true ? "Yes" : "No"}`} </td>
                            <td>{` ${i.bathingShoweringNeedAssist === true ? "Yes" : "No"}`} </td>
                            <td> {i.bathingShoweringComments} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div> */}

              {/* start working  */}
              <div className="box-image-container">
                <div className="form-field-single-update ">
                  <label>Triggers:</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    required
                    value={triggers}
                    onChange={(e) => setTriggers(e.target.value)}
                  />
                </div>
                <div
                  className="yeschechboxFall-risk"
                  style={{ marginTop: "1rem", marginLeft: "10px" }}
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
                    required
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
                    required
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
                {/* <input
                style={{ marginRight: "1rem" }}
                required
                placeholder="Enter text"
                value={suicidalIdeation}
                onChange={(e) => setSuicidalIdeation(e.target.value)}
              /> */}

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
                      // checked={bathingShoweringNeedAssist===true}
                      // onChange={()=>setBathingShoweringNeedAssist(true)}
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
                      // checked={bathingShoweringNeedAssist===false}
                      // onChange={()=>setBathingShoweringNeedAssist(false)}
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
                      // checked={bathingShoweringNeedAssist===false}
                      // onChange={()=>setBathingShoweringNeedAssist(false)}
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
                      // checked={bathingShoweringNeedAssist===false}
                      // onChange={()=>setBathingShoweringNeedAssist(false)}
                    />
                    <label>N/A</label>
                  </div>
                </div>
              </div>

              {/* api add some time */}
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
                        checked={currentThoughtsOfHarmingSelf === true}
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
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Prior suicide attempt</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Access to means (i.e. weapon)</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Substance abuse</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Other self-abusing behavior</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Recent losses/lack of support</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Behavior cues</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          {/* setBehaviorcuesDropDown */}
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
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          {/* setSymptomsOfPsychosisDropDown */}
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
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Terminal physical illness</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Current stressors (specify)</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Chronic pain</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            style={{ border: "none", outline: "none" }}
                            type="text"
                            placeholder="____________"
                          />
                        </td>
                      </tr>
                      {riskFactorArray.length > 0 && (
                  
                        riskFactorArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              Other : {i.otherRiskOther}
                            </td>
                            <td><input type="checkbox" checked={i.otherRiskYesOrNot===true}/></td>
                            <td><input type="checkbox" checked={i.otherRiskYesOrNot===false}/></td>
                            <td>{` ${i.otherRiskComment}`} </td>
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

              {/* <div className="box-image-container hidePrint" style={{ padding: "10px" }}>
                <div className="form-field-single-update-bold">
                  <label >
                  Select risk factors that apply:
                </label>
                <Select
                  value={selectedValueRiskFactors}
                  isMulti
                  options={selectedValueRiskFactorsOption}
                  onChange={selectedValueRiskFactorsHandler}
                  isCreatable={true}
                  onKeyDown={handleKeySelectedValueRiskFactors}
                />
              </div>
                <div className="yeschechbox" style={{ marginLeft: "10px" }}>
                <div className="safetyRiskFactor">
                  <div className="safetyRiskFactor-child">
                    <input type="checkbox" id="riskYesNo" checked={riskYesNo === true} onChange={() => setRiskYesNo(true)} />
                    <label htmlFor="riskYesNo">Yes</label>
                  </div>
                  <div className="safetyRiskFactor-child">
                    <input type="checkbox" id="riskYesNono" checked={riskYesNo === false} onChange={() => setRiskYesNo(false)} />
                    <label htmlFor="riskYesNono">No</label>
                  </div>
                </div>
              </div>
                <div className="form-field-single-update-notBold" style={{ marginLeft: "10px" }}>
                <label >Comments:</label>
                <input
                  type="text"
                  required
                  value={riskComment}
                  onChange={(e) => setRiskComment(e.target.value)}
                />

                </div>
              </div> */}

           

              {/*
              <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  {riskFactorArray.length > 0 && (
                    <table>
                      <thead>
                        <tr>
                          <th>Select risk factors that apply</th>
                          <th>Checked</th>
                          <th>Comments</th>
                        </tr>
                      </thead>
                      <tbody>
                        {riskFactorArray?.map((i, index) => (
                          <tr key={index}>
                            <td>

                              {i?.selectedValueRiskFactors?.map((item) => (
                                <p key={item?.value}>{item?.value}</p>
                              ))}

                            </td>
                            <td>{` ${i.riskYesNo === true ? "YES" : "NO"}`} </td>
                            <td>{` ${i.riskComment}`} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div> */}

              {/* <div className="box-image-container hidePrint" style={{ padding: "10px" }}>
                <div className="form-field-single-update-bold">
                <label >
                  Protective factors that apply:
                </label>
                <Select
                  value={selectedValueProtectiveFactors}
                  isMulti
                  onChange={selectedValueProtectiveFactorsHandler}
                  options={selectedValueProtectiveFactorsOption}
                  isCreatable={true}
                  onKeyDown={handleKeySelectedValueProtectiveFactors}
                />

              </div>
                <div className="yeschechbox" style={{ marginLeft: "10px" }}>
                <div className="safetyRiskFactor">
                  <div className="safetyRiskFactor-child">
                    <input type="checkbox" id="protectiveYesNo" checked={protectiveYesNo === true} onChange={() => setProtectiveYesNo(true)} />
                    <label htmlFor="protectiveYesNo">Yes</label>
                  </div>
                  <div className="safetyRiskFactor-child">
                    <input type="checkbox" id="protectiveYesNono" checked={protectiveYesNo === false} onChange={() => setProtectiveYesNo(false)} />
                    <label htmlFor="protectiveYesNono">No</label>
                  </div>
                </div>
              </div>
                <div className="form-field-single-update-notBold" style={{ marginLeft: "10px" }}>
                <label >Comments:</label>
                <input
                  type="text"
                  value={protectiveComment}
                  onChange={(e) => setprotectiveComment(e.target.value)}
                  />

                </div>
              </div> */}

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
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Spiritual / religious support</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Religious/cultural prohibitions</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Fear of consequences</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Able to be engaged in intervention</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Willing to commit to keeping self safe</td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <input
                            type="text"
                            placeholder="__________"
                            className="treatment_plan_table"
                          />
                        </td>
                      </tr>
                       {protectiveFactorsArray?.map((i, index) => (
                          <tr key={index}>
                            <td>
                              Other: {i?.otherProtectiveFactorsApply}
                            </td>
                           <td><input type="checkbox" checked={i.otherProtectiveFactorsYesNo===true}/></td>
                           <td><input type="checkbox" checked={i.otherProtectiveFactorsYesNo===false}/></td>
                            <td>{` ${i.otherProtectiveFactorsDescription}`} </td>
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

              {/* <div className="needs-interventions-container">
                <div className="needs-interventions-column3">
                  {protectiveFactorsArray.length > 0 && (
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
                        {protectiveFactorsArray?.map((i, index) => (
                          <tr key={index}>
                            <td>

                              {i?.selectedValueProtectiveFactors?.map((item) => (
                                <p key={item?.value}>{item?.value}</p>
                              ))}

                            </td>
                            <td>{` ${i.protectiveYesNo === true ? "YES" : "NO"}`} </td>
                            <td>{` ${i.protectiveYesNo === true ? "NO" : "YES"}`} </td>
                            <td>{` ${i.protectiveComment}`} </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div> */}

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
             

              {/* <div className="box-image-container hidePrint" style={{ padding: "10px" }}>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label >Psychiatric Diagnoses:</label>
                  <select value={psychiatricOption} onChange={(e) => setPsychiatricOption(e.target.value)} className="select-same-line-update">
                    <option value="">Select</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Tertiary">Tertiary</option>
                    <option value="Additional">Additional</option>
                  </select>
                </div>
                <div className="form-field-child">
                  <label htmlFor="icdCode">ICD Code:</label>
                  <input
                    type="text"
                    required
                    id="icdCode"
                    value={icdCode}
                    onChange={(e) => setIcdCode(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    required
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              </div> */}

              {/* <div className="form-actions hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handlePsychiatricDiagnoses}
                >
                  Add
                </button>
              </div> */}

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
                              psychiatricPrimaryDescription.split("\n").length,
                              1
                            )}
                            value={psychiatricPrimaryDescription}
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
                              psychiatricSecondaryDescription.split("\n").length,
                              1
                            )}
                            value={psychiatricSecondaryDescription}
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
                              psychiatricTertiaryDescription.split("\n").length,
                              1
                            )}
                            value={psychiatricTertiaryDescription}
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
                              psychiatricAdditionalDescription.split("\n").length,
                              1
                            )}
                            value={psychiatricAdditionalDescription}
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
                            <td>Other: {i?.otherPsychiatricOption}</td>
                            <td>{i?.othericdCode}</td>
                            <td>{i?.otherdescription}</td>
                            
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

              {/* <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>Medical Diagnoses:</h6>
              </div>
              <div className="box-image-container hidePrint" style={{ padding: "10px" }}>
              <div className="form-field-update">
                <div className="form-field-child">
                  <label htmlFor="icdCode">Medical Diagnoses:</label>
                  <select value={MedicalOption} onChange={(e) => setMedicalOption(e.target.value)} className="select-same-line-update">
                    <option value="">Select</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="Tertiary">Tertiary</option>
                    <option value="Additional">Additional</option>
                  </select>
                </div>
                <div className="form-field-child">
                  <label htmlFor="icdCode">ICD Code:</label>
                  <input
                    type="text"
                    required
                    id="icdCode"
                    value={icdCodeMedicalDiagnoses}
                    onChange={(e) => setIcdCodeMedicalDiagnoses(e.target.value)}
                  />

                </div>
                <div className="form-field-child">
                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    required
                    id="description"
                    value={descriptionMedicalDiagnoses}
                    onChange={(e) => setDescriptionMedicalDiagnoses(e.target.value)}
                  />
                </div>

              </div>
              </div> */}

           

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
                              primaryDescription.split("\n").length,
                              1
                            )}
                            value={primaryDescription}
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
                              secondaryDescription.split("\n").length,
                              1
                            )}
                            value={secondaryDescription}
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
                              TertiaryDescription.split("\n").length,
                              1
                            )}
                            value={TertiaryDescription}
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
                              Additional1Description.split("\n").length,
                              1
                            )}
                            value={Additional1Description}
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
                      <tr>
                        <td>Additional</td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            placeholder="___________"
                            value={Additional2icdCode}
                            onChange={(e)=>setAdditional2IcdCode(e.target.value)}
                          />
                        </td>
                        <td>
                          {" "}
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(
                              Additional2Description.split("\n").length,
                              1
                            )}
                            value={Additional2Description}
                            placeholder="___________"
                            onChange={(e) => setAdditional2Description(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setAdditional2Description(
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
                            <td>Other: {i?.OtherMedicalOption}</td>
                            <td>{i?.OthericdCodeMedicalDiagnoses}</td>
                            <td>{i?.OtherdescriptionMedicalDiagnoses}</td>
                            
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
                <label style={{ fontWeight: "bold" }}>
                  Significant recent losses:
                </label>
                <div className="Significant-losses">
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
                {/* <h6>If yes, please check applicable loss(es):</h6> */}
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
                      checked={agreementWithPlan === true}
                      onChange={() => setAgreementWithPlan(true)}
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
                      checked={agreementWithPlan === false}
                      onChange={() => setAgreementWithPlan(false)}
                    />
                    <span style={{ paddingLeft: "10px" }}>
                      No, I (Resident/guardian) disagree with the types and/or
                      levels of some or all of the services. By checking this
                      box, I (Resident/guardian) will receive the services that
                      I have agreed to receive and may appeal the treatment
                      team’s decision to not include all the types and/ or
                      levels of services that I have requested. *
                    </span>
                  </div>
                </div>
              </div>

              {/* resident gaurdent name and signatutre */}
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
                      onClick={() => setSigInModel8(true)}
                    >
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {residentGauardianSignature && (
                      <p className="signature_name_print">
                        Digitally Sign by {residentGauardianSignature}{" "}
                        {residentGuardianDate}
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
                  />
                )}
                {/* please care full write some think is change so api will work */}
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
                        Digitally Sign by {staffSignature} {staffDate}
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
                      Enter BHP Credentials:
                    </label>
                    <input
                      type="text"
                      required
                      value={bhpCredentials}
                      onChange={(e) => setBhpCredentials(e.target.vaue)}
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
                        Digitally Sign by {bhpSignature} {bhpDate}
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
                  />
                )}
              </div>
            </div>

            {/* <div className="form-actions">
            <button
              type="submit"
              className="initalsubmit"
            >
              SUBMIT DETAILS
            </button>
          </div> */}
          </form>
        </div>
        {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
      </div>
    </>
  );
};

export default InitialAssessment;
