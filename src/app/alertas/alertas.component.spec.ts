import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlertasComponent } from './alertas.component';
import { AlertaService } from '../alerta.service'
import { AlertaServiceMock } from '../alerta.service.mock'
import { Alerta } from '../modelo/alerta';
import { DetalheComponentMock } from '../detalhe/detalhe.component.mock';
import { FiltroPontoDeVendaPipe } from '../filtropontodevenda.pipe';
import { FiltroTipoPipe } from '../filtrotipo.pipe';

describe('AlertasComponent', () => {
  let component: AlertasComponent;
  let fixture: ComponentFixture<AlertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
		AlertasComponent,
		DetalheComponentMock,
		FiltroPontoDeVendaPipe,
		FiltroTipoPipe
	  ],
	  providers: [
		AlertaService,
		AlertaServiceMock
	  ],
	  imports: [
		HttpClientTestingModule
	  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
	TestBed.overrideComponent(
		AlertasComponent,
		{set: {providers: [{provide: AlertaService, useClass: AlertaServiceMock}]}}
	);
    fixture = TestBed.createComponent(AlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('Um alerta sem nome do produto deveria mostrar categoria', () => {
    const alerta = new Alerta();
	alerta.categoria = 'teste categoria';
	expect(component.getNome(alerta)).toBe('teste categoria');
  });
  
  it('Um alerta sem categoria deveria mostrar nome do produto', () => {
    const alerta = new Alerta();
	alerta.produto = 'teste produto';
	expect(component.getNome(alerta)).toBe('teste produto');
  });
  
  it('Deveria mostrar todos os alertas', () => {
	component.ngOnInit();
	
	fixture.whenStable().then(() => {
		fixture.detectChanges();
		expect(component.alertas.length).toBe(7);
    });
  });
  
  it('Selecionar um dos alertas deveria ser acessivel seus detalhes', () => {
	component.ngOnInit();
	
	fixture.whenStable().then(() => {
		fixture.detectChanges();
		const alertasHTML = fixture.nativeElement;
		const alertas = alertasHTML.querySelector('li');
		const alerta = alertas[0];
		alerta.click();
		fixture.detectChanges();
		expect(component.alertaSelecionado).toBe(alerta);
    });
  });
  
  it('Selecionar um dos alertas deveria estar visivel sua seleção', () => {
	component.ngOnInit();
	
	fixture.whenStable().then(() => {
		fixture.detectChanges();
		const alertasHTML = fixture.nativeElement;
		const alertas = alertasHTML.querySelector('li');
		const alerta = alertas[0];
		alerta.click();
		fixture.detectChanges();
		const alertaSelecionado = alertasHTML.querySelector('.selecionado')[0];
		expect(alertaSelecionado).toBe(alerta);
    });
  });
  
});
