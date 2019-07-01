module.exports = function() {
  if (!process.env.NODE_ENV) {
    throw new Error("NODE_ENV environment variable is not defined.");
  }
  require("dotenv").config();
};
