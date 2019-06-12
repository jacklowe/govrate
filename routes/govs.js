const express = require("express");
const router = express.Router({ mergeParams: true });
const { getGovs, addGov } = require("../models/gov");

router.get("/", async (req, res) => {
  const govs = await getGovs();
  res.send(govs);
});

router.post("/", async (req, res) => {
  const updatedGovs = await addGov(req.body.name);
  res.send(updatedGovs);
});
// get a specific gov

module.exports = router;
