import React, { useEffect, useState } from 'react';
import useMpActiveListing from './useMpActiveListing';
import isEmpty from '../../utils/isEmpty';

const useDirectActiveListings = () => {
  const { activeListings, isLoading } = useMpActiveListing();
  const [directActive, setDirectActive] = useState([]);

  useEffect(() => {
    if (!isEmpty(activeListings)) {
      const direct = activeListings?.filter(
        (active) =>
          active.type === 0 &&
          new Date() < new Date(active?.secondsUntilEnd?._hex * 1000)
      );
      setDirectActive(direct);
    }
  }, [JSON.stringify(activeListings)]);

  return { directActive, isLoading };
};

export default useDirectActiveListings;
