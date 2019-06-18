const request = require("supertest");
const { generateAuthToken } = require("../../../models/user");
const clearTestData = require("../../../scripts/clearTestData");
const pool = require("../../../startup/db");

describe("/api/auth", () => {
  let server;
  beforeEach(() => (server = require("../../../index")));
  afterEach(async () => {
    await clearTestData();
    await server.close();
  });
  afterAll(() => pool.end());

  it("should return 401 if no token is provided", async () => {
    let token = "";
    const res = await request(server)
      .post("/api/govs")
      .set("x-auth-token", token)
      .send({ country: "UK" });

    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "a";
    const res = await request(server)
      .post("/api/govs")
      .set("x-auth-token", token)
      .send({ country: "UK" });

    expect(res.status).toBe(400);
  });

  it("should return 200 if token is valid", async () => {
    const token = generateAuthToken(1, (isAdmin = true));
    const res = await request(server)
      .post("/api/govs")
      .set("x-auth-token", token)
      .send({ country: "UK" });

    expect(res.status).toBe(200);
  });
});
