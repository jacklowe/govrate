const { generateAuthToken, addUser } = require("../models/user");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = req.body;

  user = await addUser(user);

  const token = generateAuthToken(user.userId, user.isAdmin);
  res.header("x-auth-token", token).send(user);
});

module.exports = router;
