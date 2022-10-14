const { expect } = require('chai');
const sinon = require('sinon');

const mocks = require('../mocks/products.mock');
const { productModel } = require('../../../src/models/')

const connection = require('../../../src/models/connection');


describe('teste da camada model', function () {
  afterEach(sinon.restore);
  it('verifica se a função modelGetAll retorna todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves([mocks.allProductsResponse])
    const result = await productModel.modelGetAll();
    expect(result).to.equal(mocks.allProductsResponse)
  });

  it('verifica se a função modelGetById retorna os dados esperados', async () => {
    sinon.stub(connection, 'execute').resolves([mocks.allProductsResponse])
    const result = await productModel.modelGetById(1)
    expect(result).to.equal(mocks.allProductsResponse[0])
  }) 
})

