const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");

describe("govs routes", () => {
  beforeEach(() => (server = require("../../../index")));
  afterEach(async () => {
    await clearTestData();
    await server.close();
  });

  it("1 should be 1", async () => {
    expect(1).toBe(1);
  });
});
