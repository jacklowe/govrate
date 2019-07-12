const {
  generateAuthToken,
  addUser,
  findUserByEmail,
  findUserByUsername
} = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = req.body;

  if (await findUserByEmail(user.email)) {
    return res.status(400).send("Email already registered");
  }

  if (await findUserByUsername(user.username)) {
    return res.status(400).send("Username is taken");
  }

  user = await addUser(user);

  const token = generateAuthToken(user.userId, user.username, user.isAdmin);
  res.header("x-auth-token", token).send(user);
});

module.exports = router;
