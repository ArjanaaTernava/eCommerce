const Affiliate = require("../models/affiliate");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Create a new affiliate
exports.createAffiliate = catchAsyncErrors(async (req, res, next) => {
  const { name, description, website, logo } = req.body;

  const affiliate = await Affiliate.create({
    name,
    description,
    website,
    logo,
  });

  res.status(201).json({
    success: true,
    affiliate,
  });
});

// Get all affiliates
exports.getAllAffiliates = catchAsyncErrors(async (req, res, next) => {
  const affiliates = await Affiliate.find();

  res.status(200).json({
    success: true,
    count: affiliates.length,
    affiliates,
  });
});

// Get a single affiliate by ID
exports.getAffiliateById = catchAsyncErrors(async (req, res, next) => {
  const affiliate = await Affiliate.findById(req.params.id);

  if (!affiliate) {
    return next(new ErrorHandler("Affiliate not found", 404));
  }

  res.status(200).json({
    success: true,
    affiliate,
  });
});

// Update an affiliate
exports.updateAffiliate = catchAsyncErrors(async (req, res, next) => {
  let affiliate = await Affiliate.findById(req.params.id);

  if (!affiliate) {
    return next(new ErrorHandler("Affiliate not found", 404));
  }

  affiliate = await Affiliate.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    affiliate,
  });
});

// Delete an affiliate
exports.deleteAffiliate = catchAsyncErrors(async (req, res, next) => {
  const affiliate = await Affiliate.findById(req.params.id);

  if (!affiliate) {
    return next(new ErrorHandler("Affiliate not found", 404));
  }

  await affiliate.remove();

  res.status(200).json({
    success: true,
    message: "Affiliate deleted successfully",
  });
});
