const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddlewares = require("./middlewares/errors");

// Import route
const products = require("./routes/products");
const auth = require("./routes/auth");

app.use("/api/v1", products);
app.use("/api/v1", auth);

// Middleware to handle errors
app.use(errorMiddlewares);
app.use(cookieParser());
module.exports = app;
