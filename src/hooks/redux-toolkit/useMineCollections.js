import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMineCollections } from '../../../redux-toolkit/actions/collections';

const useMineCollections = () => {
  const dispatch = useDispatch();
  const mineCollections = useSelector(
    (state) => state?.userDataSlice.myCollections
  );

  const getMyCollections = () => {
    dispatch(getMineCollections());
  };

  useEffect(() => {
    getMyCollections();
  }, []);

  return { mineCollections, getMyCollections }; // so that we can call function manually
};

export default useMineCollections;
