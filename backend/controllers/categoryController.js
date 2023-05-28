const Category = require("../models/category");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

exports.getCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    categories,
  });
});

exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  // const userId = req.user._id; // Add userId to category

  const category = await Category.create({ name /* user: userId */ });
  res.status(200).json({
    success: true,
    category,
  });
});

exports.getCategoryById = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  res.status(200).json({
    success: true,
    category,
  });
});
