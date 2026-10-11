# API Contract — TP02 LyEP 2026

## Base URL: `http://localhost:3001/api`

### Autenticación
| Método | Ruta | Body | Respuesta |
|---|---|---|---|
| POST | `/auth/login` | `{ email, password }` | `{ token, usuario: { nombre, email, sector } }` |

### Clientes (requiere JWT en header Authorization: Bearer <token>)
| Método | Ruta | Body | Respuesta |
|---|---|---|---|
| GET | `/clients` | — | `[Client]` |
| GET | `/clients/:id` | — | `Client` |
| POST | `/clients` | `Client` | `Client (created)` |
| DELETE | `/clients/:id` | — | `{ message, id }` |