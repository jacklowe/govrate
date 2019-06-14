const pool = require("../startup/db");
const {
  generateAuthToken,
  addUser,
  findUserByEmail
} = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = req.body;
  console.log(user);

  // add user to db...
  const response = await addUser(user);

  const { userId } = findUserByEmail();
  const token = generateAuthToken(userId);
  res.send(response).header("x-auth-token", token);
});

module.exports = router;
