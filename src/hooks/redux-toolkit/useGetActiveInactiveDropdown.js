import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../redux-toolkit/store';
import { setActiveInactive } from '../../../redux-toolkit/slices/profileSlice';

const useGetActiveInactiveDropdown = () => {
  const activeInactive = useSelector(
    (state) => state.profileSlice.activeInactive
  );
  const dispatch = useDispatch();

  const changeFilter = (value) => {
    dispatch(setActiveInactive(value));
  };

  return { activeInactive, changeFilter };
};

export default useGetActiveInactiveDropdown;
