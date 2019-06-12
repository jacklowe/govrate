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
  const result = await pool.query(
    `INSERT INTO govs (country)
    VALUES (
      ?
    )`,
    [name]
  );
  return JSON.stringify(result);
}

async function updateGov(gov) {}

async function deleteGov(gov) {}

exports.getGovs = getGovs;
exports.addGov = addGov;
