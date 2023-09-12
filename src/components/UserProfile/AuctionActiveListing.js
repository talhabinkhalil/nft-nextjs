import React from 'react';
import useGetMarketPlaceContract from '../../hooks/thirdWeb-hooks/useGetMarketPlaceContract';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import useAuctionActiveItems from '../../hooks/thirdWeb-hooks/useAuctionActiveItems';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import NftItemCardLoader from '../Loaders/NftItemCardLoader';
import isEmpty from '../../utils/isEmpty';
import LoadMore from '../Common/LoadMore';
import CollectionDetailCard from '../CollectionDetail/CollectionDetailCard';

const AuctionActiveListing = () => {
  const { activeAuctionItems, isLoading } = useAuctionActiveItems();

  const handleLoadMoreData = () => {};
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
        {isLoading ? (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        ) : isEmpty(activeAuctionItems) ? (
          'No Records found'
        ) : (
          activeAuctionItems.map((nft, index) => (
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
};

export default AuctionActiveListing;
