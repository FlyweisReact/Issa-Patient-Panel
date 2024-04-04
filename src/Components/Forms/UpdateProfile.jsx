import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Form, useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import formupload from "../../img/formupload.png";
import { Update_Profile,user_detail } from "../../Api_Collection/Api";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [gender,setGender]=useState("");
  const [address,setAdress]=useState("")

  useEffect(()=>{
    setName(user.fullName);
    setEmail(user?.email);
    setMobileNumber(user?.mobileNumber);
    setGender(user?.gender);
    setAdress(user?.address);
  },[user])

  useEffect(()=>{
    user_detail(setUser);
  },[])
  console.log(user,"user data")


  const handlePostData = (e) => {
    e.preventDefault();
    const fromData=new FormData();
    fromData.append("fullName",name)
    fromData.append("email",email)
    fromData.append("mobileNumber",mobileNumber)
    fromData.append("gender",gender)
    fromData.append("address",address)
    fromData.append("image",profileImage)


    Update_Profile(fromData);
    
    navigate("/appointment_scheduling")
  };
  return (
    <>
      <div className="booking-container">
        <div className="backbutton">
          <IoArrowBackCircle
            style={{
              color: "#1A9FB2",
              width: "40px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/appointment_scheduling")}
          />
        </div>
        <div className="form-container">
          <div className="formheading1">
            <div className="formsheading2">
              <h1>Update Patient Profile</h1>
            </div>
          </div>
          <form onSubmit={handlePostData}>
            <div className="booking-section">
              <h2>User Details</h2>
              <div className="form-field">
                <label >Profile Image:</label>
                <input
                  type="file"
                 onChange={(e)=>setProfileImage(e.target.files[0])}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={name}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Contact Number:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value={mobileNumber}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Email:</label>
                <input
                  type="email"
                  id="AHCCCS"
                  value={email}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Gender:</label>
                <select  value={gender} onChange={(e) => setGender(e.target.value)}>
      <option>Open this select menu</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>

                
                {/* <input
                  type="text"
                  id="AHCCCS"
                  value={gender}
                  placeholder="Type Here....."
                  required
                  onChange={(e) => setGender(e.target.value)}
                /> */}
              </div>
             
              
              <div className="form-field">
                <label htmlFor="programlocation&address">Address</label>
                <textarea
                  id="programlocation&address"
                  rows={2}
                  cols={130}
                  placeholder="Type Here......"
                  required
                  value={address}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="initalsubmit">
                SUBMIT DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
