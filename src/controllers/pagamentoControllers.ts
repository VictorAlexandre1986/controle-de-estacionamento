import { Request, Response } from 'express';
import   { PagamentoUseCase } from'../usecase/pagamentoUseCase';

const pagamentoUseCase = new PagamentoUseCase();

export class PagamentoController {
  
  async getPagamentoById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await pagamentoUseCase.getPagamentoById(Number(id));
    res.json(user);
  }


  async getPagamentoByDate(req: Request, res: Response) {
    const data = req.params;
    const pagamento = await pagamentoUseCase.getPagamentoByDate(data);
    res.json(pagamento);
  }

}
