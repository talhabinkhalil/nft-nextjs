import React from 'react';
import useGetAddress from './useGetAddress';
import '../../utils/showWalletAddress';
import { showWalletAddress } from '../../utils/showWalletAddress';

const useGetShortAddress = () => {
  const address = useGetAddress();
  const addressToShow = showWalletAddress(address);
  return addressToShow;
};

export default useGetShortAddress;
