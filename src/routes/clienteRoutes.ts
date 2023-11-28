import express from 'express';
import { ClienteController } from '../controllers/clienteControllers';

const router = express.Router();
const clienteController = new ClienteController();

router.get('/', clienteController.getAllClientes);
router.get('/:id', clienteController.getClienteById);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

export default router;