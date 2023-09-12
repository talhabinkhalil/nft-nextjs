import React, { useEffect } from 'react';
import NftItemCardLoader from '../Loaders/NftItemCardLoader';
import AllCollectionCardsLoader from '../Loaders/AllCollectionCardsLoader';
import { useDispatch } from 'react-redux';
import useGetAddress from '../../hooks/thirdWeb-hooks/useGetAddress';
import useGetCollectedNfts from '../../hooks/redux-toolkit/useGetCollectedNfts';
import useLoading from '../../hooks/redux-toolkit/useLoading';
import useSecondaryLoading from '../../hooks/redux-toolkit/useSecondaryLoading';
import useGetAlchemyPaginationKey from '../../hooks/redux-toolkit/useGetAlchemyPaginationKey';
import isEmpty from '../../utils/isEmpty';
import { getNftsByAddress } from '../../../services/alchemy/getNftsByAddress';
import { clearCollectedData } from '../../../redux-toolkit/slices/profileSlice';
import { toast } from 'react-hot-toast';
import CollectionDetailCard from '../CollectionDetail/CollectionDetailCard';
import LoadMore from '../Common/LoadMore';
import { useContract } from '@thirdweb-dev/react';
import store from '../../../redux-toolkit/store';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import useProfileFilters from '../../hooks/redux-toolkit/useProfileFilters';

const CreatedCollected = () => {
  const dispatch = useDispatch();
  const { address } = useGetAddress();
  const { setFilters } = useProfileFilters();
  const { usersCollectedNftsMetaData, currentCollected } =
    useGetCollectedNfts();
  const { loading } = useLoading();
  const { secondaryLoading } = useSecondaryLoading();
  const alchemyKey = useGetAlchemyPaginationKey();

  // console.log(usersCollectedNftsMetaData, currentCollected);

  useEffect(() => {
    if (address) {
      if (isEmpty(currentCollected) && alchemyKey !== 'last') {
        //if current filtered Data is empty call next data
        dispatch(
          getNftsByAddress(address, alchemyKey, usersCollectedNftsMetaData)
        );
      }
    }
  }, [address, currentCollected]);

  useEffect(() => {
    return () => {
      dispatch(clearCollectedData());
    };
  }, []);

  const handleLoadMoreData = () => {
    if (alchemyKey === 'last') {
      toast.error('No more records are there');
    } else {
      dispatch(
        getNftsByAddress(address, alchemyKey, usersCollectedNftsMetaData)
      );
    }
  };

  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pt-10 pb-10">
        {loading ? (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        ) : isEmpty(usersCollectedNftsMetaData) ? (
          'No Records found'
        ) : (
          usersCollectedNftsMetaData.map((nft) => (
            <CollectionDetailCard data={nft} key={nft?.metadata?.id} />
          ))
        )}
        {secondaryLoading && (
          <AllCollectionCardsLoader LoaderComponent={<NftItemCardLoader />} />
        )}
      </div>
      <LoadMore onClickLoadMore={handleLoadMoreData} />
    </>
  );
};

export default CreatedCollected;
