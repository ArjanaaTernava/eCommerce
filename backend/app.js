const express = require("express");
const app = express();

// Import route
const products = require("./routes/products");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);

module.exports = app;
