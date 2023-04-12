const express = require('express');
const app = express();
const errorMiddlewares = require('./middlewares/errors');


// Import route
const products = require('./routes/products');

app.use('/api/v1', products);

// Middleware to handle errors
app.use(errorMiddlewares)
module.exports = app;