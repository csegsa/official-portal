import express from "express";

import {
    getEventById,
    getEvents,
    createEvent, deleteEvent

} from '../controllers/events.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", getEvents);
router.post("/", authenticate, createEvent);
router.post("/remove/:id", authenticate, deleteEvent);
router.get("/:id", getEventById);

export default router;
