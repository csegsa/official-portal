import firebaseAdmin from "../services/firebase.js";

export default async function (req, res, next) {
    try {
        console.log("Authenticating...");
        const firebaseToken = req.headers.authorization?.split(" ")[1];
        let firebaseUser;
        if (firebaseToken) {
            console.log("firebaseToken", firebaseToken);
            firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
        }
        if (!firebaseUser) {
            // Unauthorized
            return res.sendStatus(401);
        }
        req.user = firebaseUser;
        console.log("Authenticated");
        next();
    } catch (err) {
        res.sendStatus(401);
    }
}