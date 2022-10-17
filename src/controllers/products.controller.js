const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
  const result = await productsService.findAll();
  res.status(200).json(result);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { product, message } = await productsService.thisProductExists(id);
  if (message) {
    res.status(404).json({ message });
  } else {
    res.status(200).json(product);
  }
};

module.exports = { getAllProducts, getProductById };