const express = require('express');
const app = express();
const { product } = require('./data/data');

app.use(express.json()); 
app.use(express.urlencoded()); 

app.get('/products/list', (req, res) => {
	return res.json(product);
});

app.get('/products/:id', (req, res) => {
	const { id } = req.params;
	const productDetail = product.find(eachElement => eachElement.id === Number(id));
	return res.json(productDetail);
});

app.post('/products', (req, res) => {
	product.push(req.body);
	return res.json(product);
});

app.delete('/products/:id', (req, res) => {
	const { id } = req.params;
	const productList = product.filter(eachElement => eachElement !== id);
	return res.json(productList);
});

app.listen(5000, () => {
	console.log('Server is running');
})