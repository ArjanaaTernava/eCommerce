// routes.js
const express = require("express");
const router = express.Router();
const {getAllSocialMediaLinks,getSocialMediaLinkById,createSocialMediaLink,updateSocialMediaLink,deleteSocialMediaLink} = require("../controllers/smController");

// GET all social media links
router.route("/socialmedia").get(getAllSocialMediaLinks);

// GET a single social media link by ID
router.route("/socialmedia/:id").get(getSocialMediaLinkById);

// POST a new social media link
router.route("/socialmedia").post(createSocialMediaLink);

// PUT (update) an existing social media link
router.route("/socialmedia/:id").put(updateSocialMediaLink);

// DELETE a social media link
router.route("/socialmedia/:id").delete(deleteSocialMediaLink);

module.exports = router;
