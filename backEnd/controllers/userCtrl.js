const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");

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
const loginController = async (req, res) => { };

module.exports = { loginController, registerController };
