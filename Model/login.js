const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//creating a schema
const loginSchema = new Schema({
    username:{
        type: String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
});
mongoose.model('login',loginSchema);