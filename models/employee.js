const mongoose = require("mongoose");
const Config = require("../config");
const Schema = mongoose.Schema;
const con = mongoose.connect(Config.connectionString);
if (con) {
    console.log("connected")
}
else {
    console.log("not connected")
}
const employeeSchema = new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    employee_id: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
});

module.exports = mongoose.model("employees", employeeSchema);

