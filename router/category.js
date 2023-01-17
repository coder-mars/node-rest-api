const express = require('express')
const router = express.Router()
const { category } = require('../src/data/data')

router.get('/list', (req, res) => {
	return res.json(category);
})
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const categoryDetails = category.find(eachElement => eachElement.id === Number(id));
	return res.json(categoryDetails);
})
router.post('', (req, res) => {
	category.push(req.body);
	return res.json(category);
})
router.delete('/:id', (req, res) => {
	const { id } = req.params;
	const categoryList = category.filter(eachElement => eachElement.id !== Number(id))
	return res.json(categoryList);
})

module.exports = router;