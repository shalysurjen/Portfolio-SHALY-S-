import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// Response interceptor for consistent error handling
api.interceptors.response.use(
  res  => res.data,
  err  => {
    const msg = err?.response?.data?.message || 'Something went wrong. Please try again.';
    return Promise.reject(new Error(msg));
  }
);

export const submitContact = (data) => api.post('/contact', data);
export const getContacts   = ()     => api.get('/contact');
export const getContact    = (id)   => api.get(`/contact/${id}`);
export const deleteContact = (id)   => api.delete(`/contact/${id}`);

export default api;
