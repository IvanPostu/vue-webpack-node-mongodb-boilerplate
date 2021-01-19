const Router = require("express").Router;

module.exports = Router({ mergeParams: true }).delete(
  "/users/:id",
  async (req, res, next) => {
    try {
      const { User } = req.models;
      const userId = req.params.id;
      const user = await User.findByIdAndDelete(userId);
      const logger = req.logger;

      if (Boolean(user)) {
        res.status(200).send(user);
      } else {
        logger.debug(`User with id ${userId} not found!!!`);
        res.status(417).send("User id is invalid!!!");
      }
    } catch (error) {
      next(error);
    }
  }
);
