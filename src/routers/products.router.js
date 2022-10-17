const express = require('express');
const productsController = require('../controllers/products.controller');
const { validateId } = require('../middlewares');

const router = express.Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', validateId, productsController.getProductById);

module.exports = router;