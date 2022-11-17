import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('verifica se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('MLB1405519561 e teste se fetch foi chamada', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('MLB1405519561 a função fetch utiliza o endopoint "https://api.mercadolibre.com/items/MLB1405519561"', async () => {
    ;
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('MLB1405519561 é uma estrutura de dados igual a objeto produto', async () => {
    const data = await fetchProduct('MLB1405519561');
    expect(data).toEqual(product);

  });

  it('função fetchProduct sem argumento, retorna erro com a mensagem: "ID não informado', async () => {
    try {
      await fetchProduct();
    } catch (error) {
      expect(error.message).toBe('ID não informado');
    }
  });
});
