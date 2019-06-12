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

// display a gov and its reviews...
async function getGovReviews(gov) {}

async function addGov(gov) {
  // need to prevent sql injection here
  // probably best to keep this api private
  const govs = await pool.query();
  return JSON.stringify(gov);
}

async function updateGov(gov) {}

async function deleteGov(gov) {}

exports.getGovs = getGovs;
