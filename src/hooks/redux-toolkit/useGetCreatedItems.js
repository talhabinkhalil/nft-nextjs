import React from 'react';
import store from '../../../redux-toolkit/store';
import { useSelector } from 'react-redux';

const useGetCreatedItems = () => {
  const state = useSelector((state) => state?.profileSlice.createdItems);

  return state;
};

export default useGetCreatedItems;
