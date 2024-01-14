import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getData: (state) => {
      return {
        ...state,
        loading: true,
      };
    },

    loadData: (state, action) => {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    },
  },
});

export const { getData, loadData } = userSlice.actions;
export default userSlice.reducer;
