import { useDispatch } from 'react-redux';
import useGetSignModalStates from '../redux-toolkit/useGetSignModalStates';
import { isTokenValid } from '../../utils/isTokenValid';
import {
  deleteUserSession,
  destroyToken,
  setAddress,
  setExpiryTime,
  setToken,
} from '../../../redux-toolkit/slices/authSlice';

const useUserSession = () => {
  const dispatch = useDispatch();
  const { hideSignToMetamask, isSignModalOpen, showSignToMetamask } =
    useGetSignModalStates();

  const checkUserSession = (address, userSessions) => {
    if (address) {
      if (userSessions[`${address.toLowerCase()}`]) {
        const validToken = isTokenValid(userSessions[`${address}`].expiryTime);

        if (validToken) {
          dispatch(setToken(userSessions[`${address}`].token));
          dispatch(setAddress(address));
          dispatch(setExpiryTime(userSessions[`${address}`].expiryTime));
        } else {
          dispatch(deleteUserSession(address));
          showSignToMetamask();
          dispatch(destroyToken());
        }
      } else if (userSessions[`${address}`] === undefined) {
        showSignToMetamask();
      }
    }
  };

  return checkUserSession;
};

export default useUserSession;
