const winston = require("winston");

module.exports = function() {
  winston.configure({
    transports: [
      new winston.transports.File({
        filename: "error.log",
        level: "error"
      }),
      new winston.transports.File({ filename: "combined.log" }),
      new winston.transports.Console({})
    ]
  });

  process.on("uncaughtException", ex => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  process.on("unhandledRejection", ex => {
    throw ex;
  });
};
