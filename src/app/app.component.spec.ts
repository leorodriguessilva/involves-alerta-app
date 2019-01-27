import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BuscadorComponentMock } from './buscador/buscador.component.mock';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
		  imports: [
			RouterTestingModule
		  ],
		  declarations: [
			AppComponent,
			BuscadorComponentMock
		  ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('O titulo da pagina deve ser "Sistema de busca de alertas Involves"', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Sistema de busca de alertas Involves');
	});
});
