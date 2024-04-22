/** @format */

import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchDocumentId, setDocumentID } from "../../store/chatSlice";
// import { defaultUserImg } from "../../assets/index";

const ChatMenu = ({ collections }) => {
//   const documentId = useSelector(fetchDocumentId);
//   const dispatch = useDispatch();

//   const documentIdSetter = (id) => {
//     dispatch(setDocumentID(id));
//   };

  const fetchName = (i) => {
    if (i?.firstName || i?.lastName) {
      return `${i?.firstName} ${i?.lastName}`;
    } else {
      return i?.fullName;
    }
  };

  return (
    <>
      <nav className="menu-list">
        {collections?.map((nav, index) => {
          return (
            <span
              key={`chats${nav.id}${index}`}
            //   className={`container ${
            //     documentId === nav.id ? "active" : ""
            //   } cursor-pointer`}
            //   onClick={() => documentIdSetter(nav.s
            >
              {nav?.data?.recipient?.profilePic ? (
                <img
                  src={nav?.data?.recipient?.profilePic}
                  alt=""
                  className="original-img"
                />
              ) : (
                // <img src={defaultUserImg} alt="" className="original-img" />
                <img src="" alt="sgfgf" className="original-img" />
              )}

              {fetchName(nav?.data?.recipient)}
            </span>
          );
        })}
      </nav>
    </>
  );
};

export default ChatMenu;
