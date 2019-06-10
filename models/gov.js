const pool = require("../startup/db");

async function getGovs() {
  try {
    const govs = await pool.query("SELECT * FROM govs");
    return JSON.stringify(govs);
  } catch (err) {
    throw err;
  }
}

exports.getGovs = getGovs;
