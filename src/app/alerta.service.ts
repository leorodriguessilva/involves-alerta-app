import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Alerta } from './modelo/alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  
  private serviceUrl = 'http://localhost:8080/alertas/'
  
  constructor(private http: HttpClient) { }
  
  buscaAlertas(): Observable<Alerta[]> {
	let alertas = this.http.get<Alerta[]>(this.serviceUrl)
      .pipe(
        tap(_ => console.log('Sucesso ao buscar alertas')),
        catchError(this.lideComErro('buscaAlertas', []))
      );
	return alertas;
  }
  
  private lideComErro<T> (operacao, resultado?: T) {
	  return (erro: any): Observable<T> => {
		console.error(erro);
		return of(resultado as T);
	  };
  }
}
