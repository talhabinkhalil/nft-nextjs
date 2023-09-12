import React, { useState } from 'react';
import useGetSdk from '../redux-toolkit/useGetSdk';
import { toast } from 'react-hot-toast';

const useGetContractObject = () => {
  const sdk = useGetSdk();
  const [contractObject, setContractObject] = useState({});

  const getContractObj = async (contractAddress) => {
    try {
      const contractObjectState = await sdk?.getContract(contractAddress);
      setContractObject(contractObjectState);
      return contractObjectState;
    } catch (error) {
      console.log(error.message);
      toast.error('Please try some other collection');
    }
  };
  return { getContractObj, contractObject };
};

export default useGetContractObject;
