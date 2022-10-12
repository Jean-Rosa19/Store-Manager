const express = require('express');
const productsController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductsById);

module.exports = router;