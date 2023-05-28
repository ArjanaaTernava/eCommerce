const express = require("express");
const router = express.Router();

const {
  createCategory,
  getCategories,
  getCategoryById,
  deleteCategory,
} = require("../controllers/categoryController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/admin/categories").get(isAuthenticatedUser, getCategories);
router.route("/admin/category/:id").get(isAuthenticatedUser, getCategoryById);
router.route("/admin/category/add").post(isAuthenticatedUser, createCategory);
router
  .route("/admin/category/delete/:id")
  .delete(isAuthenticatedUser, deleteCategory);

module.exports = router;
