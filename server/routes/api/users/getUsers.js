const Router = require("express").Router;

module.exports = Router({ mergeParams: true }).get(
  "/users",
  async (req, res, next) => {
    try {
      const { User } = req.models;
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  }
);
