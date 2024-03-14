import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import HistoryCard from '../Cards/HistoryCards'
import cards from '../../img/card1.png'
import ibutton from '../../img/image 105.png'
import formupload from '../../img/formupload.png'

import { RiDeleteBin6Fill } from "react-icons/ri";
import './CancelAppointment.css'

const CancelAppointment = () => {
  const navigate = useNavigate()

  return (
    <div className='booking-container'>
      <div className='backbutton'>
        <IoArrowBackCircle style={{ color: '#1A9FB2', width: '40px', height: '40px', cursor: 'pointer' }} onClick={() => navigate('/appointment_scheduling')} />
      </div>
      <div className='form-container'>
        <div className="formheading1">
          <div className='formsheading2'>
            <h1 style={{ color: '#ED4040' }}>CANCEL APPOINTMENT</h1>
          </div>
        </div>

        <div className='cancelconatainer'>
          <h2> <img src={ibutton} alt="" />Please Confirm and Provide details to Cancel your Appointment!</h2>
          <p>I have been offered the opportunity to have medical care at the hospital/urgent care for the above illness/injury. I feel as though I do not require medical care at this time. However, should I feel the need to have medical care, I will immediately report this to a Devine Care staff.</p>
          <div className='yeschechbox2'>
            <div>
              <input type="checkbox" name="" id="" />
              <label>I agree to the ‘Terms & Conditions’ above</label>
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="approvedby">Resident Full Name</label>
            <input
              type='text'
              id="approvedby"
              value=''
              placeholder='Enter text'
              required
            />
          </div>
          <label htmlFor="approvedby">Resident Signature</label>
          <div class="file-upload-box">
            <input type="file" id="fileInput" style={{ display: 'none' }} />
            <div class="upload-icon">
              <img src={formupload} alt="" style={{ width: "100px", height: "100px" }} />
            </div>
            <div style={{ display: 'block' }}>
              <button className='upload-button1' onclick="uploadFile()">SAVED AS DRAFT</button>
              <button className="upload-button" onclick="uploadFile()">SAVED AND SIGNED</button>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className='managecontinue1'>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default CancelAppointment