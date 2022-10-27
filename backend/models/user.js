// import mongoose 
const mongoose = require('mongoose');

// generate schema 
const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password: String,
    tel : String, 
    role:String,
    speciality : String,
    experience : String,
    dateOfBirth : String,
});


// generate model user
const user = mongoose.model('User',userSchema);

// export model 
module.exports = user;