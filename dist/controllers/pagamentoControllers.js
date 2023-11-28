"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoController = void 0;
const pagamentoUseCase_1 = require("../usecase/pagamentoUseCase");
const pagamentoUseCase = new pagamentoUseCase_1.PagamentoUseCase();
class PagamentoController {
    getPagamentosById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pagamento = yield pagamentoUseCase.getPagamentoById(Number(id));
            res.json(pagamento);
        });
    }
    getPagamentosByDate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const pagamento = yield pagamentoUseCase.getPagamentoByDate(data);
            res.json(pagamento);
        });
    }
}
exports.PagamentoController = PagamentoController;
