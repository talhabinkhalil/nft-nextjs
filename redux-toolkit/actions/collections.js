import axios from 'axios';
import { api } from '../../services/axiosInstance/axiosInterceptor';
import { setMyCollectionsSlice } from '../slices/userDataSlice';

export const getMineCollections = () => (dispatch) => {
  api
    .get('/collection/mine')
    .then((res) => dispatch(setMyCollectionsSlice(res?.data?.collections)))
    .catch((err) => {});
};
