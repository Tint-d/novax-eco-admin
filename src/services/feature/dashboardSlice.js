import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: false
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addTheme: state => {
        state.isOpened = true;
    }
  },
});

export const {addTheme} = dashboardSlice.actions
export default dashboardSlice.reducer
