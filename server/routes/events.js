import express from "express";

import {
    getEvents,
    createEvent,

} from "../controllers/events.js";
import authenticate from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", getEvents);

router.post("/", authenticate, createEvent);

export default router;
