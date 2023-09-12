import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeConnectWallet,
  openConnectWallet,
} from '../../../redux-toolkit/slices/ModalSlices';

const useConnectWalletModalStates = () => {
  const isConnectWalletModalOpen = useSelector(
    (state) => state?.modalSlice?.connectWallet
  );
  const dispatch = useDispatch();

  const showConnectWallet = () => {
    dispatch(openConnectWallet());
  };

  const hideConnectWallet = () => {
    dispatch(closeConnectWallet());
  };

  return { isConnectWalletModalOpen, showConnectWallet, hideConnectWallet };
};

export default useConnectWalletModalStates;
