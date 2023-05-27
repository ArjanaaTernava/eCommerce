const express = require("express");
const router = express.Router();

const {
  createCategory,getCategories, getCategoryById
} = require("../controllers/categoryController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/admin/categories").get(isAuthenticatedUser, getCategories);
router.route("/admin/category/:id").get(isAuthenticatedUser, getCategoryById);
router.route("/admin/category/add").post(isAuthenticatedUser, createCategory);

module.exports = router;
