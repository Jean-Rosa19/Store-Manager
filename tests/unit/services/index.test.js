const { expect } = require('chai');
const sinon = require('sinon');

const mocks = require('../mocks/products.mock');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

describe('Camada Services => Testes unitários', () => {
  afterEach(sinon.restore);

  it('Verifica se a mensagem de erro é retornada em um objeto na chave "message" quando o id é inválido', async () => {
    sinon.stub(productsModel, 'giveProduct').returns(undefined);

    const result = await productsService.thisProductExists(99999)

    expect(result).to.be.deep.equal({ message: 'Product not found'})
  });

  it('Verifica se a função "thisProductExists" retorna os dados obtidos na chave product de um objeto', async () => {
    const wishedReturn = { id: 1, name: 'Martelo de Thor' };
    sinon.stub(productsModel, 'giveProduct').returns(wishedReturn);

    const result = await productsService.thisProductExists(1)

    expect(result).to.be.deep.equal({ product: wishedReturn })
  });

  it('Verifica se ', async () => {
    sinon.stub(productsModel, 'findAll').returns(mocks.allProductsResponse);

    const result = await productsService.findAll();

    expect([result]).to.be.deep.equal([mocks.allProductsResponse]);
  });
});