const config = require("../config");
const pool = require("../startup/db");
// clear test data from db

if (config.env !== "test" || !config.env) {
  throw new Error(
    "This script clears all data in database tables. Only run on test databases!"
  );
}
// remember app db account should not be allowed to delete many rows at once

module.exports = async function() {
  const deleteRecords = `
  DELETE FROM govs;
  DELETE FROM users;
  DELETE FROM reviews;
  `;
  await pool.query(deleteRecords);
};
