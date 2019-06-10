const pool = require("../startup/db");

async function getGovs() {
  try {
    const govs = await pool.query("SELECT country FROM govs");
    return JSON.stringify(govs);
  } catch (err) {
    console.error(err);
  }
}

exports.getGovs = getGovs;
