const pool = require("../startup/db");
const getGovs = require("./gov");

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
    WHERE govId = ?
    ORDER by reviewId DESC`,
    [govId]
  );
  return reviews;
}

async function getReview(reviewId) {
  // get review from db
  const review = await pool.query(
    `SELECT 
      reviewId, userId, govId, rating, body 
    FROM reviews
    WHERE reviewId = ?`,
    [reviewId]
  );
  return review[0];
}

async function getReviewByGovAndUser(govId, userId) {
  const review = await pool.query(
    `SELECT 
      reviewId, 
      userId, 
      govId, 
      rating, 
      body 
    FROM 
      reviews 
    WHERE 
      userId = ? 
    AND 
      govId = ? `,
    [userId, govId]
  );
  return review[0];
}
async function addReview(userId, govId, rating, body) {
  await pool.query(
    `INSERT INTO reviews
      (userId, govId, rating, body)
    VALUES (?, ?, ?, ?)`,
    [userId, govId, rating, body]
  );
  return getReviewByGovAndUser(govId, userId);
}

async function deleteReview(reviewId) {
  const review = await getReview(reviewId);
  await pool.query(
    `DELETE FROM reviews
    WHERE reviewId = ?`,
    [reviewId]
  );
  return review;
}

async function checkIfReviewed(userId, govId) {
  const review = await pool.query(
    `SELECT reviewId, userId 
    FROM reviews
    WHERE userId = ? AND govId = ?`,
    [userId, govId]
  );
  return review[0];
}
exports.getReviews = getReviews;
exports.getReview = getReview;
exports.addReview = addReview;
exports.deleteReview = deleteReview;
exports.checkIfReviewed = checkIfReviewed;
