const express = require("express");
const router = express.Router({ mergeParams: true });
const { getReviews } = require("../models/review");

router.get("/", async (req, res) => {
  const reviews = await getReviews(req.params.govId);
  res.send(reviews);
});

module.exports = router;
