import React from 'react';
import CreatedCollected from './CreatedCollected';
import useGetSelectedTab from '../../hooks/redux-toolkit/useGetSelectedTab';
import useProfileFilters from '../../hooks/redux-toolkit/useProfileFilters';
import isEmpty from '../../utils/isEmpty';
import ActiveListings from './ActiveListings';
import MintedItemsProfile from './HasOffersProfile';
import OnAuction from './OnAuction';
import HasOffer from './HasOffer';
import HasOffersProfile from './HasOffersProfile';

const filtersComponents = {
  buyNow: <ActiveListings />,
  minted: <CreatedCollected />,
  onAuction: <OnAuction />,
  hasOffers: <HasOffer />,
};

const Created = () => {
  const tab = useGetSelectedTab();
  const { filters } = useProfileFilters();
  console.log('filters', filters, tab);
  if (tab === 'created') {
    if (isEmpty(filters)) {
      return <ActiveListings />;
    } else {
      return <>{filtersComponents[filters]}</>;
    }
  }
};

export default Created;
