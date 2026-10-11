import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Client from '../models/Client.js';

dotenv.config();

const clientes = [
  {
    email: 'maria.gomez@example.com',
    username: 'mariag',
    password: 'demo1234',
    name: { firstname: 'Maria', lastname: 'Gomez' },
    adress: { city: 'San Salvador de Jujuy', street: 'Alvear', number: 450, zipcode: '4600' },
    phone: 3884556677
  },
  {
    email: 'carlos.lopez@example.com',
    username: 'carlosl',
    password: 'demo1234',
    name: { firstname: 'Carlos', lastname: 'Lopez' },
    adress: { city: 'Palpala', street: 'San Martin', number: 88, zipcode: '4612' },
    phone: 3884112233
  },
  {
    email: 'lucia.fernandez@example.com',
    username: 'luciaf',
    password: 'demo1234',
    name: { firstname: 'Lucia', lastname: 'Fernandez' },
    adress: { city: 'San Pedro de Jujuy', street: 'Sarmiento', number: 215, zipcode: '4500' },
    phone: 3884778899
  }
];

const seedClients = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB');

        await Client.deleteMany({});
        console.log('🗑️ Clientes previos eliminados');

        await Client.insertMany(clientes);
        console.log(`✅ ${clientes.length} clientes insertados correctamente`);

        await mongoose.disconnect();
        console.log('🔌 Desconectado de MongoDB');
    } catch (error) {
        console.error('❌ Error en seed:', error);
        process.exit(1);
    }
};

seedClients();