const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/myLoginRegisterDB",
            console.log(`db is connected`.yellow.bold)
        );
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;
