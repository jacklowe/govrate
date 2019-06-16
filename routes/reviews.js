const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth");
const { getReviews, addReview, deleteReview } = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await getReviews(req.params.govId);
  res.send(reviews);
});

router.post("/", [auth], async (req, res) => {
  const review = { ...req.body };
  const updatedReviews = await addReview(review);
  res.send(updatedReviews);
});

router.delete("/:reviewId", [auth], async (req, res) => {
  // need to add here... if userId matches that of review in db...
  const updatedReviews = await deleteReview(
    req.params.reviewId,
    req.params.govId
  );
  res.send(updatedReviews);
});

module.exports = router;
