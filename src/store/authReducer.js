import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  userId: -1, 
  role: "",
};

const initialState = {
  isLoggedIn: false,
  info: initUser,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    login_success: (state, action) => {
      state.isLoggedIn = true;
      //state.info.role = action.payload.authority[0].authorityStatus;
    },
    remove_userInfo: (state) => {
      state.isLoggedIn = false;
      state.info = initUser;
    },
  },
});


export const { login_success, remove_userInfo } = authReducer.actions;
export {authReducer};


