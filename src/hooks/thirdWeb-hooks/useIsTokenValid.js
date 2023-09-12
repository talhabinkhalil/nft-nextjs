import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useIsTokenValid = () => {
  const state = useSelector((state) => state?.authSlice?.expiryTime);
  const token = useSelector((state) => state?.authSlice?.token);

  if (new Date() < new Date(state) && token) {
    return true;
  } else {
    return false;
  }
};

export default useIsTokenValid;
