const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

module.exports = Affiliate;
