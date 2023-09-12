import React from 'react';
import { useSelector } from 'react-redux';

const useGetToken = () => {
  const token = useSelector((state) => state?.authSlice?.token);

  return { token };
};

export default useGetToken;
