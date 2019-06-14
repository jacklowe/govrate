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

  user = await addUser(user);

  const token = generateAuthToken(user.userId);
  res.header("x-auth-token", token).send(user);
});

module.exports = router;
