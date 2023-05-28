const Seller = require("../models/seller");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

exports.createSeller = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;

  const seller = await Seller.create({ name });
  res.status(200).json({
    success: true,
    seller,
  });
});

exports.getSellers = catchAsyncErrors(async (req, res, next) => {
  const sellers = await Seller.find();

  res.status(200).json({
    success: true,
    sellers,
  });
});

exports.getSellerById = catchAsyncErrors(async (req, res, next) => {
  const seller = await Seller.findById(req.params.id);

  res.status(200).json({
    success: true,
    seller,
  });
});
