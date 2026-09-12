import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {logger} from "./logs/logger.js"

import { httpLogger } from "./logs/logger.js";

const app = express();

app.use(httpLogger);

app.use(cors());

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);


const url = process.env.BACKEND_URL;
const interval = Number(process.env.RELOAD_INTERVAL) || 30000;



function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      logger.info("website reloded");
    })
    .catch((error) => {
      // console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://formio-eta.vercel.app",
    ],
    credentials: true,
  })
);


app.use(cookieParser());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Docsy server is healthy",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/__ping", (req, res) => {
  res.json({ ok: true });
});

export default app;