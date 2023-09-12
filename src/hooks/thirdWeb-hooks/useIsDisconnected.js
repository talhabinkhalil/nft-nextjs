import { useMetamask } from '@thirdweb-dev/react';
import React, { useMemo } from 'react';
import isEmpty from '../../utils/isEmpty';
import useGetAddress from './useGetAddress';
import useWindowObject from './useWindowObject';

const useIsDisconnected = () => {
  const window = useWindowObject();
  const { address, disconnectWallet, setWalletAddress } = useGetAddress();

  window?.ethereum?.on('accountsChanged', function (values) {
    if (isEmpty(values)) {
      disconnectWallet();
    } else {
      setWalletAddress(values[0]);
    }
  });
  // useMemo(() => {
  //   console.log(window.ethereum);
  // }, []);
};

export default useIsDisconnected;
