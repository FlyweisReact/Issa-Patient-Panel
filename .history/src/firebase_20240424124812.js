/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.React_App_Firebase_apikey,
  authDomain: process.env.React_App_Firebase_apikey,
  projectId: process.env.React_App_Firebase_apikey,
  storageBucket: process.env.React_App_Firebase_apikey,
  messagingSenderId: "process.env.React_App_Firebase_apikey",
  appId: "1:125729684145:web:80292a02a9f5d2e9028090",
  measurementId: "G-91SDY6YER3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
