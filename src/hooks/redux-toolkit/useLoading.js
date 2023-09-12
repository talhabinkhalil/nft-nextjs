import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startApiLoading,
  stopApiLoading,
} from '../../../redux-toolkit/slices/loadingSlice';

const useLoading = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state?.loadingSlice?.apiLoading);

  const startLoading = () => {
    dispatch(startApiLoading());
  };

  const stopLoading = () => {
    dispatch(stopApiLoading());
  };

  return { loading, startLoading, stopLoading };
};

export default useLoading;
