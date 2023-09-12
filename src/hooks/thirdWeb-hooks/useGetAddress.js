import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../../../redux-toolkit/slices/authSlice';
import { useMemo } from 'react';

const useGetAddress = () => {
  const addresses = useSelector((state) =>
    state?.authSlice?.address?.toLowerCase()
  );
  const address = useMemo(() => {
    return addresses;
  }, [addresses]);
  const dispatch = useDispatch();

  const setWalletAddress = (address) => {
    dispatch(setAddress(address));
  };

  const disconnectWallet = () => {
    dispatch(setAddress(''));
  };

  return { address, setWalletAddress, disconnectWallet };
};

export default useGetAddress;
