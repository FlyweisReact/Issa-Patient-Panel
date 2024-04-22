/** @format */
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { auth } from "../firebase";
  

  // Chat Firebase
  
  export const SignInFirebase = ({ payload, setUser }) => {
    const { email, password } = payload;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser = userCredential.user;
        console.log("user signed", userCredential);
      })
      .catch((error) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-credential"
        ) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              setUser = userCredential.user;
              console.log("user created", userCredential);
            })
            .catch((error) => {
              console.error("Error creating account:", error);
            });
        } else {
          console.error("Error signing in:", error);
        }
      });
  };

  // mm/dd/yyyy
export const DateFormtter = (date) => {
  const originalDate = new Date(date);
  const timezoneOffset = originalDate?.getTimezoneOffset();
  const adjustedTime = new Date(
    originalDate?.getTime() + timezoneOffset * 60000
  );
  const year = adjustedTime?.getFullYear();
  const month = adjustedTime?.getMonth() + 1;
  const day = adjustedTime?.getDate();

  return `${month < 10 ? `0${month}` : month}/${
    day < 10 ? `0${day}` : day
  }/${year}`;
};

  