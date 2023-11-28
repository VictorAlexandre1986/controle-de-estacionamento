import express from 'express';
import { PagamentoController } from '../controllers/pagamentoControllers';

const router = express.Router();
const pagamentoController = new PagamentoController();

router.get('/:data', pagamentoController.getPagamentosByDate);
router.get('/:id', pagamentoController.getPagamentosById);


export default router;