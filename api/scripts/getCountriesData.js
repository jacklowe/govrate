const axios = require("axios");
const mysql = require("mysql");
const config = require("../config");

// initialise environment variables
require("../startup/config")();

const connection = mysql.createConnection(config.db);

async function main() {
  const res = await axios.get(
    "https://restcountries.eu/rest/v2/all?fields=name"
  );
  const countries = res.data;

  connection.connect();
  for (let i = 0; i < countries.length; i++) {
    connection.query(
      `INSERT INTO govs (country)
      VALUES (
        ?
      )`,
      [countries[i].name],
      function(error, results, fields) {
        if (error) throw error;
      }
    );
  }
  connection.end();
}

main();
