const Wishlist = require("../models/wishlist");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
//api/v1/wishlist
exports.getWishlistItems = catchAsyncErrors(async (req, res, next) => {
    const user = req.user; // Assuming you have user authentication implemented
    const wishlist = await Wishlist.findOne({ user });
  
    if (!wishlist) {
      return res.status(404).json({
        success: false,
        error: "Wishlist not found",
      });
    }
  
    res.status(200).json({  
      success: true,
      wishlist: wishlist.items,
    });
  });
 // POST /api/v1/wishlist
exports.addToWishlist = catchAsyncErrors(async (req, res, next) => {
  const { productId } = req.body;
  const user = req.user;

  // Find the product by ID
  const product = await Product.findById(productId);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Check if the product is already in the user's wishlist
  const isProductInWishlist = user.wishlist.includes(productId);

  if (isProductInWishlist) {
    return next(new ErrorHandler("Product is already in the wishlist", 400));
  }

  // Add the product to the user's wishlist
  user.wishlist.push(productId);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Product added to wishlist successfully",
    wishlist: user.wishlist,
  });
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
  