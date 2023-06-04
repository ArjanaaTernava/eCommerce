const Seller = require("../models/seller");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.createSeller = catchAsyncErrors(async (req, res) => {
  const { name } = req.body;

  const seller = await Seller.create({ name });
  res.status(200).json({
    success: true,
    seller,
  });
});

exports.getSellers = catchAsyncErrors(async (req, res) => {
  const sellers = await Seller.find();

  res.status(200).json({
    success: true,
    sellers,
  });
});

exports.getSellerById = catchAsyncErrors(async (req, res) => {
  const seller = await Seller.findById(req.params.id);

  res.status(200).json({
    success: true,
    seller,
  });
});

// Delete seller  =>  /api/v1/admin/seller/delete/:id
exports.deleteSeller = catchAsyncErrors(async (req, res, next) => {
  const seller = await Seller.findById(req.params.id);

  if (!seller) {
    return next(new ErrorHandler("Seller not found", 404));
  }

  await seller.remove();

  res.status(200).json({
    success: true,
    message: "Seller was deleted successfully!",
  });
});

// Update seller  =>  /api/v1/admin/seller/update/:id
exports.updateSeller = catchAsyncErrors(async (req, res, next) => {
  let seller = await Seller.findById(req.params.id);

  if (!seller) {
    return next(new ErrorHandler("Seller not found", 404));
  }

  seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    seller,
  });
});
