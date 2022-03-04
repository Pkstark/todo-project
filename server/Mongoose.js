const mongoose = require ('mongoose');

const united = mongoose.Schema;

const UserData = new united ({
    username :  String,
    email : String,
    password : String
})

const use = mongoose.model("user",UserData);

module.exports = use;