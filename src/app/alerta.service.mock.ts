import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Alerta } from './modelo/alerta';
import { ALERTAS } from './modelo/alertas.mock';

@Injectable({
  providedIn: 'root'
})
export class AlertaServiceMock {
    
  constructor() { }
  
  buscaAlertas(): Observable<Alerta[]> {
	  return of(ALERTAS);
	  //return defer(() => Promise.resolve(ALERTAS));
	  //return ALERTAS;
  }
}