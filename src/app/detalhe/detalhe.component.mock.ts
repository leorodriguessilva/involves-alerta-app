import { Component, OnInit, Input } from '@angular/core';
import { Alerta } from '../modelo/alerta';

@Component({
  selector: 'app-detalhe',
  template: '<p>São detalhes falsos</p>'
})
export class DetalheComponentMock implements OnInit {

  @Input()
  alerta: Alerta;

  constructor() { }

  ngOnInit() { }

}