// Modal.js
import React, { useState } from "react";
import "./ChattingModal.css";
import { IoMdClose } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import chatting1 from "../../img/chatting1.png";
import SendMessage from "../../chat/SendMessage";
import { GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";
import {
  collection,
  updateDoc,
  doc,
  getDocs,
  getDoc,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "../../chat/Message";
import { useAuthState } from "react-firebase-hooks/auth";

const ChattingModal = ({ onClose }) => {
  const [input, setInput] = useState("");

  // dufd
  const [user] = useAuthState(auth);
  const [initializing, setInitializing] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [collections, setCollections] = useState([]);
  const [document, setDocument] = useState(null);
  const [documentId, setDocumentId] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, stPhotoUrl] = useState("");
  const [bool, setBool] = useState(false);

  // jifdj
  const [message, loading] = useCollection(
    query(collection(db, "chats"), orderBy("time", "asc"))
  );

  const googleSignIn = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await auth.signOut();
      setBool(false);
    } catch (e) {
      console.log(e);
    }
  };

  const SendMessage = (e) => {
    e.preventDefault();
    input.length > 0 && (
      addDoc(collection(db, "chats"), {
        sender: user?.displayName,
        message: input,
        time: serverTimestamp(),
      })
        .then(() => {
          setInput("");
        })
        .catch((err) => console.log("error"))
    ) 
  
  };

  return (
    <div className="chattingmodal-overlay" onClick={onClose}>
      <div
        className="chattingmodal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IoArrowBackCircle
            style={{
              color: "#1A9FB2",
              width: "50px",
              height: "50px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />
          {!user ? (
            <button
              type="button"
              style={{
                border: "none",
                outline: "none",
                padding: "5px",
                borderRadius: "5px",
                width: "5rem",
                backgroundColor: "lightblue",
              }}
              onClick={googleSignIn}
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              style={{
                border: "none",
                outline: "none",
                padding: "5px",
                borderRadius: "5px",
                width: "5rem",
                backgroundColor: "lightblue",
              }}
              onClick={handleSignOut}
            >
              Logout
            </button>
          )}
        </div>
        <div className="search-bar-chat">
          <p>Chat</p>
          <input type="text" placeholder="Search" value="" />
          {/* <RiSearchLine className="searchicon" /> */}
        </div>

        <div className="chatting">
          {message?.docs?.map((message) => (
            <Message
              key={message.id}
              sender={message.data().sender}
              message={message.data().message}
              time={message?.data()?.time?.toDate()?.getTime()}
              profilePicture={message.data().profilePicture}
            />
          ))}
        </div>
        <div className="submitButton">
          <form onSubmit={SendMessage} className="formClassInput">
          
    
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter message"
            />
         
           
            <button type="submit">Send</button>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChattingModal;
