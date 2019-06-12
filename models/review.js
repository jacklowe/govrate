const pool = require("../startup/db");

async function getReviews(govId) {
  const reviews = await pool.query(
    `SELECT 
      govId,
      country,
      username,
      body,
      rating
    FROM reviews
    JOIN govs
      USING (govId)
    JOIN users
      USING (userId)
    WHERE govId = ?`,
    [govId]
  );
  return JSON.stringify(reviews);
}

exports.getReviews = getReviews;
