import axios from 'axios';

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

fetcher.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('access-token');

    // if (token !== null) {
    //   config.headers.Authorization =
    //     'Bearer ' + localStorage.getItem('access-token');
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
