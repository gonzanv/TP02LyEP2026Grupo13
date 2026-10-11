import api from './api';

const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data; // { token, usuario: { nombre, email, sector } }
};

export default { login };