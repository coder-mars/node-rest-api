const express = require('express');
const router = express.Router();
const { product } = require('../src/data/data');
console.log('product list:', product);
router.get('/list', (req, res) => {
	return res.json(product);
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const productDetail = product.find(eachElement => eachElement.id === Number(id));
	return res.json(productDetail);

});

router.post('/', (req, res) => {
	product.push(req.body);
	return res.json(product);
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const productList = product.filter(eachElement => eachElement.id !== Number(id));
	return res.json(productList);
});
module.exports = router;