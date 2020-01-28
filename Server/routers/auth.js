const router = require('express').Router();
const mongoose = require("mongoose");
const userScheme = require('../models/user');
const bcrypt = require('bcryptjs')
const User = mongoose.model("User", userScheme);


router.post('/register', async (req,res) => {
    //VALIDATE
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const errors = [];
    if (req.body.email.length < 6) {
        errors.push('Email field must be longer than 6 characters')
    }
    if (reg.test(req.body.email)  == false){
        errors.push('Email invalid');
    }
    if (req.body.username.length < 6) {
        errors.push('Username field must be longer than 6 characters');
    }
    
    if (req.body.name.length < 2) {
        errors.push('Name field must be longer than 2 characters')
    }
    if (req.body.username.length < 6) {
        errors.push('Last name field must be longer than 2 characters');
    }
    if (req.body.password.length < 6) {
        errors.push('Password field must be longer than 6 characters')
    }
    if (req.body.password != req.body.pass_confirm) {
        errors.push('Passwords do not match');
    }
    
    const emailExist = await User.findOne({email: req.body.email});
    const usernameExist = await User.findOne({username: req.body.username});
    if (emailExist) {
        errors.push('A user with this email is already registered')
    } else if (usernameExist) {
        errors.push('A user with this username is already registered')
    }
    if (errors.length == 0) {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const user = new User ({
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            lastname: req.body.lastname,
            password: hashPass
        });
        try{
            const savedUser = await user.save();
        }catch(err){
            errors.push('Something went wrong, try again later');
        }
    }
    if (errors.length == 0) {
        res.status(200).json({
            status: 'Successfully',
            errors: []
    })
    } else {
        res.json({
            errors: errors
        });
    }
})

router.post('/auth', async (req,res) => {
    let user = await User.findOne({'email': req.body.email})
    if (user === null) {
        user = await User.findOne({'username': req.body.email})
        if (user === null) {
            return res.send('Wrong login or password')
        }
    }
    bcrypt.compare(req.body.password, user.password, (err, result) =>  {
        if (result === true) {
            user.password = req.body.password;
            return res.send(user);
        } else {
            return res.send('Wrong password')
        }
    })
})

module.exports = router;