require("dotenv").config();

const logger = require("./logger");
const { connectToMongoDB } = require("./datasource/connector");
const models = require("./datasource/models");
const server = require("http").createServer();
const app = require("./app/createExpressApp")({ logger, models });

const PORT = process.env.PORT || 8000;

async function main() {
  try {
    await connectToMongoDB({ logger });
    server
      .on("request", app)
      .on("listening", function () {
        const addr = this.address();
        const bind =
          typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
        logger.info(`Listening on ${bind}`);
      })
      .on("error", function (error) {
        if (error.syscall !== "listen") throw error;
        const addr = this.address() || { port };
        const bind =
          typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
        switch (error.code) {
          case "EACCES":
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
          case "EADDRINUSE":
            logger.error(`${bind} is already in use`);
            process.exit(1);
          default:
            throw error;
        }
      })
      .listen(PORT);
  } catch (error) {
    process.exit(-1);
  }
}

main();
