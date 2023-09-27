import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';
import { Jwt } from "jsonwebtoken";

export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // Check if the username exists
        const existUsername = await UserModel.findOne({ username });
        if (existUsername) {
            return res.status(400).json({ error: "Please use a unique username" });
        }

        // Check if the email exists
        const existEmail = await UserModel.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ error: "Please use a unique email" });
        }

        if (password) {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || '',
                email
            });

            // Save the user and handle errors
            user.save()
                .then(result => res.status(201).json({ msg: "User registered successfully" }))
                .catch(error => {
                    console.error("Error saving user:", error);
                    res.status(500).json({ error: "Internal server error" });
                });
        }
    } catch (error) {
        console.error("Error in registration:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function login(req, res){
    const { username, password } = res.body;

    try{
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    .then(passwordCheck =>{
                        if(!passwordCheck) return res.status(400).send({ error: "Don't have Password"});

                        //create jwt token
                        const token = jwt.sign({
                                        userId: user._id,
                                        username : user.username
                                    }, 'secret', {expiresIn : "24h"});
                        return res.status(200).send({
                            msg: "Login Successful",
                            username: user.username,
                            token
                        });
                    })
                    .catch(error =>{
                        return res.status(400).send({ error: "Password does not match"})
                    })
            })
            .catch (error => {
                return res.status(404).send({ error : "Username not Found"})
            })
    } catch (error){
        return res.status(500).send({error})
    }
}

export async function getUser(req, res){
    res.json('getUser route');
}

export async function generateOTP(req, res){
    res.json('generateOTP route');
}

export async function verifyOTP(req, res){
    res.json('verifyOTP route');
}

export async function createResetSession(req, res){
    res.json('createResetSession route');
}

export async function resetPassword(req, res){
    res.json('resetPassword route');
}

export async function updateUser(req, res){
    res.json('updateUser route');
}