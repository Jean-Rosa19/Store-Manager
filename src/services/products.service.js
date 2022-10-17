const { productsModel } = require('../models');

const findAll = async () => {
  const result = await productsModel.findAll();
  return result;
};

const thisProductExists = async (id) => {
  const product = await productsModel.giveProduct(id);
  if (!product) {
    return { message: 'Product not found' };
  }
  return { product };
};

module.exports = { thisProductExists, findAll };