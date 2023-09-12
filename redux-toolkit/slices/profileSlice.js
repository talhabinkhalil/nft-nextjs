import { createSlice } from '@reduxjs/toolkit';
import { connectWalletSlice } from './ModalSlices';
import isEmpty from '../../src/utils/isEmpty';

const initialState = {
  alchemyKey: '',
  usersCollectedNftsMetaData: [],
  currentCollected: [],
  selectedTab: 'collected',
  createdItems: {},
  profileFilters: '',
  activeInactive: 'Active',
  inActiveDirectItems: [],
  hasOfferDirectAuction: 'direct',
};

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setAlchemyKey: (state, { payload }) => {
      state.alchemyKey = payload;
    },
    setUsersCollectedNftsMetaData: (state, { payload }) => {
      if (isEmpty(state.usersCollectedNftsMetaData)) {
        state.usersCollectedNftsMetaData = payload;
      } else {
        state.usersCollectedNftsMetaData = [
          ...state.usersCollectedNftsMetaData,
          ...payload,
        ];
      }
      state.currentCollected = payload;
    },
    clearCollectedData: (state, { payload }) => {
      state.alchemyKey = '';
      state.usersCollectedNftsMetaData = [];
      state.currentCollected = [];
    },
    setCurrentSelectedTab: (state, { payload }) => {
      state.selectedTab = payload;
    },
    setCreatedItems: (state, { payload }) => {
      state.createdItems = [...state.createdItems, ...payload];
    },
    setProfileFilters: (state, { payload }) => {
      if (isEmpty(payload)) {
        state.profileFilters = '';
      } else {
        state.profileFilters = payload;
      }
    },
    setActiveInactive: (state, { payload }) => {
      state.activeInactive = payload;
    },
    setInActiveDirectItems: (state, { payload }) => {
      state.inActiveDirectItems = payload;
    },
    setHasOfferDirectAuction: (state, { payload }) => {
      state.hasOfferDirectAuction = payload;
    },
  },
});

export const {
  setAlchemyKey,
  setUsersCollectedNftsMetaData,
  clearCollectedData,
  setCurrentSelectedTab,
  setCreatedItems,
  setProfileFilters,
  setActiveInactive,
  setInActiveDirectItems,
  setHasOfferDirectAuction,
} = profileSlice.actions;

export default profileSlice?.reducer;
