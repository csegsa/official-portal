import Event from '../models/events.js';
import Roles from '../models/roles.js';

export const getAllEvents = async () => {
  return Event.find({});
};

export const getRolesByEmail = async (email) => {
    return Roles.find({ email: email });
};

export const storeEvent = async (event) => {
  return event.save();
};