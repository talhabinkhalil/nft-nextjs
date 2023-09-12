import React from 'react';
import useGetActiveInactiveDropdown from '../../hooks/redux-toolkit/useGetActiveInactiveDropdown';
import AuctionActiveListing from './AuctionActiveListing';
import OnAuctionInactive from './AuctionInactiveItems';

const showComponent = {
  Active: <AuctionActiveListing />,
  'In-Active': <OnAuctionInactive />,
};

const OnAuction = () => {
  const { activeInactive } = useGetActiveInactiveDropdown();

  return <>{showComponent[activeInactive]}</>;
};

export default OnAuction;
