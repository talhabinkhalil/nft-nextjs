import { useSelector } from 'react-redux';

const useGetSdk = () => {
  const sdk = useSelector((state) => state?.thirdWebConfigSlice?.sdk);

  return sdk;
};

export default useGetSdk;
