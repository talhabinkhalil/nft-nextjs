import React from 'react';
import useGetAddress from './useGetAddress';
import useGetMarketPlaceContract from './useGetMarketPlaceContract';
import { useActiveListings } from '@thirdweb-dev/react';

const useMpActiveListing = () => {
  const { address } = useGetAddress();
  const mpContract = useGetMarketPlaceContract();
  const { data: activeListings, isLoading } = useActiveListings(mpContract, {
    seller: address,
  });

  return { activeListings, isLoading };
};

export default useMpActiveListing;
