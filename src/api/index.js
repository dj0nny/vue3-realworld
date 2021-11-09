import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.realworld.io/api',
  timeout: '1000',
});

export default axiosInstance;
