import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-alertas',
	template: '<p>São alertas falsos</p>'
})

export class AlertasComponentMock {
	
  @Input()
  pontoDeVenda: string;
 
  @Input()
  tipo: string;
	
  constructor() { }
}