import { FiltroTipoPipe } from './filtrotipo.pipe';
import { ALERTAS } from './modelo/alertas.mock';

describe('FiltrotipoPipe', () => {
  let filtro: FiltroTipoPipe;
  let alertas = ALERTAS;
  
  beforeEach(() => {
    filtro = new FiltroTipoPipe();
  });
  
  it('Se nenhum tipo for informado todos os alertas deveriam ser retornados', () => {
    let alertasFiltrados = filtro.transform(alertas, '');
	expect(alertasFiltrados.length).toBe(alertas.length);
  });
  
  it('Deveria mostrar apenas alertas com o tipo informado', () => {
    const tipo = 5;
	let alertasFiltrados = filtro.transform(alertas, tipo);
	expect(alertasFiltrados.length).toBe(2);
  });
});
