// Navbar.js
import React, { useState, useEffect } from "react";
import { RiMessage2Line } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import "./UpperBar.css";
import { MdOutlineSegment } from "react-icons/md";
import ProfileModal from "../Modal/ProfileModal";
import NotificationModal from "../Modal/NotificationModal";
import notification1 from "../../img/notification.png";
import ChattingModal from "../Modal/ChattingModal";
import { useNavigate } from "react-router-dom";
import { user_detail, show_notification, notification_get } from "../../Api_Collection/Api";
import CreateChat from "../Modal/CreateChat";



const UpperBar = ({ isMenuOpen, toggleMenu }) => {
  const navigate = useNavigate();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
  const [ischattingModalOpen, setChattingModalOpen] = useState(false);
  const [isChat,setIsChat]=useState(false);
  const [user, setUser] = useState("");

  //notification
  const [notification, setNotification] = useState([]);
  const [todayData, setTodayData] = useState([]);
  const [otherData, setOtherData] = useState([]);

  useEffect(() => {
    // Sort and separate data when the data changes
    const sortAndSeparateData = () => {
      // Sort the data by updatedAt date
      const sortedData = [...notification].sort((a, b) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });

      // Get today's date in the format 'YYYY-MM-DD'
      const today = new Date().toISOString().split('T')[0];

      // Separate data into todayData and otherData arrays
      const todayDataArray = [];
      const otherDataArray = [];

      sortedData.forEach(item => {
        const itemDate = new Date(item.updatedAt).toISOString().split('T')[0];
        if (itemDate === today) {
          todayDataArray.push(item);
        } else {
          otherDataArray.push(item);
        }
      });

      // Set the state with the separated data
      setTodayData(todayDataArray);
      setOtherData(otherDataArray);
    };

    sortAndSeparateData();
  }, [notification]);


  useEffect(() => {
    user_detail(setUser);
    notification_get(setNotification);
  }, []);

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  const openNotificationModal = () => {
    setNotificationModalOpen(true);
  };

  const closeNotificationModal = () => {
    setNotificationModalOpen(false);
  };

  const openChattingModal = () => {
    setChattingModalOpen(true);
  };
  const closeChattingModal = () => {
    setChattingModalOpen(false);
  };




  return (
    <>
      <div className="navbar1">
        <div>
        <div className="left-section">
          <span>
            <MdOutlineSegment onClick={toggleMenu} color="#1A9FB2" size={25} style={{cursor:"pointer"}}/>
          </span>
          <span>Welcome,</span>
          <h6>{user?.fullName}</h6>
        </div>
        <p>How can we help you today?</p>
        </div>
        <div className="right-section">
          <img src={user?.profilePic} alt="profile" onClick={openProfileModal} style={{ height: "50px", width: "50px", borderRadius: "50%" }}/>
          <RiMessage2Line className="icons" onClick={()=>setIsChat(true)} color="#1A9FB2" size={30} />
          <FaBell className="icons" onClick={openNotificationModal} color="#1A9FB2" size={30} />
        </div>
      </div>
      {/* Modal */}
      {isProfileModalOpen && (
        <ProfileModal onClose={closeProfileModal}>
          <div className="profilemodal-container">
            <div className="profilemodal-header">
              <img
                src={user?.profilePic}
                alt="Profile"
                className="profilemodal-image"
              />
              <h2>{user?.fullName}</h2>
              <p>
                <span>STATUS:</span> ADMITTED AT CENTRE 1
              </p>
              <button
                className="profilemodalbutton"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  show_notification(
                    "success! ",
                    "LogOut Successfully",
                    "success"
                  );
                  navigate("/");
                }}
              >
                SIGN OUT
              </button>
              <button
                className="profilemodalbutton"
                style={{ cursor: "pointer", marginTop: "1rem" }}
                onClick={() => navigate("/update-profile")}
              >
                Edit ProFile
              </button>
            </div>
          </div>
        </ProfileModal>
      )}

      {/* Notification Modal */}
      {isNotificationModalOpen && (
        <NotificationModal onClose={closeNotificationModal}>
          <div className="notification">
            <h5>NOTIFICATIONS</h5>
            <hr />
            {
              todayData.length > 0 && (
                <>
                  <p>Today</p>
                  {todayData.map((item, i) => (
                    <div className="notificationcontent" style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                      <img src={item?.patientId?.profilePic ? item?.patientId?.profilePic : notification1} alt="" style={{ borderRadius: "50%" }} />
                      <span>{item?.title}</span>
                    </div>
                  ))}
                </>
              )
            }



            {
              otherData.length > 0 && (
                <>
                  <p style={{ color: "#1E1E1E99" }}>Previous</p>
                  {
                    otherData?.map((item, i) => (
                      <div className="notificationcontent" style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
                        <img src={item?.patientId?.profilePic ? item?.patientId?.profilePic : notification1} alt="" style={{ borderRadius: "50%" }} />
                        <span >{item?.title}</span>
                      </div>
                    ))
                  }
                </>
              )
            }

           
          </div>
        </NotificationModal>
      )}

      {ischattingModalOpen && (
        <ChattingModal onClose={closeChattingModal}>

        </ChattingModal>
      )}

    <CreateChat show={isChat} handleClose={() => setIsChat(false)} />

    </>
  );
};

export default UpperBar;
