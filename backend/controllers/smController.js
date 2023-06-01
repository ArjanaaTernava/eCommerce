// socialMediaController.js
const SocialMedia = require('../models/socialmedia');

// GET all social media links
const getAllSocialMediaLinks = async (req, res) => {
  try {
    const socialMediaLinks = await SocialMedia.find();
    res.json(socialMediaLinks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// GET a single social media link by ID
const getSocialMediaLinkById = async (req, res) => {
  try {
    const socialMediaLink = await SocialMedia.findById(req.params.id);
    if (!socialMediaLink) {
      return res.status(404).json({ error: 'Social media link not found' });
    }
    res.json(socialMediaLink);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// POST a new social media link
const createSocialMediaLink = async (req, res) => {
  try {
    const socialMediaLink = await SocialMedia.create(req.body);
    res.status(201).json(socialMediaLink);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// PUT (update) an existing social media link
const updateSocialMediaLink = async (req, res) => {
  try {
    const socialMediaLink = await SocialMedia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!socialMediaLink) {
      return res.status(404).json({ error: 'Social media link not found' });
    }
    res.json(socialMediaLink);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

// DELETE a social media link
const deleteSocialMediaLink = async (req, res) => {
  try {
    const socialMediaLink = await SocialMedia.findByIdAndDelete(req.params.id);
    if (!socialMediaLink) {
      return res.status(404).json({ error: 'Social media link not found' });
    }
    res.json({ message: 'Social media link deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = {
  getAllSocialMediaLinks,
  getSocialMediaLinkById,
  createSocialMediaLink,
  updateSocialMediaLink,
  deleteSocialMediaLink,
};
