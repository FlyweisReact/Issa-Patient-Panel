import React, { useEffect, useState } from 'react'
import './Vital.css'
import clock from '../../Components/VitalNew/Vitals/clock.png'
import hand from '../../Components/VitalNew/Vitals/hand.png'
import heart from '../../Components/VitalNew/Vitals/heart.png'
import hieght from '../../Components/VitalNew/Vitals/hieght.png'
import last from '../../Components/VitalNew/Vitals/last.png'
import lungs from '../../Components/VitalNew/Vitals/lungs.png'
import o2 from '../../Components/VitalNew/Vitals/o2.png'
import thermameter from '../../Components/VitalNew/Vitals/thermameter.png'
import { MdOutlineFileUpload } from "react-icons/md";
import { Link } from 'react-router-dom'
import { user_detail, vital_data } from "../../Api_Collection/Api"



const Vital = () => {
    const [vitalData, setVitalData] = useState([]);
    const [patientId, setPatientId] = useState("");

    useEffect(() => {
        vital_data(patientId, setVitalData);
    }, [patientId])

    useEffect(() => {
        user_detail(setPatientId);
    }, [])

    return (
        <>
            <div className='intakecontainer'>
                <div className='appointmentcontent'>
                    <p>Vitals</p>
                </div>
                <div className='intakecardsVital'>
                    <div className="small-card2121">

                        <img src={thermameter} alt="Icon" className="card-icon-image" />

                        <p>Body Temp</p>
                        <h4>{vitalData?.[0]?.bodyTemperature} °C</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={heart} alt="Icon" className="card-icon-image" />
                        <p>Pulse Rate</p>
                        <h4>{vitalData?.[0]?.pulseRate} BPM</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={lungs} alt="Icon" className="card-icon-image" />
                        <p>Respiration Rate</p>
                        <h4>{vitalData?.[0]?.respirationRate} BPM</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={hand} alt="Icon" className="card-icon-image" />
                        <p>Blood Pressure</p>
                        <h4>{vitalData?.[0]?.bloodPressure} BP</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={o2} alt="Icon" className="card-icon-image" />
                        <p>Blood Oxygen</p>
                        <h4>{vitalData?.[0]?.bloodOxygen} O2</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={clock} alt="Icon" className="card-icon-image" />
                        <p>Weight</p>
                        <h4>{vitalData?.[0]?.weight} IBS</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={hieght} alt="Icon" className="card-icon-image" />
                        <p>Height</p>
                        <h4>{vitalData?.[0]?.height} Ft/Inche</h4>
                    </div>
                    <div className="small-card2121">
                        <img src={last} alt="Icon" className="card-icon-image" />
                        <p>Blood Glucose Level</p>
                        <h4>{vitalData?.[0]?.bloodGlucoseLevel} C</h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vital