const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "eBlej APIs",
        version: "1.0.0",
        description: "API documentation using Swagger",
      },
      servers: [
        {
          url: "http://localhost:4000", // Update with your server URL
        },
      ],
    },
    apis: [
      "../routes/auth.js",
      "../routes/order.js",
      "../routes/payment.js",
      "../routes/products.js",
    ], // Update with the paths to your route files
  };
  

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
