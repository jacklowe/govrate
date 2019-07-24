const pool = require("../startup/db");

async function getGovs() {
  const govs = await pool.query(
    `SELECT
      govId,
      country, 
      ROUND(AVG(rating), 1) as averageRating
    FROM govs
    LEFT JOIN reviews USING (govId) 
    GROUP BY govId
    ORDER BY averageRating DESC;`
  );
  return govs;
}

async function addGov(country) {
  await pool.query(
    `INSERT INTO govs (country)
    VALUES (
      ?
    )`,
    [country]
  );
  return getGov(country);
}

async function deleteGov(govId) {
  const gov = getGovById(govId);
  await pool.query(
    `DELETE FROM govs
    WHERE govId = ?`,
    [govId]
  );
  return gov;
}

async function getGov(country) {
  const gov = await pool.query(
    `SELECT govId, country FROM govs
    WHERE country = ?`,
    [country]
  );
  return gov[0];
}

async function getGovById(govId) {
  const gov = await pool.query(
    `SELECT
      govId,
      country, 
      ROUND(AVG(rating), 1) as averageRating
    FROM govs
    LEFT JOIN reviews USING (govId)
    WHERE govId = ?`,
    [govId]
  );
  return gov[0];
}

exports.getGovs = getGovs;
exports.addGov = addGov;
exports.deleteGov = deleteGov;
exports.getGov = getGov;
exports.getGovById = getGovById;
