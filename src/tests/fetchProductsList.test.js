import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    await expect(typeof fetchProductsList).toBe('function');
  });

  it("função fetchProductsList com o argumento 'computador' e teste se fetch foi chamada", async () => {
    await expect(fetch).toHaveBeenCalledTimes(0);
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await expect(fetch).toHaveBeenCalledWith(API_URL);

  });
  it("retorno da fetchProductsList com o argumento 'computador' é uma estrutura de dados = ao obj computadorSearch", async () => {
    await expect(fetchProductsList('computador')).resolves.toBe(computadorSearch);

  });
  it("a função fetchProductsList sem argumento, retorna um erro com a mensagem: 'Termo de busca não informado'", async () => {
    const error = 'Termo de busca não informado';
    await expect(() => fetchProductsList()).toThrow(error);
  });

});
