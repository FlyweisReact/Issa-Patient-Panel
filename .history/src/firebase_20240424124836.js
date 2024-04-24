/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.React_App_Firebase_apikey,
  authDomain: process.env.React_App_Firebase_authDomain,
  projectId: process.env.React_App_Firebase_apikey,
  storageBucket: process.env.React_App_Firebase_apikey,
  messagingSenderId: process.env.React_App_Firebase_apikey,
  appId: process.env.React_App_Firebase_apikey,
  measurementId: process.env.React_App_Firebase_apikey,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
