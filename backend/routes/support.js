const express = require("express");
const router = express.Router();

const { submitQuestion } = require("../controllers/supportController");

router.route("/support").post(submitQuestion);

module.exports = router;
