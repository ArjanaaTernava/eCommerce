const express = require("express");
const router = express.Router();

const {
  createAffiliate,
  getAllAffiliates,
  getAffiliateById,
  updateAffiliate,
  deleteAffiliate,
} = require("../controllers/affiliateController");

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

const {
  createSocialMediaLink,
  deleteSocialMediaLink,
  getAllSocialMediaLinks,
  getSocialMediaLinkById,
  updateSocialMediaLink,
} = require("../controllers/smController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/brands").get(getBrands);
router.route("/brands/:id").get(getBrandById);
router.route("/brands").post(createBrand);

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails);
router
  .route("/admin/update/user/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser);
router
  .route("/admin/delete/user/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

router.route("/admin/categories").get(getCategories);
router.route("/admin/category/:id").get(getCategoryById);
router.route("/admin/category/add").post(createCategory);
router.route("/admin/category/delete/:id").delete(deleteCategory);
router.route("/admin/category/update/:id").put(updateCategory);

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);
router
  .route("/admin/orders/")
  .get(isAuthenticatedUser, authorizeRoles("admin"), allOrders);
router
  .route("/admin/update/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder);
router
  .route("/admin/delete/order/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

router.route("/payment/process").post(processPayment);
router.route("/stripeapi").get(sendStripApi);

router.route("/products").get(getProducts);
router.route("/admin/products").get(getAdminProducts);
router.route("/product/:id").get(getSingleProduct);

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);
router
  .route("/admin/update/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/delete/product/:id")
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.route("/review/new").put(isAuthenticatedUser, createProductReview);
router.route("/reviews").get(isAuthenticatedUser, getProductReviews);
router.route("/reviews/delete").delete(isAuthenticatedUser, deleteReview);

router.route("/qna").get(getAllQnA).post(createQnA);
router.route("/qna").get(getAllQnA).post(createQnA);
router.route("/qna/:id").get(getQnAById).put(updateQnA).delete(deleteQnA);

router.route("/admin/seller/add").post(isAuthenticatedUser, createSeller);
router.route("/admin/sellers").get(isAuthenticatedUser, getSellers);
router.route("/admin/seller/:id").get(isAuthenticatedUser, getSellerById);

router.route("/support").post(submitQuestion);

router.route("/affiliates").post(createAffiliate);
router.route("/affiliates").get(getAllAffiliates);
router.route("/affiliates/:id").get(getAffiliateById);
router.route("/affiliates/:id").put(updateAffiliate);
router.route("/affiliates/:id").delete(deleteAffiliate);

router.route("/socialmedia").get(getAllSocialMediaLinks);
router.route("/socialmedia/:id").get(getSocialMediaLinkById);
router.route("/socialmedia").post(createSocialMediaLink);
router.route("/socialmedia/:id").put(updateSocialMediaLink);
router.route("/socialmedia/:id").delete(deleteSocialMediaLink);


module.exports = router;
