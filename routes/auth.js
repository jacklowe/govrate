const bcrypt = require("bcrypt");
const { generateAuthToken } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // body is email and password
  // compare with email in db and look at password...
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = generateAuthToken();
  res.send(token);
});

module.exports = router;
