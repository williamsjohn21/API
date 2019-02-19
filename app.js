const express = require('express');
let mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const port = 5000;

// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost/server', {
    //useMongoClient:true
     useNewUrlParser: true 
})
.then(() => console.log('mongoDB connected ...'))
.catch(err => console.log(err));

//load signup model
require('./Model/Signup');
const Signup =mongoose.model('signup');

//load login model
require('./Model/login');
const login = mongoose.model('login');


//load dashboard model
require('./Model/dashboard');
//const dashboard = mongoose.model('dashboard');


//process singup route
app.post('/Model/signup',(req, res) =>{
    let errors = [];
    if(!req.body.firstname){
        errors.push({text:'please kindly enter firstname'});
    }
    
    if(!req.body.lastname){
        errors.push({text:'please kindly enter lastname'});
    }

    if(!req.body.email){
        errors.push({text:'please kindly enter email'});
    }

    if(!req.body.password){
        errors.push({text:'please kindly enter password'});
    }
    if(errors.length > 0){
        res.json({
            errors: errors,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword,
            address:req.body.confirmpassword
        });
    }else{
        const newUser = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password,
            confirmpassword : req.body.confirmpassword,
            address : req.body.confirmpassword
        }
        new Signup(newUser)
        .save()
        .then(Signup => {
            res.redirect('/Signup');
        })
    }
});

// process login form route

app.get('/Model/dashboard',(req, res) =>{  

        login.find().then(login => {
            res.json ({
             userdetails : login, 
            })

        })
});

// process login form route

app.post('/Model/login',(req, res) =>{
    let errors = [];
    if(!req.body.username){
        errors.push({text:'please kindly enter username'});
    }
    
    // if(!req.body.email){
    //     errors.push({text:'please kindly enter email'});
    // }


    if(errors.length > 0){
        res.json({
            errors: errors,
            username:req.body.newUser,
        });
    }else{
        const newUser = {
            username : req.body.username,
            password : req.body.password,
            address: req.body.address
        }
        new login(newUser)
        .save()
        .then(login => {
            res.json ({
             userdetails : login, 
            })

        })
    }
});
//process
aon started${port}`);

});