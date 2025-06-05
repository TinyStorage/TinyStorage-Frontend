import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://tiny-storage.online/api',
  withCredentials: true,
});

httpClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);

export default httpClient;
