const logger = require("winston");

module.exports = function() {
  logger.configure({
    transports: [
      new logger.transports.File({ filename: "combined.log" }),
      new logger.transports.File({
        filename: "error.log",
        level: "error"
      }),
      new logger.transports.Console({})
    ]
  });
};
