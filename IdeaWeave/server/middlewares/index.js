import expressJwt from 'express-jwt';
import config from '../config';
import User from '../models/user';

export const requireSignin = expressJwt({
    secret: config.JWT_SECRET,
    algorithms: ['HS256'],
  });

export const isAdmin = async (req, res, next)  => {
    try {
        const user = await User.findById(req.user._id);
        if(user.role !== "Admin"){
            return res.status(401).send("Unauthorized");
        } else{
            next();
        }

    } catch (error) {
        console.log(error);
    }
}
  