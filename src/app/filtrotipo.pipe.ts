import { Pipe, PipeTransform } from '@angular/core';
import { Alerta } from './modelo/alerta';

@Pipe({
  name: 'filtrotipo'
})
export class FiltroTipoPipe implements PipeTransform {

  transform(alertas: Alerta[], filtro: any): any {
	if (!alertas || !filtro) {
		return alertas;
	}
	console.log(filtro);
	return alertas
		.filter(alerta => alerta.flTipo == filtro);
  }

}
