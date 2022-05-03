import Event from '../models/events.js';
import Roles from '../models/roles.js';

export const getAllEvents = async () => {
  try {
    return await Event.find({});
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getRolesByEmail = async (email) => {
  try {
    return await Roles.find({ email: email });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
