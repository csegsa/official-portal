import express from "express";

import { getRoles} from '../controllers/roles.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", authenticate, getRoles);


export default router;
