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
      const valor_minuto = Math.abs(min_estacionado * 0.12);
      const total_pagar = valor_hora + valor_minuto
      return total_pagar;
    }

    //Menos de uma hora para uma hora inteiera
    let total_pagar =  7;
    return total_pagar;
  }
  

  async getPagamentoById(id: number) {
    const dados = await pagamentoRepository.getPagamentoById(id);
    if (dados != null || dados != undefined){
      const {hora_entrada, hora_saida} = dados;
      const total_pagar =await this.calcular_valor(hora_entrada, hora_saida)
      console.log(total_pagar)
      const total_pagar_obj={
        "total_pagar": total_pagar,
      };
      return total_pagar_obj;      
  }
}

  async formatar_data(data:any){
    const estacionados_mesmo_dia = new Date(data)
    const dia = estacionados_mesmo_dia.getDate() ;
    const mes = estacionados_mesmo_dia.getMonth();
    const ano = estacionados_mesmo_dia.getFullYear();
    const hora = 0;
    const minutos =0;
    const segundos = 0;
    const data_formatada = new Date(data);
    return data_formatada
  }

  async getPagamentoByDate(data:any) {
    const data_formatada =  await this.formatar_data(data)
    return await pagamentoRepository.getPagamentoByDate(data);
  }

}
