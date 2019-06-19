const request = require("supertest");
const { addUser, generateAuthToken } = require("../../../models/user");
const { addGov } = require("../../../models/gov");
const { addReview } = require("../../../models/review");
const clearTestData = require("../../../scripts/clearTestData");
const pool = require("../../../startup/db");

describe("/api/reviews", () => {
  let server;
  let user;
  let gov;
  beforeEach(async () => {
    server = require("../../../index");
    user = await addUser({
      username: "jack",
      email: "jack@gmail.com",
      password: "pa55w0rd"
    });
    gov = await addGov("UK");
  });

  afterEach(async () => {
    await clearTestData();
    await server.close();
  });

  afterAll(() => pool.end());

  describe("GET /", () => {
    let review;
    beforeEach(async () => {
      review = await addReview(user.userId, gov.govId, 3, "lul");
    });

    it("should return all reviews for a gov", async () => {
      const res = await request(server).get(`/api/govs/${gov.govId}/reviews`);

      expect(res.body[0]).toHaveProperty("rating", review.rating);
    });
  });

  describe("POST /", () => {
    it("should return 401 if client is not logged in", async () => {
      const token = "";
      const res = await request(server)
        .post(`/api/govs/${gov.govId}/reviews`)
        .set("x-auth-token", token)
        .send({
          rating: 3,
          body: "luls"
        });

      expect(res.status).toBe(401);
    });

    it("should return 400 if have already reviewed the gov", async () => {
      await addReview(user.userId, gov.govId, 3, "lul");
      const token = generateAuthToken(user.userId);
      const res = await request(server)
        .post(`/api/govs/${gov.govId}/reviews`)
        .set("x-auth-token", token)
        .send({
          rating: 3,
          body: "hahaha"
        });

      expect(res.status).toBe(400);
    });

    it("should return 200 if valid request", async () => {
      const token = generateAuthToken(user.userId);
      const res = await request(server)
        .post(`/api/govs/${gov.govId}/reviews`)
        .set("x-auth-token", token)
        .send({
          rating: 3,
          body: "hahaha"
        });

      expect(res.status).toBe(200);
    });

    it("should return review if valid request", async () => {
      const token = generateAuthToken(user.userId);
      const res = await request(server)
        .post(`/api/govs/${gov.govId}/reviews`)
        .set("x-auth-token", token)
        .send({
          rating: 3,
          body: "hahaha"
        });
      expect(res.body).toHaveProperty("rating", 3);
      expect(res.body).toHaveProperty("body", "hahaha");
    });
  });
});
