const Router = require("express").Router;

module.exports = Router({ mergeParams: true }).put(
  "/users/:id",
  async (req, res, next) => {
    try {
      const { User } = req.models;
      const newUserData = req.body;

      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: newUserData },
        { useFindAndModify: false },
        function (err) {}
      );

      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
);
