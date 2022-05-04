import mongoose from 'mongoose';

const rolesSchema = new mongoose.Schema({
  "role": {
    type: String,
    required: true
  },
  "description": {
    type: String,
    required: true
  },
  "email": {
    type: String,
    required: true
  }
})

const Roles = mongoose.model('Roles', rolesSchema);

export default Roles;