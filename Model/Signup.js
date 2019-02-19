const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating a schema
const SignupSchema = new Schema({
    firstname:{
        type: String,
        required : true
    },
    lastname:{
        type:String,
        required : true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    
    },
});
mongoose.model('signup',SignupSchema);