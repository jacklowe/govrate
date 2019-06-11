const pool = require("../startup/db");

async function getGovs() {
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
}

async function addGov(gov) {
  // need to prevent sql injection here
  // probably best to keep this api private
  const govs = await pool.query();
  return JSON.stringify(gov);
}
exports.getGovs = getGovs;
