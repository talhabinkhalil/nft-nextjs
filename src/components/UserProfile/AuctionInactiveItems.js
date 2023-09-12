import React, { useEffect } from 'react';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import useGetMarketPlaceContract from '../../hooks/thirdWeb-hooks/useGetMarketPlaceContract';
import { useListings } from '@thirdweb-dev/react';
import useAuctionInactive from '../../hooks/thirdWeb-hooks/useAuctionInactive';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import NftItemCardLoader from '../Loaders/NftItemCardLoader';
import LoadMore from '../Common/LoadMore';
import isEmpty from '../../utils/isEmpty';
import CollectionDetailCard from '../CollectionDetail/CollectionDetailCard';

const OnAuctionInactive = () => {
  const { inActiveAuctionItems, isLoading } = useAuctionInactive();

  const handleLoadMoreData = () => {
    // console.log('adasd');
  };
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
        {isLoading ? (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        ) : isEmpty(inActiveAuctionItems) ? (
          'No Records found'
        ) : (
          inActiveAuctionItems.map((nft, index) => (
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

export default OnAuctionInactive;
