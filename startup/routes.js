const govs = require("../routes/govs");
const reviews = require("../routes/reviews");
const express = require("express");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/govs", govs);
  app.use("/api/govs/:govId/reviews", reviews);
};
