import React, { useEffect, useState } from 'react';
import useGetAddress from './useGetAddress';
import useGetMarketPlaceContract from './useGetMarketPlaceContract';
import { useListings } from '@thirdweb-dev/react';
import isEmpty from '../../utils/isEmpty';

const useAuctionInactive = () => {
  const { address } = useGetAddress();
  const mpContract = useGetMarketPlaceContract();
  const { data: allListings, isLoading } = useListings(mpContract, {
    seller: address,
  });
  const [inActiveAuctionItems, setInActiveAuctionItems] = useState([]);

  useEffect(() => {
    if (!isEmpty(allListings)) {
      const filteredInActive = allListings.filter(
        (data) =>
          new Date(data?.endTimeInEpochSeconds?._hex * 1000) < new Date()
      );

      setInActiveAuctionItems(filteredInActive);
    }
  }, [JSON.stringify(allListings)]);

  return { inActiveAuctionItems, isLoading };
};

export default useAuctionInactive;
