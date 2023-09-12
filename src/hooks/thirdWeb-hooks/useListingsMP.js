import React, { useEffect } from 'react';
import useGetAddress from './useGetAddress';
import useGetMarketPlaceContract from './useGetMarketPlaceContract';
import { useListings } from '@thirdweb-dev/react';

const useListingsMP = () => {
  const { address } = useGetAddress();
  const mpContract = useGetMarketPlaceContract();
  const { data: allListings, isLoading } = useListings(mpContract, {
    seller: address,
  });

  return { allListings, isLoading };
};

export default useListingsMP;
