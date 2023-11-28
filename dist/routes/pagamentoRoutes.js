"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pagamentoControllers_1 = require("../controllers/pagamentoControllers");
const router = express_1.default.Router();
const pagamentoController = new pagamentoControllers_1.PagamentoController();
router.get('/:data', pagamentoController.getPagamentosByDate);
router.get('/:id', pagamentoController.getPagamentosById);
exports.default = router;
