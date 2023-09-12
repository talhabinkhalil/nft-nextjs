import axios from 'axios';
import {
  startApiLoading,
  stopApiLoading,
} from '../../redux-toolkit/slices/loadingSlice';
import store from '../../redux-toolkit/store';
// import { store } from '../reduxToolkit/store';
const REACT_APP_SERVER_URL = 'http://46.101.210.71:9004/api';
const REACT_APP_SERVER_URL_LOGIN = 'http://46.101.210.71:9004';

const BASE_URL = REACT_APP_SERVER_URL;

const authApi = axios.create({
  baseURL: REACT_APP_SERVER_URL_LOGIN,
});
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use((request) => {
  const token = store?.getState()?.authSlice?.token;
  if (!request.PASSED_PARAM) {
    store?.dispatch(startApiLoading());
  }
  request.headers.Authorization = token ? `Bearer ${token}` : '';
  return request;
});
api.interceptors.response.use(
  (response) => {
    store?.dispatch(stopApiLoading());
    return response;
  },
  (err) => {
    store?.dispatch(stopApiLoading());
    return Promise.reject(err);
  }
);

export { authApi, api };
