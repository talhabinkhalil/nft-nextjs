import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myCollections: [],
};

export const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setMyCollectionsSlice: (state, { payload }) => {
      state.myCollections = payload;
    },
  },
});

export const { setMyCollectionsSlice } = userDataSlice?.actions;

export default userDataSlice?.reducer;
