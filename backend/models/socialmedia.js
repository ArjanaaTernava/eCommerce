// socialMedia.js
const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  platform: String,
  username: String,
  link: String,
});

const SocialMedia = mongoose.model('SocialMedia', socialMediaSchema);

module.exports = SocialMedia;
