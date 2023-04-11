const Product = require('../models/product');

// Creating the new product => /api/v1/product/new
exports.newProduct = async (req, res, next) =>{
    const product = await Product.create(req.body);
    // Product is created:
    res.status(201).json({
        success: true,
        product
    })
}

exports.getProducts = (req,res,next) => {
    res.status(200).json({
        success: true,
        message: 'Show all the products.'
    })
}