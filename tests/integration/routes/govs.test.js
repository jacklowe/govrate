const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");
const pool = require("../../../startup/db");
const { addGov, getGov } = require("../../../models/gov");
const { generateAuthToken } = require("../../../models/user");

describe("govs routes", () => {
  let server;
  beforeEach(() => (server = require("../../../index")));

  afterEach(async () => {
    await clearTestData();
    await server.close();
  });
  afterAll(() => pool.end());

  describe("GET /", () => {
    it("should return all govs", async () => {
      await addGov("UK");
      await addGov("GB");

      const res = await request(server).get("/api/govs");

      expect(res.body.some(g => g.country === "UK")).toBeTruthy();
      expect(res.body.some(g => g.country === "GB")).toBeTruthy();
    });
  });

  describe("POST /", () => {
    it("should return 401 if client is not logged in", async () => {
      const token = "";
      const res = await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      expect(res.status).toBe(401);
    });

    it("should return 403 if client is not admin", async () => {
      const token = generateAuthToken(1, (isAdmin = false));
      const res = await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      expect(res.status).toBe(403);
    });

    it("should save country if user is admin and logged in", async () => {
      const token = generateAuthToken(1, (isAdmin = true));
      await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      const gov = await getGov("UK");
      expect(gov.govId).not.toBeNull();
    });

    it("should return the country if valid request", async () => {
      const token = generateAuthToken(1, (isAdmin = true));
      const res = await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      expect(res.body).toHaveProperty("govId");
      expect(res.body).toHaveProperty("country", "UK");
    });
  });

  describe("DELETE /:govId", () => {
    beforeEach(async () => {
      await addGov("UK");
    });

    it("should return 401 if client is not logged in", async () => {
      const { govId } = await getGov("UK");
      console.log(govId);
      const token = "";
      const res = await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      expect(res.status).toBe(401);
    });
  });
});
