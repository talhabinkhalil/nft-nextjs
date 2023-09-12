import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux-toolkit/actions/explore';
import store from '../../../redux-toolkit/store';

const useGetAllCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state?.exploreSlice?.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return categories;
};

export default useGetAllCategories;
