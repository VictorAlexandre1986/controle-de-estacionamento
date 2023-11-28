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
exports.ClienteUseCase = void 0;
const { ClienteRepository } = require('../repositories/clienteRepository');
const clienteRepository = new ClienteRepository();
class ClienteUseCase {
    getAllClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield clienteRepository.getAllClientes();
        });
    }
    getClienteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield clienteRepository.getClienteById(id);
        });
    }
    createCliente(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield clienteRepository.createCliente(data);
        });
    }
    updateCliente(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let dados = clienteRepository.getClienteById(id);
            if (dados) {
                const manipulando_dados = Object.assign(Object.assign({}, dados), { hora_saida: new Date(data.hora_saida) });
                return yield clienteRepository.updateCliente(id, manipulando_dados);
            }
        });
    }
    deleteCliente(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield clienteRepository.deleteCliente(id);
        });
    }
}
exports.ClienteUseCase = ClienteUseCase;
