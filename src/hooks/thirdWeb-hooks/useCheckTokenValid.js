import React from 'react';
import useGetAddress from './useGetAddress';
import useGetAuthData from './useGetAuthData';
import { isTokenValid } from '../../utils/isTokenValid';
import {
  deleteUserSession,
  destroyToken,
} from '../../../redux-toolkit/slices/authSlice';
import { useDispatch } from 'react-redux';
import useGetSignModalStates from '../redux-toolkit/useGetSignModalStates';
import { toast } from 'react-hot-toast';

const useCheckTokenValid = () => {
  const { address } = useGetAddress();
  const { userSessions } = useGetAuthData();
  const dispatch = useDispatch();
  const { showSignToMetamask } = useGetSignModalStates();

  const checkTokenValid = () => {
    if (address) {
      if (userSessions[`${address.toLowerCase()}`]) {
        const validToken = isTokenValid(userSessions[`${address}`].expiryTime);
        if (validToken) {
          return true;
        } else {
          toast.error('Please sign to metamask');
          dispatch(deleteUserSession(address));
          showSignToMetamask();
          dispatch(destroyToken());
          return false;
        }
      } else {
        showSignToMetamask();
        return false;
      }
    }
  };

  return checkTokenValid;
};

export default useCheckTokenValid;
