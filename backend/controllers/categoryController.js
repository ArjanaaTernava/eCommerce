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

  const category = await Category.create({ name });
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

// Delete category  =>  /api/v1/admin/category/delete/:id
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("Category not found", 404));
  }

  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category was deleted successfully!",
  });
});
