const pool = require("../startup/db");
const config = require("../config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getGovs } = require("./gov");

function generateAuthToken(userId, isAdmin) {
  const token = jwt.sign(
    { _id: userId, isAdmin: isAdmin },
    config.jwt.privateKey
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

async function findUserByEmail(email, sendPassword = false) {
  let andPassword = "";
  if (sendPassword) {
    andPassword = ", password";
  }

  let user = await pool.query(
    `SELECT 
      userId, 
      username, 
      email, 
      isAdmin 
      ${andPassword} 
    FROM users 
    WHERE email = ?`,
    [email]
  );
  return JSON.stringify(user);
}

async function deleteUser(userId) {
  await pool.query(
    `DELETE FROM users
    WHERE userId = ?`,
    [userId]
  );
  return getGovs();
}

exports.generateAuthToken = generateAuthToken;
exports.addUser = addUser;
exports.findUserByEmail = findUserByEmail;
exports.deleteUser = deleteUser;
