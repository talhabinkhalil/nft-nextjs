import { toast } from 'react-hot-toast';
import {
  setLoginData,
  setUserSessions,
} from '../../redux-toolkit/slices/authSlice';
import { authApi } from '../axiosInstance/axiosInterceptor';
import { thirdWebConfig } from '../../constants/ThirdWeb/config/config';
import { Goerli } from '@thirdweb-dev/chains';

export const login = async (data, dispatch, closeSignModal) => {
  // const date = new Date();

  // let expiryDate = new Date(date);
  // expiryDate.setMinutes(date.getMinutes() + 20);

  try {
    // const payload = await sdk?.auth?.login('optimusfox.com', {
    //   chainId: thirdWebConfig?.chainId,
    //   expirationTime: expiryDate,
    // });

    // console.log(payload);

    // const payload = await sdk?.login({
    //   chainId: Goerli,
    //   domain: 'optimusfox.com',
    //   expirationTime: expiryDate,
    //   uri: 'www.optimusfox.com',
    // });
    // console.log('payload', payload);

    await authApi
      .post('/auth/login', { payload: { ...data } })
      .then((res) => {
        console.log(res, data);
        dispatch(
          setLoginData({
            address: data?.payload?.address.toLowerCase(),
            token: res?.data?.token,
            expiryTime: new Date(data?.payload?.expiration_time),
          })
        );
        dispatch(
          setUserSessions({
            token: res?.data?.token,
            expiryTime: new Date(data?.payload?.expiration_time),
            address: data?.payload?.address.toLowerCase(),
          })
        );
        closeSignModal();
        // dispatch(setUser(res?.data));
        // dispatch(setToken(res?.data?.token));
        // dispatch(
        //   setAddress(res?.data?.user?.metaMaskAddress?.toLocaleLowerCase())
        // );
        // dispatch(setExpiryTime(expiryDate));
        // dispatch(
        //   setUserSessions({
        //     token: res?.data?.token,
        //     expiryTime: expiryDate,
        //     address: res?.data?.user?.metaMaskAddress?.toLocaleLowerCase(),
        //   })
        // );
        // dispatch(setExpiryTime(expiryDate));
        // closeSignModal();
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
