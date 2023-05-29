const express = require("express");
const router = express.Router();

const {
  getQnAById,
  getAllQnA,
  createQnA,
  updateQnA,
  deleteQnA
} = require("../controllers/qnaController");

router.route("/qna")
  .get(getAllQnA)
  .post(createQnA);

router.route("/qna/:id")
  .get(getQnAById)
  .put(updateQnA)
  .delete(deleteQnA);

module.exports = router;
