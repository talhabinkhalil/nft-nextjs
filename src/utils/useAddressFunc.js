import store from '../../redux-toolkit/store';

export const getAddressFunc = () => {
  return store.getState()?.authSlice.address.toLowerCase();
};
