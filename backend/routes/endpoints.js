const express = require("express");
const router = express.Router();

const {
  getBrands,
  getBrandById,
  createBrand,
} = require("../controllers/brandsController");

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  logout,
  allUsers,
  getUserDetails,
  updateUser,
  deleteUser,
} = require("../controllers/authController");

const {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

const {
  processPayment,
  sendStripApi,
} = require("../controllers/paymentController");

const {
  getProducts,
  getAdminProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");

const {
  getQnAById,
  getAllQnA,
  createQnA,
  updateQnA,
  deleteQnA,
} = require("../controllers/qnaController");

const {
  createSeller,
  getSellerById,
  getSellers,
} = require("../controllers/sellerController");

const { submitQuestion } = require("../controllers/supportController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/brands").get(getBrands);
router.route("/brands/:id").get(getBrandById);
router.route("/brands").post(createBrand);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(getUserProfile);
router.route("/password/update").put(updatePassword);
router.route("/me/update").put(updateProfile);
router.route("/admin/users").get(allUsers);
router.route("/admin/user/:id").get(getUserDetails);
router.route("/admin/update/user/:id").put(updateUser);
router.route("/admin/delete/user/:id").delete(deleteUser);

router.route("/admin/categories").get(getCategories);
router.route("/admin/category/:id").get(getCategoryById);
router.route("/admin/category/add").post(createCategory);
router.route("/admin/category/delete/:id").delete(deleteCategory);
router.route("/admin/category/update/:id").put(updateCategory);

router.route("/order/new").post(newOrder);
router.route("/order/:id").get(getSingleOrder);
router.route("/orders/me").get(myOrders);
router.route("/admin/orders").get(allOrders);
router.route("/admin/update/order/:id").put(updateOrder);
router.route("/admin/delete/order/:id").delete(deleteOrder);

router.route("/payment/process").post(processPayment);
router.route("/stripeapi").get(sendStripApi);

router.route("/products").get(getProducts);
router.route("/admin/products").get(getAdminProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/new").post(newProduct);
router.route("/admin/update/product/:id").put(updateProduct);
router.route("/admin/delete/product/:id").delete(deleteProduct);
router.route("/review/new").put(createProductReview);
router.route("/reviews").get(getProductReviews);
router.route("/reviews/delete").delete(deleteReview);
router.route("/qna").get(getAllQnA).post(createQnA);

router.route("/qna/:id").get(getQnAById).put(updateQnA).delete(deleteQnA);
router.route("/qna").get(getAllQnA).post(createQnA);
router.route("/qna/:id").get(getQnAById).put(updateQnA).delete(deleteQnA);

router.route("/admin/seller/add").post(isAuthenticatedUser, createSeller);
router.route("/admin/sellers").get(isAuthenticatedUser, getSellers);
router.route("/admin/seller/:id").get(isAuthenticatedUser, getSellerById);

router.route("/support").post(submitQuestion);

module.exports = router;
