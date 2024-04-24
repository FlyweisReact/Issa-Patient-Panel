/** @format */

import React, { useState, useEffect } from "react";
import { createFirebaseDocument, getApi } from "../../Api_Collection/Api";
import { Offcanvas } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import useInfiniteScroll from "react-infinite-scroll-hook";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../Store/authSlice";
import { useNavigate } from "react-router-dom";
import { setDocumentID } from "../../Store/chatSlice";
import "./ChattingModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const CreateChat = ({ handleClose, show }) => {
  const [allEmployees, setAllEmployess] = useState({});
  const [allPatients, setAllPatiens] = useState({});
  const [limit, setLimit] = useState(25);
  const [patientLimit, setPatientLimit] = useState(25);
  const [patientLoading, setPatientLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const ProfileDetails = useSelector(userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const getProfile = 

  console.log("ProfileDetails" ,ProfileDetails)

  useEffect(() => {
    if (show) {
      getApi({
        url: `admin/getUserForChat?userType=Employee&limit=${limit}`,
        setResponse: setAllEmployess,
        setLoading,
      });
    }
  }, [limit, show]);

  useEffect(() => {
    if (show) {
      getApi({
        url: `admin/getUserForChat?userType=Patient&limit=${patientLimit}`,
        setResponse: setAllPatiens,
        setLoading: setPatientLoading,
      });
    }
  }, [patientLimit, show]);

  const hasMore =
    allEmployees?.data?.totalDocs > allEmployees?.data?.docs?.length;
  const hasMorePatient =
    allPatients?.data?.totalDocs > allPatients?.data?.docs?.length;

  const customDebounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const loadMore = customDebounce(() => {
    if (
      limit === allEmployees?.data?.totalDocs ||
      limit < allEmployees?.data?.totalDocs
    ) {
      setLimit(limit + 25);
    }
  }, 500);

  const loadMorePatient = customDebounce(() => {
    if (
      patientLimit === allPatients?.data?.totalDocs ||
      patientLimit < allPatients?.data?.totalDocs
    ) {
      setPatientLimit(limit + 25);
    }
  }, 500);

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    disabled: loading,
  });
  const [patientRef] = useInfiniteScroll({
    loading: patientLoading,
    hasNextPage: hasMorePatient,
    onLoadMore: loadMorePatient,
    disabled: patientLoading,
  });

  const fetchName = (i) => {
    if (i.firstName || i.lastName) {
      return `${i.firstName} ${i.lastName}`;
    } else {
      return i.fullName;
    }
  };

  const createDocument = ({ collectionName, navigationLink, recipientObj }) => {
    const payload = {
      recipient: ProfileDetails,
      sender: recipientObj,
      text: [],
    };

    dispatch(
      createFirebaseDocument({
        payload,
        collectionName,
        navigate,
        navigationLink,
        handleClose,
      })
    );
  };

  const handleClick = (link) => {
    navigate(link);
    dispatch(setDocumentID(""));
    handleClose();
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Create New Chat</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="go-to-chat">
          <h5 className="fw-bold ">Employee's</h5>

          <FontAwesomeIcon icon={faMessage} onClick={() => handleClick("/chat")} />
        </div>

        <div className="create-new-chat-room">
          {allEmployees?.data?.docs?.map((i, index) => (
            <div
              className="select-employee"
              onClick={() =>
                createDocument({
                  recipientObj: i,
                  collectionName: "PatientChart",
                  navigationLink: "/chat",
                })
              }
              key={`user${index}`}
            >
              {i.profilePic ? (
                <img src={i.profilePic} className="original-img" alt="" />
              ) : (
                <div class="img"> {fetchName(i)?.slice(0, 1)} </div>
              )}

              <div class="content">
                <p class="heading">{fetchName(i)} </p>
                <p class="faded"> {i.mobileNumber} </p>
                <p class="faded">{i.email} </p>
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "block", margin: "auto" }}>
              <ClipLoader />
            </div>
          )}
          <div ref={sentryRef}></div>
        </div>

      

      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CreateChat;
