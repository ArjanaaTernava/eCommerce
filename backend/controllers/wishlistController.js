const Wishlist = require("../models/wishlist");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const Product = require("../models/product")
const User = require("../models/user")

//api/v1/wishlist
exports.getWishlistItems = catchAsyncErrors(async (req, res, next) => {
  try {
    // Fetch all wishlist items
    const wishlistItems = await Wishlist.find().populate('product', 'name').populate('user', 'name').populate({
      path: 'user',
      select: 'name wishlist', // Include the wishlist field from the User model
      populate: {
        path: 'wishlist',
        populate: { path: 'product', select: 'name' } // Populate the product field in the wishlist
      }
    });;
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the wishlist items.' });
  }
});
 // POST /api/v1/wishlist
exports.addToWishlist = catchAsyncErrors(async (req, res, next) => {
    try {
      const { productId, userId } = req.body;
  
      // Check if the product exists
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found.' });
      }
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }
  
      // Create a new wishlist item
      const wishlistItem = new Wishlist({
        product: productId,
        user: userId,
        isLiked: true
      });
      // Save the wishlist item
      const savedItem = await wishlistItem.save();

      // Associate the wishlist item with the user's wishlist field
      user.wishlist = wishlistItem._id;
      await user.save();
  
      res.status(200).json(savedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while adding the product to the wishlist.' });
    }
  });

  

  
  //DELETE /api/v1/wishlist/:productId
  exports.removeFromWishlist = catchAsyncErrors(async (req, res, next) => {
    const { productId } = req.params;
    const user = req.user;
  
    const wishlist = await Wishlist.findOneAndUpdate(
      { user: user._id },
      { $pull: { items: { product: productId } } },
      { new: true }
    );
  
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        error: "Wishlist not found",
      });
    }
  
    res.status(200).json({
      success: true,
      message: "Item removed from wishlist successfully!",
      wishlist: wishlist.items,
    });
  });
  