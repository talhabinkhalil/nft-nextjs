import React, { useEffect, useState } from 'react';
import useGetMarketPlaceContract from '../../hooks/thirdWeb-hooks/useGetMarketPlaceContract';
import { useActiveListings } from '@thirdweb-dev/react';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import { ListingType } from '@thirdweb-dev/sdk';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import NftItemCardLoader from '../Loaders/NftItemCardLoader';
import LoadMore from '../Common/LoadMore';
import isEmpty from '../../utils/isEmpty';
import CollectionDetailCard from '../CollectionDetail/CollectionDetailCard';
import useProfileFilters from '../../hooks/redux-toolkit/useProfileFilters';
import { getDirectInActiveListings } from '../../../services/third-web/getInActiveDirectItems';
import useInactiveDirectItems from '../../hooks/redux-toolkit/useInactiveDirectItems';
import useGetActiveInactiveDropdown from '../../hooks/redux-toolkit/useGetActiveInactiveDropdown';
import useLoading from '../../hooks/redux-toolkit/useLoading';
import OnAuctionInactive from './AuctionInactiveItems';
import OnAuction from './OnAuction';
import MintedItemsProfile from './HasOffersProfile';

const ActiveListings = () => {
  const { address } = useGetAddress();
  const { filters } = useProfileFilters();
  const { activeInactive } = useGetActiveInactiveDropdown();
  const directInactive = useInactiveDirectItems();
  const { loading, startLoading, stopLoading } = useLoading();

  const mpContract = useGetMarketPlaceContract();
  const { data: activeListings, isLoading } = useActiveListings(mpContract, {
    seller: address,
    // count: 20,
    // start: 0,
  });

  const [buyNow, setBuyNow] = useState([]);

  const handleLoadMoreData = () => {
    // console.log('ASdasdsad');
  };

  useEffect(() => {
    if (!isEmpty(activeListings)) {
      if (filters == 'buyNow') {
        if (activeInactive == 'Active' || isEmpty(activeInactive)) {
          const filtered = activeListings?.filter((f) => f.type === 0);
          setBuyNow(filtered);
        } else {
          startLoading();
          getDirectInActiveListings();
          stopLoading();
          setBuyNow(directInactive);
        }
      }
    }
  }, [
    filters,
    JSON.stringify(activeInactive),
    JSON.stringify(activeListings),
    directInactive,
  ]);

  if (filters == 'buyNow') {
    return (
      <div>
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
          {isLoading || loading ? (
            <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
          ) : isEmpty(buyNow) ? (
            'No Records found'
          ) : (
            buyNow.map((nft, index) => (
              <CollectionDetailCard data={nft} key={index} />
            ))
          )}
          {/* {secondaryLoading && (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        )} */}
        </div>
        <LoadMore onClickLoadMore={handleLoadMoreData} />
      </div>
    );
  } else if (filters == 'onAuction') {
    <OnAuction />;
  } else if (isEmpty(filters)) {
    return (
      <div>
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
          {isLoading ? (
            <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
          ) : isEmpty(activeListings) ? (
            'No Records found'
          ) : (
            activeListings.map((nft, index) => (
              <CollectionDetailCard data={nft} key={index} />
            ))
          )}
          {/* {secondaryLoading && (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        )} */}
        </div>
        <LoadMore onClickLoadMore={handleLoadMoreData} />
      </div>
    );
  }
};

export default ActiveListings;
