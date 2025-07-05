import { createReducer, createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import Cookies from "universal-cookie";

const cookie = new Cookies()

const initialState = {
  value: 0
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1 ;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = countSlice.actions;

export default countSlice.reducer;
