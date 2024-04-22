/** @format */

import React, { useEffect, useRef } from "react";
// import { DateFormtter } from "../../utils/utils";
// import sendsvg from "../../assets/send.svg";
// import { defaultUserImg } from "../../assets/index";

const MessageBox = ({
  document,
  setNewMessage,
  newMessage,
  handleOnSubmit,
  senderId,
}) => {
  const fetchName = (i) => {
    if (i?.firstName || i?.lastName) {
      return `${i?.firstName} ${i?.lastName}`;
    } else {
      return i?.fullName;
    }
  };

  const chatsContainerRef = useRef(null);

  useEffect(() => {
    if (chatsContainerRef.current) {
      chatsContainerRef.current.scrollTop =
        chatsContainerRef.current.scrollHeight;
    }
  }, [document]);

  return (
    document && (
      <div className="chat-box">
        <div className="chat-header">
          <span>
            {document?.recipient?.profilePic ? (
              <img
                src={document?.recipient?.profilePic}
                alt=""
                className="original-img"
              />
            ) : (
            //   <img src={defaultUserImg} alt="" className="original-img" />
              <img src="" alt="dgf" className="original-img" />
            )}
            {fetchName(document?.recipient)}{" "}
          </span>
        </div>
        <div className="chat-texts">
          <div className="chats-messages" ref={chatsContainerRef}>
            {document?.text?.length > 0 &&
              document?.text?.map((i, index) => (
                <div
                  className={
                    i?.type === senderId
                      ? "message-left message-in"
                      : "message-right message-in"
                  }
                >
                  <div
                    className={i?.type === senderId ? "left" : "right"}
                    key={`document${index}`}
                  >
                    <div className="original-text">
                      <p className="text"> {i.text} </p>
                      {i.date && (
                        <span className="date">
                          {/* {`${DateFormtter(i.date)}  ${i.date?.slice(11, 16)} `} */}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />

            <button type="submit">
              {" "}
              {/* <img src={sendsvg} alt="" />{" "} */}
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default MessageBox;
