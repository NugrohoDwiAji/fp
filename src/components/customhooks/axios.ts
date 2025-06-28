import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Base URL untuk API routes Next.js
  withCredentials: true, // Penting untuk mengirim/menerima cookie
});

export default axiosInstance;