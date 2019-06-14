const jwt = require("jsonwebtoken");
const config = require("config");
const pool = require("../startup/db");
const bcrypt = require("bcrypt");

function generateAuthToken(userId) {
  const token = jwt.sign(
    { _id: userId },
    // ,
    // isAdmin: this.isAdmin },
    process.env.jwtPrivateKey
  );
  return token;
}

async function addUser(user) {
  let { email, username, password } = user;

  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  await pool.query(
    `INSERT INTO users (email, username, password)
    VALUES (
      ?, ?, ?
    )`,
    [email, username, password]
  );

  return findUserByEmail(email);
}

async function findUserByEmail(email) {
  const user = await pool.query(
    `SELECT userId, username, email FROM users WHERE email = ?`,
    [email]
  );
  return JSON.stringify(user);
}

exports.generateAuthToken = generateAuthToken;
exports.addUser = addUser;
exports.findUserByEmail = findUserByEmail;
