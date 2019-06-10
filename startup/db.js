const util = require("util");
const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.mysqlPassword,
  database: "govrate"
});

pool.query = util.promisify(pool.query);

module.exports = pool;
