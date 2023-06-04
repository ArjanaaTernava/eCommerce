const express = require("express");
const router = express.Router();
const {
  createAffiliate,
  getAllAffiliates,
  getAffiliateById,
  updateAffiliate,
  deleteAffiliate,
} = require("../controllers/affiliateController");

// Create a new affiliate
router.route("/affiliates").post(createAffiliate);

// Get all affiliates
router.route("/affiliates").get(getAllAffiliates);

// Get a single affiliate by ID
router.route("/affiliates/:id").get(getAffiliateById);

// Update an affiliate
router.route("/affiliates/:id").put(updateAffiliate);

// Delete an affiliate
router.route("/affiliates/:id").delete(deleteAffiliate);

module.exports = router;
