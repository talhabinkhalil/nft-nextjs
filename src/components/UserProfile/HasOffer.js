import React, { useEffect } from 'react';
import HasOffersProfile from './HasOffersProfile';
import HasOffersAuction from './HasOffersAuction';
import useGetActiveInactiveDropdown from '../../hooks/redux-toolkit/useGetActiveInactiveDropdown';
import isEmpty from '../../utils/isEmpty';
import useHasOfferDirectAuction from '../../hooks/redux-toolkit/useHasOfferDirectAuction';

const componentsToShow = {
  direct: <HasOffersProfile />,
  auction: <HasOffersAuction />,
};

const HasOffer = () => {
  const { activeInactive: selectedActiveInactive, changeFilter } =
    useGetActiveInactiveDropdown();
  const { hasOfferType, setHasOfferType } = useHasOfferDirectAuction();

  return <>{componentsToShow[hasOfferType]}</>;
};

export default HasOffer;
