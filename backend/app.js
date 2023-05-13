const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyparser = require('body-parser')
const fileUpload = require('express-fileupload')
const errorMiddlewares = require("./middlewares/errors");

// Import route
const products = require("./routes/products");
const auth = require("./routes/auth");
const order = require("./routes/order");
const payment=require("./routes/payment")

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", payment);



// Middleware to handle errors
app.use(errorMiddlewares);
app.use(cookieParser());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;


