// routes.js
const express = require("express");
const router = express.Router();
const {getAllSocialMediaLinks,getSocialMediaLinkById,createSocialMediaLink,updateSocialMediaLink,deleteSocialMediaLink} = require("../controllers/smController");

// GET all social media links
router.get("/socialmedia", getAllSocialMediaLinks);

// GET a single social media link by ID
router.get("/socialmedia/:id", getSocialMediaLinkById);

// POST a new social media link
router.post("/socialmedia", createSocialMediaLink);

// PUT (update) an existing social media link
router.put("/socialmedia/:id", updateSocialMediaLink);

// DELETE a social media link
router.delete("/socialmedia/:id", deleteSocialMediaLink);

module.exports = router;
