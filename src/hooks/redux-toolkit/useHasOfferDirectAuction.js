import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHasOfferDirectAuction } from '../../../redux-toolkit/slices/profileSlice';

const useHasOfferDirectAuction = () => {
  const dispatch = useDispatch();
  const hasOfferType = useSelector(
    (state) => state?.profileSlice.hasOfferDirectAuction
  );

  const setHasOfferType = (value) => {
    dispatch(setHasOfferDirectAuction(value));
  };

  return { hasOfferType, setHasOfferType };
};

export default useHasOfferDirectAuction;
