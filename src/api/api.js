// src/api/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://application-nr4q.onrender.com', // adjust the URL/port if needed
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export default api;
