/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  isQuizOpen: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setDocumentID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setDocumentID } = chatSlice.actions;
export const fetchDocumentId = (state) => state.chat.id;

export default chatSlice.reducer;
