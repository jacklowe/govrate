const express = require("express");
const app = express();
const logger = require("winston");

require("./startup/errors")();
require("./startup/logging")();
require("./startup/routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => logger.info(`listening on port ${port}`));
