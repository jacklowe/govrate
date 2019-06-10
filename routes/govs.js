const express = require("express");
const router = express.Router();

const { getGovs } = require("../models/gov");

router.get("/", async (req, res) => {
  try {
    const govs = await getGovs();
    res.send(govs);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
