# TP02 — Integración Backend con MongoDB Atlas y Panel de Clientes

**Cátedra:** Legislación y Ejercicio Profesional — 2026  
**Carrera:** Analista Programador Universitario — Facultad de Ingeniería (UNJu)

---

## 📌 Descripción del Proyecto

Este proyecto consiste en la evolución del Panel de Control de Clientes desarrollado previamente en React + Vite. En esta fase se reemplaza el consumo de la API pública de prueba (FakeStoreAPI) y la autenticación local hardcodeada por una **API REST propia construida con Node.js, Express y persistencia en base de datos real con MongoDB Atlas**, garantizando compatibilidad total con el frontend en producción sin alterar su comportamiento visual ni funcional.

### Funcionalidades Principales
- **Gestión de Clientes (CRUD):** Listar, obtener por ID, crear y eliminar clientes con persistencia en MongoDB.
- **Autenticación y Seguridad:** Autenticación de administradores mediante JSON Web Tokens (JWT) y contraseñas hasheadas con bcryptjs.
- **Panel Frontend Interactivo:** Navegación dinámica, métricas en Dashboard y protección de rutas con React Router Dom y Context API.

---

## 🏗️ Arquitectura del Repositorio

El repositorio está estructurado bajo un esquema monorepo que separa frontend y backend:

```text
TP02LyEP2026Grupo13/
├── client/                     # Frontend (React + Vite)
│   ├── src/                    # Componentes, vistas, servicios y contexto
│   ├── .env                    # Configuración de variables de entorno frontend
│   └── package.json
│
├── server/                     # Backend (Node.js + Express + MongoDB)
│   ├── config/                 # Conexión a MongoDB Atlas
│   ├── controllers/            # Controladores (clientes, autenticación)
│   ├── documents/              # Documentación técnica (API Contract)
│   ├── middleware/             # Middlewares (CORS, validación JWT)
│   ├── models/                 # Modelos de datos Mongoose (Client, User)
│   ├── routes/                 # Rutas de la API (/api/clients, /api/auth)
│   ├── seeds/                  # Scripts de carga inicial de datos
│   ├── .env.example            # Plantilla de variables de entorno backend
│   └── package.json
│
├── .gitignore                  # Configuración global de exclusiones de Git
└── README.md
```

---

## 🚀 Tecnologías Utilizadas

### Frontend (`client/`)
- **React 18** + **Vite**
- **React Router Dom**
- **Axios** (cliente HTTP e interceptores JWT)
- **Tailwind CSS / Lucide React**

### Backend (`server/`)
- **Node.js** (ES Modules)
- **Express**
- **Mongoose** (ODM para MongoDB Atlas)
- **JSON Web Token (jsonwebtoken)**
- **Bcryptjs**
- **Dotenv** & **CORS**

---

## ⚙️ Configuración y Puesta en Marcha Local

### 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd ProyectoLyEP2026-main
```

### 2. Configurar y levantar el Backend (`server/`)
```bash
cd server
npm install
```

Crear el archivo `.env` dentro de `server/` tomando como base `.env.example`:
```env
PORT=3001
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/tp02lyep2026?retryWrites=true&w=majority
JWT_SECRET=tu_clave_secreta_aqui
```

Ejecutar script de seed para cargar usuarios iniciales:
```bash
npm run seed
```

Iniciar servidor en modo desarrollo:
```bash
npm run dev
# Servidor escuchando en: http://localhost:3001
```

### 3. Configurar y levantar el Frontend (`client/`)
En otra terminal:
```bash
cd client
npm install
npm run dev
# Frontend disponible en: http://localhost:5173
```

---

## 🌿 Flujo de Trabajo y Git Obligatorio

Para mantener el orden de desarrollo y la trazabilidad del equipo:

1. **Ramas de trabajo:** Trabajar siempre en ramas dedicadas creadas a partir de `main` actualizado:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/ApellidoNombre
   ```
2. **Commits semánticos:** Realizar commits atómicos y descriptivos (`feat:`, `fix:`, `chore:`, etc.). Mínimo 2 commits por feature.
3. **Pull Requests (PR):** Todo merge a `main` se realiza mediante PR documentado con:
   - Resumen del cambio (qué y por qué).
   - Lista de archivos modificados.
   - Pasos para probarlo.
   - Declaratoria de uso de IA según la pauta de cátedra.
4. **Protección de secretos:** Queda terminantemente prohibido commitear credenciales o archivos `server/.env` reales.

---

## 📄 Licencia y Créditos

Este proyecto se distribuye bajo los términos de la **Licencia MIT**.

- **Frontend Base:** Desarrollado por la cátedra de Programación Visual / LyEP (FI UNJu) — Copyright (c) 2026 gustso.
- **Mejoras, Backend y Adaptaciones:** Desarrollado por el equipo de estudiantes (Grupo 13) — LyEP 2026.
- **Material Pedagógico y Documentación:** Bajo [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

Consulte el archivo `client/LICENSE` para más detalles sobre los términos de la licencia.
