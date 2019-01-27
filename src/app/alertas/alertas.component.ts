import { Component, OnInit, Input } from '@angular/core';
import { Alerta } from '../modelo/alerta';
import { AlertaService } from '../alerta.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input()
  pontoDeVenda: string;
 
  @Input()
  tipo: string;

  alertaSelecionado: Alerta;
  
  alertas: Alerta[];

  constructor(private alertaService: AlertaService) { }

  ngOnInit() { 
	this.atualizaAlertas();
  }
  
  getNome(alerta: Alerta): String {
	  if(!alerta) {
		  return '';
	  }
	  if(alerta.produto){
		  return alerta.produto;
	  }
	  return alerta.categoria
  }
  
  estaSelecionado(alerta: Alerta): boolean {
	  return alerta === this.alertaSelecionado;
  }
  
  atualizaAlertas(): void {
	  this.alertaService.buscaAlertas()
	  .subscribe(alertas => {
		  console.log(alertas);
		  this.alertas = alertas
		  });
  }
  
  selecionaAlerta(alerta: Alerta) {
	  this.alertaSelecionado = alerta;
  }
}
