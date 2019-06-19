const request = require("supertest");
const { addUser } = require("../../../models/user");
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

  describe("POST /", () => {});
});
