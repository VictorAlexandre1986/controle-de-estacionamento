const { ClienteRepository } = require ('../repositories/clienteRepository');

const clienteRepository = new ClienteRepository();

export class ClienteUseCase {

  async getAllClientes() {
    return await clienteRepository.getAllClientes();
  }

  async getClienteById(id: number) {
    return await clienteRepository.getClienteById(id);
  }

  async createCliente(data: any) {
    return await clienteRepository.createCliente(data);
  }

  async updateCliente(id: number, data: any) {
    let dados = clienteRepository.getClienteById(id);
    if(dados){
      const manipulando_dados = {
        ...dados,
        hora_saida : new Date(data.hora_saida)
      }
      return await clienteRepository.updateCliente(id, manipulando_dados);
     }
  }

  async deleteCliente(id: number) {
    return await clienteRepository.deleteCliente(id);
  }
}