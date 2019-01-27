import { Alerta } from './alerta';

export const ALERTAS: Alerta[] = [
	{
		pontoDeVenda: 'Loja Somzera', 
		descricao: 'Produto fora do lugar',
		produto: 'CD do Iron Maiden',
		categoria: null,
		flTipo: 1,
		margem: null,
		respondidaEm: null
	},
	{
		pontoDeVenda: 'Loja Somzera', 
		descricao: 'Produto fora do lugar',
		produto: 'CD do Iron Maiden',
		categoria: null,
		flTipo: 2,
		margem: null,
		respondidaEm: null
	},
	{
		pontoDeVenda: 'Padaria', 
		descricao: 'Produto com valor acima do estipulado',
		produto: 'Pão',
		categoria: null,
		flTipo: 3,
		margem: 1,
		respondidaEm: null
	},
	{
		pontoDeVenda: 'Padaria', 
		descricao: 'Produto com valor abaixo do estipulado',
		produto: 'Leite',
		categoria: null,
		flTipo: 4,
		margem: 2,
		respondidaEm: null
	},
	{
		pontoDeVenda: 'Lojas Panamericanas', 
		descricao: 'Produto com valor abaixo do estipulado',
		produto: 'Camisa',
		categoria: null,
		flTipo: 4,
		margem: 6,
		respondidaEm: null
	},
	{
		pontoDeVenda: 'Loja Somzera', 
		descricao: 'Produto com participação acima do estipulado',
		produto: null,
		categoria: 'CDs Internacionais',
		flTipo: 5,
		margem: 10,
		respondidaEm: new Date(2019, 1, 3, 16, 30, 0, 0)
	},
	{
		pontoDeVenda: 'Loja Somzera', 
		descricao: 'Produto com participação acima do estipulado',
		produto: null,
		categoria: 'Guitarras',
		flTipo: 5,
		margem: 58,
		respondidaEm: new Date(2019, 1, 5, 18, 2, 13, 0)
	},
	{
		pontoDeVenda: 'Loja Somzera', 
		descricao: 'Produto com participação abaixo do estipulado',
		produto: null,
		categoria: 'CDs Internacionais',
		flTipo: 6,
		margem: 5,
		respondidaEm: new Date(2019, 1, 8, 12, 15, 22, 0)
	}
];