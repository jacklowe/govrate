const pool = require("../startup/db");

async function getGovs() {
  const govs = await pool.query(
    `SELECT
      govId,
      country, 
      ROUND(AVG(rating), 1) as averageRating
    FROM govs
    LEFT JOIN reviews USING (govId) 
    GROUP BY govId;`
  );
  return JSON.stringify(govs);
}

async function addGov(name) {
  await pool.query(
    `INSERT INTO govs (country)
    VALUES (
      ?
    )`,
    [name]
  );
  return getGovs();
}

// this really needs to be a transaction to get rid of relevant
// reviews
async function deleteGov(govId) {
  await pool.query(
    `DELETE FROM govs
    WHERE govId = ?`,
    [govId]
  );
  return getGovs();
}

exports.getGovs = getGovs;
exports.addGov = addGov;
exports.deleteGov = deleteGov;
