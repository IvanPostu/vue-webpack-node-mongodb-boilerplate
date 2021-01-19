const express = require("express");
// const models = require("../datasource/models");
const router = require("../routes/createRouter")();

module.exports = ({ logger, models }) => {
  return express()
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

      logger.info(`${req.method} request from: ${req.ip} to ${req.url}`);

      return next();
    })
    .use("/api", router)
    .use((error, req, res, next) => {
      logger.error(error, error);
      res.status(error.status || 500).json({ error });
    });
};
