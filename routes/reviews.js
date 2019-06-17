const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth");
const {
  getReviews,
  getReview,
  checkIfReviewed,
  addReview,
  deleteReview
} = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await getReviews(req.params.govId);
  res.send(reviews);
});

router.post("/", [auth], async (req, res) => {
  const userId = req.user._id;
  const govId = req.params.govId;
  const { rating, body } = req.body;

  const previousReview = await checkIfReviewed(userId, govId);
  if (previousReview) {
    return res.status(400).send("You have already reviewed this gov");
  }

  const updatedReviews = await addReview(userId, govId, rating, body);
  res.send(updatedReviews);
});

router.delete("/:reviewId", [auth], async (req, res) => {
  const userId = req.user._id;
  const { reviewId } = req.params;

  const review = await getReview(reviewId);
  if (userId !== review.userId) {
    return res.status(400).send("That's not yours to delete");
  }

  const updatedReviews = await deleteReview(reviewId);
  res.send(updatedReviews);
});

module.exports = router;
