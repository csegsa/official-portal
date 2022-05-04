import firebaseAdmin from "../services/firebase.js";
import { isAdmin} from '../controllers/common.js';

export  async function authenticate (req, res, next) {
    try {
        // console.log("Authenticating...");
        const firebaseToken = req.headers.authorization?.split(" ")[1];
        let firebaseUser;
        if (firebaseToken) {
            // console.log("firebaseToken", firebaseToken);
            firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
        }
        if (!firebaseUser) {
            return res.sendStatus(401);
        }
        req.user = firebaseUser;
        // console.log("Authenticated");
        next();
    } catch (err) {
        res.sendStatus(401);
    }
}

export async function authorizeRole(req, res, next) {
    try{
        // console.log("Authorizing ...");
        const isEligible = await isAdmin(req.user.uid);
        if(isEligible){
            next();
        }else{
            res.sendStatus(401).message("Unauthorized");
        }
        // console.log("Authorized");
    }
    catch(err){
        res.sendStatus(401);
    }
}