import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connectWallet: false,
  signToMetamask: false,
};

export const connectWalletSlice = createSlice({
  name: 'connectWallet',
  initialState,
  reducers: {
    openConnectWallet: (state) => {
      state.connectWallet = true;
    },
    closeConnectWallet: (state) => {
      state.connectWallet = false;
    },
    openSignToMetamask: (state) => {
      state.signToMetamask = true;
    },
    closeSignToMetamask: (state) => {
      state.signToMetamask = false;
    },
  },
});

export const {
  openConnectWallet,
  closeConnectWallet,
  openSignToMetamask,
  closeSignToMetamask,
} = connectWalletSlice?.actions;

export default connectWalletSlice?.reducer;
