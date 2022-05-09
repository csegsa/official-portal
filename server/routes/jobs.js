import express from "express";

import {
    getJobs,
    createJob, deleteJob

} from '../controllers/jobs.js';
import { authenticate, authorizeRole } from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", getJobs);

router.post("/", authenticate, authorizeRole ,createJob);

router.delete("/:id", authenticate, authorizeRole, deleteJob);

export default router;
