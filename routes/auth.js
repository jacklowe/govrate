const bcrypt = require("bcrypt");
const { generateAuthToken, findUserByEmail } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = await findUserByEmail(req.body.email, true);
  // need to get user object from JSON like [{user}]
  user = JSON.parse(user)[0];

  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid email or passwordkk");

  const token = generateAuthToken(user.userId, user.isAdmin);
  res.send(token);
});

module.exports = router;
