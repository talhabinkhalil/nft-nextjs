import React, { useEffect, useState } from 'react';
import useGetAddress from './useGetAddress';
import useGetMarketPlaceContract from './useGetMarketPlaceContract';
import { useActiveListings, useListings } from '@thirdweb-dev/react';
import isEmpty from '../../utils/isEmpty';

const useAuctionActiveItems = () => {
  const { address } = useGetAddress();
  const mpContract = useGetMarketPlaceContract();
  const { data: activeListings, isLoading } = useActiveListings(mpContract, {
    seller: address,
    // count: 20,
    // start: 0,
  });

  const [activeAuctionItems, setActiveAuctionItems] = useState([]);

  useEffect(() => {
    if (!isEmpty(activeListings)) {
      const filteredInActive = activeListings.filter((data) => data.type == 1);

      setActiveAuctionItems(filteredInActive);
    }
  }, [JSON.stringify(activeListings)]);

  return { activeAuctionItems, isLoading };
};

export default useAuctionActiveItems;
