const app = require("express")();
const config = require("./config");
const logger = require("winston");

require("./startup/errors")();
require("./startup/logging")();
require("./startup/routes")(app);

const server = app.listen(config.app.port, () =>
  logger.info(`listening on port ${config.app.port}`)
);

module.exports = server;
