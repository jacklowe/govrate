const govs = require("../routes/govs");
const reviews = require("../routes/reviews");
const users = require("../routes/users");
const express = require("express");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/govs", govs);
  app.use("/api/govs/:govId/reviews", reviews);
  app.use("/api/users", users);
};
