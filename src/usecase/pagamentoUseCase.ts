const { PagamentoRepository } = require ('../repositories/pagamentoRepository');

const pagamentoRepository = new PagamentoRepository();

export class PagamentoUseCase {

  async  calcular_valor(hora_entrada: any, hora_saida: any){
    const entrada = new Date(hora_entrada);
    const saida = new Date(hora_saida);
   
    const hr_entrada = entrada.getHours();
    const min_entrada = entrada.getMinutes();
    const hr_saida = saida.getHours();
    const min_saida = saida.getMinutes();
  
    const hr_estacionado = hr_saida - hr_entrada;
    const min_estacionado = min_saida - min_entrada;

    if (hr_estacionado > 0){
      const valor_hora = hr_estacionado * 7;
      const valor_minuto = min_estacionado * 0.12;
      let total_pagar = valor_hora + valor_minuto;
      return total_pagar;
    }

    const valor_minuto = min_estacionado * 0.12;
    let total_pagar =  valor_minuto;
    return total_pagar;
  }
  

  async getPagamentoById(id: number) {
    const dados = await pagamentoRepository.getPagamentoById(id);
    if (dados != null || dados != undefined){
      const {hora_entrada, hora_saida} = dados;
      const total_pagar = this.calcular_valor(hora_entrada, hora_saida)
      const total_pagar_obj={
        "total_pagar": total_pagar
      };
      return total_pagar_obj;      
  }
}

  async getPagamentoByDate(data: any) {
    return await pagamentoRepository.getPagamentoByDate(data);
  }

}
