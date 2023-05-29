const Product = require("../models/product");
const Brand = require("../models/brands");
const Category = require("../models/category");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/product.json");
const brands = require("../data/brands.json");
const categories = require("../data/categories.json");

// Setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All Products are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedBrands = async () => {
  try {
    await Brand.deleteMany();
    console.log("Brands are deleted");

    await Brand.insertMany(brands);
    console.log("All Brands are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    console.log("Categories are deleted");

    await Category.insertMany(categories);
    console.log("All Categories are added.");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  seedProducts,
  seedBrands,
  seedCategories,
};
