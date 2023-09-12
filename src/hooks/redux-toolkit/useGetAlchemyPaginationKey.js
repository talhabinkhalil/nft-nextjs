import { useSelector } from 'react-redux';

const useGetAlchemyPaginationKey = () => {
  const alchmeyKey = useSelector((state) => state?.profileSlice?.alchemyKey);
  return alchmeyKey;
};

export default useGetAlchemyPaginationKey;
