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
  return govs;
}

async function addGov(country) {
  const gov = await pool.query(
    `INSERT INTO govs (country)
    VALUES (
      ?
    )`,
    [country]
  );
  return getGov(country); //getGovs();
}

async function deleteGov(govId) {
  await pool.query(
    `DELETE FROM govs
    WHERE govId = ?`,
    [govId]
  );
  return getGovs();
}

async function getGov(country) {
  const gov = await pool.query(
    `SELECT govId, country FROM govs
    WHERE country = ?`,
    [country]
  );
  return gov[0];
}

exports.getGovs = getGovs;
exports.addGov = addGov;
exports.deleteGov = deleteGov;
exports.getGov = getGov;
