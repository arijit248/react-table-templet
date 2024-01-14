import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../../sections/user/userSlice";

export default function createReducer() {
  return combineReducers({
    user: userReducer,
  });
}
