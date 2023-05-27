const Brand = require('../models/brands'); // Update the path to your Brand model file
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// GET /brands - Retrieve all brands
exports.getBrands = catchAsyncErrors(async (req, res) => {
  try {
    const brands = await Brand.find(); // Retrieve all brands from the database
    res.json(brands); // Send the brands as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /brands/:id - Retrieve a specific brand by ID
exports.getBrandById = catchAsyncErrors(async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id); // Retrieve the brand by ID
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }
    res.json(brand); // Send the brand as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


// POST /brands - Create a new brand
exports.createBrand = async (req, res) => {
  try {
    const brandData = req.body; // Assuming the request body contains the brand data
    const newBrand = new Brand(brandData);
    const savedBrand = await newBrand.save(); // Save the new brand to the database
    res.status(201).json(savedBrand); // Send the saved brand as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
