import express from 'express';
import dotenv from 'dotenv';
import { corsMiddleware } from './middleware/cors.js';
import connectDB from './config/db.js';
// TODO: descomentar cuando Integrante 3 (clientRoutes) e Integrante 4 (authRoutes) mergeen sus ramas
import clientRoutes from './routes/clientRoutes.js';
//import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Rutas
// TODO: descomentar junto con los imports de arriba
app.use('/api/clients', clientRoutes); 
//app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Conexión a DB e inicio del servidor
connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    });
});