import { FiltroPontoDeVendaPipe } from './filtropontodevenda.pipe';
import { ALERTAS } from './modelo/alertas.mock';

describe('FiltroPontoDeVendaPipe', () => {
  let filtro: FiltroPontoDeVendaPipe;
  let alertas = ALERTAS;
  
  beforeEach(() => {
    filtro = new FiltroPontoDeVendaPipe();
  });
  
  it('Se nenhum ponto de venda for informado todos os alertas deveriam ser retornados', () => {
    let alertasFiltrados = filtro.transform(alertas, '');
	expect(alertasFiltrados.length).toBe(alertas.length);
  });
  
  it('Deveria mostrar apenas alertas com o ponto de venda informado', () => {
    const pontoDeVenda = 'Padaria';
	let alertasFiltrados = filtro.transform(alertas, pontoDeVenda);
	expect(alertasFiltrados.length).toBe(2);
  });
  
  it('Deveria mostrar apenas alertas que possuem parte do valor informado', () => {
    const pontoDeVenda = 'Pa';
	let alertasFiltrados = filtro.transform(alertas, pontoDeVenda);
	expect(alertasFiltrados.length).toBe(3);
  });
});
