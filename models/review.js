const pool = require("../startup/db");

async function getReviews(govId) {
  const reviews = await pool.query(
    `SELECT 
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

async function addReview(review) {
  await pool.query(
    `INSERT INTO reviews
      (userId, govId, rating, body)
    VALUES (?, ?, ?, ?)`,
    [review.userId, review.govId, review.rating, review.body]
  );
  return getReviews(review.govId);
}

exports.getReviews = getReviews;
exports.addReview = addReview;
