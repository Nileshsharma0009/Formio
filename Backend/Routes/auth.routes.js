import express from "express" ;
import { authMiddleware ,verifyToken } from "../middleware/Auth/auth.middleware.js";

import {syncUser , getMe , getUserDocuments} from "../controller/auth.controller.js" ;

const router = express.Router();


router.post("/sync" ,authMiddleware , syncUser) ;
router.get("/me" , authMiddleware , getMe);
router.get(
  "/",
  verifyToken,
  getUserDocuments
);


export default router ;