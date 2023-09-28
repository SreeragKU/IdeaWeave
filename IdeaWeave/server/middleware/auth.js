import jwt from "jsonwebtoken";
import ENV from '../config.js'

//Auth middleware
export default async function Auth(req, res, next){
    try {
        //access header to validate
        const token = req.headers.authorization.split(" ")[1]; //split to get only token not also "Bearer"

        //retrieve user details
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);

        req.user = decodedToken;
        
        next()

    } catch (error) {
        res.status(401).json({ error : "Authentication Failed! "})
    }
}