const express = require("express");
const govs = require("../routes/govs");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/govs", govs);
};
