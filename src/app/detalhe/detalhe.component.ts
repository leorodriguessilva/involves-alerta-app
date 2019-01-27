import { Component, OnInit, Input } from '@angular/core';
import { Alerta } from '../modelo/alerta';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  @Input()
  alerta: Alerta;

  constructor() { }

  ngOnInit() { }

}
