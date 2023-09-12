import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeSignToMetamask,
  openSignToMetamask,
} from '../../../redux-toolkit/slices/ModalSlices';

const useGetSignModalStates = () => {
  const isSignModalOpen = useSelector(
    (state) => state?.modalSlice?.signToMetamask
  );
  const dispatch = useDispatch();

  const showSignToMetamask = () => {
    dispatch(openSignToMetamask());
  };
  const hideSignToMetamask = () => {
    dispatch(closeSignToMetamask());
  };

  return { isSignModalOpen, showSignToMetamask, hideSignToMetamask };
};

export default useGetSignModalStates;
