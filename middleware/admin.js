module.exports = function(req, res, next) {
  // in auth middleware we store decoded jwt as req.user
  if (!req.user.isAdmin) return res.status(403).send("Access denied");

  next();
};
