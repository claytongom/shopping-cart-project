import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Se é função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(URL);
  });

  it('fetchProductsList("computador") retorna o resultado esperado', async () => {
    const response = await fetchProductsList('computador');
    expect(response).toEqual(computadorSearch);
  });

  it('fetchProductsList retorna ERRO quando sem argumento', async () => {
    const error = await fetchProductsList();
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Termo de busca não informado');
  });

});
