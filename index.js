const express = require("express");
const app = express();

require("./startup/routes")(app);
// const util = require("util");

// const mysql = require("mysql");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "FbwAH4C8$uy7",
//   database: "govrate"
// });
// pool.query = util.promisify(pool.query);

// app.get("/", async (req, res) => {
//   const govs = await getGovs();
//   res.send(govs);
// });

// app.get("/users", async (req, res) => {
//   const users = await getUsers();
//   res.send(users);
// });

// app.get("/reviews", async (req, res) => {
//   const reviews = await getReviews();
//   res.send(reviews);
// });

// async function getGovs() {
//   try {
//     const govs = await pool.query("SELECT * FROM govs");
//     return JSON.stringify(govs);
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// async function getUsers() {
//   try {
//     const users = await pool.query("SELECT * FROM users");
//     return JSON.stringify(users);
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// async function getReviews() {
//   try {
//     const reviews = await pool.query("SELECT * FROM reviews");
//     return JSON.stringify(reviews);
//   } catch (err) {
//     throw new Error(err);
//   }
// }

app.listen(8000, () => console.log("listening on port 8000"));
