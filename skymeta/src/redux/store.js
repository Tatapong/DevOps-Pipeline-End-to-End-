"use client"

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./reducers/language";
import countReducer from "./reducers/count";



const Store = configureStore({
  reducer: {
    languageReducer,
    countReducer
  }
});

export default Store;
