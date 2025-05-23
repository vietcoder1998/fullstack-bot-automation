import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Base URL from environment variables
  timeout: 10000, // Set a timeout for requests
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add custom headers or modify the request here
    const token = localStorage.getItem('token'); // Example: get token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data; // Return only the data from the response
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;