const pool = require("../startup/db");
const { generateAuthToken, addUser } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = req.body;
  console.log(user);

  // add user to db...
  const govs = await addUser(user);

  // const token = generateAuthToken(userId);
  res.send(govs);
  // .header("x-auth-token", token)
});

module.exports = router;
