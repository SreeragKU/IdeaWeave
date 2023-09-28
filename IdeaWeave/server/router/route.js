import { Router } from "express";
const router = Router();

//import all controllers
import * as controller from '../controllers/appController.js'
import {registerMail} from '../controllers/mailer.js'
import Auth, {localVariables} from "../middleware/auth.js";


//Post Methods
router.route('/register').post(controller.register);       // register user
router.route('/registerMail').post(registerMail);   // send mail
router.route('/authenticate').post((req, res) => res.end());   // authenticate user
router.route('/login').post(controller.verifyUser, controller.login);          // login in app


//Get Methods
router.route('/user/:username').get(controller.getUser);      // user with username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);          // generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP);           // verify generated OTP
router.route('/createResetSession').get(controller.createResetSession);  // reset all variables

//Put Methods
router.route('/updateuser').put(Auth, controller.updateUser);     // update user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);   // reset password

export default router;