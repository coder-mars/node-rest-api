const express = require('express');
const app = express();
const route = require('../router/index')
app.use(express.json());
app.use(express.urlencoded());
app.use(route)
app.listen(5000, () => {
	console.log('Server is running');
})
