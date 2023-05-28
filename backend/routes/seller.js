const express = require("express");
const router = express.Router();

const {
  createSeller,
  getSellerById,
  getSellers,
} = require("../controllers/sellerController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/admin/seller/add").post(isAuthenticatedUser, createSeller);
router.route("/admin/sellers").get(isAuthenticatedUser, getSellers);
router.route("/admin/seller/:id").get(isAuthenticatedUser, getSellerById);

module.exports = router;



