import Roles from '../models/roles.js';
import {getRoleByEmail, deleteRoleById} from '../services/database.js';

export const getRolesByEmail = (req, res) => {
  console.log(req.query)
  Roles.findOne({email: req.query.email}, (err, roles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(roles);
    }
  });

};

export const getAllRoles = (req, res) => {
  Roles.find({}, (err, roles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(roles);
    }
  });
};


export const createRole = async (req, res) => {
  try{
    const existingRole = await getRoleByEmail(req.body.email);
    if(existingRole) {
      res.status(400).send({ message: `A Role already exists for ${req.body.email}` });
      return
    }
    const role = new Roles(req.body);
    const newRole = await role.save();
    res.status(201).send(newRole);
  }
  catch(err){
    res.status(500).send(err);
  }
};

export const deleteRole = async (req, res) => {

  try{
    const role = await deleteRoleById(req.params.id);
    if(role.deletedCount > 0) {
      console.log(role);
      res.status(200).send(role);
    }
    else{
      res.status(404).send({ message: `Role not found for ${req.body.email}` });
    }
  }
  catch(err){
    res.status(500).send(err);
  }
};

export const updateRole = (req, res) => {
  Roles.findOneAndUpdate({email: req.user.email}, req.body, {returnOriginal: false}, (err, role) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(role);
    }
  });
};