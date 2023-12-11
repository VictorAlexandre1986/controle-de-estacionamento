import express from 'express';
import { PagamentoController } from '../controllers/pagamentoControllers';

const router = express.Router();
const pagamentoController = new PagamentoController();

router.get('/:id', pagamentoController.getPagamentoById);
router.get('/data/:data', pagamentoController.getPagamentoByDate);


export default router;