const Router = require("express").Router;

module.exports = Router({ mergeParams: true }).get(
  "/users/:id",
  async (req, res, next) => {
    try {
      const { User } = req.models;
      const user = await User.findById(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
);
