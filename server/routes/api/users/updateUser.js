const Router = require("express").Router;
const { User } = require("../../../datasource/models");

module.exports = Router({ mergeParams: true }).put(
  "/users/:id",
  async (req, res, next) => {
    try {
      const newUserData = req.body;
      // console.log(newUserData);
      // const user = await User.findByIdAndUpdate(req.params.id, {
      //   $set: newUserData,

      // });

      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: newUserData },
        { useFindAndModify: false },
        function (err) {}
      );

      res.send(user);
      res.status(201);
    } catch (error) {
      next(error);
    }
  }
);
