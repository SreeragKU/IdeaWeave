import UserModel from '../model/User.model.js';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import ENV from '../config.js';

//middleware for verify user
export async function verifyUser(req, res, next){
    try{
        const { username } = req.method == "GET" ? req.query : req.body;

        //check the user
        let exist = await UserModel.findOne({ username });
        if(!exist) return res.status(404).send({ error : "Can't find User!"});
        next();
    }catch (error) {
        return res.status(404).send({error : "Authentication Error"});
    }
}

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

export async function login(req, res) {
    const { username, password } = req.body;

    try {
        UserModel.findOne({ username })
            .then(user => {
                if (!user) {
                    return res.status(404).send({ error: "Username not Found" });
                }

                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (!passwordCheck) {
                            return res.status(400).send({ error: "Password does not match" });
                        }

                        // Create jwt token
                        const token = jwt.sign({
                            userId: user._id,
                            username: user.username
                        }, ENV.JWT_SECRET, { expiresIn: "24h" });

                        return res.status(200).send({
                            msg: "Login Successful",
                            username: user.username,
                            token
                        });
                    })
                    .catch(error => {
                        return res.status(500).send({ error: "Internal server error" });
                    });
            })
            .catch(error => {
                return res.status(500).send({ error: "Internal server error" });
            });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

export async function getUser(req, res) {
    const { username } = req.params;

    try {
        if (!username) return res.status(400).json({ error: "Invalid Username" });

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Exclude the password field from the response
        const { password, ...rest } = Object.assign({}, user.toJSON());

        return res.status(200).json(rest);
    } catch (error) {
        console.error("Error in getUser:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.query.id;

        if (!id) {
            return res.status(401).send({ error: "User not Found!" });
        }

        const body = req.body;

        // Use async/await to handle asynchronous operations
        const updatedUser = await UserModel.updateOne({ _id: id }, body);

        if (updatedUser.nModified === 0) {
            return res.status(404).send({ error: "User not found or no changes made." });
        }

        return res.status(200).send({ msg: "Record Updated!" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
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

