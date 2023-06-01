const Support = require("../models/support");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// POST /support - Submit a support question
exports.submitQuestion = catchAsyncErrors(async (req, res) => {
  try {
    const { name, email, question } = req.body;

    const supportData = {
      name: name,
      email: email,
      question: question,
      isAdminOnly: true, // Set a flag to indicate that only the admin can see the question
    };

    const newSupport = new Support(supportData);
    const savedSupport = await newSupport.save();

    res.status(201).json(savedSupport);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
