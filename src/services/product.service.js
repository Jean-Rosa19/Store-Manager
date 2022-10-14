const statusCode = require('../helpers/statusCode');
const productModel = require('../models/product.model');

const serviceGetAll = async () => {
  const result = await productModel.modelGetAll();

  return { message: result, status: statusCode.OK };
};

const serviceGetById = async (id) => {
  if (Number.isNaN(Number(id))) {
    return { type: 'error', message: 'id precisa ser um número' };
  }
  const result = await productModel.modelGetById(id);

  if (result) {
    return { type: null, message: result };
  }

  return { type: 'error', message: 'Product not found' }; 
};

module.exports = {
  serviceGetAll,
  serviceGetById,
};