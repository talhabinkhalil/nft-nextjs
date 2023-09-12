import React from 'react';
import store from '../../../redux-toolkit/store';
import { useSelector } from 'react-redux';

const useGetCollectedNfts = () => {
  const { usersCollectedNftsMetaData, currentCollected } = useSelector(
    (state) => state?.profileSlice
  );

  return { usersCollectedNftsMetaData, currentCollected };
};

export default useGetCollectedNfts;
