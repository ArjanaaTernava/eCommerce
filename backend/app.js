const express = require('express');
const app = express();


// Import route
const products = require('./routes/products');

app.use('/api/v1', products);

module.exports = app;