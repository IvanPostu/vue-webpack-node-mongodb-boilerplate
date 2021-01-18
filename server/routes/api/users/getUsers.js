const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).get(
  "/users",
  async (req, res, next) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      next(error);
    }
  }
);
