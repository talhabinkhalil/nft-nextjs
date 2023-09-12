import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteUserSession,
  destroyToken,
  setAddress,
  setExpiryTime,
  setToken,
} from '../../../redux-toolkit/slices/authSlice';
import { isTokenValid } from '../../utils/isTokenValid';
import useGetSignModalStates from '../redux-toolkit/useGetSignModalStates';
import useGetAddress from './useGetAddress';
import useGetAuthData from './useGetAuthData';
import useUserSession from './useUserSession';

const useCheckSessions = () => {
  const { address } = useGetAddress();
  const { userSessions } = useGetAuthData();
  const checkUserSession = useUserSession();

  useEffect(() => {
    checkUserSession(address, userSessions);
  }, [address]);

  return checkUserSession;
};

export default useCheckSessions;
