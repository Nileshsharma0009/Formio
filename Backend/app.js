import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

app.use(cookieParser());

app.get("/health", (req, res) => {
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