const govs = require("../routes/govs");
const reviews = require("../routes/reviews");

module.exports = function(app) {
  app.use("/api/govs", govs);
  app.use("/api/govs/:govId/reviews", reviews);
};
