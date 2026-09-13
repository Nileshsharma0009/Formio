import express from "express" ;
import { authMiddleware } from "../middleware/Auth/auth.middleware";

import {syncUser} from "../controller/auth.controller" ;

const router = express.Router();


router.post("/sync" ,authMiddleware , syncUser) ;

export default router ;