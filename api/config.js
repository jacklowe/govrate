const env = process.env.NODE_ENV;
// note that Jest sets NODE_ENV to test by default
require("./startup/config")();

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 8080
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    user: process.env.DEV_DB_USER || "root",
    password: process.env.DEV_DB_PASSWORD,
    port: parseInt(process.env.DEV_DB_PORT) || 3306,
    database: process.env.DEV_DB_NAME || "govrate"
  },
  jwt: {
    privateKey: process.env.DEV_JWT_PRIVATE_KEY
  },
  frontend: {
    url: process.env.DEV_FRONTEND_URL || "http://localhost:3000"
  },
  env: "dev"
};

const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 8888
  },
  db: {
    host: process.env.TEST_DB_HOST || "localhost",
    user: process.env.TEST_DB_USER || "root",
    password: process.env.TEST_DB_PASSWORD || process.env.DEV_DB_PASSWORD,
    port: parseInt(process.env.TEST_DB_PORT) || 3306,
    database: process.env.TEST_DB_NAME || "govrate_tests",
    multipleStatements: true
  },
  jwt: {
    privateKey:
      process.env.TEST_JWT_PRIVATE_KEY || process.env.DEV_JWT_PRIVATE_KEY
  },
  frontend: {
    url: process.env.TEST_FRONTEND_URL || "http://localhost:3000"
  },
  env: "test"
};

const config = {
  dev,
  test
};

module.exports = config[env];
