const Product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/product');

// Setting dotenv file
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase();

const seedProducts = async () => {
    try {
        // Delete all the products in the database then insert all the products from the product file
        await Product.deleteMany();
        console.log('Products are deleted!');

        await Product.insertMany(products);
        console.log("All products are added!");

        process.exit();

    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}

seedProducts();