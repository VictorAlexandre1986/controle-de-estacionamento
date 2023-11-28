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
exports.PagamentoUseCase = void 0;
const { PagamentoRepository } = require('../repositories/pagamentoRepository');
const pagamentoRepository = new PagamentoRepository();
class PagamentoUseCase {
    calcular_valor(hora_entrada, hora_saida) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrada = new Date(hora_entrada);
            const saida = new Date(hora_saida);
            const hr_entrada = entrada.getHours();
            const min_entrada = entrada.getMinutes();
            const hr_saida = saida.getHours();
            const min_saida = saida.getMinutes();
            const hr_estacionado = hr_saida - hr_entrada;
            const min_estacionado = min_saida - min_entrada;
            if (hr_estacionado > 0) {
                const valor_hora = hr_estacionado * 7;
                const valor_minuto = min_estacionado * 0.12;
                let total_pagar = valor_hora + valor_minuto;
                return total_pagar;
            }
            const valor_minuto = min_estacionado * 0.12;
            let total_pagar = valor_minuto;
            return total_pagar;
        });
    }
    getPagamentoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const dados = yield pagamentoRepository.getPagamentoById(id);
            if (dados != null || dados != undefined) {
                const { hora_entrada, hora_saida } = dados;
                const total_pagar = this.calcular_valor(hora_entrada, hora_saida);
                const total_pagar_obj = {
                    "total_pagar": total_pagar
                };
                return total_pagar_obj;
            }
        });
    }
    getPagamentoByDate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pagamentoRepository.getPagamentoByDate(data);
        });
    }
}
exports.PagamentoUseCase = PagamentoUseCase;
