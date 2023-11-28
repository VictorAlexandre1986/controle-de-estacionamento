import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PagamentoRepository {


  async getPagamentoById(id: number) {
    return await prisma.cliente.findUnique({
      where: { id },
    });
  }

  async getPagamentoByDate(data: any) {
        return await prisma.cliente.findMany({
            where: {  hora_entrada: data },
        });
    }
}