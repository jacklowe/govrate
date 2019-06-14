const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = await findUserByEmail(req.body.email);
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = generateAuthToken(userId);
  res.send(token);
});

module.exports = router;
