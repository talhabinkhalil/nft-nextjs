import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  categoriesIdName: [],
  collectionsByCategory: [],
  collectionPageNo: 1,
  totalCollections: '',
  currentCategoryId: '',
};

export const exploreSlice = createSlice({
  name: 'exploreSlice',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setCategoriesIdName: (state, { payload }) => {
      state.categoriesIdName = payload;
    },
    setCollectionsByCategory: (state, { payload }) => {
      if (payload.isLoadMore) {
        state.collectionsByCategory = [
          ...state.collectionsByCategory,
          ...payload.data,
        ];
      } else {
        state.collectionsByCategory = payload?.data;
      }
    },
    nextCollectionPage: (state, action) => {
      state.collectionPageNo = state.collectionPageNo + 1;
    },
    resetCollectionPage: (state) => {
      state.collectionPageNo = 1;
    },
    setTotalCollections: (state, { payload }) => {
      state.totalCollections = payload;
    },
    setCurrentCateoryId: (state, { payload }) => {
      state.currentCategoryId = payload;
    },
  },
});

export const {
  setCategories,
  setCategoriesIdName,
  setCollectionsByCategory,
  nextCollectionPage,
  resetCollectionPage,
  setTotalCollections,
  setCurrentCateoryId,
} = exploreSlice?.actions;

export default exploreSlice?.reducer;
