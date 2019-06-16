const pool = require("../startup/db");

async function getReviews(govId) {
  const reviews = await pool.query(
    `SELECT 
      reviewId,
      govId,
      country,
      username,
      body,
      rating
    FROM govs
    JOIN reviews
      USING (govId)
    JOIN users
      USING (userId)
    WHERE govId = ?`,
    [govId]
  );
  return JSON.stringify(reviews);
}

async function getReview(userId, govId) {
  // get review from db
}

async function addReview(review) {
  await pool.query(
    `INSERT INTO reviews
      (userId, govId, rating, body)
    VALUES (?, ?, ?, ?)`,
    [review.userId, review.govId, review.rating, review.body]
  );
  return getReviews(review.govId);
}

async function deleteReview(reviewId, govId) {
  await pool.query(
    `DELETE FROM reviews
    WHERE reviewId = ?
    AND
    govId = ?`,
    [reviewId, govId]
  );
  return getReviews(govId);
}

exports.getReviews = getReviews;
exports.addReview = addReview;
exports.deleteReview = deleteReview;
