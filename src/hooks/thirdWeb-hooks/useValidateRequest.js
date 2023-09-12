import React from 'react';
import useSwitchNetwork from './useSwitchNetwork';
import useGetAddress from './useGetAddress';
import useGetAuthData from './useGetAuthData';
import useUserSession from './useUserSession';
import useCheckTokenValid from './useCheckTokenValid';
import { toast } from 'react-hot-toast';
import { useChainId } from '@thirdweb-dev/react';
import useGetSdk from '../redux-toolkit/useGetSdk';

const useValidateRequest = () => {
  const { networkMismatch, swithToTargetNetwork, isNetWorkMisMatched } =
    useSwitchNetwork();

  const checkTokenValid = useCheckTokenValid();

  const validateRequest = async (writeFunction) => {
    if (networkMismatch) {
      try {
        swithToTargetNetwork();
      } catch (error) {}
    } else {
      const isTokenValid = checkTokenValid();
      if (isTokenValid) {
        const result = await writeFunction();
        return result;
      }
    }
  };

  return validateRequest;
};

export default useValidateRequest;
