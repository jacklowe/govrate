const util = require("util");
const mysql = require("mysql");
const config = require("config");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.mySqlPassword,
  database: "govrate"
});

pool.query = util.promisify(pool.query);

module.exports = pool;
