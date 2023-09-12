import store from '../../redux-toolkit/store';
import {
  startApiLoading,
  stopApiLoading,
  startSecondaryLoading,
  stopSecondaryLoading,
} from '../../redux-toolkit/slices/loadingSlice';

const startPrimaryLoadingFunc = () => {
  store.dispatch(startApiLoading());
};
const stopPrimaryLoadingFunc = () => {
  store.dispatch(stopApiLoading());
};
const startSeconadaryLoadingFunc = () => {
  store.dispatch(startSecondaryLoading());
};
const stopSeconadaryLoadingFunc = () => {
  store.dispatch(stopSecondaryLoading());
};

export {
  startPrimaryLoadingFunc,
  startSeconadaryLoadingFunc,
  stopPrimaryLoadingFunc,
  stopSeconadaryLoadingFunc,
};
