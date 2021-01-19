const express = require("express");
// const models = require("../datasource/models");
const expressWinston = require("express-winston");
const router = require("../routes/createRouter")();

module.exports = ({ logger, models }) => {
  return express()
    .use(
      expressWinston.logger({
        winstonInstance: logger,
        msg:
          "{{res.statusCode}} {{req.method}} {{req.url}} {{res.responseTime}}ms",
        meta: false,
      })
    )
    .use(express.urlencoded({ extended: true }))
    .use(
      express.json({
        inflate: true,
        limit: "100kb",
        reviver: null,
        strict: true,
        type: "application/json",
        verify: undefined,
      })
    )
    .use((req, res, next) => {
      req.base = `${req.protocol}://${req.get("host")}`;
      req.logger = logger;
      req.models = models;

      return next();
    })
    .use("/api", router)
    .use((error, req, res, next) => {
      logger.error(error, error);
      res.status(error.status || 500).json({ error });
    });
};
