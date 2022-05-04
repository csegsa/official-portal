import express from "express";

import { getRoles, updateRole, deleteRole, createRole } from '../controllers/roles.js';
import { authenticate, authorizeRole } from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", authenticate, getRoles);
router.post("/", authenticate, authorizeRole, createRole);
router.delete("/",authenticate, authorizeRole, deleteRole);
router.patch("/", authenticate, authorizeRole, updateRole);


export default router;
