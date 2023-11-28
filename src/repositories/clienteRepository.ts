import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ClienteRepository {


  async getAllClientes() {
    return await prisma.cliente.findMany();
  }

  async getClienteById(id: number) {
    return await prisma.cliente.findUnique({
      where: { id },
    });
  }

  async createCliente(data: any) {
    return await prisma.cliente.create({
      data,
    });
  }

  async updateCliente(id: number, data: any) {
    return await prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async deleteCliente(id: number) {
    return await prisma.cliente.delete({
      where: { id },
    });
  }
}