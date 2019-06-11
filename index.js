const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/logging")();
require("./startup/routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => winston.info("server is listening for requests..."));
