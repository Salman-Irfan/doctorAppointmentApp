const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
// dotenv configuration
dotenv.config();

JWT_SECRET = process.env.JWT_SECRET || "XYZGHSJ123"

//register callback
const registerController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ success: false, message: "Email and password are required" });
        }
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({ success: false, message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).send({ success: true, message: "User registered successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ success: false, message: `Register Controller ${error.message}` });
    }
};

// login callback
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) { // if user not found
            return res.status(200).send({ success: false, message: "User not found" });
        }
        // decode password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(200).send({ success: false, message: "Invalid Email or Password" });
        }
        console.log(JWT_SECRET); // added line
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
        return res.status(200).send({ success: true, message: "Login successful", token: token });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, message: `Error in Login Controller ${error.message}` });
    }
};


module.exports = { loginController, registerController };
