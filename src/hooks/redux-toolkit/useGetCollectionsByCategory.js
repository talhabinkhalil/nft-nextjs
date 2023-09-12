import { useSelector } from 'react-redux';

const useGetCollectionsByCategory = () => {
  const collections = useSelector(
    (state) => state?.exploreSlice?.collectionsByCategory
  );

  return collections;
};

export default useGetCollectionsByCategory;
