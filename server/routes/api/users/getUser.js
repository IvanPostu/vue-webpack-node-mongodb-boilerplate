const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).get(
  "/users/:id",
  async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
      res.status(200);
    } catch (error) {
      next(error);
    }
  }
);
