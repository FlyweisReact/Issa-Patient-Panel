// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSzvoNrEDh-kGEsLBZh7Wqq23LYyWWjjM",
  authDomain: "oasisnotes-b6b25.firebaseapp.com",
  projectId: "oasisnotes-b6b25",
  storageBucket: "oasisnotes-b6b25.appspot.com",
  messagingSenderId: "125729684145",
  appId: "1:125729684145:web:80292a02a9f5d2e9028090",
  measurementId: "G-91SDY6YER3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();
