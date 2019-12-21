const router = require('express').Router();
const mongoose = require("mongoose");
const userScheme = require('../models/user');
const bcrypt = require('bcryptjs')
const User = mongoose.model("User", userScheme);


router.post('/register', async (req,res) => {
    //VALIDATE
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    errors = [];
    if (req.body.email.length < 6) {
        errors.push('Длина поля "Почта" должна быть больше 6 символов')
    }
    if (reg.test(req.body.email)  == false){
        errors.push('Почта не валидна');
    }
    if (req.body.username.length < 6) {
        errors.push('Длина поля "Имя пользователя" должна быть больше 6 символов');
    }
    if (req.body.name.length < 2) {
        errors.push('Длина поля "Имя" должна быть больше 2 символов')
    }
    if (req.body.password.length < 6) {
        errors.push('Длина поля "Пароль" должна быть больше 6 символов')
    }
    if (req.body.password != req.body.pass_confirm) {
        errors.push('Пароли не совпадают');
    }
    
    const emailExist = await User.findOne({email: req.body.email});
    const usernameExist = await User.findOne({username: req.body.username});
    if (emailExist) {
        errors.push('Пользователь с данной почтой уже зарегестрирован')
    } else if (usernameExist) {
        errors.push('Пользователь с данным ником уже зарегестрирован')
    }
    if (errors.length == 0) {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const user = new User ({
            email: req.body.email,
            username: req.body.username,
            name: req.body.name,
            password: hashPass
        });
        try{
            const savedUser = await user.save();
        }catch{
            errors.push('Что-то пошло не так, попробуйте позже')
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

router.post('/auth', (req,res) => {

    res.send(req.body)
})

module.exports = router;