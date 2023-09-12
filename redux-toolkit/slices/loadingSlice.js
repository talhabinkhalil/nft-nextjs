import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apiLoading: false,
  secondaryLoading: false,
};

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState,
  reducers: {
    startApiLoading: (state) => {
      state.apiLoading = true;
    },
    stopApiLoading: (state) => {
      state.apiLoading = false;
    },
    startSecondaryLoading: (state) => {
      state.secondaryLoading = true;
    },
    stopSecondaryLoading: (state) => {
      state.secondaryLoading = false;
    },
  },
});

export const {
  startApiLoading,
  stopApiLoading,
  startSecondaryLoading,
  stopSecondaryLoading,
} = loadingSlice?.actions;

export default loadingSlice?.reducer;
