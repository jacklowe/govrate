const jwt = require("jsonwebtoken");
const config = require("config");
const pool = require("../startup/db");

function generateAuthToken(userId) {
  const token = jwt.sign(
    { _id: userId },
    // ,
    // isAdmin: this.isAdmin },
    config.get("jwtPrivateKey")
  );
  return token;
}

async function addUser() {
  // hahaha
  pool.query();
  // need to hash and salt baybe
  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  // add user to db...
  await user.save();
}

async function findUserByEmail() {}
exports.generateAuthToken = generateAuthToken;
