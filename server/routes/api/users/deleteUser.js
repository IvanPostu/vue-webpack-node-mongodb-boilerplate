const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).delete(
  "/users/:id",
  async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.send(user);
      res.status(201);
    } catch (error) {
      next(error);
    }
  }
);
