const env = process.env.NODE_ENV;

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 8080
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    user: process.env.DEV_DB_USER || "root",
    password: process.env.DEV_DB_PASSWORD,
    port: parseInt(process.env.DEV_DB_PORT) || 3306,
    name: process.env.DEV_DB_NAME || "govrate"
  }
};

const test = {
  app: {
    port: parseInt(process.env.TEST_APP_PORT) || 8080
  },
  db: {
    host: process.env.TEST_DB_HOST || "localhost",
    user: process.env.TEST_DB_USER || "root",
    password: process.env.TEST_DB_PASSWORD || process.env.DEV_DB_PASSWORD,
    port: parseInt(process.env.TEST_DB_PORT) || 3306,
    name: process.env.TEST_DB_NAME || "govrate_tests"
  }
};

const config = {
  dev,
  test
};

module.exports = config[env];
