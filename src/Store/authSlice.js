/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { SignInFirebase } from "../utils/utils";

const savedData = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: savedData ? true : false,
    userProfile: savedData ? savedData : {},
    firebaseUser: {},
  },
  reducers: {
    LoginSlice: (state, action) => {
      state.isAuthenticated = true;
      state.userProfile = action?.payload?.profile?.data;
      localStorage.setItem(
        "user",
        JSON.stringify(action?.payload?.profile?.data)
      );
      localStorage.setItem("token", action?.payload?.profile?.accessToken);
      SignInFirebase({
        payload: action?.payload?.payload,
        setUser: state.firebaseUser,
      });
    },
    UpdateUserProfile: (state, action) => {
      state.userProfile = action?.payload;
      localStorage.setItem(
        "user",
        JSON.stringify(action?.payload)
      );
    },
    LOGOUT: (state) => {
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { LoginSlice, LOGOUT, UpdateUserProfile } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const userProfile = (state) => state.auth.userProfile;
export const firebaseUser = (state) => state.auth.userProfile;

export default authSlice.reducer;
