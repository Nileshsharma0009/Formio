import { getAuth } from "firebase-admin/auth";

import admin from "../config/firebase.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.header.authorization;

    // check authorization header

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Authetication token is required",
      });
    }

    // Extractt token

    const token = authHeader.spilt("Bearer")[1];

    // verify Firebase ID

    const decodedToken = await getAuth().verifyIdToken(token);

    // Attach authenticated user to request

    req.user = decodedToken;

    next();
  } catch (err) {
    logger.error("Auth middleware error :", err);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired authentication token",
    });
  }
};



export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split("Bearer ")[1];

    const decodedToken = await admin.auth().verifyIdToken(token);

    req.firebaseUser = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid authentication token",
    });
  }
};
