import Roles from '../models/roles.js';
import {isAdmin} from './common.js';

export const getRoles = (req, res) => {
  console.log(req.query)
  Roles.findOne({email: req.query.email}, (err, roles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(roles);
    }
  });

};


export const createRole = async (req, res) => {
  try{
    const role = new Roles(req.body);
    const isEligible = await isAdmin(req.body.email);
    if(!isEligible){
      res.status(403).send('You are not authorized to create a role');
    }else{
        const newRole = await role.save();
        res.status(201).send(newRole);
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