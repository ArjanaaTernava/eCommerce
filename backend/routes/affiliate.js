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
router.post("/affiliates", createAffiliate);

// Get all affiliates
router.get("/affiliates", getAllAffiliates);

// Get a single affiliate by ID
router.get("/affiliates/:id", getAffiliateById);

// Update an affiliate
router.put("/affiliates/:id", updateAffiliate);

// Delete an affiliate
router.delete("/affiliates/:id", deleteAffiliate);

module.exports = router;
