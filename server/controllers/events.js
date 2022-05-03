import Event from "../models/events.js";
import { getAllEvents, storeEvent } from '../services/database.js';
export const getEvents = async (req, res) => {

    try{
        const events = await getAllEvents();
        res.json(events).status(200);
    }
    catch(err){
        res.json({message: err}).status(500);
    }

};

function constructEventObject(req) {
    const event = new Event();
    event.name = req.body.name;
    event.description = req.body.description;
    event.start_time = new Date(req.body.start_time);
    event.end_time = new Date(req.body.end_time);
    event.location = req.body.location;
    return event;
}

export const deleteEvent = async (req, res) => {
    try{
        console.log(`Delete event ${req.params.id}`);
        const event = await Event.findByIdAndDelete(req.params.id);
        res.json(event).status(200);
    }
    catch(err){
        res.json({message: err}).status(500);
    }
};

export const createEvent = async (req, res) => {
    const event = constructEventObject(req);
    try {
        const savedEvent = await storeEvent(event);
        res.status(201).json(savedEvent).send();
        console.log(`Event ${savedEvent._id} created successfully`);
    } catch (err) {
        res.statusCode = 400
        res.send(err);
        console.log(`Error creating event ${err}`);
    }
};

