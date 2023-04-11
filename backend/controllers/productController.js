const Product = require('../models/product');

// Creating the new product => /api/v1/admin/product/new
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    // Product is created:
    res.status(201).json({
        success: true,
        product
    })
}

// Get all products  =>  /api/v1/products
exports.getProducts = async (req, res, next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// Get single product details  =>  /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    // Parameter:id passed from the url
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found!"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}

// Update product  =>  /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found!"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        product
    })
}

// Delete product  =>  /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found!"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product was deleted successfully!"
    })

}