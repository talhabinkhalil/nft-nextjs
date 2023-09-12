import React from 'react';
import { useSelector } from 'react-redux';

const useGetAuthData = () => {
  const data = useSelector((state) => state?.authSlice);

  return {
    address: data?.address,
    userSessions: data?.userSessions,
    expiryDate: data?.expiryTime,
  };
};

export default useGetAuthData;
