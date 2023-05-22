const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = require("../app");

const swaggerSetup = () => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = swaggerSetup;
