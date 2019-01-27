import { Pipe, PipeTransform } from '@angular/core';
import { Alerta } from './modelo/alerta';

@Pipe({
  name: 'filtropontodevenda'
})
export class FiltroPontoDeVendaPipe implements PipeTransform {

  transform(alertas: Alerta[], filtro: any): any {
	if (!alertas || !filtro) {
		return alertas;
	}
	
	let filtroEmMinisculo = filtro.toLowerCase();
	
	return alertas
		.filter(alerta => 
		alerta.pontoDeVenda.toLowerCase().indexOf(filtroEmMinisculo) !== -1);
  }

}
