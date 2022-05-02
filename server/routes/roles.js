import express from "express";

import {getRoles} from "../controllers/roles.js";

const router = express.Router();

router.get("/", getRoles);


export default router;
