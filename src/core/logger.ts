/**
 * Creates a logger instance using the Winston library.
 *
 * @module logger
 * @default
 * @description This module exports a logger instance that can be used for logging messages.
 */

import { createLogger, transports, format } from "winston";
import { APP_ENVIRONMENT, APP_NAME } from "./config";

/**
 * The log level used by the logger instance.
 *
 * @constant {string}
 * @default 'debug' for development environment, 'warn' otherwise
 */
const logLevel = APP_ENVIRONMENT === "development" ? "debug" : "warn";

/**
 * The log format used by the logger instance.
 *
 * @constant {object}
 */
const logFormat = format.combine(
  format.colorize(),
  format.label({ label: APP_NAME }),
  format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  })
);

/**
 * The logger instance created using Winston library.
 *
 * @constant {object}
 */
const logger = createLogger({
  level: logLevel,
  format: logFormat,
  transports: [new transports.Console()],
});

export default logger;
