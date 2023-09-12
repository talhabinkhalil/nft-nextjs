// import { ChainId, useNetwork } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { thirdWebConfig } from '../../../constants/ThirdWeb/config/config';
import isEmpty from '../../utils/isEmpty';
import useGetSdk from '../redux-toolkit/useGetSdk';
import { ChainId, useNetwork, useNetworkMismatch } from '@thirdweb-dev/react';
import { Goerli } from '@thirdweb-dev/chains';

const useSwitchNetwork = () => {
  const [networkMismatch, setNetworkMismatch] = useState(false);
  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const sdk = useGetSdk();

  const isNetWorkMisMatched = async () => {
    try {
      const id = await sdk?.wallet?.getChainId();
      if (thirdWebConfig?.chainId !== id) {
        setNetworkMismatch(true);
        return true;
      } else {
        setNetworkMismatch(false);
        return false;
      }
    } catch (error) {
      console.log('ererr', error);
    }
  };

  const swithToTargetNetwork = () => {
    if (!isEmpty(sdk)) {
      if (isMismatched) {
        switchNetwork?.(ChainId.Goerli);
        // isNetWorkMisMatched();
        // await sdk?.wallet?.SwitchNetwork(targetNetwork);
        toast.error('Please switch network from metamask');
      }
    }
  };

  useEffect(() => {
    // isNetWorkMisMatched();
    swithToTargetNetwork();
  }, [sdk, networkMismatch]);

  return {
    networkMismatch: isMismatched,
    swithToTargetNetwork,
    isNetWorkMisMatched,
  };
};

export default useSwitchNetwork;
