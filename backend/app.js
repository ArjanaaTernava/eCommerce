const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyparser = require('body-parser')
const cloudinary = require('cloudinary')
const errorMiddlewares = require("./middlewares/errors");

// Import route
const products = require("./routes/products");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);


// Middleware to handle errors
app.use(errorMiddlewares);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
module.exports = app;


//setting up cloudinary config

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})