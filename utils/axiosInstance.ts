import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'api-key': process.env.NEXT_PUBLIC_API_KEY
  }
});

export default axiosInstance;
