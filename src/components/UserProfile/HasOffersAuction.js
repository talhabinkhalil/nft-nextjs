import React, { useState } from 'react';
import useAuctionMpListings from '../../hooks/thirdWeb-hooks/useAuctionMpListings';
import AuctionActiveListing from './AuctionActiveListing';
import useGetActiveInactiveDropdown from '../../hooks/redux-toolkit/useGetActiveInactiveDropdown';
import OnAuctionInactive from './AuctionInactiveItems';

const selected = 'bg-black';
const notSelected = 'bg-white text-black border';

const HasOffersAuction = () => {
  const { directItems, isLoading } = useAuctionMpListings();
  const { activeInactive: selectedActiveInactive, changeFilter } =
    useGetActiveInactiveDropdown();

  console.log('selectedActiveInactive', selectedActiveInactive);
  return (
    <>
      {selectedActiveInactive == 'Live' && <AuctionActiveListing />}
      {selectedActiveInactive == 'Completed' && <OnAuctionInactive />}
    </>
  );
};

export default HasOffersAuction;
