const mongoose = require("mongoose");

const SupportSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  question: {
    type: String,
    trim: true,
  },
  isAdminOnly: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Support", SupportSchema);
