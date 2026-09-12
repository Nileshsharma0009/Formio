import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log files
const appLogStream = fs.createWriteStream(
  path.join(__dirname, "app.log"),
  { flags: "a" }
);

const errorLogStream = fs.createWriteStream(
  path.join(__dirname, "error.log"),
  { flags: "a" }
);

// Application logger
export const logger = {
  info: (message) => {
    const log = `[${new Date().toISOString()}] INFO: ${message}`;

    console.log(log);
    appLogStream.write(log + "\n");
  },

  error: (message) => {
    const log = `[${new Date().toISOString()}] ERROR: ${message}`;

    console.error(log);
    errorLogStream.write(log + "\n");
  },
};

// Morgan HTTP logger
export const httpLogger = morgan(
  process.env.NODE_ENV === "production"
    ? "combined"
    : "dev",
  {
    stream: {
      write: (message) => {
        // Print HTTP request in terminal
        process.stdout.write(message);

        // Save HTTP request in app.log
        appLogStream.write(message);
      },
    },
  }
);