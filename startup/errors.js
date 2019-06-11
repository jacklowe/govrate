const logger = require("winston");

module.exports = function() {
  process.on("uncaughtException", ex => {
    logger.error(ex.message, ex);
    process.exit(1);
  });
  process.on("unhandledRejection", ex => {
    throw ex;
  });
};
