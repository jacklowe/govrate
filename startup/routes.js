const govs = require("../routes/govs");

module.exports = function(app) {
  app.use("/api/govs", govs);
};
