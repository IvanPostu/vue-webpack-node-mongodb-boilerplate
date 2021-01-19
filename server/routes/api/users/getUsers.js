const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).get(
  "/users",
  async (req, res, next) => {
    try {
      const users = await User.find();
      res.send(users);
      res.status(200);
    } catch (error) {
      next(error);
    }
  }
);
