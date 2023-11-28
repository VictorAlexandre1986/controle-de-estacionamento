import { Request, Response } from 'express';
import   { PagamentoUseCase } from'../usecase/pagamentoUseCase';

const pagamentoUseCase = new PagamentoUseCase();

export class PagamentoController {
  
  async getPagamentosById(req: Request, res: Response) {
    const { id } = req.params;
    const pagamento = await pagamentoUseCase.getPagamentoById(Number(id));
    res.json(pagamento);
  }

  async getPagamentosByDate(req: Request, res: Response) {
    const data = req.body;
    const pagamento = await pagamentoUseCase.getPagamentoByDate(data);
    res.json(pagamento);
  }

}
