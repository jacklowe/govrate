const { generateAuthToken } = require("../../../models/user");
const auth = require("../../../middleware/auth");

describe("auth middleware", () => {
  it("should populate req.user with the payload of a valid jwt", () => {
    const user = {
      userId: 1,
      username: "jack",
      isAdmin: 1
    };
    const token = generateAuthToken(user.userId, user.username, user.isAdmin);
    const req = {
      header: jest.fn().mockReturnValue(token)
    };
    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.user).toMatchObject(user);
  });
});
