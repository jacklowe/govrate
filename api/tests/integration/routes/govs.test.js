const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");
const pool = require("../../../startup/db");
const { addGov, getGov } = require("../../../models/gov");
const { generateAuthToken } = require("../../../models/user");

describe("/api/govs", () => {
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
      const token = generateAuthToken(
        1,
        (username = "jack"),
        (isAdmin = false)
      );
      const res = await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      expect(res.status).toBe(403);
    });

    it("should save country if user is admin and logged in", async () => {
      const token = generateAuthToken(1, (username = "jack"), (isAdmin = true));
      await request(server)
        .post("/api/govs")
        .set("x-auth-token", token)
        .send({ country: "UK" });

      const gov = await getGov("UK");
      expect(gov.govId).not.toBeNull();
    });

    it("should return the country if valid request", async () => {
      const token = generateAuthToken(1, (username = "jack"), (isAdmin = true));
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
      const token = "";
      const res = await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      expect(res.status).toBe(401);
    });

    it("should return 403 if client is not admin", async () => {
      const { govId } = await getGov("UK");
      const token = generateAuthToken(
        1,
        (username = "jack"),
        (isAdmin = false)
      );
      const res = await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      expect(res.status).toBe(403);
    });

    it("should return 404 if no gov with given id if found", async () => {
      const govId = 0.5;
      const token = generateAuthToken(1, (username = "jack"), (isAdmin = true));
      const res = await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      expect(res.status).toBe(404);
    });

    it("should delete the genre if input is valid", async () => {
      const { govId } = await getGov("UK");
      const token = generateAuthToken(1, (username = "jack"), (isAdmin = true));
      await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      const gov = await getGov("UK");
      expect(gov).toBeUndefined();
    });

    it("should return the removed gov", async () => {
      const { govId } = await getGov("UK");
      const token = generateAuthToken(1, (username = "jack"), (isAdmin = true));
      const res = await request(server)
        .delete(`/api/govs/${govId}`)
        .set("x-auth-token", token)
        .send();

      expect(res.body).toHaveProperty("govId", govId);
      expect(res.body).toHaveProperty("country", "UK");
    });
  });
});
