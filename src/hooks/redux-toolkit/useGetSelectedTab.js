import React from 'react';
import { useSelector } from 'react-redux';

const useGetSelectedTab = () => {
  const tab = useSelector((state) => state?.profileSlice.selectedTab);
  return tab;
};

export default useGetSelectedTab;
