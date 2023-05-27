const mongoose = require("mongoose");

const BrandSchema = mongoose.Schema({
    name: {
      type: String,
      trim: true
    },
    images: [
        {
          public_id: {
            type: String,
            required: false,
          },
          url: {
            type: String,
            required: false,
          },
        },
      ],
    description: {
      type: String,
      trim: true
    }
  });
  
  module.exports = mongoose.model('Brand', BrandSchema);