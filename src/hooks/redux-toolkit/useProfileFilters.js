import { useDispatch, useSelector } from 'react-redux';
import { setProfileFilters } from '../../../redux-toolkit/slices/profileSlice';

const useProfileFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state?.profileSlice.profileFilters);

  const setFilters = (keyFilter, valueFilter) => {
    dispatch(setProfileFilters(keyFilter));
  };

  return { filters, setFilters };
};

export default useProfileFilters;
