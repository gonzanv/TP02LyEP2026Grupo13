import api from './api';

const getClientes = async () => {
    const response = await api.get('/clients');
    return response.data;
};

const getClienteById = async (id) => {
    const response = await api.get(`/clients/${id}`);
    return response.data;
};

const crearCliente = async (cliente) => {
    const response = await api.post('/clients', cliente);
    return response.data;
};

const eliminarCliente = async (id) => {
    const response = await api.delete(`/clients/${id}`);
    return response.data;
};

export default { getClientes, getClienteById, crearCliente, eliminarCliente };