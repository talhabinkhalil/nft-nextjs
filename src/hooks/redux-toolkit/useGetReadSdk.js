import { useSelector } from 'react-redux';

const useGetReadSdk = () => {
  const state = useSelector((state) => state?.thirdWebConfigSlice?.readSdk);
  return state;
};

export default useGetReadSdk;
