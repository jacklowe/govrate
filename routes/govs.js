const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { getGovs, addGov, deleteGov } = require("../models/gov");

router.get("/", async (req, res) => {
  const govs = await getGovs();
  res.send(govs);
});

router.post("/", [auth, admin], async (req, res) => {
  const updatedGovs = await addGov(req.body.name);
  res.send(updatedGovs);
});

router.delete("/:govId", [auth, admin], async (req, res) => {
  const updatedGovs = await deleteGov(req.params.govId);
  res.send(updatedGovs);
});

module.exports = router;
