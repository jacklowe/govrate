const express = require("express");
const router = express.Router({ mergeParams: true });
const { getReviews, addReview, deleteReview } = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await getReviews(req.params.govId);
  res.send(reviews);
});

router.post("/", async (req, res) => {
  const review = { ...req.body };
  const updatedReviews = await addReview(review);
  res.send(updatedReviews);
});

router.delete("/:reviewId", async (req, res) => {
  const updatedReviews = await deleteReview(
    req.params.reviewId,
    req.params.govId
  );
  res.send(updatedReviews);
});

module.exports = router;
