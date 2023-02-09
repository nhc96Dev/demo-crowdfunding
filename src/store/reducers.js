import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";

export const reducer = combineReducers({
  auth: authSlice,
});
