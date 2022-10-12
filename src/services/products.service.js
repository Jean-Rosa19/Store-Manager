const productsModel = require('../models/products.model');
const statusCode = require('../helpers/statusCode');
const errorMessages = require('../helpers/errorMessages');

async function getAllProducts() {
  const result = await productsModel.selectAllProducts();

  if (!result) {
  return { status: statusCode.NOT_FOUND, message: errorMessages.NOT_FOUND };
  }
  return { status: statusCode.OK, message: result };
}

async function getProductsById(id) {
  const result = await productsModel.selectProductById(id);

  if (!result) {
    return { status: statusCode.NOT_FOUND, message: { message: errorMessages.NOT_FOUND } };
  }

  return { status: statusCode.OK, message: result };
}

module.exports = {
  getAllProducts,
  getProductsById,
};