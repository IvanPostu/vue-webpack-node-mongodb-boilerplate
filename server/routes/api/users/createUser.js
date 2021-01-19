const Router = require("express").Router;

module.exports = Router({ mergeParams: true }).post(
  "/users",
  async (req, res, next) => {
    try {
      const { User } = req.models;
      let user = new User(req.body);
      user = await user.save();
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
);
