const express = require("express");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { getGovById, getGovs, addGov, deleteGov } = require("../models/gov");

router.get("/", async (req, res) => {
  const govs = await getGovs();
  res.json(govs);
});

router.get("/:govId", async (req, res) => {
  const gov = await getGovById(req.params.govId);
  if (!gov.govId)
    return res.status(404).send("No gov exists with the given id");
  res.json(gov);
});

router.post("/", [auth, admin], async (req, res) => {
  const updatedGovs = await addGov(req.body.country);
  res.json(updatedGovs);
});

router.delete("/:govId", [auth, admin], async (req, res) => {
  const gov = await deleteGov(req.params.govId);
  if (!gov.govId) return res.status(404).send("No gov exists with given id");
  res.json(gov);
});

module.exports = router;
