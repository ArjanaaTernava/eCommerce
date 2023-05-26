const express = require("express");
const router = express.Router();

const {
  getWishlistItems,
  addToWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/wishlist").get(isAuthenticatedUser, getWishlistItems);
router.route("/wishlist/add").post(isAuthenticatedUser, addToWishlist);
router.route("/wishlist/:productId").delete(isAuthenticatedUser, removeFromWishlist);

module.exports = router;
