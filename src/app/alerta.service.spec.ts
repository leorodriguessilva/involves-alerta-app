import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AlertaService } from './alerta.service';

describe('AlertaService', () => {
  let alertaService: AlertaService;
  let httpMock: HttpClientTestingModule;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AlertaService
      ]
    });

    alertaService = TestBed.get(AlertaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Deveria ser criado a instancia de AlertaService', () => {
    expect(alertaService).toBeTruthy();
  });
});
