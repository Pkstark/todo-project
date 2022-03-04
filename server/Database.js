const mongoose = require("mongoose");

const united = mongoose.Schema;

const UserData = new united({
    username : String,
    text : String
})

const PersonData = mongoose.model("task",UserData);

module.exports = PersonData;