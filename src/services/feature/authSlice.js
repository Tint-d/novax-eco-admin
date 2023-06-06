import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    removeUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
