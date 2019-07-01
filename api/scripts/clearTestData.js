const config = require("../config");
const pool = require("../startup/db");

module.exports = async function() {
  if (config.env !== "test" || !config.env) {
    throw new Error(
      "This script clears all data in database tables. Only run in test environments/databases!"
    );
  }
  const deleteRecords = `
  DELETE FROM govs;
  DELETE FROM users;
  DELETE FROM reviews;
  `;
  await pool.query(deleteRecords);
};
