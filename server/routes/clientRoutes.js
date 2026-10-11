import { Router } from 'express';
import {
  getClients,
  getClientById,
  createClient,
  deleteClient,
} from '../controllers/clientController.js';

const router = Router();

router.get('/', getClients);
router.get('/:id', getClientById);
router.post('/', createClient);
router.delete('/:id', deleteClient);

export default router;