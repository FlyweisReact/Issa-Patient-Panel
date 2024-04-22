/** @format */

import { configureStore } from "@reduxjs/toolkit";
import chat from "./chatSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    chat,
    auth: authSlice,
  },
});
