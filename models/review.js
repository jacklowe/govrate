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

async function addReview(govId, userId) {}
exports.getReviews = getReviews;
