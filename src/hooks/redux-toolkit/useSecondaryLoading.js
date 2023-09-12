import { useDispatch, useSelector } from 'react-redux';

const useSecondaryLoading = () => {
  const dispatch = useDispatch();
  const secondaryLoading = useSelector(
    (state) => state.loadingSlice?.secondaryLoading
  );

  const startSecondaryLoading = () => {
    dispatch(startSecondaryLoading());
  };

  const stopSecondaryLoading = () => {
    dispatch(stopSecondaryLoading());
  };

  return { secondaryLoading, startSecondaryLoading, stopSecondaryLoading };
};

export default useSecondaryLoading;
