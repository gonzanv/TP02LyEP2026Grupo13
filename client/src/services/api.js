import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000
});

// Interceptor: agregar token JWT a cada request
api.interceptors.request.use((config) => {
    const admin = localStorage.getItem('admin');
    if (admin) {
        try {
            const { token } = JSON.parse(admin);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch {
            // Token corrupto, ignorar
        }
    }
    return config;
});

export default api;