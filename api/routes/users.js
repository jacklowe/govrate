const {
  generateAuthToken,
  addUser,
  findUserByEmail
} = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = req.body;

  if (await findUserByEmail(user.email)) {
    return res.status(400).send("User already registered");
  }

  user = await addUser(user);

  const token = generateAuthToken(user.userId, user.username, user.isAdmin);
  res.header("x-auth-token", token).send(user);
});

module.exports = router;
