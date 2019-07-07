const govs = require("../routes/govs");
const reviews = require("../routes/reviews");
const users = require("../routes/users");
const auth = require("../routes/auth");
const express = require("express");

const accessControlHeader = function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
};

module.exports = function(app) {
  app.use(express.json());
  app.use(accessControlHeader);
  app.use("/api/govs", govs);
  app.use("/api/govs/:govId/reviews", reviews);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
