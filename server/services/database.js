import Event from '../models/events.js';
import Roles from '../models/roles.js';
import Jobs from '../models/jobs.js';

export const getAllEvents = async () => {
  return Event.find({});
};

export const getRoleByEmail = async (email) => {
    return Roles.findOne({ email: email });
};

export const deleteRoleByEmail = async (email) => {
    return Roles.deleteOne({ email: email });
};

export const deleteRoleById = async (id) => {
    return Roles.deleteOne({ _id: id });
};

export const storeEvent = async (event) => {
  return event.save();
};

export const deleteJobById = async (id) => {
  return Jobs.findByIdAndDelete(id)
}