import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

const usuarios = [
  { email: 'antonella@gmail.com', password: 'Admin123', nombre: 'Antonella', sector: 'Soporte' },
  { email: 'jimena@gmail.com', password: 'Admin123', nombre: 'Jimena', sector: 'Gerencia' },
  { email: 'maia@gmail.com', password: 'Admin123', nombre: 'Maia', sector: 'Gerencia' },
  { email: 'abril@gmail.com', password: 'Admin123', nombre: 'Abril', sector: 'Soporte' },
  { email: 'guadalupe@gmail.com', password: 'Admin123', nombre: 'Guadalupe', sector: 'Soporte' },
  { email: 'lourdes@gmail.com', password: 'Admin123', nombre: 'Lourdes', sector: 'Gerencia' }
];

const seedUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Conectado a MongoDB');

        await User.deleteMany({});
        console.log('🗑️ Usuarios previos eliminados');

        for (const usuario of usuarios) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);
        }

        await User.insertMany(usuarios);
        console.log('✅ 6 usuarios insertados correctamente');

        await mongoose.disconnect();
        console.log('🔌 Desconectado de MongoDB')
    } catch (error) {
        console.error('❌ Error en seed:', error);
        process.exit(1)
    }
};

seedUsers();