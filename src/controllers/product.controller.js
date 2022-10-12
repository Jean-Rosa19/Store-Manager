const productsService = require('../services/products.service');

async function getAllProducts(_req, res) {
  const result = await productsService.getAllProducts();

  res.status(result.status).json(result.message);
}

async function getProductsById(req, res) {
  const { id } = req.params;
  const result = await productsService.getProductsById(id);

  res.status(result.status).json(result.message);
}

module.exports = {
  getAllProducts,
  getProductsById,
};