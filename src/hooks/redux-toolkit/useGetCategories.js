import React from 'react';
import store from '../../../redux-toolkit/store';
import { useSelector } from 'react-redux';

const useGetCategories = () => {
  const { categories, categoriesIdName } = useSelector(
    (state) => state?.exploreSlice
  );

  return { categories, categoriesIdName };
};

export default useGetCategories;
