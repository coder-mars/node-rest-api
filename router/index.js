const express = require('express');

const router = express.Router();
const product = require('../router/product')
const category = require('../router/category')

router.use('/products', product)
router.use('/categorys', category)

module.exports = router;