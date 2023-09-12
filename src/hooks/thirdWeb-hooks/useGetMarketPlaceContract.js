import React, { useEffect, useState } from 'react';
import useGetSdk from '../redux-toolkit/useGetSdk';
import { thirdWebConfig } from '../../../constants/ThirdWeb/config/config';
import { marketPlaceObjectFunc } from '../../utils/useMarketPlaceObject';

const useGetMarketPlaceContract = () => {
  const [mpContract, setMpContract] = useState(null);

  const getContractObject = async () => {
    const marketPlaceContract = await marketPlaceObjectFunc();
    setMpContract(marketPlaceContract);
    return marketPlaceContract;
  };

  useEffect(() => {
    getContractObject();
  }, []);
  return mpContract;
};

export default useGetMarketPlaceContract;
