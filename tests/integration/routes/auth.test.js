const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");
const { generateAuthToken } = require("../../../models/user");
const { deleteGov } = require("../../../models/gov");

// add to empty db so that id is 1. clear db after.

describe("auth middleware", () => {
  beforeEach(() => (server = require("../../../index")));
  afterEach(async () => {
    await clearTestData();
    await server.close();
  });

  it("1 should be 1", async () => {
    expect(1).toBe(1);
  });
});
