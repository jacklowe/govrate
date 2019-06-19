const request = require("supertest");
const clearTestData = require("../../../scripts/clearTestData");
const { addUser } = require("../../../models/user");
const pool = require("../../../startup/db");

describe("/api/users", () => {
  let server;
  beforeEach(() => (server = require("../../../index")));
  afterEach(async () => {
    await clearTestData();
    await server.close();
  });
  afterAll(() => pool.end());

  describe("POST /", () => {
    const user = {
      email: "jack@gmail.com",
      username: "jack",
      password: "pa55w0rd"
    };

    it("should return 400 if user is already registered", async () => {
      await addUser(user);
      const res = await request(server)
        .post("/api/users")
        .send(user);
      expect(res.status).toBe(400);
    });

    it("should persist user if request is valid", async () => {
      expect(1).toBe(1);
    });

    it("should put token in response header if request is valid", async () => {
      expect(1).toBe(1);
    });

    it("should respond with added user if request is valid", async () => {
      expect(1).toBe(1);
    });
  });
});
