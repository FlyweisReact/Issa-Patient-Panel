/** @format */

import React, { useState, useEffect } from "react";
import {
  collection,
  updateDoc,
  doc,
  getDoc,
  onSnapshot,
  where,
  or,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import MessageBox from "./MessageBox";
import ChatMenu from "./ChatMenu";
import { useSelector } from "react-redux";
import { isAuthenticated, userProfile } from "../Store/authSlice";
import { fetchDocumentId } from "../Store/chatSlice";
import { useNavigate } from "react-router-dom";
import "./Chat.css";

const Chat = () => {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [collections, setCollections] = useState([]);
  const [document, setDocument] = useState({});
  const [senderId, setSenderId] = useState("");
  const ProfileDetails = useSelector(userProfile);
  const documentId = useSelector(fetchDocumentId);
  const isLoggedIn = useSelector(isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (ProfileDetails) {
      setSenderId(ProfileDetails?._id);
    }
  }, [ProfileDetails]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, [initializing]);

  console.log(ProfileDetails);

  console.log(senderId)

  // Add real-time listener to fetch chat documents
  const fetchChatDocumentsRealtime = () => {
    const chatCollectionRef = collection(db, "PatientChat");
    const chatQuery = query(
      chatCollectionRef,
      where("recipient._id", "==", senderId)
    );

    const unsubscribe = onSnapshot(chatQuery, (snapshot) => {
      const chatDataArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      console.log("chatDataArray", chatDataArray);
      setCollections(chatDataArray.reverse());
    });

    return unsubscribe;
  };

  useEffect(() => {
    // if (senderId) {
    const unsubscribe = fetchChatDocumentsRealtime();
    return () => unsubscribe();
    // }
  }, [senderId]);

  // Add real-time listener to fetch a specific chat document by ID
  const fetchDocumentByIdRealtime = (documentId) => {
    const docRef = doc(
      db,
      process.env.React_App_Firebase_Employee_CollectionName,
      documentId
    );

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setDocument(doc.data());
      } else {
        console.log("No such document!");
        setDocument({});
      }
    });

    return unsubscribe;
  };

  useEffect(() => {
    if (documentId) {
      const unsubscribe = fetchDocumentByIdRealtime(documentId);
      return () => unsubscribe();
    }
  }, [documentId]);

  if (initializing) return "Loading...";

  const updateChat = async (e) => {
    e.preventDefault();
    const documentRef = doc(
      db,
      process.env.React_App_Firebase_Employee_CollectionName,
      documentId
    );
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    try {
      const documentSnapshot = await getDoc(documentRef);
      if (documentSnapshot.exists()) {
        const existingData = documentSnapshot.data();
        const updatedReply = [
          ...existingData.text,
          { text: newMessage, type: senderId, date: formattedDate },
        ];
        setNewMessage("");
        await updateDoc(documentRef, {
          text: updatedReply,
        });
      } else {
        console.log("Document does not exist!");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      {user && collections && (
        <>
          <div className="chat">
            {collections?.length > 0 ? (
              <div className="chat-sidebar">
                <ChatMenu collections={collections} />
              </div>
            ) : (
              <div className="sidebar empty">
                <p className="absolute-p">No Document's Found</p>
              </div>
            )}
            {collections?.length > 0 &&
              (documentId ? (
                <div className="content">
                  <MessageBox
                    document={document}
                    setNewMessage={setNewMessage}
                    handleOnSubmit={updateChat}
                    newMessage={newMessage}
                    senderId={senderId}
                  />
                </div>
              ) : (
                <div className="content empty">
                  <p className="absolute-p">
                    Please select a chat to view messages
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Chat;
