import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sdk: '',
  address: '',
  readSdk: '',
};

export const thirdWebConfigSlice = createSlice({
  name: 'thirdWebConf',
  initialState,
  reducers: {
    setSdk: (state, action) => {
      state.sdk = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action?.payload;
    },
    setReadSdk: (state, { payload }) => {
      state.readSdk = payload;
    },
  },
});

export const { setSdk, setAddress, setReadSdk } = thirdWebConfigSlice?.actions;

export default thirdWebConfigSlice?.reducer;
