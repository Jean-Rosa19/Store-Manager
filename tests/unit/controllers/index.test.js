const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');
const { productsService } = require('../../../src/services');
const mock = require('../mocks/products.mock');

describe('Camada Services => Testes unitários', () => {
  afterEach(sinon.restore)

  it('Verifica se é possível retornar todos os produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findAll').resolves(mock.allProductsResponse[0]);

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProductsResponse[0]);
  });

  it('Verifica se id invalido retorna erro', async () => {
    const res = {};
    const req = { params: { id: 9999 } };
    const errorObject = { message: 'Product not found' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'thisProductExists').resolves(errorObject);

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(errorObject);
  });

  it('Verifica se id invalido retorna erro', async () => {
    const res = {};
    const req = { params: { id: 1 } };
    const successObject = { id: 1, name: 'Martelo de Thor' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'thisProductExists').resolves(successObject);

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(successObject);
  });
});