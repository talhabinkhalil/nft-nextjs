import React, { useEffect, useState } from 'react';
import useListingsMP from './useListingsMP';
import isEmpty from '../../utils/isEmpty';

const useDirectMpListings = () => {
  const { allListings, isLoading } = useListingsMP();
  const [directItems, setDirectItems] = useState([]);

  useEffect(() => {
    if (!isEmpty(allListings)) {
      const filteredData = allListings.filter((listing) => listing.type == 0);
      setDirectItems(filteredData);
    }
  }, [JSON.stringify(allListings)]);

  return { isLoading, directItems };
};

export default useDirectMpListings;
