import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosError } from 'axios';

const mockInterceptor = axios.create();

mockInterceptor.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default mockInterceptor;
