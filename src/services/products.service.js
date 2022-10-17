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

const addNewProduct = async (name) => {
  if (name.length < 5) {
    return { message: '"name" length must be at least 5 characters long' };
  }
  const createdProduct = await productsModel.pushNewProduct(name);
  return { createdProduct };
};

module.exports = { thisProductExists, findAll, addNewProduct };