import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BuscadorComponent } from './buscador.component';
import { AlertasComponentMock } from '../alertas/alertas.component.mock';

describe('BuscadorComponent', () => {
  let component: BuscadorComponent;
  let fixture: ComponentFixture<BuscadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
		BuscadorComponent,
		AlertasComponentMock
	  ],
	  imports: [
		FormsModule
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Passar valores para o primeiro campo deveria alterar o ponto de venda', () => {
    let campoPontoDeVenda = fixture.debugElement.query(By.css('#pontoDeVenda')).nativeElement;
	campoPontoDeVenda.value = 'teste de ponto de venda';
	campoPontoDeVenda.dispatchEvent(new Event('input'));
	fixture.detectChanges();
	let criterio = component.pontoDeVenda;
	expect(criterio).toBe('teste de ponto de venda');
  });

  it('Passar valores para o segundo campo deveria alterar o tipo', () => {
    let campoTipo = fixture.debugElement.query(By.css('#tipo')).nativeElement;
	campoTipo.value = 'teste de tipo';
	campoTipo.dispatchEvent(new Event('input'));
	fixture.detectChanges();
	let criterio = component.tipo;
	expect(criterio).toBe('teste de tipo');
  });
});
