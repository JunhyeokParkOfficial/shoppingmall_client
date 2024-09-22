import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  role: "",
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    login_success: (state, action) => {
      state.isLoggedIn = true;
      state.role = "MEMBER";
    },
    login_success_admin: (state, action) => {
      state.isLoggedIn = true;
      state.role = "ADMIN";
    },
    remove_userInfo: (state) => {
      state.isLoggedIn = false;
      state.role = "";
    },
  },
});


export const { login_success, login_success_admin, remove_userInfo } = authReducer.actions;
export {authReducer};


