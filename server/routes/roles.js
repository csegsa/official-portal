import express from "express";

import { getRolesByEmail, updateRole, deleteRole, createRole, getAllRoles } from '../controllers/roles.js';
import { authenticate, authorizeRole } from '../middleware/authenticate.js';

const router = express.Router();
router.get('/all', authenticate, authorizeRole, getAllRoles);
router.get("/", authenticate, getRolesByEmail);
router.post("/", authenticate, authorizeRole, createRole);
router.delete("/:id",authenticate, authorizeRole, deleteRole);
router.patch("/", authenticate, authorizeRole, updateRole);


export default router;
