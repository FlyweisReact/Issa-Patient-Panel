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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const collectionName = process.env.React_App_Firebase_CollectionName;

const CreateChat = ({ handleClose, show }) => {
  const [allEmployees, setAllEmployess] = useState({});
  const [limit, setLimit] = useState(25);
  const [loading, setLoading] = useState(false);
  const ProfileDetails = useSelector(userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) {
      getApi({
        url: `admin/getUserForChat?userType=Employee&limit=${limit}`,
        setResponse: setAllEmployess,
        setLoading,
      });
    }
  }, [limit, show]);

  const hasMore =
    allEmployees?.data?.totalDocs > allEmployees?.data?.docs?.length;

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

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    disabled: loading,
  });

  const fetchName = (i) => {
    if (i.firstName || i.lastName) {
      return `${i.firstName} ${i.lastName}`;
    } else {
      return i.fullName;
    }
  };

  const createDocument = ({ navigationLink, recipientObj }) => {
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

          <FontAwesomeIcon
            icon={faMessage}
            onClick={() => handleClick("/chat")}
          />
        </div>

        <div className="create-new-chat-room">
          {allEmployees?.data?.docs?.map((i, index) => (
            <div
              className="select-employee"
              onClick={() =>
                createDocument({
                  recipientObj: i,
                  collectionName: "PatientChat",
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
