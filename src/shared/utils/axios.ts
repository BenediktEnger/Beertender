import axios from 'axios';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });
console.log(`env URL: ${import.meta.env.VITE_API_BASE_URL}`);
export default axiosInstance;
