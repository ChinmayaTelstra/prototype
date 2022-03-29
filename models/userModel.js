const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },

        firstName: { type: String , default:''},
        lastName: { type: String , default:''},
        email: { type: String , default:''},
        phoneNumber: { type: String , default:''},
        userStatus: { type: String , default:''},

        Myorders: [],
    },
    { timestamps: true }
);

const userModal = new mongoose.model("users", userSchema);

module.exports = userModal;
