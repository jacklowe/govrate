const app = require("express")();
const config = require("./config");
const logger = require("winston");
const pool = require("./startup/db");

require("./startup/errors")();
require("./startup/logging")();
require("./startup/routes")(app);

const server = app.listen(config.app.port, () => {
  if (config.env !== "test") {
    logger.info(`listening on port ${config.app.port}`);
  }
});

// close db conns when server closes
process.on("SIGINT", () => pool.end());

module.exports = server;
