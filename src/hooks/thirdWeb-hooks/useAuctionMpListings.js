import React, { useEffect, useState } from 'react';
import useListingsMP from './useListingsMP';
import isEmpty from '../../utils/isEmpty';

const useAuctionMpListings = () => {
  const { allListings, isLoading } = useListingsMP();
  const [directItems, setDirectItems] = useState([]);

  useEffect(() => {
    if (!isEmpty(allListings)) {
      const filteredData = allListings.filter((listing) => listing.type == 1);
      setDirectItems(filteredData);
    }
  }, [JSON.stringify(allListings)]);

  return { isLoading, directItems };
};

export default useAuctionMpListings;
