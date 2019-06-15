const util = require("util");
const mysql = require("mysql");
const config = require("../config");

const pool = mysql.createPool(config.db);

pool.query = util.promisify(pool.query);

module.exports = pool;
