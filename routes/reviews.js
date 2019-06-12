const express = require("express");
const router = express.Router({ mergeParams: true });
const { getReviews, addReview } = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await getReviews(req.params.govId);
  res.send(reviews);
});

router.post("/", async (req, res) => {
  const review = { ...req.body };
  const updatedReviews = await addReview(review);
  res.send(updatedReviews);
});

module.exports = router;
