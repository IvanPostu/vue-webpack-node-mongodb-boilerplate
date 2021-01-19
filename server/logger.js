const path = require("path");
const winston = require("winston");
const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      name: "error-file",
      filename: path.join(__dirname, "/../logs/logfile.log"),
      level: "error",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
      json: false,
      maxsize: 104857600,
      maxFiles: 5,
    }),
    new winston.transports.Console({
      name: "debug-console",
      level: "debug",
      handleExceptions: true,
      humanReadableUnhandledException: true,
      exitOnError: true,
      json: false,
      format: combine(label({ label: "DEFAULT" }), timestamp(), myFormat),
    }),
  ],
});

module.exports = logger;
