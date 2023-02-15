import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Testa se o fetch é chamado quando passado parametro correto', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled()
  })

  it('Testar se o endpoit esta correto ao chamar a função com parametro MLB1405519561', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  })

  it('Testar se ao chamar fetchProduct com o parametro MLB1405519561 a estrutura retornada é igual ao de product', async () => {
    const fetchAwait = await fetchProduct('MLB1405519561');
    expect(fetchAwait).toEqual(product);
  })
  
  it('Testar se ao passar fetchProduct sem parametro retorna erro', async () => {
    const undefined = fetchProduct();
    await expect(undefined).rejects.toThrow('ID não informado');
  })

});
