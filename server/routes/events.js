import express from "express";

import {
    getEventById,
    getEvents,
    createEvent, deleteEvent,
    addAttendee

} from '../controllers/events.js';
import {authenticate} from '../middleware/authenticate.js';

const router = express.Router();

router.get("/", getEvents);
router.post("/", authenticate, createEvent);
router.post("/remove/:id", authenticate, deleteEvent);
router.get("/:id", getEventById);
router.post("/addAttendee", authenticate, addAttendee)

export default router;
