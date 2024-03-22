import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { user_detail, patient_form,patient_form_treatment_get } from "../../Api_Collection/Api";
import SingInModel from "../Modal/SingInModel";
import Select from "react-select";
import Draftinmodel from "../Modal/Draftinmodel";
import SingInUpdateModel from "../Modal/SingInUpdateModel";
import { useReactToPrint } from "react-to-print";
import AutoSize from "../AutoSize/AutoSize"

const Treatmentplan_update = () => {
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
  // model data
  const [draftModel, setDraftModel] = useState(false);
  const [signatureModel1, setSignatureModel1] = useState(false);
  const [signatureModel2, setSignatureModel2] = useState(false);
  const [signatureModel3, setSignatureModel3] = useState(false);
  //user Detail
  const [user, setUser] = useState("");

  const navigate = useNavigate();


  //from satart now ------------------------------->
  const [getApiData,setGetApiData]=useState("");
  const [userId, setUserId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dob, setDob] = useState("");
  const [date, setDate] = useState("");
  const [admitDate, setAdminDate] = useState("");

  // care services
  const [physicalService, setPhysicalService] = useState("");
  const [behavior, setBehavior] = useState("");
  //medication service
  const [medicationAdministation,setMedicationAdministation]=useState("");
  const [medicationAssistance,setMedicationAssistence]=useState("");
  const [presentingPrice, setPresentingPrice] = useState([]);

  // diagonsis
  const [diagonsis,setDiagonsis]=useState("");

  // Mental Status
  const [mendelHealth, setMentelHealth] = useState("");
  const [mentelText, setMentelText] = useState("");
  //Mood Level:
  const [mind, setMind] = useState("");
  const [mindText, setMindText] = useState("");
  //ADLS
  const [adls, setAdls] = useState("");
  const [adlsText, setAldsText] = useState("");
  //Behavioral Health Services:
  const [BHealth, setBHealth] = useState("");
  const [Btext, setBtext] = useState("");
  //Primary Care Provider:
  const [primaryCare, setPrimaryCare] = useState("");
  const [psychiatricProvider, setPsychiatricProvider] = useState("");

  //Resident Goals
  const [residentGoal, setResidentGoal] = useState("");
  const [allergies, setAllergies] = useState("");
  const [Triggers, setTriggers] = useState("");
  const [strengths, setStrengths] = useState([]);

  const [Barriers, setBarriers] = useState([]);

  // Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations
  const [behavioralSymptoms, setBehavioralSymptoms] = useState([]);
  const [behavioralSymptomsBoolean, setBehavioralSymptomsBoolean] =
    useState(false);
  const [behavioralSymptomsOther, setBehavioralSymptomsOther] = useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = behavioralSymptoms.some(
      (behavioral) => behavioral === "Other"
    );

    // Set BarriersBoolean accordingly
    setBehavioralSymptomsBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
  if (isOtherSelected) {
    setBehavioralSymptomsOther("");
  } else {
    setBehavioralSymptomsOther("");
  }
  }, [behavioralSymptoms]);

  const [physicalSymptoms, setPhysicalSymptoms] = useState([]);
  const [physicalSymptomsBoolean, setPhysicalSymptomsBoolean] = useState(false);
  const [physicalSymptomsOther, setPhysicalSymptomsOther] = useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = physicalSymptoms.some(
      (behavioral) => behavioral === "Other"
    );

    // Set BarriersBoolean accordingly
    setPhysicalSymptomsBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setPhysicalSymptomsOther("");
    }
  }, [physicalSymptoms]);

  const [consnotiveSymptoms, setConsnotiveSymptoms] = useState([]);
  const [consnotiveSymptomsBoolean, setConsnotiveSymptomsBoolean] =
    useState(false);
  const [consnotiveSymptomsOther, setConsnotiveSymptomsOther] = useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = consnotiveSymptoms.some(
      (behavioral) => behavioral === "Other"
    );

    // Set BarriersBoolean accordingly
    setConsnotiveSymptomsBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setConsnotiveSymptomsOther("");
    }
  }, [consnotiveSymptoms]);

  const [psychosocialSymptoms, setPsychosocialSymptoms] = useState([]);
  const [psychosocialSymptomsBoolean, setPsychosocialSymptomsBoolean] =
    useState(false);
  const [psychosocialSymptomssOther, setPsychosocialSymptomsOther] =
    useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = psychosocialSymptoms.some(
      (behavioral) => behavioral === "Other"
    );

    // Set BarriersBoolean accordingly
    setPsychosocialSymptomsBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setPsychosocialSymptomsOther("");
    }
  }, [psychosocialSymptoms]);

  const [interventionsImplemented, setInterventionsImplemented] = useState([]);
  const [interventionsImplementedBoolean, setInterventionsImplementedBoolean] =
    useState(false);
  const [interventionsImplementedOther, setInterventionsImplementedOther] =
    useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = interventionsImplemented.some(
      (behavioral) => behavioral === "Other"
    );

    // Set BarriersBoolean accordingly
    setInterventionsImplementedBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setInterventionsImplementedOther("");
    }
  }, [interventionsImplemented]);

  // Counseling and Frequency : Total of minimum Blank ___hours daily
  const [minimumHoure, setMinimumHoure] = useState("");
  const [counselingOptions, setCounselingOptions] = useState([]);
  const [counselingOptionsText, setCounselingOptionsOther] = useState("");
  const [counselingOptionsTextBoolean, setCounselingOptionsTextBoolean] =
    useState(false);

  //Goals for Changes in the Resident Phychorial Interaction or Behaviour
  const [option1, setOption1] = useState([]);
  const [option1Boolean, setOption1Boolean] = useState(false);
  const [option1Other, setoption1Other] = useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = option1.some(
      (barrier) => barrier.value === "Other"
    );

    // Set BarriersBoolean accordingly
    setOption1Boolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setoption1Other("");
    }
  }, [option1]);

  const [option2, setOption2] = useState([]);
  const [option3, setOption3] = useState([]);
  const [option4, setOption4] = useState([]);
  const [option5, setOption5] = useState([]);
  const [option6, setOption6] = useState([]);
  const [option7, setOption7] = useState([]);
  const [option8, setOption8] = useState([]);

  //option1
  const [admissionMeasure1, setAdmissionMeasure1] = useState("");
  const [previousMeasure1, setPreviousMeasure1] = useState("");
  const [currentMeasure1, setCurrentMeasure1] = useState("");
  const [estimatedDateOfCompletion1, setEstimatedDateOfCompletion1] =
    useState("");
  const [comments1, setComment1] = useState("");
  // option3
  const [admissionMeasure2, setAdmissionMeasure2] = useState("");
  const [previousMeasure2, setPreviousMeasure2] = useState("");
  const [currentMeasure2, setCurrentMeasure2] = useState("");
  const [estimatedDateOfCompletion2, setEstimatedDateOfCompletion2] =
    useState("");
  const [comments2, setComment2] = useState("");
  // option 42
  const [admissionMeasure3, setAdmissionMeasure3] = useState("");
  const [previousMeasure3, setPreviousMeasure3] = useState("");
  const [currentMeasure3, setCurrentMeasure3] = useState("");
  const [estimatedDateOfCompletion3, setEstimatedDateOfCompletion3] =
    useState("");
  const [comments3, setComment3] = useState("");
  //option4
  const [admissionMeasure4, setAdmissionMeasure4] = useState("");
  const [previousMeasure4, setPreviousMeasure4] = useState("");
  const [currentMeasure4, setCurrentMeasure4] = useState("");
  const [estimatedDateOfCompletion4, setEstimatedDateOfCompletion4] =
    useState("");
  const [comments4, setComment4] = useState("");
  //option5
  const [admissionMeasure5, setAdmissionMeasure5] = useState("");
  const [previousMeasure5, setPreviousMeasure5] = useState("");
  const [currentMeasure5, setCurrentMeasure5] = useState("");
  const [estimatedDateOfCompletion5, setEstimatedDateOfCompletion5] =
    useState("");
  const [comments5, setComment5] = useState("");
  //option 65
  const [admissionMeasure6, setAdmissionMeasure6] = useState("");
  const [previousMeasure6, setPreviousMeasure6] = useState("");
  const [currentMeasure6, setCurrentMeasure6] = useState("");
  const [estimatedDateOfCompletion6, setEstimatedDateOfCompletion6] =
    useState("");
  const [comments6, setComment6] = useState("");
  //option7
  const [admissionMeasure7, setAdmissionMeasure7] = useState("");
  const [previousMeasure7, setPreviousMeasure7] = useState("");
  const [currentMeasure7, setCurrentMeasure7] = useState("");
  const [estimatedDateOfCompletion7, setEstimatedDateOfCompletion7] =
    useState("");
  const [comments7, setComment7] = useState("");
  //option 876
  const [admissionMeasure8, setAdmissionMeasure8] = useState("");
  const [previousMeasure8, setPreviousMeasure8] = useState("");
  const [currentMeasure8, setCurrentMeasure8] = useState("");
  const [estimatedDateOfCompletion8, setEstimatedDateOfCompletion8] =
    useState("");
  const [comments8, setComment8] = useState("");

  //goal other
  const [optionOther, setOptionOther] = useState("");
  const [admissionMeasureOther, setAdmissionMeasureOther] = useState("");
  const [currentMeasureOther, setCurrentMeasureOther] = useState("");
  const [estimatedDateOfCompletionOther, setEstimatedDateOfCompletionOther] =
    useState("");
  const [commentsOther, setCommentOther] = useState("");
  //other array add add on array
  const [otherArray, setOtherArray] = useState([]);
  const [showOther, setShowOther] = useState(false);

  const handleAddButtonClick = () => {
    // Create a new object with the form values
    setShowOther(true);

    if (
      optionOther ||
      admissionMeasureOther ||
      currentMeasureOther ||
      estimatedDateOfCompletionOther ||
      commentsOther
    ) {
      const newData = {
        optionOther,
        admissionMeasureOther,
        currentMeasureOther,
        estimatedDateOfCompletionOther,
        commentsOther,
      };

      // Update the array state with the new data
      setOtherArray((prevDataArray) => [...prevDataArray, newData]);

      // Clear the form values for the next entry
      setOptionOther("");
      setAdmissionMeasureOther("");
      setCurrentMeasureOther("");
      setEstimatedDateOfCompletionOther("");
      setCommentOther("");
    }
  };

  // Event handler for removing an item from the array
  const handleRemoveItem = (index) => {
    const updatedArray = [...otherArray];
    updatedArray.splice(index, 1);
    setOtherArray(updatedArray);
  };

  //Resident overall participation in treatment: other statement is not add
  const [residentParticipation, setResidentParticipation] = useState("");
  const [residentAttitute, setResidentAttitute] = useState("");
  const [residentProgress, setResidentProgress] = useState("");
  const [supportSystemPhoneNumber, setSupportSystemPhoneNumber] = useState("");
  const [supportSystem, setSupportSystem] = useState([]);
  const [supportSystemOtherText, setSupportSystemOtherText] = useState("");
  const [supportSystemOtherTextBoolean, setSupportSystemOtherTextBoolean] =
    useState(false);
  const [currentMedications, setCurrentMedications] = useState("");
  const [religiousPreference, setreligiousPreference] = useState("");
  const [religiousPreferenceText, setReligiousPreferenceText] = useState("");
  const [nutritionAndWellnessPlanning, setNutritionAndWellnessPlanning] =
    useState("");
  const [
    recommendationToExtendResidentialTreatment,
    setRecommendationToExtendResidentialTreatment,
  ] = useState("");
  const [personalFinances, setPersonalFinances] = useState(false);
  const [dischargePlanning, setDischargePlanning] = useState("");
  const [additionalComment, setAdditionalComment] = useState("");
  const [
    recommendationsForFurtherPrograms,
    setRecommendationsForFurtherPrograms,
  ] = useState([]);
  const [
    recommendationsForFurtherProgramsBoolean,
    setrecommendationsForFurtherProgramsBoolean,
  ] = useState(false);
  const [
    recommendationsForFurtherProgramsOther,
    setRecommendationsForFurtherProgramsOther,
  ] = useState("");

  useEffect(() => {
    // Check if "Other" is present in the Barriers array
    const isOtherSelected = recommendationsForFurtherPrograms.some(
      (barrier) => barrier === "Other"
    );

    // Set BarriersBoolean accordingly
    setrecommendationsForFurtherProgramsBoolean(isOtherSelected);

    // Update BarriersOther only when "Other" is selected
    if (!isOtherSelected) {
      setRecommendationsForFurtherProgramsOther("");
    }
  }, [recommendationsForFurtherPrograms]);

  const [afterCareAndTransitionPlanning, setAfterCareAndTransitionPlanning] =
    useState([]);

  //theory input
  const [textData, setTextData] = useState("");

  //Clinical Summary/Recommendations/Intervention:
  const [clinicalSummary, setClinicalSummary] = useState([]);
  const [treatmentPlanReviewDate, setTreatmentPlanReviewDate] = useState("");
  const [dischargePlanDate, setDischargePlanDate] = useState("");
  //Individual Participating in Developing the Service Plan
  const [resident, setResident] = useState("");
  const [guardian, setGuardian] = useState("");
  const [staff, setStaff] = useState("");
  const [bpn, setBph] = useState("");
  const [commentIndividual, setCommentIndividual] = useState("");
  //isReason
  const [isReason, setIsReason] = useState("no");
  const [refusalReason, setrefusalReason] = useState("no");
  //signaturesResident
  const [nameResident, setNameResident] = useState("");
  const [credentialsResident, setCredentialsResident] = useState("");
  const [signatureResident, setsignatureResident] = useState("");
  const [dateResident, setDateResident] = useState("");
  const [timeResident,setTimeResident]=useState("");
  // "signaturesFacilityRep"
  const [nameFacilityRep, setNameFacilityRep] = useState("");
  const [credentialsFacilityRep, setCredentialsFacilityRep] = useState("");
  const [signatureFacilityRep, setsignatureFacilityRep] = useState("");
  const [dateFacilityRep, setDateFacilityRep] = useState("");
  const [timeFacality,setTimeFacality]=useState("")
  //signaturesBhp"
  const [nameBhp, setNameBhp] = useState("");
  const [credentialsBhp, setCredentialsBhp] = useState("");
  const [signatureBhp, setsignatureBhp] = useState("");
  const [dateBhp, setDateBhp] = useState("");
  const [timeBhp,setTimeBhp]=useState("");

  useEffect(()=>{
    setDate();
    setAdminDate()
    setPhysicalService("")
    setBehavior("")

    // Resetting medication service state variables
setMedicationAdministation("");
setMedicationAssistence("");
setPresentingPrice([]);

// Resetting diagnosis state variable
setDiagonsis("");

// Resetting mental status state variables
setMentelHealth("");
setMentelText("");

// Resetting mood level state variables
setMind("");
setMindText("");

// Resetting ADLS state variables
setAdls("");
setAldsText("");

// Resetting behavioral health services state variables
setBHealth("");
setBtext("");

// Resetting primary care provider state variables
setPrimaryCare("");
setPsychiatricProvider("");

// Resetting resident goals state variables
setResidentGoal("");
setAllergies("");
setTriggers("");
setStrengths([]);

// Resetting barriers state variables
setBarriers([]);

// Resetting risk assessment state variables
setBehavioralSymptoms([]);
setBehavioralSymptomsBoolean(false);
setBehavioralSymptomsOther("");

// Resetting physical symptoms state variables
setPhysicalSymptoms([]);
setPhysicalSymptomsBoolean(false);
setPhysicalSymptomsOther("");

// Resetting cognitive symptoms state variables
setConsnotiveSymptoms([]);
setConsnotiveSymptomsBoolean(false);
setConsnotiveSymptomsOther("");

// Resetting psychosocial symptoms state variables
setPsychosocialSymptoms([]);
setPsychosocialSymptomsBoolean(false);
setPsychosocialSymptomsOther("");

// Resetting interventions implemented state variables
setInterventionsImplemented([]);
setInterventionsImplementedBoolean(false);
setInterventionsImplementedOther("");

// Resetting counseling and frequency state variables
setMinimumHoure("");
setCounselingOptions([]);
setCounselingOptionsOther("");
setCounselingOptionsTextBoolean(false);

// Resetting goals for changes state variables
setOption1([]);
setOption1Boolean(false);
setoption1Other("");

// Resetting option2 state variables
setOption2([]);

// Resetting option3 state variables
setOption3([]);

// Resetting option4 state variables
setOption4([]);

// Resetting option5 state variables
setOption5([]);

// Resetting option6 state variables
setOption6([]);

// Resetting option7 state variables
setOption7([]);

// Resetting option8 state variables
setOption8([]);

// Resetting admissionMeasure1 state variables
setAdmissionMeasure1("");
setPreviousMeasure1("");
setCurrentMeasure1("");
setEstimatedDateOfCompletion1("");
setComment1("");

// Resetting admissionMeasure2 state variables
setAdmissionMeasure2("");
setPreviousMeasure2("");
setCurrentMeasure2("");
setEstimatedDateOfCompletion2("");
setComment2("");

// Resetting admissionMeasure3 state variables
setAdmissionMeasure3("");
setPreviousMeasure3("");
setCurrentMeasure3("");
setEstimatedDateOfCompletion3("");
setComment3("");

// Resetting admissionMeasure4 state variables
setAdmissionMeasure4("");
setPreviousMeasure4("");
setCurrentMeasure4("");
setEstimatedDateOfCompletion4("");
setComment4("");

// Resetting admissionMeasure5 state variables
setAdmissionMeasure5("");
setPreviousMeasure5("");
setCurrentMeasure5("");
setEstimatedDateOfCompletion5("");
setComment5("");

// Resetting admissionMeasure6 state variables
setAdmissionMeasure6("");
setPreviousMeasure6("");
setCurrentMeasure6("");
setEstimatedDateOfCompletion6("");
setComment6("");

// Resetting admissionMeasure7 state variables
setAdmissionMeasure7("");
setPreviousMeasure7("");
setCurrentMeasure7("");
setEstimatedDateOfCompletion7("");
setComment7("");

// Resetting admissionMeasure8 state variables
setAdmissionMeasure8("");
setPreviousMeasure8("");
setCurrentMeasure8("");
setEstimatedDateOfCompletion8("");
setComment8("");

// Resetting optionOther state variables
setOptionOther("");
setAdmissionMeasureOther("");
setCurrentMeasureOther("");
setEstimatedDateOfCompletionOther("");
setCommentOther("");

// Resetting otherArray state variables
setOtherArray([]);
setShowOther(false);

// Resetting resident overall participation state variables
setResidentParticipation("");
setResidentAttitute("");
setResidentProgress("");
setSupportSystemPhoneNumber("");
setSupportSystem([]);
setSupportSystemOtherText("");
setSupportSystemOtherTextBoolean(false);
setCurrentMedications("");
setreligiousPreference("");
setReligiousPreferenceText("");
setNutritionAndWellnessPlanning("");
setRecommendationToExtendResidentialTreatment("");
setPersonalFinances(false);
setDischargePlanning("");
setAdditionalComment("");
setRecommendationsForFurtherPrograms([]);
setrecommendationsForFurtherProgramsBoolean(false);
setRecommendationsForFurtherProgramsOther("");

// Resetting afterCareAndTransitionPlanning state variables
setAfterCareAndTransitionPlanning([]);

// Resetting theory input state variable
setTextData("");

// Resetting clinicalSummary state variables
setClinicalSummary([]);
setTreatmentPlanReviewDate("");
setDischargePlanDate("");
// Resetting individual participating state variables
setResident("");
setGuardian("");
setStaff("");
setBph("");
setCommentIndividual("");

// Resetting isReason state variable
setIsReason("no");
setrefusalReason("no");

// Resetting signaturesResident state variables
setNameResident("");
setCredentialsResident("");
setsignatureResident("");
setDateResident("");
setTimeResident("");

// Resetting signaturesFacilityRep state variables
setNameFacilityRep("");
setCredentialsFacilityRep("");
setsignatureFacilityRep("");
setDateFacilityRep("");
setTimeFacality("");

// Resetting signaturesBhp state variables
setNameBhp("");
setCredentialsBhp("");
setsignatureBhp("");
setDateBhp("");
setTimeBhp("");

  },[getApiData])

useEffect(()=>{
  patient_form_treatment_get(userId,setGetApiData)
},[userId])

  useEffect(() => {
    setUserId(user?._id);
    setResidentName(user?.fullName);
    setDob(user?.dateOfBirth?user?.dateOfBirth?.slice(0,10):"");
  }, [user]);


  useEffect(() => {
    user_detail(setUser);
  }, []);

  const handlePost = (e) => {
    e.preventDefault();

    let presentingPriceArray = [];

    presentingPrice.forEach(item => {
      presentingPriceArray.push(item?.value);
    });

    let strengthsArray=[];
    strengths.forEach(item => {
      strengthsArray.push(item?.value);
    });

    let BarriersArray=[]
    Barriers.forEach(item => {
      BarriersArray.push(item?.value);
    });

    let option1Array=[]
    option1.forEach(item => {
      option1Array.push(item?.value);
    });

    let option2Array=[]
    option2.forEach(item => {
      option2Array.push(item?.value);
    });

    let option3Array=[]
    option3.forEach(item => {
      option3Array.push(item?.value);
    });

    let option4Array=[]
    option4.forEach(item => {
      option4Array.push(item?.value);
    });

    let option5Array=[]
    option5.forEach(item => {
      option5Array.push(item?.value);
    });

    let option6Array=[]
    option6.forEach(item => {
      option6Array.push(item?.value);
    });

    let option7Array=[]
    option7.forEach(item => {
      option7Array.push(item?.value);
    });

    let option8Array=[]
    option8.forEach(item => {
      option8Array.push(item?.value);
    });

    let clinicalSummaryArray=[];
    clinicalSummary.forEach((item)=>{
      clinicalSummaryArray.push(item?.value);
    })


    const data = {
      patientId: userId,
      
      dateOfBirth: dob,
      date: date,
      admitDate: admitDate,
      care: [
        physicalService,
        behavior,
      ] ,
      medicationService:[
        medicationAdministation,
        medicationAssistance
    ],
      presentingProblems: presentingPriceArray,
      diagonsis,
      mentalStatus: mendelHealth,
      mentalStatusOther: mentelText,
      moodLevel: mind,
      moodLevelOther: mindText,
      adls: adls,
      behavioralHealthServices: BHealth,
      behavioralHealthServicesOther:Btext,
      primaryCareProvider: primaryCare,
      psychiatricProvider:psychiatricProvider,
      residentGoals:residentGoal,
      allergies: allergies,
      triggers: Triggers,
      strengths: strengthsArray,
      barriers: BarriersArray,
      riskAssessment: {
        behavioralSymptoms: behavioralSymptoms,
        physicalSymptoms: physicalSymptoms,
        cognitiveSymptoms: consnotiveSymptoms,
        psychosocialSymptoms: psychosocialSymptoms,
      },
      interventions:interventionsImplemented,
      interventionsComment:interventionsImplementedOther,
      counselingFrequency:counselingOptions,
      counselingFrequencyMinimum:minimumHoure,
      counselingFrequencyComment:counselingOptionsText,

      maintainSobriety:{
        type:option1Array,
        admissionMeasure:admissionMeasure1,
        currentMeasure:currentMeasure1,
        estimatedDateOfCompletion:estimatedDateOfCompletion1,
        comments:comments1
      },

      independentLivingSkills:{
        type:option2Array,
        admissionMeasure:admissionMeasure2,
        currentMeasure:currentMeasure2,
        estimatedDateOfCompletion:estimatedDateOfCompletion2,
        comments:comments2
      },

      employment:{
        type:option3Array,
        admissionMeasure:admissionMeasure3,
        currentMeasure:currentMeasure3,
        estimatedDateOfCompletion:estimatedDateOfCompletion3,
        comments:comments3
      },

      adlsSecond:{
        type:option4Array,
        admissionMeasure:admissionMeasure4,
        currentMeasure:currentMeasure4,
        estimatedDateOfCompletion:estimatedDateOfCompletion4,
        comments:comments4
      },

      safety:{
        type:option5Array,
        admissionMeasure:admissionMeasure5,
        currentMeasure:currentMeasure5,
        estimatedDateOfCompletion:estimatedDateOfCompletion5,
        comments:comments5
      },

      medicationEducation:{
        type:option6Array,
        admissionMeasure:admissionMeasure6,
        currentMeasure:currentMeasure6,
        estimatedDateOfCompletion:estimatedDateOfCompletion6,
        comments:comments6
      },

      managingMentalHealth:{
        type:option7Array,
        admissionMeasure:admissionMeasure7,
        currentMeasure:currentMeasure7,
        estimatedDateOfCompletion:estimatedDateOfCompletion7,
        comments:comments7
      },

      legal:{
        type:option8Array,
        admissionMeasure:admissionMeasure8,
        currentMeasure:currentMeasure8,
        estimatedDateOfCompletion:estimatedDateOfCompletion8,
        comments:comments8
      },

      // other: [
      //   {
      //     type:option1,
      //     admissionMeasure:admissionMeasure1,
      //     currentMeasure:currentMeasure1,
      //     estimatedDateOfCompletion:estimatedDateOfCompletion1,
      //     comments:comments1
      //   }
      // ],
      residentParticipation,
      residentAttitude:residentAttitute,
      residentProgress,
      supportSystem,
      supportSystemPhoneNumber:supportSystemPhoneNumber,
      currentMedications,
      religiousPreference,
      nutritionAndWellnessPlanning,
      recommendationToExtendResidentialTreatment,
      personalFinances,
      dischargePlanning,
      additionalComment,
      recommendationsForFurtherPrograms,
      afterCareAndTransitionPlanning,
      clinicalSummary:clinicalSummaryArray,
      treatmentPlanReviewDate,
      dischargePlanDate,

      individualsParticipatingInServicePlan:{
        resident:resident,
        guardian:guardian,
        staff:staff,
        bhp:bpn,
        comment:commentIndividual
      },

      residentAgreementIsReason:isReason,
      residentAgreementRefusalReason:refusalReason,

      signaturesResident: {
        name: nameResident,
        credentials: credentialsResident,
        signature: signatureResident,
        date: dateResident,
        time:timeResident
      },
      signaturesFacilityRep: {
        name: nameFacilityRep,
        credentials: credentialsFacilityRep,
        signature: signatureFacilityRep,
        date: dateFacilityRep,
        time:timeFacality
      },
      signaturesBhp: {
        name: nameBhp,
        credentials: credentialsBhp,
        signature: signatureBhp,
        date: dateBhp,
      },
    };
    patient_form(data);
    navigate("/intake");
  };

  //handle check box
  const handleCheckboxChangeMentalHealth = (value) => {
    setMentelHealth(value);
  };

  const handleCheckboxChangeMind = (value) => {
    setMind(value);
  };

  //set the answer handleCheckboxChangeBehavioral
  const handleCheckboxChangeBehavioral = (symptom) => {
    if (symptom === "Other") {
      // Toggle "Other" symptom
      setBehavioralSymptoms(prevState => {
        if (prevState.includes("Other")) {
          return prevState.filter(item => item !== "Other");
        } else {
          return [...prevState, "Other"];
        }
      });
    } else {
      // Toggle other symptoms
      setBehavioralSymptoms(prevState => {
        if (prevState.includes(symptom)) {
          return prevState.filter(item => item !== symptom);
        } else {
          return [...prevState, symptom];
        }
      });
    }
  };

  const handleCheckboxChangePhysical = (symptom) => {
    if (symptom === "Other") {
      // Toggle "Other" symptom
      setPhysicalSymptoms(prevState => {
        if (prevState.includes("Other")) {
          return prevState.filter(item => item !== "Other");
        } else {
          return [...prevState, "Other"];
        }
      });
    }else{
      setPhysicalSymptoms((prevSelectedSymptoms) => {
        if (prevSelectedSymptoms.includes(symptom)) {
          return prevSelectedSymptoms.filter((selected) => selected !== symptom);
        } else {
          return [...prevSelectedSymptoms, symptom];
        }
      });
    }
   
  };

  const handleCheckboxChangeCognitive = (symptom) => {
    if (symptom === "Other") {
      // Toggle "Other" symptom
      setConsnotiveSymptoms(prevState => {
        if (prevState.includes("Other")) {
          return prevState.filter(item => item !== "Other");
        } else {
          return [...prevState, "Other"];
        }
      });
    }else{
      setConsnotiveSymptoms((prevSelectedSymptoms) => {
        if (prevSelectedSymptoms.includes(symptom)) {
          return prevSelectedSymptoms.filter((selected) => selected !== symptom);
        } else {
          return [...prevSelectedSymptoms, symptom];
        }
      });
    }

  };

  const handleCheckboxChangePsychosocial = (symptom) => {
    if (symptom === "Other") {
      // Toggle "Other" symptom
      setPsychosocialSymptoms(prevState => {
        if (prevState.includes("Other")) {
          return prevState.filter(item => item !== "Other");
        } else {
          return [...prevState, "Other"];
        }
      });
    }else{
      setPsychosocialSymptoms((prevSelectedSymptoms) => {
        if (prevSelectedSymptoms.includes(symptom)) {
          return prevSelectedSymptoms.filter((selected) => selected !== symptom);
        } else {
          return [...prevSelectedSymptoms, symptom];
        }
      });
    }

  };

  const handleCheckboxChange = (value) => {
    // Check if the value is already in the array
    const isValueChecked = interventionsImplemented.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedInterventions = isValueChecked
      ? interventionsImplemented.filter((item) => item !== value)
      : [...interventionsImplemented, value];

    setInterventionsImplemented(updatedInterventions);
  };

  const handleCheckboxChangeCounsiling = (value) => {
    // Check if the value is already in the array
    const isValueChecked = counselingOptions.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedCounselingOptions = isValueChecked
      ? counselingOptions.filter((item) => item !== value)
      : [...counselingOptions, value];

    setCounselingOptions(updatedCounselingOptions);
  };

  //suppost system handle
  const handleCheckboxChangeSupportSystem = (value) => {
    // Check if the value is already in the array
    const isValueChecked = supportSystem.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedSupportSystem = isValueChecked
      ? supportSystem.filter((item) => item !== value)
      : [...supportSystem, value];

    setSupportSystem(updatedSupportSystem);
  };

  const handleCheckboxChangerecommendationsForFurtherPrograms = (value) => {
    // Check if the value is already in the array
    const isValueChecked = recommendationsForFurtherPrograms.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedRecommendations = isValueChecked
      ? recommendationsForFurtherPrograms.filter((item) => item !== value)
      : [...recommendationsForFurtherPrograms, value];

    setRecommendationsForFurtherPrograms(updatedRecommendations);
  };

  const handleCheckboxChangeafterCareAndTransitionPlanning = (value) => {
    // Check if the value is already in the array
    const isValueChecked = afterCareAndTransitionPlanning.includes(value);

    // If it's checked, remove it; otherwise, add it to the array
    const updatedEmergencyContacts = isValueChecked
      ? afterCareAndTransitionPlanning.filter((item) => item !== value)
      : [...afterCareAndTransitionPlanning, value];

    setAfterCareAndTransitionPlanning(updatedEmergencyContacts);
  };

  useEffect(() => {
    for (let i = 0; i < counselingOptions.length; i++) {
      if (counselingOptions[i] === "Other") {
        setCounselingOptionsTextBoolean(true);
        break;
      } else {
        setCounselingOptionsTextBoolean(false);
      }
    }
    for (let i = 0; i < supportSystem.length; i++) {
      if (supportSystem[i] === "Other") {
        setSupportSystemOtherTextBoolean(true);
        break;
      } else {
        setSupportSystemOtherTextBoolean(false);
      }
    }
  }, [counselingOptions, supportSystem]);
  // Presenting Problems
  const presentingPriceOption = [
    { label: "Depression", value: "Depression" },
    { label: "Mood Changes", value: "Mood Changes" },
    {
      label: "Trouble Falling / staying Asleep",
      value: "Trouble Falling / staying Asleep",
    },
    { label: "Mood Swings", value: "Mood Swings" },
    { label: "Social Withdrawals", value: "Social Withdrawals" },
    { label: "Changes in Eating habits", value: "Changes in Eating habits" },
    { label: "Feeling of anger", value: "Feeling of anger" },
    { label: "Negative thoughts", value: "Negative thoughts" },
    { label: "Confused thinking ", value: "Confused thinking " },
    { label: "Irritability", value: "Irritability" },
    { label: "Loss of interest", value: "Loss of interest" },
    { label: "Fatigue or low energy", value: "Fatigue or low energy" },
    { label: "Difficulty concentrating ", value: "Difficulty concentrating" },
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
      label: "Inability to self administer medication",
      value: "Inability to self administer medication",
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
  ];

  const handleKeyPresentingPrice = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = presentingPriceOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...presentingPriceOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setPresentingPrice(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...presentingPrice,
          { value: inputValue, label: inputValue },
        ];
        setPresentingPrice(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const presentingPriceHandler = (optionValue) => {
    setPresentingPrice(optionValue);
  };

  //Strengths:
  const strengthsOption = [
    { label: "Self Motivated", value: "Self Motivated" },
    { label: "Loving", value: "Loving" },
    { label: "Honest", value: "Honest" },
    { label: "Helping Others", value: "Helping Others" },
    { label: "Communication", value: "Communication" },
    { label: "Creative", value: "Creative" },
    { label: "Patient", value: "Patient" },
    { label: "Dedication", value: "Dedication" },
    { label: "Coloring", value: "Coloring" },
    { label: "Decision Making", value: "Decision Making" },
    { label: "Team Work", value: "Team Work" },
  ];

  const handleKeyStrengths = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = strengthsOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...strengthsOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setStrengths(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...strengths,
          { value: inputValue, label: inputValue },
        ];
        setStrengths(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const strengthsHandler = (optionValue) => {
    setStrengths(optionValue);
  };

  //Barriers
  const BarriersOption = [
    { label: "Cognitive", value: "Cognitive" },
    { label: "Lack of Insight", value: "Lack of Insight" },
    { label: "Financial", value: "Financial" },
    { label: "Refusal of Treatment", value: "Refusal of Treatment" },
    { label: "Social Stigma", value: "Social Stigma" },
    { label: "Racial", value: "Racial" },
    {
      label: "Limited availibility to Mental Health awareness & Education",
      value: "Limited availibility to Mental Health awareness & Education",
    },
    {
      label: "Lack of Mental Health professionals & Services",
      value: "Lack of Mental Health professionals & Services",
    },
    {
      label: "Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations",
      value: "Risk Assessment / Warning Signs & Symptoms of Suicidal Ideations",
    },
  ];

  const handleKeyBarriers = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = BarriersOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...BarriersOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setBarriers(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...Barriers,
          { value: inputValue, label: inputValue },
        ];
        setBarriers(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const BarriersHandler = (optionValue) => {
    setBarriers(optionValue);
  };

  // Maintain sobriety. Drop Down
  // option1
  const option1Option = [
    {
      label: "Resident to maintain sobriety for the next 90 days",
      value: "Resident to maintain sobriety for the next 90 days",
    },
    {
      label:
        "Resident to learn and implement coping skills to support sobriety",
      value:
        "Resident to learn and implement coping skills to support sobriety",
    },
    {
      label: "Resident to learn relapse prevention skills",
      value: "Resident to learn relapse prevention skills",
    },
    {
      label: "Resident will develop for sobriety",
      value: "Resident will develop for sobriety",
    },
    {
      label: "Resident will maintain abstinence for at least the next 90 days",
      value: "Resident will maintain abstinence for at least the next 90 days",
    },
    {
      label: "Resident will complete step",
      value: "Resident will complete step",
    },
    {
      label: "Resident will report craving to staff on shift",
      value: "Resident will report craving to staff on shift",
    },
    {
      label: "Resident will know at least 3 triggers to substance use",
      value: "Resident will know at least 3 triggers to substance use",
    },
    {
      label:
        "Resident will learn and know the consequences associated with substance use",
      value:
        "Resident will learn and know the consequences associated with substance use",
    },
    {
      label:
        "Resident will participate with the clinical team for after planning",
      value:
        "Resident will participate with the clinical team for after planning",
    },
    {
      label:
        "Resident will involve family as a support system to help maintain sobriety",
      value:
        "Resident will involve family as a support system to help maintain sobriety",
    },
    {
      label: "Resident will attend self-help group (AA,NA,COA,)",
      value: "Resident will attend self-help group (AA,NA,COA,)",
    },
    {
      label: "Identify 4 positive friend that will support sobriety",
      value: "Identify 4 positive friend that will support sobriety",
    },
    {
      label: "Resident will refrain from drug seeking behaviors",
      value: "Resident will refrain from drug seeking behaviors",
    },
  ];

  const handleKeyOption1 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option1Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option1Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption1(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option1,
          { value: inputValue, label: inputValue },
        ];
        setOption1(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option1Handler = (optionValue) => {
    setOption1(optionValue);
  };

  // option2
  const option2Option = [
    {
      label: "Resident to learn coping skills to manage anxiety, depression",
      value: "Resident to learn coping skills to manage anxiety, depression",
    },
    {
      label: "Resident to learn skills to manage time",
      value: "Resident to learn skills to manage time",
    },
    {
      label: "Resident to learn how to open a bank account",
      value: "Resident to learn how to open a bank account",
    },
    {
      label: "Resident to learn how communicate assertively",
      value: "Resident to learn how communicate assertively",
    },
    {
      label:
        "Resident will learn how to identify triggers and address them accordingly",
      value:
        "Resident will learn how to identify triggers and address them accordingly",
    },
    {
      label:
        "Resident will be able to schedule own transportation to and from medical/psychiatric appointments or activities",
      value:
        "Resident will be able to schedule own transportation to and from medical/psychiatric appointments or activities",
    },
    {
      label: "Be able to manage and budget finances",
      value: "Be able to manage and budget finances",
    },
    {
      label: "Resident to attend 100% of scheduled appointments",
      value: "Resident to attend 100% of scheduled appointments",
    },
    {
      label: "Resident will develop coping skills on how to manage stress",
      value: "Resident will develop coping skills on how to manage stress",
    },
    {
      label: "Resident will learn how to make bed",
      value: "Resident will learn how to make bed",
    },
    {
      label: "Resident will obtain drivers license ",
      value: "Resident will obtain drivers license ",
    },
    {
      label:
        "Resident to recognize the difference between healthy and unhealthy boundaries",
      value:
        "Resident to recognize the difference between healthy and unhealthy boundaries",
    },
  ];

  const handleKeyOption2 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option2Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option2Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption2(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option2,
          { value: inputValue, label: inputValue },
        ];
        setOption2(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option2Handler = (optionValue) => {
    setOption2(optionValue);
  };

  // option3
  const option3Option = [
    { label: "Resident to Create resume", value: "Resident to Create resume" },
    {
      label: "Resident will Call, email, or contact ",
      value: "Resident will Call, email, or contact ",
    },
    {
      label: "Resident to learn mock interview",
      value: "Resident to learn mock interview",
    },
  ];

  const handleKeyOption3 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option3Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option3Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption3(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option3,
          { value: inputValue, label: inputValue },
        ];
        setOption3(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option3Handler = (optionValue) => {
    setOption3(optionValue);
  };
  // option4
  const option4Option = [
    {
      label: "Resident will shower at least every other day without prompt",
      value: "Resident will shower at least every other day without prompt",
    },
    {
      label: "Resident will learn how to prepare basic meal",
      value: "Resident will learn how to prepare basic meal",
    },
    {
      label:
        "Resident will brush teeth at least every other day without prompt",
      value:
        "Resident will brush teeth at least every other day without prompt",
    },
    {
      label:
        "Resident will develop skills to independently do laundry, sort, wash and dry clothing.",
      value:
        "Resident will develop skills to independently do laundry, sort, wash and dry clothing.",
    },
    ,
  ];

  const handleKeyOption4 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option4Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option4Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption4(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option4,
          { value: inputValue, label: inputValue },
        ];
        setOption4(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option4Handler = (optionValue) => {
    setOption4(optionValue);
  };
  // option5
  const option5Option = [
    {
      label: "Resident will create a safety plan",
      value: "Resident will create a safety plan",
    },
    {
      label: "Resident will contract for safety",
      value: "Resident will contract for safety",
    },
    {
      label: "Resident will not elope from the facility for the next 30 days",
      value: "Resident will not elope from the facility for the next 30 days",
    },
    {
      label: "Resident will learn not to touch hot items or spark objects",
      value: "Resident will learn not to touch hot items or spark objects",
    },
    {
      label: "Resident will be aware of surroundings when going on outing",
      value: "Resident will be aware of surroundings when going on outing",
    },
    {
      label:
        "Resident will identify dangers that involves wondering off from the facility",
      value:
        "Resident will identify dangers that involves wondering off from the facility",
    },
  ];

  const handleKeyOption5 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option5Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option5Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption5(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option5,
          { value: inputValue, label: inputValue },
        ];
        setOption5(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option5Handler = (optionValue) => {
    setOption5(optionValue);
  };
  // option6
  const option6Option = [
    {
      label: "Resident to take all prescribed medications",
      value: "Resident to take all prescribed medications",
    },
    {
      label: "Resident will learn all names of her medications",
      value: "Resident will learn all names of her medications",
    },
    {
      label:
        "Resident will self-administer medications with supervision without errors",
      value:
        "Resident will self-administer medications with supervision without errors",
    },
    {
      label: "Resident will take medications in a timely manner",
      value: "Resident will take medications in a timely manner",
    },
    {
      label:
        "Resident will learn how to order medication refills from the pharmacy",
      value:
        "Resident will learn how to order medication refills from the pharmacy",
    },
  ];

  const handleKeyOption6 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option6Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option6Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption6(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option6,
          { value: inputValue, label: inputValue },
        ];
        setOption6(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option6Handler = (optionValue) => {
    setOption6(optionValue);
  };
  //option7
  const option7Option = [
    {
      label:
        "Resident to learn how to utilize coping skills to manage mental health symptoms",
      value:
        "Resident to learn how to utilize coping skills to manage mental health symptoms",
    },
    {
      label: "Resident to learn how to utilize EMS appropriately",
      value: "Resident to learn how to utilize EMS appropriately",
    },
    {
      label:
        "Resident verbalizes an understanding of diagnoses, and their impact",
      value:
        "Resident verbalizes an understanding of diagnoses, and their impact",
    },
    {
      label:
        "Resident to reduce the frequency of maladaptive behaviors, thoughts and feelings that affects quality of daily life",
      value:
        "Resident to reduce the frequency of maladaptive behaviors, thoughts and feelings that affects quality of daily life",
    },
  ];

  const handleKeyOption7 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option7Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option7Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption7(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option7,
          { value: inputValue, label: inputValue },
        ];
        setOption7(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option7Handler = (optionValue) => {
    setOption7(optionValue);
  };
  //option8
  const option8Option = [
    {
      label: "Resident will attend all court appointments",
      value: "Resident will attend all court appointments",
    },
    {
      label:
        "Resident will attend all scheduled appointment with probation/parole officer",
      value:
        "Resident will attend all scheduled appointment with probation/parole officer",
    },
  ];

  const handleKeyOption8 = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = option8Option.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...option8Option,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setOption8(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...option8,
          { value: inputValue, label: inputValue },
        ];
        setOption8(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const option8Handler = (optionValue) => {
    setOption8(optionValue);
  };

  //yeschechbox2-horizontal
  const clinicalSummaryOption = [
    {
      label: "Resident to continue to attend treatment with the facility",
      value: "Resident to continue to attend treatment with the facility",
    },
    {
      label:
        "Resident to continue to attend schedule appointments with PCP, Psychiatric provider, and specialist",
      value:
        "Resident to continue to attend schedule appointments with PCP, Psychiatric provider, and specialist",
    },
    {
      label: "Resident will contract for safety while in the program",
      value: "Resident will contract for safety while in the program",
    },
    {
      label:
        "The mirrors in the facility are SHATTERPROOF, and if they were standard mirrors it would not present as a current safety risk to this resident.",
      value:
        "The mirrors in the facility are SHATTERPROOF, and if they were standard mirrors it would not present as a current safety risk to this resident.",
    },
  ];

  const handleKeyClinicalSummary = (event) => {
    if (event.key === "Enter" && event.target.value) {
      const inputValue = event.target.value.trim();

      // Check if the input value already exists in the options array
      const optionExists = clinicalSummaryOption.some(
        (option) => option.value === inputValue
      );

      // If the input value doesn't exist, add it to the array
      if (!optionExists) {
        const newOptions = [
          ...clinicalSummaryOption,
          { value: inputValue, label: inputValue },
        ];

        // Update the state with the new options
        setClinicalSummary(newOptions);

        // Update the selected values to include the newly created option
        const newSelectedValues = [
          ...clinicalSummary,
          { value: inputValue, label: inputValue },
        ];
        setClinicalSummary(newSelectedValues);
      }

      // Clear the input value after adding the option
      event.target.value = "";
    }
  };

  const clinicalSummaryHandler = (optionValue) => {
    setClinicalSummary(optionValue);
  };

  return (
    <>
      <div  ref={componentRef}>
        <div >
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
            <div className="formheading1">
              <div className="formsheading2" style={{marginTop:"1.5rem"}}>
                <h1>TREATMENT PLAN</h1>
              </div>
            </div>
         
        
          <form  onSubmit={handlePost}>
            <div className="form-section">
              <div className="box-image-container">
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Resident Name:</label>
                    <input
                      type="text"
                      value={residentName}
                      placeholder="Enter name"
                      required
                      onChange={(e) => setResidentName(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child">
                    <label>Date:</label>
                    <input
                      type="date"
                      value={date}
                      placeholder="DD/MM/YYYY"
                      required
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field-update">
                  <div className="form-field-child">
                    <label htmlFor="dateOfBirth">DOB:</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={dob}
                      placeholder="DD/MM/YYYY"
                      required
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>

                  <div className="form-field-child">
                    <label htmlFor="dateOfBirth">Admit Date:</label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      value={admitDate}
                      placeholder="DD/MM/YYYY"
                      required
                      onChange={(e) => setAdminDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field-update-care">
                  <div className="form-field-child">
                    {" "}
                    <label style={{ fontWeight: "bold" }}>Care:</label>
                  </div>

                  <div className="form-field-child">
                    <input
                      type="checkbox"
                      checked={physicalService==="physicalService"}
                      onChange={() => setPhysicalService(physicalService==="physicalService"?"":"physicalService")}
                      id="behavioralCheckbox"
                    />
                    <label>Physical Services</label>
                  </div>
                  <div className="form-field-child">
                    <input
                      type="checkbox"
                      checked={behavior==="behavior"}
                      onChange={() => setBehavior(behavior==="behavior"?"":"behavior")}
                      id="behavioralCheckbox"
                    />
                    <label>Behavioral Services</label>
                  </div>
                </div>

                {/* state is duplicatedffdg again make the state */}
                <div>
                  <label
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",

                      marginTop: "0.5rem",
                      marginLeft: "10px",
                    }}
                  >
                    Medication Services:
                  </label>
                  <div className="form-field-update-care">
                    <div className="form-field-child">
                      <input
                      type="checkbox"
                       checked={medicationAdministation==="MedicationAdministration"}
                       onChange={() => setMedicationAdministation(medicationAdministation==="MedicationAdministration"?"":"behMedicationAdministrationavior")}
                      />
                      <label>Medication Administration</label>
                    </div>
                    <div className="form-field-child">
                      <input type="checkbox" 
                      checked={medicationAssistance==="AssistanceintheselfAdministrationofmedication"}
                      onChange={() => setMedicationAssistence(medicationAssistance==="AssistanceintheselfAdministrationofmedication"?"":"AssistanceintheselfAdministrationofmedication")}/>
                      <label>
                        Assistance in the self-Administration of medication
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field-single-update-bold box-image-container">
                <label>Presenting Problems:</label>

                <Select
                  isMulti
                  onChange={presentingPriceHandler}
                  value={presentingPrice}
                  options={presentingPriceOption}
                  isCreatable={true}
                  onKeyDown={handleKeyPresentingPrice}
                />
              </div>

       

              <div className="form-field-single-update">
                <label>Diagnoses:</label>
                <input type="text" required value={diagonsis} onChange={(e)=>setDiagonsis(e.target.value)}/>
              </div>
              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Mental Status:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="oriented"
                    checked={mendelHealth === "oriented"}
                    onChange={() =>
                      handleCheckboxChangeMentalHealth("oriented")
                    }
                  />
                  <label htmlFor="oriented">Oriented</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="disoriented"
                    checked={mendelHealth === "disoriented"}
                    onChange={() =>
                      handleCheckboxChangeMentalHealth("disoriented")
                    }
                  />
                  <label htmlFor="disoriented">Disoriented</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="unstable"
                    checked={mendelHealth === "unstable"}
                    onChange={() =>
                      handleCheckboxChangeMentalHealth("unstable")
                    }
                  />
                  <label htmlFor="unstable">Unstable</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="other"
                    checked={mendelHealth === "other"}
                    onChange={() => handleCheckboxChangeMentalHealth("other")}
                  />
                  <label htmlFor="other">Other </label>
                
                    <AutoSize value={mentelText} setValue={setMentelText}  placeholder="________"/>
                </div>
              </div>

              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Mood Level:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="normal"
                    checked={mind === "Normal"}
                    onChange={() => handleCheckboxChangeMind("Normal")}
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="elevated"
                    checked={mind === "Elevated"}
                    onChange={() => handleCheckboxChangeMind("Elevated")}
                  />
                  <label htmlFor="elevated">Elevated</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="depressed"
                    checked={mind === "Depressed"}
                    onChange={() => handleCheckboxChangeMind("Depressed")}
                  />
                  <label htmlFor="depressed">Depressed</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="anxious"
                    checked={mind === "Anxious"}
                    onChange={() => handleCheckboxChangeMind("Anxious")}
                  />
                  <label htmlFor="anxious">Anxious</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="other"
                    checked={mind === "other"}
                    onChange={() => handleCheckboxChangeMind("other")}
                  />
                  <label htmlFor="other">Other :</label>

                  {/* {mind === "other" && (
                      <AutosizeInput
                        type="text"
                        inputStyle={{ border: "none", outline: "none" }}
                        placeholder="________"
                        value={mindText}
                        onChange={(e) => setMindText(e.target.value)}
                      />
                    )} */}
                     <AutoSize value={mindText} setValue={setMindText}  placeholder="________"/>
                </div>
              </div>

              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                ADLS:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="independent"
                    checked={adls === "independent"}
                    onChange={() => setAdls("independent")}
                  />
                  <label htmlFor="independent">
                    Is independent with all ADLS
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="personalCareLevel"
                    checked={adls === "personalCareLevel"}
                    onChange={() => setAdls("personalCareLevel")}
                  />
                  <label htmlFor="personalCareLevel">
                    Personal care level 
                  </label>
                </div>
              </div>
              <div className="form-field">
                <textarea
                  type="text"
                  id="AHCCCS"
                  value={adlsText}
                  rows={2}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setAldsText(e.target.value)}
                />
              </div>
              <label className="label-review">
                Behavioral Health Services:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="receivesServices"
                    value="receivesServices"
                    checked={BHealth === "receivesServices"}
                    onChange={() => setBHealth("receivesServices")}
                  />
                  <label htmlFor="receivesServices">
                    Receives behavioral health services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="prescribedMedication"
                    value="prescribedMedication"
                    checked={BHealth === "prescribedMedication"}
                    onChange={() => setBHealth("prescribedMedication")}
                  />
                  <label htmlFor="prescribedMedication">
                    Is prescribed psychotropic medication
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="followsHouseRules"
                    value="followsHouseRules"
                    checked={BHealth === "followsHouseRules"}
                    onChange={() => setBHealth("followsHouseRules")}
                  />
                  <label htmlFor="followsHouseRules">
                    Resident agrees to follow house rules.
                  </label>
                </div>
              </div>
              <div className="form-field">
                <textarea
                  type="text"
                  id="AHCCCS"
                  value={Btext}
                  rows={2}
                  cols={130}
                  placeholder="Enter text."
                  required
                  onChange={(e) => setBtext(e.target.value)}
                />
              </div>
              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Primary Care Provider:</label>
                  {/* khf */}
                  <input
                    type="text"
                    placeholder="Enter text."
                    value={primaryCare}
                    required
                    onChange={(e) => setPrimaryCare(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label>Psychiatric Provider:</label>
                  <input
                    type="text"
                    placeholder="Enter text."
                    value={psychiatricProvider}
                    required
                    onChange={(e) => setPsychiatricProvider(e.target.value)}
                  />
                </div>
              </div>
              <p style={{ marginTop: "1rem" }}>
                Resident to receive treatment services from above provider(s)
                every 1 to 2 months or earlier as needed. Specialty providers
                are to be managed and referred per primary care medical
                provider.
              </p>
              <div className="box-image-container">
                <div className="form-field-single-update">
                  <label>Resident Goals:</label>
                  <input
                    type="text"
                    placeholder="Enter text."
                    value={residentGoal}
                    required
                    onChange={(e) => setResidentGoal(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label>Allergies:</label>
                  <input
                    type="text"
                    placeholder="Enter text."
                    value={allergies}
                    required
                    onChange={(e) => setAllergies(e.target.value)}
                  />
                </div>
                <div className="border-bootom-line"></div>
                <div className="form-field-single-update">
                  <label>Triggers:</label>
                  <input
                    type="text"
                    placeholder="Enter text"
                    value={Triggers}
                    required
                    onChange={(e) => setTriggers(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="" className="label-review">
                  Strengths:
                </label>

                <Select
                  isMulti
                  options={strengthsOption}
                  onChange={strengthsHandler}
                  value={strengths}
                  isCreatable={true}
                  onKeyDown={handleKeyStrengths}
                />
              </div>


              <div className="form-field">
                <label className="label-review">Barriers:</label>

                <Select
                  isMulti
                  onChange={BarriersHandler}
                  value={Barriers}
                  options={BarriersOption}
                  isCreatable={true}
                  onKeyDown={handleKeyBarriers}
                />
              </div>

              <div className="formsheading">
                <h6>
                  Risk Assessment / Warning Signs & Symptoms of Suicidal
                  Ideations
                </h6>
              </div>
              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Behavioral Symptoms:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="selfInjuring"
                    checked={behavioralSymptoms.includes("selfInjuring")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("selfInjuring")
                    }
                  />
                  <label htmlFor="selfInjuring">Self-injuring</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="recklessBehavior"
                    checked={behavioralSymptoms.includes("recklessBehavior")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("recklessBehavior")
                    }
                  />
                  <label htmlFor="recklessBehavior">Reckless behavior</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="impulsiveBehaviors"
                    checked={behavioralSymptoms.includes("impulsiveBehaviors")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("impulsiveBehaviors")
                    }
                  />
                  <label htmlFor="impulsiveBehaviors">
                    Impulsive behaviors
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="socialIsolation"
                    checked={behavioralSymptoms.includes("socialIsolation")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("socialIsolation")
                    }
                  />
                  <label htmlFor="socialIsolation">Social isolation</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="nolongerenjoyingpreviousactivities"
                    checked={behavioralSymptoms.includes(
                      "nolongerenjoyingpreviousactivities"
                    )}
                    onChange={() =>
                      handleCheckboxChangeBehavioral(
                        "nolongerenjoyingpreviousactivities"
                      )
                    }
                  />
                  <label htmlFor="nolongerenjoyingpreviousactivities">
                    No longer enjoying previous activities{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="talkingorwriting"
                    checked={behavioralSymptoms.includes("talkingorwriting")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("talkingorwriting")
                    }
                  />
                  <label htmlFor="talkingorwriting">Talking, or writing</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="aboutdeath"
                    checked={behavioralSymptoms.includes("aboutdeath")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("aboutdeath")
                    }
                  />
                  <label htmlFor="aboutdeath">About death </label>
                </div>
                {/* add paremeter */}
                <div>
                  <input
                    type="checkbox"
                    id="Nonereported"
                    checked={behavioralSymptoms.includes("Nonereported")}
                    onChange={() =>
                      handleCheckboxChangeBehavioral("Nonereported")
                    }
                  />
                  <label htmlFor="Nonereported">None reported</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="other"
                    checked={behavioralSymptoms.includes("Other")}
                    onChange={() => handleCheckboxChangeBehavioral("Other")}
                  />
                  <label htmlFor="other">Other</label>
                  {behavioralSymptomsBoolean && (
                      <AutoSize value={behavioralSymptomsOther}  setValue={setBehavioralSymptomsOther}   placeholder="________"/>
                    )}
                </div>
              </div>

              {/*   
              {
                behavioralSymptomsBoolean && (
                  <div className="form-field">
                <label htmlFor="programlocation&addresstypeOfOtherBoolean">Comments</label>
                <textarea
                  id="programlocation&addresstypeOfOtherBoolean"
                  value={behavioralSymptomsOther}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e)=>setBehavioralSymptomsOther(e.target.value)}
                />
              </div>
                )
              } */}

              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Physical Symptoms:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="insomnia"
                    checked={physicalSymptoms.includes("insomnia")}
                    onChange={() => handleCheckboxChangePhysical("insomnia")}
                  />
                  <label htmlFor="insomnia">Insomnia</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="hypersomnia"
                    checked={physicalSymptoms.includes("hypersomnia")}
                    onChange={() => handleCheckboxChangePhysical("hypersomnia")}
                  />
                  <label htmlFor="hypersomnia">Hypersomnia</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="changesInAppetite"
                    checked={physicalSymptoms.includes("changesInAppetite")}
                    onChange={() =>
                      handleCheckboxChangePhysical("changesInAppetite")
                    }
                  />
                  <label htmlFor="changesInAppetite">Changes in appetite</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="weightGainLoss"
                    checked={physicalSymptoms.includes("weightGainLoss")}
                    onChange={() =>
                      handleCheckboxChangePhysical("weightGainLoss")
                    }
                  />
                  <label htmlFor="weightGainLoss">Weight gain/loss</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="panicAttacks"
                    checked={physicalSymptoms.includes("panicAttacks")}
                    onChange={() =>
                      handleCheckboxChangePhysical("panicAttacks")
                    }
                  />
                  <label htmlFor="panicAttacks">Panic attacks</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="Nonereported"
                    checked={physicalSymptoms.includes("Nonereported")}
                    onChange={() =>
                      handleCheckboxChangePhysical("Nonereported")
                    }
                  />
                  <label htmlFor="Nonereported">None reported</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="Other"
                    checked={physicalSymptoms.includes("Other")}
                    onChange={() => handleCheckboxChangePhysical("Other")}
                  />
                  <label htmlFor="Other">Other</label>
                  {physicalSymptomsBoolean && (
                      // <AutosizeInput
                      //   type="text"
                      //   inputStyle={{ border: "none", outline: "none" }}
                      //   placeholder="________"
                      //   value={physicalSymptomsOther}
                      //   onChange={(e) => setPhysicalSymptomsOther(e.target.value)}
                      // />
                      <AutoSize value={physicalSymptomsOther} setValue={setPhysicalSymptomsOther} placeholder="________"/>
                    )}
                </div>
              </div>

              {/* {
                physicalSymptomsBoolean && (
                  <div className="form-field">
                <label htmlFor="programlocation&addresstypeOfOtherBoolean">Comments</label>
                <textarea
                  id="programlocation&addresstypeOfOtherBoolean"
                  value={physicalSymptomsOther}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e)=>setPhysicalSymptomsOther(e.target.value)}
                />
              </div>
                )
              } */}

              <label
                htmlFor="cognitiveSymptoms"
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Cognitive Symptoms:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="concentration"
                    checked={consnotiveSymptoms.includes("concentration")}
                    onChange={() =>
                      handleCheckboxChangeCognitive("concentration")
                    }
                  />
                  <label htmlFor="concentration">
                    Lacking the ability to concentrate
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="memoryImpairment"
                    checked={consnotiveSymptoms.includes("memoryImpairment")}
                    onChange={() =>
                      handleCheckboxChangeCognitive("memoryImpairment")
                    }
                  />
                  <label htmlFor="memoryImpairment">
                    Memory impairment, ruminating
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="thoughtsAboutDeath"
                    checked={consnotiveSymptoms.includes(
                      "pervasivethoughtsaboutdeathanddying"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCognitive(
                        "pervasivethoughtsaboutdeathanddying"
                      )
                    }
                  />
                  <label htmlFor="thoughtsAboutDeath">
                    Pervasive thoughts about death and dying
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="inabilityToFocus"
                    checked={consnotiveSymptoms.includes(
                      "inabilitytofocusonspecifictasks"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCognitive(
                        "inabilitytofocusonspecifictasks"
                      )
                    }
                    y
                  />
                  <label htmlFor="inabilityToFocus">
                    Inability to focus on specific tasks
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="specifictasks"
                    checked={consnotiveSymptoms.includes("specifictasks")}
                    onChange={() =>
                      handleCheckboxChangeCognitive("specifictasks")
                    }
                  />
                  <label htmlFor="specifictasks">Specific tasks</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Nonereported"
                    checked={consnotiveSymptoms.includes("Nonereported")}
                    onChange={() =>
                      handleCheckboxChangeCognitive("Nonereported")
                    }
                  />
                  <label htmlFor="Nonereported">None reported</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Other"
                    checked={consnotiveSymptoms.includes("Other")}
                    onChange={() => handleCheckboxChangeCognitive("Other")}
                  />
                  <label htmlFor="Other">Other</label>
                  {consnotiveSymptomsBoolean && (
                      // <AutosizeInput
                      //   type="text"
                      //   inputStyle={{ border: "none", outline: "none" }}
                      //   placeholder="________"
                      //   value={consnotiveSymptomsOther}
                      //   onChange={(e) =>
                      //     setConsnotiveSymptomsOther(e.target.value)
                      //   }
                      // />
                      <AutoSize value={consnotiveSymptomsOther} setValue={setConsnotiveSymptomsOther}  placeholder="________"/>
                    )}
                </div>
              </div>
              {/* 
              {
                consnotiveSymptomsBoolean && (
                  <div className="form-field">
                <label htmlFor="programlocation&addresstypeOfOtherBoolean">Comments</label>
                <textarea
                  id="programlocation&addresstypeOfOtherBoolean"
                  value={consnotiveSymptomsOther}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e)=>setConsnotiveSymptomsOther(e.target.value)}
                />
              </div>
                )
              } */}

              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Psychosocial Symptoms:{" "}
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="helplessness"
                    checked={psychosocialSymptoms.includes("helplessness")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("helplessness")
                    }
                  />
                  <label htmlFor="helplessness">Feeling of helplessness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="worthlessness"
                    checked={psychosocialSymptoms.includes("worthlessness")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("worthlessness")
                    }
                  />
                  <label htmlFor="worthlessness">Worthlessness</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="depression"
                    checked={psychosocialSymptoms.includes("depression")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("depression")
                    }
                  />
                  <label htmlFor="depression">Depression</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="anxiety"
                    checked={psychosocialSymptoms.includes("anxiety")}
                    onChange={() => handleCheckboxChangePsychosocial("anxiety")}
                  />
                  <label htmlFor="anxiety">Anxiety</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="moodSwings"
                    checked={psychosocialSymptoms.includes("moodSwings")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("moodSwings")
                    }
                  />
                  <label htmlFor="moodSwings">Mood Swings</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="irritability"
                    checked={psychosocialSymptoms.includes("irritability")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("irritability")
                    }
                  />
                  <label htmlFor="irritability">Irritability</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Nonereported"
                    checked={psychosocialSymptoms.includes("Nonereported")}
                    onChange={() =>
                      handleCheckboxChangePsychosocial("Nonereported")
                    }
                  />
                  <label htmlFor="Nonereported">None reported</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="OtherpsychosocialSymptoms"
                    checked={psychosocialSymptoms.includes("Other")}
                    onChange={() => handleCheckboxChangePsychosocial("Other")}
                  />
                  <label htmlFor="OtherpsychosocialSymptoms">Other</label>
                  {psychosocialSymptomsBoolean && (
                      // <AutosizeInput
                      //   type="text"
                      //   inputStyle={{ border: "none", outline: "none" }}
                      //   placeholder="________"
                      //   value={psychosocialSymptomssOther}
                      //   onChange={(e) =>
                      //     setPsychosocialSymptomsOther(e.target.value)
                      //   }
                      // />
                      <AutoSize value={psychosocialSymptomssOther} setValue={setPsychosocialSymptomsOther}  placeholder="________"/>
                    )}
                </div>
              </div>
              {/* 
              {
                psychosocialSymptomsBoolean && (
                  <div className="form-field">
                <label htmlFor="programlocation&addresstypeOfOtherBoolean">Comments</label>
                <textarea
                  id="programlocation&addresstypeOfOtherBoolean"
                  value={psychosocialSymptomssOther}
                  placeholder="Enter text"
                  rows={2}
                  cols={82}
                  required
                  onChange={(e)=>setPsychosocialSymptomsOther(e.target.value)}
                />
              </div>
                )
              } */}

              <label
                htmlFor=""
                className="label-review"
                style={{ fontWeight: "bold" }}
              >
                Interventions that are being implemented:
              </label>

              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="Psychiatric services"
                    checked={interventionsImplemented.includes(
                      "Psychiatric services"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Psychiatric services")
                    }
                  />
                  <label htmlFor="Psychiatric services">
                    Psychiatric services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Communication Skills"
                    checked={interventionsImplemented.includes(
                      "Communication Skills"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Communication Skills")
                    }
                  />
                  <label htmlFor="Communication Skills">
                    Communication Skills
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Verbal Prompt"
                    checked={interventionsImplemented.includes("Verbal Prompt")}
                    onChange={() => handleCheckboxChange("Verbal Prompt")}
                  />
                  <label htmlFor="Verbal Prompt">Verbal Prompt</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Interactive Feedback"
                    checked={interventionsImplemented.includes(
                      "Interactive Feedback"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Interactive Feedback")
                    }
                  />
                  <label htmlFor="Interactive Feedback">
                    Interactive Feedback
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Encouragement"
                    checked={interventionsImplemented.includes("Encouragement")}
                    onChange={() => handleCheckboxChange("Encouragement")}
                  />
                  <label htmlFor="Encouragement">Encouragement</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Role-Play"
                    checked={interventionsImplemented.includes("Role-Play")}
                    onChange={() => handleCheckboxChange("Role-Play")}
                  />
                  <label htmlFor="Role-Play">Role-Play</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Review of Treatment Plan"
                    checked={interventionsImplemented.includes(
                      "Review of Treatment Plan"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Review of Treatment Plan")
                    }
                  />
                  <label htmlFor="Review of Treatment Plan">
                    Review of Treatment Plan
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Relaxation techniques"
                    checked={interventionsImplemented.includes(
                      "Relaxation techniques"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Relaxation techniques")
                    }
                  />
                  <label htmlFor="Relaxation techniques">
                    Relaxation techniques
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Reframing"
                    checked={interventionsImplemented.includes("Reframing")}
                    onChange={() => handleCheckboxChange("Reframing")}
                  />
                  <label htmlFor="Reframing">Reframing</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Conflict resolution"
                    checked={interventionsImplemented.includes(
                      "Conflict resolution"
                    )}
                    onChange={() => handleCheckboxChange("Conflict resolution")}
                  />
                  <label htmlFor="Conflict resolution">
                    Conflict resolution
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Rehearsal, Spiritual exploration"
                    checked={interventionsImplemented.includes(
                      "Rehearsal, Spiritual exploration"
                    )}
                    onChange={() =>
                      handleCheckboxChange("Rehearsal, Spiritual exploration")
                    }
                  />
                  <label htmlFor="Rehearsal, Spiritual exploration">
                    Rehearsal, Spiritual exploration
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Values clarification, Psycho-education"
                    checked={interventionsImplemented.includes(
                      "Values clarification, Psycho-education"
                    )}
                    onChange={() =>
                      handleCheckboxChange(
                        "Values clarification, Psycho-education"
                      )
                    }
                  />
                  <label htmlFor="Values clarification, Psycho-education">
                    Values clarification, Psycho-education
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Exploring feelings"
                    checked={interventionsImplemented.includes(
                      "Exploring feelings"
                    )}
                    onChange={() => handleCheckboxChange("Exploring feelings")}
                  />
                  <label htmlFor="Exploring feelings">Exploring feelings</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Distraction"
                    checked={interventionsImplemented.includes("Distraction")}
                    onChange={() => handleCheckboxChange("Distraction")}
                  />
                  <label htmlFor="Distraction">Distraction</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Redirection"
                    checked={interventionsImplemented.includes("Redirection")}
                    onChange={() => handleCheckboxChange("Redirection")}
                  />
                  <label htmlFor="Redirection">Redirection</label>
                </div>
             
                <div>
                  <input
                    type="checkbox"
                    id="OtherpsychosocialSymptoms"
                    checked={interventionsImplemented.includes("Other")}
                    onChange={() => handleCheckboxChange("Other")}
                  />
                  <label htmlFor="OtherpsychosocialSymptoms">Other</label>
                  {interventionsImplementedBoolean && (
                      // <AutosizeInput
                      //   type="text"
                      //   inputStyle={{ border: "none", outline: "none" }}
                      //   placeholder="________"
                      //   value={interventionsImplementedOther}
                      //   onChange={(e) =>
                      //     setInterventionsImplementedOther(e.target.value)
                      //   }
                      // />
                      <AutoSize value={interventionsImplementedOther} setValue={setInterventionsImplementedOther}  placeholder="________"/>
                    )}
                </div>
              </div>
              {/* <div className="yeschechbox-review">
                  {[
                    "Psychiatric services",
                    "Communication Skills",
                    "Verbal Prompt",
                    "Interactive Feedback",
                    "Encouragement",
                    "Role-Play",
                    "Sponsors, and support programs & people",
                    "Review of Treatment Plan",
                    "Relaxation techniques",
                    "Reframing",
                    "Conflict resolution",
                    "Rehearsal, Spiritual exploration",
                    "Values clarification, Psycho-education",
                    "Exploring feelings",
                    "Distraction",
                    "Redirection",
                    "None reported",
                    "Other",
                  ].map((intervention, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`interventionCheckbox${index}`}
                        checked={interventionsImplemented.includes(intervention)}
                        onChange={() => handleCheckboxChange(intervention)}
                      />
                      <label htmlFor={`interventionCheckbox${index}`}>
                        {intervention}
                      </label>
                    </div>
                  ))}
                </div>
  
                {interventionsImplementedBoolean && (
                  <div className="form-field">
                    <label htmlFor="programlocation&addresstypeOfOtherBoolean">
                      Comments
                    </label>
                    <textarea
                      id="programlocation&addresstypeOfOtherBoolean"
                      value={interventionsImplementedOther}
                      placeholder="Enter text"
                      rows={2}
                      cols={82}
                      required
                      onChange={(e) =>
                        setInterventionsImplementedOther(e.target.value)
                      }
                    />
                  </div>
                )} */}

              <label className="label-review">Counseling and Frequency:</label>
              <div className="formsheading">
                <p className="inLine_box_style">
                  <p>Total of minimum </p>{" "}
                  <div>
                    <input
                      style={{ outline: "none", border: "none" ,width:"50px"}}
                      placeholder="__________"
                      type="text"
                      value={minimumHoure}
                      required
                      onChange={(e) => setMinimumHoure(e.target.value)}
                    />
                  </div>
                  <p>hours daily.</p>
                </p>
              </div>
              {/* <div className="yeschechbox-review">
                <div>
                  <span>Total of Minimum</span>
                </div>
                <div>
                  <span>Hours per Week</span>
                </div>
              </div>
              <div className="yeschechbox-review">
                <label htmlFor="">Individual: </label>
                <div>
                  <span>Minimum 1 hour session per week</span>
                </div>
              </div> */}
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="Group"
                    checked={counselingOptions.includes("Group")}
                    onChange={() => handleCheckboxChangeCounsiling("Group")}
                  />
                  <label htmlFor="Group">Group</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="3 times a day"
                    checked={counselingOptions.includes("3 times a day")}
                    onChange={() =>
                      handleCheckboxChangeCounsiling("3 times a day")
                    }
                  />
                  <label htmlFor="3 times a day">3 times a day</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="4 times a day"
                    checked={counselingOptions.includes("4 times a day")}
                    onChange={() =>
                      handleCheckboxChangeCounsiling("4 times a day")
                    }
                  />
                  <label htmlFor="4 times a day">4 times a day</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Individual Counseling: Minimum 1 hour session per week"
                    checked={counselingOptions.includes(
                      "Individual Counseling: Minimum 1 hour session per week"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Individual Counseling: Minimum 1 hour session per week"
                      )
                    }
                  />
                  <label htmlFor="Individual Counseling: Minimum 1 hour session per week">
                    Individual Counseling: Minimum 1 hour session per week
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Individual Counseling: Minimum 1 hour session every 2 weeks"
                    checked={counselingOptions.includes(
                      "Individual Counseling: Minimum 1 hour session every 2 weeks"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Individual Counseling: Minimum 1 hour session every 2 weeks"
                      )
                    }
                  />
                  <label htmlFor="Individual Counseling: Minimum 1 hour session every 2 weeks">
                    Individual Counseling: Minimum 1 hour session every 2 weeks
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Individual Therapy: As needed"
                    checked={counselingOptions.includes(
                      "Individual Therapy: As needed"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Individual Therapy: As needed"
                      )
                    }
                  />
                  <label htmlFor="Individual Therapy: As needed">
                    Individual Therapy: As needed
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Individual Therapy: Please Specify"
                    checked={counselingOptions.includes(
                      "Individual Therapy: Please Specify"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Individual Therapy: Please Specify"
                      )
                    }
                  />
                  <label htmlFor="Individual Therapy: Please Specify">
                    Individual Therapy: Please Specify
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Nonereported"
                    checked={counselingOptions.includes(
                      "Resident decline individual therapy services"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Resident decline individual therapy services"
                      )
                    }
                  />
                  <label htmlFor="Resident decline individual therapy services">
                    Resident decline individual therapy services
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Family Counseling"
                    checked={counselingOptions.includes("Family Counseling")}
                    onChange={() =>
                      handleCheckboxChangeCounsiling("Family Counseling")
                    }
                  />
                  <label htmlFor="Family Counseling">Family Counseling</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="NA"
                    checked={counselingOptions.includes("NA")}
                    onChange={() => handleCheckboxChangeCounsiling("NA")}
                  />
                  <label htmlFor="NA">NA</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="AA"
                    checked={counselingOptions.includes("AA")}
                    onChange={() =>
                      handleCheckboxChangeCounsiling("AA")
                    }
                  />
                  <label htmlFor="AA">AA</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Month ART Meeting/Staffing"
                    checked={counselingOptions.includes(
                      "Month ART Meeting/Staffing"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Month ART Meeting/Staffing"
                      )
                    }
                  />
                  <label htmlFor="Month ART Meeting/Staffing">
                    Month ART Meeting/Staffing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Weekly ART Meeting/Staffing"
                    checked={counselingOptions.includes(
                      "Weekly ART Meeting/Staffing"
                    )}
                    onChange={() =>
                      handleCheckboxChangeCounsiling(
                        "Weekly ART Meeting/Staffing"
                      )
                    }
                  />
                  <label htmlFor="Weekly ART Meeting/Staffing">
                    Weekly ART Meeting/Staffing
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="OtherpsychosocialSymptoms"
                    checked={counselingOptions.includes("Other")}
                    onChange={() => handleCheckboxChangeCounsiling("Other")}
                  />
                  <label htmlFor="OtherpsychosocialSymptoms">Other</label>
                  {counselingOptionsTextBoolean && (
                      // <AutosizeInput
                      //   type="text"
                      //   inputStyle={{ border: "none", outline: "none" }}
                      //   placeholder="________"
                      //   value={counselingOptionsText}
                      //   onChange={(e) =>
                      //     setCounselingOptionsOther(e.target.value)
                      //   }
                      // />
                      <AutoSize value={counselingOptionsText} setValue={setCounselingOptionsOther}  placeholder="________"/>
                    )}
                </div>
              </div>
              {/* <div>
                  <div className="yeschechbox-review">
                    {[
                      "Group",
                      "3 times a day",
                      "4 times a day",
                      "Individual Counseling: Minimum 1 hour session per week",
                      "Individual Counseling: Minimum 1 hour session every 2 weeks",
                      "Individual Therapy: As needed",
                      "Individual Therapy: Please Specify",
                      "Resident decline individual therapy services",
                      "Family Counseling",
                      "NA",
                      "AA",
                      "Month ART Meeting/Staffing",
                      "Weekly ART Meeting/Staffing",
                      "Other",
                    ].map((option, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          id={`counselingCheckbox${index}`}
                          checked={counselingOptions.includes(option)}
                          onChange={() => handleCheckboxChangeCounsiling(option)}
                        />
                        <label htmlFor={`counselingCheckbox${index}`}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}

              {/* {counselingOptionsTextBoolean && (
                  <div className="form-field">
                    <label>Comment:</label>
                    <textarea
                      value={counselingOptionsText}
                      placeholder="Enter text"
                      rows={2}
                      cols={82}
                      required
                      onChange={(e) => setCounselingOptionsOther(e.target.value)}
                    />
                  </div>
                )} */}

              {/* <div className="yeschechbox-review">
                <label htmlFor="">Individual: </label>
                <div>
                  <span>As needed</span>
                </div>
              </div> */}

              {/* <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    1. Maintain Sobriety
                  </label>
                  <Select
                    isMulti
                    options={option1Option}
                    value={option1}
                    onChange={option1Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption1}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
  
                      type="text"
                      value={admissionMeasure1}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure1(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure1}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure1(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion1}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion1(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments1}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment1(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    2. Independent Living Skills
                  </label>
                  <Select
                    isMulti
                    options={option2Option}
                    value={option2}
                    onChange={option2Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption2}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure2}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure2(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure2}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure2(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion2}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        estimatedDateOfCompletion2(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments2}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment2(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    3. Employment
                  </label>
                  <Select
                    isMulti
                    options={option3Option}
                    value={option3}
                    onChange={option3Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption3}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure3}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure3(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure3}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure3(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion3}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion3(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments3}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment3(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    4. ADLS
                  </label>
                  <Select
                    isMulti
                    options={option4Option}
                    value={option4}
                    onChange={option4Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption4}
                  />
                </div>
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure4}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure4(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure4}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure4(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion4}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion4(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments4}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment4(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    5. Safety
                  </label>
                  <Select
                    isMulti
                    options={option5Option}
                    value={option5}
                    onChange={option5Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption5}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure5}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure5(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure5}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure5(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion5}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion5(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments5}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment5(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    6. Medication Education
                  </label>
                  <Select
                    isMulti
                    options={option6Option}
                    value={option6}
                    onChange={option6Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption6}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure6}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure6(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure6}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure6(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion6}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion6(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments6}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment6(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    7. Managing Mental Health
                  </label>
                  <Select
                    isMulti
                    options={option7Option}
                    value={option7}
                    onChange={option7Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption7}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure7}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure7(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure7}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure7(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion7}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion7(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments7}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment7(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      marginBottom: "20px",
                      marginTop: "20px",
                    }}
                  >
                    8. Legal
                  </label>
                  <Select
                    isMulti
                    options={option8Option}
                    value={option8}
                    onChange={option8Handler}
                    isCreatable={true}
                    onKeyDown={handleKeyOption8}
                  />
                </div>
  
                <div className="form-field-update">
                  <div className="form-field-child">
                    <label>Admission Messure:</label>
                    <input
                      type="text"
                      value={admissionMeasure8}
                      placeholder="Admission Messure"
                      required
                      onChange={(e) => setAdmissionMeasure8(e.target.value)}
                    />
                  </div>
  
                  <div className="form-field-child">
                    <label>Current Messure:</label>
                    <input
                      type="text"
                      value={currentMeasure8}
                      placeholder="Enter Current Messure"
                      required
                      onChange={(e) => setCurrentMeasure8(e.target.value)}
                    />
                  </div>
                  <div className="form-field-child">
                    <label>Estimete Date of Goal complition:</label>
                    <input
                      type="date"
                      value={estimatedDateOfCompletion8}
                      placeholder="Enter Estimete Date of complition"
                      required
                      onChange={(e) =>
                        setEstimatedDateOfCompletion8(e.target.value)
                      }
                    />
                  </div>
                </div>
  
                <div className="form-field-single-update-bold">
                  <label>Comment:</label>
                  <textarea
                    value={comments8}
                    placeholder="Enter text"
                    rows={2}
                    cols={82}
                    required
                    onChange={(e) => setComment8(e.target.value)}
                  />
                </div>
  
                {showOther && (
                  <div className="hidePrint">
                    <div className="form-field">
                      <label
                        style={{
                          fontWeight: "600",
                          fontSize: "20px",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        9. Other
                      </label>
                      <input
                        type="text"
                        value={optionOther}
                        onChange={(e) => setOptionOther(e.target.value)}
                      />
                    </div>
  
                    <div className="form-field-update">
                      <div className="form-field-child">
                        <label>Admission Messure:</label>
                        <input
                          type="number"
                          value={admissionMeasureOther}
                          onChange={(e) =>
                            setAdmissionMeasureOther(e.target.value)
                          }
                        />
                      </div>
  
                      <div className="form-field-child">
                        <label>Current Messure:</label>
                        <input
                          type="number"
                          value={currentMeasureOther}
                          onChange={(e) => setCurrentMeasureOther(e.target.value)}
                        />
                      </div>
                      <div className="form-field-child">
                        <label>Estimete Date of Goal complition:</label>
                        <input
                          type="date"
                          value={estimatedDateOfCompletionOther}
                          onChange={(e) =>
                            setEstimatedDateOfCompletionOther(e.target.value)
                          }
                        />
                      </div>
                    </div>
  
                    <div className="form-field-single-update-bold">
                      <label>Comment:</label>
                      <textarea
                        value={commentsOther}
                        placeholder="Enter text"
                        rows={2}
                        cols={82}
                        onChange={(e) => setCommentOther(e.target.value)}
                      />
                    </div>
                  </div>
                )} */}

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Goals for Changes in the Resident Phychorial Interaction or
                  Behaviour :
                </h6>
              </div>

              <div className="needs-interventions-container2 table-respnosive">
                <div className="needs-interventions-column2">
                  <table>
                    <thead>
                      <tr>
                        <th>Treatment Goals</th>
                        <th>Admission Measure</th>
                        <th>Current Measure</th>
                        <th>Estimated Date of Goal Completion</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {" "}
                          <p>1: Maintain sobriety:</p>
                          <Select
                            isMulti
                            options={option1Option}
                            value={option1}
                            onChange={option1Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption1}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure1}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure1(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure1}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure1(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion1}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion1(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments1.split("\n").length, 1)}
                            value={comments1}
                            placeholder="___________"
                            onChange={(e) => setComment1(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment1(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>2: Independent Living Skills:</p>
                          <Select
                            isMulti
                            options={option2Option}
                            value={option2}
                            onChange={option2Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption2}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure2}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure2(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure2}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure2(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion2}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion2(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments2.split("\n").length, 1)}
                            value={comments2}
                            placeholder="___________"
                            onChange={(e) => setComment2(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment2(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>3: Employment:</p>
                          <Select
                            isMulti
                            options={option3Option}
                            value={option3}
                            onChange={option3Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption3}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure3}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure3(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure3}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure3(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion3}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion3(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments3.split("\n").length, 1)}
                            value={comments3}
                            placeholder="___________"
                            onChange={(e) => setComment3(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment3(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>4: ADLS:</p>
                          <Select
                            isMulti
                            options={option4Option}
                            value={option4}
                            onChange={option4Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption4}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure4}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure4(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure4}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure4(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion4}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion4(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments4.split("\n").length, 1)}
                            value={comments4}
                            placeholder="___________"
                            onChange={(e) => setComment4(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment4(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>5: Safety:</p>
                          <Select
                            isMulti
                            options={option5Option}
                            value={option5}
                            onChange={option5Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption5}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure5}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure5(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure5}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure5(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion5}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion5(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments5.split("\n").length, 1)}
                            value={comments5}
                            placeholder="___________"
                            onChange={(e) => setComment5(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment5(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>6: Medication Education:</p>
                          <Select
                            isMulti
                            options={option6Option}
                            value={option6}
                            onChange={option6Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption6}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure6}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure6(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure6}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure6(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion6}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion6(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments6.split("\n").length, 1)}
                            value={comments6}
                            placeholder="___________"
                            onChange={(e) => setComment6(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment6(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>7: Managing Mental Health:</p>
                          <Select
                            isMulti
                            options={option7Option}
                            value={option7}
                            onChange={option7Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption7}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure7}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure7(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure7}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure7(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion7}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion7(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments7.split("\n").length, 1)}
                            value={comments7}
                            placeholder="___________"
                            onChange={(e) => setComment7(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment7(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          {" "}
                          <p>8: Legal:</p>
                          <Select
                            isMulti
                            options={option8Option}
                            value={option8}
                            onChange={option8Handler}
                            isCreatable={true}
                            onKeyDown={handleKeyOption8}
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={admissionMeasure8}
                            placeholder="___________"
                            required
                            onChange={(e) =>
                              setAdmissionMeasure8(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            className="treatment_plan_table"
                            type="text"
                            value={currentMeasure8}
                            placeholder="___________"
                            required
                            onChange={(e) => setCurrentMeasure8(e.target.value)}
                          />
                        </td>
                        <td>
                          <input
                            type="date"
                            value={estimatedDateOfCompletion8}
                            className="treatment_plan_table"
                            required
                            onChange={(e) =>
                              setEstimatedDateOfCompletion8(e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <textarea
                            className="treatment_plan_table"
                            rows={Math.max(comments8.split("\n").length, 1)}
                            value={comments8}
                            placeholder="___________"
                            onChange={(e) => setComment8(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                setComment8(
                                  (prevComment) => prevComment + "\n"
                                );
                              }
                            }}
                          />
                        </td>
                      </tr>

                      {otherArray.length > 0 &&
                        otherArray.map((data, index) => (
                          <tr key={index}>
                            <td>
                              <p>{9 + index}: Other:</p>
                              {data?.optionOther}
                            </td>
                            <td>{data?.admissionMeasureOther}</td>
                            <td>{data?.currentMeasureOther}</td>
                            <td>{data?.estimatedDateOfCompletionOther}</td>
                            <td>{data?.commentsOther}</td>
                          </tr>
                        ))}

                      {showOther && (
                        <tr>
                          <td>
                            {" "}
                            <p>{otherArray.length + 9}: Other:</p>
                            <textarea
                              className="treatment_plan_table"
                              rows={Math.max(optionOther.split("\n").length, 1)}
                              value={optionOther}
                              placeholder="___________"
                              onChange={(e) => setOptionOther(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  setOptionOther(
                                    (prevComment) => prevComment + "\n"
                                  );
                                }
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="treatment_plan_table"
                              type="text"
                              value={admissionMeasureOther}
                              placeholder="___________"
                              required
                              onChange={(e) =>
                                setAdmissionMeasureOther(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <input
                              className="treatment_plan_table"
                              type="text"
                              value={currentMeasureOther}
                              placeholder="___________"
                              required
                              onChange={(e) =>
                                setCurrentMeasureOther(e.target.value)
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="date"
                              value={estimatedDateOfCompletionOther}
                              className="treatment_plan_table"
                              required
                              onChange={(e) =>
                                setEstimatedDateOfCompletionOther(
                                  e.target.value
                                )
                              }
                            />
                          </td>
                          <td>
                            <textarea
                              className="treatment_plan_table"
                              rows={Math.max(
                                commentsOther.split("\n").length,
                                1
                              )}
                              value={commentsOther}
                              placeholder="___________"
                              onChange={(e) => setCommentOther(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  setCommentOther(
                                    (prevComment) => prevComment + "\n"
                                  );
                                }
                              }}
                            />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-actions  hidePrint">
                <button
                  type="button"
                  className="safetybutton"
                  onClick={handleAddButtonClick}
                >
                  ADD
                </button>
              </div>

              <div className="yeschechbox-review-treatment">
                <div>
                  <label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Resident overall participation in treatment:{" "}
                  </label>
                </div>

                <div className="yeschechbox-review-treatment-child">
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="100%"
                      checked={residentParticipation === "100%"}
                      onChange={() => setResidentParticipation("100%")}
                    />
                    <label htmlFor="100%">100%</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="75%"
                      checked={residentParticipation === "75%"}
                      onChange={() => setResidentParticipation("75%")}
                    />
                    <label htmlFor="100%">75%</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="50%"
                      checked={residentParticipation === "50%"}
                      onChange={() => setResidentParticipation("50%")}
                    />
                    <label htmlFor="50%">50%</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="25%"
                      checked={residentParticipation === "25%"}
                      onChange={() => setResidentParticipation("25%")}
                    />
                    <label htmlFor="25%">25%</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="≤5%"
                      checked={residentParticipation === "≤5%"}
                      onChange={() => setResidentParticipation("≤5%")}
                    />
                    <label htmlFor="≤5%">≤5%</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Initial"
                      checked={residentParticipation === "Initial"}
                      onChange={() => setResidentParticipation("Initial")}
                    />
                    <label htmlFor="Initial">Initial</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox-review-treatment">
                <div>
                  <label style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    Resident Attitude:
                  </label>
                </div>
                <div className="yeschechbox-review-treatment-child ">
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Attentive"
                      checked={residentAttitute === "Attentive"}
                      onChange={() => setResidentAttitute("Attentive")}
                    />
                    <label htmlFor="Attentive">Attentive</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Supportive"
                      checked={residentAttitute === "Supportive"}
                      onChange={() => setResidentAttitute("Supportive")}
                    />
                    <label htmlFor="Supportive">Supportive</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Sharing"
                      checked={residentAttitute === "Sharing"}
                      onChange={() => setResidentAttitute("Sharing")}
                    />
                    <label htmlFor="Sharing">Sharing</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Intrusive"
                      checked={residentAttitute === "Intrusive"}
                      onChange={() => setResidentAttitute("Intrusive")}
                    />
                    <label htmlFor="Intrusive">Intrusive</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Resistant"
                      checked={residentAttitute === "Resistant"}
                      onChange={() => setResidentAttitute("Resistant")}
                    />
                    <label htmlFor="Resistant">Resistant</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Initialgfud"
                      checked={residentAttitute === "Initial"}
                      onChange={() => setResidentAttitute("Initial")}
                    />
                    <label htmlFor="Initialgfud">Initial</label>
                  </div>
                </div>
              </div>

              <div className="yeschechbox-review-treatment">
                <div>
                  <label
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Resident progress:
                  </label>
                </div>
                <div className="yeschechbox-review-treatment-progress">
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Deterioration"
                      checked={residentProgress === "Deterioration"}
                      onChange={() => setResidentProgress("Deterioration")}
                    />
                    <label htmlFor="Deterioration">Deterioration</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="No Progress"
                      checked={residentProgress === "No Progress"}
                      onChange={() => setResidentProgress("No Progress")}
                    />
                    <label htmlFor="No Progress">No Progress</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Small progress"
                      checked={residentProgress === "Small progress"}
                      onChange={() => setResidentProgress("Small progress")}
                    />
                    <label htmlFor="Small progress">Small progress</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Good Progress"
                      checked={residentProgress === "Good Progress"}
                      onChange={() => setResidentProgress("Good Progress")}
                    />
                    <label htmlFor="Good Progress">Good Progress</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="Goal achieved"
                      checked={residentProgress === "Goal achieved"}
                      onChange={() => setResidentProgress("Goal achieved")}
                    />
                    <label htmlFor="Goal achieved">Goal achieved</label>
                  </div>
                  <div className="checkbox-style-data">
                    <input
                      type="checkbox"
                      id="InitialGoal"
                      checked={residentProgress === "Initial"}
                      onChange={() => setResidentProgress("Initial")}
                    />
                    <label htmlFor="InitialGoal">Initial</label>
                  </div>
                </div>
              </div>
              <label htmlFor="" className="label-review">
                Support System:
              </label>

              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="Family"
                    checked={supportSystem.includes("Family")}
                    onChange={() => handleCheckboxChangeSupportSystem("Family")}
                  />
                  <label htmlFor="Family">Family</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Friends"
                    checked={supportSystem.includes("Friends")}
                    onChange={() =>
                      handleCheckboxChangeSupportSystem("Friends")
                    }
                  />
                  <label htmlFor="Friends">Friends</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="BHRF staff"
                    checked={supportSystem.includes("BHRF staff")}
                    onChange={() =>
                      handleCheckboxChangeSupportSystem("BHRF staff")
                    }
                  />
                  <label htmlFor="BHRF staff">BHRF staff</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Clinical seam"
                    checked={supportSystem.includes("Clinical seam")}
                    onChange={() =>
                      handleCheckboxChangeSupportSystem("Clinical seam")
                    }
                  />
                  <label htmlFor="Clinical seam">Clinical seam</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Guardian"
                    checked={supportSystem.includes("Guardian")}
                    onChange={() =>
                      handleCheckboxChangeSupportSystem("Guardian")
                    }
                  />
                  <label htmlFor="Guardian">Guardian</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Sponsor name"
                    checked={supportSystem.includes("Sponsor name")}
                    onChange={() =>
                      handleCheckboxChangeSupportSystem("Sponsor name")
                    }
                  />
                  <label htmlFor="Sponsor name">Sponsor name</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="OtherpsychosocialSymptoms"
                    checked={supportSystem.includes("Other")}
                    onChange={() => handleCheckboxChangeSupportSystem("Other")}
                  />
                  <label htmlFor="OtherpsychosocialSymptoms">Other</label>
                  {supportSystemOtherTextBoolean && (
                   
                      <AutoSize value={supportSystemOtherText} setValue={setSupportSystemOtherText}  placeholder="________"/>
                    )}
                </div>
              </div>
           


              <div className="form-field-single-update">
                <label>Phone Number: </label>
                <input
                  placeholder="Type number"
                  type="number"
                  value={supportSystemPhoneNumber}
                  required
                  onChange={(e) => setSupportSystemPhoneNumber(e.target.value)}
                />
              </div>

              <div className="form-field-single-update">
                <label>Current List of medication: </label>
                <input
                  type="text"
                  value={currentMedications}
                  placeholder="Enter medication"
                  required
                  onChange={(e) => setCurrentMedications(e.target.value)}
                />
              </div>
              <label htmlFor="" className="label-review">
                Religious/Cultural Preference:
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="Christian"
                    checked={religiousPreference === "Christian"}
                    onChange={() => setreligiousPreference("Christian")}
                  />
                  <label htmlFor="Christian">Christian</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Catholic"
                    checked={religiousPreference === "Catholic"}
                    onChange={() => setreligiousPreference("Catholic")}
                  />
                  <label htmlFor="Catholic">Catholic</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Buddhist"
                    checked={religiousPreference === "Buddhist"}
                    onChange={() => setreligiousPreference("Buddhist")}
                  />
                  <label htmlFor="Buddhist">Buddhist</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Islam"
                    checked={religiousPreference === "Islam"}
                    onChange={() => setreligiousPreference("Islam")}
                  />
                  <label htmlFor="Islam">Islam</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Judaism"
                    checked={religiousPreference === "Judaism"}
                    onChange={() => setreligiousPreference("Judaism")}
                  />
                  <label htmlFor="Judaism">Judaism</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Hinduism"
                    checked={religiousPreference === "Hinduism"}
                    onChange={() => setreligiousPreference("Hinduism")}
                  />
                  <label htmlFor="Hinduism">Hinduism</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Mormonism"
                    checked={religiousPreference === "Mormonism"}
                    onChange={() => setreligiousPreference("Mormonism")}
                  />
                  <label htmlFor="Mormonism">Mormonism</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Other"
                    checked={religiousPreference === "Other"}
                    onChange={() => setreligiousPreference("Other")}
                  />
                  <label htmlFor="Other">Other</label>
                  {religiousPreference === "Other" && (
                  
                      <AutoSize value={religiousPreferenceText} setValue={setReligiousPreferenceText}  placeholder="________"/>
                    )}
                </div>
              </div>

              <div className="form-field-single-update-bold">
                <label htmlFor="nutritionAndWellnessPlanning">
                  Nutrition and wellness Planning:{" "}
                </label>
                <select
                  id="nutritionAndWellnessPlanning"
                  value={nutritionAndWellnessPlanning}
                  onChange={(e) =>
                    setNutritionAndWellnessPlanning(e.target.value)
                  }
                >
                  <option value="">Select</option>
                  <option value="eating a balanced diet, drinking adequate fluid, ongoing health maintenance">
                    Eating a balanced diet, drinking adequate fluid, ongoing
                    health maintenance
                  </option>
                </select>
                {/* <input
                style={{ color: "#1A9FB2" }}
                type="text"
                id=""
                value={nutritionAndWellnessPlanning}
                placeholder="Enter name"
                required
                onChange={(e) => setNutritionAndWellnessPlanning(e.target.value)}
              /> */}
              </div>
              <label className="label-review">
                Recommendation to extend residential treatment for :{" "}
              </label>
              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="30 Days"
                    checked={
                      recommendationToExtendResidentialTreatment === "30 Days"
                    }
                    onChange={() =>
                      setRecommendationToExtendResidentialTreatment("30 Days")
                    }
                  />
                  <label htmlFor="30 Days">30 Days</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="60 Days"
                    checked={
                      recommendationToExtendResidentialTreatment === "60 Days"
                    }
                    onChange={() =>
                      setRecommendationToExtendResidentialTreatment("60 Days")
                    }
                  />
                  <label htmlFor="60 Days">60 Days</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="90 Day"
                    checked={
                      recommendationToExtendResidentialTreatment === "90 Day"
                    }
                    onChange={() =>
                      setRecommendationToExtendResidentialTreatment("90 Day")
                    }
                  />
                  <label htmlFor="90 Day">90 Day</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Initialhhg"
                    checked={
                      recommendationToExtendResidentialTreatment === "Initial"
                    }
                    onChange={() =>
                      setRecommendationToExtendResidentialTreatment("Initial")
                    }
                  />
                  <label htmlFor="Initialhhg">Initial</label>
                </div>
              </div>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="personalFinances"
                    checked={personalFinances}
                    onChange={() => setPersonalFinances(!personalFinances)}
                  />
                  <label htmlFor="personalFinances">
                    Resident requires Assistance to maintain personal funds
                    and/or hand personal finances
                  </label>
                </div>
              </div>
              <label htmlFor="" className="label-review">
                Discharge planning & Re-evaluation of initial symptoms,
                behaviours & Goals
              </label>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Follow-up Medical appointments upon discharge"
                    checked={
                      dischargePlanning ===
                      "Follow-up Medical appointments upon discharge"
                    }
                    onChange={() =>
                      setDischargePlanning(
                        "Follow-up Medical appointments upon discharge"
                      )
                    }
                  />
                  <label htmlFor="Follow-up Medical appointments upon discharge">
                    Follow-up Medical appointments upon discharge{" "}
                  </label>
                </div>
              </div>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Submit application for higher or lower level of care."
                    checked={
                      dischargePlanning ===
                      "Submit application for higher or lower level of care."
                    }
                    onChange={() =>
                      setDischargePlanning(
                        "Submit application for higher or lower level of care."
                      )
                    }
                  />
                  <label htmlFor="Submit application for higher or lower level of care.">
                    Submit application for higher or lower level of care.
                  </label>
                </div>
              </div>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Continue with Psychiatric Provider"
                    checked={
                      dischargePlanning === "Continue with Psychiatric Provider"
                    }
                    onChange={() =>
                      setDischargePlanning("Continue with Psychiatric Provider")
                    }
                  />
                  <label htmlFor="Continue with Psychiatric Provider">
                    Continue with Psychiatric Provider
                  </label>
                </div>
              </div>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Continue with Primary Care Provider (PCP)"
                    checked={
                      dischargePlanning ===
                      "Continue with Primary Care Provider (PCP)"
                    }
                    onChange={() =>
                      setDischargePlanning(
                        "Continue with Primary Care Provider (PCP)"
                      )
                    }
                  />
                  <label htmlFor="Continue with Primary Care Provider (PCP)">
                    Continue with Primary Care Provider (PCP)
                  </label>
                </div>
              </div>
              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Continue with case manager for additional support and
                    resources"
                    checked={
                      dischargePlanning ===
                      "Continue with case manager for additional support and resources"
                    }
                    onChange={() =>
                      setDischargePlanning(
                        "Continue with case manager for additional support and resources"
                      )
                    }
                  />
                  <label
                    htmlFor="Continue with case manager for additional support and
                    resources"
                  >
                    Continue with case manager for additional support and
                    resources
                  </label>
                </div>
              </div>

              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="Continue counseling with assigned Clinic at least once a month"
                    checked={
                      dischargePlanning ===
                      "Continue counseling with assigned Clinic at least once a month"
                    }
                    onChange={() =>
                      setDischargePlanning(
                        "Continue counseling with assigned Clinic at least once a month"
                      )
                    }
                  />
                  <label htmlFor="Continue counseling with assigned Clinic at least once a month">
                    Continue counseling with assigned Clinic at least once a
                    month
                  </label>
                </div>
              </div>
              <div className="form-field">
                <label className="label-review">Specify ( If Others )</label>
                <textarea
                  type="text"
                  required
                  value={additionalComment}
                  rows={2}
                  cols={130}
                  placeholder="Type Here....."
                  onChange={(e) => setAdditionalComment(e.target.value)}
                />
              </div>
              <label htmlFor="" className="label-review">
                Recommendations for further programs upon discharge:
              </label>

              <div className="yeschechbox-review">
                <div>
                  <input
                    type="checkbox"
                    id="PHP"
                    checked={recommendationsForFurtherPrograms.includes("PHP")}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "PHP"
                      )
                    }
                  />
                  <label htmlFor="PHP">PHP</label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="IOP"
                    checked={recommendationsForFurtherPrograms.includes("IOP")}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "IOP"
                      )
                    }
                  />
                  <label htmlFor="IOP">IOP</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Sober living"
                    checked={recommendationsForFurtherPrograms.includes(
                      "Sober living"
                    )}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Sober living"
                      )
                    }
                  />
                  <label htmlFor="Sober living">Sober living</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Home"
                    checked={recommendationsForFurtherPrograms.includes("Home")}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Home"
                      )
                    }
                  />
                  <label htmlFor="Home">Home</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Flex Care 23.9"
                    checked={recommendationsForFurtherPrograms.includes(
                      "Flex Care 23.9"
                    )}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Flex Care 23.9"
                      )
                    }
                  />
                  <label htmlFor="Flex Care 23.9">Flex Care 23.9</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Flex Care 16"
                    checked={recommendationsForFurtherPrograms.includes(
                      "Flex Care 16"
                    )}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Flex Care 16"
                      )
                    }
                  />
                  <label htmlFor="Flex Care 16">Flex Care 16</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Flex Care 8"
                    checked={recommendationsForFurtherPrograms.includes(
                      "Flex Care 8"
                    )}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Flex Care 8"
                      )
                    }
                  />
                  <label htmlFor="Flex Care 8">Flex Care 8</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="OtherpsychosocialSymptoms"
                    checked={recommendationsForFurtherPrograms.includes(
                      "Other"
                    )}
                    onChange={() =>
                      handleCheckboxChangerecommendationsForFurtherPrograms(
                        "Other"
                      )
                    }
                  />
                  <label htmlFor="OtherpsychosocialSymptoms">Other</label>
                  {recommendationsForFurtherProgramsBoolean && (
                 
                      <AutoSize value={recommendationsForFurtherProgramsOther} setValue={setRecommendationsForFurtherProgramsOther}  placeholder="________"/>
                    )}
                </div>
              </div>

              {/* <div className="yeschechbox-review">
                  {[
                    "PHP",
                    "IOP",
                    "Sober living",
                    "Home",
                    "Flex Care 23.9",
                    "Flex Care 16",
                    "Flex Care 8",
                    "Other",
                  ].map((recommendation, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`recommendationCheckbox${index}`}
                        checked={recommendationsForFurtherPrograms.includes(
                          recommendation
                        )}
                        onChange={() =>
                          handleCheckboxChangerecommendationsForFurtherPrograms(
                            recommendation
                          )
                        }
                      />
                      <label htmlFor={`recommendationCheckbox${index}`}>
                        {recommendation}
                      </label>
                    </div>
                  ))}
                </div> */}
              {/*
                {recommendationsForFurtherProgramsBoolean && (
                  <div className="form-field">
                    <label htmlFor="programlocation&address">Comment:</label>
                    <textarea
                      id="programlocation&address"
                      value={recommendationsForFurtherProgramsOther}
                      placeholder="Enter text"
                      rows={2}
                      cols={82}
                      required
                      onChange={(e) =>
                        setRecommendationsForFurtherProgramsOther(e.target.value)
                      }
                    />
                  </div>
                )} */}

              <label htmlFor="" className="label-review">
                After care and Transition planning / Community Resources:
              </label>

              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="suicideHotlineCheckbox"
                    checked={afterCareAndTransitionPlanning.includes(
                      "National suicide hotline 988 or 1-800-273-8255"
                    )}
                    onChange={() =>
                      handleCheckboxChangeafterCareAndTransitionPlanning(
                        "National suicide hotline 988 or 1-800-273-8255"
                      )
                    }
                  />
                  <label htmlFor="suicideHotlineCheckbox">
                    National suicide hotline 988 or 1-800-273-8255
                  </label>
                </div>
              </div>

              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="emergencyCareCheckbox"
                    checked={afterCareAndTransitionPlanning.includes(
                      "Emergency care 911"
                    )}
                    onChange={() =>
                      handleCheckboxChangeafterCareAndTransitionPlanning(
                        "Emergency care 911"
                      )
                    }
                  />
                  <label htmlFor="emergencyCareCheckbox">
                    Emergency care 911
                  </label>
                </div>
              </div>

              <div className="yeschechbox2-horizontal">
                <div>
                  <input
                    type="checkbox"
                    id="crisisLineCheckbox"
                    checked={afterCareAndTransitionPlanning.includes(
                      "24-Hour crisis in Maricopa County 602-222-9444"
                    )}
                    onChange={() =>
                      handleCheckboxChangeafterCareAndTransitionPlanning(
                        "24-Hour crisis in Maricopa County 602-222-9444"
                      )
                    }
                  />
                  <label htmlFor="crisisLineCheckbox">
                    24-Hour crisis in Maricopa County 602-222-9444
                  </label>
                </div>
              </div>

              <div className="yeschechbox2">
                <div>
                  <span>
                    This treatment plan has been developed before the resident
                    receives physical health services or behavioral health
                    services or within 48hours after the initial assessment is
                    completed. It will be review and updated on an on-going
                    basis according to the review date{" "}
                    <span>
                        <AutoSize value={textData} setValue={setTextData}  placeholder="________"/>
                    </span>
                    specified in the treatment plan, when a treatment goal is
                    accomplished or changed, when additional information that
                    affects the resident’s behavioral health assessment is
                    identified and when the resident has a significant change in
                    condition or experiences an event that affects treatment.
                  </span>
                </div>
              </div>

              <div className="formsheading">
                <label className="label-review-clinical">
                  Clinical Summary /Recommendations/Intervention:
                </label>
              </div>

              <div className="form-field">
                <Select
                  isMulti
                  value={clinicalSummary}
                  options={clinicalSummaryOption}
                  onChange={clinicalSummaryHandler}
                  isCreatable={true}
                  onKeyDown={handleKeyClinicalSummary}
                />
              </div>

              {/* <div className="formsheading">
                <p>
                  The mirrors in the facility are SHATTERPROOF, and if they were
                  standard mirrors it would not present as a current safety risk
                  to this resident.
                </p>
              </div> */}
              <div className="form-field-update">
                <div className="form-field-child">
                  <label>Treatment plan review date:</label>
                  <input
                    type="date"
                    onChange={(e) => setTreatmentPlanReviewDate(e.target.value)}
                    value={treatmentPlanReviewDate}
                    placeholder="Enter text"
                  />
                </div>
                <div className="form-field-child">
                  <label>Discharge Plan Date:</label>
                  <input
                    type="date"
                    onChange={(e) => setDischargePlanDate(e.target.value)}
                    value={dischargePlanDate}
                    placeholder="Enter text"
                  />
                </div>
              </div>

              <p
                style={{
                  fontWeight: "500",
                  fontSize: "16px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  color: "#00000099",
                }}
              >
                Note: Earlier review may be performed if resident has a
                significant change in condition or event that affects treatment.
              </p>

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Individual Participating in Developing the Service Plan:
                </h6>
              </div>

              <div className="form-field-update">
                <div className="form-field-child">
                  <label>Resident:</label>
                  <input
                    type="text"
                    value={resident}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setResident(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label>Guardian:</label>
                  <input
                    type="text"
                    value={guardian}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setGuardian(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label>Staff:</label>
                  <input
                    
                    type="text"
                    value={staff}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setStaff(e.target.value)}
                  />
                </div>
                <div className="form-field-child">
                  <label>BHP:</label>
                  <input
                
                    type="text"
                    value={bpn}
                    placeholder="Enter name"
                    required
                    onChange={(e) => setBph(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field-single-update">
                <label>Comment:</label>

                <input
                  type="text"
                  value={commentIndividual}
                  placeholder="Enter comment"
                  required
                  onChange={(e) => setCommentIndividual(e.target.value)}
                />
              </div>

              <label htmlFor="" className="label-review">
                Resident / Representative:
              </label>
              <div className="yeschechbox-review-yes-no">
                <div>
                  <input
                    type="checkbox"
                    id="isReason"
                    checked={isReason === "yes"}
                    onChange={() =>
                      setIsReason(isReason === "yes" ? "no" : "yes")
                    }
                  />
                  <label htmlFor="isReason">
                    Yes,{" "}
                    <span>
                      I am in the agreement with the services included in this
                      treatment Plan
                    </span>
                  </label>
                </div>
              </div>
              {/* <div className="yeschechbox2">
                <div>
                  <span>
                    I am in the agreement with the services included in this
                    treatment Plan
                  </span>
                </div>
              </div> */}
              <div className="yeschechbox-review-yes-no">
                <div>
                  <input
                    type="checkbox"
                    id="refusalReason"
                    checked={refusalReason === "yes"}
                    onChange={() =>
                      setrefusalReason(refusalReason === "yes" ? "no" : "yes")
                    }
                  />
                  <label htmlFor="refusalReason">
                    No,{" "}
                    <span>
                      I am not in the agreement with the services included in this
                      treatment Plan
                    </span>
                  </label>
                </div>
              </div>
              {/* <div className="yeschechbox2">
                <div>
                  <span>
                    I am in the agreement with the services included in this
                    treatment Plan
                  </span>
                </div>
              </div> */}
              {/* /"signaturesResident */}

              <div className="formsheading">
                <h6 style={{ fontWeight: "bold" }}>
                  Signature indicates participation and informed consent for
                  treatment services.
                </h6>
              </div>

              <div className="form-field-update">
              <div className="form-field-child">
                <label>First and Last Name:</label>
                <input
                  type="text"
                  value={nameResident}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setNameResident(e.target.value)}
                />
              </div>

              <div className="form-field-child">
                <label style={{ fontWeight: "bold" }}>
                  Resident or Resident’s representative{" "}
                  <span style={{ fontSize: "15px", color: "gray" }}>
                    (By signing this document, I acknowledge that I was asked,
                    encouraged to participate in the assessment)
                  </span>
                  :
                </label>
                <input
                  type="text"
                  value={credentialsResident}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setCredentialsResident(e.target.value)}
                />
              </div>
              </div>


          
             

              <div class="file-upload-box hidePrint" style={{marginTop:"0.5rem"}}>
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
                    onClick={() => setSignatureModel1(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {signatureResident && (
                    <p className="signature_name_print">
                      Digitally Sign by {signatureResident} {dateResident} {timeResident}
                    </p>
                  )}
                </div>
              </div>

              {signatureModel1 && (
                <SingInUpdateModel
                  onClose={() => setSignatureModel1(false)}
                  singin={signatureResident}
                  setSingIn={setsignatureResident}
                  setDateAndTime={setDateResident}
                  setSignatureTime={setTimeResident}
                />
              )}
              {/* <div className="form-field">
                <label>Date:</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  value={dateResident}
                  placeholder="DD/MM/YYYY"
                  required
                  onChange={(e) => setDateResident(e.target.value)}
                />
              </div> */}
            </div>

            <div className="form-field-update">
              <div className="form-field-child">
                <label>First and Last Name:</label>
                <input
                  type="text"
                  value={nameFacilityRep}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setNameFacilityRep(e.target.value)}
                />
              </div>

              <div className="form-field-child">
                <label>Facility Representative:</label>
                <input
                  type="text"
                  value={credentialsFacilityRep}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setCredentialsFacilityRep(e.target.value)}
                />
              </div>
            </div>

            <div class="file-upload-box hidePrint" style={{marginTop:"0.2rem"}}>
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
                  onClick={() => setSignatureModel2(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {signatureFacilityRep && (
                  <p className="signature_name_print">
                    Digitally Sign by {signatureFacilityRep} {dateFacilityRep} {timeFacality}
                  </p>
                )}
              </div>
            </div>

            {signatureModel2 && (
              <SingInUpdateModel
                onClose={() => setSignatureModel2(false)}
                singin={signatureFacilityRep}
                setSingIn={setsignatureFacilityRep}
                setDateAndTime={setDateFacilityRep}
                setSignatureTime={setTimeFacality}
              />
            )}

            <div className="form-field-update ">
              <div className="form-field-child">
                <label htmlFor="AHCCCS">First and Last Name:</label>
                <input
                  type="text"
                  value={nameBhp}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setNameBhp(e.target.value)}
                />
              </div>
              <div className="form-field-child">
                <label>Behavioral Health Professional:</label>
                <input
                  type="text"
                  value={credentialsBhp}
                  placeholder="Enter text"
                  required
                  onChange={(e) => setCredentialsBhp(e.target.value)}
                />
              </div>
            </div>

            <div class="file-upload-box hidePrint" style={{marginTop:"0.2rem"}}>
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
                    onClick={() => setSignatureModel3(true)}
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
                {signatureBhp && (
                  <p className="signature_name_print">
                    Digitally Sign by {signatureBhp} {dateBhp} {timeBhp}
                  </p>
                )}
              </div>
            </div>

            {signatureModel3 && (
              <SingInUpdateModel
                onClose={() => setSignatureModel3(false)}
                singin={signatureBhp}
                setSingIn={setsignatureBhp}
                setDateAndTime={setDateBhp}
                setSignatureTime={setTimeBhp}
              />
            )}
          
            <div className="form-actions hidePrint">
              <button type="submit" style={{padding:"5px 20px", border:"none",outline:"none",backgroundColor:"#1A9FB2",borderRadius:"5px",marginBottom:"2.5rem",textAlign:"center"}}>
                SUBMIT DETAILS
              </button>
            </div>
          </form>
          </div>
          </div>
        {draftModel && <Draftinmodel onClose={() => setDraftModel(false)} />}
      </div>
    </>
  );
};

export default Treatmentplan_update;
