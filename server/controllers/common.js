import Roles from '../models/roles.js';

export async function isAdmin(user_email){
    let role = await Roles.findOne({
        where: {
            user_email: user_email,
            role: 'admin'
        }
    });
    return !!role;

}