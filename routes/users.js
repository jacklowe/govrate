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

  const response = await addUser(user);

  const { userId } = findUserByEmail();
  const token = generateAuthToken(userId);

  res.header("x-auth-token", token).send(response);
});

module.exports = router;
