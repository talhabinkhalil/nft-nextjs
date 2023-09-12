import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  token: '',
  expiryTime: '',
  userSessions: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action?.payload?.toLowerCase();
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoginData: (state, { payload }) => {
      state.address = payload?.address.toLowerCase();
      state.token = payload?.token;
      state.expiryTime = payload?.expiryTime;
    },
    setExpiryTime: (state, { payload }) => {
      state.expiryTime = payload;
    },
    destroyToken: (state, { payload }) => {
      state.token = '';
      state.expiryTime = '';
    },
    setUserSessions: (state, { payload }) => {
      state.userSessions = {
        ...state.userSessions,
        [`${payload.address?.toLowerCase()}`]: {
          token: payload.token,
          expiryTime: payload.expiryTime,
        },
      };
    },
    deleteUserSession: (state, { payload }) => {
      const data = state.userSessions;
      delete data[payload];
      state.userSessions = data;
    },
  },
});

export const {
  setAddress,
  deleteUserSession,
  setLoginData,
  setToken,
  setExpiryTime,
  setUserSessions,
  destroyToken,
} = authSlice?.actions;

export default authSlice?.reducer;
