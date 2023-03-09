const mongoose = require("mongoose");

const dbConnection = function() {
    try {
        mongoose.connect(
            "mongodb://127.0.0.1:27017/myLoginRegisterDB",
            console.log(`db is connected`)
        );
    } catch (error) {
        console.error(error);
    }
}

module.exports = dbConnection;
