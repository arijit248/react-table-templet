import { createSelector } from "@reduxjs/toolkit";

// import { initialState } from "./counterSlice";

const userSelect = (state) => state.user || {};

const makeSelectUser = () => createSelector(userSelect, (state) => state.users);

const makeSelectLoading = () =>
  createSelector(userSelect, (state) => state.loading);

export { userSelect, makeSelectUser, makeSelectLoading };
