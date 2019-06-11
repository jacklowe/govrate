const pool = require("../startup/db");

async function getGovs() {
  try {
    const govs = await pool.query(
      `SELECT
        govId, 
        country, 
        ROUND(AVG(rating), 1) as averageRating
      FROM govs
      JOIN reviews USING (govId) 
      GROUP BY govId;`
    );
    return JSON.stringify(govs);
  } catch (err) {
    console.error(err);
  }
}

exports.getGovs = getGovs;
