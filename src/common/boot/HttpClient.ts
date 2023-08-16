import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorage } from 'quasar';

const HttpClient = axios.create({
  baseURL: 'https://localhost:7239/api/', // 'http://localhost:8000/api'
});

HttpClient.interceptors.request.use((request: AxiosRequestConfig) => {
  if (request.url && !request.url.endsWith('login')) {
    request.headers.common.Authorization = `Bearer ${LocalStorage.getItem('construapp_user_token')}`;
  }
  return request;
});

export default HttpClient;
