const QnA = require("../models/qna");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// Get all QnA entries => /api/v1/qna
exports.getAllQnA = catchAsyncErrors(async (req, res, next) => {
  const qna = await QnA.find();

  res.status(200).json({
    success: true,
    qna,
  });
});

// Create a QnA entry => /api/v1/qna
exports.createQnA = catchAsyncErrors(async (req, res, next) => {
  const { question, answer } = req.body;

  const qna = await QnA.create({ question, answer });
  res.status(201).json({
    success: true,
    qna,
  });
});

// Get a QnA entry by ID => /api/v1/qna/:id
exports.getQnAById = catchAsyncErrors(async (req, res, next) => {
  const qna = await QnA.findById(req.params.id);

  if (!qna) {
    return next(new ErrorHandler("QnA entry not found", 404));
  }

  res.status(200).json({
    success: true,
    qna,
  });
});

// Update a QnA entry by ID => /api/v1/qna/:id
exports.updateQnA = catchAsyncErrors(async (req, res, next) => {
  let qna = await QnA.findById(req.params.id);

  if (!qna) {
    return next(new ErrorHandler("QnA entry not found", 404));
  }

  qna = await QnA.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    qna,
  });
});

// Delete a QnA entry by ID => /api/v1/qna/:id
exports.deleteQnA = catchAsyncErrors(async (req, res, next) => {
  const qna = await QnA.findById(req.params.id);

  if (!qna) {
    return next(new ErrorHandler("QnA entry not found", 404));
  }

  await qna.remove();

  res.status(200).json({
    success: true,
    message: "QnA entry was deleted successfully!",
  });
});
