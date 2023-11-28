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
exports.ClienteController = void 0;
const clienteUseCase_1 = require("../usecase/clienteUseCase");
const clienteUseCase = new clienteUseCase_1.ClienteUseCase();
class ClienteController {
    getAllClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield clienteUseCase.getAllClientes();
                res.json(users);
            }
            catch (error) {
                console.log(error.message);
            }
        });
    }
    getClienteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield clienteUseCase.getClienteById(Number(id));
            res.json(user);
        });
    }
    createCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const data_modificado = {
                nome: data.nome,
                placa: data.placa,
                veiculo: data.veiculo,
                num_vaga: data.num_vaga,
                limpeza: data.limpeza,
                hora_entrada: new Date(data.hora_saida.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })),
                hora_saida: new Date(data.hora_saida.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }))
            };
            const newUser = yield clienteUseCase.createCliente(data_modificado);
            res.json(newUser);
        });
    }
    updateCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const data = req.body;
            const data_modificado = {
                nome: data.nome,
                placa: data.placa,
                veiculo: data.veiculo,
                num_vaga: data.num_vaga,
                limpeza: data.limpeza,
                hora_entrada: new Date(data.hora_entrada.toLocaleString("pt-BR")),
                hora_saida: new Date(data.hora_saida.toLocaleString("pt-BR"))
            };
            const updatedCliente = yield clienteUseCase.updateCliente(Number(id), data_modificado);
            res.json(updatedCliente);
        });
    }
    deleteCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield clienteUseCase.deleteCliente(Number(id));
            res.json({ message: 'Client deleted successfully' });
        });
    }
}
exports.ClienteController = ClienteController;
