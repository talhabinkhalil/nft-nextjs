import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDirectInActiveListings } from '../../../services/third-web/getInActiveDirectItems';

const useInactiveDirectItems = () => {
  const directInactive = useSelector(
    (state) => state.profileSlice.inActiveDirectItems
  );

  return directInactive;
};

export default useInactiveDirectItems;
