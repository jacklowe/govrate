const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");
const pool = require("../../../startup/db");

describe("/api/reviews", () => {
  let server;
  beforeEach(() => (server = require("../../../index")));
  afterEach(async () => {
    await clearTestData();
    await server.close();
  });
  afterAll(() => pool.end());

  it("1 should be 1", async () => {
    expect(1).toBe(1);
  });
});
