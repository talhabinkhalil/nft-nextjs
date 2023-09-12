import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ModalSlices from './slices/ModalSlices';
import thirdWebConfigSlice from './slices/thirdWebConfigSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import exploreSlice from './slices/exploreSlice';
import loadingSlice from './slices/loadingSlice';
import profileSlice from './slices/profileSlice';
import userDataSlice from './slices/userDataSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const authSlice = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    authSlice,
    thirdWebConfigSlice: thirdWebConfigSlice,
    modalSlice: ModalSlices,
    exploreSlice: exploreSlice,
    loadingSlice: loadingSlice,
    profileSlice: profileSlice,
    userDataSlice: userDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
