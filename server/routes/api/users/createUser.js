const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).post(
  "/users",
  async (req, res, next) => {
    try {
      let user = new User(req.body);
      user = await user.save();
      res.send(user);
    } catch (error) {
      next(error);
    }
  }
);
