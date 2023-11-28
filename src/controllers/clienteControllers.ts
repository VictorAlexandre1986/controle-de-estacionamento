import { Request, Response } from 'express';
import   { ClienteUseCase } from'../usecase/clienteUseCase';

const clienteUseCase = new ClienteUseCase();

export class ClienteController {
  async getAllClientes(req: Request, res: Response) {
    try{
      const users = await clienteUseCase.getAllClientes();
      res.json(users);
    }catch(error: any){
      console.log(error.message)
    }
  }

  async getClienteById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await clienteUseCase.getClienteById(Number(id));
    res.json(user);
  }

  async createCliente(req: Request, res: Response) {
    const data = req.body;
    const data_modificado={
      nome:data.nome,
      placa:data.placa,
      veiculo: data.veiculo,
      num_vaga:data.num_vaga,
      limpeza:data.limpeza,
      hora_entrada: new Date(data.hora_saida.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }) ),
      hora_saida: new Date(data.hora_saida.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }))
    }
    const newUser = await clienteUseCase.createCliente(data_modificado);
    res.json(newUser);
  }

  async updateCliente(req: Request, res: Response) { 
    const { id } = req.params;
    const data = req.body;
    const data_modificado={
      nome:data.nome,
      placa:data.placa,
      veiculo: data.veiculo,
      num_vaga:data.num_vaga,
      limpeza:data.limpeza,
      hora_entrada: new Date(data.hora_entrada.toLocaleString("pt-BR")),
      hora_saida: new Date(data.hora_saida.toLocaleString("pt-BR"))
    }
    const updatedCliente = await clienteUseCase.updateCliente(Number(id), data_modificado);
    res.json(updatedCliente);
  }

  async deleteCliente(req: Request, res: Response) {
    const { id } = req.params;
    await clienteUseCase.deleteCliente(Number(id));
    res.json({ message: 'Client deleted successfully' });
  }
}