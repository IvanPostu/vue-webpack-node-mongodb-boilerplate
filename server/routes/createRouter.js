const glob = require("glob");
const Router = require("express").Router;

module.exports = () =>
  glob
    .sync("**/*.js", { cwd: `${__dirname}/` })
    .map((filename) => {
      return require(`./${filename}`);
    })
    .filter((router) => {
      const isRouter = Object.getPrototypeOf(router) === Router;
      return isRouter;
    })
    .reduce(
      (rootRouter, router) => rootRouter.use(router),
      Router({ mergeParams: true })
    );
