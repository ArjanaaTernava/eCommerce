const express = require("express");
const router = express.Router();

const {
    getBrands,
    getBrandById,
    createBrand
  } = require("../controllers/brandsController");

  router.route("/brands").get(getBrands);
  router.route("/brands/:id").get(getBrandById);
  router.route("/brands").post(createBrand);
  
  module.exports = router;