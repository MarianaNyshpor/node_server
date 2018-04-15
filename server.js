const express = require('express');
const app = express();
const url = require('url');

app.use('/:world', (req, res) => {
	const { world } = req.params;
	res.send(`<h1>${world}</h1>`);
});

app.use((req, res) => {
	res.send('<h1>Hello World!</h1>');
});

app.listen(3000);