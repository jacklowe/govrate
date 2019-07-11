const govs = require("../routes/govs");
const reviews = require("../routes/reviews");
const users = require("../routes/users");
const auth = require("../routes/auth");
const express = require("express");
const config = require("../config");
const cors = require("cors");

corsOptions = {
  origin: config.frontend.url,
  allowedHeaders: ["x-auth-token", "content-type"]
};

module.exports = function(app) {
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use("/api/govs", govs);
  app.use("/api/govs/:govId/reviews", reviews);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
