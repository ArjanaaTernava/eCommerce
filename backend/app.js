const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middlewares/errors");

// Setting up config file
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const payment = require("./routes/payment");
const order = require("./routes/order");
const brands = require("./routes/brands");
const categories = require("./routes/category");
const sellers = require("./routes/seller");
const support = require("./routes/support");
const qna = require("./routes/qna");
const socialmedia = require("./routes/socialmedia");
const affiliate = require("./routes/affiliate");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", brands);
app.use("/api/v1", categories);
app.use("/api/v1", sellers);
app.use("/api/v1", support);
app.use("/api/v1", qna);
app.use("/api/v1", socialmedia);
app.use("/api/v1", affiliate);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
