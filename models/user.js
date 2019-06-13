const jwt = require("jsonwebtoken");
const config = require("config");

function generateAuthToken(userId) {
  const token = jwt.sign(
    { _id: userId },
    // ,
    // isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
}

exports.generateAuthToken = generateAuthToken;
