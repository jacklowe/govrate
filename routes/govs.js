const express = require("express");
const router = express.Router();

const { getGovs } = require("../models/gov");

router.get("/", async (req, res) => {
  const govs = await getGovs();
  res.send(govs);
});

module.exports = router;
