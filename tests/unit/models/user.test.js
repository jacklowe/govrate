const { generateAuthToken } = require("../../../models/user");
const jwt = require("jsonwebtoken");
const config = require("../../../config");

describe("generateAuthToken", () => {
  it("should generate a valid JWT", () => {
    const payload = {
      userId: 1,
      isAdmin: true
    };
    const token = generateAuthToken(payload.userId, payload.isAdmin);
    const decoded = jwt.verify(token, config.jwt.privateKey);
    expect(decoded).toMatchObject(payload);
  });
});
