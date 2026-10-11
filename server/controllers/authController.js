import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// POST /api/auth/login
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Comparar contraseña hasheada
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar JWT (expira en 8 horas)
    const token = jwt.sign(
      { id: user._id, email: user.email, nombre: user.nombre, sector: user.sector },
      process.env.JWT_SECRET,
      { expiresIn: '8h' }
    );

    // Responder con token y datos del usuario
    res.json({
      token,
      usuario: {
        nombre: user.nombre,
        email: user.email,
        sector: user.sector,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error del servidor', error: error.message });
  }
};