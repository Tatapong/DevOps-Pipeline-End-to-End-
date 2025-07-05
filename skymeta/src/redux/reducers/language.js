import { createReducer, createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import Cookies from "universal-cookie";

const cookie = new Cookies()

const initialState = {
  language: cookie.get("language")
    ? cookie.get("language")
    : "gb"
};

export const setLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
});

export const { setLanguage } = setLanguageSlice.actions;

export default setLanguageSlice.reducer;
