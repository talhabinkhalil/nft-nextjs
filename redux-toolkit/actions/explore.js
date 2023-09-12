import { api } from '../../services/axiosInstance/axiosInterceptor';
import {
  setCategories,
  setCategoriesIdName,
  setCollectionsByCategory,
  setCurrentCateoryId,
  setTotalCollections,
} from '../slices/exploreSlice';
import {
  startSecondaryLoading,
  stopSecondaryLoading,
} from '../slices/loadingSlice';

export const getCollectionsByCategory =
  (id, page, isLoadMore = false) =>
  async (dispatch) => {
    try {
      isLoadMore && dispatch(startSecondaryLoading());
      api
        ?.get(`/category/collections/${id}?page=${page}&limit=10`, {
          PASSED_PARAM: isLoadMore,
        })
        .then((res) => {
          dispatch(setTotalCollections(res?.data?.collections?.other?.total));
          dispatch(
            setCollectionsByCategory({
              data: res?.data?.collections?.results,
              isLoadMore,
            })
          );
          isLoadMore && dispatch(stopSecondaryLoading());
        });
    } catch (error) {
      isLoadMore && dispatch(stopSecondaryLoading());
    }
  };

export const getAllCategories = () => (dispatch) => {
  const array = [];
  api
    .get('/category/all')
    .then((res) => {
      dispatch(setCategories(res?.data?.categories));
      dispatch(getCollectionsByCategory(res?.data?.categories[0]?.id, 1));
      dispatch(setCurrentCateoryId(res?.data?.categories[0]?.id));
      res?.data?.categories?.map((data) =>
        array.push({ value: data?.id, label: data?.name })
      );
      dispatch(setCategoriesIdName(array));
    })
    .catch((err) => console.log(err));
};

export const getCategories = () => (dispatch) => {
  api
    .get('/category/all')
    .then((res) => dispatch(setCategories(res?.data?.categories)))
    .catch((err) => console.log(err));
};
