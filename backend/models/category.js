const Mongoose = require("mongoose");
const { Schema } = Mongoose;

    
const CategorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
    required: false,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("Category", CategorySchema);
