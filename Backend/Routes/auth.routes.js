import express from "express" ;
import { authMiddleware } from "../middleware/Auth/auth.middleware.js";

import {syncUser , getMe } from "../controller/auth.controller.js" ;

const router = express.Router();


router.post("/sync" ,authMiddleware , syncUser) ;
router.get("/me" , authMiddleware , getMe);


export default router ;