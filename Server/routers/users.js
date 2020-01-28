const router = require('express').Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require('bcryptjs')

router.post('/users/:id', async (req,res) => {
    const user = await User.findById(req.params.id);
    res.send(user)
})

router.put('/users/:id', async (req, res) => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const errors = [];
    const user = await User.findById(req.body.id);
    const email = req.body.email === undefined ? user.email : req.body.email;
    if (email < 6) {
        errors.push('Email field must be longer than 6 characters')
    }
    if (reg.test(email)  == false){
        errors.push('Email invalid');
    }
    if (req.body.username.length < 6) {
        errors.push('Username field must be longer than 6 characters');
    }
    
    if (req.body.name.length < 2) {
        errors.push('Name field must be longer than 6 characters')
    }
    if (req.body.lastname.length < 6) {
        errors.push('Last name field must be longer than 6 characters');
    }
    if ((req.body.password.length < 6) && (req.body.password.length !== 0)){
        errors.push('Password field must be longer than 6 characters')
    }
    if (req.body.pass_confirm !== req.body.new_pass) {
        errors.push('Passwords do not match');
    }
    const emailExist = User.findOne({email: email})
    if ((emailExist) && (req.body.email !== undefined)) {
        errors.push('A user with this email is already registered')
    } 
    const usernameExist = await User.findOne({'username': req.body.email})
    if ((usernameExist) && (req.body.username !== undefined)) {
        errors.push('A user with this username is already registered')
    }
    if (req.body.password.length !== 0){
        bcrypt.compare(req.body.password, user.password, (err, result) =>  {
            if (result !== true) {
                errors.push('Wrong password');
            }
        })
    }
    
    if (errors.length === 0) {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.new_pass.length !== 0 ? req.body.new_pass : user.password, salt);
        user.overwrite({
            'email': email,
            'username': req.body.username,
            'name': req.body.name,
            'lastname': req.body.lastname,
            'password': hashPass,
        })
        await user.save();
        return res.json({user: user, errors: []})
    }
    return res.json({errors: errors})
    
})


module.exports = router;